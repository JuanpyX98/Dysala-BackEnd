const pool = require('../../database');

exports.getAllRoles  = async () => {
    try {
      const user = await pool.query('SELECT * FROM rol');
      return(user.rows);
    } catch (error) {
      throw error;
    }
};

exports.addRoles  = async (tipo) => {
  try {
    const user = await pool.query('INSERT INTO rol (tipo) VALUES ($1)', [tipo]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editRoles  = async (tipo, rolesId) => {
  try {
    const user = await pool.query('UPDATE rol SET tipo = $1 WHERE id_rol = $2', [tipo, rolesId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deleteRoles  = async (rolesId) => {
  try {
    const user = await pool.query(`DELETE FROM rol WHERE id_rol = $1`, [rolesId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookRoles  = async (rolesId) => {
  try {
    const user = await pool.query('SELECT * FROM rol WHERE id_rol= $1', [rolesId]);
    return user;
  } catch (error) {
    throw error;
  }
};

