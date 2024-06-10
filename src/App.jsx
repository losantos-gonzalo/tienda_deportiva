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

function App() {


  return (
    <ChakraProvider>

      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer title={'Tienda Deportiva'} />} />
          <Route path='/categoria/:categoryId' element={<ItemListContainer />} />
          <Route path='/producto/:productoId' element={<ItemDetailContainer />} />
          <Route path='*' element={<PageNoFound />} />
        </Routes>
      </BrowserRouter>

    </ChakraProvider>
  )
}

export default App
