import { useState, useEffect } from "react";
import { FaPlane } from "react-icons/fa";
import DestinoForm from "./Components/ServiceForm";
import DestinoTable from "./Components/ServiceTable";

import {
  obtenerDestinos,
  agregarDestino,
  eliminarDestino,
} from "./Services/api";

interface DestinoDTO {
  id: number; nombre: string; pais: string; tipo: string; descripcion: string;
}

export default function App() {
  const [nombre, setNombre] = useState("");
  const [pais, setPais] = useState("");
  const [tipo, setTipo] = useState("Playa");
  const [descripcion, setDescripcion] = useState("");
  const [destinos, setDestinos] = useState<DestinoDTO[]>([]);

  useEffect(() => {
    cargarDestinos();
  }, []);

  async function cargarDestinos() {
    try {
      const datos = await obtenerDestinos();
      setDestinos(datos);
    } catch (error) {
      console.error(error);
    }
  }

  async function registrarDestino(): Promise<void> {
    try {
      await agregarDestino({
        nombre,
        pais,
        tipo,
        descripcion,
      });
      await cargarDestinos();
      limpiarFormulario();
      alert("Destino registrado correctamente");
    } catch (error) {
      console.error(error);
    }
  }

  async function EliminarDestino(id: number): Promise<void> {
    try {
      await eliminarDestino(id);
      await cargarDestinos();
      alert("Destino eliminado correctamente");
    } catch (error) {
      console.error(error);
    }
  }

  function limpiarFormulario() {
    setNombre("");
    setPais("");
    setTipo("Playa");
    setDescripcion("");
  }

  return (
    <>
      <header className="bg-red-600 text-white px-6 py-4 flex items-center gap-3 shadow-md">
        <FaPlane size={24} />
        <h1 className="text-xl font-bold tracking-wide">Agencia de Viajes</h1>
      </header>

      <main className="p-6 md:p-8 bg-slate-100 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-6 items-start">
          <DestinoForm
            nombre={nombre}
            setNombre={setNombre}
            pais={pais}
            setPais={setPais}
            tipo={tipo}
            setTipo={setTipo}
            descripcion={descripcion}
            setDescripcion={setDescripcion}
            registrarDestino={registrarDestino}
          />

          <DestinoTable
            destinos={destinos}
            eliminarDestino={EliminarDestino}
          />
        </div>
      </main>
    </>
  );
}