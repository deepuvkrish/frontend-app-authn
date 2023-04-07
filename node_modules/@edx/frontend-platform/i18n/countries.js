function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/* eslint-disable import/extensions */
import COUNTRIES, { langs as countryLangs } from 'i18n-iso-countries';
import { getPrimaryLanguageSubtag } from './lib';

/*
 * COUNTRY LISTS
 *
 * Lists of country names localized in supported languages.
 *
 * TODO: When we start dynamically loading translations only for the current locale, change this.
 */

COUNTRIES.registerLocale(require('i18n-iso-countries/langs/ar.json'));
COUNTRIES.registerLocale(require('i18n-iso-countries/langs/en.json'));
COUNTRIES.registerLocale(require('i18n-iso-countries/langs/es.json'));
COUNTRIES.registerLocale(require('i18n-iso-countries/langs/fr.json'));
COUNTRIES.registerLocale(require('i18n-iso-countries/langs/zh.json'));
COUNTRIES.registerLocale(require('i18n-iso-countries/langs/ca.json'));
COUNTRIES.registerLocale(require('i18n-iso-countries/langs/he.json'));
COUNTRIES.registerLocale(require('i18n-iso-countries/langs/id.json'));
COUNTRIES.registerLocale(require('i18n-iso-countries/langs/ko.json'));
COUNTRIES.registerLocale(require('i18n-iso-countries/langs/pl.json'));
COUNTRIES.registerLocale(require('i18n-iso-countries/langs/pt.json'));
COUNTRIES.registerLocale(require('i18n-iso-countries/langs/ru.json'));
// COUNTRIES.registerLocale(require('i18n-iso-countries/langs/th.json')); // Doesn't exist in lib.
COUNTRIES.registerLocale(require('i18n-iso-countries/langs/uk.json'));

/**
 * Provides a lookup table of country IDs to country names for the current locale.
 *
 * @memberof module:I18n
 */
export function getCountryMessages(locale) {
  var primaryLanguageSubtag = getPrimaryLanguageSubtag(locale);
  var languageCode = countryLangs().includes(primaryLanguageSubtag) ? primaryLanguageSubtag : 'en';
  return COUNTRIES.getNames(languageCode);
}

/**
 * Provides a list of countries represented as objects of the following shape:
 *
 * {
 *   key, // The ID of the country
 *   name // The localized name of the country
 * }
 *
 * TODO: ARCH-878: The list should be sorted alphabetically in the current locale.
 * This is useful for populating dropdowns.
 *
 * @memberof module:I18n
 */
export function getCountryList(locale) {
  var countryMessages = getCountryMessages(locale);
  return Object.entries(countryMessages).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      code = _ref2[0],
      name = _ref2[1];
    return {
      code: code,
      name: name
    };
  });
}
//# sourceMappingURL=countries.js.map