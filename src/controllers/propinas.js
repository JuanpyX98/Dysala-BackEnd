// Dysala-BackEnd/controllers/usuariosController.js

const propinaService = require('../services/propinas');
const pool = require('../../database')

class PropinasController {

    async obtenerPropinas(req, res) {
        try {
            const pais = await propinaService.getAllPropinas();
            res.status(200).json(pais);
        } catch (error) {
            console.error('Error al obtener Propinas:', error);
            res.status(500).json({ message: 'Error al obtener Propinas de la base de datos' });
        }
    }

    async agregarPropinas(req, res) {
        try {
            const { id_restaurante, propina } = req.body;
            const newDia = await propinaService.addPropinas(id_restaurante, propina);
            res.status(200).json(newDia.rows);
        } catch (error) {
            console.error('Error al agregar Propinas:', error);
            res.status(500).json({ message: 'Error al agregar Propinas a la base de datos', error: error.message });
        }
    }
    
    async editarPropinas(req, res) {
        const client = await pool.connect();
        try {
            const { id_restaurante, propina } = req.body;
            const { propinaId } = req.params;
            const parsedPropinasId = parseInt(propinaId);

            const newDia = await propinaService.editPropinas(id_restaurante, propina, parsedPropinasId);
            res.status(200).json(newDia.rows);
            
        } catch (error) {
            console.error('Error al editar Propinas:', error);
            res.status(500).json({ message: 'Error al editar Propinas en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarPropinas(req, res) {
        try {
            
            const propinaId = req.body['id_propina']; 
            const parsedPropinasId = parseInt(propinaId);
            const newUser = await propinaService.lookPropinas(parsedPropinasId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener Propinas:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener Propinas de la base de datos' });
        }
    }
    
    async eliminarPropinas(req, res) {
        try {
            const propinaId = req.params.propinaId;
            const parsedPropinasId = parseInt(propinaId);
            const newUser = await propinaService.deletePropinas(parsedPropinasId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar Propinas:', error);
            res.status(500).json({ error: 'Error al eliminar Propinas' });
        }
    }
    
}

module.exports = PropinasController;
