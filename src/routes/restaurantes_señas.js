const express = require('express');
const router = express.Router();
const SeñasController = require('../controllers/restaurantes_señas'); // Importando UsuariosController
const señasController = new SeñasController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/señas', señasController.obtenerSeñas);

router.post('/señasBuscar', señasController.buscarSeñas)

router.post('/señasAgregar', señasController.agregarSeñas);

router.put('señasEditar/:señasId', señasController.editarSeñas);

router.delete('/señasEliminar/:señasId', señasController.eliminarSeñas);

module.exports = router;