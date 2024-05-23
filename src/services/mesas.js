const pool = require('../../database');

exports.getAllMesas  = async () => {
    try {
      const user = await pool.query('SELECT * FROM restaurante_mesa');
      return(user.rows) ;
    } catch (error) {
      throw error;
    }
};

exports.addMesas  = async (id_restaurante, num_mesa, cantidad, id_estado) => {
  try {
    const user = await pool.query('INSERT INTO restaurante_mesa (id_restaurante, num_mesa, cantidad, id_estado) VALUES ($1, $2, $3, $4)', [id_restaurante, num_mesa, cantidad, id_estado]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editMesas= async (id_restaurante, num_mesa, cantidad, id_estado, mesaId) => {
  try {
    const user = await pool.query('UPDATE restaurante_mesa SET id_restaurante = $1, num_mesa = $2, cantidad = $3, id_estado = $4 WHERE id_mesa = $5', [id_restaurante, num_mesa, cantidad, id_estado, mesaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deleteMesas = async (mesaId) => {
  try {
    const user = await pool.query(`DELETE FROM restaurante_mesa WHERE id_mesa = $1`, [mesaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookMesas = async (mesaId) => {
  try {
    const user = await pool.query('SELECT * FROM restaurante_mesa WHERE id_mesa = $1', [mesaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

