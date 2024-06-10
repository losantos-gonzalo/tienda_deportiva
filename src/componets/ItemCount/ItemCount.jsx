import { Button, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'

const ItemCount = ({ stock, valorInicial, onAdd }) => {

    const [count, setCount] = useState(valorInicial)

    const incrementar = () => {
        count < stock && setCount(count + 1)
    }
    const descrementar = () => {
        count > valorInicial && setCount(count - 1)
    }
    return (
        <Flex className='Count'>
            <div className='Count__btn'>
                <Button colorScheme='blue' onClick={descrementar}>-</Button>
                {count}
                <Button colorScheme='blue' onClick={incrementar}>+</Button>
            </div>

            <Button className='btnIncrementarDescrementar' onClick={() => onAdd(count)}>Agregar al Carrito</Button>
        </Flex>
    )
}

export default ItemCount
