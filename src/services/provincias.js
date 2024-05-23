const pool = require('../../database');

exports.getAllProvincias  = async () => {
    try {
      const user = await pool.query('SELECT * FROM provincia');
      return(user.rows);
    } catch (error) {
      throw error;
    }
};

exports.addProvincias  = async (nombre) => {
  try {
    const user = await pool.query('INSERT INTO provincia (nombre) VALUES ($1)', [nombre]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editProvincias  = async (nombre, provinciaId) => {
  try {
    const user = await pool.query('UPDATE provincia SET nombre = $1 WHERE id_provincia = $2', [nombre, provinciaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deleteProvincias  = async (provinciaId) => {
  try {
    const user = await pool.query(`DELETE FROM provincia WHERE id_provincia = $1`, [provinciaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookProvincias  = async (provinciaId) => {
  try {
    const user = await pool.query('SELECT * FROM provincia WHERE id_provincia= $1', [provinciaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

