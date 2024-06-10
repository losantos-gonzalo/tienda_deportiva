import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getProducts, productsByCategory } from '../../data/asyncMock'
import '../ItemListContainer/ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { MoonLoader } from 'react-spinners'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ title }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true)

        const fetchData = categoryId ? productsByCategory(categoryId) : getProducts();
        fetchData
            .then((data) => setProducts(data))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [categoryId]);

    console.log(products);

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


