const express = require('express');
const router = express.Router();
const ComidasController = require('../controllers/restaurantes_comidas'); // Importando UsuariosController
const comidasController = new ComidasController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/comidas', comidasController.obtenerComidas);

router.post('/comidasBuscar', comidasController.buscarComidas)

router.post('/comidasAgregar', comidasController.agregarComidas);

router.put('/comidasEditar/:comidasId', comidasController.editarComidas);

router.delete('/comidasEliminar/:comidasId', comidasController.eliminarComidas);

module.exports = router;