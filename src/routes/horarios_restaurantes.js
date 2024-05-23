const express = require('express');
const router = express.Router();
const HorariosController = require('../controllers/horarios_restaurantes'); // Importando UsuariosController
const horariosController = new HorariosController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/horarios', horariosController.obtenerHorarios);

router.post('/horariosBuscar', horariosController.buscarHorarios)

router.post('/horariosAgregar', horariosController.agregarHorarios);

router.put('/horariosEditar/:horariosId', horariosController.editarHorarios);

router.delete('/horariosEliminar/:horariosId', horariosController.eliminarHorarios);

module.exports = router;