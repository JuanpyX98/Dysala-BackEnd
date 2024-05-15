const express = require('express');
const router = express.Router();
const T_FacturaController = require('../controllers/tipos_facturas'); // Importando UsuariosController
const t_FacturaController = new T_FacturaController(); // Creando una instancia de UsuariosController
const pool = require('../../database');

pool.connect();


// Ruta para obtener todos los usuarios
router.get('/tFactura', t_FacturaController.obtenerTpFacturas);

router.post('/tFacturaBuscar', t_FacturaController.buscarTpFacturas)

router.post('/tFacturaAgregar', t_FacturaController.agregarTpFacturas);

router.put('/tFacturaEditar/:tFacturaId', t_FacturaController.editarTpFacturas);

router.delete('/tFacturaEliminar/:tFacturaId', t_FacturaController.eliminarTpFacturas);

module.exports = router;