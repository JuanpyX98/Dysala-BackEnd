
const horariosService = require('../services/horarios_restaurantes');
const pool = require('../../database')

class HorariosController {

    async obtenerHorarios(req, res) {
        try {
            const dias = await horariosService.getAllHorarios();
            res.status(200).json(dias);
        } catch (error) {
            console.error('Error al obtener Horarios:', error);
            res.status(500).json({ message: 'Error al obtener Horarios de la base de datos' });
        }
    }

    async agregarHorarios(req, res) {
        try {
            const { id_restaurante, id_dh } = req.body;
            const newDia = await horariosService.addHorarios(id_restaurante, id_dh);
            res.status(200).json(newDia.rows);
        } catch (error) {
            console.error('Error al agregar Horarios:', error);
            res.status(500).json({ message: 'Error al agregar Horarios a la base de datos', error: error.message });
        }
    }
    
    async editarHorarios(req, res) {
        const client = await pool.connect();
        try {
            const { id_restaurante, id_dh } = req.body;
            const { horarioId } = req.params;
            const parsedHorariosId = parseInt(horarioId);

            const newDia = await horariosService.editHorarios(id_restaurante, id_dh, parsedHorariosId);
            res.status(200).json(newDia.rows);
            
        } catch (error) {
            console.error('Error al editar Horarios:', error);
            res.status(500).json({ message: 'Error al editar Horarios en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarHorarios(req, res) {
        try {
            
            const horariosId = req.body['id_hr_rest']; 
            const parsedHorariosId = parseInt(horariosId);
            const newUser = await horariosService.lookHorarios(parsedHorariosId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener Horarios:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener Horarios de la base de datos' });
        }
    }
    
    async eliminarHorarios(req, res) {
        try {
            const horariosId = req.params.horariosId;
            const parsedHorariosId = parseInt(horariosId);
            const newUser = await horariosService.deleteHorarios(parsedHorariosId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar Horarios:', error);
            res.status(500).json({ error: 'Error al eliminar Horarios' });
        }
    }
    
}

module.exports = HorariosController;
