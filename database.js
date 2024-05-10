const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres.uprwowleeqducnjujgjn', 
  host: 'aws-0-us-west-1.pooler.supabase.com',
  database: 'dysala',
  password: 'dysaladtabase123',
  port: 5432 , 
});

module.exports = pool;
