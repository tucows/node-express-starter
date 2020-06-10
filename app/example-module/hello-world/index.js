/**
 * @function helloWorldHandler
 * @description reply with `Hello, world`
 */
const helloWorldHandler = async(request, response) => response
	.status(200)
	.send('Hello, world');

module.exports = {helloWorldHandler};
