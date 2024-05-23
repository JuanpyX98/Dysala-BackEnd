const pool = require('../../database');

exports.getAllReservas  = async () => {
    try {
      const user = await pool.query('SELECT * FROM reserva');
      return(user.rows);
    } catch (error) {
      throw error;
    }
};

exports.addReservas  = async (id_usuario, id_restaurante, horario, fecha, cant_personas, total_restseña, confirm_seña, id_estado) => {
  try {
    const user = await pool.query('INSERT INTO reserva (id_usuario, id_restaurante, horario, fecha, cant_personas, total_restseña, confirm_seña, id_estado) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [id_usuario, id_restaurante, horario, fecha, cant_personas, total_restseña, confirm_seña, id_estado]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editReservas  = async (id_usuario, id_restaurante, horario, fecha, cant_personas, total_restseña, confirm_seña, id_estado, reservaId) => {
  try {
    const user = await pool.query('UPDATE reserva SET id_usuario = $1, id_restaurante = $2, horario = $3, fecha = $4, cant_personas = $5, total_restseña = $6, confirm_seña = $7, id_estado = $8 WHERE id_reserva = $9', [id_usuario, id_restaurante, horario, fecha, cant_personas, total_restseña, confirm_seña, id_estado, reservaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deleteReservas = async (reservaId) => {
  try {
    const user = await pool.query(`DELETE FROM reserva WHERE id_reserva = $1`, [reservaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookReservas = async (reservaId) => {
  try {
    const user = await pool.query('SELECT * FROM reserva WHERE id_reserva = $1', [reservaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

