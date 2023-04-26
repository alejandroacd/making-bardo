import { useEffect, useState } from 'react'
import './ProductDetails.scss'
import data from '../../dataProducts'
import { HiChevronLeft, HiOutlineShoppingCart } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'


const ProductDetail = () => {

    const navigate = useNavigate()
    const queryString = window.location.search
    const decoded = new URLSearchParams(queryString)
    const value = parseInt(decoded.get('id'))
    const productData = data.filter(x => x.code === value)

    const changeBackground = (e) => {
    
        document.getElementById('background_product').style.backgroundImage = `url(${e.target.src})`

            }

    useEffect(() => {
        console.log(productData[0])
    },[])
    return (
        <div className='product-detail-container container mt-5'>
            <div className='go_back_container' onClick={() => navigate(-1)}> <HiChevronLeft size={25} /> Atrás</div>
            <div id="background_product" className='product_detail_image' style={{backgroundImage:`url(${productData[0].image1})`}}>
            </div>
            <div  className='product_other_images'>
                <img src={productData[0].image1} alt="Imágen del producto 1 "  onClick={(e) => changeBackground(e)}/>
                <img src={productData[0].image2} alt="Imágen del producto 2" onClick={(e) => changeBackground(e)} />
            </div>
            <h1> {productData[0].name.toUpperCase()} </h1>
            <p> {productData[0].price} $ </p>
            <button className='btn btn-outline-dark'> AÑADIR AL CARRITO <HiOutlineShoppingCart /> </button>
        </div>
    )   
}
export default ProductDetail