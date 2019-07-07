'use strict'

var Contacto= require('../contacto.js'),
	express = require('express'),
	router = express.Router()

	

router
	.get('/', (req, res, next)=>{
		let locals = {title: 'Morodiseño'}
		res.render('index', locals)
	} )
	.get('/contacto', (req, res, next)=>{
		let locals = {title: 'Morodiseño:Contacto'}
		res.render('contacto', locals)
	} )
	.post('/contacto', Contacto.tata)
	.get('/acerca', (req, res, next)=>{
		let locals = {title: 'Morodiseño:Acerca'}
		res.render('acerca', locals)
	} )
	.get('/regado', (req, res, next)=>{
		let locals = {title: 'Regado'}
		res.render('regado.html', locals)
	} )



module.exports = router
