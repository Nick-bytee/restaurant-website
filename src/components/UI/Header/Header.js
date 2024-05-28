import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Summary from './Summary'
import './Header.css'
import CartButton from '../../Cart/CartButton'


const Header = () => {
    return (
        <Fragment>
            <Container fluid  className='header'>
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