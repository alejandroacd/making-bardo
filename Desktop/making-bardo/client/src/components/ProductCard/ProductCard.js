import { useEffect,useState,useRef } from 'react'
import {  HiShoppingCart, HiEye } from 'react-icons/hi'
import { AiOutlineCreditCard } from 'react-icons/ai'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import './ProductCard.scss'
import { useCart } from '../../contexts/cartContext'

const ProductCard = (props) => {
  
  const { addToCart } = useCart()

  const redirect = () => {
    window.location = `/product/?id=${props.code}`
  }
  
  useEffect(() => {
    console.log(props)
  },[])
 
    return (
        <>
        <div className="container">
                <div  className='card shadow'>
                  <div className='img_container'>
                    <img loading='lazy' className='card-img-top' src={props.image2} alt="Imágen ilustrativa del producto" />
                    <img loading='lazy' className='card img-top card-img-hover' src={props.image1} alt="Imágen ilustrativa del producto" />
                   </div>
                    <div className='card-body d-flex flex-column align-items-center justify-content-center'>
                    <p className='card-title'> {props.name.toUpperCase()}
                   </p>
                   <p className='card-text '>  {props.price} $ </p>
                   <span> <AiOutlineCreditCard size={25} />  <b> 3 cuotas sin interés</b> </span>
                   <br />

                   <div className='d-flex justify-content-row'>
                   <button className='btn' onClick={() => addToCart(props)}> <MdOutlineFavoriteBorder size={35} /> </button>
                   <button className='btn' onClick={redirect}> <HiEye size={35} /> </button>
                   </div>
    
                   </div>
                </div>
        </div>
        </>)
}

export default ProductCard