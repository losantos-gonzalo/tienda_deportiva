import { MoonIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Context from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { getQuantity } = useContext(Context)

    return (

        <Box m={2}>
            <Link to='/cart'><MoonIcon /></Link>
            <span>{getQuantity() > 0 && getQuantity()}</span>
        </Box>
    )
}

export default CartWidget
