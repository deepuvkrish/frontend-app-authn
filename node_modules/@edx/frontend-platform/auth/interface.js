function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * #### Import members from **@edx/frontend-platform/auth**
 *
 * Simplifies the process of making authenticated API requests to backend edX services by providing
 * common authN/authZ client code that enables the login/logout flow and handles ensuring the
 * presence of a valid [JWT cookie](https://github.com/openedx/edx-platform/blob/master/openedx/core/djangoapps/oauth_dispatch/docs/decisions/0009-jwt-in-session-cookie.rst).
 *
 * The `initialize` function performs much of the auth configuration for you.  If, however, you're
 * not using the `initialize` function, an authenticated API client can be created via:
 *
 * ```
 * import {
 *   configure,
 *   fetchAuthenticatedUser,
 *   getAuthenticatedHttpClient
 * } from '@edx/frontend-platform/auth';
 * import { getConfig } from '@edx/frontend-platform';
 * import { getLoggingService } from '@edx/frontend-platform/logging';
 *
 * configure({
 *   loggingService: getLoggingService(),
 *   config: getConfig(),
 * });
 *
 * const authenticatedUser = await fetchAuthenticatedUser(); // validates and decodes JWT token
 * const authenticatedHttpClient = getAuthenticatedHttpClient();
 * const response = await getAuthenticatedHttpClient().get(`https://example.com/api/user/data/${authenticatedUser.username}`); // fetching from an authenticated API using user data
 * ```
 *
 * As shown in this example, auth depends on the configuration document and logging.
 *
 * NOTE: The documentation for AxiosJwtAuthService is nearly the same as that for the top-level
 * auth interface, except that it contains some Axios-specific details.
 *
 * @module Auth
 */
import PropTypes from 'prop-types';
import { publish } from '../pubSub';

/**
 * @constant
 * @private
 */
export var AUTHENTICATED_USER_TOPIC = 'AUTHENTICATED_USER';

/**
 * Published when the authenticated user data changes.  This can happen when the authentication
 * service determines that the user is authenticated or anonymous, as well as when we fetch
 * additional user account data if the `hydrateAuthenticatedUser` flag has been set in the
 * `initialize` function.
 *
 * @event
 * @see {@link module:Initialization~initialize}
 */
export var AUTHENTICATED_USER_CHANGED = "".concat(AUTHENTICATED_USER_TOPIC, ".CHANGED");
var optionsShape = {
  config: PropTypes.shape({
    BASE_URL: PropTypes.string.isRequired,
    LMS_BASE_URL: PropTypes.string.isRequired,
    LOGIN_URL: PropTypes.string.isRequired,
    LOGOUT_URL: PropTypes.string.isRequired,
    REFRESH_ACCESS_TOKEN_ENDPOINT: PropTypes.string.isRequired,
    ACCESS_TOKEN_COOKIE_NAME: PropTypes.string.isRequired,
    CSRF_TOKEN_API_PATH: PropTypes.string.isRequired
  }).isRequired,
  loggingService: PropTypes.shape({
    logError: PropTypes.func.isRequired,
    logInfo: PropTypes.func.isRequired
  }).isRequired
};
var serviceShape = {
  getAuthenticatedHttpClient: PropTypes.func.isRequired,
  getHttpClient: PropTypes.func.isRequired,
  getLoginRedirectUrl: PropTypes.func.isRequired,
  redirectToLogin: PropTypes.func.isRequired,
  getLogoutRedirectUrl: PropTypes.func.isRequired,
  redirectToLogout: PropTypes.func.isRequired,
  getAuthenticatedUser: PropTypes.func.isRequired,
  setAuthenticatedUser: PropTypes.func.isRequired,
  fetchAuthenticatedUser: PropTypes.func.isRequired,
  ensureAuthenticatedUser: PropTypes.func.isRequired,
  hydrateAuthenticatedUser: PropTypes.func.isRequired
};
var service;

/**
 *
 * @param {class} AuthService
 * @param {*} options
 * @returns {AuthService}
 */
export function configure(AuthService, options) {
  PropTypes.checkPropTypes(optionsShape, options, 'property', 'Auth');
  service = new AuthService(options);
  PropTypes.checkPropTypes(serviceShape, service, 'property', 'AuthService');
  return service;
}

/**
 *
 *
 * @returns {AuthService}
 */
export function getAuthService() {
  if (!service) {
    throw Error('You must first configure the auth service.');
  }
  return service;
}

/**
 *
 */
export function resetAuthService() {
  service = null;
}

/**
 * Gets the authenticated HTTP client for the service.
 *
 * @param {Object} [options] Optional options for how to configure the authenticated HTTP client
 * @param {boolean} [options.useCache] Whether to use front end caching for all requests made with the returned client
 *
 * @returns {HttpClient}
 */
export function getAuthenticatedHttpClient() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return service.getAuthenticatedHttpClient(options);
}

/**
 * Gets the unauthenticated HTTP client for the service.
 *
 * @param {Object} [options] Optional options for how to configure the authenticated HTTP client
 * @param {boolean} [options.useCache] Whether to use front end caching for all requests made with the returned client
 *
 * @returns {HttpClient}
 */
export function getHttpClient() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return service.getHttpClient(options);
}

/**
 * Builds a URL to the login page with a post-login redirect URL attached as a query parameter.
 *
 * ```
 * const url = getLoginRedirectUrl('http://localhost/mypage');
 * console.log(url); // http://localhost/login?next=http%3A%2F%2Flocalhost%2Fmypage
 * ```
 *
 * @param {string} redirectUrl The URL the user should be redirected to after logging in.
 */
export function getLoginRedirectUrl(redirectUrl) {
  return service.getLoginRedirectUrl(redirectUrl);
}

/**
 * Redirects the user to the login page.
 *
 * @param {string} redirectUrl The URL the user should be redirected to after logging in.
 */
export function redirectToLogin(redirectUrl) {
  return service.redirectToLogin(redirectUrl);
}

/**
 * Builds a URL to the logout page with a post-logout redirect URL attached as a query parameter.
 *
 * ```
 * const url = getLogoutRedirectUrl('http://localhost/mypage');
 * console.log(url); // http://localhost/logout?redirect_url=http%3A%2F%2Flocalhost%2Fmypage
 * ```
 *
 * @param {string} redirectUrl The URL the user should be redirected to after logging out.
 */
export function getLogoutRedirectUrl(redirectUrl) {
  return service.getLogoutRedirectUrl(redirectUrl);
}

/**
 * Redirects the user to the logout page.
 *
 * @param {string} redirectUrl The URL the user should be redirected to after logging out.
 */
export function redirectToLogout(redirectUrl) {
  return service.redirectToLogout(redirectUrl);
}

/**
 * If it exists, returns the user data representing the currently authenticated user. If the
 * user is anonymous, returns null.
 *
 * @returns {UserData|null}
 */
export function getAuthenticatedUser() {
  return service.getAuthenticatedUser();
}

/**
 * Sets the authenticated user to the provided value.
 *
 * @param {UserData} authUser
 * @emits AUTHENTICATED_USER_CHANGED
 */
export function setAuthenticatedUser(authUser) {
  service.setAuthenticatedUser(authUser);
  publish(AUTHENTICATED_USER_CHANGED);
}

/**
 * Reads the authenticated user's access token. Resolves to null if the user is
 * unauthenticated.
 *
 * @returns {Promise<UserData>|Promise<null>} Resolves to the user's access token if they are
 * logged in.
 */
export function fetchAuthenticatedUser() {
  return _fetchAuthenticatedUser.apply(this, arguments);
}

/**
 * Ensures a user is authenticated. It will redirect to login when not
 * authenticated.
 *
 * @param {string} [redirectUrl=config.BASE_URL] to return user after login when not
 * authenticated.
 * @returns {Promise<UserData>}
 */
function _fetchAuthenticatedUser() {
  _fetchAuthenticatedUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var options,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
          return _context.abrupt("return", service.fetchAuthenticatedUser(options));
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _fetchAuthenticatedUser.apply(this, arguments);
}
export function ensureAuthenticatedUser(_x) {
  return _ensureAuthenticatedUser.apply(this, arguments);
}

/**
 * Fetches additional user account information for the authenticated user and merges it into the
 * existing authenticatedUser object, available via getAuthenticatedUser().
 *
 * ```
 *  console.log(authenticatedUser); // Will be sparse and only contain basic information.
 *  await hydrateAuthenticatedUser()
 *  const authenticatedUser = getAuthenticatedUser();
 *  console.log(authenticatedUser); // Will contain additional user information
 * ```
 *
 * @emits AUTHENTICATED_USER_CHANGED
 */
function _ensureAuthenticatedUser() {
  _ensureAuthenticatedUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(redirectUrl) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", service.ensureAuthenticatedUser(redirectUrl));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _ensureAuthenticatedUser.apply(this, arguments);
}
export function hydrateAuthenticatedUser() {
  return _hydrateAuthenticatedUser.apply(this, arguments);
}

/**
 * @name AuthService
 * @interface
 * @memberof module:Auth
 * @property {function} getAuthenticatedHttpClient
 * @property {function} getHttpClient
 * @property {function} getLoginRedirectUrl
 * @property {function} redirectToLogin
 * @property {function} getLogoutRedirectUrl
 * @property {function} redirectToLogout
 * @property {function} getAuthenticatedUser
 * @property {function} setAuthenticatedUser
 * @property {function} fetchAuthenticatedUser
 * @property {function} ensureAuthenticatedUser
 * @property {function} hydrateAuthenticatedUser
 */

/**
 * A configured axios client. See axios docs for more
 * info https://github.com/axios/axios. All the functions
 * below accept isPublic and isCsrfExempt in the request
 * config options. Setting these to true will prevent this
 * client from attempting to refresh the jwt access token
 * or a csrf token respectively.
 *
 * ```
 *  // A public endpoint (no jwt token refresh)
 *  apiClient.get('/path/to/endpoint', { isPublic: true });
 * ```
 *
 * ```
 *  // A csrf exempt endpoint
 *  apiClient.post('/path/to/endpoint', { data }, { isCsrfExempt: true });
 * ```
 *
 * @name HttpClient
 * @interface
 * @memberof module:Auth
 * @property {function} get
 * @property {function} head
 * @property {function} options
 * @property {function} delete (csrf protected)
 * @property {function} post (csrf protected)
 * @property {function} put (csrf protected)
 * @property {function} patch (csrf protected)
 */

/**
 * @name UserData
 * @interface
 * @memberof module:Auth
 * @property {string} userId
 * @property {string} username
 * @property {Array} roles
 * @property {boolean} administrator
 */
function _hydrateAuthenticatedUser() {
  _hydrateAuthenticatedUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return service.hydrateAuthenticatedUser();
        case 2:
          publish(AUTHENTICATED_USER_CHANGED);
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _hydrateAuthenticatedUser.apply(this, arguments);
}
//# sourceMappingURL=interface.js.map