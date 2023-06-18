import { useEffect, useState } from 'react'
import './Landing.scss'
import background1 from './landingbackground.jpg'
import background2 from './landingbackground2.jpg'
import background3 from './landingbackground3.jpg'

const Landing = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [loaded, setLoaded] = useState(false)
    const images = [background1, background2, background3]

    const nextSlide = () => {
        setLoaded(false)
        setTimeout(() => {
            const isLastSlide = currentIndex === images.length - 1
            const newIndex = isLastSlide ? 0 : currentIndex + 1
            setCurrentIndex(newIndex)

        }, 500)
    }

 
    return (
        <div className='landing_container'>
            <div className={loaded ? 'landing loaded' : 'landing'} style={{ backgroundImage: `url(${images[currentIndex]})` }} onLoad={() => setLoaded(true)}>
         
            </div>
            <div className='landing_buttons'>
                    <a href='#ultimo'>Lo último</a>
                    <a href='#categories'>Ver categorías</a>

                </div>
        </div>


    )
}

export default Landing