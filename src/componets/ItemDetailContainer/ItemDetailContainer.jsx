import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'
import { MoonLoader } from 'react-spinners'
import ItemDetail from '../ItemDetail/ItemDetail'
import Context from '../../context/CartContext'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const { productoId } = useParams()
    const {currentQuantity} = useContext(Context)

    const { addItem } = useContext(Context)

    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {

            const queryRef = doc(db, 'productos', productoId)

            const response = await getDoc(queryRef)

            const newItem = {
                ...response.data(),
                id: response.id
            }

            setProducto(newItem)
            setLoading(false)
        }
        getData()
    }, [])

    return (

        <>
            {
                loading ?
                    <MoonLoader color="black" className='loading' />
                    :
                    <ItemDetail {...producto} currentQuantity={currentQuantity(productoId)}/>
            }
        </>
    )
}

export default ItemDetailContainer
