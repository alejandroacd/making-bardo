import './Catalogo.scss'
import { useEffect, useState } from 'react'
import { HiChevronLeft } from 'react-icons/hi'
import data from '../../dataProducts'
import HomeProductCard from '../HomeProductCard/HomeProductCard'
import { useNavigate } from 'react-router-dom'



export default function Catalogo (){


    const navigate = useNavigate()
    const [category, setCategory] = useState('Camperas')
    const dataFiltered = data
        .filter(x => x.category === category)

    const setearCategory = (e) => {
        setCategory(e.target.value)
    }
    
    return (
        <div className='catalogo_block container'>
       <div onClick={() => navigate(-1)} className="go_back"> <HiChevronLeft /> Volver </div>

            <div className='title_and_filter'>
                <h1> CATÁLOGO </h1>
                <h2> Filtrar por: </h2>


                <select style={{padding:'0.5em;'}} id="valor" onChange={(e) => setearCategory(e)}>
                    <option>Camperas</option>
                    <option> Pantalones </option>
                    <option>Chalecos</option>
                    <option>Shorts</option>
                </select>
            </div>

            <div className='catalogo_container'>
                {dataFiltered.map(x => {
                    return (
                        <HomeProductCard code={x.code} name={x.name} image1={x.image1} image2={x.image2} price={x.price} />
                    )
                })}
            </div>
        </div>
    )
}

