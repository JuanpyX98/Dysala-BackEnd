// Dysala-BackEnd/controllers/usuariosController.js

const facturasService = require('../services/restaurantes_facturas_llevar');
const pool = require('../../database')

class FacturasController {

    async obtenerFacturas(req, res) {
        try {
            const pais = await facturasService.getAllFacturas();
            res.status(200).json(pais);
        } catch (error) {
            console.error('Error al obtener Facturas-Llevar:', error);
            res.status(500).json({ message: 'Error al obtener Facturas-Llevar de la base de datos' });
        }
    }

    async agregarFacturas(req, res) {
        try {
            const { nro_factura, id_reservallevar, fecha_hora, id_tfactura, id_pago, total, cuit, id_estado } = req.body;
            const newDia = await facturasService.addFacturas(nro_factura, id_reservallevar, fecha_hora, id_tfactura, id_pago, total, cuit, id_estado);
            res.status(200).json(newDia.rows);
        } catch (error) {
            console.error('Error al agregar Facturas-Llevar:', error);
            res.status(500).json({ message: 'Error al agregar Facturas-Llevar a la base de datos', error: error.message });
        }
    }
    
    async editarFacturas(req, res) {
        const client = await pool.connect();
        try {
            const { nro_factura, id_reservallevar, fecha_hora, id_tfactura, id_pago, total, cuit, id_estado } = req.body;
            const { facturaId } = req.params;
            const parsedFacturasId = parseInt(facturaId);

            const newDia = await facturasService.editFacturas(nro_factura, id_reservallevar, fecha_hora, id_tfactura, id_pago, total, cuit, id_estado, parsedFacturasId);
            res.status(200).json(newDia.rows);
            
        } catch (error) {
            console.error('Error al editar Facturas-Llevar:', error);
            res.status(500).json({ message: 'Error al editar Facturas-Llevar en la base de datos' });
        } finally {
            client.release(); // Libera la conexión del pool
        }
    }
    
    async buscarFacturas(req, res) {
        try {
            
            const facturaId = req.body['id_factura_llevar']; 
            const parsedFacturasId = parseInt(facturaId);
            const newUser = await facturasService.lookFacturas(parsedFacturasId);
            res.status(200).json(newUser.rows);

        } catch (error) {
            console.error('Error al obtener Facturas-Llevar:', error); // Buenas prácticas: loguear el error en el servidor
            res.status(500).json({ message: 'Error al obtener Facturas-Llevar de la base de datos' });
        }
    }
    
    async eliminarFacturas(req, res) {
        try {
            const facturaId = req.params.facturaId;
            const parsedFacturasId = parseInt(facturaId);
            const newUser = await facturasService.deleteFacturas(parsedFacturasId);
            res.status(200).json(newUser.rows);
        } catch (error) {
            console.error('Error al eliminar Facturas-Llevar:', error);
            res.status(500).json({ error: 'Error al eliminar Facturas-Llevar' });
        }
    }
    
}

module.exports = FacturasController;
