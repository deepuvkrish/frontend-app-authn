function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _PropTypes$shape;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import { StatusAlert } from '@edx/paragon';
import PropTypes from 'prop-types';
import { ENGLISH_IETF_TAG, SPANISH_IETF_TAG, IETF_TAGS_TO_CLOSE_BUTTON_LABEL, IETF_TAGS_TO_CONTAINER_ROLE_LABEL, IETF_TAGS_TO_LANGUAGE_CODE, getPolicyHTML } from '../constants';
import { getIETFTag, getIETFTagFromLanguageCode, hasViewedCookieBanner, createHasViewedCookieBanner } from '../utilities';

var CookieBanner = /*#__PURE__*/function (_Component) {
  _inherits(CookieBanner, _Component);

  var _super = _createSuper(CookieBanner);

  function CookieBanner(props) {
    var _this;

    _classCallCheck(this, CookieBanner);

    _this = _super.call(this, props);
    _this.onClose = _this.onClose.bind(_assertThisInitialized(_this));
    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(CookieBanner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.toggleDisplay(!hasViewedCookieBanner(this.props.isViewedCookieName));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.open === true) {
        if (document.querySelectorAll('.edx-cookie-banner .btn') && document.querySelectorAll('.edx-cookie-banner .btn').length > 0) {
          document.querySelectorAll('.edx-cookie-banner .btn')[0].blur();
        }
      }
    }
  }, {
    key: "onClose",
    value: function onClose(event) {
      var _this2 = this;

      this.setState({
        open: false
      }, function () {
        createHasViewedCookieBanner(_this2.props.isViewedCookieName);

        _this2.props.onClose(event);
      });
    }
  }, {
    key: "toggleDisplay",
    value: function toggleDisplay(open) {
      this.setState({
        open: open
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          languageCode = _this$props.languageCode,
          policyText = _this$props.policyText;
      var open = this.state.open;
      var ietfTag = languageCode ? getIETFTagFromLanguageCode(languageCode) : getIETFTag();

      if (open) {
        return /*#__PURE__*/React.createElement("div", {
          lang: IETF_TAGS_TO_LANGUAGE_CODE[ietfTag],
          className: "edx-cookie-banner-wrapper",
          role: "complementary",
          "aria-label": IETF_TAGS_TO_CONTAINER_ROLE_LABEL[ietfTag],
          "aria-live": "polite"
        }, /*#__PURE__*/React.createElement(StatusAlert, {
          className: "edx-cookie-banner",
          open: this.state.open,
          closeButtonAriaLabel: IETF_TAGS_TO_CLOSE_BUTTON_LABEL[ietfTag],
          dialog: /*#__PURE__*/React.createElement("span", {
            dangerouslySetInnerHTML: {
              __html: getPolicyHTML(ietfTag, policyText)
            }
          }),
          onClose: this.onClose
        }));
      }

      return false;
    }
  }]);

  return CookieBanner;
}(Component);

CookieBanner.defaultProps = {
  onClose: function onClose() {},
  languageCode: undefined,
  policyText: {},
  isViewedCookieName: null
};
CookieBanner.propTypes = {
  onClose: PropTypes.func,
  languageCode: PropTypes.string,
  policyText: PropTypes.shape((_PropTypes$shape = {}, _defineProperty(_PropTypes$shape, ENGLISH_IETF_TAG, PropTypes.string), _defineProperty(_PropTypes$shape, SPANISH_IETF_TAG, PropTypes.string), _PropTypes$shape)),
  isViewedCookieName: PropTypes.string
};
export default CookieBanner;