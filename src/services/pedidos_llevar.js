const pool = require('../../database');

exports.getAllPedidos  = async () => {
    try {
      const user = await pool.query('SELECT * FROM pedido_llevar');
      return(user.rows);
    } catch (error) {
      throw error;
    }
};

exports.addPedidos  = async (id_reservallevar, id_comida, cantidad, total, id_estado) => {
  try {
    const user = await pool.query('INSERT INTO pedido_llevar (id_reservallevar, id_comida, cantidad, total, id_estado) VALUES ($1, $2, $3, $4, $5)', [id_reservallevar, id_comida, cantidad, total, id_estado]);
    return(user.rows);
  } catch (error) {
    throw error;
  }
};

exports.editPedidos  = async (id_reservallevar, id_comida, cantidad, total, id_estado, pedidoId) => {
  try {
    const user = await pool.query('UPDATE pedido_llevar SET id_reservallevar = $1, id_comida = $2, cantidad = $3, total = $4, id_estado = $5 WHERE id_pedidollevar = $2', [id_reservallevar, id_comida, cantidad, total, id_estado, pedidoId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.deletePedidos  = async (pedidoId) => {
  try {
    const user = await pool.query(`DELETE FROM pedido_llevar WHERE id_pedidollevar = $1`, [pedidoId]);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.lookPedidos  = async (pedidoId) => {
  try {
    const user = await pool.query('SELECT * FROM pedido_llevar WHERE id_pedidollevar= $1', [pedidoId]);
    return user;
  } catch (error) {
    throw error;
  }
};

