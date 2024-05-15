const express = require('express');
const router = express.Router();
const AdminLocalController = require('../controllers/administradores_locales'); 
const adminLocalController = new AdminLocalController(); 
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/admin_local', adminLocalController.obtenerAdminLocal);

router.post('/admin_localBuscar', adminLocalController.buscarAdminLocal)

router.post('/admin_localAgregar', adminLocalController.agregarAdminLocal);

router.put('/admin_localEditar/:adminId', adminLocalController.editarAdminLocal);

router.delete('/admin_localEliminar/:adminId', adminLocalController.eliminarAdminLocal);

module.exports = router;