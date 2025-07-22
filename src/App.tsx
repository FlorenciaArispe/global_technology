import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Navbar from './components/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer';
import Productos from './pages/Productos';
import ScrollToTop from './components/ScrollToTop';
import DetalleProducto from './components/DetalleProducto';
import PlanCanje from './pages/PlanCanje';
import Contacto from './pages/Contacto';
import { useEffect } from 'react';
import { guardarCotizacionSiNoExiste } from './supabase/cotizacion.service';
import { CotizacionProvider } from './context/CotizacionContext';
import QuienesSomos from './pages/QuienesSomos';
import PoliticaYgarantia from './pages/PoliticaYgarantia';



function App() {


useEffect(() => {
  guardarCotizacionSiNoExiste(); 
}, []);

  return (
    <ChakraProvider>
       <CotizacionProvider>
    <Router>
    <ScrollToTop /> 
    <div>       
          <Navbar />

          <Routes>
            <Route path="/" element={<Inicio />} />
            {/* <Route path="/carrito" element={<Carrito />} /> */}
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/:id" element={<DetalleProducto />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/plan-canje" element={<PlanCanje />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/politicaygarantia" element={<PoliticaYgarantia />} />
            
            
          </Routes>

          <Footer />
        </div>
    </Router>
    </CotizacionProvider>
    </ChakraProvider>
  )
}

export default App
