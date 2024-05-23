const express = require('express');
const router = express.Router();
const ReservasController = require('../controllers/reservas'); // Importando UsuariosController
const reservasController = new ReservasController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/reserva', reservasController.obtenerReservas);

router.post('/reservaBuscar', reservasController.buscarReservas)

router.post('/reservaAgregar', reservasController.agregarReservas);

router.put('/reservaEditar/:reservaId', reservasController.editarReservas);

router.delete('/reservaEliminar/:reservaId', reservasController.eliminarReservas);

module.exports = router;