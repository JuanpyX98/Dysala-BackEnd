// Dysala-BackEnd/controllers/usuariosController.js

const paisProvinciaService = require('../services/pais_provincias');
const pool = require('../../database')

class PaisProvinciaController {

    async obtenerPaisProvincia(req, res) {
        try {
            const pais = await paisProvinciaService.getAllPaisProvincia();
            res.status(200).json(pais);
        } catch (error) {
            console.error('Error al obtener paisProvincia:', error);
            res.status(500).json({ message: 'Error al obtener paisProvincia de la base de datos' });
        }
    }

    async agregarPaisProvincia(req, res) {
        try {
            const { id_pais, id_provincia } = req.body;
            const newDia = await paisProvinciaService.addPaisProvincia(id_pais, id_provincia);
            res.status(200).json(newDia.rows);
        } catch (error) {
            console.error('Error al agregar paisProvincia:', error);
            res.status(500).json({ message: 'Error al agregar paisProvincia a la base de datos', error: error.message });
        }
    }
    
    async editarPaisProvincia(req, res) {
        const client = await pool.connect();
        try {
            const { id_pais, id_provincia } = req.body;
            const { paisProvinciaId } = req.params;
            const parsedPaisProvinciaId = parseInt(paisProvinciaId);

            const newDia = await paisProvinciaService.editPaisProvincia(id_pais, id_provincia, parsedPaisProvinciaId);
            res.status(200).json(newDia.rows);
            
        } catch (error) {
            console.error('Error al editar paisProvincia:', error);
            res.status(500).json({ message: 'Error al editar paisProvincia en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarPaisProvincia(req, res) {
        try {
            
            const paisProvinciaId = req.body['id_pais_prov']; 
            const parsedPaisProvinciaId = parseInt(paisProvinciaId);
            const newUser = await paisProvinciaService.lookPaisProvincia(parsedPaisProvinciaId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener paisProvincia:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener paisProvincia de la base de datos' });
        }
    }
    
    async eliminarPaisProvincia(req, res) {
        try {
            const paisProvinciaId = req.params.paisProvinciaId;
            const parsedPaisProvinciaId = parseInt(paisProvinciaId);
            const newUser = await paisProvinciaService.deletePaisProvincia(parsedPaisProvinciaId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar paisProvincia:', error);
            res.status(500).json({ error: 'Error al eliminar paisProvincia' });
        }
    }
    
}

module.exports = PaisProvinciaController;
