const express = require("express");
const path = require("path");

const usuariosRoutes = require('./src/routes/usuarios');
const diasRoutes = require('./src/routes/dias');
const paisRoutes = require('./src/routes/pais');
const estadosRoutes = require('./src/routes/estados');
const categoriasRoutes = require('./src/routes/categorias');
const est_retiroRoutes = require('./src/routes/estados_retiros');

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



//Public files
app.use(express.static(path.join(__dirname + '/public')));

//Run Server
app.listen(PORT, () =>
    console.log('Server listening on port', PORT));
