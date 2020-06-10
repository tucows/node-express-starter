const ENV = (process.env.BUILD_ENV || 'dev').toLowerCase();

const options = {
	apps: [
		{
			name: 'Example',
			script: 'server.js',
			instances: 1,
			autorestart: true,
			wait_ready: false,
			watch: false,
			max_memory_restart: '1G',
			env: {
				NODE_ENV: 'development',
				CURRENT_ENV: ENV,
			},
			env_production: {NODE_ENV: 'production'}
		}
	]
};


module.exports = options;
