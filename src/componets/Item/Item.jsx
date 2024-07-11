import React from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import '../Item/Item.css'
import { Link } from 'react-router-dom';

const Item = ({ nombre, precio, img, id, stock }) => {
  return (
    <div className='cajaPadre'>
      <Box className='contenedor'>
        <img
          className='imagen'
          src={img} />

        <p className='nombre'>{nombre}</p>

        <p className='descrip'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, ipsum.</p>
        <p className='precio'>${precio}</p>
        <p className='precio'>Stock: {stock}</p>

        {stock > 0 ? (
          <Button className='btnVer'>
            <Link to={`/producto/${id}`}>
              Ver más
            </Link>
          </Button>
        ) : (
          <>
            <Button className='btnVer' disabled>
              Ver más
            </Button>
            <Text className='sinStock'>Lo sentimos, no hay stock disponible.</Text>
          </>
        )}
      </Box>
    </div>
  );
}

export default Item
