import React from 'react'
import './Meals.css'

const Meals = () => {
    let meals = [{ name: 'Sushi', info: 'Finest fish and veggies', price: '1799' },
    { name: 'Green Bowl', info: 'Healthy and Green', price: '899' },
    { name: 'Schnitzel', info: 'A German Speciality', price: '1320' },
    { name: 'Barbeque Burger', info: 'American Raw Meaty', price: '1099' }
    ]

    return (
        <div className='d-flex align-items-center justify-content-center mt-2'>
            <ul className='meals' style={{borderRadius : '15px'}}>
                {meals.map((meal) => (
                    <li style={{marginTop:'1rem'}}>
                        <h5>{meal.name}</h5>
                        <p className='info'>{meal.info}</p>
                        <p className='price'>${meal.price}</p>
                        <hr></hr>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default Meals