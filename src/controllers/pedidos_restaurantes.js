// Dysala-BackEnd/controllers/usuariosController.js

const pedidoService = require('../services/pedidos_restaurantes');
const pool = require('../../database')

class PedidoController {

    async obtenerPedido(req, res) {
        try {
            const pais = await pedidoService.getAllPedido();
            res.status(200).json(pais);
        } catch (error) {
            console.error('Error al obtener Pedido:', error);
            res.status(500).json({ message: 'Error al obtener Pedido de la base de datos' });
        }
    }

    async agregarPedido(req, res) {
        try {
            const { id_pedidolocal, id_comida, cantidad, total, id_estado, id_admin } = req.body;
            const newDia = await pedidoService.addPedido(id_pedidolocal, id_comida, cantidad, total, id_estado, id_admin);
            res.status(200).json(newDia.rows);
        } catch (error) {
            console.error('Error al agregar Pedido:', error);
            res.status(500).json({ message: 'Error al agregar Pedido a la base de datos', error: error.message });
        }
    }
    
    async editarPedido(req, res) {
        const client = await pool.connect();
        try {
            const { id_pedidolocal, id_comida, cantidad, total, id_estado, id_admin  } = req.body;
            const { pedidoId } = req.params;
            const parsedPedidoId = parseInt(pedidoId);

            const newDia = await pedidoService.editPedido(id_pedidolocal, id_comida, cantidad, total, id_estado, id_admin, parsedPedidoId);
            res.status(200).json(newDia.rows);
            
        } catch (error) {
            console.error('Error al editar Pedido:', error);
            res.status(500).json({ message: 'Error al editar Pedido en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarPedido(req, res) {
        try {
            
            const pedidoId = req.body['id_pedidolocal']; 
            const parsedPedidoId = parseInt(pedidoId);
            const newUser = await pedidoService.lookPedido(parsedPedidoId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener Pedido:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener Pedido de la base de datos' });
        }
    }
    
    async eliminarPedido(req, res) {
        try {
            const pedidoId = req.params.pedidoId;
            const parsedPedidoId = parseInt(pedidoId);
            const newUser = await pedidoService.deletePedido(parsedPedidoId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar Pedido:', error);
            res.status(500).json({ error: 'Error al eliminar Pedido' });
        }
    }
    
}

module.exports = PedidoController;
