const express = require('express');
const router = express.Router();
const EstadosController = require('../controllers/estados'); // Importando UsuariosController
const estadosController = new EstadosController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/estado', estadosController.obtenerEstados);

router.post('/estadoBuscar', estadosController.buscarEstado)

router.post('/estadoAgregar', estadosController.agregarEstados);

router.put('/estadoEditar/:estadoId', estadosController.editarEstados);

router.delete('/estadoEliminar/:estadoId', estadosController.eliminarEstados);

module.exports = router;