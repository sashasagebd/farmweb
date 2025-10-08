import { useState } from 'react'
import Card from './Card'

export default function Products() {
    //get products as an array and map each to its own card
    const [ products, setProducts ] = useState([
        {
        name: "Lettuce",
        picture: "https://cdn.britannica.com/77/170677-050-F7333D51/lettuce.jpg",
        id: 0,
        amount: 0
        },
        {
        name: "Eggs",
        picture: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg",
        id: 1,
        amount: 0
        }
    ]);
        
    
    return(
        <>
            <div className="row">
                <div className="column">
                    <ul>
                        {products.map(product => (
                            <Card key={product.id} product={product} />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}