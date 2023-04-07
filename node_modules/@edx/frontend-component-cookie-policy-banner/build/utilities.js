import Cookie from 'universal-cookie';
import { DEFAULT_IETF_TAG, IETF_TAGS, STAGE_ENVIRONMENTS, LANGUAGE_CODE_TO_IETF_TAGS, LOCALHOST, COOKIE_POLICY_VIEWED_NAME } from './constants';

var firstMatchingStageEnvironment = function firstMatchingStageEnvironment() {
  var matches = Object.keys(STAGE_ENVIRONMENTS).filter(function (key) {
    return window.location.hostname.indexOf(STAGE_ENVIRONMENTS[key].baseURL) >= 0;
  });

  if (matches.length > 0) {
    return STAGE_ENVIRONMENTS[matches[0]];
  }

  return null;
}; // Setting path to '/' to be apply to all subdomains
// Setting maxAge to 2^31 -1
// because Number.SAFE_MAX_INTEGER does not get processed properly by the browser
// nor does the max Date defined in http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.1


var buildCookieCreationData = function buildCookieCreationData(_ref) {
  var prefix = _ref.prefix,
      domain = _ref.domain,
      _ref$cookieName = _ref.cookieName,
      cookieName = _ref$cookieName === void 0 ? null : _ref$cookieName;
  return {
    cookieName: "".concat(prefix, "-").concat(cookieName || COOKIE_POLICY_VIEWED_NAME),
    domain: domain,
    path: '/',
    maxAge: 2147483647
  };
};

var getCookieCreationData = function getCookieCreationData() {
  var cookieName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (window.location.hostname.indexOf(LOCALHOST) >= 0) {
    return buildCookieCreationData({
      prefix: LOCALHOST,
      domain: LOCALHOST,
      cookieName: cookieName
    });
  }

  var stageEnvironment = firstMatchingStageEnvironment();

  if (stageEnvironment) {
    return buildCookieCreationData({
      prefix: stageEnvironment.prefix,
      domain: ".".concat(stageEnvironment.baseURL),
      cookieName: cookieName
    });
  }

  if (window.location.hostname.indexOf('.edx.org') >= 0) {
    return buildCookieCreationData({
      prefix: 'prod',
      domain: '.edx.org',
      cookieName: cookieName
    });
  }

  return null;
};

var isProduction = function isProduction() {
  return !firstMatchingStageEnvironment() && window.location.hostname.indexOf(LOCALHOST) < 0 && window.location.hostname.indexOf('.edx.org') >= 0;
};

var getIETFTag = function getIETFTag() {
  var cookie = new Cookie('edx.org');
  var ietfTag = isProduction() ? cookie.get('prod-edx-language-preference') : cookie.get('stage-edx-language-preference');

  if (!ietfTag || IETF_TAGS.indexOf(ietfTag) <= -1) {
    return DEFAULT_IETF_TAG;
  }

  return ietfTag;
};

var getIETFTagFromLanguageCode = function getIETFTagFromLanguageCode(languageCode) {
  var ietfTag = LANGUAGE_CODE_TO_IETF_TAGS[languageCode];

  if (!ietfTag || IETF_TAGS.indexOf(ietfTag) <= -1) {
    return DEFAULT_IETF_TAG;
  }

  return ietfTag;
};

var createHasViewedCookieBanner = function createHasViewedCookieBanner() {
  var cookieName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var cookieCreationData = getCookieCreationData(cookieName);

  if (!!cookieCreationData && !!cookieCreationData.cookieName && !!cookieCreationData.domain && !!cookieCreationData.path && !!cookieCreationData.maxAge) {
    return new Cookie().set(cookieCreationData.cookieName, true, {
      domain: cookieCreationData.domain,
      path: cookieCreationData.path,
      maxAge: cookieCreationData.maxAge
    });
  }

  return false;
};

var hasViewedCookieBanner = function hasViewedCookieBanner() {
  var cookieName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var cookieCreationData = getCookieCreationData(cookieName);
  return !!cookieCreationData && !!new Cookie().get(cookieCreationData.cookieName);
};

export { getIETFTag, createHasViewedCookieBanner, hasViewedCookieBanner, firstMatchingStageEnvironment, getCookieCreationData, getIETFTagFromLanguageCode, isProduction };