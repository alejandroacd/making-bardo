import { useEffect, useState } from 'react'
import './Landing.scss'
import background1 from './landingbackground.jpg'
import background2 from './landingbackground2.jpg'
import background3 from './landingbackground3.jpg'

const Landing = () => {
   
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loaded, setLoaded] = useState(false)
    const images = [background1,background2,background3]

    const nextSlide = () => {
        setLoaded(false)
       setTimeout(() => {
        const isLastSlide = currentIndex === images.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
       
       },500)
    }

    useEffect(() => {
        setTimeout(nextSlide, 3500)
    },[currentIndex])

    return (
        <>
        <div className={loaded ? 'landing loaded' : 'landing'}  style={{backgroundImage: `url(${images[currentIndex]})`}} onLoad={() => setLoaded(true)}>
            <div className='landing_text'> 
                <img alt="Logo making bardo" src="../loguito.png" />
                <p>30% off pagando en efectivo</p>
            </div>

            <div className='landing_buttons'>
                    <a href='#ultimo'>Lo último</a>
                    <a href='#categories'>Ver categorías</a>

              </div>
          
        </div>
           

        </>

    )
}

export default Landing