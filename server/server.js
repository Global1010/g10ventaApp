require('./config/config');
const expess = require('express');
const app = expess();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/usuario', function ( req, res ) {

res.json('Get Usuario');

});

app.post('/usuario', function ( req, res ) {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es Necesario'
        });
    } else {
        res.json({
            body
        });
    }    
});
    
app.put('/usuario/:id', function ( req, res ) {

    let id = req.params.id;

    res.json({
        id
    });
    
});
    
app.delete('/usuario', function ( req, res ) {

    res.json('Delete Usuario g10');
    
});
    
app.listen(process.env.PORT, () => {

    console.log('Corriendo en el puerto ', process.env.PORT);

});