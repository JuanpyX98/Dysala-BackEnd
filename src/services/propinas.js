const pool = require('../../database');

exports.getAllPropinas  = async () => {
    try {
      const user = await pool.query('SELECT * FROM propina');
      return(user.rows);
    } catch (error) {
      throw error;
    }
};

exports.addPropinas  = async (id_restaurante, propina) => {
  try {
    const user = await pool.query('INSERT INTO propina (id_restaurante, propina) VALUES ($1, $2)', [id_restaurante, propina]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editPropinas   = async (id_restaurante, propina, propinaId) => {
  try {
    const user = await pool.query('UPDATE propina SET id_restaurante = $1, propina = $2 WHERE id_propina = $3', [id_restaurante, propina, propinaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deletePropinas   = async (propinaId) => {
  try {
    const user = await pool.query(`DELETE FROM propina WHERE id_propina = $1`, [propinaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookPropinas   = async (propinaId) => {
  try {
    const user = await pool.query('SELECT * FROM propina WHERE id_propina= $1', [propinaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

