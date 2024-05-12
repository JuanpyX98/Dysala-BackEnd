const pool = require('../../database');

exports.getAllEstados  = async () => {
    try {
      const user = await pool.query('SELECT * FROM estado');
      return(user.rows);
    } catch (error) {
      throw error;
    }
};

exports.addEstados  = async (nombre) => {
  try {
    const user = await pool.query('INSERT INTO estado (nombre) VALUES ($1)', [nombre]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editEstados  = async (nombre, estadoId) => {
  try {
    const user = await pool.query('UPDATE estado SET nombre = $1 WHERE id_estado = $2', [nombre, estadoId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deleteEstados  = async (estadoId) => {
  try {
    const user = await pool.query(`DELETE FROM estado WHERE id_estado = $1`, [estadoId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookEstados  = async (estadoId) => {
  try {
    const user = await pool.query('SELECT * FROM estado WHERE id_estado= $1', [estadoId]);
    return user;
  } catch (error) {
    throw error;
  }
};

