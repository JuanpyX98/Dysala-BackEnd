const pool = require('../../database');

exports.getAllUsers  = async () => {
    try {
      const user = await pool.query('SELECT * FROM usuario');
      return(user.rows) ;
    } catch (error) {
      throw error;
    }
};

exports.addUsers  = async () => {
  try {
    const { nombre, apellido } = req.body;
    const user = await pool.query('INSERT INTO usuario (nombre, apellido) VALUES ($1, $2)', [ nombre, apellido]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editUsers  = async () => {
  try {
    const userId = req.params.userId;
    const { nombre, apellido } = req.body;
    const user = await pool.query('UPDATE usuario SET nombre = $1, apellido = $2 WHERE id = $3', [nombre, apellido, userId]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};