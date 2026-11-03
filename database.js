const { Sequelize } = require('sequelize');

// Configuramos la conexión a MySQL (XAMPP corregido)
const sequelize = new Sequelize('atencion_total_db', 'root', '123456', {
  host: '127.0.0.1', // Forzamos IP para que respete el puerto
  port: 3307,        // <--- Añadimos tu puerto correcto
  dialect: 'mysql',
  logging: false 
});

module.exports = sequelize;
