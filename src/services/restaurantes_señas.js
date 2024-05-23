const pool = require('../../database');

exports.getAllComidas  = async () => {
    try {
      const user = await pool.query('SELECT * FROM restaurant_seña');
      return(user.rows);
    } catch (error) {
      throw error;
    }
};

exports.addComidas  = async (id_restaurante, seña) => {
  try {
    const user = await pool.query('INSERT INTO restaurant_seña (id_restaurante, seña) VALUES ($1, $2)', [id_restaurante, seña]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editComidas  = async (id_restaurante, seña, señaId) => {
  try {
    const user = await pool.query('UPDATE restaurant_seña SET id_restaurante = $1, seña = $2 WHERE id_restseña = $3', [id_restaurante, seña, señaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deleteComidas  = async (señaId) => {
  try {
    const user = await pool.query(`DELETE FROM restaurant_seña WHERE id_restseña = $1`, [señaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookComidas = async (señaId) => {
  try {
    const user = await pool.query('SELECT * FROM restaurant_seña WHERE id_restseña= $1', [señaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

