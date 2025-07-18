// supabase/categorias.service.ts
import supabase from './supabase.service';

async function getCategorias() {
  const { data, error } = await supabase
.from('categoria') 
    .select('*')
    .order('id', { ascending: true });
    console.log(data)

  if (error) {
    console.error('Error al obtener categorías:', error);
    throw error;
  }

  return data;
}

export { getCategorias };