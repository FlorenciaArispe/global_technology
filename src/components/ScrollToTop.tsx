import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const rutasQueScrollean = ['/productos', '/producto', '/plan-canje']; 

    const debeScrollear = rutasQueScrollean.some((ruta) =>
      pathname.startsWith(ruta)
    );

    if (debeScrollear) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
