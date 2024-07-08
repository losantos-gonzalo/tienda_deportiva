import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { ToastContainer, toast } from 'react-toastify';
import { Box, Button } from '@chakra-ui/react';
import Context from '../../context/CartContext';

const ItemDetail = ({ id, nombre, stock, img, precio, currentQuantity }) => {
    const [cantidad, setCantidad] = useState(0);
    const { addItem } = useContext(Context)

    const maxAvailable = stock - currentQuantity

    const onAdd = (quantity) => {
        const item = {
            id,
            nombre,
            precio,
            stock
        };
        addItem(item, quantity);
        toast(`Agregaste ${quantity} unidades`);
    };

    return (
        <Box className='card'>
            <h2>Detalle de Producto</h2>
            <hr />

            <div className='cajaPadre cajaItemDetail'>
                <Box className='contenedor'>
                    <img
                        className='imagen'
                        src={img}
                        alt={nombre}
                    />
                    <p className='nombre'>{nombre}</p>
                    <p className='descrip'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, ipsum.</p>
                    <p className='precio'>${precio}</p>

                    <p>Stock: ${stock}</p>

                    <p>Cantidad actual en el carrito: {currentQuantity}</p>

                </Box>
            </div>

            <ItemCount stock={stock} valorInicial={1} onAdd={onAdd} maxAvailable={maxAvailable} />
            <ToastContainer />
        </Box>
    );
};

export default ItemDetail;

