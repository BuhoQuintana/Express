// IMPORTAR EL MODULO DE EXPRESS.
// SE GUARDA EN UNA CONSOLA LLAMADA "EXPRESS"
const express = require('express');

// INSTANCIAR EL MODULO EN UNA APP.
// DESDE AQUI VA A SER LLAMADO EN FUTUROS ENDPOINTS
const app = express();

// CONFIGURO LA PRIMERA RESPUESTA A UNA SOLICITUD.
// SOLICITUDES.
// INDEX.
app.get('/',(req, res) =>{
    res.send('Hola a todos/as los/as cracks desde el server.');
});

// SOLICITUD LOGIN.
app.get('/login',(req, res)=>{
    res.send('Bienvenido al login.');
});

app.get('/aviones', (req,res)=>{
    res.send('Listar aviones.');
});
app.get('/autos', (req,res)=>{
    res.send('Listar autos.');
});
app.get('/motos', (req,res)=>{
    res.send('Listar motos.');
});
app.get('/trenes', (req,res)=>{
    res.send('Listar trenes.');
});

// CONFIGURO EL PUERTO POR EL CUAL SE VA A ESTAR 'ESCUCHANDO' SOLICITUDES.
app.listen(3000, ()=>{
    console.log('Servidor en puerto 3001');
});


