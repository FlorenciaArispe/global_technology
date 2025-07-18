import supabase from "./supabase.service";

async function getProductos() {
  console.log("entre en get productos")
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

export { getProductos , getProductosDestacados , getProductoPorId};
