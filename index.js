//indicar que utilice javascript 6
'use strict'

const express = require('express');
const bodyParse = require('body-parser');

//declaramos variable app de tipo express
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParse.urlencoded({extend: false}));
app.use(bodyParse.json());


//creamos nuestras rutas
app.get('/api/product',(req, res)=>{
res.send(200,{priducts:[]});
});

app.get('/api/product/:productId',(req,res)=>{

});

app.post('/api/product',(req,res)=>{
console.log(req.body);
res.status(200).send(200,{message:'el producto se ha recibido'})
});

app.put('api/product/:productId',(req,res)=>{

});

app.delete('/api/product/:productId',(req,res)=>{

});

//le decimnos que escuche por el puerto 3000 y con la nueva
//arrofunctio de ecmascript 6 que imprima Api rest
app.listen(port, ()=>{
	console.log('API REST corriendo')
});