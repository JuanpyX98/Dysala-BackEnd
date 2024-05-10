
const diaService = require('../services/dias');
const pool = require('../../database')

class DiasController {

    async obtenerDias(req, res) {
        try {
            const dias = await diaService.getAllDias();
            res.status(200).json(dias);
        } catch (error) {
            console.error('Error al obtener dias:', error);
            res.status(500).json({ message: 'Error al obtener dias de la base de datos' });
        }
    }

    async agregarDias(req, res) {
        try {
            const { nombre } = req.body;
            const newDia = await diaService.addDias(nombre);
            res.status(200).json(newDia.rows);
        } catch (error) {
            console.error('Error al agregar dia:', error);
            res.status(500).json({ message: 'Error al agregar dia a la base de datos', error: error.message });
        }
    }
    
    async editarDias(req, res) {
        const client = await pool.connect();
        try {
            const { nombre } = req.body;
            const { diaId } = req.params;
            const parsedDiaId = parseInt(diaId);

            const newDia = await diaService.editDias(nombre, parsedDiaId);
            res.status(200).json(newDia.rows);
            
        } catch (error) {
            console.error('Error al editar dia:', error);
            res.status(500).json({ message: 'Error al editar dia en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarDia(req, res) {
        try {
            
            const diaId = req.body['id_dia']; 
            const parsedDiaId = parseInt(diaId);
            const newUser = await diaService.lookDias(parsedDiaId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener dia:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener dia de la base de datos' });
        }
    }
    
    async eliminarDias(req, res) {
        try {
            const diaId = req.params.diaId;
            const parsedDiaId = parseInt(diaId);
            const newUser = await diaService.deleteDias(parsedDiaId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar dia:', error);
            res.status(500).json({ error: 'Error al eliminar dia' });
        }
    }
    
}

module.exports = DiasController;
