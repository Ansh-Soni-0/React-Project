import '../css/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <div className='navbar-brand'>
                <Link to="/">Movie App</Link>
            </div>
            <div className='navbar-links'>
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/favorites" className='nav-link'>Favorites</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar