// Dysala-BackEnd/controllers/usuariosController.js

const señasService = require('../services/restaurantes_señas');
const pool = require('../../database')

class SeñasController {

    async obtenerSeñas(req, res) {
        try {
            const pais = await señasService.getAllSeñas();
            res.status(200).json(pais);
        } catch (error) {
            console.error('Error al obtener Señas:', error);
            res.status(500).json({ message: 'Error al obtener Señas de la base de datos' });
        }
    }

    async agregarSeñas(req, res) {
        try {
            const { id_restaurante, seña } = req.body;
            const newDia = await señasService.addSeñas(id_restaurante, seña );
            res.status(200).json(newDia.rows);
        } catch (error) {
            console.error('Error al agregar Señas:', error);
            res.status(500).json({ message: 'Error al agregar Señas a la base de datos', error: error.message });
        }
    }
    
    async editarSeñas(req, res) {
        const client = await pool.connect();
        try {
            const { id_restaurante, seña  } = req.body;
            const { señaId } = req.params;
            const parsedSeñasId = parseInt(señaId);

            const newDia = await señasService.editComidas(id_restaurante, seña , parsedSeñasId);
            res.status(200).json(newDia.rows);
            
        } catch (error) {
            console.error('Error al editar Señas:', error);
            res.status(500).json({ message: 'Error al editar Señas en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarSeñas(req, res) {
        try {
            
            const señaId = req.body['id_restseña']; 
            const parsedSeñasId = parseInt(señaId);
            const newUser = await señasService.lookSeñas(parsedSeñasId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener Señas:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener Señas de la base de datos' });
        }
    }
    
    async eliminarSeñas(req, res) {
        try {
            const señaId = req.params.señaId;
            const parsedSeñasId = parseInt(señaId);
            const newUser = await señasService.deletePais(parsedSeñasId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar Señas:', error);
            res.status(500).json({ error: 'Error al eliminar Señas' });
        }
    }
    
}

module.exports = SeñasController;
