const express = require('express');
const router = express.Router();
const Est_RetiroController = require('../controllers/estados_retiros'); // Importando UsuariosController
const estRetController = new Est_RetiroController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/est_retiro', estRetController.obtenerEst_Retiro);

router.post('/est_retiroBuscar', estRetController.buscarEst_Retiro)

router.post('/est_retiroAgregar', estRetController.agregarEst_Retiro);

router.put('/est_retiroEditar/:est_retiroId', estRetController.editarEst_Retiro);

router.delete('/est_retiroEliminar/:est_retiroId', estRetController.eliminarEst_Retiro);

module.exports = router;