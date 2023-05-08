import { useEffect, useState } from 'react'
import '../../components/Header/Header.scss'
import { HiMenu, HiShoppingCart, HiOutlineQuestionMarkCircle, HiChevronDown } from 'react-icons/hi'
import {  useNavigate, useLocation } from 'react-router-dom'
import { useCart } from '../../contexts/cartContext'
import Cart from '../Cart/Cart'


const Header = () => {
    const { cart, toggleCart, showCart} = useCart()
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)
    const [toggleSubMenu, setToggleSubMenu] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const header = document.getElementById('header');

        if(location.pathname === '/'){
            header.style.backgroundColor = 'transparent'
            window.addEventListener('scroll', () => {
                if(window.scrollY < 1000){
                    header.style.backgroundColor = 'transparent'
                }
                if(window.scrollY>0){
                    header.style.backgroundColor = 'black'
                }
            })
        }
        if(location.pathname !== '/'){
            header.style.backgroundColor = 'black'
        }
    },[window.scrollY])


    const showSubMenu = () => {
        setToggleSubMenu(!toggleSubMenu)
    }

    const showMenu = () => {
        setToggle(!toggle)
    }


    return (
        <>
            <div id="header" className="header p-1 d-flex">
                <div className="logo_container" onClick={() => {window.location = '/'}} >
                <img alt="Logo making bardo" src="../loguito.png" />                </div>

                <div className="header_list">
                    <ul className='group-list'>
                        <li onClick={() => {window.location = '/catalogo'}}> CATÁLOGO </li>
                        <li onClick={() => {window.location = '/contacto'}}> CONTACTO </li>
                        <li onClick={() => {window.location = '/faq'}}> <HiOutlineQuestionMarkCircle size={25} /> </li>
                        <li onClick={() => showCart()}> {cart.length} <HiShoppingCart className='cart_list' size={25} /> </li>
                    </ul>
                    
                   <p>{cart.length} <HiShoppingCart onClick={() => showCart()} size={20} /></p>
                    <HiMenu size={20} onClick={showMenu} />
                </div>



            </div>
            <div className={toggle ? 'mobile_menu show' : 'mobile_menu hide'}>
                <p onClick={showMenu}> X </p>
                <ul>
                    <div className='dropdown-container'>
                    <p onClick={showSubMenu}>
                        CATÁLOGO <HiChevronDown />
                    </p>
                    <ul className={toggleSubMenu ? 'showSubMenu' : 'hideSubMenu' }>
                    <li onClick={(e) => {window.location.href =  `/${e.target.innerText.toLowerCase()}`} }>Camperas</li>
                    <li onClick={(e) => {window.location.href =  `/${e.target.innerText.toLowerCase()}`} }> Pantalones </li>
                    <li> Chalecos </li>
                    </ul>
                    </div>
                    <li onClick={() => {window.location.href =  '/contacto'}}> CONTACTO</li>
                    <li onClick={() => {window.location.href =  '/faq'}}> PREGUNTAS FRECUENTES </li>
                </ul>
            </div>

            <Cart />
        </>
    )
}

export default Header