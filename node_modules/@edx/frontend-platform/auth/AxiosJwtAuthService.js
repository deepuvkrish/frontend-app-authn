function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import axios from 'axios';
import PropTypes from 'prop-types';
import { logFrontendAuthError } from './utils';
import { camelCaseObject, ensureDefinedConfig } from '../utils';
import createJwtTokenProviderInterceptor from './interceptors/createJwtTokenProviderInterceptor';
import createCsrfTokenProviderInterceptor from './interceptors/createCsrfTokenProviderInterceptor';
import createProcessAxiosRequestErrorInterceptor from './interceptors/createProcessAxiosRequestErrorInterceptor';
import AxiosJwtTokenService from './AxiosJwtTokenService';
import AxiosCsrfTokenService from './AxiosCsrfTokenService';
import configureCache from './LocalForageCache';
var optionsPropTypes = {
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

/**
 * @implements {AuthService}
 * @memberof module:Auth
 */
var AxiosJwtAuthService = /*#__PURE__*/function () {
  /**
   * @param {Object} options
   * @param {Object} options.config
   * @param {string} options.config.BASE_URL
   * @param {string} options.config.LMS_BASE_URL
   * @param {string} options.config.LOGIN_URL
   * @param {string} options.config.LOGOUT_URL
   * @param {string} options.config.REFRESH_ACCESS_TOKEN_ENDPOINT
   * @param {string} options.config.ACCESS_TOKEN_COOKIE_NAME
   * @param {string} options.config.CSRF_TOKEN_API_PATH
   * @param {Object} options.loggingService requires logError and logInfo methods
   */
  function AxiosJwtAuthService(options) {
    var _this = this;
    _classCallCheck(this, AxiosJwtAuthService);
    this.authenticatedHttpClient = null;
    this.httpClient = null;
    this.cachedAuthenticatedHttpClient = null;
    this.cachedHttpClient = null;
    this.authenticatedUser = null;
    ensureDefinedConfig(options, 'AuthService');
    PropTypes.checkPropTypes(optionsPropTypes, options, 'options', 'AuthService');
    this.config = options.config;
    this.loggingService = options.loggingService;
    this.jwtTokenService = new AxiosJwtTokenService(this.loggingService, this.config.ACCESS_TOKEN_COOKIE_NAME, this.config.REFRESH_ACCESS_TOKEN_ENDPOINT);
    this.csrfTokenService = new AxiosCsrfTokenService(this.config.CSRF_TOKEN_API_PATH);
    this.authenticatedHttpClient = this.addAuthenticationToHttpClient(axios.create());
    this.httpClient = axios.create();
    configureCache().then(function (cachedAxiosClient) {
      _this.cachedAuthenticatedHttpClient = _this.addAuthenticationToHttpClient(cachedAxiosClient);
      _this.cachedHttpClient = cachedAxiosClient;
    })["catch"](function (e) {
      // fallback to non-cached HTTP clients and log error
      _this.cachedAuthenticatedHttpClient = _this.authenticatedHttpClient;
      _this.cachedHttpClient = _this.httpClient;
      logFrontendAuthError(_this.loggingService, "configureCache failed with error: ".concat(e.message));
    })["finally"](function () {
      _this.middleware = options.middleware;
      _this.applyMiddleware(options.middleware);
    });
  }

  /**
   * Applies middleware to the axios instances in this service.
   *
   * @param {Array} middleware Middleware to apply.
   */
  _createClass(AxiosJwtAuthService, [{
    key: "applyMiddleware",
    value: function applyMiddleware() {
      var middleware = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var clients = [this.authenticatedHttpClient, this.httpClient, this.cachedAuthenticatedHttpClient, this.cachedHttpClient];
      try {
        middleware.forEach(function (middlewareFn) {
          clients.forEach(function (client) {
            return client && middlewareFn(client);
          });
        });
      } catch (error) {
        logFrontendAuthError(this.loggingService, error);
        throw error;
      }
    }

    /**
     * Gets the authenticated HTTP client for the service.  This is an axios instance.
     *
     * @param {Object} [options] Optional options for how the HTTP client should be configured.
     * @param {boolean} [options.useCache] Whether to use front end caching for all requests made
     * with the returned client.
     *
     * @returns {HttpClient} A configured axios http client which can be used for authenticated
     * requests.
     */
  }, {
    key: "getAuthenticatedHttpClient",
    value: function getAuthenticatedHttpClient() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (options.useCache) {
        return this.cachedAuthenticatedHttpClient;
      }
      return this.authenticatedHttpClient;
    }

    /**
     * Gets the unauthenticated HTTP client for the service.  This is an axios instance.
     *
     * @param {Object} [options] Optional options for how the HTTP client should be configured.
     * @param {boolean} [options.useCache] Whether to use front end caching for all requests made
     * with the returned client.
     * @returns {HttpClient} A configured axios http client.
     */
  }, {
    key: "getHttpClient",
    value: function getHttpClient() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (options.useCache) {
        return this.cachedHttpClient;
      }
      return this.httpClient;
    }

    /**
     * Used primarily for testing.
     *
     * @ignore
     */
  }, {
    key: "getJwtTokenService",
    value: function getJwtTokenService() {
      return this.jwtTokenService;
    }

    /**
     * Used primarily for testing.
     *
     * @ignore
     */
  }, {
    key: "getCsrfTokenService",
    value: function getCsrfTokenService() {
      return this.csrfTokenService;
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
  }, {
    key: "getLoginRedirectUrl",
    value: function getLoginRedirectUrl() {
      var redirectUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.config.BASE_URL;
      return "".concat(this.config.LOGIN_URL, "?next=").concat(encodeURIComponent(redirectUrl));
    }

    /**
     * Redirects the user to the login page.
     *
     * @param {string} redirectUrl The URL the user should be redirected to after logging in.
     */
  }, {
    key: "redirectToLogin",
    value: function redirectToLogin() {
      var redirectUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.config.BASE_URL;
      global.location.assign(this.getLoginRedirectUrl(redirectUrl));
    }

    /**
     * Builds a URL to the logout page with a post-logout redirect URL attached as a query parameter.
     *
     * ```
     * const url = getLogoutRedirectUrl('http://localhost/mypage');
     * console.log(url); // http://localhost/logout?next=http%3A%2F%2Flocalhost%2Fmypage
     * ```
     *
     * @param {string} redirectUrl The URL the user should be redirected to after logging out.
     */
  }, {
    key: "getLogoutRedirectUrl",
    value: function getLogoutRedirectUrl() {
      var redirectUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.config.BASE_URL;
      return "".concat(this.config.LOGOUT_URL, "?redirect_url=").concat(encodeURIComponent(redirectUrl));
    }

    /**
     * Redirects the user to the logout page.
     *
     * @param {string} redirectUrl The URL the user should be redirected to after logging out.
     */
  }, {
    key: "redirectToLogout",
    value: function redirectToLogout() {
      var redirectUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.config.BASE_URL;
      global.location.assign(this.getLogoutRedirectUrl(redirectUrl));
    }

    /**
     * If it exists, returns the user data representing the currently authenticated user. If the
     * user is anonymous, returns null.
     *
     * @returns {UserData|null}
     */
  }, {
    key: "getAuthenticatedUser",
    value: function getAuthenticatedUser() {
      return this.authenticatedUser;
    }

    /**
     * Sets the authenticated user to the provided value.
     *
     * @param {UserData} authUser
     */
  }, {
    key: "setAuthenticatedUser",
    value: function setAuthenticatedUser(authUser) {
      this.authenticatedUser = authUser;
    }

    /**
     * Reads the authenticated user's access token. Resolves to null if the user is
     * unauthenticated.
     *
     * @returns {Promise<UserData>|Promise<null>} Resolves to the user's access token if they are
     * logged in.
     */
  }, {
    key: "fetchAuthenticatedUser",
    value: function () {
      var _fetchAuthenticatedUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var options,
          decodedAccessToken,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              _context.next = 3;
              return this.jwtTokenService.getJwtToken(options.forceRefresh || false);
            case 3:
              decodedAccessToken = _context.sent;
              if (decodedAccessToken !== null) {
                this.setAuthenticatedUser({
                  email: decodedAccessToken.email,
                  userId: decodedAccessToken.user_id,
                  username: decodedAccessToken.preferred_username,
                  roles: decodedAccessToken.roles || [],
                  administrator: decodedAccessToken.administrator,
                  name: decodedAccessToken.name
                });
              } else {
                this.setAuthenticatedUser(null);
              }
              return _context.abrupt("return", this.getAuthenticatedUser());
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function fetchAuthenticatedUser() {
        return _fetchAuthenticatedUser.apply(this, arguments);
      }
      return fetchAuthenticatedUser;
    }()
    /**
     * Ensures a user is authenticated. It will redirect to login when not
     * authenticated.
     *
     * @param {string} [redirectUrl=config.BASE_URL] to return user after login when not
     * authenticated.
     * @returns {Promise<UserData>}
     */
  }, {
    key: "ensureAuthenticatedUser",
    value: function () {
      var _ensureAuthenticatedUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var redirectUrl,
          isRedirectFromLoginPage,
          redirectLoopError,
          unauthorizedError,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              redirectUrl = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : this.config.BASE_URL;
              _context2.next = 3;
              return this.fetchAuthenticatedUser();
            case 3:
              if (!(this.getAuthenticatedUser() === null)) {
                _context2.next = 13;
                break;
              }
              isRedirectFromLoginPage = global.document.referrer && global.document.referrer.startsWith(this.config.LOGIN_URL);
              if (!isRedirectFromLoginPage) {
                _context2.next = 9;
                break;
              }
              redirectLoopError = new Error('Redirect from login page. Rejecting to avoid infinite redirect loop.');
              logFrontendAuthError(this.loggingService, redirectLoopError);
              throw redirectLoopError;
            case 9:
              // The user is not authenticated, send them to the login page.
              this.redirectToLogin(redirectUrl);
              unauthorizedError = new Error('Failed to ensure the user is authenticated');
              unauthorizedError.isRedirecting = true;
              throw unauthorizedError;
            case 13:
              return _context2.abrupt("return", this.getAuthenticatedUser());
            case 14:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function ensureAuthenticatedUser() {
        return _ensureAuthenticatedUser.apply(this, arguments);
      }
      return ensureAuthenticatedUser;
    }()
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
     * @returns {Promise<null>}
     */
  }, {
    key: "hydrateAuthenticatedUser",
    value: function () {
      var _hydrateAuthenticatedUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var user, response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              user = this.getAuthenticatedUser();
              if (!(user !== null)) {
                _context3.next = 6;
                break;
              }
              _context3.next = 4;
              return this.authenticatedHttpClient.get("".concat(this.config.LMS_BASE_URL, "/api/user/v1/accounts/").concat(user.username));
            case 4:
              response = _context3.sent;
              this.setAuthenticatedUser(_objectSpread(_objectSpread({}, user), camelCaseObject(response.data)));
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function hydrateAuthenticatedUser() {
        return _hydrateAuthenticatedUser.apply(this, arguments);
      }
      return hydrateAuthenticatedUser;
    }()
    /**
    * Adds authentication defaults and interceptors to an HTTP client instance.
    *
    * @param {HttpClient} newHttpClient
    * @param {Object} config
    * @param {string} [config.REFRESH_ACCESS_TOKEN_ENDPOINT]
    * @param {string} [config.ACCESS_TOKEN_COOKIE_NAME]
    * @param {string} [config.CSRF_TOKEN_API_PATH]
    * @returns {HttpClient} A configured Axios HTTP client.
    */
  }, {
    key: "addAuthenticationToHttpClient",
    value: function addAuthenticationToHttpClient(newHttpClient) {
      var httpClient = Object.create(newHttpClient);
      // Set withCredentials to true. Enables cross-site Access-Control requests
      // to be made using cookies, authorization headers or TLS client
      // certificates. More on MDN:
      // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials
      httpClient.defaults.withCredentials = true;

      // Axios interceptors

      // The JWT access token interceptor attempts to refresh the user's jwt token
      // before any request unless the isPublic flag is set on the request config.
      var refreshAccessTokenInterceptor = createJwtTokenProviderInterceptor({
        jwtTokenService: this.jwtTokenService,
        shouldSkip: function shouldSkip(axiosRequestConfig) {
          return axiosRequestConfig.isPublic;
        }
      });
      // The CSRF token intercepter fetches and caches a csrf token for any post,
      // put, patch, or delete request. That token is then added to the request
      // headers.
      var attachCsrfTokenInterceptor = createCsrfTokenProviderInterceptor({
        csrfTokenService: this.csrfTokenService,
        CSRF_TOKEN_API_PATH: this.config.CSRF_TOKEN_API_PATH,
        shouldSkip: function shouldSkip(axiosRequestConfig) {
          var method = axiosRequestConfig.method,
            isCsrfExempt = axiosRequestConfig.isCsrfExempt;
          var CSRF_PROTECTED_METHODS = ['post', 'put', 'patch', 'delete'];
          return isCsrfExempt || !CSRF_PROTECTED_METHODS.includes(method);
        }
      });
      var processAxiosRequestErrorInterceptor = createProcessAxiosRequestErrorInterceptor({
        loggingService: this.loggingService
      });

      // Request interceptors: Axios runs the interceptors in reverse order from
      // how they are listed. After fetching csrf tokens no longer require jwt
      // authentication, it won't matter which happens first. This change is
      // coming soon in edx-platform. Nov. 2019
      httpClient.interceptors.request.use(attachCsrfTokenInterceptor);
      httpClient.interceptors.request.use(refreshAccessTokenInterceptor);

      // Response interceptor: moves axios response error data into the error
      // object at error.customAttributes
      httpClient.interceptors.response.use(function (response) {
        return response;
      }, processAxiosRequestErrorInterceptor);
      return httpClient;
    }
  }]);
  return AxiosJwtAuthService;
}();
export default AxiosJwtAuthService;
//# sourceMappingURL=AxiosJwtAuthService.js.map