import { useEffect,useState,useRef } from 'react'
import {  HiShoppingCart, HiEye } from 'react-icons/hi'
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
                <div  className='card '>
                  <div className='img_container'>
                    <img className='card-img-top' src={props.image2} alt="Imágen ilustrativa del producto" />
                    <img className='card img-top card-img-hover' src={props.image1} alt="Imágen ilustrativa del producto" />
                   </div>
                    <div className='card-body d-flex flex-column align-items-center justify-content-center'>
                    <p className='card-title'> {props.name.toUpperCase()}
                   </p>
                   <p className='card-text '>  {props.price} $ </p>

                   <button className='btn btn-dark' onClick={() => addToCart(props)}> <HiShoppingCart size={20} /> </button>
                   <button className='btn btn-dark' onClick={redirect}> <HiEye size={20} /> </button>
                   </div>
                </div>
        </div>
        </>)
}

export default ProductCard