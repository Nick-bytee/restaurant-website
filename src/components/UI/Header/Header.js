import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import CartButton from './CartButton'
import Summary from './Summary'
import './Header.css'


const Header = () => {
    return (
        <Fragment>
            <Container fluid style={{ backgroundColor: '#9d1a1a' }} className='d-flex align-items-center justify-content-around'>
                <div>
                    <h3 style={{color:'white'}}>ReactMeals</h3>
                </div>
                <CartButton />
            </Container>
            <div className='d-flex flex-column align-items-center'>
                <div className='main-image' >
                    <img alt='main' src='https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/code/02-adding-a-header-cmp/src/assets/meals.jpg?raw=true'></img>
                </div>
                <Summary />
            </div>
        </Fragment>
    )
}

export default Header