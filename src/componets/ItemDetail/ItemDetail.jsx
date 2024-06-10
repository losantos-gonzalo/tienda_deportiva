import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import { Box } from '@chakra-ui/react';

const ItemDetail = ({ nombre, stock, img, precio }) => {

    const onAdd = (quantity) => {
        toast(`Agregaste ${quantity} unidades`)
    }

    return (
        <Box className='card'>
            <h2>Detalle de Producto</h2>
            <hr />

            <div className='cajaPadre cajaItemDetail'>
                <Box className='contenedor'>
                    <img
                        className='imagen'
                        src={img} />

                    <p className='nombre'>{nombre}</p>

                    <p className='descrip'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, ipsum.</p>
                    <p className='precio'>${precio}</p>

                </Box>
            </div>

            <ItemCount stock={stock} valorInicial={1} onAdd={onAdd} />
            <ToastContainer />
        </Box>
    )
}

export default ItemDetail
