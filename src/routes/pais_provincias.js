const express = require('express');
const router = express.Router();
const PaisProvinciaController = require('../controllers/pais_provincias'); // Importando UsuariosController
const paisProvinciaController = new PaisProvinciaController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/pais_provincia', paisProvinciaController.obtenerPaisProvincia);

router.post('/pais_provinciaBuscar', paisProvinciaController.buscarPaisProvincia)

router.post('/pais_provinciaAgregar', paisProvinciaController.agregarPaisProvincia);

router.put('/pais_provinciaEditar/:paisPorvinciaId', paisProvinciaController.editarPaisProvincia);

router.delete('/pais_provinciaEliminar/:paisProvinciaId', paisProvinciaController.eliminarPaisProvincia);

module.exports = router;