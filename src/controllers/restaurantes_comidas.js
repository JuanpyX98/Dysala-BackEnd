// Dysala-BackEnd/controllers/usuariosController.js

const comidasService = require('../services/restaurantes_comidas');
const pool = require('../../database')

class ComidasController {

    async obtenerComidas(req, res) {
        try {
            const pais = await comidasService.getAllComidas();
            res.status(200).json(pais);
        } catch (error) {
            console.error('Error al obtener Comidas:', error);
            res.status(500).json({ message: 'Error al obtener Comidas de la base de datos' });
        }
    }

    async agregarComidas(req, res) {
        try {
            const { id_restaurante, nombre, valor, id_estado } = req.body;
            const newDia = await comidasService.addComidas(id_restaurante, nombre, valor, id_estado);
            res.status(200).json(newDia.rows);
        } catch (error) {
            console.error('Error al agregar Comidas:', error);
            res.status(500).json({ message: 'Error al agregar Comidas a la base de datos', error: error.message });
        }
    }
    
    async editarComidas(req, res) {
        const client = await pool.connect();
        try {
            const { id_restaurante, nombre, valor, id_estado } = req.body;
            const { comidasId } = req.params;
            const parsedComidasId = parseInt(comidasId);

            const newDia = await comidasService.editComidas(id_restaurante, nombre, valor, id_estado, parsedComidasId);
            res.status(200).json(newDia.rows);
            
        } catch (error) {
            console.error('Error al editar Comidas:', error);
            res.status(500).json({ message: 'Error al editar Comidas en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarComidas(req, res) {
        try {
            
            const comidasId = req.body['id_comida']; 
            const parsedComidasId = parseInt(comidasId);
            const newUser = await comidasService.lookComidas(parsedComidasId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener Comidas:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener Comidas de la base de datos' });
        }
    }
    
    async eliminarComidas(req, res) {
        try {
            const comidaId = req.params.comidaId;
            const parsedComidasId = parseInt(comidaId);
            const newUser = await comidasService.deletePais(parsedComidasId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar Comidas:', error);
            res.status(500).json({ error: 'Error al eliminar Comidas' });
        }
    }
    
}

module.exports = ComidasController;
