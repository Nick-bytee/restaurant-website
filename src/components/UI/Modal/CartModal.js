import React from 'react'
import Backdrop from '../Backdrop'
import './CartModal.css'
import { createPortal } from 'react-dom'

const CartModal = () => {
    const modal = (
        <React.Fragment>
        <Backdrop/>
        <div className='modal'>
        <div className='content'>
            <h5>Total Amount</h5>
            <p>1399</p>
        </div>
        <footer>
            <div>
                <button>Close</button>
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