const pool = require('../../database');

exports.getAllPedidos  = async () => {
    try {
      const user = await pool.query('SELECT * FROM pedido_local');
      return(user.rows);
    } catch (error) {
      throw error;
    }
};

exports.addPedidos  = async (id_pedidolocal, id_comida, cantidad, total, id_estado, id_admin) => {
  try {
    const user = await pool.query('INSERT INTO pedido_local (id_pedidolocal, id_comida, cantidad, total, id_estado, id_admin) VALUES ($1, $2, $3, $4, $5, $6)', [id_pedidolocal, id_comida, cantidad, total, id_estado, id_admin]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editPedidos  = async (id_pedidolocal, id_comida, cantidad, total, id_estado, id_admin, pedidoId) => {
  try {
    const user = await pool.query('UPDATE pedido_local SET id_pedidolocal = $1, id_comida = $2, cantidad = $3, total = $4, id_estado = $5, id_admin = $6 WHERE id_pedidolocal = $7', [id_pedidolocal, id_comida, cantidad, total, id_estado, id_admin, pedidoId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deletePedidos  = async (pedidoId) => {
  try {
    const user = await pool.query(`DELETE FROM pedido_local WHERE id_pedidolocal = $1`, [pedidoId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookPedidos  = async (pedidoId) => {
  try {
    const user = await pool.query('SELECT * FROM pedido_local WHERE id_pedidolocal= $1', [pedidoId]);
    return user;
  } catch (error) {
    throw error;
  }
};

