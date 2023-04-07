function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';
import OptionalReduxProvider from './OptionalReduxProvider';
import ErrorBoundary from './ErrorBoundary';
import AppContext from './AppContext';
import { useAppEvent, useTrackColorSchemeChoice } from './hooks';
import { getAuthenticatedUser, AUTHENTICATED_USER_CHANGED } from '../auth';
import { getConfig } from '../config';
import { CONFIG_CHANGED } from '../constants';
import { history } from '../initialize';
import { getLocale, getMessages, IntlProvider, LOCALE_CHANGED } from '../i18n';

/**
 * A wrapper component for React-based micro-frontends to initialize a number of common data/
 * context providers.
 *
 * ```
 * subscribe(APP_READY, () => {
 *   ReactDOM.render(
 *     <AppProvider>
 *       <HelloWorld />
 *     </AppProvider>
 *   )
 * });
 * ```
 *
 * This will provide the following to HelloWorld:
 * - An error boundary as described above.
 * - An `AppContext` provider for React context data.
 * - IntlProvider for @edx/frontend-i18n internationalization
 * - Optionally a redux `Provider`. Will only be included if a `store` property is passed to
 * `AppProvider`.
 * - A `Router` for react-router.
 *
 * @param {Object} props
 * @param {Object} [props.store] A redux store.
 * @memberof module:React
 */
export default function AppProvider(_ref) {
  var store = _ref.store,
    children = _ref.children;
  var _useState = useState(getConfig()),
    _useState2 = _slicedToArray(_useState, 2),
    config = _useState2[0],
    setConfig = _useState2[1];
  var _useState3 = useState(getAuthenticatedUser()),
    _useState4 = _slicedToArray(_useState3, 2),
    authenticatedUser = _useState4[0],
    setAuthenticatedUser = _useState4[1];
  var _useState5 = useState(getLocale()),
    _useState6 = _slicedToArray(_useState5, 2),
    locale = _useState6[0],
    setLocale = _useState6[1];
  useTrackColorSchemeChoice();
  useAppEvent(AUTHENTICATED_USER_CHANGED, function () {
    setAuthenticatedUser(getAuthenticatedUser());
  });
  useAppEvent(CONFIG_CHANGED, function () {
    setConfig(getConfig());
  });
  useAppEvent(LOCALE_CHANGED, function () {
    setLocale(getLocale());
  });
  var appContextValue = useMemo(function () {
    return {
      authenticatedUser: authenticatedUser,
      config: config,
      locale: locale
    };
  }, [authenticatedUser, config, locale]);
  return /*#__PURE__*/React.createElement(IntlProvider, {
    locale: locale,
    messages: getMessages()
  }, /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement(AppContext.Provider, {
    value: appContextValue
  }, /*#__PURE__*/React.createElement(OptionalReduxProvider, {
    store: store
  }, /*#__PURE__*/React.createElement(Router, {
    history: history
  }, children)))));
}
AppProvider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object,
  children: PropTypes.node.isRequired
};
AppProvider.defaultProps = {
  store: null
};
//# sourceMappingURL=AppProvider.js.map