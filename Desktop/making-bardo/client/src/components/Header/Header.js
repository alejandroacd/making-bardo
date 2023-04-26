import { useState } from 'react'
import '../../components/Header/Header.scss'
import { HiMenu, HiShoppingCart, HiOutlineQuestionMarkCircle, HiChevronDown } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../contexts/cartContext'

const Header = () => {
    const { cart } = useCart()
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
                        <li> CATÁLOGO </li>
                        <li> CONTACTO </li>
                        <li> <HiOutlineQuestionMarkCircle size={25} /> </li>
                        <li> {cart.length} <HiShoppingCart className='cart_list' size={25} /> </li>
                    </ul>
                    <Link to="/cart"> {cart.length} <HiShoppingCart size={20} /> </Link>
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
                    <li>Camperas</li>
                    <li> Pantalones </li>
                    <li> Chalecos </li>
                    </ul>
                    </div>
                    <li> CONTACTO</li>
                    <li> PREGUNTAS FRECUENTES </li>
                </ul>
            </div>
        </>
    )
}

export default Header