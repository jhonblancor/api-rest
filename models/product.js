//crear modelo para nuestra base de datos con mongoose
'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creamos nuestro esquema con sus campos
const ProductSchema = Schema({
	name: String,
	picture: String,
	price: {type: Number, default: 0},
	category:{ type: String, enum:['computers', 'phones', 'accesories']},
	description: String
});

//para exportar el modelo - 
//de esta manera el resto de la app sera accesible al modelo
module.exports = mongoose.model('Product', ProductSchema);