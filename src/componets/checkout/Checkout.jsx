import React, { useContext, useState } from 'react'
import Context from '../../context/CartContext'
import '../checkout/checkout.css'
import Swal from 'sweetalert2'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Flex,
    Button,
    Heading,
    Box,
    Image,
} from '@chakra-ui/react'
import { Timestamp, addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        repeatedEmail: '',
        phone: ''
    })
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)

    const { cart, getTotal, clearCart } = useContext(Context)
    const navigate = useNavigate()

    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value
        }))
    }

    const validateForm = () => {
        const errors = {}
        if (!user.name) {
            errors.name = 'Tenés que agregar un nombre'
        } else if (user.name.length < 4) {
            errors.name = 'El nombre debe tener al menos 4 caracteres'
        }

        if (!user.email) {
            errors.email = 'Tenés que agregar un email'
        } else if (!/\S+@\S+\.\S+/.test(user.email)) {
            errors.email = 'El email no es válido'
        }

        if (!user.repeatedEmail) {
            errors.repeatedEmail = 'Tenés que repetir el email'
        } else if (user.email !== user.repeatedEmail) {
            errors.repeatedEmail = 'Los emails no coinciden'
        }

        if (!user.phone) {
            errors.phone = 'Tenés que agregar un teléfono'
        }

        setError(errors)
        return Object.keys(errors).length === 0
    }

    const getOrder = async () => {
        if (!validateForm()) {
            return
        }

        if (cart.length === 0) {
            Swal.fire({
                title: "Carrito vacio!",
                text: `No podes generar la orden con el carrito vacio`,
                icon: "error",
                confirmButtonText: "Aceptar",
            }).then(() => {
                navigate('/')
            })
            return
        }

        setLoading(true)
        let stockSuficiente = true

        try {
            for (const item of cart) {
                const docRef = doc(db, 'productos', item.id)
                const productDoc = await getDoc(docRef)

                if (!productDoc.exists()) {
                    console.log(`El producto ${item.nombre} no existe`)
                    continue
                }

                const currentStock = productDoc.data().stock

                if (currentStock >= item.quantity) {
                    await updateDoc(docRef, {
                        stock: currentStock - item.quantity
                    })
                } else {
                    stockSuficiente = false
                    Swal.fire({
                        title: "Stock insuficiente",
                        text: `No hay suficiente stock del producto ${item.nombre}`,
                        icon: "error",
                        confirmButtonText: "Aceptar",
                    })
                    break
                }
            }

            if (stockSuficiente) {
                const coleccion = collection(db, 'orders')
                const order = {
                    buyer: user,
                    cart: cart,
                    total: getTotal(),
                    fecha: Timestamp.now()
                }
                const orderRef = await addDoc(coleccion, order)

                Swal.fire({
                    title: "Gracias por tu compra!",
                    text: `El número de orden es: ${orderRef.id}`,
                    icon: "success",
                    confirmButtonText: "Ir al inicio",
                }).then(() => {
                    clearCart()
                    navigate('/')
                })
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Flex className='checkout'>

            <Heading>Resumen de la compra</Heading>
            {
                cart.map((prod) => (
                    <Box key={prod.id} className='caja_img'>
                        <p className='name'>{prod.nombre}</p>
                        <Image src={prod.img} className='img' />
                        <p className='precio'> Precio: ${prod.precio}</p>
                        <hr />
                    </Box>
                ))
            }

            <Box className='boxCheckout'>
                <Heading>Datos de facturacion</Heading>
                <FormControl isInvalid={error.name}>
                    <FormLabel>Nombre</FormLabel>
                    <Input
                        type='text'
                        name='name'
                        placeholder='Juan Perez'
                        onChange={updateUser}
                    />
                    {error.name && <FormErrorMessage>{error.name}</FormErrorMessage>}
                </FormControl>
                <FormControl isInvalid={error.email}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type='email'
                        name='email'
                        placeholder='JuanPerez@hotmail.com'
                        onChange={updateUser}
                    />
                    {error.email && <FormErrorMessage>{error.email}</FormErrorMessage>}
                </FormControl>
                <FormControl isInvalid={error.repeatedEmail}>
                    <FormLabel>Repetir email</FormLabel>
                    <Input
                        type='email'
                        name='repeatedEmail'
                        placeholder='JuanPerez@hotmail.com'
                        onChange={updateUser}
                    />
                    {error.repeatedEmail && <FormErrorMessage>{error.repeatedEmail}</FormErrorMessage>}
                </FormControl>
                <FormControl isInvalid={error.phone}>
                    <FormLabel>Teléfono</FormLabel>
                    <Input
                        type='text'
                        name='phone'
                        placeholder='1122334455'
                        onChange={updateUser}
                    />
                    {error.phone && <FormErrorMessage>{error.phone}</FormErrorMessage>}
                </FormControl>
                <Button onClick={getOrder} isLoading={loading}>
                    Finalizar compra
                </Button>
            </Box>
        </Flex>
    )
}

export default Checkout