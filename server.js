import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import postcssMiddleware from 'postcss-middleware';
import autoprefixer from 'autoprefixer';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import https from 'https';

const server = express();
server.use(bodyParser.json());

server.use(sassMiddleware({
	src: path.join(__dirname, 'sass'),
	response: false, 
	outputStyle: 'extended',
	dest: path.join(__dirname, 'public')
}));
server.use('/public.*.css', postcssMiddleware({
    src: function(req) {
    	console.log(path.join(__dirname, 'public', 'style.css'));
    	return path.join(__dirname, 'public', 'style.css');
    },
    plugins: [
    	autoprefixer()
    ]
  })
);
server.set('view engine', 'ejs');

server.get(['/'],(req,res) => {
	res.render('index');
});

server.use('/api', apiRouter);
server.use(express.static('public'));
server.listen(config.port, config.host, () => {
	console.info('Express listening on port ', config.port);
});
