function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The MockAnalyticsService implements all functions of AnalyticsService as Jest mocks (jest.fn())).
 * It emulates the behavior of a real analytics service but witohut making any requests. It has no
 * other functionality.
 *
 * @implements {AnalyticsService}
 * @memberof module:Analytics
 */
var MockAnalyticsService = /*#__PURE__*/_createClass(function MockAnalyticsService(_ref) {
  var _this = this;
  var httpClient = _ref.httpClient,
    loggingService = _ref.loggingService;
  _classCallCheck(this, MockAnalyticsService);
  _defineProperty(this, "checkIdentifyCalled", jest.fn(function () {
    if (!_this.hasIdentifyBeenCalled) {
      _this.loggingService.logError('Identify must be called before other tracking events.');
    }
  }));
  _defineProperty(this, "sendTrackingLogEvent", jest.fn(function () {
    return Promise.resolve();
  }));
  _defineProperty(this, "identifyAuthenticatedUser", jest.fn(function (userId) {
    if (!userId) {
      throw new Error('UserId is required for identifyAuthenticatedUser.');
    }
    _this.hasIdentifyBeenCalled = true;
  }));
  _defineProperty(this, "identifyAnonymousUser", jest.fn(function () {
    _this.hasIdentifyBeenCalled = true;
    return Promise.resolve();
  }));
  _defineProperty(this, "sendTrackEvent", jest.fn(function () {
    _this.checkIdentifyCalled();
  }));
  _defineProperty(this, "sendPageEvent", jest.fn(function () {
    _this.checkIdentifyCalled();
  }));
  this.loggingService = loggingService;
  this.httpClient = httpClient;
});
_defineProperty(MockAnalyticsService, "hasIdentifyBeenCalled", false);
export default MockAnalyticsService;
//# sourceMappingURL=MockAnalyticsService.js.map