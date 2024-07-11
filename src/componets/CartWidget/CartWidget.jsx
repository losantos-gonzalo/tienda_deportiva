import { FiShoppingCart } from 'react-icons/fi';
import { Box } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Context from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { getQuantity } = useContext(Context)

    return (

        <Box m={2} display="flex" alignItems="center" className='box'>
            <span>{getQuantity() > 0 && getQuantity()}</span>
            <Link to='/cart'>
                <Box as={FiShoppingCart} boxSize={6} color="primary" ml={2} />
            </Link>
        </Box>

    )
}

export default CartWidget
