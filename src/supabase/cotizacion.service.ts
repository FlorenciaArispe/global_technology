// supabase/cotizacion.service.ts
import supabase from './supabase';
import axios from 'axios';

export const guardarCotizacionSiNoExiste = async () => {
  const hoy = new Date().toISOString().split('T')[0]; // formato YYYY-MM-DD

 await supabase.from('cotizaciones').delete().not('fecha', 'eq', hoy);

  // 1. Consultar si ya existe una cotización para hoy
  const { data, error } = await supabase
    .from('cotizaciones')
    .select('*')
    .eq('fecha', hoy)
      .maybeSingle();

  if (data) {
    return data.valor;
  }

  // 2. Si no existe, obtener desde dolarapi.com
  try {
    const res = await axios.get('https://dolarapi.com/v1/dolares/blue');
    const valor = res.data.venta;

    const { error } = await supabase.from('cotizaciones').insert([
      {
        fecha: hoy,
        valor: valor,
      },
    ]);

    if (error) throw error;
    return valor;
  } catch (err) {
    console.error('Error al guardar cotización:', err);
    return null;
  }
};


export const obtenerCotizacionDelDia = async (): Promise<number | null> => {
  const hoy = new Date().toISOString().split('T')[0];

  const { data, error } = await supabase
    .from('cotizaciones')
    .select('valor')
    .eq('fecha', hoy)
    .maybeSingle();

  if (error) {
    console.error('Error al obtener cotización:', error);
    return null;
  }

  return data?.valor ?? null;
};

