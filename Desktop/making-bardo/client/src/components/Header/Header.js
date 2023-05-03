import { useState } from 'react'
import '../../components/Header/Header.scss'
import { HiMenu, HiShoppingCart, HiOutlineQuestionMarkCircle, HiChevronDown } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../contexts/cartContext'
import Cart from '../Cart/Cart'


const Header = () => {
    const { cart, toggleCart, showCart} = useCart()
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)
    const [toggleSubMenu, setToggleSubMenu] = useState(false)

    const showSubMenu = () => {
        setToggleSubMenu(!toggleSubMenu)
    }

    const showMenu = () => {
        setToggle(!toggle)
    }


    return (
        <>
            <div className="header p-1 d-flex">
                <div className="logo_container" onClick={() => navigate("/")} >
                    <img src='/logo.jpg' alt="logo making bardo" />
                </div>

                <div className="header_list">
                    <ul className='group-list'>
                        <li onClick={() => navigate('/catalogo')}> CATÁLOGO </li>
                        <li onClick={() => navigate('/contacto')}> CONTACTO </li>
                        <li onClick={() => navigate('/faq')}> <HiOutlineQuestionMarkCircle size={25} /> </li>
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