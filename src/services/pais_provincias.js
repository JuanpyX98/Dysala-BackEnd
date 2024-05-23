const pool = require('../../database');

exports.getAllPaisProvincia  = async () => {
    try {
      const user = await pool.query('SELECT * FROM pais_provincia');
      return(user.rows);
    } catch (error) {
      throw error;
    }
};

exports.addPaisProvincia  = async (id_pais, id_provincia) => {
  try {
    const user = await pool.query('INSERT INTO pais_provincia (id_pais, id_provincia) VALUES ($1, $2)', [id_pais, id_provincia]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editPaisProvincia  = async (id_pais, id_provincia, paisProvinciaId) => {
  try {
    const user = await pool.query('UPDATE pais_provincia SET id_pais = $1, id_provincia = $2 WHERE id_pais_prov = $3', [id_pais, id_provincia, paisProvinciaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deletePaisProvincia  = async (paisProvinciaId) => {
  try {
    const user = await pool.query(`DELETE FROM pais_provincia WHERE id_pais_prov = $1`, [paisProvinciaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookPaisProvincia  = async (paisProvinciaId) => {
  try {
    const user = await pool.query('SELECT * FROM pais_provincia WHERE id_pais_prov= $1', [paisProvinciaId]);
    return user;
  } catch (error) {
    throw error;
  }
};

