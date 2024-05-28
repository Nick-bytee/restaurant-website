import React, {useContext} from 'react'
import './Meals.css'
import { Container } from 'react-bootstrap'
import CartContext from '../../Context/CartContext'

const Meals = () => {
    const cartProvider = useContext(CartContext)

    let meals = [{ id: 1, name: 'Sushi', info: 'Finest fish and veggies', price: '1799' },
    { id: 2, name: 'Green Bowl', info: 'Healthy and Green', price: '899' },
    { id: 3, name: 'Schnitzel', info: 'A German Speciality', price: '1320' },
    { id: 4, name: 'Barbeque Burger', info: 'American Raw Meaty', price: '1099' }
    ]

    const addToCartHandler = (event,id) => {
        event.preventDefault();
        const meal = (meals.filter((item) => item.id === id))
        cartProvider.addItems(meal)
    }

    return (
        <div className='d-flex align-items-center justify-content-center mt-2'>
            <ul className='meals' style={{ borderRadius: '15px' }}>
                {meals.map((meal) => (
                    <li id='key.id' key={meal.id} style={{ marginTop: '1rem' }}>
                        <Container className='d-flex justify-content-between'>
                            <div>
                                <h5>{meal.name}</h5>
                                <p className='info'>{meal.info}</p>
                                <p className='price'>₹{meal.price}</p>
                            </div>
                            <div className='d-flex flex-column justify-content-center' style={{ width: '7rem' }}>
                                <div className='d-flex'>
                                    <p style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Amount</p>
                                    <input className='text-center' style={{ overflow: 'hidden', height: '1.4rem', borderRadius: '5px', marginLeft: '5px', border: '1px solid black', maxWidth: '3rem' }} type='text' max={'3'}></input>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <a onClick={(event) => addToCartHandler(event, meal.id)} href='null' className='add-button'>+ Add</a>
                                </div>
                            </div>
                        </Container>
                        <hr></hr>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default Meals