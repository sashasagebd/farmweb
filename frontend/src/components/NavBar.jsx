import { Link } from 'react-router-dom'
import CartIcon from '../assets/shopping-basket.svg'

export default function NavBar() {

    return(
        <div className="navbar navbar-light d-flex gap-2 bg-light p-3 r-3 l-3">
            <Link to="/" className="btn btn-outline-primary">Home</Link>
            <Link to="/products" className="btn btn-outline-primary">Products</Link>
            <Link to="/about" className="btn btn-outline-primary">About</Link>
            <Link to="/contact" className="btn btn-outline-primary">Contact</Link>
            <Link to="/account" className="btn btn-outline-primary">Account</Link>
            <img 
                src={CartIcon} 
                alt="Cart" 
                className="img-fluid" 
                data-bs-toggle="offcanvas"
                data-bs-target="#cartOffcanvas"
                style={{ width: "40px", height: "40px", cursor: "pointer"}}
            />
        </div>
    )
}