import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

export default function Cart() {
    const { cartItems } = useContext(CartContext);

    return(
        <div
            className="offcanvas offcanvas-end"
            id="cartOffcanvas"
            tabIndex="-1"
        >
            <div className="offcanvas-header">
                <h5>Your Cart</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            <div className="offcanvas-body">
                {cartItems.map(item =>
                    <p>{item}</p>
                )}
            </div>
        </div>
    )
}