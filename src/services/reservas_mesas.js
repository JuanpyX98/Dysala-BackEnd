const pool = require('../../database');

exports.getAllReservas  = async () => {
    try {
      const user = await pool.query('SELECT * FROM reserva_mesa');
      return(user.rows);
    } catch (error) {
      throw error;
    }
};

exports.addReservas  = async (id_reserva, id_mesa, id_estado) => {
  try {
    const user = await pool.queiry('INSERT INTO reserva_mesa (id_reserva, id_mesa, id_estado) VALUES ($1, $2, $3)', [id_reserva, id_mesa, id_estado]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editReservas  = async (id_reserva, id_mesa, id_estado, reservaId) => {
  try {
    const user = await pool.query('UPDATE reserva_mesa SET id_reserva_mesa = $1, id_reserva = $2, id_mesa = $3, id_estado = $4 WHERE id_reserva_mesa = $5', [id_reserva_mesa, id_reserva, id_mesa, id_estado, reservaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deleteReservas = async (reservaId) => {
  try {
    const user = await pool.query(`DELETE FROM reserva_mesa WHERE id_reserva_mesa = $1`, [reservaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookReservas = async (reservaId) => {
  try {
    const user = await pool.query('SELECT * FROM reserva_mesa WHERE id_reserva_mesa = $1', [reservaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

