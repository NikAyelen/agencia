create database agenciadeviajes;
USE agenciadeviajes;

CREATE TABLE destinos
(
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  pais VARCHAR(100) NOT NULL,
  tipo VARCHAR(30) NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
  fechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO destinos(nombre, pais, tipo, descripcion)
VALUES
('Machu Picchu', 'Peru', 'Cultural', 'Ciudad antigua rodeada de montañas'),
('Interlaken', 'Suiza', 'Montaña', 'Pueblo entre dos lagos con vista a la nieve'),
('Serengeti', 'Tanzania', 'Ecoturismo', 'Parque natural con muchos animales'),
('Queenstown', 'Nueva Zelanda', 'Aventura', 'Lugar para hacer deportes de riesgo'),
('Bora Bora', 'Polinesia Francesa', 'Playa', 'Playas con agua muy clara y azul'),
('Praga', 'Republica Checa', 'Cultural', 'Ciudad vieja con edificios antiguos bonitos'),
('Islandia', 'Islandia', 'Aventura', 'Hielo, volcanes y luces en el cielo de noche'),
('Amazonas', 'Brasil', 'Ecoturismo', 'Selva grande con muchos animales y plantas'),
('Dolomitas', 'Italia', 'Montaña', 'Montañas para caminar y ver paisajes'),
('Maldivas', 'Maldivas', 'Playa', 'Islas pequeñas con playas blancas');