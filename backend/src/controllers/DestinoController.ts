import { Request, Response } from "express";
import DestinoManager from "../managers/DestinoManager";

export default class DestinoController {
  static async obtenerDestinos(req: Request, res: Response) {
    try {
      const manager = new DestinoManager();
      const destinos = await manager.obtenerDestinos();
      res.json(destinos);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        mensaje: "Error al consultar la base de datos",
      });
    }
  }

  static async agregarDestino(req: Request, res: Response) {
    try {
      const manager = new DestinoManager();
      const destino = {
        ...req.body,
      };
      await manager.agregarDestino(destino);
      res.status(201).json({
        mensaje: "Destino registrado correctamente",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        mensaje: "Error al registrar el destino",
      });
    }
  }

  static async eliminarDestino(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const manager = new DestinoManager();
      await manager.eliminarDestino(id);
      res.json({
        mensaje: "Destino eliminado correctamente",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        mensaje: "Error al eliminar el destino",
      });
    }
  }
}
