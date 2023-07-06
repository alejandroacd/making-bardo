import '../Home/Home.scss'
import React, { Suspense, lazy } from 'react';
import data from '../../dataProducts'
import camperas from './camperas.jpg'
import chalecos from './chalecos.jpg'
import pantalones from './pantalones.jpg'
const Landing = lazy(() => import('../Landing/Landing'))
const HomeProductCard = lazy(() => import('../HomeProductCard/HomeProductCard'))
const CategoryOption = lazy(() => import('../CategoryOption/CategoryOption'))

const Home = () => {


    return (

        <>

            <Suspense fallback={<div className='landing-loading'><div className='lds-dual-ring'></div> </div>} >
                <Landing />
            </Suspense>

            <div className='categories_section'>
                <div className='categories' id="categories">

                    <CategoryOption category="Camperas" url={camperas} />
                    <CategoryOption category="Pantalones" url={pantalones} />
                    <CategoryOption category="Chalecos"  url={chalecos}/>

                </div>
            </div>


            <h1 className='text-center m-5'> <b> LO ÚLTIMO </b></h1>

            <div className='latest_post'>
                {data.map(x => {
                    return (
                        <Suspense fallback={<div className='landing-loading'><div className='lds-dual-ring'></div></div>}>
                            <HomeProductCard code={x.code} key={x.code} name={x.name} image1={x.image1} image2={x.image2} price={x.price} />
                        </Suspense>
                    )
                })}
            </div>

        </>
    )
}

export default Home;