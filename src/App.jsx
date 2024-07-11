import './App.css'
import './componets/NavBar/NavBar.css'
import '../src/componets/checkout/checkout.css'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'
import NavBar from './componets/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import './componets/Item/Item.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer'
import 'react-toastify/dist/ReactToastify.css';
import PageNoFound from './componets/PageNoFound/PageNoFound'
import '../src/componets/ItemDetail/ItemDetail.css'
import './componets/ItemCount/ItemCount.css'
import { CartContextProvider } from './context/CartContext'
import Cart from './componets/Cart/Cart'
import Checkout from './componets/checkout/Checkout'
import '../src/componets/Cart/cart.css'

function App() {


  return (
    <ChakraProvider>
      <CartContextProvider>
        <BrowserRouter>

          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer title={'Tienda Deportiva'} />} />
            <Route path='/categoria/:categoryId' element={<ItemListContainer />} />
            <Route path='/producto/:productoId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />

            <Route path='*' element={<PageNoFound />} />
          </Routes>

        </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  )
}

export default App