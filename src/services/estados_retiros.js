const pool = require('../../database');

exports.getAllEst_Retiro  = async () => {
    try {
      const user = await pool.query('SELECT * FROM estado_retiro');
      return(user.rows);
    } catch (error) {
      throw error;
    }
};

exports.addEst_Retiro  = async (nombre) => {
  try {
    const user = await pool.query('INSERT INTO estado_retiro (tipo) VALUES ($1)', [nombre]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editEst_Retiro = async (nombre, userId) => {
  try {
    const user = await pool.query('UPDATE estado_retiro SET tipo = $1 WHERE id_estadoretiro = $2', [nombre, userId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deleteEst_Retiro = async (userId) => {
  try {
    const user = await pool.query(`DELETE FROM estado_retiro WHERE id_estadoretiro = $1`, [userId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookEst_Retiro = async (userId) => {
  try {
    const user = await pool.query('SELECT * FROM estado_retiro WHERE id_estadoretiro= $1', [userId]);
    return user;
  } catch (error) {
    throw error;
  }
};

