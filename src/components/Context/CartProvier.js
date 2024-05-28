import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
    const [items, setItems] = useState([])

    const addToCartHandler = (item) => {
        setItems((prevItems) => [...prevItems, item])
    }
    const removeFromCartHandler = (id) => {
        const filteredItems = items.filter((item) => item[0].id !== id)
        console.log(filteredItems)
        setItems(filteredItems)
    }
    
    const cartContext = {
        items : items,
        totalAmount : 0,
        addItems: addToCartHandler,
        removeItems : removeFromCartHandler 
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider