const pool = require('../../database');

exports.getAllPagos  = async () => {
    try {
      const user = await pool.query('SELECT * FROM metodo_pago');
      return(user.rows);
    } catch (error) {
      throw error;
    }
};

exports.addPagos  = async (nombre) => {
  try {
    const user = await pool.query('INSERT INTO metodo_pago (nombre) VALUES ($1)', [nombre]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editPagos  = async (nombre, pagoId) => {
  try {
    const user = await pool.query('UPDATE metodo_pago SET nombre = $1 WHERE id_pago = $2', [nombre, pagoId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deletePagos  = async (pagoId) => {
  try {
    const user = await pool.query(`DELETE FROM metodo_pago WHERE id_pago = $1`, [pagoId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookPagos  = async (pagoId) => {
  try {
    const user = await pool.query('SELECT * FROM metodo_pago WHERE id_pago= $1', [pagoId]);
    return user;
  } catch (error) {
    throw error;
  }
};

