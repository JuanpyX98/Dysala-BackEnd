const pool = require('../../database');

exports.getAllDiasHoras  = async () => {
    try {
      const user = await pool.query('SELECT * FROM dia_hora');
      return(user.rows);
    } catch (error) {
      throw error;
    }
};

exports.addDiasHoras  = async (id_dia, hs_apertura, hs_cierre) => {
  try {
    const user = await pool.query('INSERT INTO dia_hora (id_dia, h_apertura, h_cierre) VALUES ($1, $2, $3)', [id_dia, hs_apertura, hs_cierre]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editDiasHoras = async (id_dia, hs_apertura, hs_cierre, diaHorasId) => {
  try {
    const user = await pool.query('UPDATE dia_hora SET nombre = $1, hs_apertura = $2, hs_cierre = $3  WHERE id_dh = $4', [id_dia, hs_apertura, hs_cierre, diaHorasId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deleteDiasHoras = async (diaHorasId) => {
  try {
    const user = await pool.query(`DELETE FROM dia_hora WHERE id_dh = $1`, [diaHorasId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookDiasHoras = async (diaHorasId) => {
  try {
    const user = await pool.query('SELECT * FROM dia_hora WHERE id_dh= $1', [diaHorasId]);
    return user;
  } catch (error) {
    throw error;
  }
};

