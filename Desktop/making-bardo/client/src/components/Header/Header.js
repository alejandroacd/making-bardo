import '../../components/Header/Header.scss'

const Header = () => {
    return(
        <div className="header p-1 d-flex">
            <div className="logo_container">
                <img src="logo.jpg"alt="logo making bardo" />
            </div>

            <div className="header_list">
                <ul>
                    <li> Catálogo </li>
                    <li> Contacto </li>
                    <li> Carrito </li>
                    <li> Cómo comprar?</li>
                </ul>
            </div>


      </div>
    )
}

export default Header