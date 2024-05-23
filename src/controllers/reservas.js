// Dysala-BackEnd/controllers/usuariosController.js

const reservasService = require('../services/reservas');
const pool = require('../../database')

class ReservasController {

    async obtenerReservas(req, res) {
        try {
            const pais = await reservasService.getAllReservas();
            res.status(200).json(pais);
        } catch (error) {
            console.error('Error al obtener Reservas:', error);
            res.status(500).json({ message: 'Error al obtener Reservas de la base de datos' });
        }
    }

    async agregarReservas(req, res) {
        try {
            const { id_usuario, id_restaurante, horario, fecha, cant_personas, total_restseña, confirm_seña, id_estado } = req.body;
            const newDia = await reservasService.addReservas(id_usuario, id_restaurante, horario, fecha, cant_personas, total_restseña, confirm_seña, id_estado );
            res.status(200).json(newDia.rows);
        } catch (error) {
            console.error('Error al agregar Reservas:', error);
            res.status(500).json({ message: 'Error al agregar Reservas a la base de datos', error: error.message });
        }
    }
    
    async editarReservas(req, res) {
        const client = await pool.connect();
        try {
            const { id_usuario, id_restaurante, horario, fecha, cant_personas, total_restseña, confirm_seña, id_estado } = req.body;
            const { reservaId } = req.params;
            const parsedReservasId = parseInt(reservaId);

            const newDia = await reservasService.editReservas(id_usuario, id_restaurante, horario, fecha, cant_personas, total_restseña, confirm_seña, id_estado , parsedReservasId);
            res.status(200).json(newDia.rows);
            
        } catch (error) {
            console.error('Error al editar Reservas:', error);
            res.status(500).json({ message: 'Error al editar Reservas en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarReservas(req, res) {
        try {
            
            const reservaId = req.body['id_reserva']; 
            const parsedReservasId = parseInt(reservaId);
            const newUser = await reservasService.lookReservas(parsedReservasId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener Reservas:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener Reservas de la base de datos' });
        }
    }
    
    async eliminarReservas(req, res) {
        try {
            const reservaId = req.params.reservaId;
            const parsedReservasId = parseInt(reservaId);
            const newUser = await reservasService.deleteReservas(parsedReservasId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar Reservas:', error);
            res.status(500).json({ error: 'Error al eliminar Reservas' });
        }
    }
    
}

module.exports = ReservasController;
