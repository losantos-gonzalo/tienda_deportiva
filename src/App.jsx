import './App.css'
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

// -------------  1hs  ---------------

// https://coderhouse.zoom.us/rec/play/h8wU2figwPpuFMCmUYXMN7MQschTaDdQyVLMnJKv7h2htp-PBdSi3EvxQflC-TCCPtzMi8FFrXd2-8ql.AVg2q5xsFTXo0E_Y?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fcoderhouse.zoom.us%2Frec%2Fshare%2Fk3y7bxkh5V9f3h_thmRPXYurJsHLnGod08m0nuv0mnKcZ2xsvk3VttfnwWxRQTPK.MXQWxC_UUSVNDp8h

// Notion:
// https://www.notion.so/e9c3108debb643a8804aea1b15e6a3a7?v=10596b5636d74aab99548764d0d0195d&pm=c