const pool = require('../../database');

exports.getAllReservas  = async () => {
    try {
      const user = await pool.query('SELECT * FROM reserva_llevar');
      return(user.rows);
    } catch (error) {
      throw error;
    }
};

exports.addReservas  = async (id_usuario, id_restaurante, horario, fecha, id_estadoretiro, id_estado, id_admin) => {
  try {
    const user = await pool.query('INSERT INTO reserva_llevar (id_usuario, id_restaurante, horario, fecha, id_estadoretiro, id_estado, id_admin) VALUES ($1, $2, $3, $4, $5, $6, $7)', [id_usuario, id_restaurante, horario, fecha, id_estadoretiro, id_estado, id_admin]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editReservas  = async (id_usuario, id_restaurante, horario, fecha, id_estadoretiro, id_estado, id_admin, reservaId) => {
  try {
    const user = await pool.query('UPDATE reserva_llevar SET id_usuario = $1, id_restaurante = $2, horario = $3, fecha = $4, id_estadoretiro = $5, id_estado = $6, id_admin = $7 WHERE id_reservallevar = $8', [id_usuario, id_restaurante, horario, fecha, id_estadoretiro, id_estado, id_admin, reservaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deleteReservas = async (reservaId) => {
  try {
    const user = await pool.query(`DELETE FROM reserva_llevar WHERE id_reservallevar = $1`, [reservaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookReservas = async (reservaId) => {
  try {
    const user = await pool.query('SELECT * FROM reserva_llevar WHERE id_reservallevar = $1', [reservaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

