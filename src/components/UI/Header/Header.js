import React from 'react'
import { Container } from 'react-bootstrap'
import { FaCartPlus } from "react-icons/fa";


const Header = () => {
  return (
    <Container fluid style={{backgroundColor : '#9d1a1a'}} className='d-flex align-items-center justify-content-around'>
        <div>
            <h3>ReactMeals</h3>
        </div>
        <div className='d-flex br-2 align-items-center justify-content-center m-2' style={{  borderRadius : '40px', backgroundColor : '#611313', paddingLeft : '15px', paddingRight : '15px'}}>
            <FaCartPlus className='m-2'/>
            <p className='m-2 p-0' style={{fontWeight : 'bold'}}>Your Cart</p>
            <div className='d-flex br-2 align-items-center justify-content-center m-1' style={{  borderRadius : '40px', backgroundColor : '#9d1a1a', paddingLeft : '15px', paddingRight : '15px'}}>
                <p style={{fontWeight : 'bold'}} className='m-0 p-0'>0</p>
            </div>
        </div>
    </Container>
  )
}

export default Header