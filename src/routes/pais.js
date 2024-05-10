const express = require('express');
const router = express.Router();
const PaisController = require('../controllers/pais'); // Importando UsuariosController
const paisController = new PaisController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/pais', paisController.obtenerDias);

router.post('/paisBuscar', paisController.buscarDia)

router.post('/paisAgregar', paisController.agregarDias);

router.put('/paisEditar/:paisId', paisController.editarDias);

router.delete('/paisEliminar/:paisId', paisController.eliminarDias);

module.exports = router;