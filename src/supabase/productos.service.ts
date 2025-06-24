import supabase from "./supabase.service";


async function getProductos() {
  const { data, error } = await supabase
    .from("productos")
    .select()
  if (error) {
    if (error.message === "JWT expired") {
      await supabase.auth.signOut();
      return;
    }
    throw error;
  }
  return data;
}

export { getProductos };