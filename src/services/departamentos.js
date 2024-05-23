const pool = require('../../database');

exports.getAllDeparts  = async () => {
    try {
      const user = await pool.query('SELECT * FROM departamento');
      return(user.rows);
    } catch (error) {
      throw error;
    }
};

exports.addDeparts  = async (nombre) => {
  try {
    const user = await pool.query('INSERT INTO departamento (nombre) VALUES ($1)', [nombre]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editDeparts  = async (nombre, departamentoId) => {
  try {
    const user = await pool.query('UPDATE departamento SET nombre = $1 WHERE id_departamento = $2', [nombre, departamentoId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deleteDeparts = async (departamentoId) => {
  try {
    const user = await pool.query(`DELETE FROM departamento WHERE id_departamento = $1`, [departamentoId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookDeparts = async (departamentoId) => {
  try {
    const user = await pool.query('SELECT * FROM departamento WHERE id_departamento= $1', [departamentoId]);
    return user;
  } catch (error) {
    throw error;
  }
};

