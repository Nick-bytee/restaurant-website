import React from 'react'
import { FaCartPlus } from "react-icons/fa";

const CartButton = () => {
  return (
    <div className='d-flex br-2 align-items-center justify-content-center' style={{  borderRadius : '40px', backgroundColor : '#611313', margin : '0.65rem', paddingLeft : '15px', paddingRight : '15px'}}>
            <FaCartPlus className='m-2' style={{color:'white'}}/>
            <p className='m-2 p-0' style={{fontWeight : 'bold', color : 'white'}}>Your Cart</p>
            <div className='d-flex br-2 align-items-center justify-content-center m-1' style={{  borderRadius : '40px', backgroundColor : '#9d1a1a', paddingLeft : '15px', paddingRight : '15px'}}>
                <p style={{fontWeight : 'bold', color:'white'}} className='m-0 p-0'>0</p>
            </div>
        </div>
  )
}

export default CartButton