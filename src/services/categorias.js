const pool = require('../../database');

exports.getAllCategorias  = async () => {
    try {
      const user = await pool.query('SELECT * FROM categoria');
      return(user.rows);
    } catch (error) {
      throw error;
    }
};

exports.addCategorias = async (nombre) => {
  try {
    const user = await pool.query('INSERT INTO categoria (nombre) VALUES ($1)', [nombre]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editCategorias = async (nombre, categoriaId) => {
  try {
    const user = await pool.query('UPDATE categoria SET nombre = $1 WHERE id_categoria = $2', [nombre, categoriaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deleteCategorias  = async (categoriaId) => {
  try {
    const user = await pool.query(`DELETE FROM categoria WHERE id_categoria = $1`, [categoriaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookCategorias  = async (categoriaId) => {
  try {
    const user = await pool.query('SELECT * FROM categoria WHERE id_categoria= $1', [categoriaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

