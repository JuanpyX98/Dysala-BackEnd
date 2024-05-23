const express = require('express');
const router = express.Router();
const PedidoController = require('../controllers/pedidos_llevar'); // Importando UsuariosController
const pedidoController = new PedidoController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/pedidoLlevar', pedidoController.obtenerPedido);

router.post('/pedido_llevarBuscar', pedidoController.buscarPedido)

router.post('/pedido_llevarAgregar', pedidoController.agregarPedido);

router.put('/pedido_llevarEditar/:pedidoId', pedidoController.editarPedido);

router.delete('/pedido_llevarEliminar/:pedidoId', pedidoController.eliminarPedido);

module.exports = router;