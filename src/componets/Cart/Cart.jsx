import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Context from '../../context/CartContext'
import '../Cart/cart.css'
import { DeleteIcon } from '@chakra-ui/icons'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeItem, clearCart, getTotal, incrementarItem, decrementarItem } = useContext(Context)

    if (cart.length === 0) {
        return (
            <Flex direction={'column'} justify={'center'} align={'center'}>
                <Heading className='fallo-compra'>Todavía no agregaste productos al carrito</Heading>
                <hr />
                <Link to='/' className='link'>Ver productos</Link>
            </Flex>
        )
    } else {
        return (
            <div>
                <Heading>Carrito de Compras</Heading>

                <TableContainer>
                    <Table variant='striped' className='color'>
                        <Thead>
                            <Tr>
                                <Th>Nombre</Th>
                                <Th>Cantidad</Th>
                                <Th></Th>
                                <Th>Precio</Th>
                                <Th>Subtotal</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {
                                cart.map((prod) => (
                                    <Tr key={prod.id}>
                                        <Td>{prod.nombre}</Td>
                                        <Td>{prod.quantity}</Td>

                                        <Td>
                                            <Button onClick={() => decrementarItem(prod.id)}>-</Button>
                                            {prod.quantity}
                                            <Button onClick={() => incrementarItem(prod.id, prod.stock)}>+</Button>
                                        </Td>

                                        <Td>{prod.precio}</Td>
                                        <Td>{prod.precio * prod.quantity}</Td>
                                        <Td>
                                            <Button onClick={() => removeItem(prod.id)} >
                                                <MdDeleteOutline />
                                            </Button>
                                        </Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>

                        <Tfoot>
                            <Tr>
                                <Td>
                                    <Button onClick={() => clearCart()} className='btn'>
                                        Vaciar Carrito
                                        <DeleteIcon />
                                    </Button>
                                </Td>
                                <Td colSpan="3">
                                    <Heading size="md">Total: {getTotal()}</Heading>
                                </Td>
                                <Td>
                                    <Link to='/checkout'>Finalizar Compra</Link>
                                </Td>
                            </Tr>
                        </Tfoot>

                    </Table>
                </TableContainer>
            </div>
        )
    }
}

export default Cart
