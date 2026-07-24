const URL = "http://localhost:3000/destinos";

export async function obtenerDestinos() {
  const respuesta = await fetch(URL);
  if (!respuesta.ok) {
    throw new Error("Error al obtener los destinos");
  }
  return await respuesta.json();
}

export async function agregarDestino(destino: any) { //Unexpected any. Specify a different type.
  const respuesta = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(destino),
  });
  if (!respuesta.ok) {
    throw new Error("Error al registrar el destino");
  }
}

export async function eliminarDestino(id: number) {
  const respuesta = await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });
  if (!respuesta.ok) {
    throw new Error("Error al eliminar el destino");
  }
}
