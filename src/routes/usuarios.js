const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/usuarios'); // Importando UsuariosController
const usuariosController = new UsuariosController(); // Creando una instancia de UsuariosController
const pool = require('../../database')

pool.connect();






// Ruta para obtener todos los usuarios
router.get('/', usuariosController.obtenerUsuarios);
router.post('/buscar', async (req,res)=>{
    console.log(req.body['id_usuario'])
   
        const resultado = await pool.query(`select * from usuario where id_usuario = ${req.body['id_usuario']}`, )
        console.log(resultado.rows);
    
  

    
    res.status(200).send(resultado.rows)
})
router.post('/userAgregar', async(req, res) => {
    
    console.log(req.body)
    
        await pool.connect();
        const { nombre, apellido } = req.body;
        const newUser = await pool.query('INSERT INTO usuario (nombre, apellido) VALUES ($1,$2)', [nombre, apellido]).then((e)=>{
            console.log(e)
            numero++;
        }).catch((e)=>{console.log(e)})
        
        res.send('Entregado').status(200)
   
});
router.put('/userEditar/:userId', async (req,res)=>{
await pool.connect()
await pool.query('update usuario set nombre = $1, apellido = $2 where id_usuario = $3',[req.body['nombre'], req.body['apellido'], req.params.userId]).then((e)=>{res.send('Se modifico correctamente').status(200)}).catch((e)=>{res.send('No se actualizo').status(404)})

});
router.delete('/userEliminar/:userId', async function(req,res){
    try {
        await pool.connect();
        const userId = req.params.userId;
        console.log(userId)
        const result = await pool.query(`delete from usuario where id_usuario = 1`);
        console.log(result);
        res.status(200).send( `Usuario con ID ${userId} eliminado correctamente` );
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).json({ error: 'Error al eliminar usuario' });
    }
}); 

module.exports = router;
