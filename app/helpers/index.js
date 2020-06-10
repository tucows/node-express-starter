/**
 * @function useAsync
 * @description wraps middleware endpoint in Promise to enable async/await syntax
 * on error triggers the `next` callback
 * @returns {promise}
 */
const useAsync = (fn, context) => (req, res, next) => Promise
	.resolve(fn(req, res, next))
	.catch((error) => next(error));


module.exports = {useAsync};
