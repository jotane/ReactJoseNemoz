
import './App.css'
import NavbarBoostrap from './components/NavbarBoostrap.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import { CartProvider } from './context/cartContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';

function App() {

  return (
    <BrowserRouter>
    <CartProvider>
      <NavbarBoostrap />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='BIENVENIDOS' />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Bienvenidos a:' />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
      </CartProvider>
      
      


    </BrowserRouter>
  )
}

export default App



