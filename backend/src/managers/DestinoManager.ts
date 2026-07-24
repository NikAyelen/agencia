import pool from "../config/db";

export default class DestinoManager {
  async obtenerDestinos() {
    const [rows] = await pool.query("SELECT * FROM destinos");
    return rows;
  }

  async agregarDestino(destino: any) {
    const sql = `
      INSERT INTO destinos
      (nombre, pais, tipo, descripcion)
      VALUES
      (?, ?, ?, ?)
    `;
    await pool.execute(sql, [
      destino.nombre,
      destino.pais,
      destino.tipo,
      destino.descripcion,
    ]);
  }

  async eliminarDestino(id: number) {
    const sql = `
      DELETE FROM destinos
      WHERE id = ?
    `;
    await pool.execute(sql, [id]);
  }
}
