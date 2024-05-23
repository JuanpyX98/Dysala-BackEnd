const pool = require('../../database');

exports.getAllReseñas  = async () => {
    try {
      const user = await pool.query('SELECT * FROM reseñas');
      return(user.rows);
    } catch (error) {
      throw error;
    }
};

exports.addReseñas  = async (id_usuario, id_restaurante, puntuacion, comentario, fecha_hora) => {
  try {
    const user = await pool.query('INSERT INTO reseñas (id_usuario, id_restaurante, puntuacion, comentario, fecha_hora) VALUES ($1, $2, $3, $4, $5)', [id_usuario, id_restaurante, puntuacion, comentario, fecha_hora]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editReseñas  = async (id_usuario, id_restaurante, puntuacion, comentario, fecha_hora, reseñaId) => {
  try {
    const user = await pool.query('UPDATE reseñas SET id_usuario = $1, id_restaurante = $2, puntuacion = $3, comentario = $4, fecha_hora = $5 WHERE id_reseña = $6', [id_usuario, id_restaurante, puntuacion, comentario, fecha_hora, reseñaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deleteReseñas = async (reseñaId) => {
  try {
    const user = await pool.query(`DELETE FROM reseñas WHERE id_reseña = $1`, [reseñaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookReseñas = async (reseñaId) => {
  try {
    const user = await pool.query('SELECT * FROM reseñas WHERE id_reseña = $1', [reseñaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

