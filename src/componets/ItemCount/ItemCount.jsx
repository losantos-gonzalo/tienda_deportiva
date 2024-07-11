import { Button, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({ stock, valorInicial, onAdd, maxAvailable }) => {
    const [count, setCount] = useState(valorInicial);
    const [isAdded, setIsAdded] = useState(false);

    const incrementar = () => {
        count < maxAvailable && setCount(count + 1);
    };

    const decrementar = () => {
        count > valorInicial && setCount(count - 1);
    };

    const handleAdd = () => {
        onAdd(count);
        setIsAdded(true);
    };

    return (
        <Flex className='Count'>

            {!isAdded && (

                <div className='Count__btn'>
                    <Button
                        colorScheme='blue' onClick={decrementar} className='btn'>
                        -</Button>
                    <p className='contador'>{count}</p>
                    <Button
                        colorScheme='blue' onClick={incrementar} className='btn'>
                        +</Button>
                </div>
            )}

            <div className='contenedorBtn'>
                <Button className='agregarCarrito' onClick={handleAdd}>Agregar al Carrito</Button>
                <Button className='btn'><Link to='/'>Seguir comprando</Link></Button>
            </div>

            <Button>
                <Link to='/cart' className='btn'>
                    Ir al Carrito
                </Link>
            </Button>
        </Flex>
    );
};

export default ItemCount;

