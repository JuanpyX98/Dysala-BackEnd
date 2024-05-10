// Dysala-BackEnd/controllers/usuariosController.js

const paisService = require('../services/pais');
const pool = require('../../database')

class PaisController {

    async obtenerPais(req, res) {
        try {
            const pais = await paisService.getAllPais();
            res.status(200).json(pais);
        } catch (error) {
            console.error('Error al obtener pais:', error);
            res.status(500).json({ message: 'Error al obtener pais de la base de datos' });
        }
    }

    async agregarPais(req, res) {
        try {
            const { nombre } = req.body;
            const newDia = await paisService.addPais(nombre);
            res.status(200).json(newDia.rows);
        } catch (error) {
            console.error('Error al agregar pais:', error);
            res.status(500).json({ message: 'Error al agregar pais a la base de datos', error: error.message });
        }
    }
    
    async editarPais(req, res) {
        const client = await pool.connect();
        try {
            const { nombre } = req.body;
            const { paisId } = req.params;
            const parsedPaisId = parseInt(paisId);

            const newDia = await paisService.editPais(nombre, parsedPaisId);
            res.status(200).json(newDia.rows);
            
        } catch (error) {
            console.error('Error al editar pais:', error);
            res.status(500).json({ message: 'Error al editar pais en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarPais(req, res) {
        try {
            
            const paisId = req.body['id_pais']; 
            const parsedPaisId = parseInt(paisId);
            const newUser = await paisService.lookPais(parsedPaisId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener pais:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener pais de la base de datos' });
        }
    }
    
    async eliminarPais(req, res) {
        try {
            const paisId = req.params.paisId;
            const parsedPaisId = parseInt(paisId);
            const newUser = await paisService.deletePais(parsedPaisId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar pais:', error);
            res.status(500).json({ error: 'Error al eliminar pais' });
        }
    }
    
}

module.exports = PaisController;
