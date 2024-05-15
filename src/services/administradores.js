const pool = require('../../database');

exports.getAllAdmin  = async () => {
    try {
      const user = await pool.query('SELECT * FROM administrador');
      return(user.rows) ;
    } catch (error) {
      throw error;
    }
};

exports.addAdmin  = async (id_dataBase, nombre, apellido, dni, contraseña, correo, telefono, id_rol, id_estado) => {
  try {
    const user = await pool.query('INSERT INTO administrador (id_dataBase, nombre, apellido, dni, contraseña, correo, telefono, id_rol, id_estado) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [id_dataBase, nombre, apellido, dni, contraseña, correo, telefono, id_rol, id_estado]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editAdmin = async (id_dataBase, nombre, apellido, dni, contraseña, correo, telefono, id_rol, id_estado, adminId) => {
  try {
    const user = await pool.query('UPDATE administrador SET id_dataBase = $1, nombre = $2, apellido = $3 , dni = $4, contraseña = $5 , correo = $6 , telefono = $7 , id_rol = $8 , id_estado = $9 WHERE id_administrador = $10', [id_dataBase, nombre, apellido, dni, contraseña, correo, telefono, id_rol, id_estado, adminId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deleteAdmin = async (adminId) => {
  try {
    const user = await pool.query(`DELETE FROM administrador WHERE id_administrador = $1`, [adminId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookAdmin = async (adminId) => {
  try {
    const user = await pool.query('SELECT * FROM administrador WHERE id_administrador = $1', [adminId]);
    return user;
  } catch (error) {
    throw error;
  }
};

