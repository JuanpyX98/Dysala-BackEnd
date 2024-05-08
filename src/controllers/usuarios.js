// Dysala-BackEnd/controllers/usuariosController.js

const userService = require('../services/usuarios');
const pool = require('../../database')

class UsuariosController {

    async obtenerUsuarios(req, res) {
        try {
            await pool.connect();
            const result = await pool.query('select * from usuario');
            res.json(result.rows).status(200);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener usuarios de la base de datos' });
        }
    }

    async agregarUsuarios(req, res) {
        try {
            
            const { nombre, apellido } = req.body;
            const newUser = await pool.query(
                'INSERT INTO usuario (nombre, apellido) VALUES ($1, $2) RETURNING *', 
                [nombre, apellido]
            );
            // Establece el estado antes de enviar la respuesta.
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al agregar usuario:', error);
            res.status(500).json({ message: 'Error al agregar usuario a la base de datos', error: error.message });
        }
    }
    
    async editarUsuarios(req, res) {
        const client = await pool.connect(); // Obtén una conexión del pool
        try {

            const { nombre, apellido } = req.body;
            const { userId } = req.params;
            const result = await client.query('UPDATE usuario SET nombre = $1, apellido = $2 WHERE id_usuario = $3', [nombre, apellido, userId]);
            res.status(200).json(result.rows); 
            
        } catch (error) {
            console.error('Error al editar usuario:', error);
            res.status(500).json({ message: 'Error al editar usuario en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarUsuario(req, res) {
        try {
            // Usar placeholders para evitar inyecciones SQL
            const id_usuario = req.body['id_usuario']; // Asumiendo que el ID viene del cuerpo de la solicitud
            const resultado = await pool.query('SELECT * FROM usuario WHERE id_usuario = $1', [id_usuario]);
            res.status(200).json(resultado.rows); // Usar json en lugar de send para un formato consistente

        } catch (error) {
            console.error('Error al obtener usuario:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener usuarios de la base de datos' });
        }
    }
    
    async eliminarUsuarios(req, res) {
        try {
            const userId = req.params.userId;
            // Usar el formato correcto de placeholders y pasar los valores como array.
            const result = await pool.query(`DELETE FROM usuario WHERE id_usuario = $1`, [userId]);
            // Asumiendo que deseas devolver algo significativo, como el número de filas afectadas.
            res.status(200).json({ rowsAffected: result.rowCount });
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
            res.status(500).json({ error: 'Error al eliminar usuario' });
        }
    }
    
}

module.exports = UsuariosController;
