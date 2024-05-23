// Dysala-BackEnd/controllers/usuariosController.js

const provinciaService = require('../services/provincias_departamentos');
const pool = require('../../database')

class ProvinciasController {

    async obtenerProvincias(req, res) {
        try {
            const pais = await provinciaService.getAllProvincias();
            res.status(200).json(pais);
        } catch (error) {
            console.error('Error al obtener Provincias:', error);
            res.status(500).json({ message: 'Error al obtener Provincias de la base de datos' });
        }
    }

    async agregarProvincias(req, res) {
        try {
            const { id_provincia, id_departamento } = req.body;
            const newDia = await provinciaService.addProvincias(id_provincia, id_departamento);
            res.status(200).json(newDia.rows);
        } catch (error) {
            console.error('Error al agregar Provincias-Deparatmentos:', error);
            res.status(500).json({ message: 'Error al agregar Provincias-Deparatmentos a la base de datos', error: error.message });
        }
    }
    
    async editarProvincias(req, res) {
        const client = await pool.connect();
        try {
            const { id_provincia, id_departamento } = req.body;
            const { provinciaId } = req.params;
            const parsedProvinciasId = parseInt(provinciaId);

            const newDia = await provinciaService.editProvincias(id_provincia, id_departamento, parsedProvinciasId);
            res.status(200).json(newDia.rows);
            
        } catch (error) {
            console.error('Error al editar Provincias-Departamentos:', error);
            res.status(500).json({ message: 'Error al editar Provincias-Departamentos en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarProvincias(req, res) {
        try {
            
            const provinciaId = req.body['id_prov_depart']; 
            const parsedProvinciasId = parseInt(provinciaId);
            const newUser = await provinciaService.lookProvincias(parsedProvinciasId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener Provincias:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener Provincias de la base de datos' });
        }
    }
    
    async eliminarProvincias(req, res) {
        try {
            const provinciaId = req.params.provinciaId;
            const parsedProvinciasId = parseInt(provinciaId);
            const newUser = await provinciaService.deleteProvincias(parsedProvinciasId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar Provincias:', error);
            res.status(500).json({ error: 'Error al eliminar Provincias' });
        }
    }
    
}

module.exports = ProvinciasController;
