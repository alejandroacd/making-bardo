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

        <button className='collapsible' onClick={(e) => dropDown(e)}>¿Quiénes sómos? 🞃 </button>
        <div className='content'>
          <p> Tenemos como inspiración lograr grandes improntas de innovación y calidad artística,  debido a nuestro entorno inmediato con larga data en las Artes, y a nuestro interés de una búsqueda permanente de un lenguaje estético de la moda , impactante y original. De ese modo deseamos introducir un producto nuevo Argentino en tendencia. Buscamos una propuesta que rompa con estereotipos de la indumentaria masiva y ofreciendo una arriesgada combinación entre el Diseño, el  Arte y la Moda. </p>
        </div>

        
        <button className='collapsible' onClick={(e) => dropDown(e)}> ¿Cómo están hechas las prendas? 🞃 </button>
        <div className='content'>
          <p> Utilizamos pintura para tela importada, e intervenimos sobre jean, específicamente rigido, para evitar el traspaso de la pintura y  obtener mayor adherencia de la misma.
</p>
        </div>


        <button className='collapsible' onClick={(e) => dropDown(e)}> ¿Cómo cuidar las prendas? 🞃 </button>
        <div className='content'>
          <p>En cada prenda que es entregada, se le agrega una hangtag, las cuales en su dorso, se encuentran algunos punteos para poder conservarlas en su mejor estado y que luzcan como el primer día.
            Estos cuidados son:

            <li>Lavar a mano y al revés</li>
            <li>No usar lavandina</li>
            <li>Secar a la sombra</li>
            <li>Planchar sin vapor y del revés</li>
          </p>
        </div>


        <button className='collapsible' onClick={(e) => dropDown(e)}>¿Cómo comprar? 🞃 </button>
        <div className='content'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat aliquet cursus. Ut vulputate placerat augue, nec dictum dolor hendrerit non. In id sapien convallis massa dapibus dictum. Aliquam tempor dolor ut euismod pellentesque. Fusce vestibulum enim ultricies ligula congue semper. Aenean a est augue. Pellentesque malesuada ipsum quis neque interdum lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ornare nulla eu libero facilisis, vitae tristique justo viverra. Integer condimentum interdum metus, a commodo ligula dictum et. Vivamus in mauris ligula.

            Proin tempus risus purus, ac semper nibh dignissim nec. Morbi aliquet eget quam eu ornare. Ut varius consectetur finibus. Integer vulputate convallis scelerisque. Suspendisse mattis lorem ex, ut cursus arcu eleifend quis. Vivamus ante quam, pharetra in luctus quis, placerat nec neque. Suspendisse eleifend mauris velit, nec fermentum sem dapibus quis. Donec mi diam, accumsan ut condimentum vitae, finibus vel erat.</p>
        </div>


        <button className='collapsible' onClick={(e) => dropDown(e)}> ¿Cómo se las medidas de las prendas y/o cuál es mi talle? 🞃 </button>
        <div className='content'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat aliquet cursus. Ut vulputate placerat augue, nec dictum dolor hendrerit non. In id sapien convallis massa dapibus dictum. Aliquam tempor dolor ut euismod pellentesque. Fusce vestibulum enim ultricies ligula congue semper. Aenean a est augue. Pellentesque malesuada ipsum quis neque interdum lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ornare nulla eu libero facilisis, vitae tristique justo viverra. Integer condimentum interdum metus, a commodo ligula dictum et. Vivamus in mauris ligula.

            Proin tempus risus purus, ac semper nibh dignissim nec. Morbi aliquet eget quam eu ornare. Ut varius consectetur finibus. Integer vulputate convallis scelerisque. Suspendisse mattis lorem ex, ut cursus arcu eleifend quis. Vivamus ante quam, pharetra in luctus quis, placerat nec neque. Suspendisse eleifend mauris velit, nec fermentum sem dapibus quis. Donec mi diam, accumsan ut condimentum vitae, finibus vel erat.</p>
        </div>

      </div>


    </>
  )
}

export default Faq