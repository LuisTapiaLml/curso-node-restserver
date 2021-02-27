const express = require('express');
const { usuariosGet, usuariosPost , usuariosDelete , usuariosPut } = require('../controllers/usuarios');

const router = express.Router();

router.get( '/' , usuariosGet );

router.post( '/' , usuariosPost );

router.delete( '/' , usuariosDelete );

router.put( '/:id' , usuariosPut );
 


module.exports = router;