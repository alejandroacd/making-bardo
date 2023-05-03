import { useEffect } from 'react'
import './Faq.scss'
import { AiFillCaretDown } from 'react-icons/ai'


const Faq = () => {

  
  const dropDown = (e) => {
    const element = e.target.nextSibling;
    if(!element.style.maxHeight){
      element.style.maxHeight = '700px'
    }
    else if(element.style.maxHeight) {
      element.style.maxHeight = null
    }
    }

  return (
    <>
      <div className='faq_container container'>
        <h1 className='faq_title'>PREGUNTAS FRECUENTES</h1>

        <button className='collapsible' onClick={(e) => dropDown(e)}>¿Quiénes sómos? 🞃 </button>
        <div className='content'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat aliquet cursus. Ut vulputate placerat augue, nec dictum dolor hendrerit non. In id sapien convallis massa dapibus dictum. Aliquam tempor dolor ut euismod pellentesque. Fusce vestibulum enim ultricies ligula congue semper. Aenean a est augue. Pellentesque malesuada ipsum quis neque interdum lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ornare nulla eu libero facilisis, vitae tristique justo viverra. Integer condimentum interdum metus, a commodo ligula dictum et. Vivamus in mauris ligula.

            Proin tempus risus purus, ac semper nibh dignissim nec. Morbi aliquet eget quam eu ornare. Ut varius consectetur finibus. Integer vulputate convallis scelerisque. Suspendisse mattis lorem ex, ut cursus arcu eleifend quis. Vivamus ante quam, pharetra in luctus quis, placerat nec neque. Suspendisse eleifend mauris velit, nec fermentum sem dapibus quis. Donec mi diam, accumsan ut condimentum vitae, finibus vel erat.</p>
        </div>

        <button className='collapsible' onClick={(e) => dropDown(e)}> ¿Cómo están hechas las prendas? 🞃</button>
        <div className='content'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat aliquet cursus. Ut vulputate placerat augue, nec dictum dolor hendrerit non. In id sapien convallis massa dapibus dictum. Aliquam tempor dolor ut euismod pellentesque. Fusce vestibulum enim ultricies ligula congue semper. Aenean a est augue. Pellentesque malesuada ipsum quis neque interdum lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ornare nulla eu libero facilisis, vitae tristique justo viverra. Integer condimentum interdum metus, a commodo ligula dictum et. Vivamus in mauris ligula.

            Proin tempus risus purus, ac semper nibh dignissim nec. Morbi aliquet eget quam eu ornare. Ut varius consectetur finibus. Integer vulputate convallis scelerisque. Suspendisse mattis lorem ex, ut cursus arcu eleifend quis. Vivamus ante quam, pharetra in luctus quis, placerat nec neque. Suspendisse eleifend mauris velit, nec fermentum sem dapibus quis. Donec mi diam, accumsan ut condimentum vitae, finibus vel erat.</p>
        </div>


        <button className='collapsible' onClick={(e) => dropDown(e)}> ¿Cómo lavar las prendas? 🞃 </button>
        <div className='content'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat aliquet cursus. Ut vulputate placerat augue, nec dictum dolor hendrerit non. In id sapien convallis massa dapibus dictum. Aliquam tempor dolor ut euismod pellentesque. Fusce vestibulum enim ultricies ligula congue semper. Aenean a est augue. Pellentesque malesuada ipsum quis neque interdum lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ornare nulla eu libero facilisis, vitae tristique justo viverra. Integer condimentum interdum metus, a commodo ligula dictum et. Vivamus in mauris ligula.

            Proin tempus risus purus, ac semper nibh dignissim nec. Morbi aliquet eget quam eu ornare. Ut varius consectetur finibus. Integer vulputate convallis scelerisque. Suspendisse mattis lorem ex, ut cursus arcu eleifend quis. Vivamus ante quam, pharetra in luctus quis, placerat nec neque. Suspendisse eleifend mauris velit, nec fermentum sem dapibus quis. Donec mi diam, accumsan ut condimentum vitae, finibus vel erat.</p>
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