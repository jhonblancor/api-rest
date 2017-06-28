//indicar que utilice javascript 6
'use strict'

const express = require('express');
const bodyParse = require('body-parser');

//declaramos variable app de tipo express
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParse.urlencoded({extend(false)
}));
//le decimnos que escuche por el puerto 3000 y con la nueva
//arrofunctio de ecmascript 6 que imprima Api rest
app.listen(3000, ()=>{
	console.log('API REST corriendo')
});