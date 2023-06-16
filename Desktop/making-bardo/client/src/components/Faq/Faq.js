import { useEffect } from 'react'
import './Faq.scss'
import { AiFillCaretDown } from 'react-icons/ai'


const Faq = () => {


  const dropDown = (e) => {
    const element = e.target.nextSibling;
    if (!element.style.maxHeight) {
      element.style.maxHeight = '700px'
    }
    else if (element.style.maxHeight) {
      element.style.maxHeight = null
    }
  }

  return (
    <>
      <div className='faq_container container'>
        <h1 className='faq_title'>PREGUNTAS FRECUENTES</h1>
        
        <button className='collapsible ' onClick={(e) => dropDown(e)}>¿Quiénes sómos? <AiFillCaretDown/> </button>
        <div className='content'>
          <p> Tenemos como inspiración lograr grandes improntas de innovación y calidad artística,  debido a nuestro entorno inmediato con larga data en las artes, y a nuestro interés de una búsqueda permanente de un lenguaje estético de la moda, impactante y original. De ese modo deseamos introducir un producto nuevo 
          argentino en tendencia. Buscamos una propuesta que rompa con estereotipos de la indumentaria masiva y ofreciendo una arriesgada combinación entre el diseño, el  arte y la moda. </p>
        </div>

        
        <button className='collapsible' onClick={(e) => dropDown(e)}> ¿Cómo están hechas las prendas? <AiFillCaretDown/> </button>
        <div className='content'>
          <p> Utilizamos pintura para tela importada, e intervenimos sobre jean, específicamente rigido, para evitar el traspaso de la pintura y  obtener mayor adherencia de la misma.
</p>
        </div>


        <button className='collapsible' onClick={(e) => dropDown(e)}> ¿Cómo cuidar las prendas? <AiFillCaretDown/> </button>
        <div className='content'>
          <p>En cada prenda que es entregada, se le agrega una hangtag, las cuales en su dorso, se encuentran algunos punteos para poder conservarlas en su mejor estado y que luzcan como el primer día.
            Estos cuidados son:

            <li>Lavar a mano y al revés</li>
            <li>No usar lavandina</li>
            <li>Secar a la sombra</li>
            <li>Planchar sin vapor y del revés</li>
          </p>
        </div>


        <button className='collapsible' onClick={(e) => dropDown(e)}>¿Cómo comprar? <AiFillCaretDown/> </button>
        <div className='content'>
          <p> En cada producto, podés seleccionar la opción de comprar un producto. El link te llevará directo al chat de la tienda a través de Whatsapp. En la brevededad te responderemos con la disponibilidad del producto, y se acordará el método de pago y/o envío.</p>
        </div>


        

      </div>


    </>
  )
}

export default Faq