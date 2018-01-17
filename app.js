'use strict'

var express = require('express'),
	favicon = require('serve-favicon'),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	restFull = require('express-method-override'),
	routes = require('./routes/router'),
	faviconURL = `${__dirname}/public/img/md.png`,
	publicDir = express.static(`${__dirname}/public`),
	viewDir = `${__dirname}/views`,
	port = (process.env.PORT || 3000),
/*	contacto= require('./contacto.js'),*/
	app = express()

app
	.set('views', viewDir)
	.set('view engine', 'jade')
	.set('port', port)
	
	.use(favicon(faviconURL))
	.use( bodyParser.json() )
	.use( bodyParser.urlencoded({extended:false}) )
	//.use(restFull)
	.use(morgan('dev'))
	.use(publicDir)
	//ejecuto el middleware enrutador
	.use(routes)/*aca en vez de especificar una sola ruta(.use('/', routes)), le digo que escuche routes*/
/*	.use(contacto)*/


module.exports = app