import Landing from '../Landing/Landing'
import Camperas from '../Camperas/Camperas';
import Chalecos from '../Chalecos/Chalecos'
import Pants from '../Pants/Pants'
import HomeProductCard from '../HomeProductCard/HomeProductCard';
import '../Home/Home.scss'
import data from '../../dataProducts'
import { useCart } from '../../contexts/cartContext'

const Home = () => {

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
        <h1 className='text-center m-5'> <b> LO ÚLTIMO </b></h1>
        <div className='latest_post'>
            {data.map(x => {
                return (
                    <HomeProductCard code={x.code} key={x.code} name={x.name} image1={x.image1} image2={x.image2} price={x.price} />
                )
            })}
        </div>

        </>
    )
}

export default Home