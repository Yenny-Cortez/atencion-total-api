const { DataTypes } = require('sequelize');
const sequelize = require('../database');
 // Importamos la conexión desde app.js

const Contact = sequelize.define('Contact', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'contacts',
  timestamps: true
});

module.exports = Contact;