//indicar que utilice javascript 6
'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//declaramos variable app de tipo express
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

app.get('/api/product', (req, res) =>{
	res.status(200).send({product:[]})
});

app.get('/api/product/:productId', (req, res) =>{

});

app.post('/api/product', (req, res) =>{
	console.log(req.body)
	res.status(200).send({message: 'El producto ha sido creado'})
});

mongoose.connect('mongodb://localhost:27017/shop',(err, res)=>{
	if(err) {
		console.log('error al intentar conectar a base de datos!');
	}
		console.log('Conexion a la base datos exitosa...');

		app.listen(port, ()=>{
		console.log('API REST corriendo')
	})
})
//le decimnos que escuche por el puerto 3000 y con la nueva
//arrofunctio de ecmascript 6 que imprima Api rest
