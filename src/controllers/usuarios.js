// Dysala-BackEnd/controllers/usuariosController.js

const userService = require('../services/usuarios');
const pool = require('../../database')

class UsuariosController {

    async obtenerUsuarios(req, res) {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).json({ message: 'Error al obtener usuarios de la base de datos' });
        }
    }

    async agregarUsuarios(req, res) {
        try {
            const { id_database, dni, contraseña, nombre, apellido, correo, num_tel, id_provincia, id_pais, id_departemento, lat, log, id_estado } = req.body;
            const newUser = await userService.addUsers(id_database, dni, contraseña, nombre, apellido, correo, num_tel, id_provincia, id_pais, id_departemento, lat, log, id_estado);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al agregar usuario:', error);
            res.status(500).json({ message: 'Error al agregar usuario a la base de datos', error: error.message });
        }
    }
    
    async editarUsuarios(req, res) {
        const client = await pool.connect();
        try {
            const { id_database, dni, contraseña, nombre, apellido, correo, num_tel, id_provincia, id_pais, id_departemento, lat, log, id_estado } = req.body;
            const { userId } = req.params;
            const parsedUserId = parseInt(userId);

            const newUser = await userService.editUsers(id_database, dni, contraseña, nombre, apellido, correo, num_tel, id_provincia, id_pais, id_departemento, lat, log, id_estado, parsedUserId);
            res.status(200).json(newUser.rows);
            
        } catch (error) {
            console.error('Error al editar usuario:', error);
            res.status(500).json({ message: 'Error al editar usuario en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarUsuario(req, res) {
        try {
            
            const userId = req.body['id_usuario']; 
            const parsedUserId = parseInt(userId);
            const newUser = await userService.lookUsers(parsedUserId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener usuario:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener usuarios de la base de datos' });
        }
    }
    
    async eliminarUsuarios(req, res) {
        try {
            const userId = req.params.userId;
            const parsedUserId = parseInt(userId);
            const newUser = await userService.deleteUsers(parsedUserId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
            res.status(500).json({ error: 'Error al eliminar usuario' });
        }
    }
    
}

module.exports = UsuariosController;
