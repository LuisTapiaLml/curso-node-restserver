

const usuariosGet = ( req , res ) => {

    const { q , token , accion } = req.query;

    res.json({
        msg : "get",
        q ,
        token ,
        accion    
    });

};


const usuariosPost =  ( req , res ) => {

    const { nombre , edad } = req.body;

    res.json({
        msg : "post",
        nombre , 
        edad
    });

}

const usuariosDelete = ( req , res ) => {
    
    res.json({
        msg : "delete"
    });

}


const usuariosPut =  ( req , res ) => {

    const { id } =  req.params;   
    
    res.json({
        msg : "put",
        id
    });

}

module.exports = {  usuariosGet , usuariosPost , usuariosDelete , usuariosPut };