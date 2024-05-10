const pool = require('../../database');

exports.getAllDias  = async () => {
    try {
      const user = await pool.query('SELECT * FROM dia');
      return(user.rows);
    } catch (error) {
      throw error;
    }
};

exports.addDias  = async (nombre) => {
  try {
    const user = await pool.query('INSERT INTO dia (nombre) VALUES ($1)', [nombre]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editDias = async (nombre, userId) => {
  try {
    const user = await pool.query('UPDATE dia SET nombre = $1 WHERE id_usuario = $2', [nombre, userId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deleteDias = async (userId) => {
  try {
    const user = await pool.query(`DELETE FROM dia WHERE id_dia = $1`, [userId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookDias = async (userId) => {
  try {
    const user = await pool.query('SELECT * FROM dia WHERE id_dia= $1', [userId]);
    return user;
  } catch (error) {
    throw error;
  }
};

