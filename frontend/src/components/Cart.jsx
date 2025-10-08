import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

export default function Cart() {
    const { cartItems, removeFromCart } = useContext(CartContext);

    function removeItem(itemId) {
        removeFromCart(itemId);
    }

    function checkOut() {

    }

    function checkCopy() {
        
    }

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
                    <div className="card m-1" key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.amount}</p>
                        <img src={item.picture} />
                        <button type="button" className="btn btn-primary" onClick={() => removeItem(item.id)}>Remove</button>
                    </div>
                )}
                <button type="button" className="btn btn-primary" onClick={checkOut}>Checkout</button>
            </div>
        </div>
    )
}