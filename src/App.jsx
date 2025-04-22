
import './App.css'
import NavbarBoostrap from './components/NavbarBoostrap.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';


function App() {

  return (
    <BrowserRouter>
      <NavbarBoostrap />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='BIENVENIDOS' />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
      </Routes>
      
      


    </BrowserRouter>
  )
}

export default App



