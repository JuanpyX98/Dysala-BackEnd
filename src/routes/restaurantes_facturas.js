const express = require('express');
const router = express.Router();
const FacturasController = require('../controllers/restaurantes_facturas'); // Importando UsuariosController
const facturasController = new FacturasController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


router.get('/factura', facturasController.obtenerFacturas);

router.post('/facturaBuscar', facturasController.buscarFacturas)

router.post('/facturaAgregar', facturasController.agregarFacturas);

router.put('facturaEditar/:facturaId', facturasController.editarFacturas);

router.delete('/facturaEliminar/:facturaId', facturasController.eliminarFacturas);

module.exports = router;