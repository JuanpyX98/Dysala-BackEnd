const pool = require('../../database');

exports.getAllUsers  = async () => {
    try {
      const user = await pool.query('SELECT * FROM usuario');
      return(user.rows) ;
    } catch (error) {
      throw error;
    }
};

exports.addUsers  = async (nombre, apellido) => {
  try {
    const user = await pool.query('INSERT INTO usuario (nombre, apellido) VALUES ($1, $2)', [nombre, apellido]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editUsers = async (nombre, apellido, userId) => {
  try {
    const user = await pool.query('UPDATE usuario SET nombre = $1, apellido = $2 WHERE id_usuario = $3', [nombre, apellido, userId]);
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

