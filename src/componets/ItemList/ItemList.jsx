import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import Item from '../Item/Item'

const ItemList = ({ products }) => {
  return (
    <Flex wrap='wrap' justifyContent='center' gap={4} p={4}>
      {products.map((prod) => (
        <Box key={prod.id}>
          <Item {...prod} />
        </Box>
      ))}
    </Flex>
  );
}

export default ItemList

