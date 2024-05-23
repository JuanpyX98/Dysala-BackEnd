const express = require('express');
const router = express.Router();
const RestsController = require('../controllers/restaurantes'); // Importando UsuariosController
const restsController = new RestsController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/restaurante', restsController.obtenerRests);

router.post('/restauranteBuscar', restsController.buscarRests)

router.post('/restauranteAgregar', restsController.agregarRests);

router.put('restauranteEditar/:restauranteId', restsController.editarRests);

router.delete('/restauranteEliminar/:restauranteId', restsController.eliminarRests);

module.exports = router;