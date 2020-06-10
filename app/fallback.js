const KnownErrors = new Map([['TypeError: fn is not a function', 'Route hanlder function is probably undefined or missing']]);

/**
 * @function Fallback
 * @description Global App error handler
 * Unhandled errors will end up here
 */
const Fallback = (error, request, response, next) => {
	console.error(error);

	let message = error.toString();
	if (KnownErrors.get(message)) {
		console.log(`Possible cause: ${KnownErrors.get(message)}`);
	}

	response.sendStatus(500);
};


module.exports = Fallback;
