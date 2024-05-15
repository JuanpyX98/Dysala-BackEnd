const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/administradores'); 
const adminController = new AdminController(); 
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/admin', adminController.obtenerAdmin);

router.post('/adminBuscar', adminController.buscarAdmin)

router.post('/adminAgregar', adminController.agregarAdmin);

router.put('/adminEditar/:adminId', adminController.editarAdmin);

router.delete('/adminEliminar/:adminId', adminController.eliminarAdmin);

module.exports = router;