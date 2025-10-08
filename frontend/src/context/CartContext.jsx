import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [ cartItems, setCartItems ] = useState([]);

    const addToCart = (product) => {
        setCartItems((prev) => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, amount: item.amount + 1 } : item
                );
            } else {
                return [...prev, { ...product, amount: 1 }];
            }
        });
    }

    const removeFromCart = (productId) => {
        setCartItems((prev) => prev.filter(item => item.id !== productId));
    }

    const clearCart = () => {
        setCartItems([]);
    }

    return(
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}