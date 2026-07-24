import { FaTrash, FaMapMarkedAlt } from "react-icons/fa";

interface DestinoDTO {
  id: number; nombre: string; pais: string; tipo: string; descripcion: string;
}

type Props = {
  destinos: DestinoDTO[];
  eliminarDestino: (id: number) => void;
};

const coloresPorTipo: Record<string, string> = {
  Playa: "bg-cyan-100 text-cyan-700",
  Montaña: "bg-emerald-100 text-emerald-700",
  Cultural: "bg-purple-100 text-purple-700",
  Aventura: "bg-orange-100 text-orange-700",
  Ecoturismo: "bg-lime-100 text-lime-700",
};

export default function DestinoTable({ destinos, eliminarDestino }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
      <div className="flex items-center gap-2 mb-5 border-b border-slate-100 pb-3">
        <FaMapMarkedAlt className="text-red-600" size={20} />
        <h2 className="text-lg font-bold text-slate-800">Lista de destinos</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="p-3 text-left rounded-l-lg">Nombre</th>
              <th className="p-3 text-left">País</th>
              <th className="p-3 text-left">Tipo</th>
              <th className="p-3 text-left">Descripción</th>
              <th className="p-3 text-center rounded-r-lg">Acción</th>
            </tr>
          </thead>
          <tbody>
            {destinos.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center p-8 text-slate-400">
                  No existen destinos registrados.
                </td>
              </tr>
            ) : (
              destinos.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-slate-50"
                  } hover:bg-red-50 transition`}
                >
                  <td className="p-3 font-medium text-slate-800">{item.nombre}</td>
                  <td className="p-3 text-slate-600">{item.pais}</td>
                  <td className="p-3">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                        coloresPorTipo[item.tipo] ?? "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {item.tipo}
                    </span>
                  </td>
                  <td className="p-3 text-slate-600 max-w-xs truncate" title={item.descripcion}>
                    {item.descripcion}
                  </td>
                  <td className="p-3">
                    <div className="flex justify-center">
                      <button
                        className="flex items-center gap-1.5 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition"
                        onClick={() => eliminarDestino(item.id)}
                      >
                        <FaTrash size={12} />
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}