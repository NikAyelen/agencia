# Mini Agencia de Viajes

Proyecto de examen: React + TypeScript (frontend) y Express + TypeScript (backend), conectado a MySQL.

## Estructura

```
agencia-viajes/
  AgenciaViajes.sql        <- script de ejemplo (usa el que te entreguen en el examen, sin modificar su estructura)
  backend/
    src/
      config/db.ts
      controllers/DestinoController.ts
      managers/DestinoManager.ts
      routes/DestinoRoutes.ts
      app.ts
      server.ts
      testConnection.ts
  frontend/
    src/
      Components/DestinoForm.tsx
      Components/DestinoTable.tsx
      Services/api.ts
      App.tsx
      main.tsx
```

## 1. Base de datos

1. Abre MySQL Workbench (o tu cliente favorito).
2. Ejecuta el script `AgenciaViajes.sql` (o el que te entregue el profesor) tal cual, sin modificar la estructura.
3. Ajusta en `backend/src/config/db.ts` el `user` y `password` con los de tu servidor MySQL local.

## 2. Backend

```bash
cd backend
npm install
npm run test-db   # verifica la conexión a MySQL
npm run dev       # levanta el servidor en http://localhost:3000
```

Rutas disponibles:
- GET    /destinos      -> obtener destinos
- POST   /destinos      -> agregar destino
- DELETE /destinos/:id  -> eliminar destino

## 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

Se abrirá en http://localhost:5173 (o el puerto que indique Vite).

## Notas

- No se usan datos simulados ni LocalStorage: todo se consulta directamente a MySQL a través del backend.
- El formulario usa un `<select>` con las opciones Playa, Montaña, Cultural, Aventura y Ecoturismo, tal como pide la actividad.
- Cada fila de la tabla incluye un botón "Eliminar" que llama al DELETE del backend.
