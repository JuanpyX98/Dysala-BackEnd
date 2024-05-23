// Dysala-BackEnd/controllers/usuariosController.js

const pagosService = require('../services/metodos_pagos');
const pool = require('../../database')

class PagosController {

    async obtenerPagos(req, res) {
        try {
            const pais = await pagosService.getAllPagos();
            res.status(200).json(pais);
        } catch (error) {
            console.error('Error al obtener Pagos:', error);
            res.status(500).json({ message: 'Error al obtener Pagos de la base de datos' });
        }
    }

    async agregarPagos(req, res) {
        try {
            const { nombre } = req.body;
            const newDia = await pagosService.addPagos(nombre);
            res.status(200).json(newDia.rows);
        } catch (error) {
            console.error('Error al agregar Pagos:', error);
            res.status(500).json({ message: 'Error al agregar Pagos a la base de datos', error: error.message });
        }
    }
    
    async editarPagos(req, res) {
        const client = await pool.connect();
        try {
            const { nombre } = req.body;
            const { pagoId } = req.params;
            const parsedPagosId = parseInt(pagoId);

            const newDia = await pagosService.editPagos(nombre, parsedPagosId);
            res.status(200).json(newDia.rows);
            
        } catch (error) {
            console.error('Error al editar Pagos:', error);
            res.status(500).json({ message: 'Error al editar Pagos en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarPagos(req, res) {
        try {
            
            const pagoId = req.body['id_pago']; 
            const parsedPagosId = parseInt(pagoId);
            const newUser = await pagosService.lookPagos(parsedPagosId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener Pagos:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener Pagos de la base de datos' });
        }
    }
    
    async eliminarPagos(req, res) {
        try {
            const pagoId = req.params.pagoId;
            const parsedPagosId = parseInt(pagoId);
            const newUser = await pagosService.deletePagos(parsedPagosId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar Pagos:', error);
            res.status(500).json({ error: 'Error al eliminar Pagos' });
        }
    }
    
}

module.exports = PagosController;
