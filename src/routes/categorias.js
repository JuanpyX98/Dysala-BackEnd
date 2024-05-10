const express = require('express');
const router = express.Router();
const CategoriasController = require('../controllers/categorias'); // Importando UsuariosController
const categoriasController = new CategoriasController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/categoria', categoriasController.obtenerCategorias);

router.post('/categoriaBuscar', categoriasController.buscarCategorias)

router.post('/categoriaAgregar', categoriasController.agregarCategorias);

router.put('/categoriaEditar/:categoriaId', categoriasController.editarCategorias);

router.delete('/categoriaEliminar/:categoriaId', categoriasController.eliminarCategorias);

module.exports = router;