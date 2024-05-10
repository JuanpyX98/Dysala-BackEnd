const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/usuarios'); // Importando UsuariosController
const usuariosController = new UsuariosController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/user', usuariosController.obtenerUsuarios);

router.post('/userBuscar', usuariosController.buscarUsuario)

router.post('/userAgregar', usuariosController.agregarUsuarios);

router.put('/userEditar/:userId', usuariosController.editarUsuarios);

router.delete('/userEliminar/:userId', usuariosController.eliminarUsuarios);

module.exports = router;
