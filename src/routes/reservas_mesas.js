const express = require('express');
const router = express.Router();
const ReservasController = require('../controllers/reservas_mesas'); // Importando UsuariosController
const reservasController = new ReservasController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/reserva_mesas', reservasController.obtenerReservas);

router.post('/reserva_mesasBuscar', reservasController.buscarReservas)

router.post('/reserva_mesasAgregar', reservasController.agregarReservas);

router.put('/reserva_mesasEditar/:reservaId', reservasController.editarReservas);

router.delete('/reserva_mesasEliminar/:reservaId', reservasController.eliminarReservas);

module.exports = router;