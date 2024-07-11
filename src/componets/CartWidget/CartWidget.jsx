import { FiShoppingCart } from 'react-icons/fi';//provando icon
import { Box } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Context from '../../context/CartContext'
import { Link } from 'react-router-dom'
import '../CartWidget/cartwidget.css'

const CartWidget = () => {
    const { getQuantity } = useContext(Context)

    return (

        <Box m={2} className='box'>
            <span>{getQuantity() > 0 && getQuantity()}</span>
            <Link to='/cart'>
                <Box as={FiShoppingCart} boxSize={6} color="primary" />
            </Link>
        </Box>
    )
}

export default CartWidget
