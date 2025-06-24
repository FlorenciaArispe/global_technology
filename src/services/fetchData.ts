import supabase from "../supabase/supabase.service";


export const fetchProductos = async () => {
  const { data, error } = await supabase.from('productos').select('*').order('id', { ascending: true });
  console.log("ENTRE")
  // if (error) {
  //   if (error.message === 'JWT expired') {
  //     await supabase.auth.signOut();
  //     return [];
  //   }
  //   return [];
  // }

  return data || [];
};

