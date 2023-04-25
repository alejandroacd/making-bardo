import './components/App.scss'
import '../src/css/bootstrap.min.css'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard  from './components/Dashboard/Dashboard'
function App() {

  return (
    <>
    <BrowserRouter>
    <div className="App">
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
{      /* <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/faq" element={<Faq />} />
      <Route exact path="/product/:id" element={<ProductScreen />} />*/ }
      <Route exact path="/camperas" element={<Dashboard category="Camperas" />} />
      <Route exact path="/pantalones" element={<Dashboard category="Pantalones" />} />

    </Routes>
    </div>
    </BrowserRouter> 
  
    </>
  );
}

export default App;
