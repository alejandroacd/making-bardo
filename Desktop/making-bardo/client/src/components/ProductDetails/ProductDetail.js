import { useEffect, useRef } from 'react'
import './ProductDetails.scss'
import data from '../../dataProducts'
import { HiChevronLeft, HiOutlineShoppingCart } from 'react-icons/hi'
import { BsWhatsapp, BsInstagram } from 'react-icons/bs'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { AiOutlineCreditCard } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../contexts/cartContext'

export default function ProductDetail ({ props }) {

    const navigate = useNavigate()
    const { addToCart } = useCart()
    const backgroundRef = useRef()
    const modal = useRef()
    const queryString = window.location.search
    const decoded = new URLSearchParams(queryString)
    const value = parseInt(decoded.get('id'))
    const productData = data.filter(x => x.code === value)
    const number = '+5491155058300'
    const thisPage = `https://making-bardo.netlify.app` + window.location.pathname + queryString
    const link = 'https://api.whatsapp.com/send?'
    const category = productData[0].category


    const changeBackground = (e) => {

        backgroundRef.current.style.backgroundImage = `url(${e.target.src})`
    }

    const sendMessage = (message) => {

        window.location.href = link + `phone=${number}&text=${message}`
    }

    return (
        <div className='product-detail-container container mt-5'>

            <dialog ref={modal} style={{ zIndex: '2' }} className='product_modal shadow-lg'>

                <h1>Guía de talles:</h1>
                {category !== 'Pantalones' ?
                    <div >
                        <p> Los talles que manejamos son:

                            <li> 1 o M (Oversize) </li>
                            <li> 2 o L / XL (Oversize) </li>
                        </p>
                    </div>

                    : null}

                <p>Solicitamos que nos manden las siguientes medidas por mensaje directo,  si necesitan una mayor exactitud en el talle sugerido,  ya que cada una de las prendas con su respectivo diseño , manejan diferentes medidas.
                </p>

                <div className='links'>
                    <p className='link' onClick={() => { sendMessage('Quería tener información acerca de cuál sería mi talle ideal para este producto. Mis medidas son: +' + thisPage) }}> Solicitar info por Whatsapp   <BsWhatsapp />  </p>
                    <p className='link' onClick={() => window.location.href = 'https:/instagram.com/makingbardo'}> Solicitar info por Instagram <BsInstagram /> </p>
                </div>

                <button onClick={() => modal.current.close()}> Volver </button>
            </dialog>
            <div className='go_back_container d-flex flex-row' onClick={() => navigate(-1)}> <HiChevronLeft size={25} /> Atrás </div>
            <div id="background_product" className='product_detail_image' ref={backgroundRef} style={{ backgroundImage: `url(${productData[0].image1})` }}>

                <div className='product_other_images'>
                    <img loading='lazy' src={productData[0].image1} alt="Imágen del producto 1 " onClick={(e) => changeBackground(e)} />
                    <img loading='lazy' src={productData[0].image2} alt="Imágen del producto 2" onClick={(e) => changeBackground(e)} />
                    {productData[0].image3 ? <img loading='lazy' src={productData[0].image3} alt="Imágen del producto 4" onClick={(e) => changeBackground(e)} /> : null}
                    {productData[0].image4 ? <img loading='lazy' src={productData[0].image4} alt="Imágen del producto 4" onClick={(e) => changeBackground(e)} /> : null}
                    {productData[0].image5 ? <img loading='lazy' src={productData[0].image5} alt="Imágen del producto 4" onClick={(e) => changeBackground(e)} /> : null}
                    {productData[0].image6 ? <img loading='lazy' src={productData[0].image6} alt="Imágen del producto 4" onClick={(e) => changeBackground(e)} /> : null}
                    {productData[0].image7 ? <img loading='lazy' src={productData[0].image7} alt="Imágen del producto 4" onClick={(e) => changeBackground(e)} /> : null}

                </div>
            </div>


            <div className='product-details container'>
                <h1> {productData[0].name.toUpperCase()} </h1>
                <p> {productData[0].price} $ </p>
                <span> <AiOutlineCreditCard size={25} />  <b> 2 cuotas sin interés</b> </span>
                <br />
                <br />
                <span> <b>20% off con efectivo / transferencia / mercado pago (envío de dinero) ( {productData[0].price - parseInt(productData[0].price) * 0.20} $  ) </b> </span>

                <button style={{ marginTop: '1em' }} onClick={() => addToCart(productData[0])} > AGREGAR A FAVORITOS <MdOutlineFavoriteBorder /> </button>
                <button onClick={() => sendMessage(`Hola! Quiero comprar el siguiente producto, ¿Hay disponibilidad?: ${thisPage}`)}> INICIAR COMPRA </button>
                <button onClick={() => modal.current.showModal()}> GUÍA DE TALLES </button>

            </div>


        </div>
    )
}
