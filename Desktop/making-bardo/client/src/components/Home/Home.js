import '../Home/Home.scss'
import React, { Suspense, lazy } from 'react';
import Camperas from '../Camperas/Camperas';
import Chalecos from '../Chalecos/Chalecos'
import Pants from '../Pants/Pants'
import data from '../../dataProducts'
import HomeProductCard from '../HomeProductCard/HomeProductCard'
const Landing = lazy(() => import('../Landing/Landing'))

const Home = () => {

    return (
        <>

        <Suspense fallback={<div> ...CARGANDO</div>} >
        <Landing />
        </Suspense>

        <div  className='categories_section'>
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
                    <Suspense fallback={<div className='d-1'>...cargando</div>} >
                    <HomeProductCard code={x.code} key={x.code} name={x.name} image1={x.image1} image2={x.image2} price={x.price} />
                    </Suspense>
                )
            })}
        </div>

        </>
    )
}

export default Home