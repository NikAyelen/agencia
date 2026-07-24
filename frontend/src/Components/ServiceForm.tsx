import { HiOutlinePlusCircle } from "react-icons/hi2";

type Props = {
  nombre: string; setNombre: (valor: string) => void;
  pais: string; setPais: (valor: string) => void;
  tipo: string; setTipo: (valor: string) => void;
  descripcion: string; setDescripcion: (valor: string) => void;
  registrarDestino: () => void;
};

export default function DestinoForm({
  nombre, setNombre, pais, setPais, tipo, setTipo, descripcion, setDescripcion,
  registrarDestino,
}: Props) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Registrar nuevo destino</h2>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Nombre</label>
        <input
          type="text"
          className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ej. Playa del Carmen"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">País</label>
        <input
          type="text"
          className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ej. México"
          value={pais}
          onChange={(e) => setPais(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Tipo de destino</label>
        <select
          className="w-full border rounded p-2"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value="Playa">Playa</option>
          <option value="Montaña">Montaña</option>
          <option value="Cultural">Cultural</option>
          <option value="Aventura">Aventura</option>
          <option value="Ecoturismo">Ecoturismo</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block mb-1 font-semibold">Descripción</label>
        <textarea
          className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Descripción del destino"
          rows={3}
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>

      <button
        type="button"
        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
        onClick={registrarDestino}
      >
        <HiOutlinePlusCircle size={20} />
        Agregar destino
      </button>
    </div>
  );
}
