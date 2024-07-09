import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { ChevronDownIcon } from '@chakra-ui/icons';
import '../NavBar/NavBar.css';
import { Box, Button, Flex, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {

    return (
        <Flex
            className='navBar'
            justify={'space-between'}
        >
            <Menu>



                <Box className='cajita'>
                    <Link to='/'>
                        <img src="https://ams3.digitaloceanspaces.com/graffica/2022/12/adidas_318-565831.webp" className='logo' />
                    </Link>
                </Box>

                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} className='boton'>
                    Categorías
                </MenuButton>

                <MenuList>

                    <MenuItem>
                        <Link to='/categoria/zapas'>Zapatillas</Link>
                    </MenuItem>

                    <MenuItem>
                        <Link to='/categoria/pantalon'>Pantalon</Link>
                    </MenuItem>

                    <MenuItem>
                        <Link to='/categoria/camiseta'>Camiseta</Link>
                    </MenuItem>

                    <MenuItem>
                        <Link to='/categoria/buzos'>Buzos</Link>
                    </MenuItem>
                    <Outlet />
                </MenuList>

            </Menu>

            <CartWidget />
        </Flex>
    );
}

export default NavBar;

