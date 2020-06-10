const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
	definition: {
		openapi: '3.0.3',
		info: {
			title: 'Example App',
			version: '1.0.0',
			description: 'A modular node API using ExpressJS',
		},
		servers: [
			{
				url: '/api',
				description: 'Development server',
			}
		],
	},
	apis: ['./docs/**/*.yaml'],
};

const swaggerSpec = swaggerJSDoc(options);


module.exports = {
	serve: swaggerUi.serve,
	setup: swaggerUi.setup(swaggerSpec)
}
