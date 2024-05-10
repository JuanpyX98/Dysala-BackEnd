const express = require('express');
const router = express.Router();
const PaisController = require('../controllers/pais'); // Importando UsuariosController
const paisController = new PaisController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/pais', paisController.obtenerPais);

router.post('/paisBuscar', paisController.buscarPais)

router.post('/paisAgregar', paisController.agregarPais);

router.put('/paisEditar/:paisId', paisController.editarPais);

router.delete('/paisEliminar/:paisId', paisController.eliminarPais);

module.exports = router;