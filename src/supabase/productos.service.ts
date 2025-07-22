import supabase from "./supabase";

async function getProductos() {
  const { data, error } = await supabase
    .from("productos")
    .select();

  if (error) throw error;

  return data;
}

async function getProductosDestacados() {
  const { data, error } = await supabase
    .from("productos")
    .select("*")
    .eq("destacado", true);

  if (error) throw error;
  return data;
}

async function getProductoPorId(id) {
  const { data, error } = await supabase
    .from('productos')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}

async function getDetallesProducto(productoId: number) {
  console.log("ID", productoId)
  const { data, error } = await supabase
    .from("productos_detalles")
    .select('*')
    .eq('producto_id', productoId);
    console.log("DATAAAA", data)

  if (error) {
    console.error('Error al obtener los detalles:', error);
    throw error;
  }

  return data;
}

export { getProductos , getProductosDestacados , getProductoPorId , getDetallesProducto};
