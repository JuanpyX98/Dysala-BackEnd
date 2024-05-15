const pool = require('../../database');

exports.getAllTpFacturas  = async () => {
    try {
      const user = await pool.query('SELECT * FROM tipo_factura');
      return(user.rows) ;
    } catch (error) {
      throw error;
    }
};

exports.addTpFacturas  = async (tipo) => {
  try {
    const user = await pool.query('INSERT INTO tipo_factura (tipo) VALUES ($1)', [tipo]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editTpFacturas = async (tipo, tfacturaId) => {
  try {
    const user = await pool.query('UPDATE tipo_factura SET tipo = $1 WHERE id_tfactura = $2', [tipo, tfacturaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deleteTpFacturas = async (tfacturaId) => {
  try {
    const user = await pool.query(`DELETE FROM tipo_factura WHERE id_tfactura = $1`, [tfacturaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookTpFacturas = async (tfacturaId) => {
  try {
    const user = await pool.query('SELECT * FROM tipo_factura WHERE id_tfactura = $1', [tfacturaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

