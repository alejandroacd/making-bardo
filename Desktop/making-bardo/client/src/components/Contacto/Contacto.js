import './Contacto.scss'
import { BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function Contacto() {

    const location = useLocation()

    return (
        <>
            <div className="contacto_container container">
                <h1>CONTACTO</h1>

                <form name='contact' netlify='true'>
                    <label form="name"> NOMBRE:</label>
                    <br />
                    <input placeholder='Tu nombre...' type='text' name='name' id='name' />
                    <br />
                    <label htmlFor="email">E-MAIL:</label>
                    <br />
                    <input placeholder='Tu e-mail' type='text' name='email' id='email' />
                    <br />
                    <label htmlFor="mensaje">MENSAJE: </label>
                    <br />
                    <textarea placeholder="Escribe tu mensaje..." name="mensaje" id="mensaje" cols="35" rows="5"></textarea>
                    <br />
                    <button className="btn-submit btn btn-outline-dark" type="submit" > Enviar </button>
                </form>
                <div className='instagram'>
                    <h1 className='instagram_title'>INSTAGRAM</h1>

                    <div className='instagram_logo'>
                        <BsInstagram size={35} />
                        <Link to="https://instagram.com/makingbardo"> <p>makingbardo</p> </Link>
                    </div>
                </div>

            </div>
        </>
    )
}