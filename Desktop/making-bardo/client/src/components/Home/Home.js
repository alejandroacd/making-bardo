import Landing from '../Landing/Landing'
import Camperas from '../Camperas/Camperas';
import Chalecos from '../Chalecos/Chalecos'
import Pants from '../Pants/Pants'
import '../Home/Home.scss'
import data from '../../dataProducts'
import {  HiShoppingCart, HiEye } from 'react-icons/hi'
import { useCart } from '../../contexts/cartContext'

const Home = () => {

    const { addToCart } = useCart()
    return (
        <>
        <Landing />

        <div className='categories_section'>
            <div className='categories' id="categories">
        <Camperas />
        <Pants />
        <Chalecos />
        </div>
        </div>
        <h1 className='text-center m-5'> <b>LO ÚLTIMO</b></h1>
        <div className='latest_post container'>
   
            {data.map(x => {
                return (
                    <>
                    <div id="ultimo" className='latest_home_card'>
                        <div className='image_home_card'>
                        <img src={x.image2} alt='Imágen del producto' />
                        <img className='imghome-card-hover'src={x.image1} alt='Imágen del producto' />
                        </div>
                        <h1> {x.name.toUpperCase()} </h1>
                        <p> {x.price}$ </p>
                        <div className='product_options'>
                            <button className='btn btn-dark'><HiShoppingCart size={25} /></button>
                            <button className='btn btn-dark'><HiEye size={25} /></button>
                        </div>
                    </div>
                    </>

                )
            })}
        </div>

        </>
    )
}

export default Home