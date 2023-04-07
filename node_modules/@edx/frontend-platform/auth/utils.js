function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// Lifted from here: https://regexr.com/3ok5o
var urlRegex = /([a-z]{1,2}tps?):\/\/((?:(?!(?:\/|#|\?|&)).)+)(?:(\/(?:(?:(?:(?!(?:#|\?|&)).)+\/))?))?(?:((?:(?!(?:\.|$|\?|#)).)+))?(?:(\.(?:(?!(?:\?|$|#)).)+))?(?:(\?(?:(?!(?:$|#)).)+))?(?:(#.+))?/;
var getUrlParts = function getUrlParts(url) {
  var found = url.match(urlRegex);
  try {
    var _found = _slicedToArray(found, 8),
      fullUrl = _found[0],
      protocol = _found[1],
      domain = _found[2],
      path = _found[3],
      endFilename = _found[4],
      endFileExtension = _found[5],
      query = _found[6],
      hash = _found[7];
    return {
      fullUrl: fullUrl,
      protocol: protocol,
      domain: domain,
      path: path,
      endFilename: endFilename,
      endFileExtension: endFileExtension,
      query: query,
      hash: hash
    };
  } catch (e) {
    throw new Error("Could not find url parts from ".concat(url, "."));
  }
};
var logFrontendAuthError = function logFrontendAuthError(loggingService, error) {
  var prefixedMessageError = Object.create(error);
  prefixedMessageError.message = "[frontend-auth] ".concat(error.message);
  loggingService.logError(prefixedMessageError, prefixedMessageError.customAttributes);
};
var processAxiosError = function processAxiosError(axiosErrorObject) {
  var error = Object.create(axiosErrorObject);
  var request = error.request,
    response = error.response,
    config = error.config;
  if (!config) {
    error.customAttributes = _objectSpread(_objectSpread({}, error.customAttributes), {}, {
      httpErrorType: 'unknown-api-request-error'
    });
    return error;
  }
  var httpErrorRequestUrl = config.url,
    httpErrorRequestMethod = config.method;
  /* istanbul ignore else: difficult to enter the request-only error case in a unit test */
  if (response) {
    var status = response.status,
      data = response.data;
    var stringifiedData = JSON.stringify(data) || '(empty response)';
    var responseIsHTML = stringifiedData.includes('<!DOCTYPE html>');
    // Don't include data if it is just an HTML document, like a 500 error page.
    /* istanbul ignore next */
    var httpErrorResponseData = responseIsHTML ? '<Response is HTML>' : stringifiedData;
    error.customAttributes = _objectSpread(_objectSpread({}, error.customAttributes), {}, {
      httpErrorType: 'api-response-error',
      httpErrorStatus: status,
      httpErrorResponseData: httpErrorResponseData,
      httpErrorRequestUrl: httpErrorRequestUrl,
      httpErrorRequestMethod: httpErrorRequestMethod
    });
    error.message = "Axios Error (Response): ".concat(status, " ").concat(httpErrorRequestUrl, " ").concat(httpErrorResponseData);
  } else if (request) {
    error.customAttributes = _objectSpread(_objectSpread({}, error.customAttributes), {}, {
      httpErrorType: 'api-request-error',
      httpErrorMessage: error.message,
      httpErrorRequestUrl: httpErrorRequestUrl,
      httpErrorRequestMethod: httpErrorRequestMethod
    });
    // This case occurs most likely because of intermittent internet connection issues
    // but it also, though less often, catches CORS or server configuration problems.
    error.message = "Axios Error (Request): ".concat(error.message, " (possible local connectivity issue) ").concat(httpErrorRequestMethod, " ").concat(httpErrorRequestUrl);
  } else {
    error.customAttributes = _objectSpread(_objectSpread({}, error.customAttributes), {}, {
      httpErrorType: 'api-request-config-error',
      httpErrorMessage: error.message,
      httpErrorRequestUrl: httpErrorRequestUrl,
      httpErrorRequestMethod: httpErrorRequestMethod
    });
    error.message = "Axios Error (Config): ".concat(error.message, " ").concat(httpErrorRequestMethod, " ").concat(httpErrorRequestUrl);
  }
  return error;
};
var processAxiosErrorAndThrow = function processAxiosErrorAndThrow(axiosErrorObject) {
  throw processAxiosError(axiosErrorObject);
};
export { getUrlParts, logFrontendAuthError, processAxiosError, processAxiosErrorAndThrow };
//# sourceMappingURL=utils.js.map