const pool = require('../../database');

exports.getAllPais  = async () => {
    try {
      const user = await pool.query('SELECT * FROM pais');
      return(user.rows);
    } catch (error) {
      throw error;
    }
};

exports.addPais  = async (nombre) => {
  try {
    const user = await pool.query('INSERT INTO pais (nombre) VALUES ($1)', [nombre]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editPais  = async (nombre, userId) => {
  try {
    const user = await pool.query('UPDATE pais SET nombre = $1 WHERE id_pais = $2', [nombre, userId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deletePais  = async (userId) => {
  try {
    const user = await pool.query(`DELETE FROM pais WHERE id_pais = $1`, [userId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookPais  = async (userId) => {
  try {
    const user = await pool.query('SELECT * FROM pais WHERE id_pais= $1', [userId]);
    return user;
  } catch (error) {
    throw error;
  }
};

