import {  useState } from 'react'
import './Landing.scss'
import background1 from './landingbackground.jpg'
import Slider from './Slider'

export default function Landing() {


    const [loaded, setLoaded] = useState(false)

    return (
        <div className='landing_container'>
            <Slider />
            <div className='landing_buttons'>
                    <a href='#ultimo'>lo último</a>
                    <a href='#categories'>ver categorías</a>

                </div>
        </div>


    )
}
