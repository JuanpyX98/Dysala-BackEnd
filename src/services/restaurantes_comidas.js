const pool = require('../../database');

exports.getAllComidas  = async () => {
    try {
      const user = await pool.query('SELECT * FROM local_comida');
      return(user.rows);
    } catch (error) {
      throw error;
    }
};

exports.addComidas  = async (id_restaurante, nombre, valor, id_estado) => {
  try {
    const user = await pool.query('INSERT INTO local_comida (id_restaurante, nombre, valor, id_estado) VALUES ($1, $2, $3, $4)', [id_restaurante, nombre, valor, id_estado]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editComidas  = async (id_restaurante, nombre, valor, id_estado, comidaId) => {
  try {
    const user = await pool.query('UPDATE local_comida SET id_restaurante = $1, nombre = $2, valor = $3, id_estado = $4 WHERE id_comida = $5', [id_restaurante, nombre, valor, id_estado, comidaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deleteComidas  = async (comidaId) => {
  try {
    const user = await pool.query(`DELETE FROM local_comida WHERE id_comida = $1`, [comidaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookComidas = async (comidaId) => {
  try {
    const user = await pool.query('SELECT * FROM local_comida WHERE id_comida= $1', [comidaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

