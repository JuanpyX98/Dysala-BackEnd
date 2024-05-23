const express = require("express");
const path = require("path");

//--------------------------------------------ROUTES IMPORTS-------------------------------------------------------------------

// USUARIOS (CLIENTES)
const usuariosRoutes = require('./src/routes/usuarios');

// ESTADOS
const estadosRoutes = require('./src/routes/estados');

// CATEGORIA DE LOS LOCALES (RESTAURANTE O CAFETERIA)
const categoriasRoutes = require('./src/routes/categorias');

// ESTADOS DE RETIRO
const estRetiroRoutes = require('./src/routes/estados_retiros');

// ROLES
const rolesRoutes = require('./src/routes/roles');

// TIPOS DE FACTURA
const tFacturasRoutes = require('./src/routes/tipos_facturas');

// TODOS LOS ADMIN Y LOS DE CADA RESTAURANTE
const adminRoutes = require('./src/routes/administradores');
const adminlocalRoutes = require('./src/routes/administradores_locales');

// COMIDAS
const comidasRoutes = require('./src/routes/restaurantes_comidas');

// PEDIDOS EN EL LUGAR Y PARA LLEVAR
const pedidosLlevarRoutes = require('./src/routes/pedidos_llevar');
const pedidosLocalRoutes = require('./src/routes/pedidos_restaurantes');

// MÉTODOS DE PAGO
const metodosPagosRoutes = require('./src/routes/metodos_pagos');

// DÍAS Y HORAS
const diasRoutes = require('./src/routes/dias');
const diasHorasRoutes = require('./src/routes/dias_horas');

// HORARIOS DE RESTAURANTES
const horariosRoutes = require('./src/routes/horarios_restaurantes');

// PROVINCIAS, DEPARTAMENTOS, PAISES
const paisRoutes = require('./src/routes/pais');
const paisProvinciaRoutes = require('./src/routes/pais_provincias');
const provinciasRoutes = require('./src/routes/provincias');
const departsRoutes = require('./src/routes/departamentos');
const provinciasDepartRoutes = require('./src/routes/provincias_departamentos');

// RESERVAS (EN EL LUGAR, PARA LLEVAR Y MESA)
const reservasRoutes = require('./src/routes/reservas');
const reservasLlevarRoutes = require('./src/routes/reservas_llevar');
const reservasMesasRoutes = require('./src/routes/reservas_mesas');

// RESEÑAS (COMENTARIOS)
const reseñasRoutes = require('./src/routes/reseñas');

// SEÑAS
const señasRoutes = require('./src/routes/restaurantes_señas');

//PROPINAS
const propinaRoutes = require('./src/routes/propinas')

// RESTAURANTE
const restsRoutes = require('./src/routes/restaurantes');

// MESAS DE RESTAURANTE
const mesasRoutes = require('./src/routes/mesas');

// FACTURAS
const restFacturaRoutes = require('./src/routes/restaurantes_facturas');
const restFacturaLlevarRoutes = require('./src/routes/restaurantes_facturas_llevar');



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



//--------------------------------------------ROUTES-------------------------------------------------------------------

//USUARIOS (CLIENTES)
app.use('/', usuariosRoutes);

//ESTADOS
app.use('/', estadosRoutes);

//CATEGORIA DE LOS LOSCALES (RESTAURANTE O CAFETERIA)
app.use('/', categoriasRoutes);

//ESTADOS DE RETIRO
app.use('/', estRetiroRoutes);

//ROLES
app.use('/', rolesRoutes);

//T. FACTURA
app.use('/', tFacturasRoutes);

//TODOS LOS ADMIN Y LOS DE CADA RESTAURANTE
app.use('/', adminRoutes);
app.use('/', adminlocalRoutes);

//COMIDAS
app.use('/', comidasRoutes);

//PEDIDOS EN EL LUGAR Y PARA LLEVAR
app.use('/', pedidosLlevarRoutes);
app.use('/', pedidosLocalRoutes);

//METODOS DE PAGOS
app.use('/', metodosPagosRoutes);


//DIAS Y HORAS
app.use('/', diasRoutes);
app.use('/', diasHorasRoutes);

//HORARIOS DE RESTAURANTES
app.use('/', horariosRoutes);

//PROVINCIAS, DEPARTAMENTOS, PAISES
app.use('/', paisRoutes);
app.use('/', paisProvinciaRoutes);
app.use('/', provinciasRoutes);
app.use('/', departsRoutes);
app.use('/', provinciasDepartRoutes);


//RESERVAS (EN EL LUGAR, PARA LLEVAR Y MESA)
app.use('/', reservasRoutes);
app.use('/', reservasLlevarRoutes);
app.use('/', reservasMesasRoutes);

//RESEÑAS (COMENTARIOS)
app.use('/', reseñasRoutes);

//SEÑAS
app.use('/', señasRoutes);

//PROPINAS
app.use('/', propinaRoutes);

//RESTAURANTE
app.use('/', restsRoutes);

//MESAS DE RESTAURANTE
app.use('/', mesasRoutes);

//FACTURAS
app.use('/', restFacturaRoutes);
app.use('/', restFacturaLlevarRoutes);



//Public files
app.use(express.static(path.join(__dirname + '/public')));

//Run Server
app.listen(PORT, () =>
    console.log('Server listening on port', PORT));
