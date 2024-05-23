const express = require('express');
const router = express.Router();
const PedidoController = require('../controllers/pedidos_restaurantes'); // Importando UsuariosController
const pedidoController = new PedidoController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/pedido', pedidoController.obtenerPedido);

router.post('/pedidoBuscar', pedidoController.buscarPedido)

router.post('/pedidoAgregar', pedidoController.agregarPedido);

router.put('/pedidoEditar/:pedidoId', pedidoController.editarPedido);

router.delete('/pedidoEliminar/:pedidoId', pedidoController.eliminarPedido);

module.exports = router;