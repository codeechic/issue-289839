const http = require('http');
const app = require('./app');

const server = http.createServer(app);

server.listen();

module.exports = {
	path: '/api/',
	handler: app,
};
