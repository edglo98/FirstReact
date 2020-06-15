import React from 'react'
import buttonImg from '../images/add.png'
import './style/newExercise.css'
import {Link} from 'react-router-dom'


const NewExercise = () =>(
    <Link to="/exercise/new">
        <div className='container'>
            <img src={buttonImg} className="Fitness-Add" alt='Exercise'/>
        </div>
    </Link>
)

export default NewExercise