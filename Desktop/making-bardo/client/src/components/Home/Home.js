import '../Home/Home.scss'
import React, { Suspense, lazy } from 'react';
import camperas from './camperas.jpg'
import chalecos from './chalecos.jpg'
import pantalones from './pantalones.jpg'
import data from '../../dataProducts'
const Landing = lazy(() => import('../Landing/Landing'))
const HomeProductCard = lazy(() => import('../HomeProductCard/HomeProductCard'))
const CategoryOption = lazy(() => import('../CategoryOption/CategoryOption'))

export default function Home() {

    
    return (

        <>
            <Suspense fallback={<div className='landing-loading'><div className='lds-dual-ring'></div> </div>} >
                <Landing />
            </Suspense>

            <div className='categories_section'>
                <div className='categories' id="categories">
                    <Suspense fallback={<div className='landing-loading'><div className='lds-dual-ring'></div> </div>} >
                        <CategoryOption category="Camperas" url={camperas} />
                        <CategoryOption category="Pantalones" url={pantalones} />
                        <CategoryOption category="Chalecos" url={chalecos} />
                    </Suspense>

                </div>
            </div>

            <h1 className='text-center m-5'> <b> LO ÚLTIMO </b></h1>
            <div className='latest_post'>
                {data.map(x => {
                    return (
                        <Suspense key={x.code} fallback={<div className='landing-loading'><div className='lds-dual-ring'></div></div>}>
                            <HomeProductCard code={x.code} name={x.name} image1={x.image1} image2={x.image2} price={x.price} />
                        </Suspense>
                    )
                })}
            </div>

        </>
    )
}

