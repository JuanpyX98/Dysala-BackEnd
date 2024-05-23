// Dysala-BackEnd/controllers/usuariosController.js

const reservasService = require('../services/reservas_llevar');
const pool = require('../../database')

class ReservasController {

    async obtenerReservas(req, res) {
        try {
            const pais = await reservasService.getAllReservas();
            res.status(200).json(pais);
        } catch (error) {
            console.error('Error al obtener Reservas-Llevar:', error);
            res.status(500).json({ message: 'Error al obtener Reservas-Llevar de la base de datos' });
        }
    }

    async agregarReservas(req, res) {
        try {
            const { id_usuario, id_restaurante, horario, fecha, id_estadoretiro, id_estado, id_admin } = req.body;
            const newDia = await reservasService.addReservas(id_usuario, id_restaurante, horario, fecha, id_estadoretiro, id_estado, id_admin );
            res.status(200).json(newDia.rows);
        } catch (error) {
            console.error('Error al agregar Reservas-Llevar:', error);
            res.status(500).json({ message: 'Error al agregar Reservas-Llevar a la base de datos', error: error.message });
        }
    }
    
    async editarReservas(req, res) {
        const client = await pool.connect();
        try {
            const { id_usuario, id_restaurante, horario, fecha, id_estadoretiro, id_estado, id_admin } = req.body;
            const { reservaId } = req.params;
            const parsedReservasId = parseInt(reservaId);

            const newDia = await reservasService.editReservas(id_usuario, id_restaurante, horario, fecha, id_estadoretiro, id_estado, id_admin, parsedReservasId);
            res.status(200).json(newDia.rows);
            
        } catch (error) {
            console.error('Error al editar Reservas-Llevar:', error);
            res.status(500).json({ message: 'Error al editar Reservas-Llevar en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarReservas(req, res) {
        try {
            
            const reservaId = req.body['id_reservallevar']; 
            const parsedReservasId = parseInt(reservaId);
            const newUser = await reservasService.lookReservas(parsedReservasId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener Reservas-Llevar:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener Reservas-Llevar de la base de datos' });
        }
    }
    
    async eliminarReservas(req, res) {
        try {
            const reservaId = req.params.reservaId;
            const parsedReservasId = parseInt(reservaId);
            const newUser = await reservasService.deleteReservas(parsedReservasId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar Reservas-Llevar:', error);
            res.status(500).json({ error: 'Error al eliminar Reservas-Llevar' });
        }
    }
    
}

module.exports = ReservasController;
