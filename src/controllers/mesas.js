// Dysala-BackEnd/controllers/usuariosController.js

const mesasService = require('../services/mesas');
const pool = require('../../database')

class MesasController {

    async obtenerMesas(req, res) {
        try {
            const pais = await mesasService.getAllMesasController();
            res.status(200).json(pais);
        } catch (error) {
            console.error('Error al obtener Mesas:', error);
            res.status(500).json({ message: 'Error al obtener Mesas de la base de datos' });
        }
    }

    async agregarMesas(req, res) {
        try {
            const { id_restaurante, num_mesa, cantidad, id_estado } = req.body;
            const newDia = await mesasService.addMesas(id_restaurante, num_mesa, cantidad, id_estado);
            res.status(200).json(newDia.rows);
        } catch (error) {
            console.error('Error al agregar Mesas:', error);
            res.status(500).json({ message: 'Error al agregar Mesas a la base de datos', error: error.message });
        }
    }
    
    async editarMesas(req, res) {
        const client = await pool.connect();
        try {
            const { id_restaurante, num_mesa, cantidad, id_estado  } = req.body;
            const { mesaId } = req.params;
            const parsedMesasId = parseInt(mesaId);

            const newDia = await mesasService.editMesas(id_restaurante, num_mesa, cantidad, id_estado, parsedMesasId);
            res.status(200).json(newDia.rows);
            
        } catch (error) {
            console.error('Error al editar Mesas:', error);
            res.status(500).json({ message: 'Error al editar Mesas en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarMesas(req, res) {
        try {
            
            const mesaId = req.body['id_mesa']; 
            const parsedMesasId = parseInt(mesaId);
            const newUser = await mesasService.lookMesas(parsedMesasId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener Mesas:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener Mesas de la base de datos' });
        }
    }
    
    async eliminarMesas(req, res) {
        try {
            const mesaId = req.params.mesaId;
            const parsedMesasId = parseInt(mesaId);
            const newUser = await mesasService.deleteMesas(parsedMesasId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar Mesas:', error);
            res.status(500).json({ error: 'Error al eliminar Mesas' });
        }
    }
    
}

module.exports = MesasController;
