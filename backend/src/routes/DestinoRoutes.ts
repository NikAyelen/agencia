import { Router } from "express";
import DestinoController from "../controllers/DestinoController";

const router = Router();

router.get("/", DestinoController.obtenerDestinos); //obtener
router.post("/", DestinoController.agregarDestino); //guardar
router.delete("/:id", DestinoController.eliminarDestino); //eliminar

export default router;
