const express = require('express');
const router = express.Router();
const RolesController = require('../controllers/roles');
const rolesController = new RolesController(); 
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los roles
router.get('/roles', rolesController.obtenerRoles);

router.post('/rolesBuscar', rolesController.buscarRoles)

router.post('/rolesAgregar', rolesController.agregarRoles);

router.put('/rolesEditar/:rolesId', rolesController.editarRoles);

router.delete('/rolesEliminar/:rolesId', rolesController.eliminarRoles);

module.exports = router;