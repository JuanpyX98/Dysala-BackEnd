const express = require('express');
const router = express.Router();
const PagosController = require('../controllers/metodos_pagos'); // Importando UsuariosController
const pagosController = new PagosController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/pago', pagosController.obtenerPagos);

router.post('/pagoBuscar', pagosController.buscarPagos)

router.post('/pagoAgregar', pagosController.agregarPagos);

router.put('/pagoEditar/:pagoId', pagosController.editarPagos);

router.delete('/pagoEliminar/:pagoId', pagosController.eliminarPagos);

module.exports = router;