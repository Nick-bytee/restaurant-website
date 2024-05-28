import React, { useContext, useState, useEffect } from 'react'
import Backdrop from '../Backdrop'
import './CartModal.css'
import { createPortal } from 'react-dom'
import CartContext from '../../Context/CartContext'
import { Button } from 'react-bootstrap'

const CartModal = (props) => {
    const cartProvider = useContext(CartContext)
    const [total, setTotal] = useState(0)
    
    const removeItemHandler = (id) => {
        console.log(id)
        cartProvider.removeItems(id)
    }

    useEffect(() => {
        let totalPrice = 0;
        cartProvider.items.forEach(item => {
            totalPrice += parseInt(item[0].price);
        });
        setTotal(totalPrice);
    }, [cartProvider.items]);

    const modal = (
        <React.Fragment>
        <Backdrop/>
        <div className='modals'>
            <ul style={{margin : '0', padding : '0'}}>
            {cartProvider.items.map((item) => {
                return (<>
                <li className='cart-item' id={item[0].id} key={item[0].id}>
                    <div className='content'>
                        <h5>{item[0].name}</h5>
                        <p>{item[0].price}</p>
                    </div>
                    <div className='qty'>
                        <p>{`x${1}`}</p>
                    </div>
                    <div>
                        <Button className='qty-button1'>+</Button>
                        <Button onClick={() => removeItemHandler(item[0].id)} className='qty-button2'>-</Button>
                    </div>
                </li>
                <hr/>
                </>
            )
                
        })}
            </ul>
            <div className='d-flex justify-content-between'>
                <h5 style={{fontWeight : 'bold'}}>Total Amount</h5>
                <h5 style={{fontWeight : 'bold'}}>{total}</h5>
            </div>
        <footer>
            <div>
                <button onClick={props.onClose}>Close</button>
                <button className='order-button'>Order</button>
            </div>
        </footer>
    </div>
    </React.Fragment>
    )
  return (
    createPortal(modal, document.getElementById('overlays'))
  )
}

export default CartModal