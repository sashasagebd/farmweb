import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Card({item, picture}) {
    const { addToCart } = useContext(CartContext);

    function handleAdd() {
        const itemName = item;
        addToCart(itemName);
    }

    return(
        <div className="card m-1" style={{width: "18rem"}}>
            <img src={picture} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{item}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <button className="btn btn-primary" onClick={handleAdd}>Go somewhere</button>
            </div>
        </div>
    )
}