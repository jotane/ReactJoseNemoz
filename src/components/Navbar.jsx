import '../assets/styles.css/Navbar.css'
import CartWidget from './CartWidget'

const Navbar = () => {
    return (
      <nav className="barraNav"> 
      <img src='../estampilla.jpg' className='logo'/>
        <div className="enlaces"> 
          <a href="">SOBRE MI</a>
          <a href="">EL ESTUDIO</a>
          <a href="">CUIDADOS</a>
          <a href="">DISEÑOS</a>
        </div>
        <CartWidget/>
      </nav>
    )
} 

export default Navbar