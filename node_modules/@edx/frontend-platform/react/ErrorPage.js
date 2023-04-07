function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Row, Col } from '@edx/paragon';
import { useAppEvent } from './hooks';
import { FormattedMessage, IntlProvider, getMessages, getLocale, LOCALE_CHANGED } from '../i18n';

/**
 * An error page that displays a generic message for unexpected errors.  Also contains a "Try
 * Again" button to refresh the page.
 *
 * @memberof module:React
 * @extends {Component}
 */
function ErrorPage(_ref) {
  var message = _ref.message;
  var _useState = useState(getLocale()),
    _useState2 = _slicedToArray(_useState, 2),
    locale = _useState2[0],
    setLocale = _useState2[1];
  useAppEvent(LOCALE_CHANGED, function () {
    setLocale(getLocale());
  });

  /* istanbul ignore next */
  var reload = function reload() {
    global.location.reload();
  };
  return /*#__PURE__*/React.createElement(IntlProvider, {
    locale: locale,
    messages: getMessages()
  }, /*#__PURE__*/React.createElement(Container, {
    fluid: true,
    className: "py-5 justify-content-center align-items-start text-center"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement("p", {
    className: "text-muted"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "unexpected.error.message.text",
    defaultMessage: "An unexpected error occurred. Please click the button below to refresh the page.",
    description: "error message when an unexpected error occurs"
  })), message && /*#__PURE__*/React.createElement("div", {
    role: "alert",
    className: "my-4"
  }, /*#__PURE__*/React.createElement("p", null, message)), /*#__PURE__*/React.createElement(Button, {
    onClick: reload
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "unexpected.error.button.text",
    defaultMessage: "Try again",
    description: "text for button that tries to reload the app by refreshing the page"
  }))))));
}
ErrorPage.propTypes = {
  message: PropTypes.string
};
ErrorPage.defaultProps = {
  message: null
};
export default ErrorPage;
//# sourceMappingURL=ErrorPage.js.map