const express = require('express');
const router = express.Router();
const ProvinciasController = require('../controllers/provincias'); // Importando UsuariosController
const provinciaController = new ProvinciasController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/provincia', provinciaController.obtenerProvincias);

router.post('/provinciaBuscar', provinciaController.buscarProvincias)

router.post('/provinciaAgregar', provinciaController.agregarProvincias);

router.put('/provinciaEditar/:provinciaId', provinciaController.editarProvincias);

router.delete('/provinciaEliminar/:provinciaId', provinciaController.eliminarProvincias);

module.exports = router;