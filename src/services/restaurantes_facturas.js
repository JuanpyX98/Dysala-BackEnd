const pool = require('../../database');

exports.getAllFacturas  = async () => {
    try {
      const user = await pool.query('SELECT * FROM local_factura');
      return(user.rows) ;
    } catch (error) {
      throw error;
    }
};

exports.addFacturas = async (nro_factura, id_reserva, fecha_hora, id_tfactura, id_pago, total, cuit, id_estado) => {
  try {
    const user = await pool.query('INSERT INTO local_factura (nro_factura, id_reserva, fecha_hora, id_tfactura, id_pago, total, cuit, id_estado) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [nro_factura, id_reserva, fecha_hora, id_tfactura, id_pago, total, cuit, id_estado]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editFacturas= async (nro_factura, id_reserva, fecha_hora, id_tfactura, id_pago, total, cuit, id_estado, facturaId) => {
  try {
    const user = await pool.query('UPDATE local_factura SET nro_factura = $1, id_reserva = $2, fecha_hora = $3, id_tfactura = $4, id_pago = $5, total = $6, cuit = $7, id_estado = $8 WHERE id_factura = $9', [nro_factura, id_reserva, fecha_hora, id_tfactura, id_pago, total, cuit, id_estado, facturaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deleteFacturas = async (facturaId) => {
  try {
    const user = await pool.query(`DELETE FROM local_factura WHERE id_factura = $1`, [facturaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookFacturas = async (facturaId) => {
  try {
    const user = await pool.query('SELECT * FROM local_factura WHERE id_factura = $1', [facturaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

