const pool = require('../../database');

exports.getAllAdmin  = async () => {
    try {
      const user = await pool.query('SELECT * FROM admin_local');
      return(user.rows) ;
    } catch (error) {
      throw error;
    }
};

exports.addAdmin  = async (id_local, id_admin, id_estado) => {
  try {
    const user = await pool.query('INSERT INTO admin_local (id_local, id_admin, id_estado) VALUES ($1, $2, $3)', [id_local, id_admin, id_estado]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editAdmin = async (id_local, id_admin, id_estado, adminLocalId) => {
  try {
    const user = await pool.query('UPDATE admin_local SET id_local = $1, id_admin = $2, id_estado = $3 WHERE id_admin_local = $4', [id_local, id_admin, id_estado, adminLocalId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deleteAdmin = async (adminLocalId) => {
  try {
    const user = await pool.query(`DELETE FROM admin_local WHERE id_admin_local = $1`, [adminLocalId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookAdmin = async (adminLocalId) => {
  try {
    const user = await pool.query('SELECT * FROM admin_local WHERE id_admin_local = $1', [adminLocalId]);
    return user;
  } catch (error) {
    throw error;
  }
};

