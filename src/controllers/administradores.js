// Dysala-BackEnd/controllers/usuariosController.js

const adminService = require('../services/administradores');
const pool = require('../../database')

class AdminController {

    async obtenerAdmin(req, res) {
        try {
            const users = await adminService.getAllAdmin();
            res.status(200).json(users);
        } catch (error) {
            console.error('Error al obtener Admin:', error);
            res.status(500).json({ message: 'Error al obtener Admin de la base de datos' });
        }
    }

    async agregarAdmin(req, res) {
        try {
            const { id_dataBase, nombre, apellido, dni, contraseña, correo, telefono, id_rol, id_estado } = req.body;
            const newUser = await adminService.addAdmin(id_dataBase, nombre, apellido, dni, contraseña, correo, telefono, id_rol, id_estado);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al agregar Admin:', error);
            res.status(500).json({ message: 'Error al agregar Admin a la base de datos', error: error.message });
        }
    }
    
    async editarAdmin(req, res) {
        const client = await pool.connect();
        try {
            const { id_dataBase, nombre, apellido, dni, contraseña, correo, telefono, id_rol, id_estado } = req.body;
            const { adminId } = req.params;
            const parsedAdminId = parseInt(adminId);

            const newUser = await adminService.editAdmin(id_dataBase, nombre, apellido, dni, contraseña, correo, telefono, id_rol, id_estado, parsedAdminId);
            res.status(200).json(newUser.rows);
            
        } catch (error) {
            console.error('Error al editar Admin:', error);
            res.status(500).json({ message: 'Error al editar Admin en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarAdmin(req, res) {
        try {
            
            const adminId = req.body['id_administrador']; 
            const parsedAdminId = parseInt(adminId);
            const newUser = await adminService.lookAdmin(parsedAdminId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener Admin:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener Admin de la base de datos' });
        }
    }
    
    async eliminarAdmin(req, res) {
        try {
            const adminId = req.params.adminId;
            const parsedAdminId = parseInt(adminId);
            const newUser = await adminService.deleteAdmin(parsedAdminId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar Admin:', error);
            res.status(500).json({ error: 'Error al eliminar Admin' });
        }
    }
    
}

module.exports = AdminController;
