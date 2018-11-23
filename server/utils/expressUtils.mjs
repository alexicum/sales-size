/**
 * wrap - catch any errors, and pass them to next (args[2]).
 * https://strongloop.com/strongblog/async-error-handling-expressjs-es7-promises-generators/#cleaner-code-with-generators
 * @param {Function} fn - express handler (async function)
 */
const wrap = fn => (...args) => fn(...args).catch(args[2]);
const bar = '';
export { wrap as default, bar };
