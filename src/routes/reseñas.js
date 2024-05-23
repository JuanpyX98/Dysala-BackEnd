const express = require('express');
const router = express.Router();
const ReseñasController = require('../controllers/reseñas'); // Importando UsuariosController
const reseñasController = new ReseñasController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/reseña', reseñasController.obtenerReseñas);

router.post('/reseñaBuscar', reseñasController.buscarReseñas)

router.post('/reseñaAgregar', reseñasController.agregarReseñas);

router.put('/reseñaEditar/:reseñaId', reseñasController.editarReseñas);

router.delete('/reseñaEliminar/:reseñaId', reseñasController.eliminarReseñas);

module.exports = router;