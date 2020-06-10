const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const Router = require('./routes');
const Fallback = require('./app/fallback');
const Swagger = require('./swagger')

const Pong = (_, response) => response
	.status(200)
	.send('pong');


const port = process.env.PORT || 3003;
const app = express();

// Setup
app.use(morgan(':method :url :status :response-time ms - :res[content-length]'));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set this config so we can get ip address from proxy
app.enable('trust proxy')


// Swagger docs
let {CURRENT_ENV: env} = process.env
if (env == 'dev' || env == 'qa') {
	app.use('/docs', Swagger.serve, Swagger.setup);
}

// Routes
app.use('/api', Router);

// healthcheck - required for Nomad
app.get('/ping', Pong)

// Error handling
app.use(Fallback);


app.listen(port);
