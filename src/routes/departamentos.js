const express = require('express');
const router = express.Router();
const DepartsController = require('../controllers/departamentos'); // Importando UsuariosController
const departsController = new DepartsController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


router.get('/departamento', departsController.obtenerDeparts);

router.post('/departamentoBuscar', departsController.buscarDeparts)

router.post('/departamentoAgregar', departsController.agregarDeparts);

router.put('/departamentoEditar/:departamentoId', departsController.editarDeparts);

router.delete('/departamentoEliminar/:departamentoId', departsController.eliminarDeparts);

module.exports = router;