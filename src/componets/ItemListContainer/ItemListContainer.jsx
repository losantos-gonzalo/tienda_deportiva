import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import '../ItemListContainer/ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { MoonLoader } from 'react-spinners'
import ItemList from '../ItemList/ItemList'
import { db } from '../../config/firebase'
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = ({ title }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)


    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            const coleccion = collection(db, 'productos')
            const queryRef = !categoryId ?
                coleccion
                :
                query(coleccion, where('categoria', '==', categoryId))

            const response = await getDocs(queryRef)

            const productos = response.docs.map((doc) => {
                const newItem = {
                    ...doc.data(),
                    id: doc.id
                }
                return newItem
            })
            setProducts(productos)
            setLoading(false)
        }

        getData()
    }, [categoryId]);


    return (
        <Flex className='productos'>
            <Box className='title'>
                {title}
            </Box>
            <hr />

            {
                loading ?
                    <MoonLoader color="black" className='loading' />
                    :
                    <ItemList products={products} />
            }
        </Flex>
    );
}

export default ItemListContainer;


