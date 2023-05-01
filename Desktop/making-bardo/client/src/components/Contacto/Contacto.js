import './Contacto.scss'
import { BsInstagram } from 'react-icons/bs'

const Contacto = () => {
    return (
        <>
            <div className="contacto_container container">
                <h1>CONTACTO</h1>

                <form name='contact' netlify>
                    <label form="name"> NOMBRE:</label>
                    <br />
                    <input placeholder='Tu nombre...' type='text' name='name' id='name' />
                    <br />
                    <label for="email">E-MAIL:</label>
                    <br />
                    <input placeholder='Tu e-mail' type='text' name='email' id='email' />
                    <br/>
                    <label for="mensaje">MENSAJE: </label>
                    <br/>
                    <textarea placeholder="Escribe tu mensaje..." name="mensaje" id="mensaje" cols="35" rows="5"></textarea>
                    <br />
                    <button class="btn-submit btn btn-outline-dark" type="submit" > Enviar </button>
                </form>

                <h1>INSTAGRAM</h1>
             
              <div class='instagram'>
                
              <BsInstagram size={35} />
              <p>makingbardo</p>
              </div>
            

            </div>
        </>
    )
}

export default Contacto