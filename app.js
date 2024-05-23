const express = require("express");
const path = require("path");

const usuariosRoutes = require('./src/routes/usuarios');
const diasRoutes = require('./src/routes/dias');
const paisRoutes = require('./src/routes/pais');
const paisProvinciaRoutes = require('./src/routes/pais_provincias');
const estadosRoutes = require('./src/routes/estados');
const categoriasRoutes = require('./src/routes/categorias');
const est_retiroRoutes = require('./src/routes/estados_retiros');
const rolesRoutes = require('./src/routes/roles');
const tFacturasRoutes = require('./src/routes/tipos_facturas');
const adminRoutes = require('./src/routes/administradores');
const adminLocalRoutes = require('./src/routes/administradores_locales');
const adminDiasHorasRoutes = require('./src/routes/dias_horas');
const adminHorariosRoutes = require('./src/routes/horarios_restaurantes');
const adminComidasRoutes = require('./src/routes/restaurantes_comidas');
const adminPedidosLlevarRoutes = require('./src/routes/pedidos_llevar');
const adminPedidosLocalRoutes = require('./src/routes/pedidos_restaurantes');
const adminMetodosPagosRoutes = require('./src/routes/metodos_pagos');
const adminProvinciasRoutes = require('./src/routes/provincias');
const adminProvinciasDepartRoutes = require('./src/routes/provincias_departamentos');
const adminReservasRoutes = require('./src/routes/reservas');
const adminReservasLlevarRoutes = require('./src/routes/reservas_llevar');
const adminReservasMesasRoutes = require('./src/routes/reservas_mesas');
const adminReseñasRoutes = require('./src/routes/reseñas');
const adminSeñasRoutes = require('./src/routes/restaurantes_señas');

// Inicialización
const app = express();

// Configuración del motor de plantillas EJS
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'src' ,'views')); 

// Configuración del puerto
const PORT = process.env.PORT || 4000; // Utiliza el puerto proporcionado por el entorno o el puerto 3000 por defecto

// Middleware para habilitar CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use('/', usuariosRoutes);
app.use('/', diasRoutes);
app.use('/', paisRoutes);
app.use('/', estadosRoutes);
app.use('/', categoriasRoutes);
app.use('/', est_retiroRoutes);
app.use('/', rolesRoutes);
app.use('/', tFacturasRoutes);
app.use('/', adminRoutes);
app.use('/', adminLocalRoutes);
app.use('/', adminDiasHorasRoutes);
app.use('/', adminHorariosRoutes);
app.use('/', adminComidasRoutes);
app.use('/', adminPedidosLlevarRoutes);
app.use('/', adminPedidosLocalRoutes);
app.use('/', adminMetodosPagosRoutes);
app.use('/', paisProvinciaRoutes);
app.use('/', adminProvinciasRoutes);
app.use('/', adminProvinciasDepartRoutes);
app.use('/', adminReservasRoutes);
app.use('/', adminReservasLlevarRoutes);
app.use('/', adminReservasMesasRoutes);
app.use('/', adminReseñasRoutes);
app.use('/', adminSeñasRoutes);



//Public files
app.use(express.static(path.join(__dirname + '/public')));

//Run Server
app.listen(PORT, () =>
    console.log('Server listening on port', PORT));
