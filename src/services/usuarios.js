const pool = require('../../database');

exports.getAllUsers  = async () => {
    try {
      const user = await pool.query('SELECT * FROM usuario');
      return(user.rows) ;
    } catch (error) {
      throw error;
    }
};

exports.addUsers  = async (id_database, dni, contraseña, nombre, apellido, correo, num_tel, id_provincia, id_pais, id_departemento, lat, log, id_estado) => {
  try {
    const user = await pool.query('INSERT INTO usuario (id_database, dni, contraseña, nombre, apellido, correo, num_tel, id_provincia, id_pais, id_departemento, lat, log, id_estado) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)', [id_database, dni, contraseña, nombre, apellido, correo, num_tel, id_provincia, id_pais, id_departemento, lat, log, id_estado]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editUsers = async (id_database, dni, contraseña, nombre, apellido, correo, num_tel, id_provincia, id_pais, id_departemento, lat, log, id_estado, userId) => {
  try {
    const user = await pool.query('UPDATE usuario SET id_database = $1, dni = $2, contraseña = $3, nombre = $4, apellido = $5, correo = $6, num_tel = $7, id_provincia = $8, id_pais = $9, id_departemento = $10, lat = $11, log = $12, id_estado = $13 WHERE id_usuario = $14', [id_database, dni, contraseña, nombre, apellido, correo, num_tel, id_provincia, id_pais, id_departemento, lat, log, id_estado, userId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deleteUsers = async (userId) => {
  try {
    const user = await pool.query(`DELETE FROM usuario WHERE id_usuario = $1`, [userId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookUsers = async (userId) => {
  try {
    const user = await pool.query('SELECT * FROM usuario WHERE id_usuario = $1', [userId]);
    return user;
  } catch (error) {
    throw error;
  }
};

