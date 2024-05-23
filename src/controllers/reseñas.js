// Dysala-BackEnd/controllers/usuariosController.js

const reseñasService = require('../services/reseñas');
const pool = require('../../database')

class ReseñasController {

    async obtenerReseñas(req, res) {
        try {
            const pais = await reseñasService.getAllReseñas();
            res.status(200).json(pais);
        } catch (error) {
            console.error('Error al obtener Reseñas:', error);
            res.status(500).json({ message: 'Error al obtener Reseñas de la base de datos' });
        }
    }

    async agregarReseñas(req, res) {
        try {
            const { id_usuario, id_restaurante, puntuacion, comentario, fecha_hora } = req.body;
            const newDia = await reseñasService.addReseñas(id_usuario, id_restaurante, puntuacion, comentario, fecha_hora);
            res.status(200).json(newDia.rows);
        } catch (error) {
            console.error('Error al agregar Reseñas:', error);
            res.status(500).json({ message: 'Error al agregar Reseñas a la base de datos', error: error.message });
        }
    }
    
    async editarReseñas(req, res) {
        const client = await pool.connect();
        try {
            const { id_usuario, id_restaurante, puntuacion, comentario, fecha_hora } = req.body;
            const { reseñaId } = req.params;
            const parsedReseñasId = parseInt(reseñaId);

            const newDia = await reseñasService.editReseñas(id_usuario, id_restaurante, puntuacion, comentario, fecha_hora, parsedReseñasId);
            res.status(200).json(newDia.rows);
            
        } catch (error) {
            console.error('Error al editar Reseñas:', error);
            res.status(500).json({ message: 'Error al editar Reseñas en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarReseñas(req, res) {
        try {
            
            const reseñaId = req.body['id_reseña']; 
            const parsedReseñasId = parseInt(reseñaId);
            const newUser = await reseñasService.lookReseñas(parsedReseñasId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener Reseñas:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener Reseñas de la base de datos' });
        }
    }
    
    async eliminarReseñas(req, res) {
        try {
            const reseñaId = req.params.reseñaId;
            const parsedReseñasId = parseInt(reseñaId);
            const newUser = await reseñasService.deleteReseñas(parsedReseñasId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar Reseñas:', error);
            res.status(500).json({ error: 'Error al eliminar Reseñas' });
        }
    }
    
}

module.exports = ReseñasController;
