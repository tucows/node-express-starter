# Sample Node + Express project

Simple ExpressJS API service boilerplate with Docker, Swagger docs, tests, and async/await route handlers.

Module-based, so ideally separate concerns go in different folders under `./app/`.
Testing directory structure mimics `./app` structure.


## Running the project locally with Docker 🐳
Run `docker-compose up --build` from the project root dir

## Checking out the docs
If running locally, API docs are going to be at `/docs`

Also, see [swagger docs](./teapot/docs/README.md)

[PM2 (Process manager for Node) reference](http://pm2.keymetrics.io/docs/usage/quick-start/#managing-processes)

## Demployment
Optimized for Docker + Jenkins + Nomad pipeline.

Sample repo doesn't have Jenkins file or Makefile, work with Ops to get it set up (if needed).
Also, `docker-compose-test.yml` will need `volumes` to be configured (if working with Nomad; removed for security)

## Testing
We use Mocha + Chai

https://mochajs.org/#getting-started is a BDD based testing framework.

http://www.chaijs.com/api/bdd/ is the assertion engine. We're using the "Should" syntax.

Run tests: `npm test`

To target a specific test: `npm test -- -g 'login'

After you run test locally coverage report will be generated in `./coverage/index.html`
