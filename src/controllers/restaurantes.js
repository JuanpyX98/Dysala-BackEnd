// Dysala-BackEnd/controllers/usuariosController.js

const restsService = require('../services/restaurantes');
const pool = require('../../database')

class RestsController {

    async obtenerRests(req, res) {
        try {
            const pais = await restsService.getAllRests();
            res.status(200).json(pais);
        } catch (error) {
            console.error('Error al obtener Rests:', error);
            res.status(500).json({ message: 'Error al obtener Rests de la base de datos' });
        }
    }

    async agregarRests(req, res) {
        try {
            const { nombre, direccion, num_tel, cant_mesas, puntuacion, id_categoria, provincia, pais, departamento, lat, log, id_estado } = req.body;
            const newDia = await restsService.addRests(nombre, direccion, num_tel, cant_mesas, puntuacion, id_categoria, provincia, pais, departamento, lat, log, id_estado);
            res.status(200).json(newDia.rows);
        } catch (error) {
            console.error('Error al agregar Rests:', error);
            res.status(500).json({ message: 'Error al agregar Rests a la base de datos', error: error.message });
        }
    }
    
    async editarRests(req, res) {
        const client = await pool.connect();
        try {
            const { nombre, direccion, num_tel, cant_mesas, puntuacion, id_categoria, provincia, pais, departamento, lat, log, id_estado } = req.body;
            const { restsId } = req.params;
            const parsedRestsId = parseInt(restsId);

            const newDia = await restsService.editRests(nombre, direccion, num_tel, cant_mesas, puntuacion, id_categoria, provincia, pais, departamento, lat, log, id_estado, parsedRestsId);
            res.status(200).json(newDia.rows);
            
        } catch (error) {
            console.error('Error al editar Rests:', error);
            res.status(500).json({ message: 'Error al editar Rests en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarRests(req, res) {
        try {
            
            const restsId = req.body['id_restaurante']; 
            const parsedRestsId = parseInt(restsId);
            const newUser = await restsService.lookRests(parsedRestsId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener Rests:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener Rests de la base de datos' });
        }
    }
    
    async eliminarRests(req, res) {
        try {
            const restsId = req.params.restsId;
            const parsedRestsId = parseInt(restsId);
            const newUser = await restsService.deleteRests(parsedRestsId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar Rests:', error);
            res.status(500).json({ error: 'Error al eliminar Rests' });
        }
    }
    
}

module.exports = RestsController;
