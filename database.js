const { Sequelize } = require('sequelize');

// Configuramos la conexión a MySQL para que funcione dentro de Docker
const sequelize = new Sequelize('atencion_total_db', 'root', '123456', {
  host: 'host.docker.internal', // <--- Cambiado para Docker
  port: 3307,                   // Mantenemos tu puerto correcto
  dialect: 'mysql',
  logging: false 
});

module.exports = sequelize;