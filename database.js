const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', // Nombre de usuario de PostgreSQL
  host: 'localhost',
  database: 'prueba',
  password: '123',
  port: 5432 , // Puerto predeterminado de PostgreSQL
});

module.exports = pool;
