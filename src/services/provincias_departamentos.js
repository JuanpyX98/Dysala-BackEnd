const pool = require('../../database');

exports.getAllProvincias  = async () => {
    try {
      const user = await pool.query('SELECT * FROM provincia_departamento');
      return(user.rows);
    } catch (error) {
      throw error;
    }
};

exports.addProvincias  = async (id_provincia, id_departamento) => {
  try {
    const user = await pool.query('INSERT INTO provincia_departamento (id_provincia, id_departamento) VALUES ($1, $2)', [id_provincia, id_departamento]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editProvincias  = async (id_provincia, id_departamento, provinciaId) => {
  try {
    const user = await pool.query('UPDATE provincia_departamento SET nombre = $1, id_departamento = $2 WHERE id_prov_depart = $3', [id_provincia, id_departamento, provinciaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deleteProvincias  = async (provinciaId) => {
  try {
    const user = await pool.query(`DELETE FROM provincia_departamento WHERE id_prov_depart = $1`, [provinciaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookProvincias  = async (provinciaId) => {
  try {
    const user = await pool.query('SELECT * FROM provincia_departamento WHERE id_prov_depart= $1', [provinciaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

