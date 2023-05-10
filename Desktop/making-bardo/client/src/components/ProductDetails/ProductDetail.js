import { useEffect, useState } from 'react'
import './ProductDetails.scss'
import data from '../../dataProducts'
import { HiChevronLeft, HiOutlineShoppingCart } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../contexts/cartContext'

const ProductDetail = () => {

    const navigate = useNavigate()
    const { addToCart } = useCart()
    const queryString = window.location.search
    const decoded = new URLSearchParams(queryString)
    const value = parseInt(decoded.get('id'))
    const productData = data.filter(x => x.code === value)
    const number = '+5491155058300'
    const thisPage = `https://making-bardo.netlify.app` + window.location.pathname + queryString
    const link = 'https://api.whatsapp.com/send?'

    const changeBackground = (e) => {
    
        document.getElementById('background_product').style.backgroundImage = `url(${e.target.src})`
            }

    const sendMessage = (message) => {

        window.location.href = link + `phone=${number}&text=${message}` 
    }

    useEffect(() => {
        console.log(productData[0])
        console.log(thisPage)
  
    },[])

    return (
        <div className='product-detail-container container mt-5'>
            <div className='go_back_container' onClick={() => navigate(-1)}> <HiChevronLeft size={25} /> Atrás </div>
            <div id="background_product" className='product_detail_image' style={{backgroundImage:`url(${productData[0].image1})`}}>
            </div>
            <div  className='product_other_images'>
                <img src={productData[0].image1} alt="Imágen del producto 1 "  onClick={(e) => changeBackground(e)}/>
                <img src={productData[0].image2} alt="Imágen del producto 2" onClick={(e) => changeBackground(e)} />
            </div>

            <div className='container'>
            <h1> {productData[0].name.toUpperCase()} </h1>
            <p> {productData[0].price} $ </p>
            <h1> Métodos de pago: </h1>
            <li> Efectivo (30% off) </li>
            <li> Mercado Pago </li>
            </div>

            <div className='d-flex flex-direction-row w-100'>
            <button onClick={() => addToCart(productData[0])} > AÑADIR AL CARRITO <HiOutlineShoppingCart /> </button>
            <button onClick={() => sendMessage(`Hola! Quiero comprar el siguiente producto, ¿Hay disponibilidad?: ${thisPage}`)}> INICIAR COMPRA </button>

            </div>
           
        </div>
    )   
}
export default ProductDetail