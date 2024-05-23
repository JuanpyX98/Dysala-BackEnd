const express = require('express');
const router = express.Router();
const ProvinciasController = require('../controllers/provincias_departamentos'); // Importando UsuariosController
const provinciaController = new ProvinciasController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/provincia_depart', provinciaController.obtenerProvincias);

router.post('/provincia_departBuscar', provinciaController.buscarProvincias)

router.post('/provincia_departAgregar', provinciaController.agregarProvincias);

router.put('/provincia_departEditar/:provinciaId', provinciaController.editarProvincias);

router.delete('/provincia_departEliminar/:provinciaId', provinciaController.eliminarProvincias);

module.exports = router;