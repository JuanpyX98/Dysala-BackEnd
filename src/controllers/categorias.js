
const categoriaService = require('../services/categorias');
const pool = require('../../database')

class CategoriasController {

    async obtenerCategorias(req, res) {
        try {
            const dias = await categoriaService.getAllCategorias();
            res.status(200).json(dias);
        } catch (error) {
            console.error('Error al obtener Categorias:', error);
            res.status(500).json({ message: 'Error al obtener Categorias de la base de datos' });
        }
    }

    async agregarCategorias(req, res) {
        try {
            const { nombre } = req.body;
            const newDia = await categoriaService.addCategorias(nombre);
            res.status(200).json(newDia.rows);
        } catch (error) {
            console.error('Error al agregar Categorias:', error);
            res.status(500).json({ message: 'Error al agregar Categorias a la base de datos', error: error.message });
        }
    }
    
    async editarCategorias(req, res) {
        const client = await pool.connect();
        try {
            const { nombre } = req.body;
            const { diaId } = req.params;
            const parsedDiaId = parseInt(diaId);

            const newDia = await categoriaService.editCategorias(nombre, parsedDiaId);
            res.status(200).json(newDia.rows);
            
        } catch (error) {
            console.error('Error al editar Categorias:', error);
            res.status(500).json({ message: 'Error al editar Categorias en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarCategorias(req, res) {
        try {
            
            const diaId = req.body['id_categoria']; 
            const parsedDiaId = parseInt(diaId);
            const newUser = await categoriaService.lookCategorias(parsedDiaId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener Categorias:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener Categorias de la base de datos' });
        }
    }
    
    async eliminarCategorias(req, res) {
        try {
            const diaId = req.params.diaId;
            const parsedDiaId = parseInt(diaId);
            const newUser = await categoriaService.deleteCategorias(parsedDiaId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar Categorias:', error);
            res.status(500).json({ error: 'Error al eliminar Categorias' });
        }
    }
    
}

module.exports = CategoriasController;
