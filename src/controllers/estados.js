
const estadoService = require('../services/estados');
const pool = require('../../database')

class EstadosController {

    async obtenerEstados(req, res) {
        try {
            const dias = await estadoService.getAllEstados();
            res.status(200).json(dias);
        } catch (error) {
            console.error('Error al obtener Estados:', error);
            res.status(500).json({ message: 'Error al obtener Estados de la base de datos' });
        }
    }

    async agregarEstados(req, res) {
        try {
            const { nombre } = req.body;
            const newDia = await estadoService.addEstados(nombre);
            res.status(200).json(newDia.rows);
        } catch (error) {
            console.error('Error al agregar Estados:', error);
            res.status(500).json({ message: 'Error al agregar Estados a la base de datos', error: error.message });
        }
    }
    
    async editarEstados(req, res) {
        const client = await pool.connect();
        try {
            const { nombre } = req.body;
            const { estadoId } = req.params;
            const parsedEstadoId = parseInt(estadoId);

            const newDia = await estadoService.editEstados(nombre, parsedEstadoId);
            res.status(200).json(newDia.rows);
            
        } catch (error) {
            console.error('Error al editar Estados:', error);
            res.status(500).json({ message: 'Error al editar Estados en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarEstado(req, res) {
        try {
            
            const estadoId = req.body['id_estado']; 
            const parsedEstadoId = parseInt(estadoId);
            const newUser = await estadoService.lookEstados(parsedEstadoId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener Estados:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener Estados de la base de datos' });
        }
    }
    
    async eliminarEstados(req, res) {
        try {
            const estadoId = req.params.estadoId;
            const parsedEstadoId = parseInt(estadoId);
            const newUser = await estadoService.deleteEstados(parsedEstadoId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar Estado:', error);
            res.status(500).json({ error: 'Error al eliminar Estado' });
        }
    }
    
}

module.exports = EstadosController;
