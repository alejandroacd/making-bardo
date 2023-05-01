import './components/App.scss'
import '../src/css/bootstrap.min.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import ProductDetail from './components/ProductDetails/ProductDetail'
import Dashboard  from './components/Dashboard/Dashboard'
import Catalogo  from './components/Catalogo/Catalogo'
import Contacto from './components/Contacto/Contacto'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './contexts/cartContext'
function App() {

  return (
    <>
<CartProvider>

    <BrowserRouter>
    <div className="App">
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
{      /* <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/faq" element={<Faq />} />
      */ }
      <Route exact path="/product/" element={<ProductDetail />} />
      <Route exact path="/camperas" element={<Dashboard category="Camperas" />} />
      <Route exact path="/pantalones" element={<Dashboard category="Pantalones" />} />
      <Route exact path="/catalogo" element={<Catalogo />} />
      <Route exact path='/contacto' element={<Contacto />} /> 
    </Routes>
    </div>
    </BrowserRouter> 
    </CartProvider>
    </>
  );
}

export default App;
