const express = require('express');
const router = express.Router();
const PropinasController = require('../controllers/propinas'); // Importando UsuariosController
const propinasController = new PropinasController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/propina', propinasController.obtenerPropinas);

router.post('/propinaBuscar', propinasController.buscarPropinas)

router.post('/propinaAgregar', propinasController.agregarPropinas);

router.put('/propinaEditar/:propinasId', propinasController.editarPropinas);

router.delete('/propinaEliminar/:propinaId', propinasController.eliminarPropinas);

module.exports = router;