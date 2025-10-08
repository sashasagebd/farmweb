import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'

export default function Card({product}) {
    const { addToCart } = useContext(CartContext);

    return(
        <div className="card m-1" style={{width: "18rem"}}>
            <img src={product.picture} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        </div>
    )
}