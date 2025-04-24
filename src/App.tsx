import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Carrito from './pages/Carrito';
import Navbar from './components/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {
  return (
    <ChakraProvider>
    <Router>
    <div>
          <Navbar />

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </div>
    </Router>
    </ChakraProvider>
  )
}

export default App
