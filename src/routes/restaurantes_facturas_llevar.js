const express = require('express');
const router = express.Router();
const FacturasController = require('../controllers/restaurantes_facturas_llevar'); // Importando UsuariosController
const facturasController = new FacturasController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();


router.get('/facturaLlevar', facturasController.obtenerFacturas);

router.post('/fact_llevarBuscar', facturasController.buscarFacturas)

router.post('/fact_llevarAgregar', facturasController.agregarFacturas);

router.put('fact_llevarEditar/:facturaId', facturasController.editarFacturas);

router.delete('/fact_llevarEliminar/:facturaId', facturasController.eliminarFacturas);

module.exports = router;