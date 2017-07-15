//indicar que utilice javascript 6
'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//declaramos la constante y le damos la ruta porque no es un module
const Product = require('./models/product.js');
//declaramos variable app de tipo express
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

app.get('/api/product', (req, res) =>{
	Product.find({}, (err, product)=> {
		if(err) return res.status(500).send({message: 'Error al realizar la consolta' })
		if(!product) return res.status(404).send({message: 'El producto no existe'})

		res.send(200, {product})
	})
	
});

app.get('/api/product/:productId', (req, res) => {
	//lo primer que necesitamos el productId
	let productId = req.params.productId

	Product.findById(productId, (err, product) => {
		if(err) return res.status(500).send({message: 'Error al realizar la consolta' })
		if(!product) return res.status(404).send({message: 'El producto no existe'})

		//{product: product} estamos enviando un objeto con la clave
		//product y la clave se llama product, en los casos donde el obejto
		//sea el mismo nombre de la clase se reduce a {product}
		res.status(200).send({product})
	})


});

app.post('/api/product', (req, res) =>{
	console.log('POST a/api/product');
	//mostramos por patalla el cuerpo de la peticion
	console.log(req.body);

	//almacenamos en la base de datos nuestro producto
	let product = new Product()
	product.name = req.body.name
	product.picture = req.body.picture
	product.price = req.body.price
	product.category = req.body.category
	product.description = req.body.description
	
	//lo guardamos
	//una funcion de collback que recibe dos parametros uno es un err
	//y el otro es el producto guardado
	product.save((err, productStored) =>{
		if(err) res.status(500).send({ message: 'errror al guardar el producto' + err})

		res.status(200).send({product: productStored})
	})


});

mongoose.connect('mongodb://localhost:27017/shop',(err, res)=>{
	if(err) {
		console.log('error al intentar conectar a base de datos:' + err);
	}else{
		console.log('Conexion a la base datos exitosa...');
	}
		app.listen(port, ()=>{
		console.log('API REST corriendo')
	})
})
//le decimnos que escuche por el puerto 3000 y con la nueva
//arrofunctio de ecmascript 6 que imprima Api rest
