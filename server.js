import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import postcssMiddleware from 'postcss-middleware';
import autoprefixer from 'autoprefixer';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

const server = express();
server.use(bodyParser.json());

server.use(sassMiddleware({
	src: path.join(__dirname, 'sass'),
	response: false, 
	outputStyle: 'extended',
	dest: path.join(__dirname, 'public')
}));
// server.use(
// 	'/', postcssMiddleware({
//     src: function(req) {
//     	console.log(path.join(__dirname, 'public', 'style.css'));
//     	return path.join(__dirname, 'public', 'style.css');
//     },
//     plugins: [
//     	autoprefixer()
//     ]
//   })
// );
server.set('view engine', 'ejs');

import serverRender from './serverRender';

server.get(['/', '/contest/:contestId'],(req,res) => {
	serverRender(req.params.contestId)
		.then(( {initialMarkup, initialData}) => {
			res.render('index', {
				initialMarkup,
				initialData
			});
		})
		.catch(error => {
			console.error(error)
			res.status(404).send('Bad request')
		});

});

server.use('/api', apiRouter);
server.use(express.static('public'));
server.listen(config.port, config.host, () => {
	console.info('Express listening on port ', config.port);
});
