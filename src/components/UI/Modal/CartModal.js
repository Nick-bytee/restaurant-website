import React from 'react'
import Backdrop from '../Backdrop'
import './CartModal.css'
import { createPortal } from 'react-dom'

const CartModal = (props) => {
    const modal = (
        <React.Fragment>
        <Backdrop/>
        <div className='modals'>
        <div className='content'>
            <h5>Total Amount</h5>
            <p>1399</p>
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