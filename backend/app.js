const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors'); 

var corsOpstions= {
    origin: '/',  
    optionSuccessStatus: 200
}

app.use(cors(corsOpstions));

//Conexion a base de datos
const mongoose = require('mongoose');

const user= 'ssdm';
const password= '12345';
const dataB= 'colombianFood';
const uri= `mongodb+srv://${user}:${password}@cluster0.ojq0r.mongodb.net/${dataB}?retryWrites=true&w=majority`; 

// const uri= 'mongodb://localhost/db_colombianfood'

const options = {useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(uri, options).then(
    db => console.log('Base de datos lista y conectada')
).catch (error => console.log(error))




//Middelware
app.use(express.json());

app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//Rutas
/* app.get('/ruta', function(req,res){
    res.send('Hoolaa mundoo');
}); */
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(__dirname + '/public'));

app.use('/api', require('./routes/tareas'));


//PUERTO --generado automaticamente--
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
    console.log('El servidor escucha por el puerto ' + app.get('puerto'));
});