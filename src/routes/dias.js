const express = require('express');
const router = express.Router();
const DiasController = require('../controllers/dias'); // Importando UsuariosController
const diasController = new DiasController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/dia', diasController.obtenerDias);

router.post('/diaBuscar', diasController.buscarDia)

router.post('/diaAgregar', diasController.agregarDias);

router.put('/diaEditar/:diaId', diasController.editarDias);

router.delete('/diaEliminar/:diaId', diasController.eliminarDias);

module.exports = router;