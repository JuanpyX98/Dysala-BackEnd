
const est_RetiroService = require('../services/estados_retiros');
const pool = require('../../database')

class Est_RetiroController {

    async obtenerEst_Retiro(req, res) {
        try {
            const dias = await est_RetiroService.getAllEst_Retiro();
            res.status(200).json(dias);
        } catch (error) {
            console.error('Error al obtener Est_Retiro:', error);
            res.status(500).json({ message: 'Error al obtener Est_Retiro de la base de datos' });
        }
    }

    async agregarEst_Retiro(req, res) {
        try {
            const { nombre } = req.body;
            const newDia = await est_RetiroService.addEst_Retiro(nombre);
            res.status(200).json(newDia.rows);
        } catch (error) {
            console.error('Error al agregar Est_Retiro:', error);
            res.status(500).json({ message: 'Error al agregar Est_Retiro a la base de datos', error: error.message });
        }
    }
    
    async editarEst_Retiro(req, res) {
        const client = await pool.connect();
        try {
            const { nombre } = req.body;
            const { diaId } = req.params;
            const parsedDiaId = parseInt(diaId);

            const newDia = await est_RetiroService.editEst_Retiro(nombre, parsedDiaId);
            res.status(200).json(newDia.rows);
            
        } catch (error) {
            console.error('Error al editar Est_Retiro:', error);
            res.status(500).json({ message: 'Error al editar Est_Retiro en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarEst_Retiro(req, res) {
        try {
            
            const diaId = req.body['id_estadoretiro']; 
            const parsedDiaId = parseInt(diaId);
            const newUser = await est_RetiroService.lookEst_Retiro(parsedDiaId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener Est_Retiro:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener Est_Retiro de la base de datos' });
        }
    }
    
    async eliminarEst_Retiro(req, res) {
        try {
            const diaId = req.params.diaId;
            const parsedDiaId = parseInt(diaId);
            const newUser = await est_RetiroService.deleteEst_Retiro(parsedDiaId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar dia:', error);
            res.status(500).json({ error: 'Error al eliminar dia' });
        }
    }
    
}

module.exports = Est_RetiroController;
