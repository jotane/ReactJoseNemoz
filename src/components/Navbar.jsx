import '../assets/styles.css/Navbar.css'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
      <nav className="barraNav"> 
      <img src='../estampilla.jpg' className='logo'/>
        <div className="enlaces"> 
          <NavLink to="/category/">SOBRE MI</NavLink>
          <NavLink href="">EL ESTUDIO</NavLink>
          <NavLink to="/category/Cuidados">CUIDADOS</NavLink>
          <NavLink to="/category/Disenos">DISEÑOS</NavLink>
        </div>
        <CartWidget/>
      </nav>
    )
} 

export default Navbar