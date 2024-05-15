// Dysala-BackEnd/controllers/usuariosController.js

const adminLocalService = require('../services/administradores_locales');
const pool = require('../../database')

class AdminLocalController {

    async obtenerAdminLocal(req, res) {
        try {
            const users = await adminLocalService.getAllAdminLocal();
            res.status(200).json(users);
        } catch (error) {
            console.error('Error al obtener AdminLocal:', error);
            res.status(500).json({ message: 'Error al obtener AdminLocal de la base de datos' });
        }
    }

    async agregarAdminLocal(req, res) {
        try {
            const { id_local, id_admin, id_estado } = req.body;
            const newUser = await adminLocalService.addAdminLocal(id_local, id_admin, id_estado);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al agregar AdminLocal:', error);
            res.status(500).json({ message: 'Error al agregar AdminLocal a la base de datos', error: error.message });
        }
    }
    
    async editarAdminLocal(req, res) {
        const client = await pool.connect();
        try {
            const { id_local, id_admin, id_estado  } = req.body;
            const { adminLocalId } = req.params;
            const parsedAdminId = parseInt(adminLocalId);

            const newUser = await adminLocalService.editAdminLocal(id_local, id_admin, id_estado, parsedAdminId);
            res.status(200).json(newUser.rows);
            
        } catch (error) {
            console.error('Error al editar AdminLocal:', error);
            res.status(500).json({ message: 'Error al editar AdminLocal en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarAdminLocal(req, res) {
        try {
            
            const adminLocalId = req.body['id_administrador']; 
            const parsedAdminLocalId = parseInt(adminLocalId);
            const newUser = await adminLocalService.lookAdminLocal(parsedAdminLocalId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener AdminLocal:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener AdminLocal de la base de datos' });
        }
    }
    
    async eliminarAdminLocal(req, res) {
        try {
            const adminLocalId = req.params.adminId;
            const parsedAdminLocalId = parseInt(adminLocalId);
            const newUser = await adminLocalService.deleteAdminLocal(parsedAdminLocalId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar AdminLocal:', error);
            res.status(500).json({ error: 'Error al eliminar AdminLocal' });
        }
    }
    
}

module.exports = AdminLocalController;
