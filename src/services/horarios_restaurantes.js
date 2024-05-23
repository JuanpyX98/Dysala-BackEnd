const pool = require('../../database');

exports.getAllHorarios  = async () => {
    try {
      const user = await pool.query('SELECT * FROM horarios_restaurante');
      return(user.rows);
    } catch (error) {
      throw error;
    }
};

exports.addHorarios  = async (id_restaurante, id_dh) => {
  try {
    const user = await pool.query('INSERT INTO horarios_restaurante (id_restaurante, id_dh) VALUES ($1, $2)', [id_restaurante, id_dh]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editHorarios = async (id_restaurante, id_dh, horariosId) => {
  try {
    const user = await pool.query('UPDATE horarios_restaurante SET id_restaurante = $1, id_dh = $2 WHERE id_hr_rest = $3', [id_restaurante, id_dh, horariosId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deleteHorarios = async (horariosId) => {
  try {
    const user = await pool.query(`DELETE FROM horarios_restaurante WHERE id_hr_rest = $1`, [horariosId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookHorarios = async (horariosId) => {
  try {
    const user = await pool.query('SELECT * FROM horarios_restaurante WHERE id_hr_rest= $1', [horariosId]);
    return user;
  } catch (error) {
    throw error;
  }
};

