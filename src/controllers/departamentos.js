// Dysala-BackEnd/controllers/usuariosController.js

const departsService = require('../services/departamentos');
const pool = require('../../database')

class DepartsController {

    async obtenerDeparts(req, res) {
        try {
            const roles = await departsService.getAllDeparts();
            res.status(200).json(roles);
        } catch (error) {
            console.error('Error al obtener Departs:', error);
            res.status(500).json({ message: 'Error al obtener Departs de la base de datos' });
        }
    }

    async agregarDeparts(req, res) {
        try {
            const { nombre } = req.body;
            const newDia = await departsService.addDeparts(nombre);
            res.status(200).json(newDia.rows);
        } catch (error) {
            console.error('Error al agregar Departs:', error);
            res.status(500).json({ message: 'Error al agregar Departs a la base de datos', error: error.message });
        }
    }
    
    async editarDeparts(req, res) {
        const client = await pool.connect();
        try {
            const { nombre } = req.body;
            const {departementoId } = req.params;
            const parsedDepartsId = parseInt(departementoId);

            const newDia = await departsService.editDeparts(nombre, parsedDepartsId);
            res.status(200).json(newDia.rows);
            
        } catch (error) {
            console.error('Error al editar Departs:', error);
            res.status(500).json({ message: 'Error al editar Departs en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarDeparts(req, res) {
        try {
            
            const departementoId = req.body['id_departamento']; 
            const parsedDepartsId = parseInt(departementoId);
            const newUser = await departsService.lookDeparts(parsedDepartsId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener Departs:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener Departs de la base de datos' });
        }
    }
    
    async eliminarDeparts(req, res) {
        try {
            const departementoId = req.params.departementoId;
            const parsedDepartsId = parseInt(departementoId);
            const newUser = await departsService.deleteDeparts(parsedDepartsId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar Departs:', error);
            res.status(500).json({ error: 'Error al eliminar Departs' });
        }
    }
    
}

module.exports = DepartsController;
