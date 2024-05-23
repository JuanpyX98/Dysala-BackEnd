const pool = require('../../database');

exports.getAllRests  = async () => {
    try {
      const user = await pool.query('SELECT * FROM restaurante');
      return(user.rows) ;
    } catch (error) {
      throw error;
    }
};

exports.addRests  = async (nombre, direccion, num_tel, cant_mesas, puntuacion, id_categoria, provincia, pais, departamento, lat, log, id_estado) => {
  try {
    const user = await pool.query('INSERT INTO restaurante (nombre, direccion, num_tel, cant_mesas, puntuacion, id_categoria, provincia, pais, departamento, lat, log, id_estado) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)', [nombre, direccion, num_tel, cant_mesas, puntuacion, id_categoria, provincia, pais, departamento, lat, log, id_estado]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editRests= async (nombre, direccion, num_tel, cant_mesas, puntuacion, id_categoria, provincia, pais, departamento, lat, log, id_estado, restsId) => {
  try {
    const user = await pool.query('UPDATE restaurante SET nombre = $1, direccion = $2, num_tel = $3, cant_mesas = $4, puntuacion = $5, id_categoria = $6, provincia = $7, pais = $8, departamento = $9, lat = $10, log = $11, id_estado = $12 WHERE id_restaurante = $13', [nombre, direccion, num_tel, cant_mesas, puntuacion, id_categoria, provincia, pais, departamento, lat, log, id_estado, restsId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deleteRests = async (restsId) => {
  try {
    const user = await pool.query(`DELETE FROM restaurante WHERE id_restaurante = $1`, [restsId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookRests = async (restsId) => {
  try {
    const user = await pool.query('SELECT * FROM restaurante WHERE id_restaurante = $1', [restsId]);
    return user;
  } catch (error) {
    throw error;
  }
};

