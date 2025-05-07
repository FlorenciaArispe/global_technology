import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Carrito from './pages/Carrito';
import Navbar from './components/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer';
import Productos from './pages/Productos';
import ScrollToTop from './components/ScrollToTop';
import DetalleProducto from './components/DetalleProducto';
import Contacto from './pages/Contacto';
import PlanCanje from './pages/PlanCanje';



function App() {
  return (
    <ChakraProvider>
    <Router>
    <ScrollToTop /> 
    <div>       
          <Navbar />

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/:id" element={<DetalleProducto />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/plan-canje" element={<PlanCanje />} />

          </Routes>

          <Footer />
        </div>
    </Router>
    </ChakraProvider>
  )
}

export default App
