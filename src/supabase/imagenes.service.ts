import supabase from "./supabase";

export const getImagenesInicio = async () => {
  const { data, error } = await supabase
    .from("imagenes_inicio")
    .select("*")
    .eq("activo", true)
    .order("orden", { ascending: true });

  if (error) {
    console.error("Error al obtener imágenes:", error);
    return [];
  }

  return data;
};
