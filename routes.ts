/**
 * An Array of routes that are used for public route
 *
 * @type {string[]}
 */
const publicUrl = ['/', '/contact'];

/**
 * An array of routes that are used for authentication.
 * these routes will user to login.
 * @type {string[]}
 */

const loginAuth = ['/login', '/register', '/login/error'];

/**
 * this route is for next login routes.
 * these routes will user to login.
 * @type {string}
 */
const apiAuthPrefix = '/api/auth';

/**
 * if user is login then throw user this route.
 * this is redirect route.
 * @type {string}
 */
const DEFAULT_LOGIN_REDIRECT = '/';

export { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, loginAuth, publicUrl };
