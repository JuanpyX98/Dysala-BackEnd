// Dysala-BackEnd/controllers/usuariosController.js

const reservasService = require('../services/reservas_mesas');
const pool = require('../../database')

class ReservasController {

    async obtenerReservas(req, res) {
        try {
            const pais = await reservasService.getAllReservas();
            res.status(200).json(pais);
        } catch (error) {
            console.error('Error al obtener Reservas-Mesas:', error);
            res.status(500).json({ message: 'Error al obtener Reservas-Mesas de la base de datos' });
        }
    }

    async agregarReservas(req, res) {
        try {
            const { id_reserva_mesa, id_reserva, id_mesa, id_estado } = req.body;
            const newDia = await reservasService.addReservas(id_reserva_mesa, id_reserva, id_mesa, id_estado);
            res.status(200).json(newDia.rows);
        } catch (error) {
            console.error('Error al agregar Reservas-Mesas:', error);
            res.status(500).json({ message: 'Error al agregar Reservas-Mesas a la base de datos', error: error.message });
        }
    }
    
    async editarReservas(req, res) {
        const client = await pool.connect();
        try {
            const { id_reserva_mesa, id_reserva, id_mesa, id_estado } = req.body;
            const { reservaId } = req.params;
            const parsedReservasId = parseInt(reservaId);

            const newDia = await reservasService.editReservas(id_reserva_mesa, id_reserva, id_mesa, id_estado, parsedReservasId);
            res.status(200).json(newDia.rows);
            
        } catch (error) {
            console.error('Error al editar Reservas-Mesas:', error);
            res.status(500).json({ message: 'Error al editar Reservas-Mesas en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarReservas(req, res) {
        try {
            
            const reservaId = req.body['id_reserva_mesa']; 
            const parsedReservasId = parseInt(reservaId);
            const newUser = await reservasService.lookReservas(parsedReservasId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener Reservas-Mesas:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener Reservas-Mesas de la base de datos' });
        }
    }
    
    async eliminarReservas(req, res) {
        try {
            const reservaId = req.params.reservaId;
            const parsedReservasId = parseInt(reservaId);
            const newUser = await reservasService.deleteReservas(parsedReservasId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar Reservas-Mesas:', error);
            res.status(500).json({ error: 'Error al eliminar Reservas-Mesas' });
        }
    }
    
}

module.exports = ReservasController;
