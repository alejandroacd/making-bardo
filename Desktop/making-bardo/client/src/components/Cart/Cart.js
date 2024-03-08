import './Cart.scss'
import { useCart } from '../../contexts/cartContext'
import { useEffect, useState } from 'react'
import { BsTrash } from 'react-icons/bs'

const Cart = () => {

    const { cart, totalPrice, removeFromCart, showCart, toggleCart} = useCart()

    return (
        <>
            <div className={toggleCart ? 'cart-container showCart' : 'cart-container hideCart' }>
                <p onClick={showCart}> X </p>
                <h1> LIKES </h1>

                <div className='cart_products'>
                    {cart.map((x, y) => {
                        return (
                            <>
                            <div key={y} className='cart-product'>
                                <div className='img_container'>
                                    <img loading='lazy' alt="Imágen de producto agregado al carrito" src={x.image1 ? x.image1 : x.image2} />
                                </div>

                                <div className='info_container'>
                                    <h1> {x.name} </h1>
                                    <p> {x.price}$ </p>
                                    <BsTrash size={15} onClick={() => removeFromCart(x.name)} />
                                 </div>
                                 
                             </div>
                             
                             </>
                         )
                    })}
                </div>

                <div className='checkout_box'>
                <h1> Precio total de la lista: {totalPrice()}$ </h1>
                </div>
            </div>
        </>
    )
}

export default Cart