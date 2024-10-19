import {Link} from 'react-router-dom'
import "./Navbar.css"
function Navbar(){
    return(
        <>
        <div className='header-wrapper'>
            <nav>
                <Link to="/home" className='navlinks'>Home</Link>
                <Link to="/about"  className='navlinks'>About Us</Link>
                <Link to="/contact"  className='navlinks'>Contact Us</Link>
            </nav>
        </div>
        </>
    )
}

export default Navbar