const express = require('express');
const router = express.Router();
const bobiaController = require('../controllers/bobiaController');

// Rota idêntica ao endpoint original
router.post('/publicar', bobiaController.publicar);

module.exports = router;