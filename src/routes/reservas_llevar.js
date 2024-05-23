const express = require('express');
const router = express.Router();
const ReservasController = require('../controllers/reservas_llevar'); // Importando UsuariosController
const reservasController = new ReservasController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/reserva_llevar', reservasController.obtenerReservas);

router.post('/reserva_llevarBuscar', reservasController.buscarReservas)

router.post('/reserva_llevarAgregar', reservasController.agregarReservas);

router.put('/reserva_llevarEditar/:reservaId', reservasController.editarReservas);

router.delete('/reserva_llevarEliminar/:reservaId', reservasController.eliminarReservas);

module.exports = router;