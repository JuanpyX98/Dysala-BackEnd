// Dysala-BackEnd/controllers/usuariosController.js

const tp_facturaService = require('../services/tipos_facturas');
const pool = require('../../database')

class TpFacturasController {

    async obtenerTpFacturas(req, res) {
        try {
            const users = await tp_facturaService.getAllTpFacturas();
            res.status(200).json(users);
        } catch (error) {
            console.error('Error al obtener TpFacturas:', error);
            res.status(500).json({ message: 'Error al obtener TpFacturas de la base de datos' });
        }
    }

    async agregarTpFacturas(req, res) {
        try {
            const { tipo } = req.body;
            const newUser = await tp_facturaService.addTpFacturas(tipo);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al agregar TpFacturas:', error);
            res.status(500).json({ message: 'Error al agregar TpFacturas a la base de datos', error: error.message });
        }
    }
    
    async editarTpFacturas(req, res) {
        const client = await pool.connect();
        try {
            const { tipo } = req.body;
            const { tfacturaId } = req.params;
            const parsedTfacturaId = parseInt(tfacturaId);

            const newUser = await tp_facturaService.editTpFacturas(tipo, parsedTfacturaId);
            res.status(200).json(newUser.rows);
            
        } catch (error) {
            console.error('Error al editar TpFacturas:', error);
            res.status(500).json({ message: 'Error al editar TpFacturas en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarTpFacturas(req, res) {
        try {
            
            const tfacturaId = req.body['id_usuario']; 
            const parsedTfacturaId = parseInt(tfacturaId);
            const newUser = await tp_facturaService.lookTpFacturas(parsedTfacturaId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener TpFacturas:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener TpFacturas de la base de datos' });
        }
    }
    
    async eliminarTpFacturas(req, res) {
        try {
            const tfacturaId = req.params.tfacturaId;
            const parsedTfacturaId = parseInt(tfacturaId);
            const newUser = await tp_facturaService.deleteTpFacturas(parsedTfacturaId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar TpFacturas:', error);
            res.status(500).json({ error: 'Error al eliminar TpFacturas' });
        }
    }
    
}

module.exports = TpFacturasController;
