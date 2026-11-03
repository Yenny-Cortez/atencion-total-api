const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// GET: Listar
router.get('/', async (req, res) => {
  const contacts = await Contact.findAll();
  res.json(contacts);
});

// POST: Crear
router.post('/', async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT: Actualizar
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByPk(id);
    if (contact) {
      await contact.update(req.body);
      res.json(contact);
    } else {
      res.status(404).json({ message: 'No encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE: Eliminar
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByPk(id);
    if (contact) {
      await contact.destroy();
      res.json({ message: 'Eliminado' });
    } else {
      res.status(404).json({ message: 'No encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;