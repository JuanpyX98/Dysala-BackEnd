// Dysala-BackEnd/controllers/usuariosController.js

const rolesService = require('../services/roles');
const pool = require('../../database')

class RolesController {

    async obtenerRoles(req, res) {
        try {
            const roles = await rolesService.getAllRoles();
            res.status(200).json(roles);
        } catch (error) {
            console.error('Error al obtener Roles:', error);
            res.status(500).json({ message: 'Error al obtener Roles de la base de datos' });
        }
    }

    async agregarRoles(req, res) {
        try {
            const { nombre } = req.body;
            const newDia = await rolesService.addRoles(nombre);
            res.status(200).json(newDia.rows);
        } catch (error) {
            console.error('Error al agregar Roles:', error);
            res.status(500).json({ message: 'Error al agregar Roles a la base de datos', error: error.message });
        }
    }
    
    async editarRoles(req, res) {
        const client = await pool.connect();
        try {
            const { nombre } = req.body;
            const { rolesId } = req.params;
            const parsedRolesId = parseInt(rolesId);

            const newDia = await rolesService.editRoles(nombre, parsedRolesId);
            res.status(200).json(newDia.rows);
            
        } catch (error) {
            console.error('Error al editar Roles:', error);
            res.status(500).json({ message: 'Error al editar Roles en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarRoles(req, res) {
        try {
            
            const rolesId = req.body['id_rol']; 
            const parsedRolesId = parseInt(rolesId);
            const newUser = await rolesService.lookPais(parsedRolesId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener Roles:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener Roles de la base de datos' });
        }
    }
    
    async eliminarRoles(req, res) {
        try {
            const rolesId = req.params.rolesId;
            const parsedRolesId = parseInt(rolesId);
            const newUser = await rolesService.deleteRoles(parsedRolesId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar Roles:', error);
            res.status(500).json({ error: 'Error al eliminar Roles' });
        }
    }
    
}

module.exports = RolesController;
