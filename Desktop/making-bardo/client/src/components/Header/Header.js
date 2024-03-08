import { useEffect, useState } from 'react'
import '../../components/Header/Header.scss'
import { HiMenu, HiOutlineQuestionMarkCircle, HiChevronDown } from 'react-icons/hi'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
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
        const logo = document.getElementById('logo')
        const icons = document.getElementsByClassName('icon')
        const headerlist = document.getElementById('headerlist')

        if(location.pathname === '/'){
            window.addEventListener('scroll', () => {
                if(window.scrollY < 1000){
                    header.style.backgroundColor = 'transparent'
                    headerlist.style.color = '#fff'
                    logo.src = '../logosinfondo3.png'
                }
                if(window.scrollY>0){
                    header.style.backgroundColor = 'var(--dark-bg)'
                    header.style.color = "#fff"
                    logo.src = '../logosinfondo3.png'
                    headerlist.style.color = 'var(--primary-white)'

                }
            })
        }
        if(location.pathname !== '/'){
            header.style.backgroundColor = 'black'
            logo.src = '../logosinfondo3.png'
            headerlist.style.color = 'var(--primary-white)'
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
   
            <div id="header" className="header d-flex">
    
                <div className="logo_container" onClick={() => {window.location = '/'}} >
                <img id="logo" alt="Logo making bardo" src="../logosinfondo3.png" /> 
                 </div>

                <div id="headerlist" className="header_list">
                    <ul className='group-list'>
                        <li onClick={() => {window.location = '/catalogo'}}> CATÁLOGO </li>
                        <li onClick={() => {window.location = '/contacto'}}> CONCTACTO </li>
                        <li onClick={() => {window.location = '/faq'}}> <HiOutlineQuestionMarkCircle size={35} /> </li>
                        <li onClick={() => showCart()}> {cart.length} <MdOutlineFavoriteBorder className='cart_list' size={25} /> </li>
                    </ul>
                    
                   <p className='icon'>{cart.length} <MdOutlineFavoriteBorder className='icon' onClick={() => showCart()} size={20} /></p>
                    <HiMenu className='icon' size={20} onClick={showMenu} />
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
                    <li onClick={(e) => {window.location.href =  `/${e.target.innerText.toLowerCase()}`} } > Chalecos </li>
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