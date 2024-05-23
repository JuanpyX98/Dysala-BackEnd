
const diaHorasService = require('../services/dias_horas');
const pool = require('../../database')

class DiasHorasController {

    async obtenerDiasHoras(req, res) {
        try {
            const dias = await diaHorasService.getAllDiasHoras();
            res.status(200).json(dias);
        } catch (error) {
            console.error('Error al obtener diasHoras:', error);
            res.status(500).json({ message: 'Error al obtener diasHoras de la base de datos' });
        }
    }

    async agregarDiasHoras(req, res) {
        try {
            const { id_dia, hs_apertura, hs_cierre } = req.body;
            const newDia = await diaHorasService.addDiasHoras(id_dia, hs_apertura, hs_cierre);
            res.status(200).json(newDia.rows);
        } catch (error) {
            console.error('Error al agregar diaHoras:', error);
            res.status(500).json({ message: 'Error al agregar diaHoras a la base de datos', error: error.message });
        }
    }
    
    async editarDiasHoras(req, res) {
        const client = await pool.connect();
        try {
            const { id_dia, hs_apertura, hs_cierre } = req.body;
            const { diaHorasId } = req.params;
            const parsedDiaHorasId = parseInt(diaHorasId);

            const newDia = await diaService.editDiasHoras(id_dia, hs_apertura, hs_cierre, parsedDiaHorasId);
            res.status(200).json(newDia.rows);
            
        } catch (error) {
            console.error('Error al editar diaHoras:', error);
            res.status(500).json({ message: 'Error al editar diaHoras en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarDiaHoras(req, res) {
        try {
            
            const diaHorasId = req.body['id_dh']; 
            const parsedDiaHorasId = parseInt(diaHorasId);
            const newUser = await diaHorasService.lookDiasHoras(parsedDiaHorasId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener diaHoras:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener diaHoras de la base de datos' });
        }
    }
    
    async eliminarDiasHoras(req, res) {
        try {
            const diaHorasId = req.params.diaHorasId;
            const parsedDiaHorasId = parseInt(diaHorasId);
            const newUser = await diaHorasService.deleteDiasHoras(parsedDiaHorasId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar diaHoras:', error);
            res.status(500).json({ error: 'Error al eliminar diaHoras' });
        }
    }
    
}

module.exports = DiasHorasController;
