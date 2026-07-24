//configurar express
//Configurar Express
import express from "express";
import cors from "cors";
import destinoRoutes from "./routes/DestinoRoutes";

const app = express();
app.use(cors());
app.use(express.json());

app.use(
  "/destinos", //A donde quieres llegar   //ruta
  destinoRoutes //el q te ""ATENDERA""     //navegador
);

app.get("/", (req, res) => { //req y res para solicitar y emitir respuestas desde back

  res.json({
    mensaje: "Backend Mini Agencia de Viajes funcionando",
  });

});

export default app;
