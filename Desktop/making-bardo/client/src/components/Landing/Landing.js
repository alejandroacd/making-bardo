import {  useState } from 'react'
import './Landing.scss'
import background1 from './landingbackground.jpg'

export default function Landing() {


    const [loaded, setLoaded] = useState(false)

    return (
        <div className='landing_container'>
            <div className={loaded ? 'landing loaded' : 'landing'} style={{ backgroundImage: `url(${background1})` }} onLoad={() => setLoaded(true)}>
         
            </div>
            <div className='landing_buttons'>
                    <a href='#ultimo'>Lo último</a>
                    <a href='#categories'>Ver categorías</a>

                </div>
        </div>


    )
}
