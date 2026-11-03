const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database'); // Importamos la conexión limpia
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));
// Probar conexión y sincronizar tablas
sequelize.authenticate()
  .then(() => {
    console.log('✅ Conectado a MySQL (XAMPP)');
    return sequelize.sync(); 
  })
  .then(() => console.log('✅ Tablas creadas/sincronizadas en la base de datos'))
  .catch(err => console.error('❌ Error de conexión a MySQL:', err));

// Rutas
app.use('/api/contacts', contactRoutes);

// Servidor
app.listen(PORT, () => {
  console.log(`🚀 API REST corriendo en http://localhost:${PORT}`);
});