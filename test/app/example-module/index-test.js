const sinon = require('sinon');
const should = require('chai').should();

const ExampleModule = require('../../../app/example-module')

let mockResponse = () => {
	let res = {};
	res.status = sinon.stub().returns(res);
	res.send = sinon.stub().returns(res);
	res.redirect = sinon.stub().returns(res);
	res.sendStatus = sinon.stub().returns(res);
	return res;
};

describe('ExampleModule', () => {
	describe('/helloWorldHandler', () => {
		afterEach(() => sinon.restore());

		it('replies with hello world', async () => {
			let response = mockResponse()
			// Sample mock request with a bunch of mock params
			let request = {
				ip: '127.0.0.1',
				body: {
					username: 'John',
					password: '0x123'
				},
				query: {
					return_to: 'home'
				},
				headers: {
					'x-srs-auth-user': 'username=johnny'
				}
			}

			await ExampleModule.helloWorldHandler(request, response)

			response.status.calledWith(200)
			.should.be.true

			response.send.calledWith('Hello, world')
			.should.be.true
		})
	})
})
