import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { CartProvider } from './contexts/cartContext'
import { lazy, Suspense } from 'react'
import './components/App.scss'
import '../src/css/bootstrap.min.css'
import Header from './components/Header/Header'
const Home = lazy(() =>import('./components/Home/Home'))
const Dashboard = lazy(() => import('./components/Dashboard/Dashboard'))
const Catalogo = lazy(() => import('./components/Catalogo/Catalogo'))
const ProductDetail = lazy(() => import('./components/ProductDetails/ProductDetail'))
const Contacto = lazy(() => import('./components/Contacto/Contacto'))
const Faq = lazy(() =>import('./components/Faq/Faq'))

function App() {

  return (
    <>
<CartProvider>

    <BrowserRouter>
    <div className="App">
    <Header />
    <Routes>
      <Route exact path="/" element={<Suspense fallback={<div className='landing-loading'><div className='lds-dual-ring'></div> </div>}> <Home /> </Suspense>} />
      <Route exact path="/product/" element={<Suspense fallback={<div className='landing-loading'><div className='lds-dual-ring'></div> </div>}> <ProductDetail /> </Suspense>} />
      <Route exact path="/camperas" element={<Suspense fallback={<div className='landing-loading'><div className='lds-dual-ring'></div> </div>}> <Dashboard category="Camperas" /> </Suspense>}   />
      <Route exact path="/pantalones" element={<Suspense fallback={<div className='landing-loading'><div className='lds-dual-ring'></div> </div>}> <Dashboard category="Pantalones" /> </Suspense>}   />
      <Route exact path="/chalecos" element={<Suspense fallback={<div className='landing-loading'><div className='lds-dual-ring'></div> </div>}> <Dashboard category="Chalecos" /> </Suspense>}  />
      <Route exact path="/catalogo" element={<Suspense fallback={<div className='landing-loading'><div className='lds-dual-ring'></div> </div>}> <Catalogo /> </Suspense>} />
      <Route exact path='/contacto' element={<Suspense fallback={<div className='landing-loading'><div className='lds-dual-ring'></div> </div>}> <Contacto /> </Suspense>} /> 
      <Route exact path='/faq' element={<Suspense fallback={<div className='landing-loading'><div className='lds-dual-ring'></div> </div>}> <Faq /> </Suspense>} />
      
    </Routes>
    </div>
    </BrowserRouter> 
    </CartProvider>
    </>
  );
}

export default App;
