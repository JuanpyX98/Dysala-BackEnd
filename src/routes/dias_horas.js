const express = require('express');
const router = express.Router();
const DiasHorasController = require('../controllers/dias_horas'); // Importando UsuariosController
const diasHorasController = new DiasHorasController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/dia_hora', diasHorasController.obtenerDiasHoras);

router.post('/dia_horaBuscar', diasHorasController.buscarDiaHoras)

router.post('/dia_horaAgregar', diasHorasController.agregarDiasHoras);

router.put('/dia_horaEditar/:diaHoraId', diasHorasController.editarDiasHoras);

router.delete('/dia_horaEliminar/:diaHoraId', diasHorasController.eliminarDiasHoras);

module.exports = router;