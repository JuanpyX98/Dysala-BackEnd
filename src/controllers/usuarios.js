// Dysala-BackEnd/controllers/usuariosController.js

const userService = require('../services/usuarios');
const pool = require('../../database')

class UsuariosController {

    async obtenerUsuarios(req, res) {
        try {
            await pool.connect();
            const result = await pool.query('select * from usuario');
            console.log(result)
            res.json(result.rows).status(200);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener usuarios de la base de datos' });
        }
    }

    async agregarUsuarios(req, res) {
        try {
            await pool.connect()
            const { nombre, apellido } = req.body;
            const newUser = await pool.query('INSERT INTO usuario (nombre, apellido) VALUES (?,?)', nombre, apellido);
            console.log(newUser);
        } catch (error) {
            res.status(500).json({ message: 'Error al agregar usuario a la base de datos' });
        }
    }

    async editarUsuarios(req, res) {
        try {
            const userId = req.params.userId;
            console.log(userId)
            const { nombre, apellido } = req.body;
            console.log(req.body)
            await pool.connect();
            const result = pool.query('update usuario set nombre = ?, apellido = ? where = ?', nombre, apellido, userId);
            console.log(result);
            res.json({ message: `Usuario con ID ${userId} editado correctamente` }).status(200);
        } catch (error) {
            res.status(500).json({ message: 'Error al editar usuario en la base de datos' });
        }
    }

    async eliminarUsuarios(req, res) {
        try {
            const userId = req.params.userId;
            const result = await pool.query(`delete from usuario where id_usuario = ?`, userId)
            console.log(result);
            res.status(200).send( `Usuario con ID ${userId} eliminado correctamente` );
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
            res.status(500).json({ error: 'Error al eliminar usuario' });
        }
    }
}

module.exports = UsuariosController;
