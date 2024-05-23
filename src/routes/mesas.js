const express = require('express');
const router = express.Router();
const MesasController = require('../controllers/mesas'); // Importando UsuariosController
const mesasController = new MesasController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/mesa', mesasController.obtenerMesas);

router.post('/mesaBuscar', mesasController.buscarMesas)

router.post('/mesaAgregar', mesasController.agregarMesas);

router.put('mesaEditar/:mesaId', mesasController.editarMesas);

router.delete('/mesaEliminar/:mesaId', mesasController.eliminarMesas);

module.exports = router;