import {
  Fragment,
  Transition,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createStaticVNode,
  createTextVNode,
  createVNode,
  defineComponent,
  inject,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onMounted,
  onUnmounted,
  openBlock,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  watch,
  watchEffect,
  withCtx
} from "./chunk-CFLVYSMK.js";
import {
  __commonJS,
  __export,
  __toESM
} from "./chunk-G3PMV62Z.js";

// browser-external:path
var require_path = __commonJS({
  "browser-external:path"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_2, key2) {
        if (key2 !== "__esModule" && key2 !== "__proto__" && key2 !== "constructor" && key2 !== "splice") {
          console.warn(`Module "path" has been externalized for browser compatibility. Cannot access "path.${key2}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:fs
var require_fs = __commonJS({
  "browser-external:fs"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_2, key2) {
        if (key2 !== "__esModule" && key2 !== "__proto__" && key2 !== "constructor" && key2 !== "splice") {
          console.warn(`Module "fs" has been externalized for browser compatibility. Cannot access "fs.${key2}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/@shikijs/types/dist/index.mjs
var ShikiError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "ShikiError";
  }
};

// node_modules/@shikijs/vscode-textmate/dist/index.js
function clone(something) {
  return doClone(something);
}
function doClone(something) {
  if (Array.isArray(something)) {
    return cloneArray(something);
  }
  if (something instanceof RegExp) {
    return something;
  }
  if (typeof something === "object") {
    return cloneObj(something);
  }
  return something;
}
function cloneArray(arr) {
  let r4 = [];
  for (let i2 = 0, len = arr.length; i2 < len; i2++) {
    r4[i2] = doClone(arr[i2]);
  }
  return r4;
}
function cloneObj(obj) {
  let r4 = {};
  for (let key2 in obj) {
    r4[key2] = doClone(obj[key2]);
  }
  return r4;
}
function mergeObjects(target, ...sources) {
  sources.forEach((source) => {
    for (let key2 in source) {
      target[key2] = source[key2];
    }
  });
  return target;
}
function basename(path) {
  const idx = ~path.lastIndexOf("/") || ~path.lastIndexOf("\\");
  if (idx === 0) {
    return path;
  } else if (~idx === path.length - 1) {
    return basename(path.substring(0, path.length - 1));
  } else {
    return path.substr(~idx + 1);
  }
}
var CAPTURING_REGEX_SOURCE = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g;
var RegexSource = class {
  static hasCaptures(regexSource) {
    if (regexSource === null) {
      return false;
    }
    CAPTURING_REGEX_SOURCE.lastIndex = 0;
    return CAPTURING_REGEX_SOURCE.test(regexSource);
  }
  static replaceCaptures(regexSource, captureSource, captureIndices) {
    return regexSource.replace(CAPTURING_REGEX_SOURCE, (match, index, commandIndex, command) => {
      let capture = captureIndices[parseInt(index || commandIndex, 10)];
      if (capture) {
        let result = captureSource.substring(capture.start, capture.end);
        while (result[0] === ".") {
          result = result.substring(1);
        }
        switch (command) {
          case "downcase":
            return result.toLowerCase();
          case "upcase":
            return result.toUpperCase();
          default:
            return result;
        }
      } else {
        return match;
      }
    });
  }
};
function strcmp(a2, b3) {
  if (a2 < b3) {
    return -1;
  }
  if (a2 > b3) {
    return 1;
  }
  return 0;
}
function strArrCmp(a2, b3) {
  if (a2 === null && b3 === null) {
    return 0;
  }
  if (!a2) {
    return -1;
  }
  if (!b3) {
    return 1;
  }
  let len1 = a2.length;
  let len2 = b3.length;
  if (len1 === len2) {
    for (let i2 = 0; i2 < len1; i2++) {
      let res = strcmp(a2[i2], b3[i2]);
      if (res !== 0) {
        return res;
      }
    }
    return 0;
  }
  return len1 - len2;
}
function isValidHexColor(hex) {
  if (/^#[0-9a-f]{6}$/i.test(hex)) {
    return true;
  }
  if (/^#[0-9a-f]{8}$/i.test(hex)) {
    return true;
  }
  if (/^#[0-9a-f]{3}$/i.test(hex)) {
    return true;
  }
  if (/^#[0-9a-f]{4}$/i.test(hex)) {
    return true;
  }
  return false;
}
function escapeRegExpCharacters(value) {
  return value.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&");
}
var CachedFn = class {
  constructor(fn2) {
    this.fn = fn2;
  }
  cache = /* @__PURE__ */ new Map();
  get(key2) {
    if (this.cache.has(key2)) {
      return this.cache.get(key2);
    }
    const value = this.fn(key2);
    this.cache.set(key2, value);
    return value;
  }
};
var Theme = class {
  constructor(_colorMap, _defaults, _root) {
    this._colorMap = _colorMap;
    this._defaults = _defaults;
    this._root = _root;
  }
  static createFromRawTheme(source, colorMap) {
    return this.createFromParsedTheme(parseTheme(source), colorMap);
  }
  static createFromParsedTheme(source, colorMap) {
    return resolveParsedThemeRules(source, colorMap);
  }
  _cachedMatchRoot = new CachedFn(
    (scopeName) => this._root.match(scopeName)
  );
  getColorMap() {
    return this._colorMap.getColorMap();
  }
  getDefaults() {
    return this._defaults;
  }
  match(scopePath) {
    if (scopePath === null) {
      return this._defaults;
    }
    const scopeName = scopePath.scopeName;
    const matchingTrieElements = this._cachedMatchRoot.get(scopeName);
    const effectiveRule = matchingTrieElements.find(
      (v) => _scopePathMatchesParentScopes(scopePath.parent, v.parentScopes)
    );
    if (!effectiveRule) {
      return null;
    }
    return new StyleAttributes(
      effectiveRule.fontStyle,
      effectiveRule.foreground,
      effectiveRule.background
    );
  }
};
var ScopeStack = class _ScopeStack {
  constructor(parent, scopeName) {
    this.parent = parent;
    this.scopeName = scopeName;
  }
  static push(path, scopeNames) {
    for (const name of scopeNames) {
      path = new _ScopeStack(path, name);
    }
    return path;
  }
  static from(...segments) {
    let result = null;
    for (let i2 = 0; i2 < segments.length; i2++) {
      result = new _ScopeStack(result, segments[i2]);
    }
    return result;
  }
  push(scopeName) {
    return new _ScopeStack(this, scopeName);
  }
  getSegments() {
    let item = this;
    const result = [];
    while (item) {
      result.push(item.scopeName);
      item = item.parent;
    }
    result.reverse();
    return result;
  }
  toString() {
    return this.getSegments().join(" ");
  }
  extends(other) {
    if (this === other) {
      return true;
    }
    if (this.parent === null) {
      return false;
    }
    return this.parent.extends(other);
  }
  getExtensionIfDefined(base) {
    const result = [];
    let item = this;
    while (item && item !== base) {
      result.push(item.scopeName);
      item = item.parent;
    }
    return item === base ? result.reverse() : void 0;
  }
};
function _scopePathMatchesParentScopes(scopePath, parentScopes) {
  if (parentScopes.length === 0) {
    return true;
  }
  for (let index = 0; index < parentScopes.length; index++) {
    let scopePattern = parentScopes[index];
    let scopeMustMatch = false;
    if (scopePattern === ">") {
      if (index === parentScopes.length - 1) {
        return false;
      }
      scopePattern = parentScopes[++index];
      scopeMustMatch = true;
    }
    while (scopePath) {
      if (_matchesScope(scopePath.scopeName, scopePattern)) {
        break;
      }
      if (scopeMustMatch) {
        return false;
      }
      scopePath = scopePath.parent;
    }
    if (!scopePath) {
      return false;
    }
    scopePath = scopePath.parent;
  }
  return true;
}
function _matchesScope(scopeName, scopePattern) {
  return scopePattern === scopeName || scopeName.startsWith(scopePattern) && scopeName[scopePattern.length] === ".";
}
var StyleAttributes = class {
  constructor(fontStyle, foregroundId, backgroundId) {
    this.fontStyle = fontStyle;
    this.foregroundId = foregroundId;
    this.backgroundId = backgroundId;
  }
};
function parseTheme(source) {
  if (!source) {
    return [];
  }
  if (!source.settings || !Array.isArray(source.settings)) {
    return [];
  }
  let settings = source.settings;
  let result = [], resultLen = 0;
  for (let i2 = 0, len = settings.length; i2 < len; i2++) {
    let entry = settings[i2];
    if (!entry.settings) {
      continue;
    }
    let scopes;
    if (typeof entry.scope === "string") {
      let _scope = entry.scope;
      _scope = _scope.replace(/^[,]+/, "");
      _scope = _scope.replace(/[,]+$/, "");
      scopes = _scope.split(",");
    } else if (Array.isArray(entry.scope)) {
      scopes = entry.scope;
    } else {
      scopes = [""];
    }
    let fontStyle = -1;
    if (typeof entry.settings.fontStyle === "string") {
      fontStyle = 0;
      let segments = entry.settings.fontStyle.split(" ");
      for (let j = 0, lenJ = segments.length; j < lenJ; j++) {
        let segment = segments[j];
        switch (segment) {
          case "italic":
            fontStyle = fontStyle | 1;
            break;
          case "bold":
            fontStyle = fontStyle | 2;
            break;
          case "underline":
            fontStyle = fontStyle | 4;
            break;
          case "strikethrough":
            fontStyle = fontStyle | 8;
            break;
        }
      }
    }
    let foreground = null;
    if (typeof entry.settings.foreground === "string" && isValidHexColor(entry.settings.foreground)) {
      foreground = entry.settings.foreground;
    }
    let background = null;
    if (typeof entry.settings.background === "string" && isValidHexColor(entry.settings.background)) {
      background = entry.settings.background;
    }
    for (let j = 0, lenJ = scopes.length; j < lenJ; j++) {
      let _scope = scopes[j].trim();
      let segments = _scope.split(" ");
      let scope = segments[segments.length - 1];
      let parentScopes = null;
      if (segments.length > 1) {
        parentScopes = segments.slice(0, segments.length - 1);
        parentScopes.reverse();
      }
      result[resultLen++] = new ParsedThemeRule(
        scope,
        parentScopes,
        i2,
        fontStyle,
        foreground,
        background
      );
    }
  }
  return result;
}
var ParsedThemeRule = class {
  constructor(scope, parentScopes, index, fontStyle, foreground, background) {
    this.scope = scope;
    this.parentScopes = parentScopes;
    this.index = index;
    this.fontStyle = fontStyle;
    this.foreground = foreground;
    this.background = background;
  }
};
var FontStyle = ((FontStyle2) => {
  FontStyle2[FontStyle2["NotSet"] = -1] = "NotSet";
  FontStyle2[FontStyle2["None"] = 0] = "None";
  FontStyle2[FontStyle2["Italic"] = 1] = "Italic";
  FontStyle2[FontStyle2["Bold"] = 2] = "Bold";
  FontStyle2[FontStyle2["Underline"] = 4] = "Underline";
  FontStyle2[FontStyle2["Strikethrough"] = 8] = "Strikethrough";
  return FontStyle2;
})(FontStyle || {});
function resolveParsedThemeRules(parsedThemeRules, _colorMap) {
  parsedThemeRules.sort((a2, b3) => {
    let r4 = strcmp(a2.scope, b3.scope);
    if (r4 !== 0) {
      return r4;
    }
    r4 = strArrCmp(a2.parentScopes, b3.parentScopes);
    if (r4 !== 0) {
      return r4;
    }
    return a2.index - b3.index;
  });
  let defaultFontStyle = 0;
  let defaultForeground = "#000000";
  let defaultBackground = "#ffffff";
  while (parsedThemeRules.length >= 1 && parsedThemeRules[0].scope === "") {
    let incomingDefaults = parsedThemeRules.shift();
    if (incomingDefaults.fontStyle !== -1) {
      defaultFontStyle = incomingDefaults.fontStyle;
    }
    if (incomingDefaults.foreground !== null) {
      defaultForeground = incomingDefaults.foreground;
    }
    if (incomingDefaults.background !== null) {
      defaultBackground = incomingDefaults.background;
    }
  }
  let colorMap = new ColorMap(_colorMap);
  let defaults = new StyleAttributes(defaultFontStyle, colorMap.getId(defaultForeground), colorMap.getId(defaultBackground));
  let root2 = new ThemeTrieElement(new ThemeTrieElementRule(0, null, -1, 0, 0), []);
  for (let i2 = 0, len = parsedThemeRules.length; i2 < len; i2++) {
    let rule = parsedThemeRules[i2];
    root2.insert(0, rule.scope, rule.parentScopes, rule.fontStyle, colorMap.getId(rule.foreground), colorMap.getId(rule.background));
  }
  return new Theme(colorMap, defaults, root2);
}
var ColorMap = class {
  _isFrozen;
  _lastColorId;
  _id2color;
  _color2id;
  constructor(_colorMap) {
    this._lastColorId = 0;
    this._id2color = [];
    this._color2id = /* @__PURE__ */ Object.create(null);
    if (Array.isArray(_colorMap)) {
      this._isFrozen = true;
      for (let i2 = 0, len = _colorMap.length; i2 < len; i2++) {
        this._color2id[_colorMap[i2]] = i2;
        this._id2color[i2] = _colorMap[i2];
      }
    } else {
      this._isFrozen = false;
    }
  }
  getId(color) {
    if (color === null) {
      return 0;
    }
    color = color.toUpperCase();
    let value = this._color2id[color];
    if (value) {
      return value;
    }
    if (this._isFrozen) {
      throw new Error(`Missing color in color map - ${color}`);
    }
    value = ++this._lastColorId;
    this._color2id[color] = value;
    this._id2color[value] = color;
    return value;
  }
  getColorMap() {
    return this._id2color.slice(0);
  }
};
var emptyParentScopes = Object.freeze([]);
var ThemeTrieElementRule = class _ThemeTrieElementRule {
  scopeDepth;
  parentScopes;
  fontStyle;
  foreground;
  background;
  constructor(scopeDepth, parentScopes, fontStyle, foreground, background) {
    this.scopeDepth = scopeDepth;
    this.parentScopes = parentScopes || emptyParentScopes;
    this.fontStyle = fontStyle;
    this.foreground = foreground;
    this.background = background;
  }
  clone() {
    return new _ThemeTrieElementRule(this.scopeDepth, this.parentScopes, this.fontStyle, this.foreground, this.background);
  }
  static cloneArr(arr) {
    let r4 = [];
    for (let i2 = 0, len = arr.length; i2 < len; i2++) {
      r4[i2] = arr[i2].clone();
    }
    return r4;
  }
  acceptOverwrite(scopeDepth, fontStyle, foreground, background) {
    if (this.scopeDepth > scopeDepth) {
      console.log("how did this happen?");
    } else {
      this.scopeDepth = scopeDepth;
    }
    if (fontStyle !== -1) {
      this.fontStyle = fontStyle;
    }
    if (foreground !== 0) {
      this.foreground = foreground;
    }
    if (background !== 0) {
      this.background = background;
    }
  }
};
var ThemeTrieElement = class _ThemeTrieElement {
  constructor(_mainRule, rulesWithParentScopes = [], _children = {}) {
    this._mainRule = _mainRule;
    this._children = _children;
    this._rulesWithParentScopes = rulesWithParentScopes;
  }
  _rulesWithParentScopes;
  static _cmpBySpecificity(a2, b3) {
    if (a2.scopeDepth !== b3.scopeDepth) {
      return b3.scopeDepth - a2.scopeDepth;
    }
    let aParentIndex = 0;
    let bParentIndex = 0;
    while (true) {
      if (a2.parentScopes[aParentIndex] === ">") {
        aParentIndex++;
      }
      if (b3.parentScopes[bParentIndex] === ">") {
        bParentIndex++;
      }
      if (aParentIndex >= a2.parentScopes.length || bParentIndex >= b3.parentScopes.length) {
        break;
      }
      const parentScopeLengthDiff = b3.parentScopes[bParentIndex].length - a2.parentScopes[aParentIndex].length;
      if (parentScopeLengthDiff !== 0) {
        return parentScopeLengthDiff;
      }
      aParentIndex++;
      bParentIndex++;
    }
    return b3.parentScopes.length - a2.parentScopes.length;
  }
  match(scope) {
    if (scope !== "") {
      let dotIndex = scope.indexOf(".");
      let head2;
      let tail;
      if (dotIndex === -1) {
        head2 = scope;
        tail = "";
      } else {
        head2 = scope.substring(0, dotIndex);
        tail = scope.substring(dotIndex + 1);
      }
      if (this._children.hasOwnProperty(head2)) {
        return this._children[head2].match(tail);
      }
    }
    const rules = this._rulesWithParentScopes.concat(this._mainRule);
    rules.sort(_ThemeTrieElement._cmpBySpecificity);
    return rules;
  }
  insert(scopeDepth, scope, parentScopes, fontStyle, foreground, background) {
    if (scope === "") {
      this._doInsertHere(scopeDepth, parentScopes, fontStyle, foreground, background);
      return;
    }
    let dotIndex = scope.indexOf(".");
    let head2;
    let tail;
    if (dotIndex === -1) {
      head2 = scope;
      tail = "";
    } else {
      head2 = scope.substring(0, dotIndex);
      tail = scope.substring(dotIndex + 1);
    }
    let child;
    if (this._children.hasOwnProperty(head2)) {
      child = this._children[head2];
    } else {
      child = new _ThemeTrieElement(this._mainRule.clone(), ThemeTrieElementRule.cloneArr(this._rulesWithParentScopes));
      this._children[head2] = child;
    }
    child.insert(scopeDepth + 1, tail, parentScopes, fontStyle, foreground, background);
  }
  _doInsertHere(scopeDepth, parentScopes, fontStyle, foreground, background) {
    if (parentScopes === null) {
      this._mainRule.acceptOverwrite(scopeDepth, fontStyle, foreground, background);
      return;
    }
    for (let i2 = 0, len = this._rulesWithParentScopes.length; i2 < len; i2++) {
      let rule = this._rulesWithParentScopes[i2];
      if (strArrCmp(rule.parentScopes, parentScopes) === 0) {
        rule.acceptOverwrite(scopeDepth, fontStyle, foreground, background);
        return;
      }
    }
    if (fontStyle === -1) {
      fontStyle = this._mainRule.fontStyle;
    }
    if (foreground === 0) {
      foreground = this._mainRule.foreground;
    }
    if (background === 0) {
      background = this._mainRule.background;
    }
    this._rulesWithParentScopes.push(new ThemeTrieElementRule(scopeDepth, parentScopes, fontStyle, foreground, background));
  }
};
var EncodedTokenMetadata = class _EncodedTokenMetadata {
  static toBinaryStr(encodedTokenAttributes) {
    return encodedTokenAttributes.toString(2).padStart(32, "0");
  }
  static print(encodedTokenAttributes) {
    const languageId = _EncodedTokenMetadata.getLanguageId(encodedTokenAttributes);
    const tokenType = _EncodedTokenMetadata.getTokenType(encodedTokenAttributes);
    const fontStyle = _EncodedTokenMetadata.getFontStyle(encodedTokenAttributes);
    const foreground = _EncodedTokenMetadata.getForeground(encodedTokenAttributes);
    const background = _EncodedTokenMetadata.getBackground(encodedTokenAttributes);
    console.log({
      languageId,
      tokenType,
      fontStyle,
      foreground,
      background
    });
  }
  static getLanguageId(encodedTokenAttributes) {
    return (encodedTokenAttributes & 255) >>> 0;
  }
  static getTokenType(encodedTokenAttributes) {
    return (encodedTokenAttributes & 768) >>> 8;
  }
  static containsBalancedBrackets(encodedTokenAttributes) {
    return (encodedTokenAttributes & 1024) !== 0;
  }
  static getFontStyle(encodedTokenAttributes) {
    return (encodedTokenAttributes & 30720) >>> 11;
  }
  static getForeground(encodedTokenAttributes) {
    return (encodedTokenAttributes & 16744448) >>> 15;
  }
  static getBackground(encodedTokenAttributes) {
    return (encodedTokenAttributes & 4278190080) >>> 24;
  }
  /**
   * Updates the fields in `metadata`.
   * A value of `0`, `NotSet` or `null` indicates that the corresponding field should be left as is.
   */
  static set(encodedTokenAttributes, languageId, tokenType, containsBalancedBrackets, fontStyle, foreground, background) {
    let _languageId = _EncodedTokenMetadata.getLanguageId(encodedTokenAttributes);
    let _tokenType = _EncodedTokenMetadata.getTokenType(encodedTokenAttributes);
    let _containsBalancedBracketsBit = _EncodedTokenMetadata.containsBalancedBrackets(encodedTokenAttributes) ? 1 : 0;
    let _fontStyle = _EncodedTokenMetadata.getFontStyle(encodedTokenAttributes);
    let _foreground = _EncodedTokenMetadata.getForeground(encodedTokenAttributes);
    let _background = _EncodedTokenMetadata.getBackground(encodedTokenAttributes);
    if (languageId !== 0) {
      _languageId = languageId;
    }
    if (tokenType !== 8) {
      _tokenType = fromOptionalTokenType(tokenType);
    }
    if (containsBalancedBrackets !== null) {
      _containsBalancedBracketsBit = containsBalancedBrackets ? 1 : 0;
    }
    if (fontStyle !== -1) {
      _fontStyle = fontStyle;
    }
    if (foreground !== 0) {
      _foreground = foreground;
    }
    if (background !== 0) {
      _background = background;
    }
    return (_languageId << 0 | _tokenType << 8 | _containsBalancedBracketsBit << 10 | _fontStyle << 11 | _foreground << 15 | _background << 24) >>> 0;
  }
};
function toOptionalTokenType(standardType) {
  return standardType;
}
function fromOptionalTokenType(standardType) {
  return standardType;
}
function createMatchers(selector, matchesName) {
  const results = [];
  const tokenizer = newTokenizer(selector);
  let token2 = tokenizer.next();
  while (token2 !== null) {
    let priority = 0;
    if (token2.length === 2 && token2.charAt(1) === ":") {
      switch (token2.charAt(0)) {
        case "R":
          priority = 1;
          break;
        case "L":
          priority = -1;
          break;
        default:
          console.log(`Unknown priority ${token2} in scope selector`);
      }
      token2 = tokenizer.next();
    }
    let matcher = parseConjunction();
    results.push({ matcher, priority });
    if (token2 !== ",") {
      break;
    }
    token2 = tokenizer.next();
  }
  return results;
  function parseOperand() {
    if (token2 === "-") {
      token2 = tokenizer.next();
      const expressionToNegate = parseOperand();
      return (matcherInput) => !!expressionToNegate && !expressionToNegate(matcherInput);
    }
    if (token2 === "(") {
      token2 = tokenizer.next();
      const expressionInParents = parseInnerExpression();
      if (token2 === ")") {
        token2 = tokenizer.next();
      }
      return expressionInParents;
    }
    if (isIdentifier(token2)) {
      const identifiers = [];
      do {
        identifiers.push(token2);
        token2 = tokenizer.next();
      } while (isIdentifier(token2));
      return (matcherInput) => matchesName(identifiers, matcherInput);
    }
    return null;
  }
  function parseConjunction() {
    const matchers = [];
    let matcher = parseOperand();
    while (matcher) {
      matchers.push(matcher);
      matcher = parseOperand();
    }
    return (matcherInput) => matchers.every((matcher2) => matcher2(matcherInput));
  }
  function parseInnerExpression() {
    const matchers = [];
    let matcher = parseConjunction();
    while (matcher) {
      matchers.push(matcher);
      if (token2 === "|" || token2 === ",") {
        do {
          token2 = tokenizer.next();
        } while (token2 === "|" || token2 === ",");
      } else {
        break;
      }
      matcher = parseConjunction();
    }
    return (matcherInput) => matchers.some((matcher2) => matcher2(matcherInput));
  }
}
function isIdentifier(token2) {
  return !!token2 && !!token2.match(/[\w\.:]+/);
}
function newTokenizer(input) {
  let regex = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g;
  let match = regex.exec(input);
  return {
    next: () => {
      if (!match) {
        return null;
      }
      const res = match[0];
      match = regex.exec(input);
      return res;
    }
  };
}
var FindOption = ((FindOption2) => {
  FindOption2[FindOption2["None"] = 0] = "None";
  FindOption2[FindOption2["NotBeginString"] = 1] = "NotBeginString";
  FindOption2[FindOption2["NotEndString"] = 2] = "NotEndString";
  FindOption2[FindOption2["NotBeginPosition"] = 4] = "NotBeginPosition";
  FindOption2[FindOption2["DebugCall"] = 8] = "DebugCall";
  return FindOption2;
})(FindOption || {});
function disposeOnigString(str) {
  if (typeof str.dispose === "function") {
    str.dispose();
  }
}
var TopLevelRuleReference = class {
  constructor(scopeName) {
    this.scopeName = scopeName;
  }
  toKey() {
    return this.scopeName;
  }
};
var TopLevelRepositoryRuleReference = class {
  constructor(scopeName, ruleName) {
    this.scopeName = scopeName;
    this.ruleName = ruleName;
  }
  toKey() {
    return `${this.scopeName}#${this.ruleName}`;
  }
};
var ExternalReferenceCollector = class {
  _references = [];
  _seenReferenceKeys = /* @__PURE__ */ new Set();
  get references() {
    return this._references;
  }
  visitedRule = /* @__PURE__ */ new Set();
  add(reference) {
    const key2 = reference.toKey();
    if (this._seenReferenceKeys.has(key2)) {
      return;
    }
    this._seenReferenceKeys.add(key2);
    this._references.push(reference);
  }
};
var ScopeDependencyProcessor = class {
  constructor(repo, initialScopeName) {
    this.repo = repo;
    this.initialScopeName = initialScopeName;
    this.seenFullScopeRequests.add(this.initialScopeName);
    this.Q = [new TopLevelRuleReference(this.initialScopeName)];
  }
  seenFullScopeRequests = /* @__PURE__ */ new Set();
  seenPartialScopeRequests = /* @__PURE__ */ new Set();
  Q;
  processQueue() {
    const q = this.Q;
    this.Q = [];
    const deps = new ExternalReferenceCollector();
    for (const dep of q) {
      collectReferencesOfReference(dep, this.initialScopeName, this.repo, deps);
    }
    for (const dep of deps.references) {
      if (dep instanceof TopLevelRuleReference) {
        if (this.seenFullScopeRequests.has(dep.scopeName)) {
          continue;
        }
        this.seenFullScopeRequests.add(dep.scopeName);
        this.Q.push(dep);
      } else {
        if (this.seenFullScopeRequests.has(dep.scopeName)) {
          continue;
        }
        if (this.seenPartialScopeRequests.has(dep.toKey())) {
          continue;
        }
        this.seenPartialScopeRequests.add(dep.toKey());
        this.Q.push(dep);
      }
    }
  }
};
function collectReferencesOfReference(reference, baseGrammarScopeName, repo, result) {
  const selfGrammar = repo.lookup(reference.scopeName);
  if (!selfGrammar) {
    if (reference.scopeName === baseGrammarScopeName) {
      throw new Error(`No grammar provided for <${baseGrammarScopeName}>`);
    }
    return;
  }
  const baseGrammar = repo.lookup(baseGrammarScopeName);
  if (reference instanceof TopLevelRuleReference) {
    collectExternalReferencesInTopLevelRule({ baseGrammar, selfGrammar }, result);
  } else {
    collectExternalReferencesInTopLevelRepositoryRule(
      reference.ruleName,
      { baseGrammar, selfGrammar, repository: selfGrammar.repository },
      result
    );
  }
  const injections = repo.injections(reference.scopeName);
  if (injections) {
    for (const injection of injections) {
      result.add(new TopLevelRuleReference(injection));
    }
  }
}
function collectExternalReferencesInTopLevelRepositoryRule(ruleName, context, result) {
  if (context.repository && context.repository[ruleName]) {
    const rule = context.repository[ruleName];
    collectExternalReferencesInRules([rule], context, result);
  }
}
function collectExternalReferencesInTopLevelRule(context, result) {
  if (context.selfGrammar.patterns && Array.isArray(context.selfGrammar.patterns)) {
    collectExternalReferencesInRules(
      context.selfGrammar.patterns,
      { ...context, repository: context.selfGrammar.repository },
      result
    );
  }
  if (context.selfGrammar.injections) {
    collectExternalReferencesInRules(
      Object.values(context.selfGrammar.injections),
      { ...context, repository: context.selfGrammar.repository },
      result
    );
  }
}
function collectExternalReferencesInRules(rules, context, result) {
  for (const rule of rules) {
    if (result.visitedRule.has(rule)) {
      continue;
    }
    result.visitedRule.add(rule);
    const patternRepository = rule.repository ? mergeObjects({}, context.repository, rule.repository) : context.repository;
    if (Array.isArray(rule.patterns)) {
      collectExternalReferencesInRules(rule.patterns, { ...context, repository: patternRepository }, result);
    }
    const include = rule.include;
    if (!include) {
      continue;
    }
    const reference = parseInclude(include);
    switch (reference.kind) {
      case 0:
        collectExternalReferencesInTopLevelRule({ ...context, selfGrammar: context.baseGrammar }, result);
        break;
      case 1:
        collectExternalReferencesInTopLevelRule(context, result);
        break;
      case 2:
        collectExternalReferencesInTopLevelRepositoryRule(reference.ruleName, { ...context, repository: patternRepository }, result);
        break;
      case 3:
      case 4:
        const selfGrammar = reference.scopeName === context.selfGrammar.scopeName ? context.selfGrammar : reference.scopeName === context.baseGrammar.scopeName ? context.baseGrammar : void 0;
        if (selfGrammar) {
          const newContext = { baseGrammar: context.baseGrammar, selfGrammar, repository: patternRepository };
          if (reference.kind === 4) {
            collectExternalReferencesInTopLevelRepositoryRule(reference.ruleName, newContext, result);
          } else {
            collectExternalReferencesInTopLevelRule(newContext, result);
          }
        } else {
          if (reference.kind === 4) {
            result.add(new TopLevelRepositoryRuleReference(reference.scopeName, reference.ruleName));
          } else {
            result.add(new TopLevelRuleReference(reference.scopeName));
          }
        }
        break;
    }
  }
}
var BaseReference = class {
  kind = 0;
};
var SelfReference = class {
  kind = 1;
};
var RelativeReference = class {
  constructor(ruleName) {
    this.ruleName = ruleName;
  }
  kind = 2;
};
var TopLevelReference = class {
  constructor(scopeName) {
    this.scopeName = scopeName;
  }
  kind = 3;
};
var TopLevelRepositoryReference = class {
  constructor(scopeName, ruleName) {
    this.scopeName = scopeName;
    this.ruleName = ruleName;
  }
  kind = 4;
};
function parseInclude(include) {
  if (include === "$base") {
    return new BaseReference();
  } else if (include === "$self") {
    return new SelfReference();
  }
  const indexOfSharp = include.indexOf("#");
  if (indexOfSharp === -1) {
    return new TopLevelReference(include);
  } else if (indexOfSharp === 0) {
    return new RelativeReference(include.substring(1));
  } else {
    const scopeName = include.substring(0, indexOfSharp);
    const ruleName = include.substring(indexOfSharp + 1);
    return new TopLevelRepositoryReference(scopeName, ruleName);
  }
}
var HAS_BACK_REFERENCES = /\\(\d+)/;
var BACK_REFERENCING_END = /\\(\d+)/g;
var endRuleId = -1;
var whileRuleId = -2;
function ruleIdFromNumber(id) {
  return id;
}
function ruleIdToNumber(id) {
  return id;
}
var Rule = class {
  $location;
  id;
  _nameIsCapturing;
  _name;
  _contentNameIsCapturing;
  _contentName;
  constructor($location, id, name, contentName) {
    this.$location = $location;
    this.id = id;
    this._name = name || null;
    this._nameIsCapturing = RegexSource.hasCaptures(this._name);
    this._contentName = contentName || null;
    this._contentNameIsCapturing = RegexSource.hasCaptures(this._contentName);
  }
  get debugName() {
    const location = this.$location ? `${basename(this.$location.filename)}:${this.$location.line}` : "unknown";
    return `${this.constructor.name}#${this.id} @ ${location}`;
  }
  getName(lineText, captureIndices) {
    if (!this._nameIsCapturing || this._name === null || lineText === null || captureIndices === null) {
      return this._name;
    }
    return RegexSource.replaceCaptures(this._name, lineText, captureIndices);
  }
  getContentName(lineText, captureIndices) {
    if (!this._contentNameIsCapturing || this._contentName === null) {
      return this._contentName;
    }
    return RegexSource.replaceCaptures(this._contentName, lineText, captureIndices);
  }
};
var CaptureRule = class extends Rule {
  retokenizeCapturedWithRuleId;
  constructor($location, id, name, contentName, retokenizeCapturedWithRuleId) {
    super($location, id, name, contentName);
    this.retokenizeCapturedWithRuleId = retokenizeCapturedWithRuleId;
  }
  dispose() {
  }
  collectPatterns(grammar, out) {
    throw new Error("Not supported!");
  }
  compile(grammar, endRegexSource) {
    throw new Error("Not supported!");
  }
  compileAG(grammar, endRegexSource, allowA, allowG) {
    throw new Error("Not supported!");
  }
};
var MatchRule = class extends Rule {
  _match;
  captures;
  _cachedCompiledPatterns;
  constructor($location, id, name, match, captures) {
    super($location, id, name, null);
    this._match = new RegExpSource(match, this.id);
    this.captures = captures;
    this._cachedCompiledPatterns = null;
  }
  dispose() {
    if (this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns.dispose();
      this._cachedCompiledPatterns = null;
    }
  }
  get debugMatchRegExp() {
    return `${this._match.source}`;
  }
  collectPatterns(grammar, out) {
    out.push(this._match);
  }
  compile(grammar, endRegexSource) {
    return this._getCachedCompiledPatterns(grammar).compile(grammar);
  }
  compileAG(grammar, endRegexSource, allowA, allowG) {
    return this._getCachedCompiledPatterns(grammar).compileAG(grammar, allowA, allowG);
  }
  _getCachedCompiledPatterns(grammar) {
    if (!this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns = new RegExpSourceList();
      this.collectPatterns(grammar, this._cachedCompiledPatterns);
    }
    return this._cachedCompiledPatterns;
  }
};
var IncludeOnlyRule = class extends Rule {
  hasMissingPatterns;
  patterns;
  _cachedCompiledPatterns;
  constructor($location, id, name, contentName, patterns) {
    super($location, id, name, contentName);
    this.patterns = patterns.patterns;
    this.hasMissingPatterns = patterns.hasMissingPatterns;
    this._cachedCompiledPatterns = null;
  }
  dispose() {
    if (this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns.dispose();
      this._cachedCompiledPatterns = null;
    }
  }
  collectPatterns(grammar, out) {
    for (const pattern of this.patterns) {
      const rule = grammar.getRule(pattern);
      rule.collectPatterns(grammar, out);
    }
  }
  compile(grammar, endRegexSource) {
    return this._getCachedCompiledPatterns(grammar).compile(grammar);
  }
  compileAG(grammar, endRegexSource, allowA, allowG) {
    return this._getCachedCompiledPatterns(grammar).compileAG(grammar, allowA, allowG);
  }
  _getCachedCompiledPatterns(grammar) {
    if (!this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns = new RegExpSourceList();
      this.collectPatterns(grammar, this._cachedCompiledPatterns);
    }
    return this._cachedCompiledPatterns;
  }
};
var BeginEndRule = class extends Rule {
  _begin;
  beginCaptures;
  _end;
  endHasBackReferences;
  endCaptures;
  applyEndPatternLast;
  hasMissingPatterns;
  patterns;
  _cachedCompiledPatterns;
  constructor($location, id, name, contentName, begin, beginCaptures, end, endCaptures, applyEndPatternLast, patterns) {
    super($location, id, name, contentName);
    this._begin = new RegExpSource(begin, this.id);
    this.beginCaptures = beginCaptures;
    this._end = new RegExpSource(end ? end : "￿", -1);
    this.endHasBackReferences = this._end.hasBackReferences;
    this.endCaptures = endCaptures;
    this.applyEndPatternLast = applyEndPatternLast || false;
    this.patterns = patterns.patterns;
    this.hasMissingPatterns = patterns.hasMissingPatterns;
    this._cachedCompiledPatterns = null;
  }
  dispose() {
    if (this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns.dispose();
      this._cachedCompiledPatterns = null;
    }
  }
  get debugBeginRegExp() {
    return `${this._begin.source}`;
  }
  get debugEndRegExp() {
    return `${this._end.source}`;
  }
  getEndWithResolvedBackReferences(lineText, captureIndices) {
    return this._end.resolveBackReferences(lineText, captureIndices);
  }
  collectPatterns(grammar, out) {
    out.push(this._begin);
  }
  compile(grammar, endRegexSource) {
    return this._getCachedCompiledPatterns(grammar, endRegexSource).compile(grammar);
  }
  compileAG(grammar, endRegexSource, allowA, allowG) {
    return this._getCachedCompiledPatterns(grammar, endRegexSource).compileAG(grammar, allowA, allowG);
  }
  _getCachedCompiledPatterns(grammar, endRegexSource) {
    if (!this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns = new RegExpSourceList();
      for (const pattern of this.patterns) {
        const rule = grammar.getRule(pattern);
        rule.collectPatterns(grammar, this._cachedCompiledPatterns);
      }
      if (this.applyEndPatternLast) {
        this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end);
      } else {
        this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end);
      }
    }
    if (this._end.hasBackReferences) {
      if (this.applyEndPatternLast) {
        this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, endRegexSource);
      } else {
        this._cachedCompiledPatterns.setSource(0, endRegexSource);
      }
    }
    return this._cachedCompiledPatterns;
  }
};
var BeginWhileRule = class extends Rule {
  _begin;
  beginCaptures;
  whileCaptures;
  _while;
  whileHasBackReferences;
  hasMissingPatterns;
  patterns;
  _cachedCompiledPatterns;
  _cachedCompiledWhilePatterns;
  constructor($location, id, name, contentName, begin, beginCaptures, _while, whileCaptures, patterns) {
    super($location, id, name, contentName);
    this._begin = new RegExpSource(begin, this.id);
    this.beginCaptures = beginCaptures;
    this.whileCaptures = whileCaptures;
    this._while = new RegExpSource(_while, whileRuleId);
    this.whileHasBackReferences = this._while.hasBackReferences;
    this.patterns = patterns.patterns;
    this.hasMissingPatterns = patterns.hasMissingPatterns;
    this._cachedCompiledPatterns = null;
    this._cachedCompiledWhilePatterns = null;
  }
  dispose() {
    if (this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns.dispose();
      this._cachedCompiledPatterns = null;
    }
    if (this._cachedCompiledWhilePatterns) {
      this._cachedCompiledWhilePatterns.dispose();
      this._cachedCompiledWhilePatterns = null;
    }
  }
  get debugBeginRegExp() {
    return `${this._begin.source}`;
  }
  get debugWhileRegExp() {
    return `${this._while.source}`;
  }
  getWhileWithResolvedBackReferences(lineText, captureIndices) {
    return this._while.resolveBackReferences(lineText, captureIndices);
  }
  collectPatterns(grammar, out) {
    out.push(this._begin);
  }
  compile(grammar, endRegexSource) {
    return this._getCachedCompiledPatterns(grammar).compile(grammar);
  }
  compileAG(grammar, endRegexSource, allowA, allowG) {
    return this._getCachedCompiledPatterns(grammar).compileAG(grammar, allowA, allowG);
  }
  _getCachedCompiledPatterns(grammar) {
    if (!this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns = new RegExpSourceList();
      for (const pattern of this.patterns) {
        const rule = grammar.getRule(pattern);
        rule.collectPatterns(grammar, this._cachedCompiledPatterns);
      }
    }
    return this._cachedCompiledPatterns;
  }
  compileWhile(grammar, endRegexSource) {
    return this._getCachedCompiledWhilePatterns(grammar, endRegexSource).compile(grammar);
  }
  compileWhileAG(grammar, endRegexSource, allowA, allowG) {
    return this._getCachedCompiledWhilePatterns(grammar, endRegexSource).compileAG(grammar, allowA, allowG);
  }
  _getCachedCompiledWhilePatterns(grammar, endRegexSource) {
    if (!this._cachedCompiledWhilePatterns) {
      this._cachedCompiledWhilePatterns = new RegExpSourceList();
      this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences ? this._while.clone() : this._while);
    }
    if (this._while.hasBackReferences) {
      this._cachedCompiledWhilePatterns.setSource(0, endRegexSource ? endRegexSource : "￿");
    }
    return this._cachedCompiledWhilePatterns;
  }
};
var RuleFactory = class _RuleFactory {
  static createCaptureRule(helper, $location, name, contentName, retokenizeCapturedWithRuleId) {
    return helper.registerRule((id) => {
      return new CaptureRule($location, id, name, contentName, retokenizeCapturedWithRuleId);
    });
  }
  static getCompiledRuleId(desc, helper, repository) {
    if (!desc.id) {
      helper.registerRule((id) => {
        desc.id = id;
        if (desc.match) {
          return new MatchRule(
            desc.$vscodeTextmateLocation,
            desc.id,
            desc.name,
            desc.match,
            _RuleFactory._compileCaptures(desc.captures, helper, repository)
          );
        }
        if (typeof desc.begin === "undefined") {
          if (desc.repository) {
            repository = mergeObjects({}, repository, desc.repository);
          }
          let patterns = desc.patterns;
          if (typeof patterns === "undefined" && desc.include) {
            patterns = [{ include: desc.include }];
          }
          return new IncludeOnlyRule(
            desc.$vscodeTextmateLocation,
            desc.id,
            desc.name,
            desc.contentName,
            _RuleFactory._compilePatterns(patterns, helper, repository)
          );
        }
        if (desc.while) {
          return new BeginWhileRule(
            desc.$vscodeTextmateLocation,
            desc.id,
            desc.name,
            desc.contentName,
            desc.begin,
            _RuleFactory._compileCaptures(desc.beginCaptures || desc.captures, helper, repository),
            desc.while,
            _RuleFactory._compileCaptures(desc.whileCaptures || desc.captures, helper, repository),
            _RuleFactory._compilePatterns(desc.patterns, helper, repository)
          );
        }
        return new BeginEndRule(
          desc.$vscodeTextmateLocation,
          desc.id,
          desc.name,
          desc.contentName,
          desc.begin,
          _RuleFactory._compileCaptures(desc.beginCaptures || desc.captures, helper, repository),
          desc.end,
          _RuleFactory._compileCaptures(desc.endCaptures || desc.captures, helper, repository),
          desc.applyEndPatternLast,
          _RuleFactory._compilePatterns(desc.patterns, helper, repository)
        );
      });
    }
    return desc.id;
  }
  static _compileCaptures(captures, helper, repository) {
    let r4 = [];
    if (captures) {
      let maximumCaptureId = 0;
      for (const captureId in captures) {
        if (captureId === "$vscodeTextmateLocation") {
          continue;
        }
        const numericCaptureId = parseInt(captureId, 10);
        if (numericCaptureId > maximumCaptureId) {
          maximumCaptureId = numericCaptureId;
        }
      }
      for (let i2 = 0; i2 <= maximumCaptureId; i2++) {
        r4[i2] = null;
      }
      for (const captureId in captures) {
        if (captureId === "$vscodeTextmateLocation") {
          continue;
        }
        const numericCaptureId = parseInt(captureId, 10);
        let retokenizeCapturedWithRuleId = 0;
        if (captures[captureId].patterns) {
          retokenizeCapturedWithRuleId = _RuleFactory.getCompiledRuleId(captures[captureId], helper, repository);
        }
        r4[numericCaptureId] = _RuleFactory.createCaptureRule(helper, captures[captureId].$vscodeTextmateLocation, captures[captureId].name, captures[captureId].contentName, retokenizeCapturedWithRuleId);
      }
    }
    return r4;
  }
  static _compilePatterns(patterns, helper, repository) {
    let r4 = [];
    if (patterns) {
      for (let i2 = 0, len = patterns.length; i2 < len; i2++) {
        const pattern = patterns[i2];
        let ruleId = -1;
        if (pattern.include) {
          const reference = parseInclude(pattern.include);
          switch (reference.kind) {
            case 0:
            case 1:
              ruleId = _RuleFactory.getCompiledRuleId(repository[pattern.include], helper, repository);
              break;
            case 2:
              let localIncludedRule = repository[reference.ruleName];
              if (localIncludedRule) {
                ruleId = _RuleFactory.getCompiledRuleId(localIncludedRule, helper, repository);
              } else {
              }
              break;
            case 3:
            case 4:
              const externalGrammarName = reference.scopeName;
              const externalGrammarInclude = reference.kind === 4 ? reference.ruleName : null;
              const externalGrammar = helper.getExternalGrammar(externalGrammarName, repository);
              if (externalGrammar) {
                if (externalGrammarInclude) {
                  let externalIncludedRule = externalGrammar.repository[externalGrammarInclude];
                  if (externalIncludedRule) {
                    ruleId = _RuleFactory.getCompiledRuleId(externalIncludedRule, helper, externalGrammar.repository);
                  } else {
                  }
                } else {
                  ruleId = _RuleFactory.getCompiledRuleId(externalGrammar.repository.$self, helper, externalGrammar.repository);
                }
              } else {
              }
              break;
          }
        } else {
          ruleId = _RuleFactory.getCompiledRuleId(pattern, helper, repository);
        }
        if (ruleId !== -1) {
          const rule = helper.getRule(ruleId);
          let skipRule = false;
          if (rule instanceof IncludeOnlyRule || rule instanceof BeginEndRule || rule instanceof BeginWhileRule) {
            if (rule.hasMissingPatterns && rule.patterns.length === 0) {
              skipRule = true;
            }
          }
          if (skipRule) {
            continue;
          }
          r4.push(ruleId);
        }
      }
    }
    return {
      patterns: r4,
      hasMissingPatterns: (patterns ? patterns.length : 0) !== r4.length
    };
  }
};
var RegExpSource = class _RegExpSource {
  source;
  ruleId;
  hasAnchor;
  hasBackReferences;
  _anchorCache;
  constructor(regExpSource, ruleId) {
    if (regExpSource && typeof regExpSource === "string") {
      const len = regExpSource.length;
      let lastPushedPos = 0;
      let output = [];
      let hasAnchor = false;
      for (let pos = 0; pos < len; pos++) {
        const ch = regExpSource.charAt(pos);
        if (ch === "\\") {
          if (pos + 1 < len) {
            const nextCh = regExpSource.charAt(pos + 1);
            if (nextCh === "z") {
              output.push(regExpSource.substring(lastPushedPos, pos));
              output.push("$(?!\\n)(?<!\\n)");
              lastPushedPos = pos + 2;
            } else if (nextCh === "A" || nextCh === "G") {
              hasAnchor = true;
            }
            pos++;
          }
        }
      }
      this.hasAnchor = hasAnchor;
      if (lastPushedPos === 0) {
        this.source = regExpSource;
      } else {
        output.push(regExpSource.substring(lastPushedPos, len));
        this.source = output.join("");
      }
    } else {
      this.hasAnchor = false;
      this.source = regExpSource;
    }
    if (this.hasAnchor) {
      this._anchorCache = this._buildAnchorCache();
    } else {
      this._anchorCache = null;
    }
    this.ruleId = ruleId;
    if (typeof this.source === "string") {
      this.hasBackReferences = HAS_BACK_REFERENCES.test(this.source);
    } else {
      this.hasBackReferences = false;
    }
  }
  clone() {
    return new _RegExpSource(this.source, this.ruleId);
  }
  setSource(newSource) {
    if (this.source === newSource) {
      return;
    }
    this.source = newSource;
    if (this.hasAnchor) {
      this._anchorCache = this._buildAnchorCache();
    }
  }
  resolveBackReferences(lineText, captureIndices) {
    if (typeof this.source !== "string") {
      throw new Error("This method should only be called if the source is a string");
    }
    let capturedValues = captureIndices.map((capture) => {
      return lineText.substring(capture.start, capture.end);
    });
    BACK_REFERENCING_END.lastIndex = 0;
    return this.source.replace(BACK_REFERENCING_END, (match, g1) => {
      return escapeRegExpCharacters(capturedValues[parseInt(g1, 10)] || "");
    });
  }
  _buildAnchorCache() {
    if (typeof this.source !== "string") {
      throw new Error("This method should only be called if the source is a string");
    }
    let A0_G0_result = [];
    let A0_G1_result = [];
    let A1_G0_result = [];
    let A1_G1_result = [];
    let pos, len, ch, nextCh;
    for (pos = 0, len = this.source.length; pos < len; pos++) {
      ch = this.source.charAt(pos);
      A0_G0_result[pos] = ch;
      A0_G1_result[pos] = ch;
      A1_G0_result[pos] = ch;
      A1_G1_result[pos] = ch;
      if (ch === "\\") {
        if (pos + 1 < len) {
          nextCh = this.source.charAt(pos + 1);
          if (nextCh === "A") {
            A0_G0_result[pos + 1] = "￿";
            A0_G1_result[pos + 1] = "￿";
            A1_G0_result[pos + 1] = "A";
            A1_G1_result[pos + 1] = "A";
          } else if (nextCh === "G") {
            A0_G0_result[pos + 1] = "￿";
            A0_G1_result[pos + 1] = "G";
            A1_G0_result[pos + 1] = "￿";
            A1_G1_result[pos + 1] = "G";
          } else {
            A0_G0_result[pos + 1] = nextCh;
            A0_G1_result[pos + 1] = nextCh;
            A1_G0_result[pos + 1] = nextCh;
            A1_G1_result[pos + 1] = nextCh;
          }
          pos++;
        }
      }
    }
    return {
      A0_G0: A0_G0_result.join(""),
      A0_G1: A0_G1_result.join(""),
      A1_G0: A1_G0_result.join(""),
      A1_G1: A1_G1_result.join("")
    };
  }
  resolveAnchors(allowA, allowG) {
    if (!this.hasAnchor || !this._anchorCache || typeof this.source !== "string") {
      return this.source;
    }
    if (allowA) {
      if (allowG) {
        return this._anchorCache.A1_G1;
      } else {
        return this._anchorCache.A1_G0;
      }
    } else {
      if (allowG) {
        return this._anchorCache.A0_G1;
      } else {
        return this._anchorCache.A0_G0;
      }
    }
  }
};
var RegExpSourceList = class {
  _items;
  _hasAnchors;
  _cached;
  _anchorCache;
  constructor() {
    this._items = [];
    this._hasAnchors = false;
    this._cached = null;
    this._anchorCache = {
      A0_G0: null,
      A0_G1: null,
      A1_G0: null,
      A1_G1: null
    };
  }
  dispose() {
    this._disposeCaches();
  }
  _disposeCaches() {
    if (this._cached) {
      this._cached.dispose();
      this._cached = null;
    }
    if (this._anchorCache.A0_G0) {
      this._anchorCache.A0_G0.dispose();
      this._anchorCache.A0_G0 = null;
    }
    if (this._anchorCache.A0_G1) {
      this._anchorCache.A0_G1.dispose();
      this._anchorCache.A0_G1 = null;
    }
    if (this._anchorCache.A1_G0) {
      this._anchorCache.A1_G0.dispose();
      this._anchorCache.A1_G0 = null;
    }
    if (this._anchorCache.A1_G1) {
      this._anchorCache.A1_G1.dispose();
      this._anchorCache.A1_G1 = null;
    }
  }
  push(item) {
    this._items.push(item);
    this._hasAnchors = this._hasAnchors || item.hasAnchor;
  }
  unshift(item) {
    this._items.unshift(item);
    this._hasAnchors = this._hasAnchors || item.hasAnchor;
  }
  length() {
    return this._items.length;
  }
  setSource(index, newSource) {
    if (this._items[index].source !== newSource) {
      this._disposeCaches();
      this._items[index].setSource(newSource);
    }
  }
  compile(onigLib) {
    if (!this._cached) {
      let regExps = this._items.map((e) => e.source);
      this._cached = new CompiledRule(onigLib, regExps, this._items.map((e) => e.ruleId));
    }
    return this._cached;
  }
  compileAG(onigLib, allowA, allowG) {
    if (!this._hasAnchors) {
      return this.compile(onigLib);
    } else {
      if (allowA) {
        if (allowG) {
          if (!this._anchorCache.A1_G1) {
            this._anchorCache.A1_G1 = this._resolveAnchors(onigLib, allowA, allowG);
          }
          return this._anchorCache.A1_G1;
        } else {
          if (!this._anchorCache.A1_G0) {
            this._anchorCache.A1_G0 = this._resolveAnchors(onigLib, allowA, allowG);
          }
          return this._anchorCache.A1_G0;
        }
      } else {
        if (allowG) {
          if (!this._anchorCache.A0_G1) {
            this._anchorCache.A0_G1 = this._resolveAnchors(onigLib, allowA, allowG);
          }
          return this._anchorCache.A0_G1;
        } else {
          if (!this._anchorCache.A0_G0) {
            this._anchorCache.A0_G0 = this._resolveAnchors(onigLib, allowA, allowG);
          }
          return this._anchorCache.A0_G0;
        }
      }
    }
  }
  _resolveAnchors(onigLib, allowA, allowG) {
    let regExps = this._items.map((e) => e.resolveAnchors(allowA, allowG));
    return new CompiledRule(onigLib, regExps, this._items.map((e) => e.ruleId));
  }
};
var CompiledRule = class {
  constructor(onigLib, regExps, rules) {
    this.regExps = regExps;
    this.rules = rules;
    this.scanner = onigLib.createOnigScanner(regExps);
  }
  scanner;
  dispose() {
    if (typeof this.scanner.dispose === "function") {
      this.scanner.dispose();
    }
  }
  toString() {
    const r4 = [];
    for (let i2 = 0, len = this.rules.length; i2 < len; i2++) {
      r4.push("   - " + this.rules[i2] + ": " + this.regExps[i2]);
    }
    return r4.join("\n");
  }
  findNextMatchSync(string, startPosition, options) {
    const result = this.scanner.findNextMatchSync(string, startPosition, options);
    if (!result) {
      return null;
    }
    return {
      ruleId: this.rules[result.index],
      captureIndices: result.captureIndices
    };
  }
};
var BasicScopeAttributes = class {
  constructor(languageId, tokenType) {
    this.languageId = languageId;
    this.tokenType = tokenType;
  }
};
var BasicScopeAttributesProvider = class _BasicScopeAttributesProvider {
  _defaultAttributes;
  _embeddedLanguagesMatcher;
  constructor(initialLanguageId, embeddedLanguages) {
    this._defaultAttributes = new BasicScopeAttributes(
      initialLanguageId,
      8
      /* NotSet */
    );
    this._embeddedLanguagesMatcher = new ScopeMatcher(Object.entries(embeddedLanguages || {}));
  }
  getDefaultAttributes() {
    return this._defaultAttributes;
  }
  getBasicScopeAttributes(scopeName) {
    if (scopeName === null) {
      return _BasicScopeAttributesProvider._NULL_SCOPE_METADATA;
    }
    return this._getBasicScopeAttributes.get(scopeName);
  }
  static _NULL_SCOPE_METADATA = new BasicScopeAttributes(0, 0);
  _getBasicScopeAttributes = new CachedFn((scopeName) => {
    const languageId = this._scopeToLanguage(scopeName);
    const standardTokenType = this._toStandardTokenType(scopeName);
    return new BasicScopeAttributes(languageId, standardTokenType);
  });
  /**
   * Given a produced TM scope, return the language that token describes or null if unknown.
   * e.g. source.html => html, source.css.embedded.html => css, punctuation.definition.tag.html => null
   */
  _scopeToLanguage(scope) {
    return this._embeddedLanguagesMatcher.match(scope) || 0;
  }
  _toStandardTokenType(scopeName) {
    const m3 = scopeName.match(_BasicScopeAttributesProvider.STANDARD_TOKEN_TYPE_REGEXP);
    if (!m3) {
      return 8;
    }
    switch (m3[1]) {
      case "comment":
        return 1;
      case "string":
        return 2;
      case "regex":
        return 3;
      case "meta.embedded":
        return 0;
    }
    throw new Error("Unexpected match for standard token type!");
  }
  static STANDARD_TOKEN_TYPE_REGEXP = /\b(comment|string|regex|meta\.embedded)\b/;
};
var ScopeMatcher = class {
  values;
  scopesRegExp;
  constructor(values) {
    if (values.length === 0) {
      this.values = null;
      this.scopesRegExp = null;
    } else {
      this.values = new Map(values);
      const escapedScopes = values.map(
        ([scopeName, value]) => escapeRegExpCharacters(scopeName)
      );
      escapedScopes.sort();
      escapedScopes.reverse();
      this.scopesRegExp = new RegExp(
        `^((${escapedScopes.join(")|(")}))($|\\.)`,
        ""
      );
    }
  }
  match(scope) {
    if (!this.scopesRegExp) {
      return void 0;
    }
    const m3 = scope.match(this.scopesRegExp);
    if (!m3) {
      return void 0;
    }
    return this.values.get(m3[1]);
  }
};
var DebugFlags = {
  InDebugMode: typeof process !== "undefined" && !!process.env["VSCODE_TEXTMATE_DEBUG"]
};
var UseOnigurumaFindOptions = false;
var TokenizeStringResult = class {
  constructor(stack, stoppedEarly) {
    this.stack = stack;
    this.stoppedEarly = stoppedEarly;
  }
};
function _tokenizeString(grammar, lineText, isFirstLine, linePos, stack, lineTokens, checkWhileConditions, timeLimit) {
  const lineLength = lineText.content.length;
  let STOP = false;
  let anchorPosition = -1;
  if (checkWhileConditions) {
    const whileCheckResult = _checkWhileConditions(
      grammar,
      lineText,
      isFirstLine,
      linePos,
      stack,
      lineTokens
    );
    stack = whileCheckResult.stack;
    linePos = whileCheckResult.linePos;
    isFirstLine = whileCheckResult.isFirstLine;
    anchorPosition = whileCheckResult.anchorPosition;
  }
  const startTime = Date.now();
  while (!STOP) {
    if (timeLimit !== 0) {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime > timeLimit) {
        return new TokenizeStringResult(stack, true);
      }
    }
    scanNext();
  }
  return new TokenizeStringResult(stack, false);
  function scanNext() {
    if (false) {
      console.log("");
      console.log(
        `@@scanNext ${linePos}: |${lineText.content.substr(linePos).replace(/\n$/, "\\n")}|`
      );
    }
    const r4 = matchRuleOrInjections(
      grammar,
      lineText,
      isFirstLine,
      linePos,
      stack,
      anchorPosition
    );
    if (!r4) {
      lineTokens.produce(stack, lineLength);
      STOP = true;
      return;
    }
    const captureIndices = r4.captureIndices;
    const matchedRuleId = r4.matchedRuleId;
    const hasAdvanced = captureIndices && captureIndices.length > 0 ? captureIndices[0].end > linePos : false;
    if (matchedRuleId === endRuleId) {
      const poppedRule = stack.getRule(grammar);
      if (false) {
        console.log(
          "  popping " + poppedRule.debugName + " - " + poppedRule.debugEndRegExp
        );
      }
      lineTokens.produce(stack, captureIndices[0].start);
      stack = stack.withContentNameScopesList(stack.nameScopesList);
      handleCaptures(
        grammar,
        lineText,
        isFirstLine,
        stack,
        lineTokens,
        poppedRule.endCaptures,
        captureIndices
      );
      lineTokens.produce(stack, captureIndices[0].end);
      const popped = stack;
      stack = stack.parent;
      anchorPosition = popped.getAnchorPos();
      if (!hasAdvanced && popped.getEnterPos() === linePos) {
        if (false) {
          console.error(
            "[1] - Grammar is in an endless loop - Grammar pushed & popped a rule without advancing"
          );
        }
        stack = popped;
        lineTokens.produce(stack, lineLength);
        STOP = true;
        return;
      }
    } else {
      const _rule = grammar.getRule(matchedRuleId);
      lineTokens.produce(stack, captureIndices[0].start);
      const beforePush = stack;
      const scopeName = _rule.getName(lineText.content, captureIndices);
      const nameScopesList = stack.contentNameScopesList.pushAttributed(
        scopeName,
        grammar
      );
      stack = stack.push(
        matchedRuleId,
        linePos,
        anchorPosition,
        captureIndices[0].end === lineLength,
        null,
        nameScopesList,
        nameScopesList
      );
      if (_rule instanceof BeginEndRule) {
        const pushedRule = _rule;
        if (false) {
          console.log(
            "  pushing " + pushedRule.debugName + " - " + pushedRule.debugBeginRegExp
          );
        }
        handleCaptures(
          grammar,
          lineText,
          isFirstLine,
          stack,
          lineTokens,
          pushedRule.beginCaptures,
          captureIndices
        );
        lineTokens.produce(stack, captureIndices[0].end);
        anchorPosition = captureIndices[0].end;
        const contentName = pushedRule.getContentName(
          lineText.content,
          captureIndices
        );
        const contentNameScopesList = nameScopesList.pushAttributed(
          contentName,
          grammar
        );
        stack = stack.withContentNameScopesList(contentNameScopesList);
        if (pushedRule.endHasBackReferences) {
          stack = stack.withEndRule(
            pushedRule.getEndWithResolvedBackReferences(
              lineText.content,
              captureIndices
            )
          );
        }
        if (!hasAdvanced && beforePush.hasSameRuleAs(stack)) {
          if (false) {
            console.error(
              "[2] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"
            );
          }
          stack = stack.pop();
          lineTokens.produce(stack, lineLength);
          STOP = true;
          return;
        }
      } else if (_rule instanceof BeginWhileRule) {
        const pushedRule = _rule;
        if (false) {
          console.log("  pushing " + pushedRule.debugName);
        }
        handleCaptures(
          grammar,
          lineText,
          isFirstLine,
          stack,
          lineTokens,
          pushedRule.beginCaptures,
          captureIndices
        );
        lineTokens.produce(stack, captureIndices[0].end);
        anchorPosition = captureIndices[0].end;
        const contentName = pushedRule.getContentName(
          lineText.content,
          captureIndices
        );
        const contentNameScopesList = nameScopesList.pushAttributed(
          contentName,
          grammar
        );
        stack = stack.withContentNameScopesList(contentNameScopesList);
        if (pushedRule.whileHasBackReferences) {
          stack = stack.withEndRule(
            pushedRule.getWhileWithResolvedBackReferences(
              lineText.content,
              captureIndices
            )
          );
        }
        if (!hasAdvanced && beforePush.hasSameRuleAs(stack)) {
          if (false) {
            console.error(
              "[3] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"
            );
          }
          stack = stack.pop();
          lineTokens.produce(stack, lineLength);
          STOP = true;
          return;
        }
      } else {
        const matchingRule = _rule;
        if (false) {
          console.log(
            "  matched " + matchingRule.debugName + " - " + matchingRule.debugMatchRegExp
          );
        }
        handleCaptures(
          grammar,
          lineText,
          isFirstLine,
          stack,
          lineTokens,
          matchingRule.captures,
          captureIndices
        );
        lineTokens.produce(stack, captureIndices[0].end);
        stack = stack.pop();
        if (!hasAdvanced) {
          if (false) {
            console.error(
              "[4] - Grammar is in an endless loop - Grammar is not advancing, nor is it pushing/popping"
            );
          }
          stack = stack.safePop();
          lineTokens.produce(stack, lineLength);
          STOP = true;
          return;
        }
      }
    }
    if (captureIndices[0].end > linePos) {
      linePos = captureIndices[0].end;
      isFirstLine = false;
    }
  }
}
function _checkWhileConditions(grammar, lineText, isFirstLine, linePos, stack, lineTokens) {
  let anchorPosition = stack.beginRuleCapturedEOL ? 0 : -1;
  const whileRules = [];
  for (let node = stack; node; node = node.pop()) {
    const nodeRule = node.getRule(grammar);
    if (nodeRule instanceof BeginWhileRule) {
      whileRules.push({
        rule: nodeRule,
        stack: node
      });
    }
  }
  for (let whileRule = whileRules.pop(); whileRule; whileRule = whileRules.pop()) {
    const { ruleScanner, findOptions } = prepareRuleWhileSearch(whileRule.rule, grammar, whileRule.stack.endRule, isFirstLine, linePos === anchorPosition);
    const r4 = ruleScanner.findNextMatchSync(lineText, linePos, findOptions);
    if (false) {
      console.log("  scanning for while rule");
      console.log(ruleScanner.toString());
    }
    if (r4) {
      const matchedRuleId = r4.ruleId;
      if (matchedRuleId !== whileRuleId) {
        stack = whileRule.stack.pop();
        break;
      }
      if (r4.captureIndices && r4.captureIndices.length) {
        lineTokens.produce(whileRule.stack, r4.captureIndices[0].start);
        handleCaptures(grammar, lineText, isFirstLine, whileRule.stack, lineTokens, whileRule.rule.whileCaptures, r4.captureIndices);
        lineTokens.produce(whileRule.stack, r4.captureIndices[0].end);
        anchorPosition = r4.captureIndices[0].end;
        if (r4.captureIndices[0].end > linePos) {
          linePos = r4.captureIndices[0].end;
          isFirstLine = false;
        }
      }
    } else {
      if (false) {
        console.log("  popping " + whileRule.rule.debugName + " - " + whileRule.rule.debugWhileRegExp);
      }
      stack = whileRule.stack.pop();
      break;
    }
  }
  return { stack, linePos, anchorPosition, isFirstLine };
}
function matchRuleOrInjections(grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
  const matchResult = matchRule(grammar, lineText, isFirstLine, linePos, stack, anchorPosition);
  const injections = grammar.getInjections();
  if (injections.length === 0) {
    return matchResult;
  }
  const injectionResult = matchInjections(injections, grammar, lineText, isFirstLine, linePos, stack, anchorPosition);
  if (!injectionResult) {
    return matchResult;
  }
  if (!matchResult) {
    return injectionResult;
  }
  const matchResultScore = matchResult.captureIndices[0].start;
  const injectionResultScore = injectionResult.captureIndices[0].start;
  if (injectionResultScore < matchResultScore || injectionResult.priorityMatch && injectionResultScore === matchResultScore) {
    return injectionResult;
  }
  return matchResult;
}
function matchRule(grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
  const rule = stack.getRule(grammar);
  const { ruleScanner, findOptions } = prepareRuleSearch(rule, grammar, stack.endRule, isFirstLine, linePos === anchorPosition);
  const r4 = ruleScanner.findNextMatchSync(lineText, linePos, findOptions);
  if (r4) {
    return {
      captureIndices: r4.captureIndices,
      matchedRuleId: r4.ruleId
    };
  }
  return null;
}
function matchInjections(injections, grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
  let bestMatchRating = Number.MAX_VALUE;
  let bestMatchCaptureIndices = null;
  let bestMatchRuleId;
  let bestMatchResultPriority = 0;
  const scopes = stack.contentNameScopesList.getScopeNames();
  for (let i2 = 0, len = injections.length; i2 < len; i2++) {
    const injection = injections[i2];
    if (!injection.matcher(scopes)) {
      continue;
    }
    const rule = grammar.getRule(injection.ruleId);
    const { ruleScanner, findOptions } = prepareRuleSearch(rule, grammar, null, isFirstLine, linePos === anchorPosition);
    const matchResult = ruleScanner.findNextMatchSync(lineText, linePos, findOptions);
    if (!matchResult) {
      continue;
    }
    if (false) {
      console.log(`  matched injection: ${injection.debugSelector}`);
      console.log(ruleScanner.toString());
    }
    const matchRating = matchResult.captureIndices[0].start;
    if (matchRating >= bestMatchRating) {
      continue;
    }
    bestMatchRating = matchRating;
    bestMatchCaptureIndices = matchResult.captureIndices;
    bestMatchRuleId = matchResult.ruleId;
    bestMatchResultPriority = injection.priority;
    if (bestMatchRating === linePos) {
      break;
    }
  }
  if (bestMatchCaptureIndices) {
    return {
      priorityMatch: bestMatchResultPriority === -1,
      captureIndices: bestMatchCaptureIndices,
      matchedRuleId: bestMatchRuleId
    };
  }
  return null;
}
function prepareRuleSearch(rule, grammar, endRegexSource, allowA, allowG) {
  if (UseOnigurumaFindOptions) {
    const ruleScanner2 = rule.compile(grammar, endRegexSource);
    const findOptions = getFindOptions(allowA, allowG);
    return { ruleScanner: ruleScanner2, findOptions };
  }
  const ruleScanner = rule.compileAG(grammar, endRegexSource, allowA, allowG);
  return {
    ruleScanner,
    findOptions: 0
    /* None */
  };
}
function prepareRuleWhileSearch(rule, grammar, endRegexSource, allowA, allowG) {
  if (UseOnigurumaFindOptions) {
    const ruleScanner2 = rule.compileWhile(grammar, endRegexSource);
    const findOptions = getFindOptions(allowA, allowG);
    return { ruleScanner: ruleScanner2, findOptions };
  }
  const ruleScanner = rule.compileWhileAG(grammar, endRegexSource, allowA, allowG);
  return {
    ruleScanner,
    findOptions: 0
    /* None */
  };
}
function getFindOptions(allowA, allowG) {
  let options = 0;
  if (!allowA) {
    options |= 1;
  }
  if (!allowG) {
    options |= 4;
  }
  return options;
}
function handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, captures, captureIndices) {
  if (captures.length === 0) {
    return;
  }
  const lineTextContent = lineText.content;
  const len = Math.min(captures.length, captureIndices.length);
  const localStack = [];
  const maxEnd = captureIndices[0].end;
  for (let i2 = 0; i2 < len; i2++) {
    const captureRule = captures[i2];
    if (captureRule === null) {
      continue;
    }
    const captureIndex = captureIndices[i2];
    if (captureIndex.length === 0) {
      continue;
    }
    if (captureIndex.start > maxEnd) {
      break;
    }
    while (localStack.length > 0 && localStack[localStack.length - 1].endPos <= captureIndex.start) {
      lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, localStack[localStack.length - 1].endPos);
      localStack.pop();
    }
    if (localStack.length > 0) {
      lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, captureIndex.start);
    } else {
      lineTokens.produce(stack, captureIndex.start);
    }
    if (captureRule.retokenizeCapturedWithRuleId) {
      const scopeName = captureRule.getName(lineTextContent, captureIndices);
      const nameScopesList = stack.contentNameScopesList.pushAttributed(scopeName, grammar);
      const contentName = captureRule.getContentName(lineTextContent, captureIndices);
      const contentNameScopesList = nameScopesList.pushAttributed(contentName, grammar);
      const stackClone = stack.push(captureRule.retokenizeCapturedWithRuleId, captureIndex.start, -1, false, null, nameScopesList, contentNameScopesList);
      const onigSubStr = grammar.createOnigString(lineTextContent.substring(0, captureIndex.end));
      _tokenizeString(
        grammar,
        onigSubStr,
        isFirstLine && captureIndex.start === 0,
        captureIndex.start,
        stackClone,
        lineTokens,
        false,
        /* no time limit */
        0
      );
      disposeOnigString(onigSubStr);
      continue;
    }
    const captureRuleScopeName = captureRule.getName(lineTextContent, captureIndices);
    if (captureRuleScopeName !== null) {
      const base = localStack.length > 0 ? localStack[localStack.length - 1].scopes : stack.contentNameScopesList;
      const captureRuleScopesList = base.pushAttributed(captureRuleScopeName, grammar);
      localStack.push(new LocalStackElement(captureRuleScopesList, captureIndex.end));
    }
  }
  while (localStack.length > 0) {
    lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, localStack[localStack.length - 1].endPos);
    localStack.pop();
  }
}
var LocalStackElement = class {
  scopes;
  endPos;
  constructor(scopes, endPos) {
    this.scopes = scopes;
    this.endPos = endPos;
  }
};
function createGrammar(scopeName, grammar, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors, grammarRepository, onigLib) {
  return new Grammar(
    scopeName,
    grammar,
    initialLanguage,
    embeddedLanguages,
    tokenTypes,
    balancedBracketSelectors,
    grammarRepository,
    onigLib
  );
}
function collectInjections(result, selector, rule, ruleFactoryHelper, grammar) {
  const matchers = createMatchers(selector, nameMatcher);
  const ruleId = RuleFactory.getCompiledRuleId(rule, ruleFactoryHelper, grammar.repository);
  for (const matcher of matchers) {
    result.push({
      debugSelector: selector,
      matcher: matcher.matcher,
      ruleId,
      grammar,
      priority: matcher.priority
    });
  }
}
function nameMatcher(identifers, scopes) {
  if (scopes.length < identifers.length) {
    return false;
  }
  let lastIndex = 0;
  return identifers.every((identifier) => {
    for (let i2 = lastIndex; i2 < scopes.length; i2++) {
      if (scopesAreMatching(scopes[i2], identifier)) {
        lastIndex = i2 + 1;
        return true;
      }
    }
    return false;
  });
}
function scopesAreMatching(thisScopeName, scopeName) {
  if (!thisScopeName) {
    return false;
  }
  if (thisScopeName === scopeName) {
    return true;
  }
  const len = scopeName.length;
  return thisScopeName.length > len && thisScopeName.substr(0, len) === scopeName && thisScopeName[len] === ".";
}
var Grammar = class {
  constructor(_rootScopeName, grammar, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors, grammarRepository, _onigLib) {
    this._rootScopeName = _rootScopeName;
    this.balancedBracketSelectors = balancedBracketSelectors;
    this._onigLib = _onigLib;
    this._basicScopeAttributesProvider = new BasicScopeAttributesProvider(
      initialLanguage,
      embeddedLanguages
    );
    this._rootId = -1;
    this._lastRuleId = 0;
    this._ruleId2desc = [null];
    this._includedGrammars = {};
    this._grammarRepository = grammarRepository;
    this._grammar = initGrammar(grammar, null);
    this._injections = null;
    this._tokenTypeMatchers = [];
    if (tokenTypes) {
      for (const selector of Object.keys(tokenTypes)) {
        const matchers = createMatchers(selector, nameMatcher);
        for (const matcher of matchers) {
          this._tokenTypeMatchers.push({
            matcher: matcher.matcher,
            type: tokenTypes[selector]
          });
        }
      }
    }
  }
  _rootId;
  _lastRuleId;
  _ruleId2desc;
  _includedGrammars;
  _grammarRepository;
  _grammar;
  _injections;
  _basicScopeAttributesProvider;
  _tokenTypeMatchers;
  get themeProvider() {
    return this._grammarRepository;
  }
  dispose() {
    for (const rule of this._ruleId2desc) {
      if (rule) {
        rule.dispose();
      }
    }
  }
  createOnigScanner(sources) {
    return this._onigLib.createOnigScanner(sources);
  }
  createOnigString(sources) {
    return this._onigLib.createOnigString(sources);
  }
  getMetadataForScope(scope) {
    return this._basicScopeAttributesProvider.getBasicScopeAttributes(scope);
  }
  _collectInjections() {
    const grammarRepository = {
      lookup: (scopeName2) => {
        if (scopeName2 === this._rootScopeName) {
          return this._grammar;
        }
        return this.getExternalGrammar(scopeName2);
      },
      injections: (scopeName2) => {
        return this._grammarRepository.injections(scopeName2);
      }
    };
    const result = [];
    const scopeName = this._rootScopeName;
    const grammar = grammarRepository.lookup(scopeName);
    if (grammar) {
      const rawInjections = grammar.injections;
      if (rawInjections) {
        for (let expression in rawInjections) {
          collectInjections(
            result,
            expression,
            rawInjections[expression],
            this,
            grammar
          );
        }
      }
      const injectionScopeNames = this._grammarRepository.injections(scopeName);
      if (injectionScopeNames) {
        injectionScopeNames.forEach((injectionScopeName) => {
          const injectionGrammar = this.getExternalGrammar(injectionScopeName);
          if (injectionGrammar) {
            const selector = injectionGrammar.injectionSelector;
            if (selector) {
              collectInjections(
                result,
                selector,
                injectionGrammar,
                this,
                injectionGrammar
              );
            }
          }
        });
      }
    }
    result.sort((i1, i2) => i1.priority - i2.priority);
    return result;
  }
  getInjections() {
    if (this._injections === null) {
      this._injections = this._collectInjections();
    }
    return this._injections;
  }
  registerRule(factory) {
    const id = ++this._lastRuleId;
    const result = factory(ruleIdFromNumber(id));
    this._ruleId2desc[id] = result;
    return result;
  }
  getRule(ruleId) {
    return this._ruleId2desc[ruleIdToNumber(ruleId)];
  }
  getExternalGrammar(scopeName, repository) {
    if (this._includedGrammars[scopeName]) {
      return this._includedGrammars[scopeName];
    } else if (this._grammarRepository) {
      const rawIncludedGrammar = this._grammarRepository.lookup(scopeName);
      if (rawIncludedGrammar) {
        this._includedGrammars[scopeName] = initGrammar(
          rawIncludedGrammar,
          repository && repository.$base
        );
        return this._includedGrammars[scopeName];
      }
    }
    return void 0;
  }
  tokenizeLine(lineText, prevState, timeLimit = 0) {
    const r4 = this._tokenize(lineText, prevState, false, timeLimit);
    return {
      tokens: r4.lineTokens.getResult(r4.ruleStack, r4.lineLength),
      ruleStack: r4.ruleStack,
      stoppedEarly: r4.stoppedEarly
    };
  }
  tokenizeLine2(lineText, prevState, timeLimit = 0) {
    const r4 = this._tokenize(lineText, prevState, true, timeLimit);
    return {
      tokens: r4.lineTokens.getBinaryResult(r4.ruleStack, r4.lineLength),
      ruleStack: r4.ruleStack,
      stoppedEarly: r4.stoppedEarly
    };
  }
  _tokenize(lineText, prevState, emitBinaryTokens, timeLimit) {
    if (this._rootId === -1) {
      this._rootId = RuleFactory.getCompiledRuleId(
        this._grammar.repository.$self,
        this,
        this._grammar.repository
      );
      this.getInjections();
    }
    let isFirstLine;
    if (!prevState || prevState === StateStackImpl.NULL) {
      isFirstLine = true;
      const rawDefaultMetadata = this._basicScopeAttributesProvider.getDefaultAttributes();
      const defaultStyle = this.themeProvider.getDefaults();
      const defaultMetadata = EncodedTokenMetadata.set(
        0,
        rawDefaultMetadata.languageId,
        rawDefaultMetadata.tokenType,
        null,
        defaultStyle.fontStyle,
        defaultStyle.foregroundId,
        defaultStyle.backgroundId
      );
      const rootScopeName = this.getRule(this._rootId).getName(
        null,
        null
      );
      let scopeList;
      if (rootScopeName) {
        scopeList = AttributedScopeStack.createRootAndLookUpScopeName(
          rootScopeName,
          defaultMetadata,
          this
        );
      } else {
        scopeList = AttributedScopeStack.createRoot(
          "unknown",
          defaultMetadata
        );
      }
      prevState = new StateStackImpl(
        null,
        this._rootId,
        -1,
        -1,
        false,
        null,
        scopeList,
        scopeList
      );
    } else {
      isFirstLine = false;
      prevState.reset();
    }
    lineText = lineText + "\n";
    const onigLineText = this.createOnigString(lineText);
    const lineLength = onigLineText.content.length;
    const lineTokens = new LineTokens(
      emitBinaryTokens,
      lineText,
      this._tokenTypeMatchers,
      this.balancedBracketSelectors
    );
    const r4 = _tokenizeString(
      this,
      onigLineText,
      isFirstLine,
      0,
      prevState,
      lineTokens,
      true,
      timeLimit
    );
    disposeOnigString(onigLineText);
    return {
      lineLength,
      lineTokens,
      ruleStack: r4.stack,
      stoppedEarly: r4.stoppedEarly
    };
  }
};
function initGrammar(grammar, base) {
  grammar = clone(grammar);
  grammar.repository = grammar.repository || {};
  grammar.repository.$self = {
    $vscodeTextmateLocation: grammar.$vscodeTextmateLocation,
    patterns: grammar.patterns,
    name: grammar.scopeName
  };
  grammar.repository.$base = base || grammar.repository.$self;
  return grammar;
}
var AttributedScopeStack = class _AttributedScopeStack {
  /**
   * Invariant:
   * ```
   * if (parent && !scopePath.extends(parent.scopePath)) {
   * 	throw new Error();
   * }
   * ```
   */
  constructor(parent, scopePath, tokenAttributes) {
    this.parent = parent;
    this.scopePath = scopePath;
    this.tokenAttributes = tokenAttributes;
  }
  static fromExtension(namesScopeList, contentNameScopesList) {
    let current = namesScopeList;
    let scopeNames = namesScopeList?.scopePath ?? null;
    for (const frame of contentNameScopesList) {
      scopeNames = ScopeStack.push(scopeNames, frame.scopeNames);
      current = new _AttributedScopeStack(current, scopeNames, frame.encodedTokenAttributes);
    }
    return current;
  }
  static createRoot(scopeName, tokenAttributes) {
    return new _AttributedScopeStack(null, new ScopeStack(null, scopeName), tokenAttributes);
  }
  static createRootAndLookUpScopeName(scopeName, tokenAttributes, grammar) {
    const rawRootMetadata = grammar.getMetadataForScope(scopeName);
    const scopePath = new ScopeStack(null, scopeName);
    const rootStyle = grammar.themeProvider.themeMatch(scopePath);
    const resolvedTokenAttributes = _AttributedScopeStack.mergeAttributes(
      tokenAttributes,
      rawRootMetadata,
      rootStyle
    );
    return new _AttributedScopeStack(null, scopePath, resolvedTokenAttributes);
  }
  get scopeName() {
    return this.scopePath.scopeName;
  }
  toString() {
    return this.getScopeNames().join(" ");
  }
  equals(other) {
    return _AttributedScopeStack.equals(this, other);
  }
  static equals(a2, b3) {
    do {
      if (a2 === b3) {
        return true;
      }
      if (!a2 && !b3) {
        return true;
      }
      if (!a2 || !b3) {
        return false;
      }
      if (a2.scopeName !== b3.scopeName || a2.tokenAttributes !== b3.tokenAttributes) {
        return false;
      }
      a2 = a2.parent;
      b3 = b3.parent;
    } while (true);
  }
  static mergeAttributes(existingTokenAttributes, basicScopeAttributes, styleAttributes) {
    let fontStyle = -1;
    let foreground = 0;
    let background = 0;
    if (styleAttributes !== null) {
      fontStyle = styleAttributes.fontStyle;
      foreground = styleAttributes.foregroundId;
      background = styleAttributes.backgroundId;
    }
    return EncodedTokenMetadata.set(
      existingTokenAttributes,
      basicScopeAttributes.languageId,
      basicScopeAttributes.tokenType,
      null,
      fontStyle,
      foreground,
      background
    );
  }
  pushAttributed(scopePath, grammar) {
    if (scopePath === null) {
      return this;
    }
    if (scopePath.indexOf(" ") === -1) {
      return _AttributedScopeStack._pushAttributed(this, scopePath, grammar);
    }
    const scopes = scopePath.split(/ /g);
    let result = this;
    for (const scope of scopes) {
      result = _AttributedScopeStack._pushAttributed(result, scope, grammar);
    }
    return result;
  }
  static _pushAttributed(target, scopeName, grammar) {
    const rawMetadata = grammar.getMetadataForScope(scopeName);
    const newPath = target.scopePath.push(scopeName);
    const scopeThemeMatchResult = grammar.themeProvider.themeMatch(newPath);
    const metadata = _AttributedScopeStack.mergeAttributes(
      target.tokenAttributes,
      rawMetadata,
      scopeThemeMatchResult
    );
    return new _AttributedScopeStack(target, newPath, metadata);
  }
  getScopeNames() {
    return this.scopePath.getSegments();
  }
  getExtensionIfDefined(base) {
    const result = [];
    let self = this;
    while (self && self !== base) {
      result.push({
        encodedTokenAttributes: self.tokenAttributes,
        scopeNames: self.scopePath.getExtensionIfDefined(self.parent?.scopePath ?? null)
      });
      self = self.parent;
    }
    return self === base ? result.reverse() : void 0;
  }
};
var StateStackImpl = class _StateStackImpl {
  /**
   * Invariant:
   * ```
   * if (contentNameScopesList !== nameScopesList && contentNameScopesList?.parent !== nameScopesList) {
   * 	throw new Error();
   * }
   * if (this.parent && !nameScopesList.extends(this.parent.contentNameScopesList)) {
   * 	throw new Error();
   * }
   * ```
   */
  constructor(parent, ruleId, enterPos, anchorPos, beginRuleCapturedEOL, endRule, nameScopesList, contentNameScopesList) {
    this.parent = parent;
    this.ruleId = ruleId;
    this.beginRuleCapturedEOL = beginRuleCapturedEOL;
    this.endRule = endRule;
    this.nameScopesList = nameScopesList;
    this.contentNameScopesList = contentNameScopesList;
    this.depth = this.parent ? this.parent.depth + 1 : 1;
    this._enterPos = enterPos;
    this._anchorPos = anchorPos;
  }
  _stackElementBrand = void 0;
  // TODO remove me
  static NULL = new _StateStackImpl(
    null,
    0,
    0,
    0,
    false,
    null,
    null,
    null
  );
  /**
   * The position on the current line where this state was pushed.
   * This is relevant only while tokenizing a line, to detect endless loops.
   * Its value is meaningless across lines.
   */
  _enterPos;
  /**
   * The captured anchor position when this stack element was pushed.
   * This is relevant only while tokenizing a line, to restore the anchor position when popping.
   * Its value is meaningless across lines.
   */
  _anchorPos;
  /**
   * The depth of the stack.
   */
  depth;
  equals(other) {
    if (other === null) {
      return false;
    }
    return _StateStackImpl._equals(this, other);
  }
  static _equals(a2, b3) {
    if (a2 === b3) {
      return true;
    }
    if (!this._structuralEquals(a2, b3)) {
      return false;
    }
    return AttributedScopeStack.equals(a2.contentNameScopesList, b3.contentNameScopesList);
  }
  /**
   * A structural equals check. Does not take into account `scopes`.
   */
  static _structuralEquals(a2, b3) {
    do {
      if (a2 === b3) {
        return true;
      }
      if (!a2 && !b3) {
        return true;
      }
      if (!a2 || !b3) {
        return false;
      }
      if (a2.depth !== b3.depth || a2.ruleId !== b3.ruleId || a2.endRule !== b3.endRule) {
        return false;
      }
      a2 = a2.parent;
      b3 = b3.parent;
    } while (true);
  }
  clone() {
    return this;
  }
  static _reset(el) {
    while (el) {
      el._enterPos = -1;
      el._anchorPos = -1;
      el = el.parent;
    }
  }
  reset() {
    _StateStackImpl._reset(this);
  }
  pop() {
    return this.parent;
  }
  safePop() {
    if (this.parent) {
      return this.parent;
    }
    return this;
  }
  push(ruleId, enterPos, anchorPos, beginRuleCapturedEOL, endRule, nameScopesList, contentNameScopesList) {
    return new _StateStackImpl(
      this,
      ruleId,
      enterPos,
      anchorPos,
      beginRuleCapturedEOL,
      endRule,
      nameScopesList,
      contentNameScopesList
    );
  }
  getEnterPos() {
    return this._enterPos;
  }
  getAnchorPos() {
    return this._anchorPos;
  }
  getRule(grammar) {
    return grammar.getRule(this.ruleId);
  }
  toString() {
    const r4 = [];
    this._writeString(r4, 0);
    return "[" + r4.join(",") + "]";
  }
  _writeString(res, outIndex) {
    if (this.parent) {
      outIndex = this.parent._writeString(res, outIndex);
    }
    res[outIndex++] = `(${this.ruleId}, ${this.nameScopesList?.toString()}, ${this.contentNameScopesList?.toString()})`;
    return outIndex;
  }
  withContentNameScopesList(contentNameScopeStack) {
    if (this.contentNameScopesList === contentNameScopeStack) {
      return this;
    }
    return this.parent.push(
      this.ruleId,
      this._enterPos,
      this._anchorPos,
      this.beginRuleCapturedEOL,
      this.endRule,
      this.nameScopesList,
      contentNameScopeStack
    );
  }
  withEndRule(endRule) {
    if (this.endRule === endRule) {
      return this;
    }
    return new _StateStackImpl(
      this.parent,
      this.ruleId,
      this._enterPos,
      this._anchorPos,
      this.beginRuleCapturedEOL,
      endRule,
      this.nameScopesList,
      this.contentNameScopesList
    );
  }
  // Used to warn of endless loops
  hasSameRuleAs(other) {
    let el = this;
    while (el && el._enterPos === other._enterPos) {
      if (el.ruleId === other.ruleId) {
        return true;
      }
      el = el.parent;
    }
    return false;
  }
  toStateStackFrame() {
    return {
      ruleId: ruleIdToNumber(this.ruleId),
      beginRuleCapturedEOL: this.beginRuleCapturedEOL,
      endRule: this.endRule,
      nameScopesList: this.nameScopesList?.getExtensionIfDefined(this.parent?.nameScopesList ?? null) ?? [],
      contentNameScopesList: this.contentNameScopesList?.getExtensionIfDefined(this.nameScopesList) ?? []
    };
  }
  static pushFrame(self, frame) {
    const namesScopeList = AttributedScopeStack.fromExtension(self?.nameScopesList ?? null, frame.nameScopesList);
    return new _StateStackImpl(
      self,
      ruleIdFromNumber(frame.ruleId),
      frame.enterPos ?? -1,
      frame.anchorPos ?? -1,
      frame.beginRuleCapturedEOL,
      frame.endRule,
      namesScopeList,
      AttributedScopeStack.fromExtension(namesScopeList, frame.contentNameScopesList)
    );
  }
};
var BalancedBracketSelectors = class {
  balancedBracketScopes;
  unbalancedBracketScopes;
  allowAny = false;
  constructor(balancedBracketScopes, unbalancedBracketScopes) {
    this.balancedBracketScopes = balancedBracketScopes.flatMap(
      (selector) => {
        if (selector === "*") {
          this.allowAny = true;
          return [];
        }
        return createMatchers(selector, nameMatcher).map((m3) => m3.matcher);
      }
    );
    this.unbalancedBracketScopes = unbalancedBracketScopes.flatMap(
      (selector) => createMatchers(selector, nameMatcher).map((m3) => m3.matcher)
    );
  }
  get matchesAlways() {
    return this.allowAny && this.unbalancedBracketScopes.length === 0;
  }
  get matchesNever() {
    return this.balancedBracketScopes.length === 0 && !this.allowAny;
  }
  match(scopes) {
    for (const excluder of this.unbalancedBracketScopes) {
      if (excluder(scopes)) {
        return false;
      }
    }
    for (const includer of this.balancedBracketScopes) {
      if (includer(scopes)) {
        return true;
      }
    }
    return this.allowAny;
  }
};
var LineTokens = class {
  constructor(emitBinaryTokens, lineText, tokenTypeOverrides, balancedBracketSelectors) {
    this.balancedBracketSelectors = balancedBracketSelectors;
    this._emitBinaryTokens = emitBinaryTokens;
    this._tokenTypeOverrides = tokenTypeOverrides;
    if (false) {
      this._lineText = lineText;
    } else {
      this._lineText = null;
    }
    this._tokens = [];
    this._binaryTokens = [];
    this._lastTokenEndIndex = 0;
  }
  _emitBinaryTokens;
  /**
   * defined only if `false`.
   */
  _lineText;
  /**
   * used only if `_emitBinaryTokens` is false.
   */
  _tokens;
  /**
   * used only if `_emitBinaryTokens` is true.
   */
  _binaryTokens;
  _lastTokenEndIndex;
  _tokenTypeOverrides;
  produce(stack, endIndex) {
    this.produceFromScopes(stack.contentNameScopesList, endIndex);
  }
  produceFromScopes(scopesList, endIndex) {
    if (this._lastTokenEndIndex >= endIndex) {
      return;
    }
    if (this._emitBinaryTokens) {
      let metadata = scopesList?.tokenAttributes ?? 0;
      let containsBalancedBrackets = false;
      if (this.balancedBracketSelectors?.matchesAlways) {
        containsBalancedBrackets = true;
      }
      if (this._tokenTypeOverrides.length > 0 || this.balancedBracketSelectors && !this.balancedBracketSelectors.matchesAlways && !this.balancedBracketSelectors.matchesNever) {
        const scopes2 = scopesList?.getScopeNames() ?? [];
        for (const tokenType of this._tokenTypeOverrides) {
          if (tokenType.matcher(scopes2)) {
            metadata = EncodedTokenMetadata.set(
              metadata,
              0,
              toOptionalTokenType(tokenType.type),
              null,
              -1,
              0,
              0
            );
          }
        }
        if (this.balancedBracketSelectors) {
          containsBalancedBrackets = this.balancedBracketSelectors.match(scopes2);
        }
      }
      if (containsBalancedBrackets) {
        metadata = EncodedTokenMetadata.set(
          metadata,
          0,
          8,
          containsBalancedBrackets,
          -1,
          0,
          0
        );
      }
      if (this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === metadata) {
        this._lastTokenEndIndex = endIndex;
        return;
      }
      this._binaryTokens.push(this._lastTokenEndIndex);
      this._binaryTokens.push(metadata);
      this._lastTokenEndIndex = endIndex;
      return;
    }
    const scopes = scopesList?.getScopeNames() ?? [];
    this._tokens.push({
      startIndex: this._lastTokenEndIndex,
      endIndex,
      // value: lineText.substring(lastTokenEndIndex, endIndex),
      scopes
    });
    this._lastTokenEndIndex = endIndex;
  }
  getResult(stack, lineLength) {
    if (this._tokens.length > 0 && this._tokens[this._tokens.length - 1].startIndex === lineLength - 1) {
      this._tokens.pop();
    }
    if (this._tokens.length === 0) {
      this._lastTokenEndIndex = -1;
      this.produce(stack, lineLength);
      this._tokens[this._tokens.length - 1].startIndex = 0;
    }
    return this._tokens;
  }
  getBinaryResult(stack, lineLength) {
    if (this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 2] === lineLength - 1) {
      this._binaryTokens.pop();
      this._binaryTokens.pop();
    }
    if (this._binaryTokens.length === 0) {
      this._lastTokenEndIndex = -1;
      this.produce(stack, lineLength);
      this._binaryTokens[this._binaryTokens.length - 2] = 0;
    }
    const result = new Uint32Array(this._binaryTokens.length);
    for (let i2 = 0, len = this._binaryTokens.length; i2 < len; i2++) {
      result[i2] = this._binaryTokens[i2];
    }
    return result;
  }
};
var SyncRegistry = class {
  constructor(theme, _onigLib) {
    this._onigLib = _onigLib;
    this._theme = theme;
  }
  _grammars = /* @__PURE__ */ new Map();
  _rawGrammars = /* @__PURE__ */ new Map();
  _injectionGrammars = /* @__PURE__ */ new Map();
  _theme;
  dispose() {
    for (const grammar of this._grammars.values()) {
      grammar.dispose();
    }
  }
  setTheme(theme) {
    this._theme = theme;
  }
  getColorMap() {
    return this._theme.getColorMap();
  }
  /**
   * Add `grammar` to registry and return a list of referenced scope names
   */
  addGrammar(grammar, injectionScopeNames) {
    this._rawGrammars.set(grammar.scopeName, grammar);
    if (injectionScopeNames) {
      this._injectionGrammars.set(grammar.scopeName, injectionScopeNames);
    }
  }
  /**
   * Lookup a raw grammar.
   */
  lookup(scopeName) {
    return this._rawGrammars.get(scopeName);
  }
  /**
   * Returns the injections for the given grammar
   */
  injections(targetScope) {
    return this._injectionGrammars.get(targetScope);
  }
  /**
   * Get the default theme settings
   */
  getDefaults() {
    return this._theme.getDefaults();
  }
  /**
   * Match a scope in the theme.
   */
  themeMatch(scopePath) {
    return this._theme.match(scopePath);
  }
  /**
   * Lookup a grammar.
   */
  grammarForScopeName(scopeName, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors) {
    if (!this._grammars.has(scopeName)) {
      let rawGrammar = this._rawGrammars.get(scopeName);
      if (!rawGrammar) {
        return null;
      }
      this._grammars.set(scopeName, createGrammar(
        scopeName,
        rawGrammar,
        initialLanguage,
        embeddedLanguages,
        tokenTypes,
        balancedBracketSelectors,
        this,
        this._onigLib
      ));
    }
    return this._grammars.get(scopeName);
  }
};
var Registry = class {
  _options;
  _syncRegistry;
  _ensureGrammarCache;
  constructor(options) {
    this._options = options;
    this._syncRegistry = new SyncRegistry(
      Theme.createFromRawTheme(options.theme, options.colorMap),
      options.onigLib
    );
    this._ensureGrammarCache = /* @__PURE__ */ new Map();
  }
  dispose() {
    this._syncRegistry.dispose();
  }
  /**
   * Change the theme. Once called, no previous `ruleStack` should be used anymore.
   */
  setTheme(theme, colorMap) {
    this._syncRegistry.setTheme(Theme.createFromRawTheme(theme, colorMap));
  }
  /**
   * Returns a lookup array for color ids.
   */
  getColorMap() {
    return this._syncRegistry.getColorMap();
  }
  /**
   * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
   * Please do not use language id 0.
   */
  loadGrammarWithEmbeddedLanguages(initialScopeName, initialLanguage, embeddedLanguages) {
    return this.loadGrammarWithConfiguration(initialScopeName, initialLanguage, { embeddedLanguages });
  }
  /**
   * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
   * Please do not use language id 0.
   */
  loadGrammarWithConfiguration(initialScopeName, initialLanguage, configuration) {
    return this._loadGrammar(
      initialScopeName,
      initialLanguage,
      configuration.embeddedLanguages,
      configuration.tokenTypes,
      new BalancedBracketSelectors(
        configuration.balancedBracketSelectors || [],
        configuration.unbalancedBracketSelectors || []
      )
    );
  }
  /**
   * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
   */
  loadGrammar(initialScopeName) {
    return this._loadGrammar(initialScopeName, 0, null, null, null);
  }
  _loadGrammar(initialScopeName, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors) {
    const dependencyProcessor = new ScopeDependencyProcessor(this._syncRegistry, initialScopeName);
    while (dependencyProcessor.Q.length > 0) {
      dependencyProcessor.Q.map((request) => this._loadSingleGrammar(request.scopeName));
      dependencyProcessor.processQueue();
    }
    return this._grammarForScopeName(
      initialScopeName,
      initialLanguage,
      embeddedLanguages,
      tokenTypes,
      balancedBracketSelectors
    );
  }
  _loadSingleGrammar(scopeName) {
    if (!this._ensureGrammarCache.has(scopeName)) {
      this._doLoadSingleGrammar(scopeName);
      this._ensureGrammarCache.set(scopeName, true);
    }
  }
  _doLoadSingleGrammar(scopeName) {
    const grammar = this._options.loadGrammar(scopeName);
    if (grammar) {
      const injections = typeof this._options.getInjections === "function" ? this._options.getInjections(scopeName) : void 0;
      this._syncRegistry.addGrammar(grammar, injections);
    }
  }
  /**
   * Adds a rawGrammar.
   */
  addGrammar(rawGrammar, injections = [], initialLanguage = 0, embeddedLanguages = null) {
    this._syncRegistry.addGrammar(rawGrammar, injections);
    return this._grammarForScopeName(rawGrammar.scopeName, initialLanguage, embeddedLanguages);
  }
  /**
   * Get the grammar for `scopeName`. The grammar must first be created via `loadGrammar` or `addGrammar`.
   */
  _grammarForScopeName(scopeName, initialLanguage = 0, embeddedLanguages = null, tokenTypes = null, balancedBracketSelectors = null) {
    return this._syncRegistry.grammarForScopeName(
      scopeName,
      initialLanguage,
      embeddedLanguages,
      tokenTypes,
      balancedBracketSelectors
    );
  }
};
var INITIAL = StateStackImpl.NULL;

// node_modules/html-void-elements/index.js
var htmlVoidElements = [
  "area",
  "base",
  "basefont",
  "bgsound",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "image",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
];

// node_modules/property-information/lib/util/schema.js
var Schema = class {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(property, normal, space) {
    this.normal = normal;
    this.property = property;
    if (space) {
      this.space = space;
    }
  }
};
Schema.prototype.normal = {};
Schema.prototype.property = {};
Schema.prototype.space = void 0;

// node_modules/property-information/lib/util/merge.js
function merge(definitions, space) {
  const property = {};
  const normal = {};
  for (const definition of definitions) {
    Object.assign(property, definition.property);
    Object.assign(normal, definition.normal);
  }
  return new Schema(property, normal, space);
}

// node_modules/property-information/lib/normalize.js
function normalize(value) {
  return value.toLowerCase();
}

// node_modules/property-information/lib/util/info.js
var Info = class {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(property, attribute) {
    this.attribute = attribute;
    this.property = property;
  }
};
Info.prototype.attribute = "";
Info.prototype.booleanish = false;
Info.prototype.boolean = false;
Info.prototype.commaOrSpaceSeparated = false;
Info.prototype.commaSeparated = false;
Info.prototype.defined = false;
Info.prototype.mustUseProperty = false;
Info.prototype.number = false;
Info.prototype.overloadedBoolean = false;
Info.prototype.property = "";
Info.prototype.spaceSeparated = false;
Info.prototype.space = void 0;

// node_modules/property-information/lib/util/types.js
var types_exports = {};
__export(types_exports, {
  boolean: () => boolean,
  booleanish: () => booleanish,
  commaOrSpaceSeparated: () => commaOrSpaceSeparated,
  commaSeparated: () => commaSeparated,
  number: () => number,
  overloadedBoolean: () => overloadedBoolean,
  spaceSeparated: () => spaceSeparated
});
var powers = 0;
var boolean = increment();
var booleanish = increment();
var overloadedBoolean = increment();
var number = increment();
var spaceSeparated = increment();
var commaSeparated = increment();
var commaOrSpaceSeparated = increment();
function increment() {
  return 2 ** ++powers;
}

// node_modules/property-information/lib/util/defined-info.js
var checks = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(types_exports)
);
var DefinedInfo = class extends Info {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(property, attribute, mask, space) {
    let index = -1;
    super(property, attribute);
    mark(this, "space", space);
    if (typeof mask === "number") {
      while (++index < checks.length) {
        const check = checks[index];
        mark(this, checks[index], (mask & types_exports[check]) === types_exports[check]);
      }
    }
  }
};
DefinedInfo.prototype.defined = true;
function mark(values, key2, value) {
  if (value) {
    values[key2] = value;
  }
}

// node_modules/property-information/lib/util/create.js
function create(definition) {
  const properties = {};
  const normals = {};
  for (const [property, value] of Object.entries(definition.properties)) {
    const info = new DefinedInfo(
      property,
      definition.transform(definition.attributes || {}, property),
      value,
      definition.space
    );
    if (definition.mustUseProperty && definition.mustUseProperty.includes(property)) {
      info.mustUseProperty = true;
    }
    properties[property] = info;
    normals[normalize(property)] = property;
    normals[normalize(info.attribute)] = property;
  }
  return new Schema(properties, normals, definition.space);
}

// node_modules/property-information/lib/aria.js
var aria = create({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  },
  transform(_2, property) {
    return property === "role" ? property : "aria-" + property.slice(4).toLowerCase();
  }
});

// node_modules/property-information/lib/util/case-sensitive-transform.js
function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute;
}

// node_modules/property-information/lib/util/case-insensitive-transform.js
function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase());
}

// node_modules/property-information/lib/html.js
var html = create({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    blocking: spaceSeparated,
    capture: null,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: overloadedBoolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: boolean,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shadowRootClonable: boolean,
    shadowRootDelegatesFocus: boolean,
    shadowRootMode: null,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: spaceSeparated,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: number,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: number,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: boolean,
    // Lists. Use CSS to reduce space between items instead
    declare: boolean,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: number,
    // `<img>` and `<object>`
    leftMargin: number,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: number,
    // `<body>`
    marginWidth: number,
    // `<body>`
    noResize: boolean,
    // `<frame>`
    noHref: boolean,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: boolean,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: boolean,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: number,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: booleanish,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: number,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: number,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean,
    disableRemotePlayback: boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: caseInsensitiveTransform
});

// node_modules/property-information/lib/svg.js
var svg = create({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number,
    amplitude: number,
    arabicForm: null,
    ascent: number,
    attributeName: null,
    attributeType: null,
    azimuth: number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number,
    by: null,
    calcMode: null,
    capHeight: number,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number,
    diffuseConstant: number,
    direction: null,
    display: null,
    dur: null,
    divisor: number,
    dominantBaseline: null,
    download: boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number,
    horizOriginX: number,
    horizOriginY: number,
    id: null,
    ideographic: number,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: number,
    k: number,
    k1: number,
    k2: number,
    k3: number,
    k4: number,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number,
    overlineThickness: number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number,
    pointsAtY: number,
    pointsAtZ: number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number,
    specularExponent: number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number,
    strikethroughThickness: number,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number,
    strokeOpacity: number,
    strokeWidth: null,
    style: null,
    surfaceScale: number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number,
    tableValues: null,
    target: null,
    targetX: number,
    targetY: number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: number,
    underlineThickness: number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number,
    values: null,
    vAlphabetic: number,
    vMathematical: number,
    vectorEffect: null,
    vHanging: number,
    vIdeographic: number,
    version: null,
    vertAdvY: number,
    vertOriginX: number,
    vertOriginY: number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: caseSensitiveTransform
});

// node_modules/property-information/lib/xlink.js
var xlink = create({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(_2, property) {
    return "xlink:" + property.slice(5).toLowerCase();
  }
});

// node_modules/property-information/lib/xmlns.js
var xmlns = create({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: caseInsensitiveTransform
});

// node_modules/property-information/lib/xml.js
var xml = create({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(_2, property) {
    return "xml:" + property.slice(3).toLowerCase();
  }
});

// node_modules/property-information/lib/find.js
var cap = /[A-Z]/g;
var dash = /-[a-z]/g;
var valid = /^data[-\w.:]+$/i;
function find(schema, value) {
  const normal = normalize(value);
  let property = value;
  let Type = Info;
  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]];
  }
  if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
    if (value.charAt(4) === "-") {
      const rest = value.slice(5).replace(dash, camelcase);
      property = "data" + rest.charAt(0).toUpperCase() + rest.slice(1);
    } else {
      const rest = value.slice(4);
      if (!dash.test(rest)) {
        let dashes = rest.replace(cap, kebab);
        if (dashes.charAt(0) !== "-") {
          dashes = "-" + dashes;
        }
        value = "data" + dashes;
      }
    }
    Type = DefinedInfo;
  }
  return new Type(property, value);
}
function kebab($0) {
  return "-" + $0.toLowerCase();
}
function camelcase($0) {
  return $0.charAt(1).toUpperCase();
}

// node_modules/property-information/index.js
var html2 = merge([aria, html, xlink, xmlns, xml], "html");
var svg2 = merge([aria, svg, xlink, xmlns, xml], "svg");

// node_modules/zwitch/index.js
var own = {}.hasOwnProperty;
function zwitch(key2, options) {
  const settings = options || {};
  function one2(value, ...parameters) {
    let fn2 = one2.invalid;
    const handlers = one2.handlers;
    if (value && own.call(value, key2)) {
      const id = String(value[key2]);
      fn2 = own.call(handlers, id) ? handlers[id] : one2.unknown;
    }
    if (fn2) {
      return fn2.call(this, value, ...parameters);
    }
  }
  one2.handlers = settings.handlers || {};
  one2.invalid = settings.invalid;
  one2.unknown = settings.unknown;
  return one2;
}

// node_modules/stringify-entities/lib/core.js
var defaultSubsetRegex = /["&'<>`]/g;
var surrogatePairsRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
var controlCharactersRegex = (
  // eslint-disable-next-line no-control-regex, unicorn/no-hex-escape
  /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g
);
var regexEscapeRegex = /[|\\{}()[\]^$+*?.]/g;
var subsetToRegexCache = /* @__PURE__ */ new WeakMap();
function core(value, options) {
  value = value.replace(
    options.subset ? charactersToExpressionCached(options.subset) : defaultSubsetRegex,
    basic
  );
  if (options.subset || options.escapeOnly) {
    return value;
  }
  return value.replace(surrogatePairsRegex, surrogate).replace(controlCharactersRegex, basic);
  function surrogate(pair, index, all2) {
    return options.format(
      (pair.charCodeAt(0) - 55296) * 1024 + pair.charCodeAt(1) - 56320 + 65536,
      all2.charCodeAt(index + 2),
      options
    );
  }
  function basic(character, index, all2) {
    return options.format(
      character.charCodeAt(0),
      all2.charCodeAt(index + 1),
      options
    );
  }
}
function charactersToExpressionCached(subset) {
  let cached = subsetToRegexCache.get(subset);
  if (!cached) {
    cached = charactersToExpression(subset);
    subsetToRegexCache.set(subset, cached);
  }
  return cached;
}
function charactersToExpression(subset) {
  const groups = [];
  let index = -1;
  while (++index < subset.length) {
    groups.push(subset[index].replace(regexEscapeRegex, "\\$&"));
  }
  return new RegExp("(?:" + groups.join("|") + ")", "g");
}

// node_modules/stringify-entities/lib/util/to-hexadecimal.js
var hexadecimalRegex = /[\dA-Fa-f]/;
function toHexadecimal(code, next, omit) {
  const value = "&#x" + code.toString(16).toUpperCase();
  return omit && next && !hexadecimalRegex.test(String.fromCharCode(next)) ? value : value + ";";
}

// node_modules/stringify-entities/lib/util/to-decimal.js
var decimalRegex = /\d/;
function toDecimal(code, next, omit) {
  const value = "&#" + String(code);
  return omit && next && !decimalRegex.test(String.fromCharCode(next)) ? value : value + ";";
}

// node_modules/character-entities-legacy/index.js
var characterEntitiesLegacy = [
  "AElig",
  "AMP",
  "Aacute",
  "Acirc",
  "Agrave",
  "Aring",
  "Atilde",
  "Auml",
  "COPY",
  "Ccedil",
  "ETH",
  "Eacute",
  "Ecirc",
  "Egrave",
  "Euml",
  "GT",
  "Iacute",
  "Icirc",
  "Igrave",
  "Iuml",
  "LT",
  "Ntilde",
  "Oacute",
  "Ocirc",
  "Ograve",
  "Oslash",
  "Otilde",
  "Ouml",
  "QUOT",
  "REG",
  "THORN",
  "Uacute",
  "Ucirc",
  "Ugrave",
  "Uuml",
  "Yacute",
  "aacute",
  "acirc",
  "acute",
  "aelig",
  "agrave",
  "amp",
  "aring",
  "atilde",
  "auml",
  "brvbar",
  "ccedil",
  "cedil",
  "cent",
  "copy",
  "curren",
  "deg",
  "divide",
  "eacute",
  "ecirc",
  "egrave",
  "eth",
  "euml",
  "frac12",
  "frac14",
  "frac34",
  "gt",
  "iacute",
  "icirc",
  "iexcl",
  "igrave",
  "iquest",
  "iuml",
  "laquo",
  "lt",
  "macr",
  "micro",
  "middot",
  "nbsp",
  "not",
  "ntilde",
  "oacute",
  "ocirc",
  "ograve",
  "ordf",
  "ordm",
  "oslash",
  "otilde",
  "ouml",
  "para",
  "plusmn",
  "pound",
  "quot",
  "raquo",
  "reg",
  "sect",
  "shy",
  "sup1",
  "sup2",
  "sup3",
  "szlig",
  "thorn",
  "times",
  "uacute",
  "ucirc",
  "ugrave",
  "uml",
  "uuml",
  "yacute",
  "yen",
  "yuml"
];

// node_modules/character-entities-html4/index.js
var characterEntitiesHtml4 = {
  nbsp: " ",
  iexcl: "¡",
  cent: "¢",
  pound: "£",
  curren: "¤",
  yen: "¥",
  brvbar: "¦",
  sect: "§",
  uml: "¨",
  copy: "©",
  ordf: "ª",
  laquo: "«",
  not: "¬",
  shy: "­",
  reg: "®",
  macr: "¯",
  deg: "°",
  plusmn: "±",
  sup2: "²",
  sup3: "³",
  acute: "´",
  micro: "µ",
  para: "¶",
  middot: "·",
  cedil: "¸",
  sup1: "¹",
  ordm: "º",
  raquo: "»",
  frac14: "¼",
  frac12: "½",
  frac34: "¾",
  iquest: "¿",
  Agrave: "À",
  Aacute: "Á",
  Acirc: "Â",
  Atilde: "Ã",
  Auml: "Ä",
  Aring: "Å",
  AElig: "Æ",
  Ccedil: "Ç",
  Egrave: "È",
  Eacute: "É",
  Ecirc: "Ê",
  Euml: "Ë",
  Igrave: "Ì",
  Iacute: "Í",
  Icirc: "Î",
  Iuml: "Ï",
  ETH: "Ð",
  Ntilde: "Ñ",
  Ograve: "Ò",
  Oacute: "Ó",
  Ocirc: "Ô",
  Otilde: "Õ",
  Ouml: "Ö",
  times: "×",
  Oslash: "Ø",
  Ugrave: "Ù",
  Uacute: "Ú",
  Ucirc: "Û",
  Uuml: "Ü",
  Yacute: "Ý",
  THORN: "Þ",
  szlig: "ß",
  agrave: "à",
  aacute: "á",
  acirc: "â",
  atilde: "ã",
  auml: "ä",
  aring: "å",
  aelig: "æ",
  ccedil: "ç",
  egrave: "è",
  eacute: "é",
  ecirc: "ê",
  euml: "ë",
  igrave: "ì",
  iacute: "í",
  icirc: "î",
  iuml: "ï",
  eth: "ð",
  ntilde: "ñ",
  ograve: "ò",
  oacute: "ó",
  ocirc: "ô",
  otilde: "õ",
  ouml: "ö",
  divide: "÷",
  oslash: "ø",
  ugrave: "ù",
  uacute: "ú",
  ucirc: "û",
  uuml: "ü",
  yacute: "ý",
  thorn: "þ",
  yuml: "ÿ",
  fnof: "ƒ",
  Alpha: "Α",
  Beta: "Β",
  Gamma: "Γ",
  Delta: "Δ",
  Epsilon: "Ε",
  Zeta: "Ζ",
  Eta: "Η",
  Theta: "Θ",
  Iota: "Ι",
  Kappa: "Κ",
  Lambda: "Λ",
  Mu: "Μ",
  Nu: "Ν",
  Xi: "Ξ",
  Omicron: "Ο",
  Pi: "Π",
  Rho: "Ρ",
  Sigma: "Σ",
  Tau: "Τ",
  Upsilon: "Υ",
  Phi: "Φ",
  Chi: "Χ",
  Psi: "Ψ",
  Omega: "Ω",
  alpha: "α",
  beta: "β",
  gamma: "γ",
  delta: "δ",
  epsilon: "ε",
  zeta: "ζ",
  eta: "η",
  theta: "θ",
  iota: "ι",
  kappa: "κ",
  lambda: "λ",
  mu: "μ",
  nu: "ν",
  xi: "ξ",
  omicron: "ο",
  pi: "π",
  rho: "ρ",
  sigmaf: "ς",
  sigma: "σ",
  tau: "τ",
  upsilon: "υ",
  phi: "φ",
  chi: "χ",
  psi: "ψ",
  omega: "ω",
  thetasym: "ϑ",
  upsih: "ϒ",
  piv: "ϖ",
  bull: "•",
  hellip: "…",
  prime: "′",
  Prime: "″",
  oline: "‾",
  frasl: "⁄",
  weierp: "℘",
  image: "ℑ",
  real: "ℜ",
  trade: "™",
  alefsym: "ℵ",
  larr: "←",
  uarr: "↑",
  rarr: "→",
  darr: "↓",
  harr: "↔",
  crarr: "↵",
  lArr: "⇐",
  uArr: "⇑",
  rArr: "⇒",
  dArr: "⇓",
  hArr: "⇔",
  forall: "∀",
  part: "∂",
  exist: "∃",
  empty: "∅",
  nabla: "∇",
  isin: "∈",
  notin: "∉",
  ni: "∋",
  prod: "∏",
  sum: "∑",
  minus: "−",
  lowast: "∗",
  radic: "√",
  prop: "∝",
  infin: "∞",
  ang: "∠",
  and: "∧",
  or: "∨",
  cap: "∩",
  cup: "∪",
  int: "∫",
  there4: "∴",
  sim: "∼",
  cong: "≅",
  asymp: "≈",
  ne: "≠",
  equiv: "≡",
  le: "≤",
  ge: "≥",
  sub: "⊂",
  sup: "⊃",
  nsub: "⊄",
  sube: "⊆",
  supe: "⊇",
  oplus: "⊕",
  otimes: "⊗",
  perp: "⊥",
  sdot: "⋅",
  lceil: "⌈",
  rceil: "⌉",
  lfloor: "⌊",
  rfloor: "⌋",
  lang: "〈",
  rang: "〉",
  loz: "◊",
  spades: "♠",
  clubs: "♣",
  hearts: "♥",
  diams: "♦",
  quot: '"',
  amp: "&",
  lt: "<",
  gt: ">",
  OElig: "Œ",
  oelig: "œ",
  Scaron: "Š",
  scaron: "š",
  Yuml: "Ÿ",
  circ: "ˆ",
  tilde: "˜",
  ensp: " ",
  emsp: " ",
  thinsp: " ",
  zwnj: "‌",
  zwj: "‍",
  lrm: "‎",
  rlm: "‏",
  ndash: "–",
  mdash: "—",
  lsquo: "‘",
  rsquo: "’",
  sbquo: "‚",
  ldquo: "“",
  rdquo: "”",
  bdquo: "„",
  dagger: "†",
  Dagger: "‡",
  permil: "‰",
  lsaquo: "‹",
  rsaquo: "›",
  euro: "€"
};

// node_modules/stringify-entities/lib/constant/dangerous.js
var dangerous = [
  "cent",
  "copy",
  "divide",
  "gt",
  "lt",
  "not",
  "para",
  "times"
];

// node_modules/stringify-entities/lib/util/to-named.js
var own2 = {}.hasOwnProperty;
var characters = {};
var key;
for (key in characterEntitiesHtml4) {
  if (own2.call(characterEntitiesHtml4, key)) {
    characters[characterEntitiesHtml4[key]] = key;
  }
}
var notAlphanumericRegex = /[^\dA-Za-z]/;
function toNamed(code, next, omit, attribute) {
  const character = String.fromCharCode(code);
  if (own2.call(characters, character)) {
    const name = characters[character];
    const value = "&" + name;
    if (omit && characterEntitiesLegacy.includes(name) && !dangerous.includes(name) && (!attribute || next && next !== 61 && notAlphanumericRegex.test(String.fromCharCode(next)))) {
      return value;
    }
    return value + ";";
  }
  return "";
}

// node_modules/stringify-entities/lib/util/format-smart.js
function formatSmart(code, next, options) {
  let numeric = toHexadecimal(code, next, options.omitOptionalSemicolons);
  let named;
  if (options.useNamedReferences || options.useShortestReferences) {
    named = toNamed(
      code,
      next,
      options.omitOptionalSemicolons,
      options.attribute
    );
  }
  if ((options.useShortestReferences || !named) && options.useShortestReferences) {
    const decimal = toDecimal(code, next, options.omitOptionalSemicolons);
    if (decimal.length < numeric.length) {
      numeric = decimal;
    }
  }
  return named && (!options.useShortestReferences || named.length < numeric.length) ? named : numeric;
}

// node_modules/stringify-entities/lib/index.js
function stringifyEntities(value, options) {
  return core(value, Object.assign({ format: formatSmart }, options));
}

// node_modules/hast-util-to-html/lib/handle/comment.js
var htmlCommentRegex = /^>|^->|<!--|-->|--!>|<!-$/g;
var bogusCommentEntitySubset = [">"];
var commentEntitySubset = ["<", ">"];
function comment(node, _1, _2, state) {
  return state.settings.bogusComments ? "<?" + stringifyEntities(
    node.value,
    Object.assign({}, state.settings.characterReferences, {
      subset: bogusCommentEntitySubset
    })
  ) + ">" : "<!--" + node.value.replace(htmlCommentRegex, encode) + "-->";
  function encode($0) {
    return stringifyEntities(
      $0,
      Object.assign({}, state.settings.characterReferences, {
        subset: commentEntitySubset
      })
    );
  }
}

// node_modules/hast-util-to-html/lib/handle/doctype.js
function doctype(_1, _2, _3, state) {
  return "<!" + (state.settings.upperDoctype ? "DOCTYPE" : "doctype") + (state.settings.tightDoctype ? "" : " ") + "html>";
}

// node_modules/ccount/index.js
function ccount(value, character) {
  const source = String(value);
  if (typeof character !== "string") {
    throw new TypeError("Expected character");
  }
  let count = 0;
  let index = source.indexOf(character);
  while (index !== -1) {
    count++;
    index = source.indexOf(character, index + character.length);
  }
  return count;
}

// node_modules/comma-separated-tokens/index.js
function stringify(values, options) {
  const settings = options || {};
  const input = values[values.length - 1] === "" ? [...values, ""] : values;
  return input.join(
    (settings.padRight ? " " : "") + "," + (settings.padLeft === false ? "" : " ")
  ).trim();
}

// node_modules/space-separated-tokens/index.js
function stringify2(values) {
  return values.join(" ").trim();
}

// node_modules/hast-util-whitespace/lib/index.js
var re = /[ \t\n\f\r]/g;
function whitespace(thing) {
  return typeof thing === "object" ? thing.type === "text" ? empty(thing.value) : false : empty(thing);
}
function empty(value) {
  return value.replace(re, "") === "";
}

// node_modules/hast-util-to-html/lib/omission/util/siblings.js
var siblingAfter = siblings(1);
var siblingBefore = siblings(-1);
var emptyChildren = [];
function siblings(increment2) {
  return sibling;
  function sibling(parent, index, includeWhitespace) {
    const siblings2 = parent ? parent.children : emptyChildren;
    let offset = (index || 0) + increment2;
    let next = siblings2[offset];
    if (!includeWhitespace) {
      while (next && whitespace(next)) {
        offset += increment2;
        next = siblings2[offset];
      }
    }
    return next;
  }
}

// node_modules/hast-util-to-html/lib/omission/omission.js
var own3 = {}.hasOwnProperty;
function omission(handlers) {
  return omit;
  function omit(node, index, parent) {
    return own3.call(handlers, node.tagName) && handlers[node.tagName](node, index, parent);
  }
}

// node_modules/hast-util-to-html/lib/omission/closing.js
var closing = omission({
  body,
  caption: headOrColgroupOrCaption,
  colgroup: headOrColgroupOrCaption,
  dd,
  dt,
  head: headOrColgroupOrCaption,
  html: html3,
  li,
  optgroup,
  option,
  p,
  rp: rubyElement,
  rt: rubyElement,
  tbody,
  td: cells,
  tfoot,
  th: cells,
  thead,
  tr
});
function headOrColgroupOrCaption(_2, index, parent) {
  const next = siblingAfter(parent, index, true);
  return !next || next.type !== "comment" && !(next.type === "text" && whitespace(next.value.charAt(0)));
}
function html3(_2, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || next.type !== "comment";
}
function body(_2, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || next.type !== "comment";
}
function p(_2, index, parent) {
  const next = siblingAfter(parent, index);
  return next ? next.type === "element" && (next.tagName === "address" || next.tagName === "article" || next.tagName === "aside" || next.tagName === "blockquote" || next.tagName === "details" || next.tagName === "div" || next.tagName === "dl" || next.tagName === "fieldset" || next.tagName === "figcaption" || next.tagName === "figure" || next.tagName === "footer" || next.tagName === "form" || next.tagName === "h1" || next.tagName === "h2" || next.tagName === "h3" || next.tagName === "h4" || next.tagName === "h5" || next.tagName === "h6" || next.tagName === "header" || next.tagName === "hgroup" || next.tagName === "hr" || next.tagName === "main" || next.tagName === "menu" || next.tagName === "nav" || next.tagName === "ol" || next.tagName === "p" || next.tagName === "pre" || next.tagName === "section" || next.tagName === "table" || next.tagName === "ul") : !parent || // Confusing parent.
  !(parent.type === "element" && (parent.tagName === "a" || parent.tagName === "audio" || parent.tagName === "del" || parent.tagName === "ins" || parent.tagName === "map" || parent.tagName === "noscript" || parent.tagName === "video"));
}
function li(_2, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || next.type === "element" && next.tagName === "li";
}
function dt(_2, index, parent) {
  const next = siblingAfter(parent, index);
  return Boolean(
    next && next.type === "element" && (next.tagName === "dt" || next.tagName === "dd")
  );
}
function dd(_2, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || next.type === "element" && (next.tagName === "dt" || next.tagName === "dd");
}
function rubyElement(_2, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || next.type === "element" && (next.tagName === "rp" || next.tagName === "rt");
}
function optgroup(_2, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || next.type === "element" && next.tagName === "optgroup";
}
function option(_2, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || next.type === "element" && (next.tagName === "option" || next.tagName === "optgroup");
}
function thead(_2, index, parent) {
  const next = siblingAfter(parent, index);
  return Boolean(
    next && next.type === "element" && (next.tagName === "tbody" || next.tagName === "tfoot")
  );
}
function tbody(_2, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || next.type === "element" && (next.tagName === "tbody" || next.tagName === "tfoot");
}
function tfoot(_2, index, parent) {
  return !siblingAfter(parent, index);
}
function tr(_2, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || next.type === "element" && next.tagName === "tr";
}
function cells(_2, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || next.type === "element" && (next.tagName === "td" || next.tagName === "th");
}

// node_modules/hast-util-to-html/lib/omission/opening.js
var opening = omission({
  body: body2,
  colgroup,
  head,
  html: html4,
  tbody: tbody2
});
function html4(node) {
  const head2 = siblingAfter(node, -1);
  return !head2 || head2.type !== "comment";
}
function head(node) {
  const seen = /* @__PURE__ */ new Set();
  for (const child2 of node.children) {
    if (child2.type === "element" && (child2.tagName === "base" || child2.tagName === "title")) {
      if (seen.has(child2.tagName)) return false;
      seen.add(child2.tagName);
    }
  }
  const child = node.children[0];
  return !child || child.type === "element";
}
function body2(node) {
  const head2 = siblingAfter(node, -1, true);
  return !head2 || head2.type !== "comment" && !(head2.type === "text" && whitespace(head2.value.charAt(0))) && !(head2.type === "element" && (head2.tagName === "meta" || head2.tagName === "link" || head2.tagName === "script" || head2.tagName === "style" || head2.tagName === "template"));
}
function colgroup(node, index, parent) {
  const previous = siblingBefore(parent, index);
  const head2 = siblingAfter(node, -1, true);
  if (parent && previous && previous.type === "element" && previous.tagName === "colgroup" && closing(previous, parent.children.indexOf(previous), parent)) {
    return false;
  }
  return Boolean(head2 && head2.type === "element" && head2.tagName === "col");
}
function tbody2(node, index, parent) {
  const previous = siblingBefore(parent, index);
  const head2 = siblingAfter(node, -1);
  if (parent && previous && previous.type === "element" && (previous.tagName === "thead" || previous.tagName === "tbody") && closing(previous, parent.children.indexOf(previous), parent)) {
    return false;
  }
  return Boolean(head2 && head2.type === "element" && head2.tagName === "tr");
}

// node_modules/hast-util-to-html/lib/handle/element.js
var constants = {
  // See: <https://html.spec.whatwg.org/#attribute-name-state>.
  name: [
    ["	\n\f\r &/=>".split(""), "	\n\f\r \"&'/=>`".split("")],
    [`\0	
\f\r "&'/<=>`.split(""), "\0	\n\f\r \"&'/<=>`".split("")]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(unquoted)-state>.
  unquoted: [
    ["	\n\f\r &>".split(""), "\0	\n\f\r \"&'<=>`".split("")],
    ["\0	\n\f\r \"&'<=>`".split(""), "\0	\n\f\r \"&'<=>`".split("")]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(single-quoted)-state>.
  single: [
    ["&'".split(""), "\"&'`".split("")],
    ["\0&'".split(""), "\0\"&'`".split("")]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(double-quoted)-state>.
  double: [
    ['"&'.split(""), "\"&'`".split("")],
    ['\0"&'.split(""), "\0\"&'`".split("")]
  ]
};
function element(node, index, parent, state) {
  const schema = state.schema;
  const omit = schema.space === "svg" ? false : state.settings.omitOptionalTags;
  let selfClosing = schema.space === "svg" ? state.settings.closeEmptyElements : state.settings.voids.includes(node.tagName.toLowerCase());
  const parts = [];
  let last;
  if (schema.space === "html" && node.tagName === "svg") {
    state.schema = svg2;
  }
  const attributes = serializeAttributes(state, node.properties);
  const content = state.all(
    schema.space === "html" && node.tagName === "template" ? node.content : node
  );
  state.schema = schema;
  if (content) selfClosing = false;
  if (attributes || !omit || !opening(node, index, parent)) {
    parts.push("<", node.tagName, attributes ? " " + attributes : "");
    if (selfClosing && (schema.space === "svg" || state.settings.closeSelfClosing)) {
      last = attributes.charAt(attributes.length - 1);
      if (!state.settings.tightSelfClosing || last === "/" || last && last !== '"' && last !== "'") {
        parts.push(" ");
      }
      parts.push("/");
    }
    parts.push(">");
  }
  parts.push(content);
  if (!selfClosing && (!omit || !closing(node, index, parent))) {
    parts.push("</" + node.tagName + ">");
  }
  return parts.join("");
}
function serializeAttributes(state, properties) {
  const values = [];
  let index = -1;
  let key2;
  if (properties) {
    for (key2 in properties) {
      if (properties[key2] !== null && properties[key2] !== void 0) {
        const value = serializeAttribute(state, key2, properties[key2]);
        if (value) values.push(value);
      }
    }
  }
  while (++index < values.length) {
    const last = state.settings.tightAttributes ? values[index].charAt(values[index].length - 1) : void 0;
    if (index !== values.length - 1 && last !== '"' && last !== "'") {
      values[index] += " ";
    }
  }
  return values.join("");
}
function serializeAttribute(state, key2, value) {
  const info = find(state.schema, key2);
  const x = state.settings.allowParseErrors && state.schema.space === "html" ? 0 : 1;
  const y2 = state.settings.allowDangerousCharacters ? 0 : 1;
  let quote = state.quote;
  let result;
  if (info.overloadedBoolean && (value === info.attribute || value === "")) {
    value = true;
  } else if ((info.boolean || info.overloadedBoolean) && (typeof value !== "string" || value === info.attribute || value === "")) {
    value = Boolean(value);
  }
  if (value === null || value === void 0 || value === false || typeof value === "number" && Number.isNaN(value)) {
    return "";
  }
  const name = stringifyEntities(
    info.attribute,
    Object.assign({}, state.settings.characterReferences, {
      // Always encode without parse errors in non-HTML.
      subset: constants.name[x][y2]
    })
  );
  if (value === true) return name;
  value = Array.isArray(value) ? (info.commaSeparated ? stringify : stringify2)(value, {
    padLeft: !state.settings.tightCommaSeparatedLists
  }) : String(value);
  if (state.settings.collapseEmptyAttributes && !value) return name;
  if (state.settings.preferUnquoted) {
    result = stringifyEntities(
      value,
      Object.assign({}, state.settings.characterReferences, {
        attribute: true,
        subset: constants.unquoted[x][y2]
      })
    );
  }
  if (result !== value) {
    if (state.settings.quoteSmart && ccount(value, quote) > ccount(value, state.alternative)) {
      quote = state.alternative;
    }
    result = quote + stringifyEntities(
      value,
      Object.assign({}, state.settings.characterReferences, {
        // Always encode without parse errors in non-HTML.
        subset: (quote === "'" ? constants.single : constants.double)[x][y2],
        attribute: true
      })
    ) + quote;
  }
  return name + (result ? "=" + result : result);
}

// node_modules/hast-util-to-html/lib/handle/text.js
var textEntitySubset = ["<", "&"];
function text(node, _2, parent, state) {
  return parent && parent.type === "element" && (parent.tagName === "script" || parent.tagName === "style") ? node.value : stringifyEntities(
    node.value,
    Object.assign({}, state.settings.characterReferences, {
      subset: textEntitySubset
    })
  );
}

// node_modules/hast-util-to-html/lib/handle/raw.js
function raw(node, index, parent, state) {
  return state.settings.allowDangerousHtml ? node.value : text(node, index, parent, state);
}

// node_modules/hast-util-to-html/lib/handle/root.js
function root(node, _1, _2, state) {
  return state.all(node);
}

// node_modules/hast-util-to-html/lib/handle/index.js
var handle = zwitch("type", {
  invalid,
  unknown,
  handlers: { comment, doctype, element, raw, root, text }
});
function invalid(node) {
  throw new Error("Expected node, not `" + node + "`");
}
function unknown(node_) {
  const node = (
    /** @type {Nodes} */
    node_
  );
  throw new Error("Cannot compile unknown node `" + node.type + "`");
}

// node_modules/hast-util-to-html/lib/index.js
var emptyOptions = {};
var emptyCharacterReferences = {};
var emptyChildren2 = [];
function toHtml(tree, options) {
  const options_ = options || emptyOptions;
  const quote = options_.quote || '"';
  const alternative = quote === '"' ? "'" : '"';
  if (quote !== '"' && quote !== "'") {
    throw new Error("Invalid quote `" + quote + "`, expected `'` or `\"`");
  }
  const state = {
    one,
    all,
    settings: {
      omitOptionalTags: options_.omitOptionalTags || false,
      allowParseErrors: options_.allowParseErrors || false,
      allowDangerousCharacters: options_.allowDangerousCharacters || false,
      quoteSmart: options_.quoteSmart || false,
      preferUnquoted: options_.preferUnquoted || false,
      tightAttributes: options_.tightAttributes || false,
      upperDoctype: options_.upperDoctype || false,
      tightDoctype: options_.tightDoctype || false,
      bogusComments: options_.bogusComments || false,
      tightCommaSeparatedLists: options_.tightCommaSeparatedLists || false,
      tightSelfClosing: options_.tightSelfClosing || false,
      collapseEmptyAttributes: options_.collapseEmptyAttributes || false,
      allowDangerousHtml: options_.allowDangerousHtml || false,
      voids: options_.voids || htmlVoidElements,
      characterReferences: options_.characterReferences || emptyCharacterReferences,
      closeSelfClosing: options_.closeSelfClosing || false,
      closeEmptyElements: options_.closeEmptyElements || false
    },
    schema: options_.space === "svg" ? svg2 : html2,
    quote,
    alternative
  };
  return state.one(
    Array.isArray(tree) ? { type: "root", children: tree } : tree,
    void 0,
    void 0
  );
}
function one(node, index, parent) {
  return handle(node, index, parent, this);
}
function all(parent) {
  const results = [];
  const children = parent && parent.children || emptyChildren2;
  let index = -1;
  while (++index < children.length) {
    results[index] = this.one(children[index], index, parent);
  }
  return results.join("");
}

// node_modules/@shikijs/core/dist/index.mjs
function resolveColorReplacements(theme, options) {
  const replacements = typeof theme === "string" ? {} : { ...theme.colorReplacements };
  const themeName = typeof theme === "string" ? theme : theme.name;
  for (const [key2, value] of Object.entries(options?.colorReplacements || {})) {
    if (typeof value === "string")
      replacements[key2] = value;
    else if (key2 === themeName)
      Object.assign(replacements, value);
  }
  return replacements;
}
function applyColorReplacements(color, replacements) {
  if (!color)
    return color;
  return replacements?.[color?.toLowerCase()] || color;
}
function toArray(x) {
  return Array.isArray(x) ? x : [x];
}
async function normalizeGetter(p2) {
  return Promise.resolve(typeof p2 === "function" ? p2() : p2).then((r4) => r4.default || r4);
}
function isPlainLang(lang) {
  return !lang || ["plaintext", "txt", "text", "plain"].includes(lang);
}
function isSpecialLang(lang) {
  return lang === "ansi" || isPlainLang(lang);
}
function isNoneTheme(theme) {
  return theme === "none";
}
function isSpecialTheme(theme) {
  return isNoneTheme(theme);
}
function addClassToHast(node, className) {
  if (!className)
    return node;
  node.properties ||= {};
  node.properties.class ||= [];
  if (typeof node.properties.class === "string")
    node.properties.class = node.properties.class.split(/\s+/g);
  if (!Array.isArray(node.properties.class))
    node.properties.class = [];
  const targets = Array.isArray(className) ? className : className.split(/\s+/g);
  for (const c of targets) {
    if (c && !node.properties.class.includes(c))
      node.properties.class.push(c);
  }
  return node;
}
function splitLines(code, preserveEnding = false) {
  if (code.length === 0) {
    return [["", 0]];
  }
  const parts = code.split(/(\r?\n)/g);
  let index = 0;
  const lines = [];
  for (let i2 = 0; i2 < parts.length; i2 += 2) {
    const line = preserveEnding ? parts[i2] + (parts[i2 + 1] || "") : parts[i2];
    lines.push([line, index]);
    index += parts[i2].length;
    index += parts[i2 + 1]?.length || 0;
  }
  return lines;
}
function createPositionConverter(code) {
  const lines = splitLines(code, true).map(([line]) => line);
  function indexToPos(index) {
    if (index === code.length) {
      return {
        line: lines.length - 1,
        character: lines[lines.length - 1].length
      };
    }
    let character = index;
    let line = 0;
    for (const lineText of lines) {
      if (character < lineText.length)
        break;
      character -= lineText.length;
      line++;
    }
    return { line, character };
  }
  function posToIndex(line, character) {
    let index = 0;
    for (let i2 = 0; i2 < line; i2++)
      index += lines[i2].length;
    index += character;
    return index;
  }
  return {
    lines,
    indexToPos,
    posToIndex
  };
}
function guessEmbeddedLanguages(code, _lang, highlighter) {
  const langs = /* @__PURE__ */ new Set();
  for (const match of code.matchAll(/:?lang=["']([^"']+)["']/g)) {
    const lang = match[1].toLowerCase().trim();
    if (lang)
      langs.add(lang);
  }
  for (const match of code.matchAll(/(?:```|~~~)([\w-]+)/g)) {
    const lang = match[1].toLowerCase().trim();
    if (lang)
      langs.add(lang);
  }
  for (const match of code.matchAll(/\\begin\{([\w-]+)\}/g)) {
    const lang = match[1].toLowerCase().trim();
    if (lang)
      langs.add(lang);
  }
  for (const match of code.matchAll(/<script\s+(?:type|lang)=["']([^"']+)["']/gi)) {
    const fullType = match[1].toLowerCase().trim();
    const lang = fullType.includes("/") ? fullType.split("/").pop() : fullType;
    if (lang)
      langs.add(lang);
  }
  if (!highlighter)
    return Array.from(langs);
  const bundle = highlighter.getBundledLanguages();
  return Array.from(langs).filter((l2) => l2 && bundle[l2]);
}
var DEFAULT_COLOR_LIGHT_DARK = "light-dark()";
var COLOR_KEYS = ["color", "background-color"];
function splitToken(token2, offsets) {
  let lastOffset = 0;
  const tokens = [];
  for (const offset of offsets) {
    if (offset > lastOffset) {
      tokens.push({
        ...token2,
        content: token2.content.slice(lastOffset, offset),
        offset: token2.offset + lastOffset
      });
    }
    lastOffset = offset;
  }
  if (lastOffset < token2.content.length) {
    tokens.push({
      ...token2,
      content: token2.content.slice(lastOffset),
      offset: token2.offset + lastOffset
    });
  }
  return tokens;
}
function splitTokens(tokens, breakpoints) {
  const sorted = Array.from(breakpoints instanceof Set ? breakpoints : new Set(breakpoints)).sort((a2, b3) => a2 - b3);
  if (!sorted.length)
    return tokens;
  return tokens.map((line) => {
    return line.flatMap((token2) => {
      const breakpointsInToken = sorted.filter((i2) => token2.offset < i2 && i2 < token2.offset + token2.content.length).map((i2) => i2 - token2.offset).sort((a2, b3) => a2 - b3);
      if (!breakpointsInToken.length)
        return token2;
      return splitToken(token2, breakpointsInToken);
    });
  });
}
function flatTokenVariants(merged, variantsOrder, cssVariablePrefix, defaultColor, colorsRendering = "css-vars") {
  const token2 = {
    content: merged.content,
    explanation: merged.explanation,
    offset: merged.offset
  };
  const styles = variantsOrder.map((t) => getTokenStyleObject(merged.variants[t]));
  const styleKeys = new Set(styles.flatMap((t) => Object.keys(t)));
  const mergedStyles = {};
  const varKey = (idx, key2) => {
    const keyName = key2 === "color" ? "" : key2 === "background-color" ? "-bg" : `-${key2}`;
    return cssVariablePrefix + variantsOrder[idx] + (key2 === "color" ? "" : keyName);
  };
  styles.forEach((cur, idx) => {
    for (const key2 of styleKeys) {
      const value = cur[key2] || "inherit";
      if (idx === 0 && defaultColor && COLOR_KEYS.includes(key2)) {
        if (defaultColor === DEFAULT_COLOR_LIGHT_DARK && styles.length > 1) {
          const lightIndex = variantsOrder.findIndex((t) => t === "light");
          const darkIndex = variantsOrder.findIndex((t) => t === "dark");
          if (lightIndex === -1 || darkIndex === -1)
            throw new ShikiError('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
          const lightValue = styles[lightIndex][key2] || "inherit";
          const darkValue = styles[darkIndex][key2] || "inherit";
          mergedStyles[key2] = `light-dark(${lightValue}, ${darkValue})`;
          if (colorsRendering === "css-vars")
            mergedStyles[varKey(idx, key2)] = value;
        } else {
          mergedStyles[key2] = value;
        }
      } else {
        if (colorsRendering === "css-vars")
          mergedStyles[varKey(idx, key2)] = value;
      }
    }
  });
  token2.htmlStyle = mergedStyles;
  return token2;
}
function getTokenStyleObject(token2) {
  const styles = {};
  if (token2.color)
    styles.color = token2.color;
  if (token2.bgColor)
    styles["background-color"] = token2.bgColor;
  if (token2.fontStyle) {
    if (token2.fontStyle & FontStyle.Italic)
      styles["font-style"] = "italic";
    if (token2.fontStyle & FontStyle.Bold)
      styles["font-weight"] = "bold";
    const decorations2 = [];
    if (token2.fontStyle & FontStyle.Underline)
      decorations2.push("underline");
    if (token2.fontStyle & FontStyle.Strikethrough)
      decorations2.push("line-through");
    if (decorations2.length)
      styles["text-decoration"] = decorations2.join(" ");
  }
  return styles;
}
function stringifyTokenStyle(token2) {
  if (typeof token2 === "string")
    return token2;
  return Object.entries(token2).map(([key2, value]) => `${key2}:${value}`).join(";");
}
var _grammarStateMap = /* @__PURE__ */ new WeakMap();
function setLastGrammarStateToMap(keys, state) {
  _grammarStateMap.set(keys, state);
}
function getLastGrammarStateFromMap(keys) {
  return _grammarStateMap.get(keys);
}
var GrammarState = class _GrammarState {
  /**
   * Theme to Stack mapping
   */
  _stacks = {};
  lang;
  get themes() {
    return Object.keys(this._stacks);
  }
  get theme() {
    return this.themes[0];
  }
  get _stack() {
    return this._stacks[this.theme];
  }
  /**
   * Static method to create a initial grammar state.
   */
  static initial(lang, themes) {
    return new _GrammarState(
      Object.fromEntries(toArray(themes).map((theme) => [theme, INITIAL])),
      lang
    );
  }
  constructor(...args) {
    if (args.length === 2) {
      const [stacksMap, lang] = args;
      this.lang = lang;
      this._stacks = stacksMap;
    } else {
      const [stack, lang, theme] = args;
      this.lang = lang;
      this._stacks = { [theme]: stack };
    }
  }
  /**
   * Get the internal stack object.
   * @internal
   */
  getInternalStack(theme = this.theme) {
    return this._stacks[theme];
  }
  getScopes(theme = this.theme) {
    return getScopes(this._stacks[theme]);
  }
  toJSON() {
    return {
      lang: this.lang,
      theme: this.theme,
      themes: this.themes,
      scopes: this.getScopes()
    };
  }
};
function getScopes(stack) {
  const scopes = [];
  const visited = /* @__PURE__ */ new Set();
  function pushScope(stack2) {
    if (visited.has(stack2))
      return;
    visited.add(stack2);
    const name = stack2?.nameScopesList?.scopeName;
    if (name)
      scopes.push(name);
    if (stack2.parent)
      pushScope(stack2.parent);
  }
  pushScope(stack);
  return scopes;
}
function getGrammarStack(state, theme) {
  if (!(state instanceof GrammarState))
    throw new ShikiError("Invalid grammar state");
  return state.getInternalStack(theme);
}
function transformerDecorations() {
  const map = /* @__PURE__ */ new WeakMap();
  function getContext(shiki) {
    if (!map.has(shiki.meta)) {
      let normalizePosition = function(p2) {
        if (typeof p2 === "number") {
          if (p2 < 0 || p2 > shiki.source.length)
            throw new ShikiError(`Invalid decoration offset: ${p2}. Code length: ${shiki.source.length}`);
          return {
            ...converter.indexToPos(p2),
            offset: p2
          };
        } else {
          const line = converter.lines[p2.line];
          if (line === void 0)
            throw new ShikiError(`Invalid decoration position ${JSON.stringify(p2)}. Lines length: ${converter.lines.length}`);
          let character = p2.character;
          if (character < 0)
            character = line.length + character;
          if (character < 0 || character > line.length)
            throw new ShikiError(`Invalid decoration position ${JSON.stringify(p2)}. Line ${p2.line} length: ${line.length}`);
          return {
            ...p2,
            character,
            offset: converter.posToIndex(p2.line, character)
          };
        }
      };
      const converter = createPositionConverter(shiki.source);
      const decorations2 = (shiki.options.decorations || []).map((d) => ({
        ...d,
        start: normalizePosition(d.start),
        end: normalizePosition(d.end)
      }));
      verifyIntersections(decorations2);
      map.set(shiki.meta, {
        decorations: decorations2,
        converter,
        source: shiki.source
      });
    }
    return map.get(shiki.meta);
  }
  return {
    name: "shiki:decorations",
    tokens(tokens) {
      if (!this.options.decorations?.length)
        return;
      const ctx = getContext(this);
      const breakpoints = ctx.decorations.flatMap((d) => [d.start.offset, d.end.offset]);
      const splitted = splitTokens(tokens, breakpoints);
      return splitted;
    },
    code(codeEl) {
      if (!this.options.decorations?.length)
        return;
      const ctx = getContext(this);
      const lines = Array.from(codeEl.children).filter((i2) => i2.type === "element" && i2.tagName === "span");
      if (lines.length !== ctx.converter.lines.length)
        throw new ShikiError(`Number of lines in code element (${lines.length}) does not match the number of lines in the source (${ctx.converter.lines.length}). Failed to apply decorations.`);
      function applyLineSection(line, start, end, decoration) {
        const lineEl = lines[line];
        let text2 = "";
        let startIndex = -1;
        let endIndex = -1;
        if (start === 0)
          startIndex = 0;
        if (end === 0)
          endIndex = 0;
        if (end === Number.POSITIVE_INFINITY)
          endIndex = lineEl.children.length;
        if (startIndex === -1 || endIndex === -1) {
          for (let i2 = 0; i2 < lineEl.children.length; i2++) {
            text2 += stringify3(lineEl.children[i2]);
            if (startIndex === -1 && text2.length === start)
              startIndex = i2 + 1;
            if (endIndex === -1 && text2.length === end)
              endIndex = i2 + 1;
          }
        }
        if (startIndex === -1)
          throw new ShikiError(`Failed to find start index for decoration ${JSON.stringify(decoration.start)}`);
        if (endIndex === -1)
          throw new ShikiError(`Failed to find end index for decoration ${JSON.stringify(decoration.end)}`);
        const children = lineEl.children.slice(startIndex, endIndex);
        if (!decoration.alwaysWrap && children.length === lineEl.children.length) {
          applyDecoration(lineEl, decoration, "line");
        } else if (!decoration.alwaysWrap && children.length === 1 && children[0].type === "element") {
          applyDecoration(children[0], decoration, "token");
        } else {
          const wrapper = {
            type: "element",
            tagName: "span",
            properties: {},
            children
          };
          applyDecoration(wrapper, decoration, "wrapper");
          lineEl.children.splice(startIndex, children.length, wrapper);
        }
      }
      function applyLine(line, decoration) {
        lines[line] = applyDecoration(lines[line], decoration, "line");
      }
      function applyDecoration(el, decoration, type) {
        const properties = decoration.properties || {};
        const transform = decoration.transform || ((i2) => i2);
        el.tagName = decoration.tagName || "span";
        el.properties = {
          ...el.properties,
          ...properties,
          class: el.properties.class
        };
        if (decoration.properties?.class)
          addClassToHast(el, decoration.properties.class);
        el = transform(el, type) || el;
        return el;
      }
      const lineApplies = [];
      const sorted = ctx.decorations.sort((a2, b3) => b3.start.offset - a2.start.offset || a2.end.offset - b3.end.offset);
      for (const decoration of sorted) {
        const { start, end } = decoration;
        if (start.line === end.line) {
          applyLineSection(start.line, start.character, end.character, decoration);
        } else if (start.line < end.line) {
          applyLineSection(start.line, start.character, Number.POSITIVE_INFINITY, decoration);
          for (let i2 = start.line + 1; i2 < end.line; i2++)
            lineApplies.unshift(() => applyLine(i2, decoration));
          applyLineSection(end.line, 0, end.character, decoration);
        }
      }
      lineApplies.forEach((i2) => i2());
    }
  };
}
function verifyIntersections(items) {
  for (let i2 = 0; i2 < items.length; i2++) {
    const foo = items[i2];
    if (foo.start.offset > foo.end.offset)
      throw new ShikiError(`Invalid decoration range: ${JSON.stringify(foo.start)} - ${JSON.stringify(foo.end)}`);
    for (let j = i2 + 1; j < items.length; j++) {
      const bar = items[j];
      const isFooHasBarStart = foo.start.offset <= bar.start.offset && bar.start.offset < foo.end.offset;
      const isFooHasBarEnd = foo.start.offset < bar.end.offset && bar.end.offset <= foo.end.offset;
      const isBarHasFooStart = bar.start.offset <= foo.start.offset && foo.start.offset < bar.end.offset;
      const isBarHasFooEnd = bar.start.offset < foo.end.offset && foo.end.offset <= bar.end.offset;
      if (isFooHasBarStart || isFooHasBarEnd || isBarHasFooStart || isBarHasFooEnd) {
        if (isFooHasBarStart && isFooHasBarEnd)
          continue;
        if (isBarHasFooStart && isBarHasFooEnd)
          continue;
        if (isBarHasFooStart && foo.start.offset === foo.end.offset)
          continue;
        if (isFooHasBarEnd && bar.start.offset === bar.end.offset)
          continue;
        throw new ShikiError(`Decorations ${JSON.stringify(foo.start)} and ${JSON.stringify(bar.start)} intersect.`);
      }
    }
  }
}
function stringify3(el) {
  if (el.type === "text")
    return el.value;
  if (el.type === "element")
    return el.children.map(stringify3).join("");
  return "";
}
var builtInTransformers = [
  transformerDecorations()
];
function getTransformers(options) {
  const transformers = sortTransformersByEnforcement(options.transformers || []);
  return [
    ...transformers.pre,
    ...transformers.normal,
    ...transformers.post,
    ...builtInTransformers
  ];
}
function sortTransformersByEnforcement(transformers) {
  const pre = [];
  const post = [];
  const normal = [];
  for (const transformer of transformers) {
    switch (transformer.enforce) {
      case "pre":
        pre.push(transformer);
        break;
      case "post":
        post.push(transformer);
        break;
      default:
        normal.push(transformer);
    }
  }
  return { pre, post, normal };
}
var namedColors = [
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "brightBlack",
  "brightRed",
  "brightGreen",
  "brightYellow",
  "brightBlue",
  "brightMagenta",
  "brightCyan",
  "brightWhite"
];
var decorations = {
  1: "bold",
  2: "dim",
  3: "italic",
  4: "underline",
  7: "reverse",
  8: "hidden",
  9: "strikethrough"
};
function findSequence(value, position) {
  const nextEscape = value.indexOf("\x1B", position);
  if (nextEscape !== -1) {
    if (value[nextEscape + 1] === "[") {
      const nextClose = value.indexOf("m", nextEscape);
      if (nextClose !== -1) {
        return {
          sequence: value.substring(nextEscape + 2, nextClose).split(";"),
          startPosition: nextEscape,
          position: nextClose + 1
        };
      }
    }
  }
  return {
    position: value.length
  };
}
function parseColor(sequence) {
  const colorMode = sequence.shift();
  if (colorMode === "2") {
    const rgb = sequence.splice(0, 3).map((x) => Number.parseInt(x));
    if (rgb.length !== 3 || rgb.some((x) => Number.isNaN(x)))
      return;
    return {
      type: "rgb",
      rgb
    };
  } else if (colorMode === "5") {
    const index = sequence.shift();
    if (index) {
      return { type: "table", index: Number(index) };
    }
  }
}
function parseSequence(sequence) {
  const commands = [];
  while (sequence.length > 0) {
    const code = sequence.shift();
    if (!code)
      continue;
    const codeInt = Number.parseInt(code);
    if (Number.isNaN(codeInt))
      continue;
    if (codeInt === 0) {
      commands.push({ type: "resetAll" });
    } else if (codeInt <= 9) {
      const decoration = decorations[codeInt];
      if (decoration) {
        commands.push({
          type: "setDecoration",
          value: decorations[codeInt]
        });
      }
    } else if (codeInt <= 29) {
      const decoration = decorations[codeInt - 20];
      if (decoration) {
        commands.push({
          type: "resetDecoration",
          value: decoration
        });
        if (decoration === "dim") {
          commands.push({
            type: "resetDecoration",
            value: "bold"
          });
        }
      }
    } else if (codeInt <= 37) {
      commands.push({
        type: "setForegroundColor",
        value: { type: "named", name: namedColors[codeInt - 30] }
      });
    } else if (codeInt === 38) {
      const color = parseColor(sequence);
      if (color) {
        commands.push({
          type: "setForegroundColor",
          value: color
        });
      }
    } else if (codeInt === 39) {
      commands.push({
        type: "resetForegroundColor"
      });
    } else if (codeInt <= 47) {
      commands.push({
        type: "setBackgroundColor",
        value: { type: "named", name: namedColors[codeInt - 40] }
      });
    } else if (codeInt === 48) {
      const color = parseColor(sequence);
      if (color) {
        commands.push({
          type: "setBackgroundColor",
          value: color
        });
      }
    } else if (codeInt === 49) {
      commands.push({
        type: "resetBackgroundColor"
      });
    } else if (codeInt === 53) {
      commands.push({
        type: "setDecoration",
        value: "overline"
      });
    } else if (codeInt === 55) {
      commands.push({
        type: "resetDecoration",
        value: "overline"
      });
    } else if (codeInt >= 90 && codeInt <= 97) {
      commands.push({
        type: "setForegroundColor",
        value: { type: "named", name: namedColors[codeInt - 90 + 8] }
      });
    } else if (codeInt >= 100 && codeInt <= 107) {
      commands.push({
        type: "setBackgroundColor",
        value: { type: "named", name: namedColors[codeInt - 100 + 8] }
      });
    }
  }
  return commands;
}
function createAnsiSequenceParser() {
  let foreground = null;
  let background = null;
  let decorations2 = /* @__PURE__ */ new Set();
  return {
    parse(value) {
      const tokens = [];
      let position = 0;
      do {
        const findResult = findSequence(value, position);
        const text2 = findResult.sequence ? value.substring(position, findResult.startPosition) : value.substring(position);
        if (text2.length > 0) {
          tokens.push({
            value: text2,
            foreground,
            background,
            decorations: new Set(decorations2)
          });
        }
        if (findResult.sequence) {
          const commands = parseSequence(findResult.sequence);
          for (const styleToken of commands) {
            if (styleToken.type === "resetAll") {
              foreground = null;
              background = null;
              decorations2.clear();
            } else if (styleToken.type === "resetForegroundColor") {
              foreground = null;
            } else if (styleToken.type === "resetBackgroundColor") {
              background = null;
            } else if (styleToken.type === "resetDecoration") {
              decorations2.delete(styleToken.value);
            }
          }
          for (const styleToken of commands) {
            if (styleToken.type === "setForegroundColor") {
              foreground = styleToken.value;
            } else if (styleToken.type === "setBackgroundColor") {
              background = styleToken.value;
            } else if (styleToken.type === "setDecoration") {
              decorations2.add(styleToken.value);
            }
          }
        }
        position = findResult.position;
      } while (position < value.length);
      return tokens;
    }
  };
}
var defaultNamedColorsMap = {
  black: "#000000",
  red: "#bb0000",
  green: "#00bb00",
  yellow: "#bbbb00",
  blue: "#0000bb",
  magenta: "#ff00ff",
  cyan: "#00bbbb",
  white: "#eeeeee",
  brightBlack: "#555555",
  brightRed: "#ff5555",
  brightGreen: "#00ff00",
  brightYellow: "#ffff55",
  brightBlue: "#5555ff",
  brightMagenta: "#ff55ff",
  brightCyan: "#55ffff",
  brightWhite: "#ffffff"
};
function createColorPalette(namedColorsMap = defaultNamedColorsMap) {
  function namedColor(name) {
    return namedColorsMap[name];
  }
  function rgbColor(rgb) {
    return `#${rgb.map((x) => Math.max(0, Math.min(x, 255)).toString(16).padStart(2, "0")).join("")}`;
  }
  let colorTable;
  function getColorTable() {
    if (colorTable) {
      return colorTable;
    }
    colorTable = [];
    for (let i2 = 0; i2 < namedColors.length; i2++) {
      colorTable.push(namedColor(namedColors[i2]));
    }
    let levels = [0, 95, 135, 175, 215, 255];
    for (let r4 = 0; r4 < 6; r4++) {
      for (let g = 0; g < 6; g++) {
        for (let b3 = 0; b3 < 6; b3++) {
          colorTable.push(rgbColor([levels[r4], levels[g], levels[b3]]));
        }
      }
    }
    let level = 8;
    for (let i2 = 0; i2 < 24; i2++, level += 10) {
      colorTable.push(rgbColor([level, level, level]));
    }
    return colorTable;
  }
  function tableColor(index) {
    return getColorTable()[index];
  }
  function value(color) {
    switch (color.type) {
      case "named":
        return namedColor(color.name);
      case "rgb":
        return rgbColor(color.rgb);
      case "table":
        return tableColor(color.index);
    }
  }
  return {
    value
  };
}
var defaultAnsiColors = {
  black: "#000000",
  red: "#cd3131",
  green: "#0DBC79",
  yellow: "#E5E510",
  blue: "#2472C8",
  magenta: "#BC3FBC",
  cyan: "#11A8CD",
  white: "#E5E5E5",
  brightBlack: "#666666",
  brightRed: "#F14C4C",
  brightGreen: "#23D18B",
  brightYellow: "#F5F543",
  brightBlue: "#3B8EEA",
  brightMagenta: "#D670D6",
  brightCyan: "#29B8DB",
  brightWhite: "#FFFFFF"
};
function tokenizeAnsiWithTheme(theme, fileContents, options) {
  const colorReplacements = resolveColorReplacements(theme, options);
  const lines = splitLines(fileContents);
  const ansiPalette = Object.fromEntries(
    namedColors.map((name) => {
      const key2 = `terminal.ansi${name[0].toUpperCase()}${name.substring(1)}`;
      const themeColor = theme.colors?.[key2];
      return [name, themeColor || defaultAnsiColors[name]];
    })
  );
  const colorPalette = createColorPalette(ansiPalette);
  const parser = createAnsiSequenceParser();
  return lines.map(
    (line) => parser.parse(line[0]).map((token2) => {
      let color;
      let bgColor;
      if (token2.decorations.has("reverse")) {
        color = token2.background ? colorPalette.value(token2.background) : theme.bg;
        bgColor = token2.foreground ? colorPalette.value(token2.foreground) : theme.fg;
      } else {
        color = token2.foreground ? colorPalette.value(token2.foreground) : theme.fg;
        bgColor = token2.background ? colorPalette.value(token2.background) : void 0;
      }
      color = applyColorReplacements(color, colorReplacements);
      bgColor = applyColorReplacements(bgColor, colorReplacements);
      if (token2.decorations.has("dim"))
        color = dimColor(color);
      let fontStyle = FontStyle.None;
      if (token2.decorations.has("bold"))
        fontStyle |= FontStyle.Bold;
      if (token2.decorations.has("italic"))
        fontStyle |= FontStyle.Italic;
      if (token2.decorations.has("underline"))
        fontStyle |= FontStyle.Underline;
      if (token2.decorations.has("strikethrough"))
        fontStyle |= FontStyle.Strikethrough;
      return {
        content: token2.value,
        offset: line[1],
        // TODO: more accurate offset? might need to fork ansi-sequence-parser
        color,
        bgColor,
        fontStyle
      };
    })
  );
}
function dimColor(color) {
  const hexMatch = color.match(/#([0-9a-f]{3,8})/i);
  if (hexMatch) {
    const hex = hexMatch[1];
    if (hex.length === 8) {
      const alpha = Math.round(Number.parseInt(hex.slice(6, 8), 16) / 2).toString(16).padStart(2, "0");
      return `#${hex.slice(0, 6)}${alpha}`;
    } else if (hex.length === 6) {
      return `#${hex}80`;
    } else if (hex.length === 4) {
      const r4 = hex[0];
      const g = hex[1];
      const b3 = hex[2];
      const a2 = hex[3];
      const alpha = Math.round(Number.parseInt(`${a2}${a2}`, 16) / 2).toString(16).padStart(2, "0");
      return `#${r4}${r4}${g}${g}${b3}${b3}${alpha}`;
    } else if (hex.length === 3) {
      const r4 = hex[0];
      const g = hex[1];
      const b3 = hex[2];
      return `#${r4}${r4}${g}${g}${b3}${b3}80`;
    }
  }
  const cssVarMatch = color.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);
  if (cssVarMatch)
    return `var(${cssVarMatch[1]}-dim)`;
  return color;
}
function codeToTokensBase(internal, code, options = {}) {
  const {
    theme: themeName = internal.getLoadedThemes()[0]
  } = options;
  const lang = internal.resolveLangAlias(options.lang || "text");
  if (isPlainLang(lang) || isNoneTheme(themeName))
    return splitLines(code).map((line) => [{ content: line[0], offset: line[1] }]);
  const { theme, colorMap } = internal.setTheme(themeName);
  if (lang === "ansi")
    return tokenizeAnsiWithTheme(theme, code, options);
  const _grammar = internal.getLanguage(options.lang || "text");
  if (options.grammarState) {
    if (options.grammarState.lang !== _grammar.name) {
      throw new ShikiError(`Grammar state language "${options.grammarState.lang}" does not match highlight language "${_grammar.name}"`);
    }
    if (!options.grammarState.themes.includes(theme.name)) {
      throw new ShikiError(`Grammar state themes "${options.grammarState.themes}" do not contain highlight theme "${theme.name}"`);
    }
  }
  return tokenizeWithTheme(code, _grammar, theme, colorMap, options);
}
function getLastGrammarState(...args) {
  if (args.length === 2) {
    return getLastGrammarStateFromMap(args[1]);
  }
  const [internal, code, options = {}] = args;
  const {
    lang = "text",
    theme: themeName = internal.getLoadedThemes()[0]
  } = options;
  if (isPlainLang(lang) || isNoneTheme(themeName))
    throw new ShikiError("Plain language does not have grammar state");
  if (lang === "ansi")
    throw new ShikiError("ANSI language does not have grammar state");
  const { theme, colorMap } = internal.setTheme(themeName);
  const _grammar = internal.getLanguage(lang);
  return new GrammarState(
    _tokenizeWithTheme(code, _grammar, theme, colorMap, options).stateStack,
    _grammar.name,
    theme.name
  );
}
function tokenizeWithTheme(code, grammar, theme, colorMap, options) {
  const result = _tokenizeWithTheme(code, grammar, theme, colorMap, options);
  const grammarState = new GrammarState(
    result.stateStack,
    grammar.name,
    theme.name
  );
  setLastGrammarStateToMap(result.tokens, grammarState);
  return result.tokens;
}
function _tokenizeWithTheme(code, grammar, theme, colorMap, options) {
  const colorReplacements = resolveColorReplacements(theme, options);
  const {
    tokenizeMaxLineLength = 0,
    tokenizeTimeLimit = 500
  } = options;
  const lines = splitLines(code);
  let stateStack = options.grammarState ? getGrammarStack(options.grammarState, theme.name) ?? INITIAL : options.grammarContextCode != null ? _tokenizeWithTheme(
    options.grammarContextCode,
    grammar,
    theme,
    colorMap,
    {
      ...options,
      grammarState: void 0,
      grammarContextCode: void 0
    }
  ).stateStack : INITIAL;
  let actual = [];
  const final = [];
  for (let i2 = 0, len = lines.length; i2 < len; i2++) {
    const [line, lineOffset] = lines[i2];
    if (line === "") {
      actual = [];
      final.push([]);
      continue;
    }
    if (tokenizeMaxLineLength > 0 && line.length >= tokenizeMaxLineLength) {
      actual = [];
      final.push([{
        content: line,
        offset: lineOffset,
        color: "",
        fontStyle: 0
      }]);
      continue;
    }
    let resultWithScopes;
    let tokensWithScopes;
    let tokensWithScopesIndex;
    if (options.includeExplanation) {
      resultWithScopes = grammar.tokenizeLine(line, stateStack, tokenizeTimeLimit);
      tokensWithScopes = resultWithScopes.tokens;
      tokensWithScopesIndex = 0;
    }
    const result = grammar.tokenizeLine2(line, stateStack, tokenizeTimeLimit);
    const tokensLength = result.tokens.length / 2;
    for (let j = 0; j < tokensLength; j++) {
      const startIndex = result.tokens[2 * j];
      const nextStartIndex = j + 1 < tokensLength ? result.tokens[2 * j + 2] : line.length;
      if (startIndex === nextStartIndex)
        continue;
      const metadata = result.tokens[2 * j + 1];
      const color = applyColorReplacements(
        colorMap[EncodedTokenMetadata.getForeground(metadata)],
        colorReplacements
      );
      const fontStyle = EncodedTokenMetadata.getFontStyle(metadata);
      const token2 = {
        content: line.substring(startIndex, nextStartIndex),
        offset: lineOffset + startIndex,
        color,
        fontStyle
      };
      if (options.includeExplanation) {
        const themeSettingsSelectors = [];
        if (options.includeExplanation !== "scopeName") {
          for (const setting of theme.settings) {
            let selectors;
            switch (typeof setting.scope) {
              case "string":
                selectors = setting.scope.split(/,/).map((scope) => scope.trim());
                break;
              case "object":
                selectors = setting.scope;
                break;
              default:
                continue;
            }
            themeSettingsSelectors.push({
              settings: setting,
              selectors: selectors.map((selector) => selector.split(/ /))
            });
          }
        }
        token2.explanation = [];
        let offset = 0;
        while (startIndex + offset < nextStartIndex) {
          const tokenWithScopes = tokensWithScopes[tokensWithScopesIndex];
          const tokenWithScopesText = line.substring(
            tokenWithScopes.startIndex,
            tokenWithScopes.endIndex
          );
          offset += tokenWithScopesText.length;
          token2.explanation.push({
            content: tokenWithScopesText,
            scopes: options.includeExplanation === "scopeName" ? explainThemeScopesNameOnly(
              tokenWithScopes.scopes
            ) : explainThemeScopesFull(
              themeSettingsSelectors,
              tokenWithScopes.scopes
            )
          });
          tokensWithScopesIndex += 1;
        }
      }
      actual.push(token2);
    }
    final.push(actual);
    actual = [];
    stateStack = result.ruleStack;
  }
  return {
    tokens: final,
    stateStack
  };
}
function explainThemeScopesNameOnly(scopes) {
  return scopes.map((scope) => ({ scopeName: scope }));
}
function explainThemeScopesFull(themeSelectors, scopes) {
  const result = [];
  for (let i2 = 0, len = scopes.length; i2 < len; i2++) {
    const scope = scopes[i2];
    result[i2] = {
      scopeName: scope,
      themeMatches: explainThemeScope(themeSelectors, scope, scopes.slice(0, i2))
    };
  }
  return result;
}
function matchesOne(selector, scope) {
  return selector === scope || scope.substring(0, selector.length) === selector && scope[selector.length] === ".";
}
function matches(selectors, scope, parentScopes) {
  if (!matchesOne(selectors[selectors.length - 1], scope))
    return false;
  let selectorParentIndex = selectors.length - 2;
  let parentIndex = parentScopes.length - 1;
  while (selectorParentIndex >= 0 && parentIndex >= 0) {
    if (matchesOne(selectors[selectorParentIndex], parentScopes[parentIndex]))
      selectorParentIndex -= 1;
    parentIndex -= 1;
  }
  if (selectorParentIndex === -1)
    return true;
  return false;
}
function explainThemeScope(themeSettingsSelectors, scope, parentScopes) {
  const result = [];
  for (const { selectors, settings } of themeSettingsSelectors) {
    for (const selectorPieces of selectors) {
      if (matches(selectorPieces, scope, parentScopes)) {
        result.push(settings);
        break;
      }
    }
  }
  return result;
}
function codeToTokensWithThemes(internal, code, options) {
  const themes = Object.entries(options.themes).filter((i2) => i2[1]).map((i2) => ({ color: i2[0], theme: i2[1] }));
  const themedTokens = themes.map((t) => {
    const tokens2 = codeToTokensBase(internal, code, {
      ...options,
      theme: t.theme
    });
    const state = getLastGrammarStateFromMap(tokens2);
    const theme = typeof t.theme === "string" ? t.theme : t.theme.name;
    return {
      tokens: tokens2,
      state,
      theme
    };
  });
  const tokens = syncThemesTokenization(
    ...themedTokens.map((i2) => i2.tokens)
  );
  const mergedTokens = tokens[0].map(
    (line, lineIdx) => line.map((_token, tokenIdx) => {
      const mergedToken = {
        content: _token.content,
        variants: {},
        offset: _token.offset
      };
      if ("includeExplanation" in options && options.includeExplanation) {
        mergedToken.explanation = _token.explanation;
      }
      tokens.forEach((t, themeIdx) => {
        const {
          content: _2,
          explanation: __,
          offset: ___,
          ...styles
        } = t[lineIdx][tokenIdx];
        mergedToken.variants[themes[themeIdx].color] = styles;
      });
      return mergedToken;
    })
  );
  const mergedGrammarState = themedTokens[0].state ? new GrammarState(
    Object.fromEntries(themedTokens.map((s2) => [s2.theme, s2.state?.getInternalStack(s2.theme)])),
    themedTokens[0].state.lang
  ) : void 0;
  if (mergedGrammarState)
    setLastGrammarStateToMap(mergedTokens, mergedGrammarState);
  return mergedTokens;
}
function syncThemesTokenization(...themes) {
  const outThemes = themes.map(() => []);
  const count = themes.length;
  for (let i2 = 0; i2 < themes[0].length; i2++) {
    const lines = themes.map((t) => t[i2]);
    const outLines = outThemes.map(() => []);
    outThemes.forEach((t, i22) => t.push(outLines[i22]));
    const indexes = lines.map(() => 0);
    const current = lines.map((l2) => l2[0]);
    while (current.every((t) => t)) {
      const minLength = Math.min(...current.map((t) => t.content.length));
      for (let n = 0; n < count; n++) {
        const token2 = current[n];
        if (token2.content.length === minLength) {
          outLines[n].push(token2);
          indexes[n] += 1;
          current[n] = lines[n][indexes[n]];
        } else {
          outLines[n].push({
            ...token2,
            content: token2.content.slice(0, minLength)
          });
          current[n] = {
            ...token2,
            content: token2.content.slice(minLength),
            offset: token2.offset + minLength
          };
        }
      }
    }
  }
  return outThemes;
}
function codeToTokens(internal, code, options) {
  let bg;
  let fg;
  let tokens;
  let themeName;
  let rootStyle;
  let grammarState;
  if ("themes" in options) {
    const {
      defaultColor = "light",
      cssVariablePrefix = "--shiki-",
      colorsRendering = "css-vars"
    } = options;
    const themes = Object.entries(options.themes).filter((i2) => i2[1]).map((i2) => ({ color: i2[0], theme: i2[1] })).sort((a2, b3) => a2.color === defaultColor ? -1 : b3.color === defaultColor ? 1 : 0);
    if (themes.length === 0)
      throw new ShikiError("`themes` option must not be empty");
    const themeTokens = codeToTokensWithThemes(
      internal,
      code,
      options
    );
    grammarState = getLastGrammarStateFromMap(themeTokens);
    if (defaultColor && DEFAULT_COLOR_LIGHT_DARK !== defaultColor && !themes.find((t) => t.color === defaultColor))
      throw new ShikiError(`\`themes\` option must contain the defaultColor key \`${defaultColor}\``);
    const themeRegs = themes.map((t) => internal.getTheme(t.theme));
    const themesOrder = themes.map((t) => t.color);
    tokens = themeTokens.map((line) => line.map((token2) => flatTokenVariants(token2, themesOrder, cssVariablePrefix, defaultColor, colorsRendering)));
    if (grammarState)
      setLastGrammarStateToMap(tokens, grammarState);
    const themeColorReplacements = themes.map((t) => resolveColorReplacements(t.theme, options));
    fg = mapThemeColors(themes, themeRegs, themeColorReplacements, cssVariablePrefix, defaultColor, "fg", colorsRendering);
    bg = mapThemeColors(themes, themeRegs, themeColorReplacements, cssVariablePrefix, defaultColor, "bg", colorsRendering);
    themeName = `shiki-themes ${themeRegs.map((t) => t.name).join(" ")}`;
    rootStyle = defaultColor ? void 0 : [fg, bg].join(";");
  } else if ("theme" in options) {
    const colorReplacements = resolveColorReplacements(options.theme, options);
    tokens = codeToTokensBase(
      internal,
      code,
      options
    );
    const _theme = internal.getTheme(options.theme);
    bg = applyColorReplacements(_theme.bg, colorReplacements);
    fg = applyColorReplacements(_theme.fg, colorReplacements);
    themeName = _theme.name;
    grammarState = getLastGrammarStateFromMap(tokens);
  } else {
    throw new ShikiError("Invalid options, either `theme` or `themes` must be provided");
  }
  return {
    tokens,
    fg,
    bg,
    themeName,
    rootStyle,
    grammarState
  };
}
function mapThemeColors(themes, themeRegs, themeColorReplacements, cssVariablePrefix, defaultColor, property, colorsRendering) {
  return themes.map((t, idx) => {
    const value = applyColorReplacements(themeRegs[idx][property], themeColorReplacements[idx]) || "inherit";
    const cssVar = `${cssVariablePrefix + t.color}${property === "bg" ? "-bg" : ""}:${value}`;
    if (idx === 0 && defaultColor) {
      if (defaultColor === DEFAULT_COLOR_LIGHT_DARK && themes.length > 1) {
        const lightIndex = themes.findIndex((t2) => t2.color === "light");
        const darkIndex = themes.findIndex((t2) => t2.color === "dark");
        if (lightIndex === -1 || darkIndex === -1)
          throw new ShikiError('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
        const lightValue = applyColorReplacements(themeRegs[lightIndex][property], themeColorReplacements[lightIndex]) || "inherit";
        const darkValue = applyColorReplacements(themeRegs[darkIndex][property], themeColorReplacements[darkIndex]) || "inherit";
        return `light-dark(${lightValue}, ${darkValue});${cssVar}`;
      }
      return value;
    }
    if (colorsRendering === "css-vars") {
      return cssVar;
    }
    return null;
  }).filter((i2) => !!i2).join(";");
}
function codeToHast(internal, code, options, transformerContext = {
  meta: {},
  options,
  codeToHast: (_code, _options) => codeToHast(internal, _code, _options),
  codeToTokens: (_code, _options) => codeToTokens(internal, _code, _options)
}) {
  let input = code;
  for (const transformer of getTransformers(options))
    input = transformer.preprocess?.call(transformerContext, input, options) || input;
  let {
    tokens,
    fg,
    bg,
    themeName,
    rootStyle,
    grammarState
  } = codeToTokens(internal, input, options);
  const {
    mergeWhitespaces = true,
    mergeSameStyleTokens = false
  } = options;
  if (mergeWhitespaces === true)
    tokens = mergeWhitespaceTokens(tokens);
  else if (mergeWhitespaces === "never")
    tokens = splitWhitespaceTokens(tokens);
  if (mergeSameStyleTokens) {
    tokens = mergeAdjacentStyledTokens(tokens);
  }
  const contextSource = {
    ...transformerContext,
    get source() {
      return input;
    }
  };
  for (const transformer of getTransformers(options))
    tokens = transformer.tokens?.call(contextSource, tokens) || tokens;
  return tokensToHast(
    tokens,
    {
      ...options,
      fg,
      bg,
      themeName,
      rootStyle: options.rootStyle === false ? false : options.rootStyle ?? rootStyle
    },
    contextSource,
    grammarState
  );
}
function tokensToHast(tokens, options, transformerContext, grammarState = getLastGrammarStateFromMap(tokens)) {
  const transformers = getTransformers(options);
  const lines = [];
  const root2 = {
    type: "root",
    children: []
  };
  const {
    structure = "classic",
    tabindex = "0"
  } = options;
  const properties = {
    class: `shiki ${options.themeName || ""}`
  };
  if (options.rootStyle !== false) {
    if (options.rootStyle != null)
      properties.style = options.rootStyle;
    else
      properties.style = `background-color:${options.bg};color:${options.fg}`;
  }
  if (tabindex !== false && tabindex != null)
    properties.tabindex = tabindex.toString();
  for (const [key2, value] of Object.entries(options.meta || {})) {
    if (!key2.startsWith("_"))
      properties[key2] = value;
  }
  let preNode = {
    type: "element",
    tagName: "pre",
    properties,
    children: [],
    data: options.data
  };
  let codeNode = {
    type: "element",
    tagName: "code",
    properties: {},
    children: lines
  };
  const lineNodes = [];
  const context = {
    ...transformerContext,
    structure,
    addClassToHast,
    get source() {
      return transformerContext.source;
    },
    get tokens() {
      return tokens;
    },
    get options() {
      return options;
    },
    get root() {
      return root2;
    },
    get pre() {
      return preNode;
    },
    get code() {
      return codeNode;
    },
    get lines() {
      return lineNodes;
    }
  };
  tokens.forEach((line, idx) => {
    if (idx) {
      if (structure === "inline")
        root2.children.push({ type: "element", tagName: "br", properties: {}, children: [] });
      else if (structure === "classic")
        lines.push({ type: "text", value: "\n" });
    }
    let lineNode = {
      type: "element",
      tagName: "span",
      properties: { class: "line" },
      children: []
    };
    let col = 0;
    for (const token2 of line) {
      let tokenNode = {
        type: "element",
        tagName: "span",
        properties: {
          ...token2.htmlAttrs
        },
        children: [{ type: "text", value: token2.content }]
      };
      const style = stringifyTokenStyle(token2.htmlStyle || getTokenStyleObject(token2));
      if (style)
        tokenNode.properties.style = style;
      for (const transformer of transformers)
        tokenNode = transformer?.span?.call(context, tokenNode, idx + 1, col, lineNode, token2) || tokenNode;
      if (structure === "inline")
        root2.children.push(tokenNode);
      else if (structure === "classic")
        lineNode.children.push(tokenNode);
      col += token2.content.length;
    }
    if (structure === "classic") {
      for (const transformer of transformers)
        lineNode = transformer?.line?.call(context, lineNode, idx + 1) || lineNode;
      lineNodes.push(lineNode);
      lines.push(lineNode);
    } else if (structure === "inline") {
      lineNodes.push(lineNode);
    }
  });
  if (structure === "classic") {
    for (const transformer of transformers)
      codeNode = transformer?.code?.call(context, codeNode) || codeNode;
    preNode.children.push(codeNode);
    for (const transformer of transformers)
      preNode = transformer?.pre?.call(context, preNode) || preNode;
    root2.children.push(preNode);
  } else if (structure === "inline") {
    const syntheticLines = [];
    let currentLine = {
      type: "element",
      tagName: "span",
      properties: { class: "line" },
      children: []
    };
    for (const child of root2.children) {
      if (child.type === "element" && child.tagName === "br") {
        syntheticLines.push(currentLine);
        currentLine = {
          type: "element",
          tagName: "span",
          properties: { class: "line" },
          children: []
        };
      } else if (child.type === "element" || child.type === "text") {
        currentLine.children.push(child);
      }
    }
    syntheticLines.push(currentLine);
    const syntheticCode = {
      type: "element",
      tagName: "code",
      properties: {},
      children: syntheticLines
    };
    let transformedCode = syntheticCode;
    for (const transformer of transformers)
      transformedCode = transformer?.code?.call(context, transformedCode) || transformedCode;
    root2.children = [];
    for (let i2 = 0; i2 < transformedCode.children.length; i2++) {
      if (i2 > 0)
        root2.children.push({ type: "element", tagName: "br", properties: {}, children: [] });
      const line = transformedCode.children[i2];
      if (line.type === "element")
        root2.children.push(...line.children);
    }
  }
  let result = root2;
  for (const transformer of transformers)
    result = transformer?.root?.call(context, result) || result;
  if (grammarState)
    setLastGrammarStateToMap(result, grammarState);
  return result;
}
function mergeWhitespaceTokens(tokens) {
  return tokens.map((line) => {
    const newLine = [];
    let carryOnContent = "";
    let firstOffset;
    line.forEach((token2, idx) => {
      const isDecorated = token2.fontStyle && (token2.fontStyle & FontStyle.Underline || token2.fontStyle & FontStyle.Strikethrough);
      const couldMerge = !isDecorated;
      if (couldMerge && token2.content.match(/^\s+$/) && line[idx + 1]) {
        if (firstOffset === void 0)
          firstOffset = token2.offset;
        carryOnContent += token2.content;
      } else {
        if (carryOnContent) {
          if (couldMerge) {
            newLine.push({
              ...token2,
              offset: firstOffset,
              content: carryOnContent + token2.content
            });
          } else {
            newLine.push(
              {
                content: carryOnContent,
                offset: firstOffset
              },
              token2
            );
          }
          firstOffset = void 0;
          carryOnContent = "";
        } else {
          newLine.push(token2);
        }
      }
    });
    return newLine;
  });
}
function splitWhitespaceTokens(tokens) {
  return tokens.map((line) => {
    return line.flatMap((token2) => {
      if (token2.content.match(/^\s+$/))
        return token2;
      const match = token2.content.match(/^(\s*)(.*?)(\s*)$/);
      if (!match)
        return token2;
      const [, leading, content, trailing] = match;
      if (!leading && !trailing)
        return token2;
      const expanded = [{
        ...token2,
        offset: token2.offset + leading.length,
        content
      }];
      if (leading) {
        expanded.unshift({
          content: leading,
          offset: token2.offset
        });
      }
      if (trailing) {
        expanded.push({
          content: trailing,
          offset: token2.offset + leading.length + content.length
        });
      }
      return expanded;
    });
  });
}
function mergeAdjacentStyledTokens(tokens) {
  return tokens.map((line) => {
    const newLine = [];
    for (const token2 of line) {
      if (newLine.length === 0) {
        newLine.push({ ...token2 });
        continue;
      }
      const prevToken = newLine[newLine.length - 1];
      const prevStyle = stringifyTokenStyle(prevToken.htmlStyle || getTokenStyleObject(prevToken));
      const currentStyle = stringifyTokenStyle(token2.htmlStyle || getTokenStyleObject(token2));
      const isPrevDecorated = prevToken.fontStyle && (prevToken.fontStyle & FontStyle.Underline || prevToken.fontStyle & FontStyle.Strikethrough);
      const isDecorated = token2.fontStyle && (token2.fontStyle & FontStyle.Underline || token2.fontStyle & FontStyle.Strikethrough);
      if (!isPrevDecorated && !isDecorated && prevStyle === currentStyle) {
        prevToken.content += token2.content;
      } else {
        newLine.push({ ...token2 });
      }
    }
    return newLine;
  });
}
var hastToHtml = toHtml;
function codeToHtml(internal, code, options) {
  const context = {
    meta: {},
    options,
    codeToHast: (_code, _options) => codeToHast(internal, _code, _options),
    codeToTokens: (_code, _options) => codeToTokens(internal, _code, _options)
  };
  let result = hastToHtml(codeToHast(internal, code, options, context));
  for (const transformer of getTransformers(options))
    result = transformer.postprocess?.call(context, result, options) || result;
  return result;
}
var VSCODE_FALLBACK_EDITOR_FG = { light: "#333333", dark: "#bbbbbb" };
var VSCODE_FALLBACK_EDITOR_BG = { light: "#fffffe", dark: "#1e1e1e" };
var RESOLVED_KEY = "__shiki_resolved";
function normalizeTheme(rawTheme) {
  if (rawTheme?.[RESOLVED_KEY])
    return rawTheme;
  const theme = {
    ...rawTheme
  };
  if (theme.tokenColors && !theme.settings) {
    theme.settings = theme.tokenColors;
    delete theme.tokenColors;
  }
  theme.type ||= "dark";
  theme.colorReplacements = { ...theme.colorReplacements };
  theme.settings ||= [];
  let { bg, fg } = theme;
  if (!bg || !fg) {
    const globalSetting = theme.settings ? theme.settings.find((s2) => !s2.name && !s2.scope) : void 0;
    if (globalSetting?.settings?.foreground)
      fg = globalSetting.settings.foreground;
    if (globalSetting?.settings?.background)
      bg = globalSetting.settings.background;
    if (!fg && theme?.colors?.["editor.foreground"])
      fg = theme.colors["editor.foreground"];
    if (!bg && theme?.colors?.["editor.background"])
      bg = theme.colors["editor.background"];
    if (!fg)
      fg = theme.type === "light" ? VSCODE_FALLBACK_EDITOR_FG.light : VSCODE_FALLBACK_EDITOR_FG.dark;
    if (!bg)
      bg = theme.type === "light" ? VSCODE_FALLBACK_EDITOR_BG.light : VSCODE_FALLBACK_EDITOR_BG.dark;
    theme.fg = fg;
    theme.bg = bg;
  }
  if (!(theme.settings[0] && theme.settings[0].settings && !theme.settings[0].scope)) {
    theme.settings.unshift({
      settings: {
        foreground: theme.fg,
        background: theme.bg
      }
    });
  }
  let replacementCount = 0;
  const replacementMap = /* @__PURE__ */ new Map();
  function getReplacementColor(value) {
    if (replacementMap.has(value))
      return replacementMap.get(value);
    replacementCount += 1;
    const hex = `#${replacementCount.toString(16).padStart(8, "0").toLowerCase()}`;
    if (theme.colorReplacements?.[`#${hex}`])
      return getReplacementColor(value);
    replacementMap.set(value, hex);
    return hex;
  }
  theme.settings = theme.settings.map((setting) => {
    const replaceFg = setting.settings?.foreground && !setting.settings.foreground.startsWith("#");
    const replaceBg = setting.settings?.background && !setting.settings.background.startsWith("#");
    if (!replaceFg && !replaceBg)
      return setting;
    const clone2 = {
      ...setting,
      settings: {
        ...setting.settings
      }
    };
    if (replaceFg) {
      const replacement = getReplacementColor(setting.settings.foreground);
      theme.colorReplacements[replacement] = setting.settings.foreground;
      clone2.settings.foreground = replacement;
    }
    if (replaceBg) {
      const replacement = getReplacementColor(setting.settings.background);
      theme.colorReplacements[replacement] = setting.settings.background;
      clone2.settings.background = replacement;
    }
    return clone2;
  });
  for (const key2 of Object.keys(theme.colors || {})) {
    if (key2 === "editor.foreground" || key2 === "editor.background" || key2.startsWith("terminal.ansi")) {
      if (!theme.colors[key2]?.startsWith("#")) {
        const replacement = getReplacementColor(theme.colors[key2]);
        theme.colorReplacements[replacement] = theme.colors[key2];
        theme.colors[key2] = replacement;
      }
    }
  }
  Object.defineProperty(theme, RESOLVED_KEY, {
    enumerable: false,
    writable: false,
    value: true
  });
  return theme;
}
async function resolveLangs(langs) {
  return Array.from(new Set((await Promise.all(
    langs.filter((l2) => !isSpecialLang(l2)).map(async (lang) => await normalizeGetter(lang).then((r4) => Array.isArray(r4) ? r4 : [r4]))
  )).flat()));
}
async function resolveThemes(themes) {
  const resolved = await Promise.all(
    themes.map(
      async (theme) => isSpecialTheme(theme) ? null : normalizeTheme(await normalizeGetter(theme))
    )
  );
  return resolved.filter((i2) => !!i2);
}
var _emitDeprecation = 3;
var _emitError = false;
function warnDeprecated(message, version = 3) {
  if (!_emitDeprecation)
    return;
  if (typeof _emitDeprecation === "number" && version > _emitDeprecation)
    return;
  if (_emitError) {
    throw new Error(`[SHIKI DEPRECATE]: ${message}`);
  } else {
    console.trace(`[SHIKI DEPRECATE]: ${message}`);
  }
}
var ShikiError2 = class extends Error {
  constructor(message) {
    super(message);
    this.name = "ShikiError";
  }
};
function resolveLangAlias(name, alias) {
  if (!alias)
    return name;
  if (alias[name]) {
    const resolved = /* @__PURE__ */ new Set([name]);
    while (alias[name]) {
      name = alias[name];
      if (resolved.has(name))
        throw new ShikiError2(`Circular alias \`${Array.from(resolved).join(" -> ")} -> ${name}\``);
      resolved.add(name);
    }
  }
  return name;
}
var Registry2 = class extends Registry {
  constructor(_resolver, _themes, _langs, _alias = {}) {
    super(_resolver);
    this._resolver = _resolver;
    this._themes = _themes;
    this._langs = _langs;
    this._alias = _alias;
    this._themes.map((t) => this.loadTheme(t));
    this.loadLanguages(this._langs);
  }
  _resolvedThemes = /* @__PURE__ */ new Map();
  _resolvedGrammars = /* @__PURE__ */ new Map();
  _langMap = /* @__PURE__ */ new Map();
  _langGraph = /* @__PURE__ */ new Map();
  _textmateThemeCache = /* @__PURE__ */ new WeakMap();
  _loadedThemesCache = null;
  _loadedLanguagesCache = null;
  getTheme(theme) {
    if (typeof theme === "string")
      return this._resolvedThemes.get(theme);
    else
      return this.loadTheme(theme);
  }
  loadTheme(theme) {
    const _theme = normalizeTheme(theme);
    if (_theme.name) {
      this._resolvedThemes.set(_theme.name, _theme);
      this._loadedThemesCache = null;
    }
    return _theme;
  }
  getLoadedThemes() {
    if (!this._loadedThemesCache)
      this._loadedThemesCache = [...this._resolvedThemes.keys()];
    return this._loadedThemesCache;
  }
  // Override and re-implement this method to cache the textmate themes as `TextMateTheme.createFromRawTheme`
  // is expensive. Themes can switch often especially for dual-theme support.
  //
  // The parent class also accepts `colorMap` as the second parameter, but since we don't use that,
  // we omit here so it's easier to cache the themes.
  setTheme(theme) {
    let textmateTheme = this._textmateThemeCache.get(theme);
    if (!textmateTheme) {
      textmateTheme = Theme.createFromRawTheme(theme);
      this._textmateThemeCache.set(theme, textmateTheme);
    }
    this._syncRegistry.setTheme(textmateTheme);
  }
  getGrammar(name) {
    name = resolveLangAlias(name, this._alias);
    return this._resolvedGrammars.get(name);
  }
  loadLanguage(lang) {
    if (this.getGrammar(lang.name))
      return;
    const embeddedLazilyBy = new Set(
      [...this._langMap.values()].filter((i2) => i2.embeddedLangsLazy?.includes(lang.name))
    );
    this._resolver.addLanguage(lang);
    const grammarConfig = {
      balancedBracketSelectors: lang.balancedBracketSelectors || ["*"],
      unbalancedBracketSelectors: lang.unbalancedBracketSelectors || []
    };
    this._syncRegistry._rawGrammars.set(lang.scopeName, lang);
    const g = this.loadGrammarWithConfiguration(lang.scopeName, 1, grammarConfig);
    g.name = lang.name;
    this._resolvedGrammars.set(lang.name, g);
    if (lang.aliases) {
      lang.aliases.forEach((alias) => {
        this._alias[alias] = lang.name;
      });
    }
    this._loadedLanguagesCache = null;
    if (embeddedLazilyBy.size) {
      for (const e of embeddedLazilyBy) {
        this._resolvedGrammars.delete(e.name);
        this._loadedLanguagesCache = null;
        this._syncRegistry?._injectionGrammars?.delete(e.scopeName);
        this._syncRegistry?._grammars?.delete(e.scopeName);
        this.loadLanguage(this._langMap.get(e.name));
      }
    }
  }
  dispose() {
    super.dispose();
    this._resolvedThemes.clear();
    this._resolvedGrammars.clear();
    this._langMap.clear();
    this._langGraph.clear();
    this._loadedThemesCache = null;
  }
  loadLanguages(langs) {
    for (const lang of langs)
      this.resolveEmbeddedLanguages(lang);
    const langsGraphArray = Array.from(this._langGraph.entries());
    const missingLangs = langsGraphArray.filter(([_2, lang]) => !lang);
    if (missingLangs.length) {
      const dependents = langsGraphArray.filter(([_2, lang]) => {
        if (!lang)
          return false;
        const embedded = lang.embeddedLanguages || lang.embeddedLangs;
        return embedded?.some((l2) => missingLangs.map(([name]) => name).includes(l2));
      }).filter((lang) => !missingLangs.includes(lang));
      throw new ShikiError2(`Missing languages ${missingLangs.map(([name]) => `\`${name}\``).join(", ")}, required by ${dependents.map(([name]) => `\`${name}\``).join(", ")}`);
    }
    for (const [_2, lang] of langsGraphArray)
      this._resolver.addLanguage(lang);
    for (const [_2, lang] of langsGraphArray)
      this.loadLanguage(lang);
  }
  getLoadedLanguages() {
    if (!this._loadedLanguagesCache) {
      this._loadedLanguagesCache = [
        .../* @__PURE__ */ new Set([...this._resolvedGrammars.keys(), ...Object.keys(this._alias)])
      ];
    }
    return this._loadedLanguagesCache;
  }
  resolveEmbeddedLanguages(lang) {
    this._langMap.set(lang.name, lang);
    this._langGraph.set(lang.name, lang);
    const embedded = lang.embeddedLanguages ?? lang.embeddedLangs;
    if (embedded) {
      for (const embeddedLang of embedded)
        this._langGraph.set(embeddedLang, this._langMap.get(embeddedLang));
    }
  }
};
var Resolver = class {
  _langs = /* @__PURE__ */ new Map();
  _scopeToLang = /* @__PURE__ */ new Map();
  _injections = /* @__PURE__ */ new Map();
  _onigLib;
  constructor(engine, langs) {
    this._onigLib = {
      createOnigScanner: (patterns) => engine.createScanner(patterns),
      createOnigString: (s2) => engine.createString(s2)
    };
    langs.forEach((i2) => this.addLanguage(i2));
  }
  get onigLib() {
    return this._onigLib;
  }
  getLangRegistration(langIdOrAlias) {
    return this._langs.get(langIdOrAlias);
  }
  loadGrammar(scopeName) {
    return this._scopeToLang.get(scopeName);
  }
  addLanguage(l2) {
    this._langs.set(l2.name, l2);
    if (l2.aliases) {
      l2.aliases.forEach((a2) => {
        this._langs.set(a2, l2);
      });
    }
    this._scopeToLang.set(l2.scopeName, l2);
    if (l2.injectTo) {
      l2.injectTo.forEach((i2) => {
        if (!this._injections.get(i2))
          this._injections.set(i2, []);
        this._injections.get(i2).push(l2.scopeName);
      });
    }
  }
  getInjections(scopeName) {
    const scopeParts = scopeName.split(".");
    let injections = [];
    for (let i2 = 1; i2 <= scopeParts.length; i2++) {
      const subScopeName = scopeParts.slice(0, i2).join(".");
      injections = [...injections, ...this._injections.get(subScopeName) || []];
    }
    return injections;
  }
};
var instancesCount = 0;
function createShikiInternalSync(options) {
  instancesCount += 1;
  if (options.warnings !== false && instancesCount >= 10 && instancesCount % 10 === 0)
    console.warn(`[Shiki] ${instancesCount} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`);
  let isDisposed = false;
  if (!options.engine)
    throw new ShikiError2("`engine` option is required for synchronous mode");
  const langs = (options.langs || []).flat(1);
  const themes = (options.themes || []).flat(1).map(normalizeTheme);
  const resolver = new Resolver(options.engine, langs);
  const _registry = new Registry2(resolver, themes, langs, options.langAlias);
  let _lastTheme;
  function resolveLangAlias$1(name) {
    return resolveLangAlias(name, options.langAlias);
  }
  function getLanguage(name) {
    ensureNotDisposed();
    const _lang = _registry.getGrammar(typeof name === "string" ? name : name.name);
    if (!_lang)
      throw new ShikiError2(`Language \`${name}\` not found, you may need to load it first`);
    return _lang;
  }
  function getTheme(name) {
    if (name === "none")
      return { bg: "", fg: "", name: "none", settings: [], type: "dark" };
    ensureNotDisposed();
    const _theme = _registry.getTheme(name);
    if (!_theme)
      throw new ShikiError2(`Theme \`${name}\` not found, you may need to load it first`);
    return _theme;
  }
  function setTheme(name) {
    ensureNotDisposed();
    const theme = getTheme(name);
    if (_lastTheme !== name) {
      _registry.setTheme(theme);
      _lastTheme = name;
    }
    const colorMap = _registry.getColorMap();
    return {
      theme,
      colorMap
    };
  }
  function getLoadedThemes() {
    ensureNotDisposed();
    return _registry.getLoadedThemes();
  }
  function getLoadedLanguages() {
    ensureNotDisposed();
    return _registry.getLoadedLanguages();
  }
  function loadLanguageSync(...langs2) {
    ensureNotDisposed();
    _registry.loadLanguages(langs2.flat(1));
  }
  async function loadLanguage(...langs2) {
    return loadLanguageSync(await resolveLangs(langs2));
  }
  function loadThemeSync(...themes2) {
    ensureNotDisposed();
    for (const theme of themes2.flat(1)) {
      _registry.loadTheme(theme);
    }
  }
  async function loadTheme(...themes2) {
    ensureNotDisposed();
    return loadThemeSync(await resolveThemes(themes2));
  }
  function ensureNotDisposed() {
    if (isDisposed)
      throw new ShikiError2("Shiki instance has been disposed");
  }
  function dispose() {
    if (isDisposed)
      return;
    isDisposed = true;
    _registry.dispose();
    instancesCount -= 1;
  }
  return {
    setTheme,
    getTheme,
    getLanguage,
    getLoadedThemes,
    getLoadedLanguages,
    resolveLangAlias: resolveLangAlias$1,
    loadLanguage,
    loadLanguageSync,
    loadTheme,
    loadThemeSync,
    dispose,
    [Symbol.dispose]: dispose
  };
}
async function createShikiInternal(options) {
  if (!options.engine) {
    warnDeprecated("`engine` option is required. Use `createOnigurumaEngine` or `createJavaScriptRegexEngine` to create an engine.");
  }
  const [
    themes,
    langs,
    engine
  ] = await Promise.all([
    resolveThemes(options.themes || []),
    resolveLangs(options.langs || []),
    options.engine
  ]);
  return createShikiInternalSync({
    ...options,
    themes,
    langs,
    engine
  });
}
async function createHighlighterCore(options) {
  const internal = await createShikiInternal(options);
  return {
    getLastGrammarState: (...args) => getLastGrammarState(internal, ...args),
    codeToTokensBase: (code, options2) => codeToTokensBase(internal, code, options2),
    codeToTokensWithThemes: (code, options2) => codeToTokensWithThemes(internal, code, options2),
    codeToTokens: (code, options2) => codeToTokens(internal, code, options2),
    codeToHast: (code, options2) => codeToHast(internal, code, options2),
    codeToHtml: (code, options2) => codeToHtml(internal, code, options2),
    getBundledLanguages: () => ({}),
    getBundledThemes: () => ({}),
    ...internal,
    getInternalContext: () => internal
  };
}
function makeSingletonHighlighterCore(createHighlighter2) {
  let _shiki;
  async function getSingletonHighlighterCore2(options) {
    if (!_shiki) {
      _shiki = createHighlighter2({
        ...options,
        themes: options.themes || [],
        langs: options.langs || []
      });
      return _shiki;
    } else {
      const s2 = await _shiki;
      await Promise.all([
        s2.loadTheme(...options.themes || []),
        s2.loadLanguage(...options.langs || [])
      ]);
      return s2;
    }
  }
  return getSingletonHighlighterCore2;
}
var getSingletonHighlighterCore = makeSingletonHighlighterCore(createHighlighterCore);
function createBundledHighlighter(options) {
  const bundledLanguages2 = options.langs;
  const bundledThemes2 = options.themes;
  const engine = options.engine;
  async function createHighlighter2(options2) {
    function resolveLang(lang) {
      if (typeof lang === "string") {
        lang = options2.langAlias?.[lang] || lang;
        if (isSpecialLang(lang))
          return [];
        const bundle = bundledLanguages2[lang];
        if (!bundle)
          throw new ShikiError(`Language \`${lang}\` is not included in this bundle. You may want to load it from external source.`);
        return bundle;
      }
      return lang;
    }
    function resolveTheme(theme) {
      if (isSpecialTheme(theme))
        return "none";
      if (typeof theme === "string") {
        const bundle = bundledThemes2[theme];
        if (!bundle)
          throw new ShikiError(`Theme \`${theme}\` is not included in this bundle. You may want to load it from external source.`);
        return bundle;
      }
      return theme;
    }
    const _themes = (options2.themes ?? []).map((i2) => resolveTheme(i2));
    const langs = (options2.langs ?? []).map((i2) => resolveLang(i2));
    const core2 = await createHighlighterCore({
      engine: options2.engine ?? engine(),
      ...options2,
      themes: _themes,
      langs
    });
    return {
      ...core2,
      loadLanguage(...langs2) {
        return core2.loadLanguage(...langs2.map(resolveLang));
      },
      loadTheme(...themes) {
        return core2.loadTheme(...themes.map(resolveTheme));
      },
      getBundledLanguages() {
        return bundledLanguages2;
      },
      getBundledThemes() {
        return bundledThemes2;
      }
    };
  }
  return createHighlighter2;
}
function makeSingletonHighlighter(createHighlighter2) {
  let _shiki;
  async function getSingletonHighlighter2(options = {}) {
    if (!_shiki) {
      _shiki = createHighlighter2({
        ...options,
        themes: [],
        langs: []
      });
      const s2 = await _shiki;
      await Promise.all([
        s2.loadTheme(...options.themes || []),
        s2.loadLanguage(...options.langs || [])
      ]);
      return s2;
    } else {
      const s2 = await _shiki;
      await Promise.all([
        s2.loadTheme(...options.themes || []),
        s2.loadLanguage(...options.langs || [])
      ]);
      return s2;
    }
  }
  return getSingletonHighlighter2;
}
function createSingletonShorthands(createHighlighter2, config) {
  const getSingletonHighlighter2 = makeSingletonHighlighter(createHighlighter2);
  async function get(code, options) {
    const shiki = await getSingletonHighlighter2({
      langs: [options.lang],
      themes: "theme" in options ? [options.theme] : Object.values(options.themes)
    });
    const langs = await config?.guessEmbeddedLanguages?.(code, options.lang, shiki);
    if (langs) {
      await shiki.loadLanguage(...langs);
    }
    return shiki;
  }
  return {
    getSingletonHighlighter(options) {
      return getSingletonHighlighter2(options);
    },
    async codeToHtml(code, options) {
      const shiki = await get(code, options);
      return shiki.codeToHtml(code, options);
    },
    async codeToHast(code, options) {
      const shiki = await get(code, options);
      return shiki.codeToHast(code, options);
    },
    async codeToTokens(code, options) {
      const shiki = await get(code, options);
      return shiki.codeToTokens(code, options);
    },
    async codeToTokensBase(code, options) {
      const shiki = await get(code, options);
      return shiki.codeToTokensBase(code, options);
    },
    async codeToTokensWithThemes(code, options) {
      const shiki = await get(code, options);
      return shiki.codeToTokensWithThemes(code, options);
    },
    async getLastGrammarState(code, options) {
      const shiki = await getSingletonHighlighter2({
        langs: [options.lang],
        themes: [options.theme]
      });
      return shiki.getLastGrammarState(code, options);
    }
  };
}

// node_modules/shiki/dist/langs.mjs
var bundledLanguagesInfo = [
  {
    "id": "abap",
    "name": "ABAP",
    "import": (() => import("./abap-K3YRB2FS.js"))
  },
  {
    "id": "actionscript-3",
    "name": "ActionScript",
    "import": (() => import("./actionscript-3-5HKGHE2U.js"))
  },
  {
    "id": "ada",
    "name": "Ada",
    "import": (() => import("./ada-HLMSG5IX.js"))
  },
  {
    "id": "angular-html",
    "name": "Angular HTML",
    "import": (() => import("./angular-html-ASUPF77F.js"))
  },
  {
    "id": "angular-ts",
    "name": "Angular TypeScript",
    "import": (() => import("./angular-ts-655PSJAW.js"))
  },
  {
    "id": "apache",
    "name": "Apache Conf",
    "import": (() => import("./apache-2GIWESMG.js"))
  },
  {
    "id": "apex",
    "name": "Apex",
    "import": (() => import("./apex-HA6JWRLL.js"))
  },
  {
    "id": "apl",
    "name": "APL",
    "import": (() => import("./apl-QIPZSQQN.js"))
  },
  {
    "id": "applescript",
    "name": "AppleScript",
    "import": (() => import("./applescript-GMLSHI5A.js"))
  },
  {
    "id": "ara",
    "name": "Ara",
    "import": (() => import("./ara-FFVBVV5C.js"))
  },
  {
    "id": "asciidoc",
    "name": "AsciiDoc",
    "aliases": [
      "adoc"
    ],
    "import": (() => import("./asciidoc-XDF3SYFG.js"))
  },
  {
    "id": "asm",
    "name": "Assembly",
    "import": (() => import("./asm-TG3HRWLU.js"))
  },
  {
    "id": "astro",
    "name": "Astro",
    "import": (() => import("./astro-NSH3EW2F.js"))
  },
  {
    "id": "awk",
    "name": "AWK",
    "import": (() => import("./awk-VWA47R2H.js"))
  },
  {
    "id": "ballerina",
    "name": "Ballerina",
    "import": (() => import("./ballerina-CG55MGEV.js"))
  },
  {
    "id": "bat",
    "name": "Batch File",
    "aliases": [
      "batch"
    ],
    "import": (() => import("./bat-3QHEG2BT.js"))
  },
  {
    "id": "beancount",
    "name": "Beancount",
    "import": (() => import("./beancount-VR5FM257.js"))
  },
  {
    "id": "berry",
    "name": "Berry",
    "aliases": [
      "be"
    ],
    "import": (() => import("./berry-VKQP5UQ7.js"))
  },
  {
    "id": "bibtex",
    "name": "BibTeX",
    "import": (() => import("./bibtex-GTDJIPZH.js"))
  },
  {
    "id": "bicep",
    "name": "Bicep",
    "import": (() => import("./bicep-23TFZSXY.js"))
  },
  {
    "id": "blade",
    "name": "Blade",
    "import": (() => import("./blade-HSTGBQUN.js"))
  },
  {
    "id": "bsl",
    "name": "1C (Enterprise)",
    "aliases": [
      "1c"
    ],
    "import": (() => import("./bsl-FM5DBZLE.js"))
  },
  {
    "id": "c",
    "name": "C",
    "import": (() => import("./c-ATDQC7IB.js"))
  },
  {
    "id": "c3",
    "name": "C3",
    "import": (() => import("./c3-3HEEXL6J.js"))
  },
  {
    "id": "cadence",
    "name": "Cadence",
    "aliases": [
      "cdc"
    ],
    "import": (() => import("./cadence-DJTBIGKV.js"))
  },
  {
    "id": "cairo",
    "name": "Cairo",
    "import": (() => import("./cairo-V7PEQ3VW.js"))
  },
  {
    "id": "clarity",
    "name": "Clarity",
    "import": (() => import("./clarity-AUOXHZPB.js"))
  },
  {
    "id": "clojure",
    "name": "Clojure",
    "aliases": [
      "clj"
    ],
    "import": (() => import("./clojure-K7SYCUHK.js"))
  },
  {
    "id": "cmake",
    "name": "CMake",
    "import": (() => import("./cmake-52QPFFC6.js"))
  },
  {
    "id": "cobol",
    "name": "COBOL",
    "import": (() => import("./cobol-VFQ7M47P.js"))
  },
  {
    "id": "codeowners",
    "name": "CODEOWNERS",
    "import": (() => import("./codeowners-3FQMWU3H.js"))
  },
  {
    "id": "codeql",
    "name": "CodeQL",
    "aliases": [
      "ql"
    ],
    "import": (() => import("./codeql-IDODLDHN.js"))
  },
  {
    "id": "coffee",
    "name": "CoffeeScript",
    "aliases": [
      "coffeescript"
    ],
    "import": (() => import("./coffee-QPNNJAXU.js"))
  },
  {
    "id": "common-lisp",
    "name": "Common Lisp",
    "aliases": [
      "lisp"
    ],
    "import": (() => import("./common-lisp-FJUGROBA.js"))
  },
  {
    "id": "coq",
    "name": "Coq",
    "import": (() => import("./coq-2VNS4ZUQ.js"))
  },
  {
    "id": "cpp",
    "name": "C++",
    "aliases": [
      "c++"
    ],
    "import": (() => import("./cpp-NWCHB3DS.js"))
  },
  {
    "id": "crystal",
    "name": "Crystal",
    "import": (() => import("./crystal-DSFKOLZX.js"))
  },
  {
    "id": "csharp",
    "name": "C#",
    "aliases": [
      "c#",
      "cs"
    ],
    "import": (() => import("./csharp-N465QEA4.js"))
  },
  {
    "id": "css",
    "name": "CSS",
    "import": (() => import("./css-QXORF6NF.js"))
  },
  {
    "id": "csv",
    "name": "CSV",
    "import": (() => import("./csv-YJPE747V.js"))
  },
  {
    "id": "cue",
    "name": "CUE",
    "import": (() => import("./cue-WDG2U4NS.js"))
  },
  {
    "id": "cypher",
    "name": "Cypher",
    "aliases": [
      "cql"
    ],
    "import": (() => import("./cypher-VVFCGABV.js"))
  },
  {
    "id": "d",
    "name": "D",
    "import": (() => import("./d-IPI3W63J.js"))
  },
  {
    "id": "dart",
    "name": "Dart",
    "import": (() => import("./dart-CY5DD4FB.js"))
  },
  {
    "id": "dax",
    "name": "DAX",
    "import": (() => import("./dax-BK3JTCPT.js"))
  },
  {
    "id": "desktop",
    "name": "Desktop",
    "import": (() => import("./desktop-DHOESH7Q.js"))
  },
  {
    "id": "diff",
    "name": "Diff",
    "import": (() => import("./diff-HWM52OQH.js"))
  },
  {
    "id": "docker",
    "name": "Dockerfile",
    "aliases": [
      "dockerfile"
    ],
    "import": (() => import("./docker-SZCJ72BX.js"))
  },
  {
    "id": "dotenv",
    "name": "dotEnv",
    "import": (() => import("./dotenv-5VNAJ7ZN.js"))
  },
  {
    "id": "dream-maker",
    "name": "Dream Maker",
    "import": (() => import("./dream-maker-GZYNVCPU.js"))
  },
  {
    "id": "edge",
    "name": "Edge",
    "import": (() => import("./edge-FGJUISAX.js"))
  },
  {
    "id": "elixir",
    "name": "Elixir",
    "import": (() => import("./elixir-NWIWW72Q.js"))
  },
  {
    "id": "elm",
    "name": "Elm",
    "import": (() => import("./elm-XG2ZI526.js"))
  },
  {
    "id": "emacs-lisp",
    "name": "Emacs Lisp",
    "aliases": [
      "elisp"
    ],
    "import": (() => import("./emacs-lisp-FAIRLHZ5.js"))
  },
  {
    "id": "erb",
    "name": "ERB",
    "import": (() => import("./erb-IWYUBWC3.js"))
  },
  {
    "id": "erlang",
    "name": "Erlang",
    "aliases": [
      "erl"
    ],
    "import": (() => import("./erlang-KHMJEYLF.js"))
  },
  {
    "id": "fennel",
    "name": "Fennel",
    "import": (() => import("./fennel-WKY7EIKR.js"))
  },
  {
    "id": "fish",
    "name": "Fish",
    "import": (() => import("./fish-4XE5A3BW.js"))
  },
  {
    "id": "fluent",
    "name": "Fluent",
    "aliases": [
      "ftl"
    ],
    "import": (() => import("./fluent-ISIJP6ZN.js"))
  },
  {
    "id": "fortran-fixed-form",
    "name": "Fortran (Fixed Form)",
    "aliases": [
      "f",
      "for",
      "f77"
    ],
    "import": (() => import("./fortran-fixed-form-BYP2KYDR.js"))
  },
  {
    "id": "fortran-free-form",
    "name": "Fortran (Free Form)",
    "aliases": [
      "f90",
      "f95",
      "f03",
      "f08",
      "f18"
    ],
    "import": (() => import("./fortran-free-form-VDY6VE37.js"))
  },
  {
    "id": "fsharp",
    "name": "F#",
    "aliases": [
      "f#",
      "fs"
    ],
    "import": (() => import("./fsharp-VIAOPAVV.js"))
  },
  {
    "id": "gdresource",
    "name": "GDResource",
    "aliases": [
      "tscn",
      "tres"
    ],
    "import": (() => import("./gdresource-4EI6OU25.js"))
  },
  {
    "id": "gdscript",
    "name": "GDScript",
    "aliases": [
      "gd"
    ],
    "import": (() => import("./gdscript-F33OKNY6.js"))
  },
  {
    "id": "gdshader",
    "name": "GDShader",
    "import": (() => import("./gdshader-L7NGE4WM.js"))
  },
  {
    "id": "genie",
    "name": "Genie",
    "import": (() => import("./genie-F3XM2NYZ.js"))
  },
  {
    "id": "gherkin",
    "name": "Gherkin",
    "import": (() => import("./gherkin-M6JMMCP3.js"))
  },
  {
    "id": "git-commit",
    "name": "Git Commit Message",
    "import": (() => import("./git-commit-IABQHZUX.js"))
  },
  {
    "id": "git-rebase",
    "name": "Git Rebase Message",
    "import": (() => import("./git-rebase-WXC4LXVS.js"))
  },
  {
    "id": "gleam",
    "name": "Gleam",
    "import": (() => import("./gleam-N5COVTPW.js"))
  },
  {
    "id": "glimmer-js",
    "name": "Glimmer JS",
    "aliases": [
      "gjs"
    ],
    "import": (() => import("./glimmer-js-VQ6HKPYA.js"))
  },
  {
    "id": "glimmer-ts",
    "name": "Glimmer TS",
    "aliases": [
      "gts"
    ],
    "import": (() => import("./glimmer-ts-KQXSTDOU.js"))
  },
  {
    "id": "glsl",
    "name": "GLSL",
    "import": (() => import("./glsl-CT6D7D6J.js"))
  },
  {
    "id": "gn",
    "name": "GN",
    "import": (() => import("./gn-CL2TX4ET.js"))
  },
  {
    "id": "gnuplot",
    "name": "Gnuplot",
    "import": (() => import("./gnuplot-Q6FOVU5F.js"))
  },
  {
    "id": "go",
    "name": "Go",
    "import": (() => import("./go-6ETEM2YP.js"))
  },
  {
    "id": "graphql",
    "name": "GraphQL",
    "aliases": [
      "gql"
    ],
    "import": (() => import("./graphql-YKXLJCBG.js"))
  },
  {
    "id": "groovy",
    "name": "Groovy",
    "import": (() => import("./groovy-DLLWHVG3.js"))
  },
  {
    "id": "hack",
    "name": "Hack",
    "import": (() => import("./hack-55X663JJ.js"))
  },
  {
    "id": "haml",
    "name": "Ruby Haml",
    "import": (() => import("./haml-P6LJOLHL.js"))
  },
  {
    "id": "handlebars",
    "name": "Handlebars",
    "aliases": [
      "hbs"
    ],
    "import": (() => import("./handlebars-JYHTUMJG.js"))
  },
  {
    "id": "haskell",
    "name": "Haskell",
    "aliases": [
      "hs"
    ],
    "import": (() => import("./haskell-JTMA6EFE.js"))
  },
  {
    "id": "haxe",
    "name": "Haxe",
    "import": (() => import("./haxe-YGZW5443.js"))
  },
  {
    "id": "hcl",
    "name": "HashiCorp HCL",
    "import": (() => import("./hcl-T7INN4I6.js"))
  },
  {
    "id": "hjson",
    "name": "Hjson",
    "import": (() => import("./hjson-TTMPQ4KP.js"))
  },
  {
    "id": "hlsl",
    "name": "HLSL",
    "import": (() => import("./hlsl-EV5VIKU5.js"))
  },
  {
    "id": "html",
    "name": "HTML",
    "import": (() => import("./html-U7D4DWO6.js"))
  },
  {
    "id": "html-derivative",
    "name": "HTML (Derivative)",
    "import": (() => import("./html-derivative-U2F3XFIG.js"))
  },
  {
    "id": "http",
    "name": "HTTP",
    "import": (() => import("./http-VDVYXZQ4.js"))
  },
  {
    "id": "hurl",
    "name": "Hurl",
    "import": (() => import("./hurl-QQ6F4AZU.js"))
  },
  {
    "id": "hxml",
    "name": "HXML",
    "import": (() => import("./hxml-GUPU7FU5.js"))
  },
  {
    "id": "hy",
    "name": "Hy",
    "import": (() => import("./hy-DXHGUCAL.js"))
  },
  {
    "id": "imba",
    "name": "Imba",
    "import": (() => import("./imba-ASYQ42XD.js"))
  },
  {
    "id": "ini",
    "name": "INI",
    "aliases": [
      "properties"
    ],
    "import": (() => import("./ini-PAHXPS4I.js"))
  },
  {
    "id": "java",
    "name": "Java",
    "import": (() => import("./java-5WR4KZYV.js"))
  },
  {
    "id": "javascript",
    "name": "JavaScript",
    "aliases": [
      "js",
      "cjs",
      "mjs"
    ],
    "import": (() => import("./javascript-UPK2BKM5.js"))
  },
  {
    "id": "jinja",
    "name": "Jinja",
    "import": (() => import("./jinja-M3QWWMDS.js"))
  },
  {
    "id": "jison",
    "name": "Jison",
    "import": (() => import("./jison-4MCQ47VE.js"))
  },
  {
    "id": "json",
    "name": "JSON",
    "import": (() => import("./json-RKCUQZXR.js"))
  },
  {
    "id": "json5",
    "name": "JSON5",
    "import": (() => import("./json5-WLBZG5DH.js"))
  },
  {
    "id": "jsonc",
    "name": "JSON with Comments",
    "import": (() => import("./jsonc-ZLHZ2FAZ.js"))
  },
  {
    "id": "jsonl",
    "name": "JSON Lines",
    "import": (() => import("./jsonl-MKKQMDRL.js"))
  },
  {
    "id": "jsonnet",
    "name": "Jsonnet",
    "import": (() => import("./jsonnet-PAXUN6DB.js"))
  },
  {
    "id": "jssm",
    "name": "JSSM",
    "aliases": [
      "fsl"
    ],
    "import": (() => import("./jssm-QKUSTPXW.js"))
  },
  {
    "id": "jsx",
    "name": "JSX",
    "import": (() => import("./jsx-UR476T77.js"))
  },
  {
    "id": "julia",
    "name": "Julia",
    "aliases": [
      "jl"
    ],
    "import": (() => import("./julia-GZVTNYQS.js"))
  },
  {
    "id": "kdl",
    "name": "KDL",
    "import": (() => import("./kdl-ZEBX7VME.js"))
  },
  {
    "id": "kotlin",
    "name": "Kotlin",
    "aliases": [
      "kt",
      "kts"
    ],
    "import": (() => import("./kotlin-FX77DY5I.js"))
  },
  {
    "id": "kusto",
    "name": "Kusto",
    "aliases": [
      "kql"
    ],
    "import": (() => import("./kusto-3CVBCWOI.js"))
  },
  {
    "id": "latex",
    "name": "LaTeX",
    "import": (() => import("./latex-WO4BFXIX.js"))
  },
  {
    "id": "lean",
    "name": "Lean 4",
    "aliases": [
      "lean4"
    ],
    "import": (() => import("./lean-FN5XRSIM.js"))
  },
  {
    "id": "less",
    "name": "Less",
    "import": (() => import("./less-BL4A44VT.js"))
  },
  {
    "id": "liquid",
    "name": "Liquid",
    "import": (() => import("./liquid-CRTSYFLX.js"))
  },
  {
    "id": "llvm",
    "name": "LLVM IR",
    "import": (() => import("./llvm-J5JPVIGU.js"))
  },
  {
    "id": "log",
    "name": "Log file",
    "import": (() => import("./log-LGFTIC3L.js"))
  },
  {
    "id": "logo",
    "name": "Logo",
    "import": (() => import("./logo-L7EASNQ5.js"))
  },
  {
    "id": "lua",
    "name": "Lua",
    "import": (() => import("./lua-WC25I7HV.js"))
  },
  {
    "id": "luau",
    "name": "Luau",
    "import": (() => import("./luau-T5KOP3AP.js"))
  },
  {
    "id": "make",
    "name": "Makefile",
    "aliases": [
      "makefile"
    ],
    "import": (() => import("./make-ELE2WX76.js"))
  },
  {
    "id": "markdown",
    "name": "Markdown",
    "aliases": [
      "md"
    ],
    "import": (() => import("./markdown-Z2FIEIN4.js"))
  },
  {
    "id": "marko",
    "name": "Marko",
    "import": (() => import("./marko-YWRRNLCM.js"))
  },
  {
    "id": "matlab",
    "name": "MATLAB",
    "import": (() => import("./matlab-5UPSBAJI.js"))
  },
  {
    "id": "mdc",
    "name": "MDC",
    "import": (() => import("./mdc-2VQRVVMH.js"))
  },
  {
    "id": "mdx",
    "name": "MDX",
    "import": (() => import("./mdx-HRX6KVJP.js"))
  },
  {
    "id": "mermaid",
    "name": "Mermaid",
    "aliases": [
      "mmd"
    ],
    "import": (() => import("./mermaid-TCYYJONX.js"))
  },
  {
    "id": "mipsasm",
    "name": "MIPS Assembly",
    "aliases": [
      "mips"
    ],
    "import": (() => import("./mipsasm-OXOD5GSP.js"))
  },
  {
    "id": "mojo",
    "name": "Mojo",
    "import": (() => import("./mojo-EE73K5FB.js"))
  },
  {
    "id": "moonbit",
    "name": "MoonBit",
    "aliases": [
      "mbt",
      "mbti"
    ],
    "import": (() => import("./moonbit-OS4PXGYY.js"))
  },
  {
    "id": "move",
    "name": "Move",
    "import": (() => import("./move-5M76BUD7.js"))
  },
  {
    "id": "narrat",
    "name": "Narrat Language",
    "aliases": [
      "nar"
    ],
    "import": (() => import("./narrat-ZUTRTOOP.js"))
  },
  {
    "id": "nextflow",
    "name": "Nextflow",
    "aliases": [
      "nf"
    ],
    "import": (() => import("./nextflow-HJIXHWT5.js"))
  },
  {
    "id": "nginx",
    "name": "Nginx",
    "import": (() => import("./nginx-YL33227R.js"))
  },
  {
    "id": "nim",
    "name": "Nim",
    "import": (() => import("./nim-I33ETGEX.js"))
  },
  {
    "id": "nix",
    "name": "Nix",
    "import": (() => import("./nix-RIXT2MKX.js"))
  },
  {
    "id": "nushell",
    "name": "nushell",
    "aliases": [
      "nu"
    ],
    "import": (() => import("./nushell-U4Q7B5DZ.js"))
  },
  {
    "id": "objective-c",
    "name": "Objective-C",
    "aliases": [
      "objc"
    ],
    "import": (() => import("./objective-c-4VN3I6BO.js"))
  },
  {
    "id": "objective-cpp",
    "name": "Objective-C++",
    "import": (() => import("./objective-cpp-56FURM3A.js"))
  },
  {
    "id": "ocaml",
    "name": "OCaml",
    "import": (() => import("./ocaml-GWITBQJU.js"))
  },
  {
    "id": "odin",
    "name": "Odin",
    "import": (() => import("./odin-WBR4RN4P.js"))
  },
  {
    "id": "openscad",
    "name": "OpenSCAD",
    "aliases": [
      "scad"
    ],
    "import": (() => import("./openscad-HCD3M3NC.js"))
  },
  {
    "id": "pascal",
    "name": "Pascal",
    "import": (() => import("./pascal-553PFT7I.js"))
  },
  {
    "id": "perl",
    "name": "Perl",
    "import": (() => import("./perl-ZIQMFONI.js"))
  },
  {
    "id": "php",
    "name": "PHP",
    "import": (() => import("./php-MM4PUV5J.js"))
  },
  {
    "id": "pkl",
    "name": "Pkl",
    "import": (() => import("./pkl-CICYRRK2.js"))
  },
  {
    "id": "plsql",
    "name": "PL/SQL",
    "import": (() => import("./plsql-475P5E7Q.js"))
  },
  {
    "id": "po",
    "name": "Gettext PO",
    "aliases": [
      "pot",
      "potx"
    ],
    "import": (() => import("./po-MFBYTTCF.js"))
  },
  {
    "id": "polar",
    "name": "Polar",
    "import": (() => import("./polar-5GGOIA75.js"))
  },
  {
    "id": "postcss",
    "name": "PostCSS",
    "import": (() => import("./postcss-GK2SPW62.js"))
  },
  {
    "id": "powerquery",
    "name": "PowerQuery",
    "import": (() => import("./powerquery-MFPEUPI7.js"))
  },
  {
    "id": "powershell",
    "name": "PowerShell",
    "aliases": [
      "ps",
      "ps1"
    ],
    "import": (() => import("./powershell-VS5ZPFYJ.js"))
  },
  {
    "id": "prisma",
    "name": "Prisma",
    "import": (() => import("./prisma-EXZVYSFW.js"))
  },
  {
    "id": "prolog",
    "name": "Prolog",
    "import": (() => import("./prolog-NZZ4G2GV.js"))
  },
  {
    "id": "proto",
    "name": "Protocol Buffer 3",
    "aliases": [
      "protobuf"
    ],
    "import": (() => import("./proto-CKPAW62N.js"))
  },
  {
    "id": "pug",
    "name": "Pug",
    "aliases": [
      "jade"
    ],
    "import": (() => import("./pug-VYFKA6VJ.js"))
  },
  {
    "id": "puppet",
    "name": "Puppet",
    "import": (() => import("./puppet-7CPBM4WI.js"))
  },
  {
    "id": "purescript",
    "name": "PureScript",
    "import": (() => import("./purescript-SQU3FIGF.js"))
  },
  {
    "id": "python",
    "name": "Python",
    "aliases": [
      "py"
    ],
    "import": (() => import("./python-ZGUZLY2U.js"))
  },
  {
    "id": "qml",
    "name": "QML",
    "import": (() => import("./qml-AWUPOY3K.js"))
  },
  {
    "id": "qmldir",
    "name": "QML Directory",
    "import": (() => import("./qmldir-QAKR6AL6.js"))
  },
  {
    "id": "qss",
    "name": "Qt Style Sheets",
    "import": (() => import("./qss-PZEDF5ZQ.js"))
  },
  {
    "id": "r",
    "name": "R",
    "import": (() => import("./r-EZO2BNZN.js"))
  },
  {
    "id": "racket",
    "name": "Racket",
    "import": (() => import("./racket-WT2ADIRM.js"))
  },
  {
    "id": "raku",
    "name": "Raku",
    "aliases": [
      "perl6"
    ],
    "import": (() => import("./raku-OCFB7LFZ.js"))
  },
  {
    "id": "razor",
    "name": "ASP.NET Razor",
    "import": (() => import("./razor-OET3Z34R.js"))
  },
  {
    "id": "reg",
    "name": "Windows Registry Script",
    "import": (() => import("./reg-GNDAFCUG.js"))
  },
  {
    "id": "regexp",
    "name": "RegExp",
    "aliases": [
      "regex"
    ],
    "import": (() => import("./regexp-YNGBEK5D.js"))
  },
  {
    "id": "rel",
    "name": "Rel",
    "import": (() => import("./rel-HP32PZQW.js"))
  },
  {
    "id": "riscv",
    "name": "RISC-V",
    "import": (() => import("./riscv-P4ZJTJFN.js"))
  },
  {
    "id": "ron",
    "name": "RON",
    "import": (() => import("./ron-J4CTQLGX.js"))
  },
  {
    "id": "rosmsg",
    "name": "ROS Interface",
    "import": (() => import("./rosmsg-2EWJOVIL.js"))
  },
  {
    "id": "rst",
    "name": "reStructuredText",
    "import": (() => import("./rst-YLLH5OSK.js"))
  },
  {
    "id": "ruby",
    "name": "Ruby",
    "aliases": [
      "rb"
    ],
    "import": (() => import("./ruby-HOTO3RJY.js"))
  },
  {
    "id": "rust",
    "name": "Rust",
    "aliases": [
      "rs"
    ],
    "import": (() => import("./rust-7I57EZGT.js"))
  },
  {
    "id": "sas",
    "name": "SAS",
    "import": (() => import("./sas-Y2RSZUHI.js"))
  },
  {
    "id": "sass",
    "name": "Sass",
    "import": (() => import("./sass-5O3HJQPH.js"))
  },
  {
    "id": "scala",
    "name": "Scala",
    "import": (() => import("./scala-CSJDHLPS.js"))
  },
  {
    "id": "scheme",
    "name": "Scheme",
    "import": (() => import("./scheme-O275KCJJ.js"))
  },
  {
    "id": "scss",
    "name": "SCSS",
    "import": (() => import("./scss-5WDD6UET.js"))
  },
  {
    "id": "sdbl",
    "name": "1C (Query)",
    "aliases": [
      "1c-query"
    ],
    "import": (() => import("./sdbl-J4CHPGRU.js"))
  },
  {
    "id": "shaderlab",
    "name": "ShaderLab",
    "aliases": [
      "shader"
    ],
    "import": (() => import("./shaderlab-SUDFFJ5H.js"))
  },
  {
    "id": "shellscript",
    "name": "Shell",
    "aliases": [
      "bash",
      "sh",
      "shell",
      "zsh"
    ],
    "import": (() => import("./shellscript-NP52MKBP.js"))
  },
  {
    "id": "shellsession",
    "name": "Shell Session",
    "aliases": [
      "console"
    ],
    "import": (() => import("./shellsession-LNGDTDOR.js"))
  },
  {
    "id": "smalltalk",
    "name": "Smalltalk",
    "import": (() => import("./smalltalk-5RMWX2EH.js"))
  },
  {
    "id": "solidity",
    "name": "Solidity",
    "import": (() => import("./solidity-K7GWEEEJ.js"))
  },
  {
    "id": "soy",
    "name": "Closure Templates",
    "aliases": [
      "closure-templates"
    ],
    "import": (() => import("./soy-3FGB36L4.js"))
  },
  {
    "id": "sparql",
    "name": "SPARQL",
    "import": (() => import("./sparql-KPU5AOHH.js"))
  },
  {
    "id": "splunk",
    "name": "Splunk Query Language",
    "aliases": [
      "spl"
    ],
    "import": (() => import("./splunk-WXNRMEHN.js"))
  },
  {
    "id": "sql",
    "name": "SQL",
    "import": (() => import("./sql-GSKWYOK7.js"))
  },
  {
    "id": "ssh-config",
    "name": "SSH Config",
    "import": (() => import("./ssh-config-HG2TARKK.js"))
  },
  {
    "id": "stata",
    "name": "Stata",
    "import": (() => import("./stata-GKC4F7MS.js"))
  },
  {
    "id": "stylus",
    "name": "Stylus",
    "aliases": [
      "styl"
    ],
    "import": (() => import("./stylus-EUH2VLLZ.js"))
  },
  {
    "id": "surrealql",
    "name": "SurrealQL",
    "aliases": [
      "surql"
    ],
    "import": (() => import("./surrealql-LS5ZMZ2K.js"))
  },
  {
    "id": "svelte",
    "name": "Svelte",
    "import": (() => import("./svelte-EMZPPVK5.js"))
  },
  {
    "id": "swift",
    "name": "Swift",
    "import": (() => import("./swift-7ASFJCPK.js"))
  },
  {
    "id": "system-verilog",
    "name": "SystemVerilog",
    "import": (() => import("./system-verilog-BMODTUC2.js"))
  },
  {
    "id": "systemd",
    "name": "Systemd Units",
    "import": (() => import("./systemd-EFOXHXBE.js"))
  },
  {
    "id": "talonscript",
    "name": "TalonScript",
    "aliases": [
      "talon"
    ],
    "import": (() => import("./talonscript-26ICLGXE.js"))
  },
  {
    "id": "tasl",
    "name": "Tasl",
    "import": (() => import("./tasl-C4BVCTFE.js"))
  },
  {
    "id": "tcl",
    "name": "Tcl",
    "import": (() => import("./tcl-AQGY3QRK.js"))
  },
  {
    "id": "templ",
    "name": "Templ",
    "import": (() => import("./templ-FYFPBFEA.js"))
  },
  {
    "id": "terraform",
    "name": "Terraform",
    "aliases": [
      "tf",
      "tfvars"
    ],
    "import": (() => import("./terraform-VMXGQ4BZ.js"))
  },
  {
    "id": "tex",
    "name": "TeX",
    "import": (() => import("./tex-UIRMABI5.js"))
  },
  {
    "id": "toml",
    "name": "TOML",
    "import": (() => import("./toml-IBSMMV3B.js"))
  },
  {
    "id": "ts-tags",
    "name": "TypeScript with Tags",
    "aliases": [
      "lit"
    ],
    "import": (() => import("./ts-tags-ZRFXFW3I.js"))
  },
  {
    "id": "tsv",
    "name": "TSV",
    "import": (() => import("./tsv-XX7NZFP3.js"))
  },
  {
    "id": "tsx",
    "name": "TSX",
    "import": (() => import("./tsx-NSJU34NC.js"))
  },
  {
    "id": "turtle",
    "name": "Turtle",
    "import": (() => import("./turtle-T53X67PQ.js"))
  },
  {
    "id": "twig",
    "name": "Twig",
    "import": (() => import("./twig-KVMJRLJF.js"))
  },
  {
    "id": "typescript",
    "name": "TypeScript",
    "aliases": [
      "ts",
      "cts",
      "mts"
    ],
    "import": (() => import("./typescript-Y6H7RSYM.js"))
  },
  {
    "id": "typespec",
    "name": "TypeSpec",
    "aliases": [
      "tsp"
    ],
    "import": (() => import("./typespec-7HCCSMKX.js"))
  },
  {
    "id": "typst",
    "name": "Typst",
    "aliases": [
      "typ"
    ],
    "import": (() => import("./typst-XNQ5NBO7.js"))
  },
  {
    "id": "v",
    "name": "V",
    "import": (() => import("./v-BQL5MGKK.js"))
  },
  {
    "id": "vala",
    "name": "Vala",
    "import": (() => import("./vala-6JIPN3BP.js"))
  },
  {
    "id": "vb",
    "name": "Visual Basic",
    "aliases": [
      "cmd"
    ],
    "import": (() => import("./vb-BFNGPD5V.js"))
  },
  {
    "id": "verilog",
    "name": "Verilog",
    "import": (() => import("./verilog-T7MBAAAK.js"))
  },
  {
    "id": "vhdl",
    "name": "VHDL",
    "import": (() => import("./vhdl-HTSFPIAJ.js"))
  },
  {
    "id": "viml",
    "name": "Vim Script",
    "aliases": [
      "vim",
      "vimscript"
    ],
    "import": (() => import("./viml-TGGNQVU5.js"))
  },
  {
    "id": "vue",
    "name": "Vue",
    "import": (() => import("./vue-6G7635JG.js"))
  },
  {
    "id": "vue-html",
    "name": "Vue HTML",
    "import": (() => import("./vue-html-RTR6PAXF.js"))
  },
  {
    "id": "vue-vine",
    "name": "Vue Vine",
    "import": (() => import("./vue-vine-L6BCCKNK.js"))
  },
  {
    "id": "vyper",
    "name": "Vyper",
    "aliases": [
      "vy"
    ],
    "import": (() => import("./vyper-HYHQASRB.js"))
  },
  {
    "id": "wasm",
    "name": "WebAssembly",
    "import": (() => import("./wasm-O3U3SKBB.js"))
  },
  {
    "id": "wenyan",
    "name": "Wenyan",
    "aliases": [
      "文言"
    ],
    "import": (() => import("./wenyan-6HLBVW77.js"))
  },
  {
    "id": "wgsl",
    "name": "WGSL",
    "import": (() => import("./wgsl-XLIJVMCU.js"))
  },
  {
    "id": "wikitext",
    "name": "Wikitext",
    "aliases": [
      "mediawiki",
      "wiki"
    ],
    "import": (() => import("./wikitext-7J2T57AE.js"))
  },
  {
    "id": "wit",
    "name": "WebAssembly Interface Types",
    "import": (() => import("./wit-YEPKVFAM.js"))
  },
  {
    "id": "wolfram",
    "name": "Wolfram",
    "aliases": [
      "wl"
    ],
    "import": (() => import("./wolfram-BWJTT6JO.js"))
  },
  {
    "id": "xml",
    "name": "XML",
    "import": (() => import("./xml-5SAY4RJB.js"))
  },
  {
    "id": "xsl",
    "name": "XSL",
    "import": (() => import("./xsl-M6L3YJMB.js"))
  },
  {
    "id": "yaml",
    "name": "YAML",
    "aliases": [
      "yml"
    ],
    "import": (() => import("./yaml-276KXCBK.js"))
  },
  {
    "id": "zenscript",
    "name": "ZenScript",
    "import": (() => import("./zenscript-R6DDBUF3.js"))
  },
  {
    "id": "zig",
    "name": "Zig",
    "import": (() => import("./zig-KXSA4257.js"))
  }
];
var bundledLanguagesBase = Object.fromEntries(bundledLanguagesInfo.map((i2) => [i2.id, i2.import]));
var bundledLanguagesAlias = Object.fromEntries(bundledLanguagesInfo.flatMap((i2) => i2.aliases?.map((a2) => [a2, i2.import]) || []));
var bundledLanguages = {
  ...bundledLanguagesBase,
  ...bundledLanguagesAlias
};

// node_modules/shiki/dist/themes.mjs
var bundledThemesInfo = [
  {
    "id": "andromeeda",
    "displayName": "Andromeeda",
    "type": "dark",
    "import": (() => import("./andromeeda-7TZMHRDY.js"))
  },
  {
    "id": "aurora-x",
    "displayName": "Aurora X",
    "type": "dark",
    "import": (() => import("./aurora-x-54B5XVG5.js"))
  },
  {
    "id": "ayu-dark",
    "displayName": "Ayu Dark",
    "type": "dark",
    "import": (() => import("./ayu-dark-4C3N3PP3.js"))
  },
  {
    "id": "ayu-light",
    "displayName": "Ayu Light",
    "type": "light",
    "import": (() => import("./ayu-light-37O77YFV.js"))
  },
  {
    "id": "ayu-mirage",
    "displayName": "Ayu Mirage",
    "type": "dark",
    "import": (() => import("./ayu-mirage-CKYH72HG.js"))
  },
  {
    "id": "catppuccin-frappe",
    "displayName": "Catppuccin Frappé",
    "type": "dark",
    "import": (() => import("./catppuccin-frappe-LF2KBMCK.js"))
  },
  {
    "id": "catppuccin-latte",
    "displayName": "Catppuccin Latte",
    "type": "light",
    "import": (() => import("./catppuccin-latte-PQB2DLVE.js"))
  },
  {
    "id": "catppuccin-macchiato",
    "displayName": "Catppuccin Macchiato",
    "type": "dark",
    "import": (() => import("./catppuccin-macchiato-4VDWP7LY.js"))
  },
  {
    "id": "catppuccin-mocha",
    "displayName": "Catppuccin Mocha",
    "type": "dark",
    "import": (() => import("./catppuccin-mocha-A3MENVL4.js"))
  },
  {
    "id": "dark-plus",
    "displayName": "Dark Plus",
    "type": "dark",
    "import": (() => import("./dark-plus-DU7VMEWU.js"))
  },
  {
    "id": "dracula",
    "displayName": "Dracula Theme",
    "type": "dark",
    "import": (() => import("./dracula-O5K2C5SD.js"))
  },
  {
    "id": "dracula-soft",
    "displayName": "Dracula Theme Soft",
    "type": "dark",
    "import": (() => import("./dracula-soft-5TZ6N7NY.js"))
  },
  {
    "id": "everforest-dark",
    "displayName": "Everforest Dark",
    "type": "dark",
    "import": (() => import("./everforest-dark-WY5BY64F.js"))
  },
  {
    "id": "everforest-light",
    "displayName": "Everforest Light",
    "type": "light",
    "import": (() => import("./everforest-light-J7TFQ5LV.js"))
  },
  {
    "id": "github-dark",
    "displayName": "GitHub Dark",
    "type": "dark",
    "import": (() => import("./github-dark-HP7DAT54.js"))
  },
  {
    "id": "github-dark-default",
    "displayName": "GitHub Dark Default",
    "type": "dark",
    "import": (() => import("./github-dark-default-GZ3JCHMB.js"))
  },
  {
    "id": "github-dark-dimmed",
    "displayName": "GitHub Dark Dimmed",
    "type": "dark",
    "import": (() => import("./github-dark-dimmed-PZAEEQDP.js"))
  },
  {
    "id": "github-dark-high-contrast",
    "displayName": "GitHub Dark High Contrast",
    "type": "dark",
    "import": (() => import("./github-dark-high-contrast-TMG4724H.js"))
  },
  {
    "id": "github-light",
    "displayName": "GitHub Light",
    "type": "light",
    "import": (() => import("./github-light-BUL2QHUF.js"))
  },
  {
    "id": "github-light-default",
    "displayName": "GitHub Light Default",
    "type": "light",
    "import": (() => import("./github-light-default-UHIT2UGU.js"))
  },
  {
    "id": "github-light-high-contrast",
    "displayName": "GitHub Light High Contrast",
    "type": "light",
    "import": (() => import("./github-light-high-contrast-WVER5LCJ.js"))
  },
  {
    "id": "gruvbox-dark-hard",
    "displayName": "Gruvbox Dark Hard",
    "type": "dark",
    "import": (() => import("./gruvbox-dark-hard-LB7SHEWM.js"))
  },
  {
    "id": "gruvbox-dark-medium",
    "displayName": "Gruvbox Dark Medium",
    "type": "dark",
    "import": (() => import("./gruvbox-dark-medium-LCEXI2VT.js"))
  },
  {
    "id": "gruvbox-dark-soft",
    "displayName": "Gruvbox Dark Soft",
    "type": "dark",
    "import": (() => import("./gruvbox-dark-soft-PIYAMAPS.js"))
  },
  {
    "id": "gruvbox-light-hard",
    "displayName": "Gruvbox Light Hard",
    "type": "light",
    "import": (() => import("./gruvbox-light-hard-ETS4VPMD.js"))
  },
  {
    "id": "gruvbox-light-medium",
    "displayName": "Gruvbox Light Medium",
    "type": "light",
    "import": (() => import("./gruvbox-light-medium-7PDNUG6C.js"))
  },
  {
    "id": "gruvbox-light-soft",
    "displayName": "Gruvbox Light Soft",
    "type": "light",
    "import": (() => import("./gruvbox-light-soft-PWTKVWGW.js"))
  },
  {
    "id": "horizon",
    "displayName": "Horizon",
    "type": "dark",
    "import": (() => import("./horizon-Y2765E3C.js"))
  },
  {
    "id": "houston",
    "displayName": "Houston",
    "type": "dark",
    "import": (() => import("./houston-ERGGRFS6.js"))
  },
  {
    "id": "kanagawa-dragon",
    "displayName": "Kanagawa Dragon",
    "type": "dark",
    "import": (() => import("./kanagawa-dragon-YYV26NFX.js"))
  },
  {
    "id": "kanagawa-lotus",
    "displayName": "Kanagawa Lotus",
    "type": "light",
    "import": (() => import("./kanagawa-lotus-ECFOGWWG.js"))
  },
  {
    "id": "kanagawa-wave",
    "displayName": "Kanagawa Wave",
    "type": "dark",
    "import": (() => import("./kanagawa-wave-GPA733EF.js"))
  },
  {
    "id": "laserwave",
    "displayName": "LaserWave",
    "type": "dark",
    "import": (() => import("./laserwave-3JKN26VI.js"))
  },
  {
    "id": "light-plus",
    "displayName": "Light Plus",
    "type": "light",
    "import": (() => import("./light-plus-6AX4R73D.js"))
  },
  {
    "id": "material-theme",
    "displayName": "Material Theme",
    "type": "dark",
    "import": (() => import("./material-theme-CZCNFWHS.js"))
  },
  {
    "id": "material-theme-darker",
    "displayName": "Material Theme Darker",
    "type": "dark",
    "import": (() => import("./material-theme-darker-AAGK42VX.js"))
  },
  {
    "id": "material-theme-lighter",
    "displayName": "Material Theme Lighter",
    "type": "light",
    "import": (() => import("./material-theme-lighter-56JCVAFS.js"))
  },
  {
    "id": "material-theme-ocean",
    "displayName": "Material Theme Ocean",
    "type": "dark",
    "import": (() => import("./material-theme-ocean-P6NGA6KA.js"))
  },
  {
    "id": "material-theme-palenight",
    "displayName": "Material Theme Palenight",
    "type": "dark",
    "import": (() => import("./material-theme-palenight-N5MCECDB.js"))
  },
  {
    "id": "min-dark",
    "displayName": "Min Dark",
    "type": "dark",
    "import": (() => import("./min-dark-MFHLXC7T.js"))
  },
  {
    "id": "min-light",
    "displayName": "Min Light",
    "type": "light",
    "import": (() => import("./min-light-AJCZPJGH.js"))
  },
  {
    "id": "monokai",
    "displayName": "Monokai",
    "type": "dark",
    "import": (() => import("./monokai-D4GUPD5U.js"))
  },
  {
    "id": "night-owl",
    "displayName": "Night Owl",
    "type": "dark",
    "import": (() => import("./night-owl-7JZPBFGP.js"))
  },
  {
    "id": "night-owl-light",
    "displayName": "Night Owl Light",
    "type": "light",
    "import": (() => import("./night-owl-light-C3AV34K2.js"))
  },
  {
    "id": "nord",
    "displayName": "Nord",
    "type": "dark",
    "import": (() => import("./nord-RVDWXONM.js"))
  },
  {
    "id": "one-dark-pro",
    "displayName": "One Dark Pro",
    "type": "dark",
    "import": (() => import("./one-dark-pro-NIJ6QWV7.js"))
  },
  {
    "id": "one-light",
    "displayName": "One Light",
    "type": "light",
    "import": (() => import("./one-light-YELMQE2W.js"))
  },
  {
    "id": "plastic",
    "displayName": "Plastic",
    "type": "dark",
    "import": (() => import("./plastic-F2QPSD6C.js"))
  },
  {
    "id": "poimandres",
    "displayName": "Poimandres",
    "type": "dark",
    "import": (() => import("./poimandres-D7HMNBBB.js"))
  },
  {
    "id": "red",
    "displayName": "Red",
    "type": "dark",
    "import": (() => import("./red-5S6XYU4J.js"))
  },
  {
    "id": "rose-pine",
    "displayName": "Rosé Pine",
    "type": "dark",
    "import": (() => import("./rose-pine-J7HEZEOO.js"))
  },
  {
    "id": "rose-pine-dawn",
    "displayName": "Rosé Pine Dawn",
    "type": "light",
    "import": (() => import("./rose-pine-dawn-PYRR7IVY.js"))
  },
  {
    "id": "rose-pine-moon",
    "displayName": "Rosé Pine Moon",
    "type": "dark",
    "import": (() => import("./rose-pine-moon-5N6ZBTWL.js"))
  },
  {
    "id": "slack-dark",
    "displayName": "Slack Dark",
    "type": "dark",
    "import": (() => import("./slack-dark-UHBBD2PI.js"))
  },
  {
    "id": "slack-ochin",
    "displayName": "Slack Ochin",
    "type": "light",
    "import": (() => import("./slack-ochin-S4BUFSPZ.js"))
  },
  {
    "id": "snazzy-light",
    "displayName": "Snazzy Light",
    "type": "light",
    "import": (() => import("./snazzy-light-KIQQINVQ.js"))
  },
  {
    "id": "solarized-dark",
    "displayName": "Solarized Dark",
    "type": "dark",
    "import": (() => import("./solarized-dark-RUSWY6A6.js"))
  },
  {
    "id": "solarized-light",
    "displayName": "Solarized Light",
    "type": "light",
    "import": (() => import("./solarized-light-AFO22Z5V.js"))
  },
  {
    "id": "synthwave-84",
    "displayName": "Synthwave '84",
    "type": "dark",
    "import": (() => import("./synthwave-84-2ZEUOU2B.js"))
  },
  {
    "id": "tokyo-night",
    "displayName": "Tokyo Night",
    "type": "dark",
    "import": (() => import("./tokyo-night-QYILD2QY.js"))
  },
  {
    "id": "vesper",
    "displayName": "Vesper",
    "type": "dark",
    "import": (() => import("./vesper-B64A6YWJ.js"))
  },
  {
    "id": "vitesse-black",
    "displayName": "Vitesse Black",
    "type": "dark",
    "import": (() => import("./vitesse-black-WPCO7JCK.js"))
  },
  {
    "id": "vitesse-dark",
    "displayName": "Vitesse Dark",
    "type": "dark",
    "import": (() => import("./vitesse-dark-RZYHOR36.js"))
  },
  {
    "id": "vitesse-light",
    "displayName": "Vitesse Light",
    "type": "light",
    "import": (() => import("./vitesse-light-ZEYCPZR4.js"))
  }
];
var bundledThemes = Object.fromEntries(bundledThemesInfo.map((i2) => [i2.id, i2.import]));

// node_modules/@shikijs/engine-oniguruma/dist/index.mjs
var ShikiError3 = class extends Error {
  constructor(message) {
    super(message);
    this.name = "ShikiError";
  }
};
function getHeapMax() {
  return 2147483648;
}
function _emscripten_get_now() {
  return typeof performance !== "undefined" ? performance.now() : Date.now();
}
var alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
async function main(init) {
  let wasmMemory;
  let buffer;
  const binding = {};
  function updateGlobalBufferAndViews(buf) {
    buffer = buf;
    binding.HEAPU8 = new Uint8Array(buf);
    binding.HEAPU32 = new Uint32Array(buf);
  }
  function _emscripten_memcpy_big(dest, src, num) {
    binding.HEAPU8.copyWithin(dest, src, src + num);
  }
  function emscripten_realloc_buffer(size) {
    try {
      wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
      updateGlobalBufferAndViews(wasmMemory.buffer);
      return 1;
    } catch {
    }
  }
  function _emscripten_resize_heap(requestedSize) {
    const oldSize = binding.HEAPU8.length;
    requestedSize = requestedSize >>> 0;
    const maxHeapSize = getHeapMax();
    if (requestedSize > maxHeapSize)
      return false;
    for (let cutDown = 1; cutDown <= 4; cutDown *= 2) {
      let overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
      overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
      const newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
      const replacement = emscripten_realloc_buffer(newSize);
      if (replacement)
        return true;
    }
    return false;
  }
  const UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
  function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead = 1024) {
    const endIdx = idx + maxBytesToRead;
    let endPtr = idx;
    while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
    if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
      return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
    }
    let str = "";
    while (idx < endPtr) {
      let u0 = heapOrArray[idx++];
      if (!(u0 & 128)) {
        str += String.fromCharCode(u0);
        continue;
      }
      const u1 = heapOrArray[idx++] & 63;
      if ((u0 & 224) === 192) {
        str += String.fromCharCode((u0 & 31) << 6 | u1);
        continue;
      }
      const u2 = heapOrArray[idx++] & 63;
      if ((u0 & 240) === 224) {
        u0 = (u0 & 15) << 12 | u1 << 6 | u2;
      } else {
        u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
      }
      if (u0 < 65536) {
        str += String.fromCharCode(u0);
      } else {
        const ch = u0 - 65536;
        str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
      }
    }
    return str;
  }
  function UTF8ToString(ptr, maxBytesToRead) {
    return ptr ? UTF8ArrayToString(binding.HEAPU8, ptr, maxBytesToRead) : "";
  }
  const asmLibraryArg = {
    emscripten_get_now: _emscripten_get_now,
    emscripten_memcpy_big: _emscripten_memcpy_big,
    emscripten_resize_heap: _emscripten_resize_heap,
    fd_write: () => 0
  };
  async function createWasm() {
    const info = {
      env: asmLibraryArg,
      wasi_snapshot_preview1: asmLibraryArg
    };
    const exports$1 = await init(info);
    wasmMemory = exports$1.memory;
    updateGlobalBufferAndViews(wasmMemory.buffer);
    Object.assign(binding, exports$1);
    binding.UTF8ToString = UTF8ToString;
  }
  await createWasm();
  return binding;
}
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __publicField = (obj, key2, value) => __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
var onigBinding = null;
function throwLastOnigError(onigBinding2) {
  throw new ShikiError3(onigBinding2.UTF8ToString(onigBinding2.getLastOnigError()));
}
var UtfString = class _UtfString {
  constructor(str) {
    __publicField(this, "utf16Length");
    __publicField(this, "utf8Length");
    __publicField(this, "utf16Value");
    __publicField(this, "utf8Value");
    __publicField(this, "utf16OffsetToUtf8");
    __publicField(this, "utf8OffsetToUtf16");
    const utf16Length = str.length;
    const utf8Length = _UtfString._utf8ByteLength(str);
    const computeIndicesMapping = utf8Length !== utf16Length;
    const utf16OffsetToUtf8 = computeIndicesMapping ? new Uint32Array(utf16Length + 1) : null;
    if (computeIndicesMapping)
      utf16OffsetToUtf8[utf16Length] = utf8Length;
    const utf8OffsetToUtf16 = computeIndicesMapping ? new Uint32Array(utf8Length + 1) : null;
    if (computeIndicesMapping)
      utf8OffsetToUtf16[utf8Length] = utf16Length;
    const utf8Value = new Uint8Array(utf8Length);
    let i8 = 0;
    for (let i16 = 0; i16 < utf16Length; i16++) {
      const charCode = str.charCodeAt(i16);
      let codePoint = charCode;
      let wasSurrogatePair = false;
      if (charCode >= 55296 && charCode <= 56319) {
        if (i16 + 1 < utf16Length) {
          const nextCharCode = str.charCodeAt(i16 + 1);
          if (nextCharCode >= 56320 && nextCharCode <= 57343) {
            codePoint = (charCode - 55296 << 10) + 65536 | nextCharCode - 56320;
            wasSurrogatePair = true;
          }
        }
      }
      if (computeIndicesMapping) {
        utf16OffsetToUtf8[i16] = i8;
        if (wasSurrogatePair)
          utf16OffsetToUtf8[i16 + 1] = i8;
        if (codePoint <= 127) {
          utf8OffsetToUtf16[i8 + 0] = i16;
        } else if (codePoint <= 2047) {
          utf8OffsetToUtf16[i8 + 0] = i16;
          utf8OffsetToUtf16[i8 + 1] = i16;
        } else if (codePoint <= 65535) {
          utf8OffsetToUtf16[i8 + 0] = i16;
          utf8OffsetToUtf16[i8 + 1] = i16;
          utf8OffsetToUtf16[i8 + 2] = i16;
        } else {
          utf8OffsetToUtf16[i8 + 0] = i16;
          utf8OffsetToUtf16[i8 + 1] = i16;
          utf8OffsetToUtf16[i8 + 2] = i16;
          utf8OffsetToUtf16[i8 + 3] = i16;
        }
      }
      if (codePoint <= 127) {
        utf8Value[i8++] = codePoint;
      } else if (codePoint <= 2047) {
        utf8Value[i8++] = 192 | (codePoint & 1984) >>> 6;
        utf8Value[i8++] = 128 | (codePoint & 63) >>> 0;
      } else if (codePoint <= 65535) {
        utf8Value[i8++] = 224 | (codePoint & 61440) >>> 12;
        utf8Value[i8++] = 128 | (codePoint & 4032) >>> 6;
        utf8Value[i8++] = 128 | (codePoint & 63) >>> 0;
      } else {
        utf8Value[i8++] = 240 | (codePoint & 1835008) >>> 18;
        utf8Value[i8++] = 128 | (codePoint & 258048) >>> 12;
        utf8Value[i8++] = 128 | (codePoint & 4032) >>> 6;
        utf8Value[i8++] = 128 | (codePoint & 63) >>> 0;
      }
      if (wasSurrogatePair)
        i16++;
    }
    this.utf16Length = utf16Length;
    this.utf8Length = utf8Length;
    this.utf16Value = str;
    this.utf8Value = utf8Value;
    this.utf16OffsetToUtf8 = utf16OffsetToUtf8;
    this.utf8OffsetToUtf16 = utf8OffsetToUtf16;
  }
  static _utf8ByteLength(str) {
    let result = 0;
    for (let i2 = 0, len = str.length; i2 < len; i2++) {
      const charCode = str.charCodeAt(i2);
      let codepoint = charCode;
      let wasSurrogatePair = false;
      if (charCode >= 55296 && charCode <= 56319) {
        if (i2 + 1 < len) {
          const nextCharCode = str.charCodeAt(i2 + 1);
          if (nextCharCode >= 56320 && nextCharCode <= 57343) {
            codepoint = (charCode - 55296 << 10) + 65536 | nextCharCode - 56320;
            wasSurrogatePair = true;
          }
        }
      }
      if (codepoint <= 127)
        result += 1;
      else if (codepoint <= 2047)
        result += 2;
      else if (codepoint <= 65535)
        result += 3;
      else
        result += 4;
      if (wasSurrogatePair)
        i2++;
    }
    return result;
  }
  createString(onigBinding2) {
    const result = onigBinding2.omalloc(this.utf8Length);
    onigBinding2.HEAPU8.set(this.utf8Value, result);
    return result;
  }
};
var _OnigString = class _OnigString2 {
  constructor(str) {
    __publicField(this, "id", ++_OnigString2.LAST_ID);
    __publicField(this, "_onigBinding");
    __publicField(this, "content");
    __publicField(this, "utf16Length");
    __publicField(this, "utf8Length");
    __publicField(this, "utf16OffsetToUtf8");
    __publicField(this, "utf8OffsetToUtf16");
    __publicField(this, "ptr");
    if (!onigBinding)
      throw new ShikiError3("Must invoke loadWasm first.");
    this._onigBinding = onigBinding;
    this.content = str;
    const utfString = new UtfString(str);
    this.utf16Length = utfString.utf16Length;
    this.utf8Length = utfString.utf8Length;
    this.utf16OffsetToUtf8 = utfString.utf16OffsetToUtf8;
    this.utf8OffsetToUtf16 = utfString.utf8OffsetToUtf16;
    if (this.utf8Length < 1e4 && !_OnigString2._sharedPtrInUse) {
      if (!_OnigString2._sharedPtr)
        _OnigString2._sharedPtr = onigBinding.omalloc(1e4);
      _OnigString2._sharedPtrInUse = true;
      onigBinding.HEAPU8.set(utfString.utf8Value, _OnigString2._sharedPtr);
      this.ptr = _OnigString2._sharedPtr;
    } else {
      this.ptr = utfString.createString(onigBinding);
    }
  }
  convertUtf8OffsetToUtf16(utf8Offset) {
    if (this.utf8OffsetToUtf16) {
      if (utf8Offset < 0)
        return 0;
      if (utf8Offset > this.utf8Length)
        return this.utf16Length;
      return this.utf8OffsetToUtf16[utf8Offset];
    }
    return utf8Offset;
  }
  convertUtf16OffsetToUtf8(utf16Offset) {
    if (this.utf16OffsetToUtf8) {
      if (utf16Offset < 0)
        return 0;
      if (utf16Offset > this.utf16Length)
        return this.utf8Length;
      return this.utf16OffsetToUtf8[utf16Offset];
    }
    return utf16Offset;
  }
  dispose() {
    if (this.ptr === _OnigString2._sharedPtr)
      _OnigString2._sharedPtrInUse = false;
    else
      this._onigBinding.ofree(this.ptr);
  }
};
__publicField(_OnigString, "LAST_ID", 0);
__publicField(_OnigString, "_sharedPtr", 0);
__publicField(_OnigString, "_sharedPtrInUse", false);
var OnigString = _OnigString;
var OnigScanner = class {
  constructor(patterns) {
    __publicField(this, "_onigBinding");
    __publicField(this, "_ptr");
    if (!onigBinding)
      throw new ShikiError3("Must invoke loadWasm first.");
    const strPtrsArr = [];
    const strLenArr = [];
    for (let i2 = 0, len = patterns.length; i2 < len; i2++) {
      const utfString = new UtfString(patterns[i2]);
      strPtrsArr[i2] = utfString.createString(onigBinding);
      strLenArr[i2] = utfString.utf8Length;
    }
    const strPtrsPtr = onigBinding.omalloc(4 * patterns.length);
    onigBinding.HEAPU32.set(strPtrsArr, strPtrsPtr / 4);
    const strLenPtr = onigBinding.omalloc(4 * patterns.length);
    onigBinding.HEAPU32.set(strLenArr, strLenPtr / 4);
    const scannerPtr = onigBinding.createOnigScanner(strPtrsPtr, strLenPtr, patterns.length);
    for (let i2 = 0, len = patterns.length; i2 < len; i2++)
      onigBinding.ofree(strPtrsArr[i2]);
    onigBinding.ofree(strLenPtr);
    onigBinding.ofree(strPtrsPtr);
    if (scannerPtr === 0)
      throwLastOnigError(onigBinding);
    this._onigBinding = onigBinding;
    this._ptr = scannerPtr;
  }
  dispose() {
    this._onigBinding.freeOnigScanner(this._ptr);
  }
  findNextMatchSync(string, startPosition, arg) {
    let options = 0;
    if (typeof arg === "number") {
      options = arg;
    }
    if (typeof string === "string") {
      string = new OnigString(string);
      const result = this._findNextMatchSync(string, startPosition, false, options);
      string.dispose();
      return result;
    }
    return this._findNextMatchSync(string, startPosition, false, options);
  }
  _findNextMatchSync(string, startPosition, debugCall, options) {
    const onigBinding2 = this._onigBinding;
    const resultPtr = onigBinding2.findNextOnigScannerMatch(this._ptr, string.id, string.ptr, string.utf8Length, string.convertUtf16OffsetToUtf8(startPosition), options);
    if (resultPtr === 0) {
      return null;
    }
    const HEAPU32 = onigBinding2.HEAPU32;
    let offset = resultPtr / 4;
    const index = HEAPU32[offset++];
    const count = HEAPU32[offset++];
    const captureIndices = [];
    for (let i2 = 0; i2 < count; i2++) {
      const beg = string.convertUtf8OffsetToUtf16(HEAPU32[offset++]);
      const end = string.convertUtf8OffsetToUtf16(HEAPU32[offset++]);
      captureIndices[i2] = {
        start: beg,
        end,
        length: end - beg
      };
    }
    return {
      index,
      captureIndices
    };
  }
};
function isInstantiatorOptionsObject(dataOrOptions) {
  return typeof dataOrOptions.instantiator === "function";
}
function isInstantiatorModule(dataOrOptions) {
  return typeof dataOrOptions.default === "function";
}
function isDataOptionsObject(dataOrOptions) {
  return typeof dataOrOptions.data !== "undefined";
}
function isResponse(dataOrOptions) {
  return typeof Response !== "undefined" && dataOrOptions instanceof Response;
}
function isArrayBuffer(data) {
  return typeof ArrayBuffer !== "undefined" && (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) || typeof Buffer !== "undefined" && Buffer.isBuffer?.(data) || typeof SharedArrayBuffer !== "undefined" && data instanceof SharedArrayBuffer || typeof Uint32Array !== "undefined" && data instanceof Uint32Array;
}
var initPromise;
function loadWasm(options) {
  if (initPromise)
    return initPromise;
  async function _load() {
    onigBinding = await main(async (info) => {
      let instance = options;
      instance = await instance;
      if (typeof instance === "function")
        instance = await instance(info);
      if (typeof instance === "function")
        instance = await instance(info);
      if (isInstantiatorOptionsObject(instance)) {
        instance = await instance.instantiator(info);
      } else if (isInstantiatorModule(instance)) {
        instance = await instance.default(info);
      } else {
        if (isDataOptionsObject(instance))
          instance = instance.data;
        if (isResponse(instance)) {
          if (typeof WebAssembly.instantiateStreaming === "function")
            instance = await _makeResponseStreamingLoader(instance)(info);
          else
            instance = await _makeResponseNonStreamingLoader(instance)(info);
        } else if (isArrayBuffer(instance)) {
          instance = await _makeArrayBufferLoader(instance)(info);
        } else if (instance instanceof WebAssembly.Module) {
          instance = await _makeArrayBufferLoader(instance)(info);
        } else if ("default" in instance && instance.default instanceof WebAssembly.Module) {
          instance = await _makeArrayBufferLoader(instance.default)(info);
        }
      }
      if ("instance" in instance)
        instance = instance.instance;
      if ("exports" in instance)
        instance = instance.exports;
      return instance;
    });
  }
  initPromise = _load();
  return initPromise;
}
function _makeArrayBufferLoader(data) {
  return (importObject) => WebAssembly.instantiate(data, importObject);
}
function _makeResponseStreamingLoader(data) {
  return (importObject) => WebAssembly.instantiateStreaming(data, importObject);
}
function _makeResponseNonStreamingLoader(data) {
  return async (importObject) => {
    const arrayBuffer = await data.arrayBuffer();
    return WebAssembly.instantiate(arrayBuffer, importObject);
  };
}
async function createOnigurumaEngine(options) {
  if (options)
    await loadWasm(options);
  return {
    createScanner(patterns) {
      return new OnigScanner(patterns.map((p2) => typeof p2 === "string" ? p2 : p2.source));
    },
    createString(s2) {
      return new OnigString(s2);
    }
  };
}

// node_modules/shiki/dist/bundle-full.mjs
var createHighlighter = createBundledHighlighter({
  langs: bundledLanguages,
  themes: bundledThemes,
  engine: () => createOnigurumaEngine(import("./wasm-NBXK2AOS.js"))
});
var {
  codeToHtml: codeToHtml2,
  codeToHast: codeToHast2,
  codeToTokens: codeToTokens2,
  codeToTokensBase: codeToTokensBase2,
  codeToTokensWithThemes: codeToTokensWithThemes2,
  getSingletonHighlighter,
  getLastGrammarState: getLastGrammarState2
} = createSingletonShorthands(
  createHighlighter,
  { guessEmbeddedLanguages }
);

// node_modules/oniguruma-parser/dist/utils.js
var o = String.raw;

// node_modules/oniguruma-parser/dist/tokenizer/tokenize.js
var m = o`\[\^?`;
var b = `c.? | C(?:-.?)?|${o`[pP]\{(?:\^?[-\x20_]*[A-Za-z][-\x20\w]*\})?`}|${o`x[89A-Fa-f]\p{AHex}(?:\\x[89A-Fa-f]\p{AHex})*`}|${o`u(?:\p{AHex}{4})? | x\{[^\}]*\}? | x\p{AHex}{0,2}`}|${o`o\{[^\}]*\}?`}|${o`\d{1,3}`}`;
var y = /[?*+][?+]?|\{(?:\d+(?:,\d*)?|,\d+)\}\??/;
var C = new RegExp(o`
  \\ (?:
    ${b}
    | [gk]<[^>]*>?
    | [gk]'[^']*'?
    | .
  )
  | \( (?:
    \? (?:
      [:=!>({]
      | <[=!]
      | <[^>]*>
      | '[^']*'
      | ~\|?
      | #(?:[^)\\]|\\.?)*
      | [^:)]*[:)]
    )?
    | \*[^\)]*\)?
  )?
  | (?:${y.source})+
  | ${m}
  | .
`.replace(/\s+/g, ""), "gsu");
var T = new RegExp(o`
  \\ (?:
    ${b}
    | .
  )
  | \[:(?:\^?\p{Alpha}+|\^):\]
  | ${m}
  | &&
  | .
`.replace(/\s+/g, ""), "gsu");

// node_modules/oniguruma-parser/dist/parser/parse.js
function w(e) {
  return e.replace(/[- _]+/g, "").toLowerCase();
}

// node_modules/regex/src/utils-internals.js
var noncapturingDelim = String.raw`\(\?(?:[:=!>A-Za-z\-]|<[=!]|\(DEFINE\))`;

// node_modules/regex-utilities/src/index.js
var Context = Object.freeze({
  DEFAULT: "DEFAULT",
  CHAR_CLASS: "CHAR_CLASS"
});

// node_modules/regex/src/atomic.js
var atomicPluginToken = new RegExp(String.raw`(?<noncapturingStart>${noncapturingDelim})|(?<capturingStart>\((?:\?<[^>]+>)?)|\\?.`, "gsu");
var baseQuantifier = String.raw`(?:[?*+]|\{\d+(?:,\d*)?\})`;
var possessivePluginToken = new RegExp(String.raw`
\\(?: \d+
  | c[A-Za-z]
  | [gk]<[^>]+>
  | [pPu]\{[^\}]+\}
  | u[A-Fa-f\d]{4}
  | x[A-Fa-f\d]{2}
  )
| \((?: \? (?: [:=!>]
  | <(?:[=!]|[^>]+>)
  | [A-Za-z\-]+:
  | \(DEFINE\)
  ))?
| (?<qBase>${baseQuantifier})(?<qMod>[?+]?)(?<invalidQ>[?*+\{]?)
| \\?.
`.replace(/\s+/g, ""), "gsu");

// node_modules/regex-recursion/src/index.js
var r2 = String.raw;
var gRToken = r2`\\g<(?<gRNameOrNum>[^>&]+)&R=(?<gRDepth>[^>]+)>`;
var recursiveToken = r2`\(\?R=(?<rDepth>[^\)]+)\)|${gRToken}`;
var namedCaptureDelim = r2`\(\?<(?![=!])(?<captureName>[^>]+)>`;
var captureDelim = r2`${namedCaptureDelim}|(?<unnamed>\()(?!\?)`;
var token = new RegExp(r2`${namedCaptureDelim}|${recursiveToken}|\(\?|\\?.`, "gsu");

// node_modules/oniguruma-to-es/dist/esm/index.js
var cp = String.fromCodePoint;
var r3 = String.raw;
var envFlags = {
  flagGroups: (() => {
    try {
      new RegExp("(?i:)");
    } catch {
      return false;
    }
    return true;
  })(),
  unicodeSets: (() => {
    try {
      new RegExp("[[]]", "v");
    } catch {
      return false;
    }
    return true;
  })()
};
envFlags.bugFlagVLiteralHyphenIsRange = envFlags.unicodeSets ? (() => {
  try {
    new RegExp(r3`[\d\-a]`, "v");
  } catch {
    return true;
  }
  return false;
})() : false;
envFlags.bugNestedClassIgnoresNegation = envFlags.unicodeSets && new RegExp("[[^a]]", "v").test("a");
var CharsWithoutIgnoreCaseExpansion = /* @__PURE__ */ new Set([
  cp(304),
  // İ
  cp(305)
  // ı
]);
var defaultWordChar = r3`[\p{L}\p{M}\p{N}\p{Pc}]`;
var JsUnicodePropertyMap = new Map(
  `C Other
Cc Control cntrl
Cf Format
Cn Unassigned
Co Private_Use
Cs Surrogate
L Letter
LC Cased_Letter
Ll Lowercase_Letter
Lm Modifier_Letter
Lo Other_Letter
Lt Titlecase_Letter
Lu Uppercase_Letter
M Mark Combining_Mark
Mc Spacing_Mark
Me Enclosing_Mark
Mn Nonspacing_Mark
N Number
Nd Decimal_Number digit
Nl Letter_Number
No Other_Number
P Punctuation punct
Pc Connector_Punctuation
Pd Dash_Punctuation
Pe Close_Punctuation
Pf Final_Punctuation
Pi Initial_Punctuation
Po Other_Punctuation
Ps Open_Punctuation
S Symbol
Sc Currency_Symbol
Sk Modifier_Symbol
Sm Math_Symbol
So Other_Symbol
Z Separator
Zl Line_Separator
Zp Paragraph_Separator
Zs Space_Separator
ASCII
ASCII_Hex_Digit AHex
Alphabetic Alpha
Any
Assigned
Bidi_Control Bidi_C
Bidi_Mirrored Bidi_M
Case_Ignorable CI
Cased
Changes_When_Casefolded CWCF
Changes_When_Casemapped CWCM
Changes_When_Lowercased CWL
Changes_When_NFKC_Casefolded CWKCF
Changes_When_Titlecased CWT
Changes_When_Uppercased CWU
Dash
Default_Ignorable_Code_Point DI
Deprecated Dep
Diacritic Dia
Emoji
Emoji_Component EComp
Emoji_Modifier EMod
Emoji_Modifier_Base EBase
Emoji_Presentation EPres
Extended_Pictographic ExtPict
Extender Ext
Grapheme_Base Gr_Base
Grapheme_Extend Gr_Ext
Hex_Digit Hex
IDS_Binary_Operator IDSB
IDS_Trinary_Operator IDST
ID_Continue IDC
ID_Start IDS
Ideographic Ideo
Join_Control Join_C
Logical_Order_Exception LOE
Lowercase Lower
Math
Noncharacter_Code_Point NChar
Pattern_Syntax Pat_Syn
Pattern_White_Space Pat_WS
Quotation_Mark QMark
Radical
Regional_Indicator RI
Sentence_Terminal STerm
Soft_Dotted SD
Terminal_Punctuation Term
Unified_Ideograph UIdeo
Uppercase Upper
Variation_Selector VS
White_Space space
XID_Continue XIDC
XID_Start XIDS`.split(/\s/).map((p2) => [w(p2), p2])
);
var LowerToAlternativeLowerCaseMap = /* @__PURE__ */ new Map([
  ["s", cp(383)],
  // s, ſ
  [cp(383), "s"]
  // ſ, s
]);
var LowerToAlternativeUpperCaseMap = /* @__PURE__ */ new Map([
  [cp(223), cp(7838)],
  // ß, ẞ
  [cp(107), cp(8490)],
  // k, K (Kelvin)
  [cp(229), cp(8491)],
  // å, Å (Angstrom)
  [cp(969), cp(8486)]
  // ω, Ω (Ohm)
]);
var LowerToTitleCaseMap = new Map([
  titleEntry(453),
  titleEntry(456),
  titleEntry(459),
  titleEntry(498),
  ...titleRange(8072, 8079),
  ...titleRange(8088, 8095),
  ...titleRange(8104, 8111),
  titleEntry(8124),
  titleEntry(8140),
  titleEntry(8188)
]);
var PosixClassMap = /* @__PURE__ */ new Map([
  ["alnum", r3`[\p{Alpha}\p{Nd}]`],
  ["alpha", r3`\p{Alpha}`],
  ["ascii", r3`\p{ASCII}`],
  ["blank", r3`[\p{Zs}\t]`],
  ["cntrl", r3`\p{Cc}`],
  ["digit", r3`\p{Nd}`],
  ["graph", r3`[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]`],
  ["lower", r3`\p{Lower}`],
  ["print", r3`[[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]\p{Zs}]`],
  ["punct", r3`[\p{P}\p{S}]`],
  // Updated value from Onig 6.9.9; changed from Unicode `\p{punct}`
  ["space", r3`\p{space}`],
  ["upper", r3`\p{Upper}`],
  ["word", r3`[\p{Alpha}\p{M}\p{Nd}\p{Pc}]`],
  ["xdigit", r3`\p{AHex}`]
]);
function range(start, end) {
  const range2 = [];
  for (let i2 = start; i2 <= end; i2++) {
    range2.push(i2);
  }
  return range2;
}
function titleEntry(codePoint) {
  const char = cp(codePoint);
  return [char.toLowerCase(), char];
}
function titleRange(start, end) {
  return range(start, end).map((codePoint) => titleEntry(codePoint));
}
var CharCodeEscapeMap = /* @__PURE__ */ new Map([
  [9, r3`\t`],
  // horizontal tab
  [10, r3`\n`],
  // line feed
  [11, r3`\v`],
  // vertical tab
  [12, r3`\f`],
  // form feed
  [13, r3`\r`],
  // carriage return
  [8232, r3`\u2028`],
  // line separator
  [8233, r3`\u2029`],
  // paragraph separator
  [65279, r3`\uFEFF`]
  // ZWNBSP/BOM
]);
var casedRe = new RegExp("^\\p{Cased}$", "u");

// node_modules/vitepress-demo-plugin/dist/index.js
var import_path = __toESM(require_path());
var import_fs = __toESM(require_fs());
var et = (n, i2) => {
  const e = n.__vccOpts || n;
  for (const [t, a2] of i2)
    e[t] = a2;
  return e;
};
var Ui = {};
var Fi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "lucide lucide-code"
};
function zi(n, i2) {
  return openBlock(), createElementBlock("svg", Fi, i2[0] || (i2[0] = [
    createBaseVNode("polyline", { points: "16 18 22 12 16 6" }, null, -1),
    createBaseVNode("polyline", { points: "8 6 2 12 8 18" }, null, -1)
  ]));
}
var Ki = et(Ui, [["render", zi]]);
var qi = {};
var Vi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "lucide lucide-code-xml"
};
function Gi(n, i2) {
  return openBlock(), createElementBlock("svg", Vi, i2[0] || (i2[0] = [
    createBaseVNode("path", { d: "m18 16 4-4-4-4" }, null, -1),
    createBaseVNode("path", { d: "m6 8-4 4 4 4" }, null, -1),
    createBaseVNode("path", { d: "m14.5 4-5 16" }, null, -1)
  ]));
}
var Hi = et(qi, [["render", Gi]]);
var Xi = {};
var Qi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "lucide lucide-copy"
};
function Ji(n, i2) {
  return openBlock(), createElementBlock("svg", Qi, i2[0] || (i2[0] = [
    createBaseVNode("rect", {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2"
    }, null, -1),
    createBaseVNode("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }, null, -1)
  ]));
}
var Zi = et(Xi, [["render", Ji]]);
var Yi = {};
var tn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "lucide lucide-arrow-up-from-line"
};
function en(n, i2) {
  return openBlock(), createElementBlock("svg", tn, i2[0] || (i2[0] = [
    createBaseVNode("path", { d: "m18 9-6-6-6 6" }, null, -1),
    createBaseVNode("path", { d: "M12 3v14" }, null, -1),
    createBaseVNode("path", { d: "M5 21h14" }, null, -1)
  ]));
}
var nn = et(Yi, [["render", en]]);
function sn(n) {
  return n === "vue" ? "/src/Demo.vue" : n === "react" ? "/src/Demo.tsx" : "index.html";
}
var $ = ((n) => (n.VUE = "vue", n.REACT = "react", n.HTML = "html", n))($ || {});
var rt = ((n) => (n.STACKBLITZ = "stackblitz", n.CODESANDBOX = "codesandbox", n))(rt || {});
var di = "vitepress-demo";
var mi = "This is a demo from vitepress-demo-plugin";
var It = {};
var gi = { exports: {} };
(function(n) {
  var i2 = (function() {
    var e = String.fromCharCode, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", _2 = {};
    function f(u2, g) {
      if (!_2[u2]) {
        _2[u2] = {};
        for (var v = 0; v < u2.length; v++)
          _2[u2][u2.charAt(v)] = v;
      }
      return _2[u2][g];
    }
    var o3 = {
      compressToBase64: function(u2) {
        if (u2 == null)
          return "";
        var g = o3._compress(u2, 6, function(v) {
          return t.charAt(v);
        });
        switch (g.length % 4) {
          default:
          case 0:
            return g;
          case 1:
            return g + "===";
          case 2:
            return g + "==";
          case 3:
            return g + "=";
        }
      },
      decompressFromBase64: function(u2) {
        return u2 == null ? "" : u2 == "" ? null : o3._decompress(u2.length, 32, function(g) {
          return f(t, u2.charAt(g));
        });
      },
      compressToUTF16: function(u2) {
        return u2 == null ? "" : o3._compress(u2, 15, function(g) {
          return e(g + 32);
        }) + " ";
      },
      decompressFromUTF16: function(u2) {
        return u2 == null ? "" : u2 == "" ? null : o3._decompress(u2.length, 16384, function(g) {
          return u2.charCodeAt(g) - 32;
        });
      },
      compressToUint8Array: function(u2) {
        for (var g = o3.compress(u2), v = new Uint8Array(g.length * 2), b3 = 0, c = g.length; b3 < c; b3++) {
          var k2 = g.charCodeAt(b3);
          v[b3 * 2] = k2 >>> 8, v[b3 * 2 + 1] = k2 % 256;
        }
        return v;
      },
      decompressFromUint8Array: function(u2) {
        if (u2 == null)
          return o3.decompress(u2);
        for (var g = new Array(u2.length / 2), v = 0, b3 = g.length; v < b3; v++)
          g[v] = u2[v * 2] * 256 + u2[v * 2 + 1];
        var c = [];
        return g.forEach(function(k2) {
          c.push(e(k2));
        }), o3.decompress(c.join(""));
      },
      compressToEncodedURIComponent: function(u2) {
        return u2 == null ? "" : o3._compress(u2, 6, function(g) {
          return a2.charAt(g);
        });
      },
      decompressFromEncodedURIComponent: function(u2) {
        return u2 == null ? "" : u2 == "" ? null : (u2 = u2.replace(/ /g, "+"), o3._decompress(u2.length, 32, function(g) {
          return f(a2, u2.charAt(g));
        }));
      },
      compress: function(u2) {
        return o3._compress(u2, 16, function(g) {
          return e(g);
        });
      },
      _compress: function(u2, g, v) {
        if (u2 == null)
          return "";
        var b3, c, k2 = {}, C3 = {}, S2 = "", h = "", r4 = "", d = 2, T2 = 3, x = 2, E2 = [], l2 = 0, m3 = 0, p2;
        for (p2 = 0; p2 < u2.length; p2 += 1)
          if (S2 = u2.charAt(p2), Object.prototype.hasOwnProperty.call(k2, S2) || (k2[S2] = T2++, C3[S2] = true), h = r4 + S2, Object.prototype.hasOwnProperty.call(k2, h))
            r4 = h;
          else {
            if (Object.prototype.hasOwnProperty.call(C3, r4)) {
              if (r4.charCodeAt(0) < 256) {
                for (b3 = 0; b3 < x; b3++)
                  l2 = l2 << 1, m3 == g - 1 ? (m3 = 0, E2.push(v(l2)), l2 = 0) : m3++;
                for (c = r4.charCodeAt(0), b3 = 0; b3 < 8; b3++)
                  l2 = l2 << 1 | c & 1, m3 == g - 1 ? (m3 = 0, E2.push(v(l2)), l2 = 0) : m3++, c = c >> 1;
              } else {
                for (c = 1, b3 = 0; b3 < x; b3++)
                  l2 = l2 << 1 | c, m3 == g - 1 ? (m3 = 0, E2.push(v(l2)), l2 = 0) : m3++, c = 0;
                for (c = r4.charCodeAt(0), b3 = 0; b3 < 16; b3++)
                  l2 = l2 << 1 | c & 1, m3 == g - 1 ? (m3 = 0, E2.push(v(l2)), l2 = 0) : m3++, c = c >> 1;
              }
              d--, d == 0 && (d = Math.pow(2, x), x++), delete C3[r4];
            } else
              for (c = k2[r4], b3 = 0; b3 < x; b3++)
                l2 = l2 << 1 | c & 1, m3 == g - 1 ? (m3 = 0, E2.push(v(l2)), l2 = 0) : m3++, c = c >> 1;
            d--, d == 0 && (d = Math.pow(2, x), x++), k2[h] = T2++, r4 = String(S2);
          }
        if (r4 !== "") {
          if (Object.prototype.hasOwnProperty.call(C3, r4)) {
            if (r4.charCodeAt(0) < 256) {
              for (b3 = 0; b3 < x; b3++)
                l2 = l2 << 1, m3 == g - 1 ? (m3 = 0, E2.push(v(l2)), l2 = 0) : m3++;
              for (c = r4.charCodeAt(0), b3 = 0; b3 < 8; b3++)
                l2 = l2 << 1 | c & 1, m3 == g - 1 ? (m3 = 0, E2.push(v(l2)), l2 = 0) : m3++, c = c >> 1;
            } else {
              for (c = 1, b3 = 0; b3 < x; b3++)
                l2 = l2 << 1 | c, m3 == g - 1 ? (m3 = 0, E2.push(v(l2)), l2 = 0) : m3++, c = 0;
              for (c = r4.charCodeAt(0), b3 = 0; b3 < 16; b3++)
                l2 = l2 << 1 | c & 1, m3 == g - 1 ? (m3 = 0, E2.push(v(l2)), l2 = 0) : m3++, c = c >> 1;
            }
            d--, d == 0 && (d = Math.pow(2, x), x++), delete C3[r4];
          } else
            for (c = k2[r4], b3 = 0; b3 < x; b3++)
              l2 = l2 << 1 | c & 1, m3 == g - 1 ? (m3 = 0, E2.push(v(l2)), l2 = 0) : m3++, c = c >> 1;
          d--, d == 0 && (d = Math.pow(2, x), x++);
        }
        for (c = 2, b3 = 0; b3 < x; b3++)
          l2 = l2 << 1 | c & 1, m3 == g - 1 ? (m3 = 0, E2.push(v(l2)), l2 = 0) : m3++, c = c >> 1;
        for (; ; )
          if (l2 = l2 << 1, m3 == g - 1) {
            E2.push(v(l2));
            break;
          } else
            m3++;
        return E2.join("");
      },
      decompress: function(u2) {
        return u2 == null ? "" : u2 == "" ? null : o3._decompress(u2.length, 32768, function(g) {
          return u2.charCodeAt(g);
        });
      },
      _decompress: function(u2, g, v) {
        var b3 = [], c = 4, k2 = 4, C3 = 3, S2 = "", h = [], r4, d, T2, x, E2, l2, m3, p2 = { val: v(0), position: g, index: 1 };
        for (r4 = 0; r4 < 3; r4 += 1)
          b3[r4] = r4;
        for (T2 = 0, E2 = Math.pow(2, 2), l2 = 1; l2 != E2; )
          x = p2.val & p2.position, p2.position >>= 1, p2.position == 0 && (p2.position = g, p2.val = v(p2.index++)), T2 |= (x > 0 ? 1 : 0) * l2, l2 <<= 1;
        switch (T2) {
          case 0:
            for (T2 = 0, E2 = Math.pow(2, 8), l2 = 1; l2 != E2; )
              x = p2.val & p2.position, p2.position >>= 1, p2.position == 0 && (p2.position = g, p2.val = v(p2.index++)), T2 |= (x > 0 ? 1 : 0) * l2, l2 <<= 1;
            m3 = e(T2);
            break;
          case 1:
            for (T2 = 0, E2 = Math.pow(2, 16), l2 = 1; l2 != E2; )
              x = p2.val & p2.position, p2.position >>= 1, p2.position == 0 && (p2.position = g, p2.val = v(p2.index++)), T2 |= (x > 0 ? 1 : 0) * l2, l2 <<= 1;
            m3 = e(T2);
            break;
          case 2:
            return "";
        }
        for (b3[3] = m3, d = m3, h.push(m3); ; ) {
          if (p2.index > u2)
            return "";
          for (T2 = 0, E2 = Math.pow(2, C3), l2 = 1; l2 != E2; )
            x = p2.val & p2.position, p2.position >>= 1, p2.position == 0 && (p2.position = g, p2.val = v(p2.index++)), T2 |= (x > 0 ? 1 : 0) * l2, l2 <<= 1;
          switch (m3 = T2) {
            case 0:
              for (T2 = 0, E2 = Math.pow(2, 8), l2 = 1; l2 != E2; )
                x = p2.val & p2.position, p2.position >>= 1, p2.position == 0 && (p2.position = g, p2.val = v(p2.index++)), T2 |= (x > 0 ? 1 : 0) * l2, l2 <<= 1;
              b3[k2++] = e(T2), m3 = k2 - 1, c--;
              break;
            case 1:
              for (T2 = 0, E2 = Math.pow(2, 16), l2 = 1; l2 != E2; )
                x = p2.val & p2.position, p2.position >>= 1, p2.position == 0 && (p2.position = g, p2.val = v(p2.index++)), T2 |= (x > 0 ? 1 : 0) * l2, l2 <<= 1;
              b3[k2++] = e(T2), m3 = k2 - 1, c--;
              break;
            case 2:
              return h.join("");
          }
          if (c == 0 && (c = Math.pow(2, C3), C3++), b3[m3])
            S2 = b3[m3];
          else if (m3 === k2)
            S2 = d + d.charAt(0);
          else
            return null;
          h.push(S2), b3[k2++] = d + S2.charAt(0), c--, d = S2, c == 0 && (c = Math.pow(2, C3), C3++);
        }
      }
    };
    return o3;
  })();
  n != null ? n.exports = i2 : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
    return i2;
  });
})(gi);
Object.defineProperty(It, "__esModule", { value: true });
It.getParameters = void 0;
var rn = gi.exports;
function an(n) {
  return rn.compressToBase64(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function on(n) {
  return an(JSON.stringify(n));
}
It.getParameters = on;
var Pt = void 0;
var _n = It;
Pt = _n.getParameters;
var vi = { exports: {} };
var yt = {};
var Ot = { exports: {} };
var Gt = {};
var Ht = {};
var $e;
function pe() {
  if ($e)
    return Ht;
  $e = 1;
  function n(t) {
    this.__parent = t, this.__character_count = 0, this.__indent_count = -1, this.__alignment_count = 0, this.__wrap_point_index = 0, this.__wrap_point_character_count = 0, this.__wrap_point_indent_count = -1, this.__wrap_point_alignment_count = 0, this.__items = [];
  }
  n.prototype.clone_empty = function() {
    var t = new n(this.__parent);
    return t.set_indent(this.__indent_count, this.__alignment_count), t;
  }, n.prototype.item = function(t) {
    return t < 0 ? this.__items[this.__items.length + t] : this.__items[t];
  }, n.prototype.has_match = function(t) {
    for (var a2 = this.__items.length - 1; a2 >= 0; a2--)
      if (this.__items[a2].match(t))
        return true;
    return false;
  }, n.prototype.set_indent = function(t, a2) {
    this.is_empty() && (this.__indent_count = t || 0, this.__alignment_count = a2 || 0, this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count));
  }, n.prototype._set_wrap_point = function() {
    this.__parent.wrap_line_length && (this.__wrap_point_index = this.__items.length, this.__wrap_point_character_count = this.__character_count, this.__wrap_point_indent_count = this.__parent.next_line.__indent_count, this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count);
  }, n.prototype._should_wrap = function() {
    return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count;
  }, n.prototype._allow_wrap = function() {
    if (this._should_wrap()) {
      this.__parent.add_new_line();
      var t = this.__parent.current_line;
      return t.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count), t.__items = this.__items.slice(this.__wrap_point_index), this.__items = this.__items.slice(0, this.__wrap_point_index), t.__character_count += this.__character_count - this.__wrap_point_character_count, this.__character_count = this.__wrap_point_character_count, t.__items[0] === " " && (t.__items.splice(0, 1), t.__character_count -= 1), true;
    }
    return false;
  }, n.prototype.is_empty = function() {
    return this.__items.length === 0;
  }, n.prototype.last = function() {
    return this.is_empty() ? null : this.__items[this.__items.length - 1];
  }, n.prototype.push = function(t) {
    this.__items.push(t);
    var a2 = t.lastIndexOf(`
`);
    a2 !== -1 ? this.__character_count = t.length - a2 : this.__character_count += t.length;
  }, n.prototype.pop = function() {
    var t = null;
    return this.is_empty() || (t = this.__items.pop(), this.__character_count -= t.length), t;
  }, n.prototype._remove_indent = function() {
    this.__indent_count > 0 && (this.__indent_count -= 1, this.__character_count -= this.__parent.indent_size);
  }, n.prototype._remove_wrap_indent = function() {
    this.__wrap_point_indent_count > 0 && (this.__wrap_point_indent_count -= 1);
  }, n.prototype.trim = function() {
    for (; this.last() === " "; )
      this.__items.pop(), this.__character_count -= 1;
  }, n.prototype.toString = function() {
    var t = "";
    return this.is_empty() ? this.__parent.indent_empty_lines && (t = this.__parent.get_indent_string(this.__indent_count)) : (t = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count), t += this.__items.join("")), t;
  };
  function i2(t, a2) {
    this.__cache = [""], this.__indent_size = t.indent_size, this.__indent_string = t.indent_char, t.indent_with_tabs || (this.__indent_string = new Array(t.indent_size + 1).join(t.indent_char)), a2 = a2 || "", t.indent_level > 0 && (a2 = new Array(t.indent_level + 1).join(this.__indent_string)), this.__base_string = a2, this.__base_string_length = a2.length;
  }
  i2.prototype.get_indent_size = function(t, a2) {
    var _2 = this.__base_string_length;
    return a2 = a2 || 0, t < 0 && (_2 = 0), _2 += t * this.__indent_size, _2 += a2, _2;
  }, i2.prototype.get_indent_string = function(t, a2) {
    var _2 = this.__base_string;
    return a2 = a2 || 0, t < 0 && (t = 0, _2 = ""), a2 += t * this.__indent_size, this.__ensure_cache(a2), _2 += this.__cache[a2], _2;
  }, i2.prototype.__ensure_cache = function(t) {
    for (; t >= this.__cache.length; )
      this.__add_column();
  }, i2.prototype.__add_column = function() {
    var t = this.__cache.length, a2 = 0, _2 = "";
    this.__indent_size && t >= this.__indent_size && (a2 = Math.floor(t / this.__indent_size), t -= a2 * this.__indent_size, _2 = new Array(a2 + 1).join(this.__indent_string)), t && (_2 += new Array(t + 1).join(" ")), this.__cache.push(_2);
  };
  function e(t, a2) {
    this.__indent_cache = new i2(t, a2), this.raw = false, this._end_with_newline = t.end_with_newline, this.indent_size = t.indent_size, this.wrap_line_length = t.wrap_line_length, this.indent_empty_lines = t.indent_empty_lines, this.__lines = [], this.previous_line = null, this.current_line = null, this.next_line = new n(this), this.space_before_token = false, this.non_breaking_space = false, this.previous_token_wrapped = false, this.__add_outputline();
  }
  return e.prototype.__add_outputline = function() {
    this.previous_line = this.current_line, this.current_line = this.next_line.clone_empty(), this.__lines.push(this.current_line);
  }, e.prototype.get_line_number = function() {
    return this.__lines.length;
  }, e.prototype.get_indent_string = function(t, a2) {
    return this.__indent_cache.get_indent_string(t, a2);
  }, e.prototype.get_indent_size = function(t, a2) {
    return this.__indent_cache.get_indent_size(t, a2);
  }, e.prototype.is_empty = function() {
    return !this.previous_line && this.current_line.is_empty();
  }, e.prototype.add_new_line = function(t) {
    return this.is_empty() || !t && this.just_added_newline() ? false : (this.raw || this.__add_outputline(), true);
  }, e.prototype.get_code = function(t) {
    this.trim(true);
    var a2 = this.current_line.pop();
    a2 && (a2[a2.length - 1] === `
` && (a2 = a2.replace(/\n+$/g, "")), this.current_line.push(a2)), this._end_with_newline && this.__add_outputline();
    var _2 = this.__lines.join(`
`);
    return t !== `
` && (_2 = _2.replace(/[\n]/g, t)), _2;
  }, e.prototype.set_wrap_point = function() {
    this.current_line._set_wrap_point();
  }, e.prototype.set_indent = function(t, a2) {
    return t = t || 0, a2 = a2 || 0, this.next_line.set_indent(t, a2), this.__lines.length > 1 ? (this.current_line.set_indent(t, a2), true) : (this.current_line.set_indent(), false);
  }, e.prototype.add_raw_token = function(t) {
    for (var a2 = 0; a2 < t.newlines; a2++)
      this.__add_outputline();
    this.current_line.set_indent(-1), this.current_line.push(t.whitespace_before), this.current_line.push(t.text), this.space_before_token = false, this.non_breaking_space = false, this.previous_token_wrapped = false;
  }, e.prototype.add_token = function(t) {
    this.__add_space_before_token(), this.current_line.push(t), this.space_before_token = false, this.non_breaking_space = false, this.previous_token_wrapped = this.current_line._allow_wrap();
  }, e.prototype.__add_space_before_token = function() {
    this.space_before_token && !this.just_added_newline() && (this.non_breaking_space || this.set_wrap_point(), this.current_line.push(" "));
  }, e.prototype.remove_indent = function(t) {
    for (var a2 = this.__lines.length; t < a2; )
      this.__lines[t]._remove_indent(), t++;
    this.current_line._remove_wrap_indent();
  }, e.prototype.trim = function(t) {
    for (t = t === void 0 ? false : t, this.current_line.trim(); t && this.__lines.length > 1 && this.current_line.is_empty(); )
      this.__lines.pop(), this.current_line = this.__lines[this.__lines.length - 1], this.current_line.trim();
    this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null;
  }, e.prototype.just_added_newline = function() {
    return this.current_line.is_empty();
  }, e.prototype.just_added_blankline = function() {
    return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty();
  }, e.prototype.ensure_empty_line_above = function(t, a2) {
    for (var _2 = this.__lines.length - 2; _2 >= 0; ) {
      var f = this.__lines[_2];
      if (f.is_empty())
        break;
      if (f.item(0).indexOf(t) !== 0 && f.item(-1) !== a2) {
        this.__lines.splice(_2 + 1, 0, new n(this)), this.previous_line = this.__lines[this.__lines.length - 2];
        break;
      }
      _2--;
    }
  }, Ht.Output = e, Ht;
}
var Xt = {};
var Ie;
function bi() {
  if (Ie)
    return Xt;
  Ie = 1;
  function n(i2, e, t, a2) {
    this.type = i2, this.text = e, this.comments_before = null, this.newlines = t || 0, this.whitespace_before = a2 || "", this.parent = null, this.next = null, this.previous = null, this.opened = null, this.closed = null, this.directives = null;
  }
  return Xt.Token = n, Xt;
}
var Qt = {};
var Pe;
function yi() {
  return Pe || (Pe = 1, (function(n) {
    var i2 = "\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a", e = "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a", t = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc", a2 = "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f", _2 = "\\\\u[0-9a-fA-F]{4}|\\\\u\\{[0-9a-fA-F]+\\}", f = "(?:" + _2 + "|[" + i2 + t + "])", o3 = "(?:" + _2 + "|[" + e + t + a2 + "])*";
    n.identifier = new RegExp(f + o3, "g"), n.identifierStart = new RegExp(f), n.identifierMatch = new RegExp("(?:" + _2 + "|[" + e + t + a2 + "])+"), n.newline = /[\n\r\u2028\u2029]/, n.lineBreak = new RegExp(`\r
|` + n.newline.source), n.allLineBreaks = new RegExp(n.lineBreak.source, "g");
  })(Qt)), Qt;
}
var Jt = {};
var wt = {};
var Be;
function he() {
  if (Be)
    return wt;
  Be = 1;
  function n(t, a2) {
    this.raw_options = i2(t, a2), this.disabled = this._get_boolean("disabled"), this.eol = this._get_characters("eol", "auto"), this.end_with_newline = this._get_boolean("end_with_newline"), this.indent_size = this._get_number("indent_size", 4), this.indent_char = this._get_characters("indent_char", " "), this.indent_level = this._get_number("indent_level"), this.preserve_newlines = this._get_boolean("preserve_newlines", true), this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786), this.preserve_newlines || (this.max_preserve_newlines = 0), this.indent_with_tabs = this._get_boolean("indent_with_tabs", this.indent_char === "	"), this.indent_with_tabs && (this.indent_char = "	", this.indent_size === 1 && (this.indent_size = 4)), this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char")), this.indent_empty_lines = this._get_boolean("indent_empty_lines"), this.templating = this._get_selection_list("templating", ["auto", "none", "angular", "django", "erb", "handlebars", "php", "smarty"], ["auto"]);
  }
  n.prototype._get_array = function(t, a2) {
    var _2 = this.raw_options[t], f = a2 || [];
    return typeof _2 == "object" ? _2 !== null && typeof _2.concat == "function" && (f = _2.concat()) : typeof _2 == "string" && (f = _2.split(/[^a-zA-Z0-9_\/\-]+/)), f;
  }, n.prototype._get_boolean = function(t, a2) {
    var _2 = this.raw_options[t], f = _2 === void 0 ? !!a2 : !!_2;
    return f;
  }, n.prototype._get_characters = function(t, a2) {
    var _2 = this.raw_options[t], f = a2 || "";
    return typeof _2 == "string" && (f = _2.replace(/\\r/, "\r").replace(/\\n/, `
`).replace(/\\t/, "	")), f;
  }, n.prototype._get_number = function(t, a2) {
    var _2 = this.raw_options[t];
    a2 = parseInt(a2, 10), isNaN(a2) && (a2 = 0);
    var f = parseInt(_2, 10);
    return isNaN(f) && (f = a2), f;
  }, n.prototype._get_selection = function(t, a2, _2) {
    var f = this._get_selection_list(t, a2, _2);
    if (f.length !== 1)
      throw new Error(
        "Invalid Option Value: The option '" + t + `' can only be one of the following values:
` + a2 + `
You passed in: '` + this.raw_options[t] + "'"
      );
    return f[0];
  }, n.prototype._get_selection_list = function(t, a2, _2) {
    if (!a2 || a2.length === 0)
      throw new Error("Selection list cannot be empty.");
    if (_2 = _2 || [a2[0]], !this._is_valid_selection(_2, a2))
      throw new Error("Invalid Default Value!");
    var f = this._get_array(t, _2);
    if (!this._is_valid_selection(f, a2))
      throw new Error(
        "Invalid Option Value: The option '" + t + `' can contain only the following values:
` + a2 + `
You passed in: '` + this.raw_options[t] + "'"
      );
    return f;
  }, n.prototype._is_valid_selection = function(t, a2) {
    return t.length && a2.length && !t.some(function(_2) {
      return a2.indexOf(_2) === -1;
    });
  };
  function i2(t, a2) {
    var _2 = {};
    t = e(t);
    var f;
    for (f in t)
      f !== a2 && (_2[f] = t[f]);
    if (a2 && t[a2])
      for (f in t[a2])
        _2[f] = t[a2][f];
    return _2;
  }
  function e(t) {
    var a2 = {}, _2;
    for (_2 in t) {
      var f = _2.replace(/-/g, "_");
      a2[f] = t[_2];
    }
    return a2;
  }
  return wt.Options = n, wt.normalizeOpts = e, wt.mergeOpts = i2, wt;
}
var Me;
function wi() {
  if (Me)
    return Jt;
  Me = 1;
  var n = he().Options, i2 = ["before-newline", "after-newline", "preserve-newline"];
  function e(t) {
    n.call(this, t, "js");
    var a2 = this.raw_options.brace_style || null;
    a2 === "expand-strict" ? this.raw_options.brace_style = "expand" : a2 === "collapse-preserve-inline" ? this.raw_options.brace_style = "collapse,preserve-inline" : this.raw_options.braces_on_own_line !== void 0 && (this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse");
    var _2 = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
    this.brace_preserve_inline = false, this.brace_style = "collapse";
    for (var f = 0; f < _2.length; f++)
      _2[f] === "preserve-inline" ? this.brace_preserve_inline = true : this.brace_style = _2[f];
    this.unindent_chained_methods = this._get_boolean("unindent_chained_methods"), this.break_chained_methods = this._get_boolean("break_chained_methods"), this.space_in_paren = this._get_boolean("space_in_paren"), this.space_in_empty_paren = this._get_boolean("space_in_empty_paren"), this.jslint_happy = this._get_boolean("jslint_happy"), this.space_after_anon_function = this._get_boolean("space_after_anon_function"), this.space_after_named_function = this._get_boolean("space_after_named_function"), this.keep_array_indentation = this._get_boolean("keep_array_indentation"), this.space_before_conditional = this._get_boolean("space_before_conditional", true), this.unescape_strings = this._get_boolean("unescape_strings"), this.e4x = this._get_boolean("e4x"), this.comma_first = this._get_boolean("comma_first"), this.operator_position = this._get_selection("operator_position", i2), this.test_output_raw = this._get_boolean("test_output_raw"), this.jslint_happy && (this.space_after_anon_function = true);
  }
  return e.prototype = new n(), Jt.Options = e, Jt;
}
var ct = {};
var Zt = {};
var We;
function ce() {
  if (We)
    return Zt;
  We = 1;
  var n = RegExp.prototype.hasOwnProperty("sticky");
  function i2(e) {
    this.__input = e || "", this.__input_length = this.__input.length, this.__position = 0;
  }
  return i2.prototype.restart = function() {
    this.__position = 0;
  }, i2.prototype.back = function() {
    this.__position > 0 && (this.__position -= 1);
  }, i2.prototype.hasNext = function() {
    return this.__position < this.__input_length;
  }, i2.prototype.next = function() {
    var e = null;
    return this.hasNext() && (e = this.__input.charAt(this.__position), this.__position += 1), e;
  }, i2.prototype.peek = function(e) {
    var t = null;
    return e = e || 0, e += this.__position, e >= 0 && e < this.__input_length && (t = this.__input.charAt(e)), t;
  }, i2.prototype.__match = function(e, t) {
    e.lastIndex = t;
    var a2 = e.exec(this.__input);
    return a2 && !(n && e.sticky) && a2.index !== t && (a2 = null), a2;
  }, i2.prototype.test = function(e, t) {
    return t = t || 0, t += this.__position, t >= 0 && t < this.__input_length ? !!this.__match(e, t) : false;
  }, i2.prototype.testChar = function(e, t) {
    var a2 = this.peek(t);
    return e.lastIndex = 0, a2 !== null && e.test(a2);
  }, i2.prototype.match = function(e) {
    var t = this.__match(e, this.__position);
    return t ? this.__position += t[0].length : t = null, t;
  }, i2.prototype.read = function(e, t, a2) {
    var _2 = "", f;
    return e && (f = this.match(e), f && (_2 += f[0])), t && (f || !e) && (_2 += this.readUntil(t, a2)), _2;
  }, i2.prototype.readUntil = function(e, t) {
    var a2 = "", _2 = this.__position;
    e.lastIndex = this.__position;
    var f = e.exec(this.__input);
    return f ? (_2 = f.index, t && (_2 += f[0].length)) : _2 = this.__input_length, a2 = this.__input.substring(this.__position, _2), this.__position = _2, a2;
  }, i2.prototype.readUntilAfter = function(e) {
    return this.readUntil(e, true);
  }, i2.prototype.get_regexp = function(e, t) {
    var a2 = null, _2 = "g";
    return t && n && (_2 = "y"), typeof e == "string" && e !== "" ? a2 = new RegExp(e, _2) : e && (a2 = new RegExp(e.source, _2)), a2;
  }, i2.prototype.get_literal_regexp = function(e) {
    return RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
  }, i2.prototype.peekUntilAfter = function(e) {
    var t = this.__position, a2 = this.readUntilAfter(e);
    return this.__position = t, a2;
  }, i2.prototype.lookBack = function(e) {
    var t = this.__position - 1;
    return t >= e.length && this.__input.substring(t - e.length, t).toLowerCase() === e;
  }, Zt.InputScanner = i2, Zt;
}
var Tt = {};
var Yt = {};
var Ue;
function un() {
  if (Ue)
    return Yt;
  Ue = 1;
  function n(i2) {
    this.__tokens = [], this.__tokens_length = this.__tokens.length, this.__position = 0, this.__parent_token = i2;
  }
  return n.prototype.restart = function() {
    this.__position = 0;
  }, n.prototype.isEmpty = function() {
    return this.__tokens_length === 0;
  }, n.prototype.hasNext = function() {
    return this.__position < this.__tokens_length;
  }, n.prototype.next = function() {
    var i2 = null;
    return this.hasNext() && (i2 = this.__tokens[this.__position], this.__position += 1), i2;
  }, n.prototype.peek = function(i2) {
    var e = null;
    return i2 = i2 || 0, i2 += this.__position, i2 >= 0 && i2 < this.__tokens_length && (e = this.__tokens[i2]), e;
  }, n.prototype.add = function(i2) {
    this.__parent_token && (i2.parent = this.__parent_token), this.__tokens.push(i2), this.__tokens_length += 1;
  }, Yt.TokenStream = n, Yt;
}
var te = {};
var ee = {};
var Fe;
function Bt() {
  if (Fe)
    return ee;
  Fe = 1;
  function n(i2, e) {
    this._input = i2, this._starting_pattern = null, this._match_pattern = null, this._until_pattern = null, this._until_after = false, e && (this._starting_pattern = this._input.get_regexp(e._starting_pattern, true), this._match_pattern = this._input.get_regexp(e._match_pattern, true), this._until_pattern = this._input.get_regexp(e._until_pattern), this._until_after = e._until_after);
  }
  return n.prototype.read = function() {
    var i2 = this._input.read(this._starting_pattern);
    return (!this._starting_pattern || i2) && (i2 += this._input.read(this._match_pattern, this._until_pattern, this._until_after)), i2;
  }, n.prototype.read_match = function() {
    return this._input.match(this._match_pattern);
  }, n.prototype.until_after = function(i2) {
    var e = this._create();
    return e._until_after = true, e._until_pattern = this._input.get_regexp(i2), e._update(), e;
  }, n.prototype.until = function(i2) {
    var e = this._create();
    return e._until_after = false, e._until_pattern = this._input.get_regexp(i2), e._update(), e;
  }, n.prototype.starting_with = function(i2) {
    var e = this._create();
    return e._starting_pattern = this._input.get_regexp(i2, true), e._update(), e;
  }, n.prototype.matching = function(i2) {
    var e = this._create();
    return e._match_pattern = this._input.get_regexp(i2, true), e._update(), e;
  }, n.prototype._create = function() {
    return new n(this._input, this);
  }, n.prototype._update = function() {
  }, ee.Pattern = n, ee;
}
var ze;
function ln() {
  if (ze)
    return te;
  ze = 1;
  var n = Bt().Pattern;
  function i2(e, t) {
    n.call(this, e, t), t ? this._line_regexp = this._input.get_regexp(t._line_regexp) : this.__set_whitespace_patterns("", ""), this.newline_count = 0, this.whitespace_before_token = "";
  }
  return i2.prototype = new n(), i2.prototype.__set_whitespace_patterns = function(e, t) {
    e += "\\t ", t += "\\n\\r", this._match_pattern = this._input.get_regexp(
      "[" + e + t + "]+",
      true
    ), this._newline_regexp = this._input.get_regexp(
      "\\r\\n|[" + t + "]"
    );
  }, i2.prototype.read = function() {
    this.newline_count = 0, this.whitespace_before_token = "";
    var e = this._input.read(this._match_pattern);
    if (e === " ")
      this.whitespace_before_token = " ";
    else if (e) {
      var t = this.__split(this._newline_regexp, e);
      this.newline_count = t.length - 1, this.whitespace_before_token = t[this.newline_count];
    }
    return e;
  }, i2.prototype.matching = function(e, t) {
    var a2 = this._create();
    return a2.__set_whitespace_patterns(e, t), a2._update(), a2;
  }, i2.prototype._create = function() {
    return new i2(this._input, this);
  }, i2.prototype.__split = function(e, t) {
    e.lastIndex = 0;
    for (var a2 = 0, _2 = [], f = e.exec(t); f; )
      _2.push(t.substring(a2, f.index)), a2 = f.index + f[0].length, f = e.exec(t);
    return a2 < t.length ? _2.push(t.substring(a2, t.length)) : _2.push(""), _2;
  }, te.WhitespacePattern = i2, te;
}
var Ke;
function Dt() {
  if (Ke)
    return Tt;
  Ke = 1;
  var n = ce().InputScanner, i2 = bi().Token, e = un().TokenStream, t = ln().WhitespacePattern, a2 = {
    START: "TK_START",
    RAW: "TK_RAW",
    EOF: "TK_EOF"
  }, _2 = function(f, o3) {
    this._input = new n(f), this._options = o3 || {}, this.__tokens = null, this._patterns = {}, this._patterns.whitespace = new t(this._input);
  };
  return _2.prototype.tokenize = function() {
    this._input.restart(), this.__tokens = new e(), this._reset();
    for (var f, o3 = new i2(a2.START, ""), u2 = null, g = [], v = new e(); o3.type !== a2.EOF; ) {
      for (f = this._get_next_token(o3, u2); this._is_comment(f); )
        v.add(f), f = this._get_next_token(o3, u2);
      v.isEmpty() || (f.comments_before = v, v = new e()), f.parent = u2, this._is_opening(f) ? (g.push(u2), u2 = f) : u2 && this._is_closing(f, u2) && (f.opened = u2, u2.closed = f, u2 = g.pop(), f.parent = u2), f.previous = o3, o3.next = f, this.__tokens.add(f), o3 = f;
    }
    return this.__tokens;
  }, _2.prototype._is_first_token = function() {
    return this.__tokens.isEmpty();
  }, _2.prototype._reset = function() {
  }, _2.prototype._get_next_token = function(f, o3) {
    this._readWhitespace();
    var u2 = this._input.read(/.+/g);
    return u2 ? this._create_token(a2.RAW, u2) : this._create_token(a2.EOF, "");
  }, _2.prototype._is_comment = function(f) {
    return false;
  }, _2.prototype._is_opening = function(f) {
    return false;
  }, _2.prototype._is_closing = function(f, o3) {
    return false;
  }, _2.prototype._create_token = function(f, o3) {
    var u2 = new i2(
      f,
      o3,
      this._patterns.whitespace.newline_count,
      this._patterns.whitespace.whitespace_before_token
    );
    return u2;
  }, _2.prototype._readWhitespace = function() {
    return this._patterns.whitespace.read();
  }, Tt.Tokenizer = _2, Tt.TOKEN = a2, Tt;
}
var ie = {};
var qe;
function fe() {
  if (qe)
    return ie;
  qe = 1;
  function n(i2, e) {
    i2 = typeof i2 == "string" ? i2 : i2.source, e = typeof e == "string" ? e : e.source, this.__directives_block_pattern = new RegExp(i2 + / beautify( \w+[:]\w+)+ /.source + e, "g"), this.__directive_pattern = / (\w+)[:](\w+)/g, this.__directives_end_ignore_pattern = new RegExp(i2 + /\sbeautify\signore:end\s/.source + e, "g");
  }
  return n.prototype.get_directives = function(i2) {
    if (!i2.match(this.__directives_block_pattern))
      return null;
    var e = {};
    this.__directive_pattern.lastIndex = 0;
    for (var t = this.__directive_pattern.exec(i2); t; )
      e[t[1]] = t[2], t = this.__directive_pattern.exec(i2);
    return e;
  }, n.prototype.readIgnored = function(i2) {
    return i2.readUntilAfter(this.__directives_end_ignore_pattern);
  }, ie.Directives = n, ie;
}
var ne = {};
var Ve;
function xi() {
  if (Ve)
    return ne;
  Ve = 1;
  var n = Bt().Pattern, i2 = {
    django: false,
    erb: false,
    handlebars: false,
    php: false,
    smarty: false,
    angular: false
  };
  function e(t, a2) {
    n.call(this, t, a2), this.__template_pattern = null, this._disabled = Object.assign({}, i2), this._excluded = Object.assign({}, i2), a2 && (this.__template_pattern = this._input.get_regexp(a2.__template_pattern), this._excluded = Object.assign(this._excluded, a2._excluded), this._disabled = Object.assign(this._disabled, a2._disabled));
    var _2 = new n(t);
    this.__patterns = {
      handlebars_comment: _2.starting_with(/{{!--/).until_after(/--}}/),
      handlebars_unescaped: _2.starting_with(/{{{/).until_after(/}}}/),
      handlebars: _2.starting_with(/{{/).until_after(/}}/),
      php: _2.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
      erb: _2.starting_with(/<%[^%]/).until_after(/[^%]%>/),
      django: _2.starting_with(/{%/).until_after(/%}/),
      django_value: _2.starting_with(/{{/).until_after(/}}/),
      django_comment: _2.starting_with(/{#/).until_after(/#}/),
      smarty: _2.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
      smarty_comment: _2.starting_with(/{\*/).until_after(/\*}/),
      smarty_literal: _2.starting_with(/{literal}/).until_after(/{\/literal}/)
    };
  }
  return e.prototype = new n(), e.prototype._create = function() {
    return new e(this._input, this);
  }, e.prototype._update = function() {
    this.__set_templated_pattern();
  }, e.prototype.disable = function(t) {
    var a2 = this._create();
    return a2._disabled[t] = true, a2._update(), a2;
  }, e.prototype.read_options = function(t) {
    var a2 = this._create();
    for (var _2 in i2)
      a2._disabled[_2] = t.templating.indexOf(_2) === -1;
    return a2._update(), a2;
  }, e.prototype.exclude = function(t) {
    var a2 = this._create();
    return a2._excluded[t] = true, a2._update(), a2;
  }, e.prototype.read = function() {
    var t = "";
    this._match_pattern ? t = this._input.read(this._starting_pattern) : t = this._input.read(this._starting_pattern, this.__template_pattern);
    for (var a2 = this._read_template(); a2; )
      this._match_pattern ? a2 += this._input.read(this._match_pattern) : a2 += this._input.readUntil(this.__template_pattern), t += a2, a2 = this._read_template();
    return this._until_after && (t += this._input.readUntilAfter(this._until_pattern)), t;
  }, e.prototype.__set_templated_pattern = function() {
    var t = [];
    this._disabled.php || t.push(this.__patterns.php._starting_pattern.source), this._disabled.handlebars || t.push(this.__patterns.handlebars._starting_pattern.source), this._disabled.erb || t.push(this.__patterns.erb._starting_pattern.source), this._disabled.django || (t.push(this.__patterns.django._starting_pattern.source), t.push(this.__patterns.django_value._starting_pattern.source), t.push(this.__patterns.django_comment._starting_pattern.source)), this._disabled.smarty || t.push(this.__patterns.smarty._starting_pattern.source), this._until_pattern && t.push(this._until_pattern.source), this.__template_pattern = this._input.get_regexp("(?:" + t.join("|") + ")");
  }, e.prototype._read_template = function() {
    var t = "", a2 = this._input.peek();
    if (a2 === "<") {
      var _2 = this._input.peek(1);
      !this._disabled.php && !this._excluded.php && _2 === "?" && (t = t || this.__patterns.php.read()), !this._disabled.erb && !this._excluded.erb && _2 === "%" && (t = t || this.__patterns.erb.read());
    } else
      a2 === "{" && (!this._disabled.handlebars && !this._excluded.handlebars && (t = t || this.__patterns.handlebars_comment.read(), t = t || this.__patterns.handlebars_unescaped.read(), t = t || this.__patterns.handlebars.read()), this._disabled.django || (!this._excluded.django && !this._excluded.handlebars && (t = t || this.__patterns.django_value.read()), this._excluded.django || (t = t || this.__patterns.django_comment.read(), t = t || this.__patterns.django.read())), this._disabled.smarty || this._disabled.django && this._disabled.handlebars && (t = t || this.__patterns.smarty_comment.read(), t = t || this.__patterns.smarty_literal.read(), t = t || this.__patterns.smarty.read()));
    return t;
  }, ne.TemplatablePattern = e, ne;
}
var Ge;
function kt() {
  if (Ge)
    return ct;
  Ge = 1;
  var n = ce().InputScanner, i2 = Dt().Tokenizer, e = Dt().TOKEN, t = fe().Directives, a2 = yi(), _2 = Bt().Pattern, f = xi().TemplatablePattern;
  function o3(l2, m3) {
    return m3.indexOf(l2) !== -1;
  }
  var u2 = {
    START_EXPR: "TK_START_EXPR",
    END_EXPR: "TK_END_EXPR",
    START_BLOCK: "TK_START_BLOCK",
    END_BLOCK: "TK_END_BLOCK",
    WORD: "TK_WORD",
    RESERVED: "TK_RESERVED",
    SEMICOLON: "TK_SEMICOLON",
    STRING: "TK_STRING",
    EQUALS: "TK_EQUALS",
    OPERATOR: "TK_OPERATOR",
    COMMA: "TK_COMMA",
    BLOCK_COMMENT: "TK_BLOCK_COMMENT",
    COMMENT: "TK_COMMENT",
    DOT: "TK_DOT",
    UNKNOWN: "TK_UNKNOWN",
    START: e.START,
    RAW: e.RAW,
    EOF: e.EOF
  }, g = new t(/\/\*/, /\*\//), v = /0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/, b3 = /[0-9]/, c = /[^\d\.]/, k2 = ">>> === !== &&= ??= ||= << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *".split(" "), C3 = ">>>= ... >>= <<= === >>> !== **= &&= ??= ||= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |";
  C3 = C3.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"), C3 = "\\?\\.(?!\\d) " + C3, C3 = C3.replace(/ /g, "|");
  var S2 = new RegExp(C3), h = "continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(","), r4 = h.concat(["do", "in", "of", "else", "get", "set", "new", "catch", "finally", "typeof", "yield", "async", "await", "from", "as", "class", "extends"]), d = new RegExp("^(?:" + r4.join("|") + ")$"), T2, x = function(l2, m3) {
    i2.call(this, l2, m3), this._patterns.whitespace = this._patterns.whitespace.matching(
      /\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source,
      /\u2028\u2029/.source
    );
    var p2 = new _2(this._input), O2 = new f(this._input).read_options(this._options);
    this.__patterns = {
      template: O2,
      identifier: O2.starting_with(a2.identifier).matching(a2.identifierMatch),
      number: p2.matching(v),
      punct: p2.matching(S2),
      comment: p2.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
      block_comment: p2.starting_with(/\/\*/).until_after(/\*\//),
      html_comment_start: p2.matching(/<!--/),
      html_comment_end: p2.matching(/-->/),
      include: p2.starting_with(/#include/).until_after(a2.lineBreak),
      shebang: p2.starting_with(/#!/).until_after(a2.lineBreak),
      xml: p2.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/),
      single_quote: O2.until(/['\\\n\r\u2028\u2029]/),
      double_quote: O2.until(/["\\\n\r\u2028\u2029]/),
      template_text: O2.until(/[`\\$]/),
      template_expression: O2.until(/[`}\\]/)
    };
  };
  x.prototype = new i2(), x.prototype._is_comment = function(l2) {
    return l2.type === u2.COMMENT || l2.type === u2.BLOCK_COMMENT || l2.type === u2.UNKNOWN;
  }, x.prototype._is_opening = function(l2) {
    return l2.type === u2.START_BLOCK || l2.type === u2.START_EXPR;
  }, x.prototype._is_closing = function(l2, m3) {
    return (l2.type === u2.END_BLOCK || l2.type === u2.END_EXPR) && m3 && (l2.text === "]" && m3.text === "[" || l2.text === ")" && m3.text === "(" || l2.text === "}" && m3.text === "{");
  }, x.prototype._reset = function() {
    T2 = false;
  }, x.prototype._get_next_token = function(l2, m3) {
    var p2 = null;
    this._readWhitespace();
    var O2 = this._input.peek();
    return O2 === null ? this._create_token(u2.EOF, "") : (p2 = p2 || this._read_non_javascript(O2), p2 = p2 || this._read_string(O2), p2 = p2 || this._read_pair(O2, this._input.peek(1)), p2 = p2 || this._read_word(l2), p2 = p2 || this._read_singles(O2), p2 = p2 || this._read_comment(O2), p2 = p2 || this._read_regexp(O2, l2), p2 = p2 || this._read_xml(O2, l2), p2 = p2 || this._read_punctuation(), p2 = p2 || this._create_token(u2.UNKNOWN, this._input.next()), p2);
  }, x.prototype._read_word = function(l2) {
    var m3;
    if (m3 = this.__patterns.identifier.read(), m3 !== "")
      return m3 = m3.replace(a2.allLineBreaks, `
`), !(l2.type === u2.DOT || l2.type === u2.RESERVED && (l2.text === "set" || l2.text === "get")) && d.test(m3) ? (m3 === "in" || m3 === "of") && (l2.type === u2.WORD || l2.type === u2.STRING) ? this._create_token(u2.OPERATOR, m3) : this._create_token(u2.RESERVED, m3) : this._create_token(u2.WORD, m3);
    if (m3 = this.__patterns.number.read(), m3 !== "")
      return this._create_token(u2.WORD, m3);
  }, x.prototype._read_singles = function(l2) {
    var m3 = null;
    return l2 === "(" || l2 === "[" ? m3 = this._create_token(u2.START_EXPR, l2) : l2 === ")" || l2 === "]" ? m3 = this._create_token(u2.END_EXPR, l2) : l2 === "{" ? m3 = this._create_token(u2.START_BLOCK, l2) : l2 === "}" ? m3 = this._create_token(u2.END_BLOCK, l2) : l2 === ";" ? m3 = this._create_token(u2.SEMICOLON, l2) : l2 === "." && c.test(this._input.peek(1)) ? m3 = this._create_token(u2.DOT, l2) : l2 === "," && (m3 = this._create_token(u2.COMMA, l2)), m3 && this._input.next(), m3;
  }, x.prototype._read_pair = function(l2, m3) {
    var p2 = null;
    return l2 === "#" && m3 === "{" && (p2 = this._create_token(u2.START_BLOCK, l2 + m3)), p2 && (this._input.next(), this._input.next()), p2;
  }, x.prototype._read_punctuation = function() {
    var l2 = this.__patterns.punct.read();
    if (l2 !== "")
      return l2 === "=" ? this._create_token(u2.EQUALS, l2) : l2 === "?." ? this._create_token(u2.DOT, l2) : this._create_token(u2.OPERATOR, l2);
  }, x.prototype._read_non_javascript = function(l2) {
    var m3 = "";
    if (l2 === "#") {
      if (this._is_first_token() && (m3 = this.__patterns.shebang.read(), m3))
        return this._create_token(u2.UNKNOWN, m3.trim() + `
`);
      if (m3 = this.__patterns.include.read(), m3)
        return this._create_token(u2.UNKNOWN, m3.trim() + `
`);
      l2 = this._input.next();
      var p2 = "#";
      if (this._input.hasNext() && this._input.testChar(b3)) {
        do
          l2 = this._input.next(), p2 += l2;
        while (this._input.hasNext() && l2 !== "#" && l2 !== "=");
        return l2 === "#" || (this._input.peek() === "[" && this._input.peek(1) === "]" ? (p2 += "[]", this._input.next(), this._input.next()) : this._input.peek() === "{" && this._input.peek(1) === "}" && (p2 += "{}", this._input.next(), this._input.next())), this._create_token(u2.WORD, p2);
      }
      this._input.back();
    } else if (l2 === "<" && this._is_first_token()) {
      if (m3 = this.__patterns.html_comment_start.read(), m3) {
        for (; this._input.hasNext() && !this._input.testChar(a2.newline); )
          m3 += this._input.next();
        return T2 = true, this._create_token(u2.COMMENT, m3);
      }
    } else if (T2 && l2 === "-" && (m3 = this.__patterns.html_comment_end.read(), m3))
      return T2 = false, this._create_token(u2.COMMENT, m3);
    return null;
  }, x.prototype._read_comment = function(l2) {
    var m3 = null;
    if (l2 === "/") {
      var p2 = "";
      if (this._input.peek(1) === "*") {
        p2 = this.__patterns.block_comment.read();
        var O2 = g.get_directives(p2);
        O2 && O2.ignore === "start" && (p2 += g.readIgnored(this._input)), p2 = p2.replace(a2.allLineBreaks, `
`), m3 = this._create_token(u2.BLOCK_COMMENT, p2), m3.directives = O2;
      } else
        this._input.peek(1) === "/" && (p2 = this.__patterns.comment.read(), m3 = this._create_token(u2.COMMENT, p2));
    }
    return m3;
  }, x.prototype._read_string = function(l2) {
    if (l2 === "`" || l2 === "'" || l2 === '"') {
      var m3 = this._input.next();
      return this.has_char_escapes = false, l2 === "`" ? m3 += this._read_string_recursive("`", true, "${") : m3 += this._read_string_recursive(l2), this.has_char_escapes && this._options.unescape_strings && (m3 = E2(m3)), this._input.peek() === l2 && (m3 += this._input.next()), m3 = m3.replace(a2.allLineBreaks, `
`), this._create_token(u2.STRING, m3);
    }
    return null;
  }, x.prototype._allow_regexp_or_xml = function(l2) {
    return l2.type === u2.RESERVED && o3(l2.text, ["return", "case", "throw", "else", "do", "typeof", "yield"]) || l2.type === u2.END_EXPR && l2.text === ")" && l2.opened.previous.type === u2.RESERVED && o3(l2.opened.previous.text, ["if", "while", "for"]) || o3(l2.type, [
      u2.COMMENT,
      u2.START_EXPR,
      u2.START_BLOCK,
      u2.START,
      u2.END_BLOCK,
      u2.OPERATOR,
      u2.EQUALS,
      u2.EOF,
      u2.SEMICOLON,
      u2.COMMA
    ]);
  }, x.prototype._read_regexp = function(l2, m3) {
    if (l2 === "/" && this._allow_regexp_or_xml(m3)) {
      for (var p2 = this._input.next(), O2 = false, s2 = false; this._input.hasNext() && (O2 || s2 || this._input.peek() !== l2) && !this._input.testChar(a2.newline); )
        p2 += this._input.peek(), O2 ? O2 = false : (O2 = this._input.peek() === "\\", this._input.peek() === "[" ? s2 = true : this._input.peek() === "]" && (s2 = false)), this._input.next();
      return this._input.peek() === l2 && (p2 += this._input.next(), p2 += this._input.read(a2.identifier)), this._create_token(u2.STRING, p2);
    }
    return null;
  }, x.prototype._read_xml = function(l2, m3) {
    if (this._options.e4x && l2 === "<" && this._allow_regexp_or_xml(m3)) {
      var p2 = "", O2 = this.__patterns.xml.read_match();
      if (O2) {
        for (var s2 = O2[2].replace(/^{\s+/, "{").replace(/\s+}$/, "}"), y2 = s2.indexOf("{") === 0, w2 = 0; O2; ) {
          var A2 = !!O2[1], N = O2[2], j = !!O2[O2.length - 1] || N.slice(0, 8) === "![CDATA[";
          if (!j && (N === s2 || y2 && N.replace(/^{\s+/, "{").replace(/\s+}$/, "}")) && (A2 ? --w2 : ++w2), p2 += O2[0], w2 <= 0)
            break;
          O2 = this.__patterns.xml.read_match();
        }
        return O2 || (p2 += this._input.match(/[\s\S]*/g)[0]), p2 = p2.replace(a2.allLineBreaks, `
`), this._create_token(u2.STRING, p2);
      }
    }
    return null;
  };
  function E2(l2) {
    for (var m3 = "", p2 = 0, O2 = new n(l2), s2 = null; O2.hasNext(); )
      if (s2 = O2.match(/([\s]|[^\\]|\\\\)+/g), s2 && (m3 += s2[0]), O2.peek() === "\\") {
        if (O2.next(), O2.peek() === "x")
          s2 = O2.match(/x([0-9A-Fa-f]{2})/g);
        else if (O2.peek() === "u")
          s2 = O2.match(/u([0-9A-Fa-f]{4})/g), s2 || (s2 = O2.match(/u\{([0-9A-Fa-f]+)\}/g));
        else {
          m3 += "\\", O2.hasNext() && (m3 += O2.next());
          continue;
        }
        if (!s2 || (p2 = parseInt(s2[1], 16), p2 > 126 && p2 <= 255 && s2[0].indexOf("x") === 0))
          return l2;
        p2 >= 0 && p2 < 32 || p2 > 1114111 ? m3 += "\\" + s2[0] : p2 === 34 || p2 === 39 || p2 === 92 ? m3 += "\\" + String.fromCharCode(p2) : m3 += String.fromCharCode(p2);
      }
    return m3;
  }
  return x.prototype._read_string_recursive = function(l2, m3, p2) {
    var O2, s2;
    l2 === "'" ? s2 = this.__patterns.single_quote : l2 === '"' ? s2 = this.__patterns.double_quote : l2 === "`" ? s2 = this.__patterns.template_text : l2 === "}" && (s2 = this.__patterns.template_expression);
    for (var y2 = s2.read(), w2 = ""; this._input.hasNext(); ) {
      if (w2 = this._input.next(), w2 === l2 || !m3 && a2.newline.test(w2)) {
        this._input.back();
        break;
      } else
        w2 === "\\" && this._input.hasNext() ? (O2 = this._input.peek(), O2 === "x" || O2 === "u" ? this.has_char_escapes = true : O2 === "\r" && this._input.peek(1) === `
` && this._input.next(), w2 += this._input.next()) : p2 && (p2 === "${" && w2 === "$" && this._input.peek() === "{" && (w2 += this._input.next()), p2 === w2 && (l2 === "`" ? w2 += this._read_string_recursive("}", m3, "`") : w2 += this._read_string_recursive("`", m3, "${"), this._input.hasNext() && (w2 += this._input.next())));
      w2 += s2.read(), y2 += w2;
    }
    return y2;
  }, ct.Tokenizer = x, ct.TOKEN = u2, ct.positionable_operators = k2.slice(), ct.line_starters = h.slice(), ct;
}
var He;
function pn() {
  if (He)
    return Gt;
  He = 1;
  var n = pe().Output, i2 = bi().Token, e = yi(), t = wi().Options, a2 = kt().Tokenizer, _2 = kt().line_starters, f = kt().positionable_operators, o3 = kt().TOKEN;
  function u2(s2, y2) {
    return y2.indexOf(s2) !== -1;
  }
  function g(s2) {
    return s2.replace(/^\s+/g, "");
  }
  function v(s2) {
    for (var y2 = {}, w2 = 0; w2 < s2.length; w2++)
      y2[s2[w2].replace(/-/g, "_")] = s2[w2];
    return y2;
  }
  function b3(s2, y2) {
    return s2 && s2.type === o3.RESERVED && s2.text === y2;
  }
  function c(s2, y2) {
    return s2 && s2.type === o3.RESERVED && u2(s2.text, y2);
  }
  var k2 = ["case", "return", "do", "if", "throw", "else", "await", "break", "continue", "async"], C3 = ["before-newline", "after-newline", "preserve-newline"], S2 = v(C3), h = [S2.before_newline, S2.preserve_newline], r4 = {
    BlockStatement: "BlockStatement",
    Statement: "Statement",
    ObjectLiteral: "ObjectLiteral",
    ArrayLiteral: "ArrayLiteral",
    ForInitializer: "ForInitializer",
    Conditional: "Conditional",
    Expression: "Expression"
  };
  function d(s2, y2) {
    y2.multiline_frame || y2.mode === r4.ForInitializer || y2.mode === r4.Conditional || s2.remove_indent(y2.start_line_index);
  }
  function T2(s2) {
    s2 = s2.replace(e.allLineBreaks, `
`);
    for (var y2 = [], w2 = s2.indexOf(`
`); w2 !== -1; )
      y2.push(s2.substring(0, w2)), s2 = s2.substring(w2 + 1), w2 = s2.indexOf(`
`);
    return s2.length && y2.push(s2), y2;
  }
  function x(s2) {
    return s2 === r4.ArrayLiteral;
  }
  function E2(s2) {
    return u2(s2, [r4.Expression, r4.ForInitializer, r4.Conditional]);
  }
  function l2(s2, y2) {
    for (var w2 = 0; w2 < s2.length; w2++) {
      var A2 = s2[w2].trim();
      if (A2.charAt(0) !== y2)
        return false;
    }
    return true;
  }
  function m3(s2, y2) {
    for (var w2 = 0, A2 = s2.length, N; w2 < A2; w2++)
      if (N = s2[w2], N && N.indexOf(y2) !== 0)
        return false;
    return true;
  }
  function p2(s2, y2) {
    y2 = y2 || {}, this._source_text = s2 || "", this._output = null, this._tokens = null, this._last_last_text = null, this._flags = null, this._previous_flags = null, this._flag_store = null, this._options = new t(y2);
  }
  p2.prototype.create_flags = function(s2, y2) {
    var w2 = 0;
    s2 && (w2 = s2.indentation_level, !this._output.just_added_newline() && s2.line_indent_level > w2 && (w2 = s2.line_indent_level));
    var A2 = {
      mode: y2,
      parent: s2,
      last_token: s2 ? s2.last_token : new i2(o3.START_BLOCK, ""),
      last_word: s2 ? s2.last_word : "",
      declaration_statement: false,
      declaration_assignment: false,
      multiline_frame: false,
      inline_frame: false,
      if_block: false,
      else_block: false,
      class_start_block: false,
      do_block: false,
      do_while: false,
      import_block: false,
      in_case_statement: false,
      in_case: false,
      case_body: false,
      case_block: false,
      indentation_level: w2,
      alignment: 0,
      line_indent_level: s2 ? s2.line_indent_level : w2,
      start_line_index: this._output.get_line_number(),
      ternary_depth: 0
    };
    return A2;
  }, p2.prototype._reset = function(s2) {
    var y2 = s2.match(/^[\t ]*/)[0];
    this._last_last_text = "", this._output = new n(this._options, y2), this._output.raw = this._options.test_output_raw, this._flag_store = [], this.set_mode(r4.BlockStatement);
    var w2 = new a2(s2, this._options);
    return this._tokens = w2.tokenize(), s2;
  }, p2.prototype.beautify = function() {
    if (this._options.disabled)
      return this._source_text;
    var s2, y2 = this._reset(this._source_text), w2 = this._options.eol;
    this._options.eol === "auto" && (w2 = `
`, y2 && e.lineBreak.test(y2 || "") && (w2 = y2.match(e.lineBreak)[0]));
    for (var A2 = this._tokens.next(); A2; )
      this.handle_token(A2), this._last_last_text = this._flags.last_token.text, this._flags.last_token = A2, A2 = this._tokens.next();
    return s2 = this._output.get_code(w2), s2;
  }, p2.prototype.handle_token = function(s2, y2) {
    s2.type === o3.START_EXPR ? this.handle_start_expr(s2) : s2.type === o3.END_EXPR ? this.handle_end_expr(s2) : s2.type === o3.START_BLOCK ? this.handle_start_block(s2) : s2.type === o3.END_BLOCK ? this.handle_end_block(s2) : s2.type === o3.WORD ? this.handle_word(s2) : s2.type === o3.RESERVED ? this.handle_word(s2) : s2.type === o3.SEMICOLON ? this.handle_semicolon(s2) : s2.type === o3.STRING ? this.handle_string(s2) : s2.type === o3.EQUALS ? this.handle_equals(s2) : s2.type === o3.OPERATOR ? this.handle_operator(s2) : s2.type === o3.COMMA ? this.handle_comma(s2) : s2.type === o3.BLOCK_COMMENT ? this.handle_block_comment(s2, y2) : s2.type === o3.COMMENT ? this.handle_comment(s2, y2) : s2.type === o3.DOT ? this.handle_dot(s2) : s2.type === o3.EOF ? this.handle_eof(s2) : s2.type === o3.UNKNOWN ? this.handle_unknown(s2, y2) : this.handle_unknown(s2, y2);
  }, p2.prototype.handle_whitespace_and_comments = function(s2, y2) {
    var w2 = s2.newlines, A2 = this._options.keep_array_indentation && x(this._flags.mode);
    if (s2.comments_before)
      for (var N = s2.comments_before.next(); N; )
        this.handle_whitespace_and_comments(N, y2), this.handle_token(N, y2), N = s2.comments_before.next();
    if (A2)
      for (var j = 0; j < w2; j += 1)
        this.print_newline(j > 0, y2);
    else if (this._options.max_preserve_newlines && w2 > this._options.max_preserve_newlines && (w2 = this._options.max_preserve_newlines), this._options.preserve_newlines && w2 > 1) {
      this.print_newline(false, y2);
      for (var P2 = 1; P2 < w2; P2 += 1)
        this.print_newline(true, y2);
    }
  };
  var O2 = ["async", "break", "continue", "return", "throw", "yield"];
  return p2.prototype.allow_wrap_or_preserved_newline = function(s2, y2) {
    if (y2 = y2 === void 0 ? false : y2, !this._output.just_added_newline()) {
      var w2 = this._options.preserve_newlines && s2.newlines || y2, A2 = u2(this._flags.last_token.text, f) || u2(s2.text, f);
      if (A2) {
        var N = u2(this._flags.last_token.text, f) && u2(this._options.operator_position, h) || u2(s2.text, f);
        w2 = w2 && N;
      }
      if (w2)
        this.print_newline(false, true);
      else if (this._options.wrap_line_length) {
        if (c(this._flags.last_token, O2))
          return;
        this._output.set_wrap_point();
      }
    }
  }, p2.prototype.print_newline = function(s2, y2) {
    if (!y2 && this._flags.last_token.text !== ";" && this._flags.last_token.text !== "," && this._flags.last_token.text !== "=" && (this._flags.last_token.type !== o3.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++"))
      for (var w2 = this._tokens.peek(); this._flags.mode === r4.Statement && !(this._flags.if_block && b3(w2, "else")) && !this._flags.do_block; )
        this.restore_mode();
    this._output.add_new_line(s2) && (this._flags.multiline_frame = true);
  }, p2.prototype.print_token_line_indentation = function(s2) {
    this._output.just_added_newline() && (this._options.keep_array_indentation && s2.newlines && (s2.text === "[" || x(this._flags.mode)) ? (this._output.current_line.set_indent(-1), this._output.current_line.push(s2.whitespace_before), this._output.space_before_token = false) : this._output.set_indent(this._flags.indentation_level, this._flags.alignment) && (this._flags.line_indent_level = this._flags.indentation_level));
  }, p2.prototype.print_token = function(s2) {
    if (this._output.raw) {
      this._output.add_raw_token(s2);
      return;
    }
    if (this._options.comma_first && s2.previous && s2.previous.type === o3.COMMA && this._output.just_added_newline() && this._output.previous_line.last() === ",") {
      var y2 = this._output.previous_line.pop();
      this._output.previous_line.is_empty() && (this._output.previous_line.push(y2), this._output.trim(true), this._output.current_line.pop(), this._output.trim()), this.print_token_line_indentation(s2), this._output.add_token(","), this._output.space_before_token = true;
    }
    this.print_token_line_indentation(s2), this._output.non_breaking_space = true, this._output.add_token(s2.text), this._output.previous_token_wrapped && (this._flags.multiline_frame = true);
  }, p2.prototype.indent = function() {
    this._flags.indentation_level += 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }, p2.prototype.deindent = function() {
    this._flags.indentation_level > 0 && (!this._flags.parent || this._flags.indentation_level > this._flags.parent.indentation_level) && (this._flags.indentation_level -= 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment));
  }, p2.prototype.set_mode = function(s2) {
    this._flags ? (this._flag_store.push(this._flags), this._previous_flags = this._flags) : this._previous_flags = this.create_flags(null, s2), this._flags = this.create_flags(this._previous_flags, s2), this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }, p2.prototype.restore_mode = function() {
    this._flag_store.length > 0 && (this._previous_flags = this._flags, this._flags = this._flag_store.pop(), this._previous_flags.mode === r4.Statement && d(this._output, this._previous_flags), this._output.set_indent(this._flags.indentation_level, this._flags.alignment));
  }, p2.prototype.start_of_object_property = function() {
    return this._flags.parent.mode === r4.ObjectLiteral && this._flags.mode === r4.Statement && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || c(this._flags.last_token, ["get", "set"]));
  }, p2.prototype.start_of_statement = function(s2) {
    var y2 = false;
    return y2 = y2 || c(this._flags.last_token, ["var", "let", "const"]) && s2.type === o3.WORD, y2 = y2 || b3(this._flags.last_token, "do"), y2 = y2 || !(this._flags.parent.mode === r4.ObjectLiteral && this._flags.mode === r4.Statement) && c(this._flags.last_token, O2) && !s2.newlines, y2 = y2 || b3(this._flags.last_token, "else") && !(b3(s2, "if") && !s2.comments_before), y2 = y2 || this._flags.last_token.type === o3.END_EXPR && (this._previous_flags.mode === r4.ForInitializer || this._previous_flags.mode === r4.Conditional), y2 = y2 || this._flags.last_token.type === o3.WORD && this._flags.mode === r4.BlockStatement && !this._flags.in_case && !(s2.text === "--" || s2.text === "++") && this._last_last_text !== "function" && s2.type !== o3.WORD && s2.type !== o3.RESERVED, y2 = y2 || this._flags.mode === r4.ObjectLiteral && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || c(this._flags.last_token, ["get", "set"])), y2 ? (this.set_mode(r4.Statement), this.indent(), this.handle_whitespace_and_comments(s2, true), this.start_of_object_property() || this.allow_wrap_or_preserved_newline(
      s2,
      c(s2, ["do", "for", "if", "while"])
    ), true) : false;
  }, p2.prototype.handle_start_expr = function(s2) {
    this.start_of_statement(s2) || this.handle_whitespace_and_comments(s2);
    var y2 = r4.Expression;
    if (s2.text === "[") {
      if (this._flags.last_token.type === o3.WORD || this._flags.last_token.text === ")") {
        c(this._flags.last_token, _2) && (this._output.space_before_token = true), this.print_token(s2), this.set_mode(y2), this.indent(), this._options.space_in_paren && (this._output.space_before_token = true);
        return;
      }
      y2 = r4.ArrayLiteral, x(this._flags.mode) && (this._flags.last_token.text === "[" || this._flags.last_token.text === "," && (this._last_last_text === "]" || this._last_last_text === "}")) && (this._options.keep_array_indentation || this.print_newline()), u2(this._flags.last_token.type, [o3.START_EXPR, o3.END_EXPR, o3.WORD, o3.OPERATOR, o3.DOT]) || (this._output.space_before_token = true);
    } else {
      if (this._flags.last_token.type === o3.RESERVED)
        this._flags.last_token.text === "for" ? (this._output.space_before_token = this._options.space_before_conditional, y2 = r4.ForInitializer) : u2(this._flags.last_token.text, ["if", "while", "switch"]) ? (this._output.space_before_token = this._options.space_before_conditional, y2 = r4.Conditional) : u2(this._flags.last_word, ["await", "async"]) ? this._output.space_before_token = true : this._flags.last_token.text === "import" && s2.whitespace_before === "" ? this._output.space_before_token = false : (u2(this._flags.last_token.text, _2) || this._flags.last_token.text === "catch") && (this._output.space_before_token = true);
      else if (this._flags.last_token.type === o3.EQUALS || this._flags.last_token.type === o3.OPERATOR)
        this.start_of_object_property() || this.allow_wrap_or_preserved_newline(s2);
      else if (this._flags.last_token.type === o3.WORD) {
        this._output.space_before_token = false;
        var w2 = this._tokens.peek(-3);
        if (this._options.space_after_named_function && w2) {
          var A2 = this._tokens.peek(-4);
          c(w2, ["async", "function"]) || w2.text === "*" && c(A2, ["async", "function"]) ? this._output.space_before_token = true : this._flags.mode === r4.ObjectLiteral ? (w2.text === "{" || w2.text === "," || w2.text === "*" && (A2.text === "{" || A2.text === ",")) && (this._output.space_before_token = true) : this._flags.parent && this._flags.parent.class_start_block && (this._output.space_before_token = true);
        }
      } else
        this.allow_wrap_or_preserved_newline(s2);
      (this._flags.last_token.type === o3.RESERVED && (this._flags.last_word === "function" || this._flags.last_word === "typeof") || this._flags.last_token.text === "*" && (u2(this._last_last_text, ["function", "yield"]) || this._flags.mode === r4.ObjectLiteral && u2(this._last_last_text, ["{", ","]))) && (this._output.space_before_token = this._options.space_after_anon_function);
    }
    this._flags.last_token.text === ";" || this._flags.last_token.type === o3.START_BLOCK ? this.print_newline() : (this._flags.last_token.type === o3.END_EXPR || this._flags.last_token.type === o3.START_EXPR || this._flags.last_token.type === o3.END_BLOCK || this._flags.last_token.text === "." || this._flags.last_token.type === o3.COMMA) && this.allow_wrap_or_preserved_newline(s2, s2.newlines), this.print_token(s2), this.set_mode(y2), this._options.space_in_paren && (this._output.space_before_token = true), this.indent();
  }, p2.prototype.handle_end_expr = function(s2) {
    for (; this._flags.mode === r4.Statement; )
      this.restore_mode();
    this.handle_whitespace_and_comments(s2), this._flags.multiline_frame && this.allow_wrap_or_preserved_newline(
      s2,
      s2.text === "]" && x(this._flags.mode) && !this._options.keep_array_indentation
    ), this._options.space_in_paren && (this._flags.last_token.type === o3.START_EXPR && !this._options.space_in_empty_paren ? (this._output.trim(), this._output.space_before_token = false) : this._output.space_before_token = true), this.deindent(), this.print_token(s2), this.restore_mode(), d(this._output, this._previous_flags), this._flags.do_while && this._previous_flags.mode === r4.Conditional && (this._previous_flags.mode = r4.Expression, this._flags.do_block = false, this._flags.do_while = false);
  }, p2.prototype.handle_start_block = function(s2) {
    this.handle_whitespace_and_comments(s2);
    var y2 = this._tokens.peek(), w2 = this._tokens.peek(1);
    this._flags.last_word === "switch" && this._flags.last_token.type === o3.END_EXPR ? (this.set_mode(r4.BlockStatement), this._flags.in_case_statement = true) : this._flags.case_body ? this.set_mode(r4.BlockStatement) : w2 && (u2(w2.text, [":", ","]) && u2(y2.type, [o3.STRING, o3.WORD, o3.RESERVED]) || u2(y2.text, ["get", "set", "..."]) && u2(w2.type, [o3.WORD, o3.RESERVED])) ? u2(this._last_last_text, ["class", "interface"]) && !u2(w2.text, [":", ","]) ? this.set_mode(r4.BlockStatement) : this.set_mode(r4.ObjectLiteral) : this._flags.last_token.type === o3.OPERATOR && this._flags.last_token.text === "=>" ? this.set_mode(r4.BlockStatement) : u2(this._flags.last_token.type, [o3.EQUALS, o3.START_EXPR, o3.COMMA, o3.OPERATOR]) || c(this._flags.last_token, ["return", "throw", "import", "default"]) ? this.set_mode(r4.ObjectLiteral) : this.set_mode(r4.BlockStatement), this._flags.last_token && c(this._flags.last_token.previous, ["class", "extends"]) && (this._flags.class_start_block = true);
    var A2 = !y2.comments_before && y2.text === "}", N = A2 && this._flags.last_word === "function" && this._flags.last_token.type === o3.END_EXPR;
    if (this._options.brace_preserve_inline) {
      var j = 0, P2 = null;
      this._flags.inline_frame = true;
      do
        if (j += 1, P2 = this._tokens.peek(j - 1), P2.newlines) {
          this._flags.inline_frame = false;
          break;
        }
      while (P2.type !== o3.EOF && !(P2.type === o3.END_BLOCK && P2.opened === s2));
    }
    (this._options.brace_style === "expand" || this._options.brace_style === "none" && s2.newlines) && !this._flags.inline_frame ? this._flags.last_token.type !== o3.OPERATOR && (N || this._flags.last_token.type === o3.EQUALS || c(this._flags.last_token, k2) && this._flags.last_token.text !== "else") ? this._output.space_before_token = true : this.print_newline(false, true) : (x(this._previous_flags.mode) && (this._flags.last_token.type === o3.START_EXPR || this._flags.last_token.type === o3.COMMA) && ((this._flags.last_token.type === o3.COMMA || this._options.space_in_paren) && (this._output.space_before_token = true), (this._flags.last_token.type === o3.COMMA || this._flags.last_token.type === o3.START_EXPR && this._flags.inline_frame) && (this.allow_wrap_or_preserved_newline(s2), this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame, this._flags.multiline_frame = false)), this._flags.last_token.type !== o3.OPERATOR && this._flags.last_token.type !== o3.START_EXPR && (u2(this._flags.last_token.type, [o3.START_BLOCK, o3.SEMICOLON]) && !this._flags.inline_frame ? this.print_newline() : this._output.space_before_token = true)), this.print_token(s2), this.indent(), !A2 && !(this._options.brace_preserve_inline && this._flags.inline_frame) && this.print_newline();
  }, p2.prototype.handle_end_block = function(s2) {
    for (this.handle_whitespace_and_comments(s2); this._flags.mode === r4.Statement; )
      this.restore_mode();
    var y2 = this._flags.last_token.type === o3.START_BLOCK;
    this._flags.inline_frame && !y2 ? this._output.space_before_token = true : this._options.brace_style === "expand" ? y2 || this.print_newline() : y2 || (x(this._flags.mode) && this._options.keep_array_indentation ? (this._options.keep_array_indentation = false, this.print_newline(), this._options.keep_array_indentation = true) : this.print_newline()), this.restore_mode(), this.print_token(s2);
  }, p2.prototype.handle_word = function(s2) {
    if (s2.type === o3.RESERVED) {
      if (u2(s2.text, ["set", "get"]) && this._flags.mode !== r4.ObjectLiteral)
        s2.type = o3.WORD;
      else if (s2.text === "import" && u2(this._tokens.peek().text, ["(", "."]))
        s2.type = o3.WORD;
      else if (u2(s2.text, ["as", "from"]) && !this._flags.import_block)
        s2.type = o3.WORD;
      else if (this._flags.mode === r4.ObjectLiteral) {
        var y2 = this._tokens.peek();
        y2.text === ":" && (s2.type = o3.WORD);
      }
    }
    if (this.start_of_statement(s2) ? c(this._flags.last_token, ["var", "let", "const"]) && s2.type === o3.WORD && (this._flags.declaration_statement = true) : s2.newlines && !E2(this._flags.mode) && (this._flags.last_token.type !== o3.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++") && this._flags.last_token.type !== o3.EQUALS && (this._options.preserve_newlines || !c(this._flags.last_token, ["var", "let", "const", "set", "get"])) ? (this.handle_whitespace_and_comments(s2), this.print_newline()) : this.handle_whitespace_and_comments(s2), this._flags.do_block && !this._flags.do_while)
      if (b3(s2, "while")) {
        this._output.space_before_token = true, this.print_token(s2), this._output.space_before_token = true, this._flags.do_while = true;
        return;
      } else
        this.print_newline(), this._flags.do_block = false;
    if (this._flags.if_block)
      if (!this._flags.else_block && b3(s2, "else"))
        this._flags.else_block = true;
      else {
        for (; this._flags.mode === r4.Statement; )
          this.restore_mode();
        this._flags.if_block = false, this._flags.else_block = false;
      }
    if (this._flags.in_case_statement && c(s2, ["case", "default"])) {
      this.print_newline(), !this._flags.case_block && (this._flags.case_body || this._options.jslint_happy) && this.deindent(), this._flags.case_body = false, this.print_token(s2), this._flags.in_case = true;
      return;
    }
    if ((this._flags.last_token.type === o3.COMMA || this._flags.last_token.type === o3.START_EXPR || this._flags.last_token.type === o3.EQUALS || this._flags.last_token.type === o3.OPERATOR) && !this.start_of_object_property() && !(u2(this._flags.last_token.text, ["+", "-"]) && this._last_last_text === ":" && this._flags.parent.mode === r4.ObjectLiteral) && this.allow_wrap_or_preserved_newline(s2), b3(s2, "function")) {
      (u2(this._flags.last_token.text, ["}", ";"]) || this._output.just_added_newline() && !(u2(this._flags.last_token.text, ["(", "[", "{", ":", "=", ","]) || this._flags.last_token.type === o3.OPERATOR)) && !this._output.just_added_blankline() && !s2.comments_before && (this.print_newline(), this.print_newline(true)), this._flags.last_token.type === o3.RESERVED || this._flags.last_token.type === o3.WORD ? c(this._flags.last_token, ["get", "set", "new", "export"]) || c(this._flags.last_token, O2) ? this._output.space_before_token = true : b3(this._flags.last_token, "default") && this._last_last_text === "export" ? this._output.space_before_token = true : this._flags.last_token.text === "declare" ? this._output.space_before_token = true : this.print_newline() : this._flags.last_token.type === o3.OPERATOR || this._flags.last_token.text === "=" ? this._output.space_before_token = true : !this._flags.multiline_frame && (E2(this._flags.mode) || x(this._flags.mode)) || this.print_newline(), this.print_token(s2), this._flags.last_word = s2.text;
      return;
    }
    var w2 = "NONE";
    if (this._flags.last_token.type === o3.END_BLOCK ? this._previous_flags.inline_frame ? w2 = "SPACE" : c(s2, ["else", "catch", "finally", "from"]) ? this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && s2.newlines ? w2 = "NEWLINE" : (w2 = "SPACE", this._output.space_before_token = true) : w2 = "NEWLINE" : this._flags.last_token.type === o3.SEMICOLON && this._flags.mode === r4.BlockStatement ? w2 = "NEWLINE" : this._flags.last_token.type === o3.SEMICOLON && E2(this._flags.mode) ? w2 = "SPACE" : this._flags.last_token.type === o3.STRING ? w2 = "NEWLINE" : this._flags.last_token.type === o3.RESERVED || this._flags.last_token.type === o3.WORD || this._flags.last_token.text === "*" && (u2(this._last_last_text, ["function", "yield"]) || this._flags.mode === r4.ObjectLiteral && u2(this._last_last_text, ["{", ","])) ? w2 = "SPACE" : this._flags.last_token.type === o3.START_BLOCK ? this._flags.inline_frame ? w2 = "SPACE" : w2 = "NEWLINE" : this._flags.last_token.type === o3.END_EXPR && (this._output.space_before_token = true, w2 = "NEWLINE"), c(s2, _2) && this._flags.last_token.text !== ")" && (this._flags.inline_frame || this._flags.last_token.text === "else" || this._flags.last_token.text === "export" ? w2 = "SPACE" : w2 = "NEWLINE"), c(s2, ["else", "catch", "finally"]))
      if ((!(this._flags.last_token.type === o3.END_BLOCK && this._previous_flags.mode === r4.BlockStatement) || this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && s2.newlines) && !this._flags.inline_frame)
        this.print_newline();
      else {
        this._output.trim(true);
        var A2 = this._output.current_line;
        A2.last() !== "}" && this.print_newline(), this._output.space_before_token = true;
      }
    else
      w2 === "NEWLINE" ? c(this._flags.last_token, k2) ? this._output.space_before_token = true : this._flags.last_token.text === "declare" && c(s2, ["var", "let", "const"]) ? this._output.space_before_token = true : this._flags.last_token.type !== o3.END_EXPR ? (this._flags.last_token.type !== o3.START_EXPR || !c(s2, ["var", "let", "const"])) && this._flags.last_token.text !== ":" && (b3(s2, "if") && b3(s2.previous, "else") ? this._output.space_before_token = true : this.print_newline()) : c(s2, _2) && this._flags.last_token.text !== ")" && this.print_newline() : this._flags.multiline_frame && x(this._flags.mode) && this._flags.last_token.text === "," && this._last_last_text === "}" ? this.print_newline() : w2 === "SPACE" && (this._output.space_before_token = true);
    s2.previous && (s2.previous.type === o3.WORD || s2.previous.type === o3.RESERVED) && (this._output.space_before_token = true), this.print_token(s2), this._flags.last_word = s2.text, s2.type === o3.RESERVED && (s2.text === "do" ? this._flags.do_block = true : s2.text === "if" ? this._flags.if_block = true : s2.text === "import" ? this._flags.import_block = true : this._flags.import_block && b3(s2, "from") && (this._flags.import_block = false));
  }, p2.prototype.handle_semicolon = function(s2) {
    this.start_of_statement(s2) ? this._output.space_before_token = false : this.handle_whitespace_and_comments(s2);
    for (var y2 = this._tokens.peek(); this._flags.mode === r4.Statement && !(this._flags.if_block && b3(y2, "else")) && !this._flags.do_block; )
      this.restore_mode();
    this._flags.import_block && (this._flags.import_block = false), this.print_token(s2);
  }, p2.prototype.handle_string = function(s2) {
    s2.text.startsWith("`") && s2.newlines === 0 && s2.whitespace_before === "" && (s2.previous.text === ")" || this._flags.last_token.type === o3.WORD) || (this.start_of_statement(s2) ? this._output.space_before_token = true : (this.handle_whitespace_and_comments(s2), this._flags.last_token.type === o3.RESERVED || this._flags.last_token.type === o3.WORD || this._flags.inline_frame ? this._output.space_before_token = true : this._flags.last_token.type === o3.COMMA || this._flags.last_token.type === o3.START_EXPR || this._flags.last_token.type === o3.EQUALS || this._flags.last_token.type === o3.OPERATOR ? this.start_of_object_property() || this.allow_wrap_or_preserved_newline(s2) : s2.text.startsWith("`") && this._flags.last_token.type === o3.END_EXPR && (s2.previous.text === "]" || s2.previous.text === ")") && s2.newlines === 0 ? this._output.space_before_token = true : this.print_newline())), this.print_token(s2);
  }, p2.prototype.handle_equals = function(s2) {
    this.start_of_statement(s2) || this.handle_whitespace_and_comments(s2), this._flags.declaration_statement && (this._flags.declaration_assignment = true), this._output.space_before_token = true, this.print_token(s2), this._output.space_before_token = true;
  }, p2.prototype.handle_comma = function(s2) {
    this.handle_whitespace_and_comments(s2, true), this.print_token(s2), this._output.space_before_token = true, this._flags.declaration_statement ? (E2(this._flags.parent.mode) && (this._flags.declaration_assignment = false), this._flags.declaration_assignment ? (this._flags.declaration_assignment = false, this.print_newline(false, true)) : this._options.comma_first && this.allow_wrap_or_preserved_newline(s2)) : this._flags.mode === r4.ObjectLiteral || this._flags.mode === r4.Statement && this._flags.parent.mode === r4.ObjectLiteral ? (this._flags.mode === r4.Statement && this.restore_mode(), this._flags.inline_frame || this.print_newline()) : this._options.comma_first && this.allow_wrap_or_preserved_newline(s2);
  }, p2.prototype.handle_operator = function(s2) {
    var y2 = s2.text === "*" && (c(this._flags.last_token, ["function", "yield"]) || u2(this._flags.last_token.type, [o3.START_BLOCK, o3.COMMA, o3.END_BLOCK, o3.SEMICOLON])), w2 = u2(s2.text, ["-", "+"]) && (u2(this._flags.last_token.type, [o3.START_BLOCK, o3.START_EXPR, o3.EQUALS, o3.OPERATOR]) || u2(this._flags.last_token.text, _2) || this._flags.last_token.text === ",");
    if (!this.start_of_statement(s2)) {
      var A2 = !y2;
      this.handle_whitespace_and_comments(s2, A2);
    }
    if (s2.text === "*" && this._flags.last_token.type === o3.DOT) {
      this.print_token(s2);
      return;
    }
    if (s2.text === "::") {
      this.print_token(s2);
      return;
    }
    if (u2(s2.text, ["-", "+"]) && this.start_of_object_property()) {
      this.print_token(s2);
      return;
    }
    if (this._flags.last_token.type === o3.OPERATOR && u2(this._options.operator_position, h) && this.allow_wrap_or_preserved_newline(s2), s2.text === ":" && this._flags.in_case) {
      this.print_token(s2), this._flags.in_case = false, this._flags.case_body = true, this._tokens.peek().type !== o3.START_BLOCK ? (this.indent(), this.print_newline(), this._flags.case_block = false) : (this._flags.case_block = true, this._output.space_before_token = true);
      return;
    }
    var N = true, j = true, P2 = false;
    if (s2.text === ":" ? this._flags.ternary_depth === 0 ? N = false : (this._flags.ternary_depth -= 1, P2 = true) : s2.text === "?" && (this._flags.ternary_depth += 1), !w2 && !y2 && this._options.preserve_newlines && u2(s2.text, f)) {
      var F2 = s2.text === ":", z = F2 && P2, it = F2 && !P2;
      switch (this._options.operator_position) {
        case S2.before_newline:
          this._output.space_before_token = !it, this.print_token(s2), (!F2 || z) && this.allow_wrap_or_preserved_newline(s2), this._output.space_before_token = true;
          return;
        case S2.after_newline:
          this._output.space_before_token = true, !F2 || z ? this._tokens.peek().newlines ? this.print_newline(false, true) : this.allow_wrap_or_preserved_newline(s2) : this._output.space_before_token = false, this.print_token(s2), this._output.space_before_token = true;
          return;
        case S2.preserve_newline:
          it || this.allow_wrap_or_preserved_newline(s2), N = !(this._output.just_added_newline() || it), this._output.space_before_token = N, this.print_token(s2), this._output.space_before_token = true;
          return;
      }
    }
    if (y2) {
      this.allow_wrap_or_preserved_newline(s2), N = false;
      var R = this._tokens.peek();
      j = R && u2(R.type, [o3.WORD, o3.RESERVED]);
    } else if (s2.text === "...")
      this.allow_wrap_or_preserved_newline(s2), N = this._flags.last_token.type === o3.START_BLOCK, j = false;
    else if (u2(s2.text, ["--", "++", "!", "~"]) || w2) {
      if ((this._flags.last_token.type === o3.COMMA || this._flags.last_token.type === o3.START_EXPR) && this.allow_wrap_or_preserved_newline(s2), N = false, j = false, s2.newlines && (s2.text === "--" || s2.text === "++" || s2.text === "~")) {
        var M2 = c(this._flags.last_token, k2) && s2.newlines;
        M2 && (this._previous_flags.if_block || this._previous_flags.else_block) && this.restore_mode(), this.print_newline(M2, true);
      }
      this._flags.last_token.text === ";" && E2(this._flags.mode) && (N = true), this._flags.last_token.type === o3.RESERVED ? N = true : this._flags.last_token.type === o3.END_EXPR ? N = !(this._flags.last_token.text === "]" && (s2.text === "--" || s2.text === "++")) : this._flags.last_token.type === o3.OPERATOR && (N = u2(s2.text, ["--", "-", "++", "+"]) && u2(this._flags.last_token.text, ["--", "-", "++", "+"]), u2(s2.text, ["+", "-"]) && u2(this._flags.last_token.text, ["--", "++"]) && (j = true)), (this._flags.mode === r4.BlockStatement && !this._flags.inline_frame || this._flags.mode === r4.Statement) && (this._flags.last_token.text === "{" || this._flags.last_token.text === ";") && this.print_newline();
    }
    this._output.space_before_token = this._output.space_before_token || N, this.print_token(s2), this._output.space_before_token = j;
  }, p2.prototype.handle_block_comment = function(s2, y2) {
    if (this._output.raw) {
      this._output.add_raw_token(s2), s2.directives && s2.directives.preserve === "end" && (this._output.raw = this._options.test_output_raw);
      return;
    }
    if (s2.directives) {
      this.print_newline(false, y2), this.print_token(s2), s2.directives.preserve === "start" && (this._output.raw = true), this.print_newline(false, true);
      return;
    }
    if (!e.newline.test(s2.text) && !s2.newlines) {
      this._output.space_before_token = true, this.print_token(s2), this._output.space_before_token = true;
      return;
    } else
      this.print_block_commment(s2, y2);
  }, p2.prototype.print_block_commment = function(s2, y2) {
    var w2 = T2(s2.text), A2, N = false, j = false, P2 = s2.whitespace_before, F2 = P2.length;
    if (this.print_newline(false, y2), this.print_token_line_indentation(s2), this._output.add_token(w2[0]), this.print_newline(false, y2), w2.length > 1) {
      for (w2 = w2.slice(1), N = l2(w2, "*"), j = m3(w2, P2), N && (this._flags.alignment = 1), A2 = 0; A2 < w2.length; A2++)
        N ? (this.print_token_line_indentation(s2), this._output.add_token(g(w2[A2]))) : j && w2[A2] ? (this.print_token_line_indentation(s2), this._output.add_token(w2[A2].substring(F2))) : (this._output.current_line.set_indent(-1), this._output.add_token(w2[A2])), this.print_newline(false, y2);
      this._flags.alignment = 0;
    }
  }, p2.prototype.handle_comment = function(s2, y2) {
    s2.newlines ? this.print_newline(false, y2) : this._output.trim(true), this._output.space_before_token = true, this.print_token(s2), this.print_newline(false, y2);
  }, p2.prototype.handle_dot = function(s2) {
    this.start_of_statement(s2) || this.handle_whitespace_and_comments(s2, true), this._flags.last_token.text.match("^[0-9]+$") && (this._output.space_before_token = true), c(this._flags.last_token, k2) ? this._output.space_before_token = false : this.allow_wrap_or_preserved_newline(
      s2,
      this._flags.last_token.text === ")" && this._options.break_chained_methods
    ), this._options.unindent_chained_methods && this._output.just_added_newline() && this.deindent(), this.print_token(s2);
  }, p2.prototype.handle_unknown = function(s2, y2) {
    this.print_token(s2), s2.text[s2.text.length - 1] === `
` && this.print_newline(false, y2);
  }, p2.prototype.handle_eof = function(s2) {
    for (; this._flags.mode === r4.Statement; )
      this.restore_mode();
    this.handle_whitespace_and_comments(s2);
  }, Gt.Beautifier = p2, Gt;
}
var Xe;
function hn() {
  if (Xe)
    return Ot.exports;
  Xe = 1;
  var n = pn().Beautifier, i2 = wi().Options;
  function e(t, a2) {
    var _2 = new n(t, a2);
    return _2.beautify();
  }
  return Ot.exports = e, Ot.exports.defaultOptions = function() {
    return new i2();
  }, Ot.exports;
}
var Rt = { exports: {} };
var se = {};
var re2 = {};
var Qe;
function Ei() {
  if (Qe)
    return re2;
  Qe = 1;
  var n = he().Options;
  function i2(e) {
    n.call(this, e, "css"), this.selector_separator_newline = this._get_boolean("selector_separator_newline", true), this.newline_between_rules = this._get_boolean("newline_between_rules", true);
    var t = this._get_boolean("space_around_selector_separator");
    this.space_around_combinator = this._get_boolean("space_around_combinator") || t;
    var a2 = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
    this.brace_style = "collapse";
    for (var _2 = 0; _2 < a2.length; _2++)
      a2[_2] !== "expand" ? this.brace_style = "collapse" : this.brace_style = a2[_2];
  }
  return i2.prototype = new n(), re2.Options = i2, re2;
}
var Je;
function cn() {
  if (Je)
    return se;
  Je = 1;
  var n = Ei().Options, i2 = pe().Output, e = ce().InputScanner, t = fe().Directives, a2 = new t(/\/\*/, /\*\//), _2 = /\r\n|[\r\n]/, f = /\r\n|[\r\n]/g, o3 = /\s/, u2 = /(?:\s|\n)+/g, g = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g, v = /\/\/(?:[^\n\r\u2028\u2029]*)/g;
  function b3(c, k2) {
    this._source_text = c || "", this._options = new n(k2), this._ch = null, this._input = null, this.NESTED_AT_RULE = {
      page: true,
      "font-face": true,
      keyframes: true,
      media: true,
      supports: true,
      document: true
    }, this.CONDITIONAL_GROUP_RULE = {
      media: true,
      supports: true,
      document: true
    }, this.NON_SEMICOLON_NEWLINE_PROPERTY = [
      "grid-template-areas",
      "grid-template"
    ];
  }
  return b3.prototype.eatString = function(c) {
    var k2 = "";
    for (this._ch = this._input.next(); this._ch; ) {
      if (k2 += this._ch, this._ch === "\\")
        k2 += this._input.next();
      else if (c.indexOf(this._ch) !== -1 || this._ch === `
`)
        break;
      this._ch = this._input.next();
    }
    return k2;
  }, b3.prototype.eatWhitespace = function(c) {
    for (var k2 = o3.test(this._input.peek()), C3 = 0; o3.test(this._input.peek()); )
      this._ch = this._input.next(), c && this._ch === `
` && (C3 === 0 || C3 < this._options.max_preserve_newlines) && (C3++, this._output.add_new_line(true));
    return k2;
  }, b3.prototype.foundNestedPseudoClass = function() {
    for (var c = 0, k2 = 1, C3 = this._input.peek(k2); C3; ) {
      if (C3 === "{")
        return true;
      if (C3 === "(")
        c += 1;
      else if (C3 === ")") {
        if (c === 0)
          return false;
        c -= 1;
      } else if (C3 === ";" || C3 === "}")
        return false;
      k2++, C3 = this._input.peek(k2);
    }
    return false;
  }, b3.prototype.print_string = function(c) {
    this._output.set_indent(this._indentLevel), this._output.non_breaking_space = true, this._output.add_token(c);
  }, b3.prototype.preserveSingleSpace = function(c) {
    c && (this._output.space_before_token = true);
  }, b3.prototype.indent = function() {
    this._indentLevel++;
  }, b3.prototype.outdent = function() {
    this._indentLevel > 0 && this._indentLevel--;
  }, b3.prototype.beautify = function() {
    if (this._options.disabled)
      return this._source_text;
    var c = this._source_text, k2 = this._options.eol;
    k2 === "auto" && (k2 = `
`, c && _2.test(c || "") && (k2 = c.match(_2)[0])), c = c.replace(f, `
`);
    var C3 = c.match(/^[\t ]*/)[0];
    this._output = new i2(this._options, C3), this._input = new e(c), this._indentLevel = 0, this._nestedLevel = 0, this._ch = null;
    for (var S2 = 0, h = false, r4 = false, d = false, T2 = false, x = false, E2 = this._ch, l2 = false, m3, p2, O2; m3 = this._input.read(u2), p2 = m3 !== "", O2 = E2, this._ch = this._input.next(), this._ch === "\\" && this._input.hasNext() && (this._ch += this._input.next()), E2 = this._ch, this._ch; )
      if (this._ch === "/" && this._input.peek() === "*") {
        this._output.add_new_line(), this._input.back();
        var s2 = this._input.read(g), y2 = a2.get_directives(s2);
        y2 && y2.ignore === "start" && (s2 += a2.readIgnored(this._input)), this.print_string(s2), this.eatWhitespace(true), this._output.add_new_line();
      } else if (this._ch === "/" && this._input.peek() === "/")
        this._output.space_before_token = true, this._input.back(), this.print_string(this._input.read(v)), this.eatWhitespace(true);
      else if (this._ch === "$") {
        this.preserveSingleSpace(p2), this.print_string(this._ch);
        var w2 = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
        w2.match(/[ :]$/) && (w2 = this.eatString(": ").replace(/\s+$/, ""), this.print_string(w2), this._output.space_before_token = true), S2 === 0 && w2.indexOf(":") !== -1 && (r4 = true, this.indent());
      } else if (this._ch === "@")
        if (this.preserveSingleSpace(p2), this._input.peek() === "{")
          this.print_string(this._ch + this.eatString("}"));
        else {
          this.print_string(this._ch);
          var A2 = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
          A2.match(/[ :]$/) && (A2 = this.eatString(": ").replace(/\s+$/, ""), this.print_string(A2), this._output.space_before_token = true), S2 === 0 && A2.indexOf(":") !== -1 ? (r4 = true, this.indent()) : A2 in this.NESTED_AT_RULE ? (this._nestedLevel += 1, A2 in this.CONDITIONAL_GROUP_RULE && (d = true)) : S2 === 0 && !r4 && (T2 = true);
        }
      else if (this._ch === "#" && this._input.peek() === "{")
        this.preserveSingleSpace(p2), this.print_string(this._ch + this.eatString("}"));
      else if (this._ch === "{")
        r4 && (r4 = false, this.outdent()), T2 = false, d ? (d = false, h = this._indentLevel >= this._nestedLevel) : h = this._indentLevel >= this._nestedLevel - 1, this._options.newline_between_rules && h && this._output.previous_line && this._output.previous_line.item(-1) !== "{" && this._output.ensure_empty_line_above("/", ","), this._output.space_before_token = true, this._options.brace_style === "expand" ? (this._output.add_new_line(), this.print_string(this._ch), this.indent(), this._output.set_indent(this._indentLevel)) : (O2 === "(" ? this._output.space_before_token = false : O2 !== "," && this.indent(), this.print_string(this._ch)), this.eatWhitespace(true), this._output.add_new_line();
      else if (this._ch === "}")
        this.outdent(), this._output.add_new_line(), O2 === "{" && this._output.trim(true), r4 && (this.outdent(), r4 = false), this.print_string(this._ch), h = false, this._nestedLevel && this._nestedLevel--, this.eatWhitespace(true), this._output.add_new_line(), this._options.newline_between_rules && !this._output.just_added_blankline() && this._input.peek() !== "}" && this._output.add_new_line(true), this._input.peek() === ")" && (this._output.trim(true), this._options.brace_style === "expand" && this._output.add_new_line(true));
      else if (this._ch === ":") {
        for (var N = 0; N < this.NON_SEMICOLON_NEWLINE_PROPERTY.length; N++)
          if (this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[N])) {
            l2 = true;
            break;
          }
        (h || d) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !T2 && S2 === 0 ? (this.print_string(":"), r4 || (r4 = true, this._output.space_before_token = true, this.eatWhitespace(true), this.indent())) : (this._input.lookBack(" ") && (this._output.space_before_token = true), this._input.peek() === ":" ? (this._ch = this._input.next(), this.print_string("::")) : this.print_string(":"));
      } else if (this._ch === '"' || this._ch === "'") {
        var j = O2 === '"' || O2 === "'";
        this.preserveSingleSpace(j || p2), this.print_string(this._ch + this.eatString(this._ch)), this.eatWhitespace(true);
      } else if (this._ch === ";")
        l2 = false, S2 === 0 ? (r4 && (this.outdent(), r4 = false), T2 = false, this.print_string(this._ch), this.eatWhitespace(true), this._input.peek() !== "/" && this._output.add_new_line()) : (this.print_string(this._ch), this.eatWhitespace(true), this._output.space_before_token = true);
      else if (this._ch === "(")
        if (this._input.lookBack("url"))
          this.print_string(this._ch), this.eatWhitespace(), S2++, this.indent(), this._ch = this._input.next(), this._ch === ")" || this._ch === '"' || this._ch === "'" ? this._input.back() : this._ch && (this.print_string(this._ch + this.eatString(")")), S2 && (S2--, this.outdent()));
        else {
          var P2 = false;
          this._input.lookBack("with") && (P2 = true), this.preserveSingleSpace(p2 || P2), this.print_string(this._ch), r4 && O2 === "$" && this._options.selector_separator_newline ? (this._output.add_new_line(), x = true) : (this.eatWhitespace(), S2++, this.indent());
        }
      else if (this._ch === ")")
        S2 && (S2--, this.outdent()), x && this._input.peek() === ";" && this._options.selector_separator_newline && (x = false, this.outdent(), this._output.add_new_line()), this.print_string(this._ch);
      else if (this._ch === ",")
        this.print_string(this._ch), this.eatWhitespace(true), this._options.selector_separator_newline && (!r4 || x) && S2 === 0 && !T2 ? this._output.add_new_line() : this._output.space_before_token = true;
      else if ((this._ch === ">" || this._ch === "+" || this._ch === "~") && !r4 && S2 === 0)
        this._options.space_around_combinator ? (this._output.space_before_token = true, this.print_string(this._ch), this._output.space_before_token = true) : (this.print_string(this._ch), this.eatWhitespace(), this._ch && o3.test(this._ch) && (this._ch = ""));
      else if (this._ch === "]")
        this.print_string(this._ch);
      else if (this._ch === "[")
        this.preserveSingleSpace(p2), this.print_string(this._ch);
      else if (this._ch === "=")
        this.eatWhitespace(), this.print_string("="), o3.test(this._ch) && (this._ch = "");
      else if (this._ch === "!" && !this._input.lookBack("\\"))
        this._output.space_before_token = true, this.print_string(this._ch);
      else {
        var F2 = O2 === '"' || O2 === "'";
        this.preserveSingleSpace(F2 || p2), this.print_string(this._ch), !this._output.just_added_newline() && this._input.peek() === `
` && l2 && this._output.add_new_line();
      }
    var z = this._output.get_code(k2);
    return z;
  }, se.Beautifier = b3, se;
}
var Ze;
function fn() {
  if (Ze)
    return Rt.exports;
  Ze = 1;
  var n = cn().Beautifier, i2 = Ei().Options;
  function e(t, a2) {
    var _2 = new n(t, a2);
    return _2.beautify();
  }
  return Rt.exports = e, Rt.exports.defaultOptions = function() {
    return new i2();
  }, Rt.exports;
}
var St = { exports: {} };
var ae = {};
var oe = {};
var Ye;
function Oi() {
  if (Ye)
    return oe;
  Ye = 1;
  var n = he().Options;
  function i2(e) {
    n.call(this, e, "html"), this.templating.length === 1 && this.templating[0] === "auto" && (this.templating = ["django", "erb", "handlebars", "php"]), this.indent_inner_html = this._get_boolean("indent_inner_html"), this.indent_body_inner_html = this._get_boolean("indent_body_inner_html", true), this.indent_head_inner_html = this._get_boolean("indent_head_inner_html", true), this.indent_handlebars = this._get_boolean("indent_handlebars", true), this.wrap_attributes = this._get_selection(
      "wrap_attributes",
      ["auto", "force", "force-aligned", "force-expand-multiline", "aligned-multiple", "preserve", "preserve-aligned"]
    ), this.wrap_attributes_min_attrs = this._get_number("wrap_attributes_min_attrs", 2), this.wrap_attributes_indent_size = this._get_number("wrap_attributes_indent_size", this.indent_size), this.extra_liners = this._get_array("extra_liners", ["head", "body", "/html"]), this.inline = this._get_array("inline", [
      "a",
      "abbr",
      "area",
      "audio",
      "b",
      "bdi",
      "bdo",
      "br",
      "button",
      "canvas",
      "cite",
      "code",
      "data",
      "datalist",
      "del",
      "dfn",
      "em",
      "embed",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "map",
      "mark",
      "math",
      "meter",
      "noscript",
      "object",
      "output",
      "progress",
      "q",
      "ruby",
      "s",
      "samp",
      "select",
      "small",
      "span",
      "strong",
      "sub",
      "sup",
      "svg",
      "template",
      "textarea",
      "time",
      "u",
      "var",
      "video",
      "wbr",
      "text",
      "acronym",
      "big",
      "strike",
      "tt"
    ]), this.inline_custom_elements = this._get_boolean("inline_custom_elements", true), this.void_elements = this._get_array("void_elements", [
      "area",
      "base",
      "br",
      "col",
      "embed",
      "hr",
      "img",
      "input",
      "keygen",
      "link",
      "menuitem",
      "meta",
      "param",
      "source",
      "track",
      "wbr",
      "!doctype",
      "?xml",
      "basefont",
      "isindex"
    ]), this.unformatted = this._get_array("unformatted", []), this.content_unformatted = this._get_array("content_unformatted", [
      "pre",
      "textarea"
    ]), this.unformatted_content_delimiter = this._get_characters("unformatted_content_delimiter"), this.indent_scripts = this._get_selection("indent_scripts", ["normal", "keep", "separate"]);
  }
  return i2.prototype = new n(), oe.Options = i2, oe;
}
var Ct = {};
var ti;
function ei() {
  if (ti)
    return Ct;
  ti = 1;
  var n = Dt().Tokenizer, i2 = Dt().TOKEN, e = fe().Directives, t = xi().TemplatablePattern, a2 = Bt().Pattern, _2 = {
    TAG_OPEN: "TK_TAG_OPEN",
    TAG_CLOSE: "TK_TAG_CLOSE",
    CONTROL_FLOW_OPEN: "TK_CONTROL_FLOW_OPEN",
    CONTROL_FLOW_CLOSE: "TK_CONTROL_FLOW_CLOSE",
    ATTRIBUTE: "TK_ATTRIBUTE",
    EQUALS: "TK_EQUALS",
    VALUE: "TK_VALUE",
    COMMENT: "TK_COMMENT",
    TEXT: "TK_TEXT",
    UNKNOWN: "TK_UNKNOWN",
    START: i2.START,
    RAW: i2.RAW,
    EOF: i2.EOF
  }, f = new e(/<\!--/, /-->/), o3 = function(u2, g) {
    n.call(this, u2, g), this._current_tag_name = "";
    var v = new t(this._input).read_options(this._options), b3 = new a2(this._input);
    if (this.__patterns = {
      word: v.until(/[\n\r\t <]/),
      word_control_flow_close_excluded: v.until(/[\n\r\t <}]/),
      single_quote: v.until_after(/'/),
      double_quote: v.until_after(/"/),
      attribute: v.until(/[\n\r\t =>]|\/>/),
      element_name: v.until(/[\n\r\t >\/]/),
      angular_control_flow_start: b3.matching(/\@[a-zA-Z]+[^({]*[({]/),
      handlebars_comment: b3.starting_with(/{{!--/).until_after(/--}}/),
      handlebars: b3.starting_with(/{{/).until_after(/}}/),
      handlebars_open: b3.until(/[\n\r\t }]/),
      handlebars_raw_close: b3.until(/}}/),
      comment: b3.starting_with(/<!--/).until_after(/-->/),
      cdata: b3.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
      conditional_comment: b3.starting_with(/<!\[/).until_after(/]>/),
      processing: b3.starting_with(/<\?/).until_after(/\?>/)
    }, this._options.indent_handlebars && (this.__patterns.word = this.__patterns.word.exclude("handlebars"), this.__patterns.word_control_flow_close_excluded = this.__patterns.word_control_flow_close_excluded.exclude("handlebars")), this._unformatted_content_delimiter = null, this._options.unformatted_content_delimiter) {
      var c = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
      this.__patterns.unformatted_content_delimiter = b3.matching(c).until_after(c);
    }
  };
  return o3.prototype = new n(), o3.prototype._is_comment = function(u2) {
    return false;
  }, o3.prototype._is_opening = function(u2) {
    return u2.type === _2.TAG_OPEN || u2.type === _2.CONTROL_FLOW_OPEN;
  }, o3.prototype._is_closing = function(u2, g) {
    return u2.type === _2.TAG_CLOSE && g && ((u2.text === ">" || u2.text === "/>") && g.text[0] === "<" || u2.text === "}}" && g.text[0] === "{" && g.text[1] === "{") || u2.type === _2.CONTROL_FLOW_CLOSE && u2.text === "}" && g.text.endsWith("{");
  }, o3.prototype._reset = function() {
    this._current_tag_name = "";
  }, o3.prototype._get_next_token = function(u2, g) {
    var v = null;
    this._readWhitespace();
    var b3 = this._input.peek();
    return b3 === null ? this._create_token(_2.EOF, "") : (v = v || this._read_open_handlebars(b3, g), v = v || this._read_attribute(b3, u2, g), v = v || this._read_close(b3, g), v = v || this._read_control_flows(b3, g), v = v || this._read_raw_content(b3, u2, g), v = v || this._read_content_word(b3, g), v = v || this._read_comment_or_cdata(b3), v = v || this._read_processing(b3), v = v || this._read_open(b3, g), v = v || this._create_token(_2.UNKNOWN, this._input.next()), v);
  }, o3.prototype._read_comment_or_cdata = function(u2) {
    var g = null, v = null, b3 = null;
    if (u2 === "<") {
      var c = this._input.peek(1);
      c === "!" && (v = this.__patterns.comment.read(), v ? (b3 = f.get_directives(v), b3 && b3.ignore === "start" && (v += f.readIgnored(this._input))) : v = this.__patterns.cdata.read()), v && (g = this._create_token(_2.COMMENT, v), g.directives = b3);
    }
    return g;
  }, o3.prototype._read_processing = function(u2) {
    var g = null, v = null, b3 = null;
    if (u2 === "<") {
      var c = this._input.peek(1);
      (c === "!" || c === "?") && (v = this.__patterns.conditional_comment.read(), v = v || this.__patterns.processing.read()), v && (g = this._create_token(_2.COMMENT, v), g.directives = b3);
    }
    return g;
  }, o3.prototype._read_open = function(u2, g) {
    var v = null, b3 = null;
    return (!g || g.type === _2.CONTROL_FLOW_OPEN) && u2 === "<" && (v = this._input.next(), this._input.peek() === "/" && (v += this._input.next()), v += this.__patterns.element_name.read(), b3 = this._create_token(_2.TAG_OPEN, v)), b3;
  }, o3.prototype._read_open_handlebars = function(u2, g) {
    var v = null, b3 = null;
    return (!g || g.type === _2.CONTROL_FLOW_OPEN) && this._options.indent_handlebars && u2 === "{" && this._input.peek(1) === "{" && (this._input.peek(2) === "!" ? (v = this.__patterns.handlebars_comment.read(), v = v || this.__patterns.handlebars.read(), b3 = this._create_token(_2.COMMENT, v)) : (v = this.__patterns.handlebars_open.read(), b3 = this._create_token(_2.TAG_OPEN, v))), b3;
  }, o3.prototype._read_control_flows = function(u2, g) {
    var v = "", b3 = null;
    if (!this._options.templating.includes("angular") || !this._options.indent_handlebars)
      return b3;
    if (u2 === "@") {
      if (v = this.__patterns.angular_control_flow_start.read(), v === "")
        return b3;
      for (var c = v.endsWith("(") ? 1 : 0, k2 = 0; !(v.endsWith("{") && c === k2); ) {
        var C3 = this._input.next();
        if (C3 === null)
          break;
        C3 === "(" ? c++ : C3 === ")" && k2++, v += C3;
      }
      b3 = this._create_token(_2.CONTROL_FLOW_OPEN, v);
    } else
      u2 === "}" && g && g.type === _2.CONTROL_FLOW_OPEN && (v = this._input.next(), b3 = this._create_token(_2.CONTROL_FLOW_CLOSE, v));
    return b3;
  }, o3.prototype._read_close = function(u2, g) {
    var v = null, b3 = null;
    return g && g.type === _2.TAG_OPEN && (g.text[0] === "<" && (u2 === ">" || u2 === "/" && this._input.peek(1) === ">") ? (v = this._input.next(), u2 === "/" && (v += this._input.next()), b3 = this._create_token(_2.TAG_CLOSE, v)) : g.text[0] === "{" && u2 === "}" && this._input.peek(1) === "}" && (this._input.next(), this._input.next(), b3 = this._create_token(_2.TAG_CLOSE, "}}"))), b3;
  }, o3.prototype._read_attribute = function(u2, g, v) {
    var b3 = null, c = "";
    if (v && v.text[0] === "<")
      if (u2 === "=")
        b3 = this._create_token(_2.EQUALS, this._input.next());
      else if (u2 === '"' || u2 === "'") {
        var k2 = this._input.next();
        u2 === '"' ? k2 += this.__patterns.double_quote.read() : k2 += this.__patterns.single_quote.read(), b3 = this._create_token(_2.VALUE, k2);
      } else
        c = this.__patterns.attribute.read(), c && (g.type === _2.EQUALS ? b3 = this._create_token(_2.VALUE, c) : b3 = this._create_token(_2.ATTRIBUTE, c));
    return b3;
  }, o3.prototype._is_content_unformatted = function(u2) {
    return this._options.void_elements.indexOf(u2) === -1 && (this._options.content_unformatted.indexOf(u2) !== -1 || this._options.unformatted.indexOf(u2) !== -1);
  }, o3.prototype._read_raw_content = function(u2, g, v) {
    var b3 = "";
    if (v && v.text[0] === "{")
      b3 = this.__patterns.handlebars_raw_close.read();
    else if (g.type === _2.TAG_CLOSE && g.opened.text[0] === "<" && g.text[0] !== "/") {
      var c = g.opened.text.substr(1).toLowerCase();
      if (c === "script" || c === "style") {
        var k2 = this._read_comment_or_cdata(u2);
        if (k2)
          return k2.type = _2.TEXT, k2;
        b3 = this._input.readUntil(new RegExp("</" + c + "[\\n\\r\\t ]*?>", "ig"));
      } else
        this._is_content_unformatted(c) && (b3 = this._input.readUntil(new RegExp("</" + c + "[\\n\\r\\t ]*?>", "ig")));
    }
    return b3 ? this._create_token(_2.TEXT, b3) : null;
  }, o3.prototype._read_content_word = function(u2, g) {
    var v = "";
    if (this._options.unformatted_content_delimiter && u2 === this._options.unformatted_content_delimiter[0] && (v = this.__patterns.unformatted_content_delimiter.read()), v || (v = g && g.type === _2.CONTROL_FLOW_OPEN ? this.__patterns.word_control_flow_close_excluded.read() : this.__patterns.word.read()), v)
      return this._create_token(_2.TEXT, v);
  }, Ct.Tokenizer = o3, Ct.TOKEN = _2, Ct;
}
var ii;
function dn() {
  if (ii)
    return ae;
  ii = 1;
  var n = Oi().Options, i2 = pe().Output, e = ei().Tokenizer, t = ei().TOKEN, a2 = /\r\n|[\r\n]/, _2 = /\r\n|[\r\n]/g, f = function(h, r4) {
    this.indent_level = 0, this.alignment_size = 0, this.max_preserve_newlines = h.max_preserve_newlines, this.preserve_newlines = h.preserve_newlines, this._output = new i2(h, r4);
  };
  f.prototype.current_line_has_match = function(h) {
    return this._output.current_line.has_match(h);
  }, f.prototype.set_space_before_token = function(h, r4) {
    this._output.space_before_token = h, this._output.non_breaking_space = r4;
  }, f.prototype.set_wrap_point = function() {
    this._output.set_indent(this.indent_level, this.alignment_size), this._output.set_wrap_point();
  }, f.prototype.add_raw_token = function(h) {
    this._output.add_raw_token(h);
  }, f.prototype.print_preserved_newlines = function(h) {
    var r4 = 0;
    h.type !== t.TEXT && h.previous.type !== t.TEXT && (r4 = h.newlines ? 1 : 0), this.preserve_newlines && (r4 = h.newlines < this.max_preserve_newlines + 1 ? h.newlines : this.max_preserve_newlines + 1);
    for (var d = 0; d < r4; d++)
      this.print_newline(d > 0);
    return r4 !== 0;
  }, f.prototype.traverse_whitespace = function(h) {
    return h.whitespace_before || h.newlines ? (this.print_preserved_newlines(h) || (this._output.space_before_token = true), true) : false;
  }, f.prototype.previous_token_wrapped = function() {
    return this._output.previous_token_wrapped;
  }, f.prototype.print_newline = function(h) {
    this._output.add_new_line(h);
  }, f.prototype.print_token = function(h) {
    h.text && (this._output.set_indent(this.indent_level, this.alignment_size), this._output.add_token(h.text));
  }, f.prototype.indent = function() {
    this.indent_level++;
  }, f.prototype.deindent = function() {
    this.indent_level > 0 && (this.indent_level--, this._output.set_indent(this.indent_level, this.alignment_size));
  }, f.prototype.get_full_indent = function(h) {
    return h = this.indent_level + (h || 0), h < 1 ? "" : this._output.get_indent_string(h);
  };
  var o3 = function(h) {
    for (var r4 = null, d = h.next; d.type !== t.EOF && h.closed !== d; ) {
      if (d.type === t.ATTRIBUTE && d.text === "type") {
        d.next && d.next.type === t.EQUALS && d.next.next && d.next.next.type === t.VALUE && (r4 = d.next.next.text);
        break;
      }
      d = d.next;
    }
    return r4;
  }, u2 = function(h, r4) {
    var d = null, T2 = null;
    return r4.closed ? (h === "script" ? d = "text/javascript" : h === "style" && (d = "text/css"), d = o3(r4) || d, d.search("text/css") > -1 ? T2 = "css" : d.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/) > -1 ? T2 = "javascript" : d.search(/(text|application|dojo)\/(x-)?(html)/) > -1 ? T2 = "html" : d.search(/test\/null/) > -1 && (T2 = "null"), T2) : null;
  };
  function g(h, r4) {
    return r4.indexOf(h) !== -1;
  }
  function v(h, r4, d) {
    this.parent = h || null, this.tag = r4 ? r4.tag_name : "", this.indent_level = d || 0, this.parser_token = r4 || null;
  }
  function b3(h) {
    this._printer = h, this._current_frame = null;
  }
  b3.prototype.get_parser_token = function() {
    return this._current_frame ? this._current_frame.parser_token : null;
  }, b3.prototype.record_tag = function(h) {
    var r4 = new v(this._current_frame, h, this._printer.indent_level);
    this._current_frame = r4;
  }, b3.prototype._try_pop_frame = function(h) {
    var r4 = null;
    return h && (r4 = h.parser_token, this._printer.indent_level = h.indent_level, this._current_frame = h.parent), r4;
  }, b3.prototype._get_frame = function(h, r4) {
    for (var d = this._current_frame; d && h.indexOf(d.tag) === -1; ) {
      if (r4 && r4.indexOf(d.tag) !== -1) {
        d = null;
        break;
      }
      d = d.parent;
    }
    return d;
  }, b3.prototype.try_pop = function(h, r4) {
    var d = this._get_frame([h], r4);
    return this._try_pop_frame(d);
  }, b3.prototype.indent_to_tag = function(h) {
    var r4 = this._get_frame(h);
    r4 && (this._printer.indent_level = r4.indent_level);
  };
  function c(h, r4, d, T2) {
    this._source_text = h || "", r4 = r4 || {}, this._js_beautify = d, this._css_beautify = T2, this._tag_stack = null;
    var x = new n(r4, "html");
    this._options = x, this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, 5) === "force", this._is_wrap_attributes_force_expand_multiline = this._options.wrap_attributes === "force-expand-multiline", this._is_wrap_attributes_force_aligned = this._options.wrap_attributes === "force-aligned", this._is_wrap_attributes_aligned_multiple = this._options.wrap_attributes === "aligned-multiple", this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, 8) === "preserve", this._is_wrap_attributes_preserve_aligned = this._options.wrap_attributes === "preserve-aligned";
  }
  c.prototype.beautify = function() {
    if (this._options.disabled)
      return this._source_text;
    var h = this._source_text, r4 = this._options.eol;
    this._options.eol === "auto" && (r4 = `
`, h && a2.test(h) && (r4 = h.match(a2)[0])), h = h.replace(_2, `
`);
    var d = h.match(/^[\t ]*/)[0], T2 = {
      text: "",
      type: ""
    }, x = new k2(), E2 = new f(this._options, d), l2 = new e(h, this._options).tokenize();
    this._tag_stack = new b3(E2);
    for (var m3 = null, p2 = l2.next(); p2.type !== t.EOF; )
      p2.type === t.TAG_OPEN || p2.type === t.COMMENT ? (m3 = this._handle_tag_open(E2, p2, x, T2, l2), x = m3) : p2.type === t.ATTRIBUTE || p2.type === t.EQUALS || p2.type === t.VALUE || p2.type === t.TEXT && !x.tag_complete ? m3 = this._handle_inside_tag(E2, p2, x, T2) : p2.type === t.TAG_CLOSE ? m3 = this._handle_tag_close(E2, p2, x) : p2.type === t.TEXT ? m3 = this._handle_text(E2, p2, x) : p2.type === t.CONTROL_FLOW_OPEN ? m3 = this._handle_control_flow_open(E2, p2) : p2.type === t.CONTROL_FLOW_CLOSE ? m3 = this._handle_control_flow_close(E2, p2) : E2.add_raw_token(p2), T2 = m3, p2 = l2.next();
    var O2 = E2._output.get_code(r4);
    return O2;
  }, c.prototype._handle_control_flow_open = function(h, r4) {
    var d = {
      text: r4.text,
      type: r4.type
    };
    return h.set_space_before_token(r4.newlines || r4.whitespace_before !== "", true), r4.newlines ? h.print_preserved_newlines(r4) : h.set_space_before_token(r4.newlines || r4.whitespace_before !== "", true), h.print_token(r4), h.indent(), d;
  }, c.prototype._handle_control_flow_close = function(h, r4) {
    var d = {
      text: r4.text,
      type: r4.type
    };
    return h.deindent(), r4.newlines ? h.print_preserved_newlines(r4) : h.set_space_before_token(r4.newlines || r4.whitespace_before !== "", true), h.print_token(r4), d;
  }, c.prototype._handle_tag_close = function(h, r4, d) {
    var T2 = {
      text: r4.text,
      type: r4.type
    };
    return h.alignment_size = 0, d.tag_complete = true, h.set_space_before_token(r4.newlines || r4.whitespace_before !== "", true), d.is_unformatted ? h.add_raw_token(r4) : (d.tag_start_char === "<" && (h.set_space_before_token(r4.text[0] === "/", true), this._is_wrap_attributes_force_expand_multiline && d.has_wrapped_attrs && h.print_newline(false)), h.print_token(r4)), d.indent_content && !(d.is_unformatted || d.is_content_unformatted) && (h.indent(), d.indent_content = false), !d.is_inline_element && !(d.is_unformatted || d.is_content_unformatted) && h.set_wrap_point(), T2;
  }, c.prototype._handle_inside_tag = function(h, r4, d, T2) {
    var x = d.has_wrapped_attrs, E2 = {
      text: r4.text,
      type: r4.type
    };
    return h.set_space_before_token(r4.newlines || r4.whitespace_before !== "", true), d.is_unformatted ? h.add_raw_token(r4) : d.tag_start_char === "{" && r4.type === t.TEXT ? h.print_preserved_newlines(r4) ? (r4.newlines = 0, h.add_raw_token(r4)) : h.print_token(r4) : (r4.type === t.ATTRIBUTE ? h.set_space_before_token(true) : (r4.type === t.EQUALS || r4.type === t.VALUE && r4.previous.type === t.EQUALS) && h.set_space_before_token(false), r4.type === t.ATTRIBUTE && d.tag_start_char === "<" && ((this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) && (h.traverse_whitespace(r4), x = x || r4.newlines !== 0), this._is_wrap_attributes_force && d.attr_count >= this._options.wrap_attributes_min_attrs && (T2.type !== t.TAG_OPEN || this._is_wrap_attributes_force_expand_multiline) && (h.print_newline(false), x = true)), h.print_token(r4), x = x || h.previous_token_wrapped(), d.has_wrapped_attrs = x), E2;
  }, c.prototype._handle_text = function(h, r4, d) {
    var T2 = {
      text: r4.text,
      type: "TK_CONTENT"
    };
    return d.custom_beautifier_name ? this._print_custom_beatifier_text(h, r4, d) : d.is_unformatted || d.is_content_unformatted ? h.add_raw_token(r4) : (h.traverse_whitespace(r4), h.print_token(r4)), T2;
  }, c.prototype._print_custom_beatifier_text = function(h, r4, d) {
    var T2 = this;
    if (r4.text !== "") {
      var x = r4.text, E2, l2 = 1, m3 = "", p2 = "";
      d.custom_beautifier_name === "javascript" && typeof this._js_beautify == "function" ? E2 = this._js_beautify : d.custom_beautifier_name === "css" && typeof this._css_beautify == "function" ? E2 = this._css_beautify : d.custom_beautifier_name === "html" && (E2 = function(N, j) {
        var P2 = new c(N, j, T2._js_beautify, T2._css_beautify);
        return P2.beautify();
      }), this._options.indent_scripts === "keep" ? l2 = 0 : this._options.indent_scripts === "separate" && (l2 = -h.indent_level);
      var O2 = h.get_full_indent(l2);
      if (x = x.replace(/\n[ \t]*$/, ""), d.custom_beautifier_name !== "html" && x[0] === "<" && x.match(/^(<!--|<!\[CDATA\[)/)) {
        var s2 = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(x);
        if (!s2) {
          h.add_raw_token(r4);
          return;
        }
        m3 = O2 + s2[1] + `
`, x = s2[4], s2[5] && (p2 = O2 + s2[5]), x = x.replace(/\n[ \t]*$/, ""), (s2[2] || s2[3].indexOf(`
`) !== -1) && (s2 = s2[3].match(/[ \t]+$/), s2 && (r4.whitespace_before = s2[0]));
      }
      if (x)
        if (E2) {
          var y2 = function() {
            this.eol = `
`;
          };
          y2.prototype = this._options.raw_options;
          var w2 = new y2();
          x = E2(O2 + x, w2);
        } else {
          var A2 = r4.whitespace_before;
          A2 && (x = x.replace(new RegExp(`
(` + A2 + ")?", "g"), `
`)), x = O2 + x.replace(/\n/g, `
` + O2);
        }
      m3 && (x ? x = m3 + x + `
` + p2 : x = m3 + p2), h.print_newline(false), x && (r4.text = x, r4.whitespace_before = "", r4.newlines = 0, h.add_raw_token(r4), h.print_newline(true));
    }
  }, c.prototype._handle_tag_open = function(h, r4, d, T2, x) {
    var E2 = this._get_tag_open_token(r4);
    if ((d.is_unformatted || d.is_content_unformatted) && !d.is_empty_element && r4.type === t.TAG_OPEN && !E2.is_start_tag ? (h.add_raw_token(r4), E2.start_tag_token = this._tag_stack.try_pop(E2.tag_name)) : (h.traverse_whitespace(r4), this._set_tag_position(h, r4, E2, d, T2), E2.is_inline_element || h.set_wrap_point(), h.print_token(r4)), E2.is_start_tag && this._is_wrap_attributes_force) {
      var l2 = 0, m3;
      do
        m3 = x.peek(l2), m3.type === t.ATTRIBUTE && (E2.attr_count += 1), l2 += 1;
      while (m3.type !== t.EOF && m3.type !== t.TAG_CLOSE);
    }
    return (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) && (E2.alignment_size = r4.text.length + 1), !E2.tag_complete && !E2.is_unformatted && (h.alignment_size = E2.alignment_size), E2;
  };
  var k2 = function(h, r4) {
    if (this.parent = h || null, this.text = "", this.type = "TK_TAG_OPEN", this.tag_name = "", this.is_inline_element = false, this.is_unformatted = false, this.is_content_unformatted = false, this.is_empty_element = false, this.is_start_tag = false, this.is_end_tag = false, this.indent_content = false, this.multiline_content = false, this.custom_beautifier_name = null, this.start_tag_token = null, this.attr_count = 0, this.has_wrapped_attrs = false, this.alignment_size = 0, this.tag_complete = false, this.tag_start_char = "", this.tag_check = "", !r4)
      this.tag_complete = true;
    else {
      var d;
      this.tag_start_char = r4.text[0], this.text = r4.text, this.tag_start_char === "<" ? (d = r4.text.match(/^<([^\s>]*)/), this.tag_check = d ? d[1] : "") : (d = r4.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/), this.tag_check = d ? d[1] : "", (r4.text.startsWith("{{#>") || r4.text.startsWith("{{~#>")) && this.tag_check[0] === ">" && (this.tag_check === ">" && r4.next !== null ? this.tag_check = r4.next.text.split(" ")[0] : this.tag_check = r4.text.split(">")[1])), this.tag_check = this.tag_check.toLowerCase(), r4.type === t.COMMENT && (this.tag_complete = true), this.is_start_tag = this.tag_check.charAt(0) !== "/", this.tag_name = this.is_start_tag ? this.tag_check : this.tag_check.substr(1), this.is_end_tag = !this.is_start_tag || r4.closed && r4.closed.text === "/>";
      var T2 = 2;
      this.tag_start_char === "{" && this.text.length >= 3 && this.text.charAt(2) === "~" && (T2 = 3), this.is_end_tag = this.is_end_tag || this.tag_start_char === "{" && (this.text.length < 3 || /[^#\^]/.test(this.text.charAt(T2)));
    }
  };
  c.prototype._get_tag_open_token = function(h) {
    var r4 = new k2(this._tag_stack.get_parser_token(), h);
    return r4.alignment_size = this._options.wrap_attributes_indent_size, r4.is_end_tag = r4.is_end_tag || g(r4.tag_check, this._options.void_elements), r4.is_empty_element = r4.tag_complete || r4.is_start_tag && r4.is_end_tag, r4.is_unformatted = !r4.tag_complete && g(r4.tag_check, this._options.unformatted), r4.is_content_unformatted = !r4.is_empty_element && g(r4.tag_check, this._options.content_unformatted), r4.is_inline_element = g(r4.tag_name, this._options.inline) || this._options.inline_custom_elements && r4.tag_name.includes("-") || r4.tag_start_char === "{", r4;
  }, c.prototype._set_tag_position = function(h, r4, d, T2, x) {
    if (d.is_empty_element || (d.is_end_tag ? d.start_tag_token = this._tag_stack.try_pop(d.tag_name) : (this._do_optional_end_element(d) && (d.is_inline_element || h.print_newline(false)), this._tag_stack.record_tag(d), (d.tag_name === "script" || d.tag_name === "style") && !(d.is_unformatted || d.is_content_unformatted) && (d.custom_beautifier_name = u2(d.tag_check, r4)))), g(d.tag_check, this._options.extra_liners) && (h.print_newline(false), h._output.just_added_blankline() || h.print_newline(true)), d.is_empty_element) {
      if (d.tag_start_char === "{" && d.tag_check === "else") {
        this._tag_stack.indent_to_tag(["if", "unless", "each"]), d.indent_content = true;
        var E2 = h.current_line_has_match(/{{#if/);
        E2 || h.print_newline(false);
      }
      d.tag_name === "!--" && x.type === t.TAG_CLOSE && T2.is_end_tag && d.text.indexOf(`
`) === -1 || (d.is_inline_element || d.is_unformatted || h.print_newline(false), this._calcluate_parent_multiline(h, d));
    } else if (d.is_end_tag) {
      var l2 = false;
      l2 = d.start_tag_token && d.start_tag_token.multiline_content, l2 = l2 || !d.is_inline_element && !(T2.is_inline_element || T2.is_unformatted) && !(x.type === t.TAG_CLOSE && d.start_tag_token === T2) && x.type !== "TK_CONTENT", (d.is_content_unformatted || d.is_unformatted) && (l2 = false), l2 && h.print_newline(false);
    } else
      d.indent_content = !d.custom_beautifier_name, d.tag_start_char === "<" && (d.tag_name === "html" ? d.indent_content = this._options.indent_inner_html : d.tag_name === "head" ? d.indent_content = this._options.indent_head_inner_html : d.tag_name === "body" && (d.indent_content = this._options.indent_body_inner_html)), !(d.is_inline_element || d.is_unformatted) && (x.type !== "TK_CONTENT" || d.is_content_unformatted) && h.print_newline(false), this._calcluate_parent_multiline(h, d);
  }, c.prototype._calcluate_parent_multiline = function(h, r4) {
    r4.parent && h._output.just_added_newline() && !((r4.is_inline_element || r4.is_unformatted) && r4.parent.is_inline_element) && (r4.parent.multiline_content = true);
  };
  var C3 = ["address", "article", "aside", "blockquote", "details", "div", "dl", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "main", "menu", "nav", "ol", "p", "pre", "section", "table", "ul"], S2 = ["a", "audio", "del", "ins", "map", "noscript", "video"];
  return c.prototype._do_optional_end_element = function(h) {
    var r4 = null;
    if (!(h.is_empty_element || !h.is_start_tag || !h.parent)) {
      if (h.tag_name === "body")
        r4 = r4 || this._tag_stack.try_pop("head");
      else if (h.tag_name === "li")
        r4 = r4 || this._tag_stack.try_pop("li", ["ol", "ul", "menu"]);
      else if (h.tag_name === "dd" || h.tag_name === "dt")
        r4 = r4 || this._tag_stack.try_pop("dt", ["dl"]), r4 = r4 || this._tag_stack.try_pop("dd", ["dl"]);
      else if (h.parent.tag_name === "p" && C3.indexOf(h.tag_name) !== -1) {
        var d = h.parent.parent;
        (!d || S2.indexOf(d.tag_name) === -1) && (r4 = r4 || this._tag_stack.try_pop("p"));
      } else
        h.tag_name === "rp" || h.tag_name === "rt" ? (r4 = r4 || this._tag_stack.try_pop("rt", ["ruby", "rtc"]), r4 = r4 || this._tag_stack.try_pop("rp", ["ruby", "rtc"])) : h.tag_name === "optgroup" ? r4 = r4 || this._tag_stack.try_pop("optgroup", ["select"]) : h.tag_name === "option" ? r4 = r4 || this._tag_stack.try_pop("option", ["select", "datalist", "optgroup"]) : h.tag_name === "colgroup" ? r4 = r4 || this._tag_stack.try_pop("caption", ["table"]) : h.tag_name === "thead" ? (r4 = r4 || this._tag_stack.try_pop("caption", ["table"]), r4 = r4 || this._tag_stack.try_pop("colgroup", ["table"])) : h.tag_name === "tbody" || h.tag_name === "tfoot" ? (r4 = r4 || this._tag_stack.try_pop("caption", ["table"]), r4 = r4 || this._tag_stack.try_pop("colgroup", ["table"]), r4 = r4 || this._tag_stack.try_pop("thead", ["table"]), r4 = r4 || this._tag_stack.try_pop("tbody", ["table"])) : h.tag_name === "tr" ? (r4 = r4 || this._tag_stack.try_pop("caption", ["table"]), r4 = r4 || this._tag_stack.try_pop("colgroup", ["table"]), r4 = r4 || this._tag_stack.try_pop("tr", ["table", "thead", "tbody", "tfoot"])) : (h.tag_name === "th" || h.tag_name === "td") && (r4 = r4 || this._tag_stack.try_pop("td", ["table", "thead", "tbody", "tfoot", "tr"]), r4 = r4 || this._tag_stack.try_pop("th", ["table", "thead", "tbody", "tfoot", "tr"]));
      return h.parent = this._tag_stack.get_parser_token(), r4;
    }
  }, ae.Beautifier = c, ae;
}
var ni;
function mn() {
  if (ni)
    return St.exports;
  ni = 1;
  var n = dn().Beautifier, i2 = Oi().Options;
  function e(t, a2, _2, f) {
    var o3 = new n(t, a2, _2, f);
    return o3.beautify();
  }
  return St.exports = e, St.exports.defaultOptions = function() {
    return new i2();
  }, St.exports;
}
var si;
function gn() {
  if (si)
    return yt;
  si = 1;
  var n = hn(), i2 = fn(), e = mn();
  function t(a2, _2, f, o3) {
    return f = f || n, o3 = o3 || i2, e(a2, _2, f, o3);
  }
  return t.defaultOptions = e.defaultOptions, yt.js = n, yt.css = i2, yt.html = t, yt;
}
(function(n) {
  function i2(e, t, a2) {
    var _2 = function(f, o3) {
      return e.js_beautify(f, o3);
    };
    return _2.js = e.js_beautify, _2.css = t.css_beautify, _2.html = a2.html_beautify, _2.js_beautify = e.js_beautify, _2.css_beautify = t.css_beautify, _2.html_beautify = a2.html_beautify, _2;
  }
  (function(e) {
    var t = gn();
    t.js_beautify = t.js, t.css_beautify = t.css, t.html_beautify = t.html, e.exports = i2(t, t, t);
  })(n);
})(vi);
var ri;
var vn = function(i2) {
  return typeof i2 == "string" && bn().test(i2);
};
function bn() {
  return ri || (ri = new RegExp(`^[\\s	
\v\f\r   ᠎             　\u2028\u2029\uFEFF"]+$`));
}
var yn = function(i2) {
  return typeof i2 < "u" && i2 !== null && (typeof i2 == "object" || typeof i2 == "function");
};
var ai = yn;
var Ti = function(i2) {
  ai(i2) || (i2 = {});
  for (var e = arguments.length, t = 1; t < e; t++) {
    var a2 = arguments[t];
    ai(a2) && wn(i2, a2);
  }
  return i2;
};
function wn(n, i2) {
  for (var e in i2)
    xn(i2, e) && (n[e] = i2[e]);
}
function xn(n, i2) {
  return Object.prototype.hasOwnProperty.call(n, i2);
}
var En = function(n) {
  return n != null && (ki(n) || On(n) || !!n._isBuffer);
};
function ki(n) {
  return !!n.constructor && typeof n.constructor.isBuffer == "function" && n.constructor.isBuffer(n);
}
function On(n) {
  return typeof n.readFloatLE == "function" && typeof n.slice == "function" && ki(n.slice(0, 0));
}
var Tn = En;
var kn = Object.prototype.toString;
var Rn = function(i2) {
  if (typeof i2 > "u")
    return "undefined";
  if (i2 === null)
    return "null";
  if (i2 === true || i2 === false || i2 instanceof Boolean)
    return "boolean";
  if (typeof i2 == "string" || i2 instanceof String)
    return "string";
  if (typeof i2 == "number" || i2 instanceof Number)
    return "number";
  if (typeof i2 == "function" || i2 instanceof Function)
    return "function";
  if (typeof Array.isArray < "u" && Array.isArray(i2))
    return "array";
  if (i2 instanceof RegExp)
    return "regexp";
  if (i2 instanceof Date)
    return "date";
  var e = kn.call(i2);
  return e === "[object RegExp]" ? "regexp" : e === "[object Date]" ? "date" : e === "[object Arguments]" ? "arguments" : e === "[object Error]" ? "error" : Tn(i2) ? "buffer" : e === "[object Set]" ? "set" : e === "[object WeakSet]" ? "weakset" : e === "[object Map]" ? "map" : e === "[object WeakMap]" ? "weakmap" : e === "[object Symbol]" ? "symbol" : e === "[object Int8Array]" ? "int8array" : e === "[object Uint8Array]" ? "uint8array" : e === "[object Uint8ClampedArray]" ? "uint8clampedarray" : e === "[object Int16Array]" ? "int16array" : e === "[object Uint16Array]" ? "uint16array" : e === "[object Int32Array]" ? "int32array" : e === "[object Uint32Array]" ? "uint32array" : e === "[object Float32Array]" ? "float32array" : e === "[object Float64Array]" ? "float64array" : "object";
};
var Sn = vn;
var Cn = Ti;
var An = Rn;
var Nn = function(n, i2) {
  var e = Cn({}, i2), t = e.sep || `

`, a2 = e.min, _2;
  return typeof a2 == "number" && a2 !== 2 && (_2 = new RegExp("(\\r\\n|\\n|\\u2424) {" + a2 + ",}")), typeof _2 > "u" && (_2 = e.regex || /(\r\n|\n|\u2424){2,}/g), e.keepWhitespace !== true && (n = n.split(`
`).map(function(f) {
    return Sn(f) ? f.trim() : f;
  }).join(`
`)), n = Ln(n, e), n.replace(_2, t);
};
function Ln(n, i2) {
  var e = i2.trailingNewline;
  if (e === false)
    return n;
  switch (An(e)) {
    case "string":
      n = n.replace(/\s+$/, i2.trailingNewline);
      break;
    case "function":
      n = i2.trailingNewline(n);
      break;
    case "undefined":
    case "boolean":
    default: {
      n = n.replace(/\s+$/, `
`);
      break;
    }
  }
  return n;
}
var jn = vi.exports;
var Dn = Nn;
var $n = Ti;
var In = {
  unformatted: ["code", "pre", "em", "strong", "span"],
  indent_inner_html: true,
  indent_char: " ",
  indent_size: 2,
  sep: `
`
};
var Pn = function(i2, e) {
  var t = $n({}, In, e);
  return i2 = jn.html(i2, t), t.ocd === true ? (t.newlines && (t.sep = t.newlines), Bn(i2, t)) : i2;
};
function Bn(n, i2) {
  return Dn(n, i2).replace(/^\s+/g, "").replace(/\s+$/g, `
`).replace(/(\s*<!--)/g, `
$1`).replace(/>(\s*)(?=<!--\s*\/)/g, "> ");
}
function gt(n) {
  let { code: i2, src: e } = n || {};
  if (i2 || (i2 = '<div id="app"></div>'), e && (i2 += `
<script type="module" src="${e}"><\/script>`), typeof DOMParser < "u") {
    const a2 = new DOMParser().parseFromString(i2, "text/html");
    return Pn(`<!DOCTYPE html>
${a2.documentElement.outerHTML}`, {
      ocd: true
    });
  }
  return "";
}
function Mt(n) {
  const i2 = {};
  return n === $.REACT && (i2.jsx = "react"), JSON.stringify(
    {
      compilerOptions: {
        target: "es5",
        lib: ["dom", "dom.iterable", "esnext"],
        allowJs: true,
        skipLibCheck: true,
        esModuleInterop: true,
        allowImportingTsExtensions: true,
        allowSyntheticDefaultImports: true,
        strict: true,
        forceConsistentCasingInFileNames: true,
        module: "esnext",
        moduleResolution: "node",
        resolveJsonModule: true,
        isolatedModules: true,
        noEmit: true,
        ...i2
      },
      include: ["src"]
    },
    null,
    2
  );
}
var Ri = () => JSON.stringify(
  {
    installDependencies: false,
    startCommand: "npm install && npm run dev"
  },
  null,
  2
);
var Mn = `import { createApp } from "vue";
import Demo from "./Demo.vue";

const app = createApp(Demo);
app.mount("#app");
`;
var Wn = `import React from "react";
import { createRoot } from "react-dom/client";
import Demo from "./Demo.tsx";

const root = createRoot(document.querySelector("#app"));
root.render(<Demo />);
`;
function Wt(n) {
  return n === $.VUE ? Mn : n === $.REACT ? Wn : "";
}
var Un = `import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
export default defineConfig({
  plugins: [vue(), vueJsx()],
});
`;
var Fn = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
});
`;
function Si(n) {
  return n === $.VUE ? Un : n === $.REACT ? Fn : "";
}
var zn = () => ({
  copyContent: ref(""),
  clickCopy: async (e) => {
    let t = true;
    try {
      navigator.clipboard && navigator.clipboard.writeText && await navigator.clipboard.writeText(e);
    } catch {
      const _2 = document.createElement("textarea");
      _2.value = e, _2.style.position = "fixed", _2.style.left = "-999999px", _2.style.top = "-999999px", document.body.appendChild(_2), _2.focus(), _2.select(), t = document.execCommand("copy"), document.body.removeChild(_2);
    }
    return t;
  }
});
var Kn = () => {
  const n = ref(true);
  return {
    isCodeFold: n,
    setCodeFold: (e) => {
      n.value = e;
    }
  };
};
function qn(n) {
  return [
    ...n.match(/from '([^']+)'(;)?(\r)?\n/g) || [],
    ...n.match(/from "([^"]+)"(;)?(\r)?\n/g) || []
  ].map((i2) => {
    let e = "";
    return i2.includes("'") ? e = i2.split("'")[1] : i2.includes('"') && (e = i2.split('"')[1]), e.includes("/") && (e.startsWith("@") ? e = e.split("/")[0] + "/" + e.split("/")[1] : e = e.split("/")[0]), e;
  }).filter((i2) => i2 !== "").reduce((i2, e) => (i2[e] = "latest", i2), {});
}
var At = "vitepress-demo-plugin";
var Nt = (n, i2, e, t) => {
  let a2 = i2 === "" ? `${n}` : `${n}-${i2}`;
  return e && (a2 += `__${e}`), t && (a2 += `--${t}`), a2;
};
var Ut = (n = "") => ({
  b: () => Nt(At, n),
  e: (_2 = "") => Nt(At, n, _2),
  m: (_2 = "") => Nt(At, n, "", _2),
  bem: (_2, f, o3) => Nt(At, _2, f, o3)
});
var oi = ({
  code: n,
  styles: i2,
  links: e
}) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    ${i2}
    ${e}
    <style>
      body {
        min-height: 0;
      }
    </style>
  </head>
  <body>
    <div class="vp-raw">
      ${n}
    </div>
  </body>
</html>
  `;
var Vn = (n, i2) => {
  const e = {
    dependencies: {},
    devDependencies: {
      typescript: "latest"
    }
  };
  return n === $.VUE ? (e.dependencies.vue = "latest", i2 === rt.STACKBLITZ ? (e.devDependencies.vite = "latest", e.devDependencies["@vitejs/plugin-vue"] = "latest", e.devDependencies["@vitejs/plugin-vue-jsx"] = "latest") : i2 === rt.CODESANDBOX && (e.devDependencies["@vue/cli-plugin-babel"] = "latest")) : n === $.REACT && (e.dependencies.react = "latest", e.dependencies["react-dom"] = "latest", e.dependencies["@emotion/react"] = "latest", e.dependencies["@emotion/styled"] = "latest", e.devDependencies["@types/react"] = "latest", e.devDependencies["@types/react-dom"] = "latest", i2 === rt.STACKBLITZ && (e.devDependencies.vite = "latest", e.devDependencies["@vitejs/plugin-react"] = "latest")), e;
};
function Ft(n) {
  const { type: i2, platform: e, code: t, title: a2, description: _2 } = n, f = e === rt.STACKBLITZ ? {
    scripts: {
      dev: "vite",
      build: "vite build",
      serve: "vite preview"
    }
  } : {}, { dependencies: o3, devDependencies: u2 } = Vn(i2, e), g = {
    name: a2,
    description: _2,
    version: "0.0.0",
    private: true,
    ...f,
    dependencies: {
      ...qn(t),
      ...o3
    },
    devDependencies: {
      ...u2
    }
  };
  return JSON.stringify(g, null, 2);
}
function Gn(n) {
  const { code: i2 } = n;
  return Pt({
    files: {
      "package.json": {
        content: Ft({
          type: $.VUE,
          platform: rt.CODESANDBOX,
          code: i2
        })
      },
      "tsconfig.json": {
        content: Mt($.VUE)
      },
      "index.html": {
        content: gt()
      },
      "src/main.ts": {
        content: Wt($.VUE)
      },
      "src/Demo.vue": {
        content: i2
      },
      ...n.customFiles
    }
  });
}
function Hn(n) {
  const { code: i2 } = n;
  return Pt({
    files: {
      "package.json": {
        content: Ft({
          type: $.REACT,
          platform: rt.CODESANDBOX,
          code: i2
        })
      },
      "tsconfig.json": {
        content: Mt($.REACT)
      },
      "index.html": {
        content: gt()
      },
      "src/main.tsx": {
        content: Wt($.REACT)
      },
      "src/Demo.tsx": {
        content: i2
      },
      ...n.customFiles
    }
  });
}
function Xn(n) {
  const { code: i2 } = n;
  return Pt({
    files: {
      "index.html": {
        content: gt({ code: i2 })
      },
      ...n.customFiles
    },
    template: "static"
  });
}
function Qn(n) {
  var a2, _2, f;
  const i2 = (a2 = (n.templates || []).find(
    (o3) => o3.scope === "global"
  )) == null ? void 0 : a2.files, e = (_2 = (n.templates || []).find(
    (o3) => o3.scope === n.type
  )) == null ? void 0 : _2.files, t = (f = (n.templates || []).find(
    (o3) => o3.scope === n.scope
  )) == null ? void 0 : f.files;
  n.customFiles = {
    ...i2,
    ...e,
    ...t
  };
  for (let o3 in n.customFiles)
    n.customFiles[o3] = {
      content: n.customFiles[o3] || ""
    };
  if (n.type === $.VUE)
    return Gn(n);
  if (n.type === $.REACT)
    return Hn(n);
  if (n.type === $.HTML)
    return Xn(n);
}
var Jn = {
  action: "https://codesandbox.io/api/v1/sandboxes/define",
  method: "post",
  target: "_blank",
  style: { display: "flex" }
};
var Zn = ["value"];
var Yn = ["value"];
var ts = defineComponent({
  __name: "codesandbox",
  props: {
    code: {},
    type: {},
    title: {},
    description: {},
    scope: {},
    templates: {}
  },
  setup(n) {
    const i2 = n, e = computed(
      () => Qn({
        code: i2.code,
        type: i2.type,
        title: i2.title || di,
        description: i2.description || mi,
        scope: i2.scope,
        templates: i2.templates
      })
    ), t = computed(() => sn(i2.type));
    return (a2, _2) => (openBlock(), createElementBlock("form", Jn, [
      createBaseVNode("input", {
        style: { display: "none" },
        name: "parameters",
        value: e.value
      }, null, 8, Zn),
      _2[0] || (_2[0] = createBaseVNode("input", {
        style: { display: "none" },
        name: "embed",
        value: 1
      }, null, -1)),
      createBaseVNode("input", {
        style: { display: "none" },
        name: "query",
        value: `module=${t.value}`
      }, null, 8, Yn),
      _2[1] || (_2[1] = createStaticVNode('<button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-codesandbox"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg></button>', 1))
    ]));
  }
});
var es = 500;
var is = 20;
var ns = 300;
var ss = "https://stackblitz.com";
var _i = [
  "angular-cli",
  "create-react-app",
  "html",
  "javascript",
  "node",
  "polymer",
  "typescript",
  "vue"
];
var rs = ["project", "search", "ports", "settings"];
var as = ["light", "dark"];
var os = ["editor", "preview"];
var ui = {
  clickToLoad: (n) => lt("ctl", n),
  devToolsHeight: (n) => li2("devtoolsheight", n),
  forceEmbedLayout: (n) => lt("embed", n),
  hideDevTools: (n) => lt("hidedevtools", n),
  hideExplorer: (n) => lt("hideExplorer", n),
  hideNavigation: (n) => lt("hideNavigation", n),
  openFile: (n) => Lt("file", n),
  showSidebar: (n) => _s("showSidebar", n),
  sidebarView: (n) => _e("sidebarView", n, rs),
  startScript: (n) => Lt("startScript", n),
  terminalHeight: (n) => li2("terminalHeight", n),
  theme: (n) => _e("theme", n, as),
  view: (n) => _e("view", n, os),
  zenMode: (n) => lt("zenMode", n),
  organization: (n) => `${Lt("orgName", n == null ? void 0 : n.name)}&${Lt("orgProvider", n == null ? void 0 : n.provider)}`,
  crossOriginIsolated: (n) => lt("corp", n)
};
function Ci(n = {}) {
  const i2 = Object.entries(n).map(([e, t]) => t != null && ui.hasOwnProperty(e) ? ui[e](t) : "").filter(Boolean);
  return i2.length ? `?${i2.join("&")}` : "";
}
function lt(n, i2) {
  return i2 === true ? `${n}=1` : "";
}
function _s(n, i2) {
  return typeof i2 == "boolean" ? `${n}=${i2 ? "1" : "0"}` : "";
}
function li2(n, i2) {
  if (typeof i2 == "number" && !Number.isNaN(i2)) {
    const e = Math.min(100, Math.max(0, i2));
    return `${n}=${encodeURIComponent(Math.round(e))}`;
  }
  return "";
}
function _e(n, i2 = "", e = []) {
  return e.includes(i2) ? `${n}=${encodeURIComponent(i2)}` : "";
}
function Lt(n, i2) {
  return (Array.isArray(i2) ? i2 : [i2]).filter((t) => typeof t == "string" && t.trim() !== "").map((t) => `${n}=${encodeURIComponent(t)}`).join("&");
}
function Ai() {
  return Math.random().toString(36).slice(2, 6) + Math.random().toString(36).slice(2, 6);
}
function de(n, i2) {
  return `${Ni(i2)}${n}${Ci(i2)}`;
}
function me(n, i2) {
  const e = {
    forceEmbedLayout: true
  };
  return i2 && typeof i2 == "object" && Object.assign(e, i2), `${Ni(e)}${n}${Ci(e)}`;
}
function Ni(n = {}) {
  return (typeof n.origin == "string" ? n.origin : ss).replace(/\/$/, "");
}
function ge(n, i2, e) {
  if (!i2 || !n || !n.parentNode)
    throw new Error("Invalid Element");
  n.id && (i2.id = n.id), n.className && (i2.className = n.className), us(i2, e), ls(n, i2, e), n.replaceWith(i2);
}
function ve(n) {
  if (typeof n == "string") {
    const i2 = document.getElementById(n);
    if (!i2)
      throw new Error(`Could not find element with id '${n}'`);
    return i2;
  } else if (n instanceof HTMLElement)
    return n;
  throw new Error(`Invalid element: ${n}`);
}
function be(n) {
  return n && n.newWindow === false ? "_self" : "_blank";
}
function us(n, i2 = {}) {
  const e = Object.hasOwnProperty.call(i2, "height") ? `${i2.height}` : `${ns}`, t = Object.hasOwnProperty.call(i2, "width") ? `${i2.width}` : void 0;
  n.setAttribute("height", e), t ? n.setAttribute("width", t) : n.setAttribute("style", "width:100%;");
}
function ls(n, i2, e = {}) {
  var a2, _2, f;
  const t = (f = (_2 = (a2 = n.allow) == null ? void 0 : a2.split(";")) == null ? void 0 : _2.map((o3) => o3.trim())) != null ? f : [];
  e.crossOriginIsolated && !t.includes("cross-origin-isolated") && t.push("cross-origin-isolated"), t.length > 0 && (i2.allow = t.join("; "));
}
var ps = class {
  constructor(i2) {
    this.pending = {}, this.port = i2, this.port.onmessage = this.messageListener.bind(this);
  }
  request({ type: i2, payload: e }) {
    return new Promise((t, a2) => {
      const _2 = Ai();
      this.pending[_2] = { resolve: t, reject: a2 }, this.port.postMessage({
        type: i2,
        payload: {
          ...e,
          __reqid: _2
        }
      });
    });
  }
  messageListener(i2) {
    var o3;
    if (typeof ((o3 = i2.data.payload) == null ? void 0 : o3.__reqid) != "string")
      return;
    const { type: e, payload: t } = i2.data, { __reqid: a2, __success: _2, __error: f } = t;
    this.pending[a2] && (_2 ? this.pending[a2].resolve(this.cleanResult(t)) : this.pending[a2].reject(f ? `${e}: ${f}` : e), delete this.pending[a2]);
  }
  cleanResult(i2) {
    const e = { ...i2 };
    return delete e.__reqid, delete e.__success, delete e.__error, Object.keys(e).length ? e : null;
  }
};
var hs = class {
  constructor(i2, e) {
    this.editor = {
      openFile: (t) => this._rdc.request({
        type: "SDK_OPEN_FILE",
        payload: { path: t }
      }),
      setCurrentFile: (t) => this._rdc.request({
        type: "SDK_SET_CURRENT_FILE",
        payload: { path: t }
      }),
      setTheme: (t) => this._rdc.request({
        type: "SDK_SET_UI_THEME",
        payload: { theme: t }
      }),
      setView: (t) => this._rdc.request({
        type: "SDK_SET_UI_VIEW",
        payload: { view: t }
      }),
      showSidebar: (t = true) => this._rdc.request({
        type: "SDK_TOGGLE_SIDEBAR",
        payload: { visible: t }
      })
    }, this.preview = {
      origin: "",
      getUrl: () => this._rdc.request({
        type: "SDK_GET_PREVIEW_URL",
        payload: {}
      }).then((t) => {
        var a2;
        return (a2 = t == null ? void 0 : t.url) != null ? a2 : null;
      }),
      setUrl: (t = "/") => {
        if (typeof t != "string" || !t.startsWith("/"))
          throw new Error(`Invalid argument: expected a path starting with '/', got '${t}'`);
        return this._rdc.request({
          type: "SDK_SET_PREVIEW_URL",
          payload: { path: t }
        });
      }
    }, this._rdc = new ps(i2), Object.defineProperty(this.preview, "origin", {
      value: typeof e.previewOrigin == "string" ? e.previewOrigin : null,
      writable: false
    });
  }
  applyFsDiff(i2) {
    const e = (t) => t !== null && typeof t == "object";
    if (!e(i2) || !e(i2.create))
      throw new Error("Invalid diff object: expected diff.create to be an object.");
    if (!Array.isArray(i2.destroy))
      throw new Error("Invalid diff object: expected diff.destroy to be an array.");
    return this._rdc.request({
      type: "SDK_APPLY_FS_DIFF",
      payload: i2
    });
  }
  getDependencies() {
    return this._rdc.request({
      type: "SDK_GET_DEPS_SNAPSHOT",
      payload: {}
    });
  }
  getFsSnapshot() {
    return this._rdc.request({
      type: "SDK_GET_FS_SNAPSHOT",
      payload: {}
    });
  }
};
var jt = [];
var cs = class {
  constructor(i2) {
    this.id = Ai(), this.element = i2, this.pending = new Promise((e, t) => {
      const a2 = ({ data: g, ports: v }) => {
        (g == null ? void 0 : g.action) === "SDK_INIT_SUCCESS" && g.id === this.id && (this.vm = new hs(v[0], g.payload), e(this.vm), f());
      }, _2 = () => {
        var g;
        (g = this.element.contentWindow) == null || g.postMessage(
          {
            action: "SDK_INIT",
            id: this.id
          },
          "*"
        );
      };
      function f() {
        window.clearInterval(u2), window.removeEventListener("message", a2);
      }
      window.addEventListener("message", a2), _2();
      let o3 = 0;
      const u2 = window.setInterval(() => {
        if (this.vm) {
          f();
          return;
        }
        if (o3 >= is) {
          f(), t("Timeout: Unable to establish a connection with the StackBlitz VM"), jt.forEach((g, v) => {
            g.id === this.id && jt.splice(v, 1);
          });
          return;
        }
        o3++, _2();
      }, es);
    }), jt.push(this);
  }
};
var fs = (n) => {
  var e;
  const i2 = n instanceof Element ? "element" : "id";
  return (e = jt.find((t) => t[i2] === n)) != null ? e : null;
};
function ds(n, i2) {
  const e = document.createElement("input");
  return e.type = "hidden", e.name = n, e.value = i2, e;
}
function ms(n) {
  return n.replace(/\[/g, "%5B").replace(/\]/g, "%5D");
}
function Li({
  template: n,
  title: i2,
  description: e,
  dependencies: t,
  files: a2,
  settings: _2
}) {
  if (!_i.includes(n)) {
    const g = _i.map((v) => `'${v}'`).join(", ");
    console.warn(`Unsupported project.template: must be one of ${g}`);
  }
  const f = [], o3 = (g, v, b3 = "") => {
    f.push(ds(g, typeof v == "string" ? v : b3));
  };
  o3("project[title]", i2), typeof e == "string" && e.length > 0 && o3("project[description]", e), o3("project[template]", n, "javascript"), t && (n === "node" ? console.warn(
    "Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."
  ) : o3("project[dependencies]", JSON.stringify(t))), _2 && o3("project[settings]", JSON.stringify(_2)), Object.entries(a2).forEach(([g, v]) => {
    o3(`project[files][${ms(g)}]`, v);
  });
  const u2 = document.createElement("form");
  return u2.method = "POST", u2.setAttribute("style", "display:none!important;"), u2.append(...f), u2;
}
function gs(n, i2) {
  const e = Li(n);
  return e.action = me("/run", i2), e.id = "sb_run", `<!doctype html>
<html>
<head><title></title></head>
<body>
  ${e.outerHTML}
  <script>document.getElementById('${e.id}').submit();<\/script>
</body>
</html>`;
}
function vs(n, i2) {
  const e = Li(n);
  e.action = de("/run", i2), e.target = be(i2), document.body.appendChild(e), e.submit(), document.body.removeChild(e);
}
function zt(n) {
  var e;
  return n != null && n.contentWindow ? ((e = fs(n)) != null ? e : new cs(n)).pending : Promise.reject("Provided element is not an iframe.");
}
function bs(n, i2) {
  vs(n, i2);
}
function ys(n, i2) {
  const e = de(`/edit/${n}`, i2), t = be(i2);
  window.open(e, t);
}
function ws(n, i2) {
  const e = de(`/github/${n}`, i2), t = be(i2);
  window.open(e, t);
}
function xs(n, i2, e) {
  var f;
  const t = ve(n), a2 = gs(i2, e), _2 = document.createElement("iframe");
  return ge(t, _2, e), (f = _2.contentDocument) == null || f.write(a2), zt(_2);
}
function Es(n, i2, e) {
  const t = ve(n), a2 = document.createElement("iframe");
  return a2.src = me(`/edit/${i2}`, e), ge(t, a2, e), zt(a2);
}
function Os(n, i2, e) {
  const t = ve(n), a2 = document.createElement("iframe");
  return a2.src = me(`/github/${i2}`, e), ge(t, a2, e), zt(a2);
}
var ye = {
  connect: zt,
  embedGithubProject: Os,
  embedProject: xs,
  embedProjectId: Es,
  openGithubProject: ws,
  openProject: bs,
  openProjectId: ys
};
var Ts = (n) => {
  const { code: i2, title: e, description: t } = n;
  ye.openProject(
    {
      title: e,
      description: t,
      template: "html",
      files: {
        "index.html": gt({ code: i2 }),
        ...n.customFiles
      }
    },
    {
      openFile: "index.html"
    }
  );
};
var ks = (n) => {
  const { code: i2, title: e, description: t } = n;
  ye.openProject(
    {
      title: e,
      description: t,
      template: "node",
      files: {
        "src/Demo.tsx": i2,
        "src/main.tsx": Wt($.REACT),
        "index.html": gt({ src: "/src/main.tsx" }),
        "package.json": Ft({
          type: $.REACT,
          platform: rt.STACKBLITZ,
          code: i2
        }),
        "vite.config.js": Si($.REACT),
        ".stackblitzrc": Ri(),
        "tsconfig.json": Mt($.REACT),
        ...n.customFiles
      }
    },
    {
      openFile: "src/Demo.tsx"
    }
  );
};
var Rs = (n) => {
  const { code: i2, title: e, description: t } = n;
  ye.openProject(
    {
      title: e,
      description: t,
      template: "node",
      files: {
        "src/Demo.vue": i2,
        "src/main.ts": Wt($.VUE),
        "index.html": gt({ src: "/src/main.ts" }),
        "package.json": Ft({
          type: $.VUE,
          platform: rt.STACKBLITZ,
          code: i2
        }),
        "vite.config.js": Si($.VUE),
        ".stackblitzrc": Ri(),
        "tsconfig.json": Mt($.VUE),
        ...n.customFiles
      }
    },
    {
      openFile: "src/Demo.vue"
    }
  );
};
function Ss(n) {
  var a2, _2, f;
  const i2 = (a2 = (n.templates || []).find(
    (o3) => o3.scope === "global"
  )) == null ? void 0 : a2.files, e = (_2 = (n.templates || []).find(
    (o3) => o3.scope === n.type
  )) == null ? void 0 : _2.files, t = (f = (n.templates || []).find(
    (o3) => o3.scope === n.scope
  )) == null ? void 0 : f.files;
  if (n.customFiles = {
    ...i2,
    ...e,
    ...t
  }, n.type === $.VUE)
    return Rs(n);
  if (n.type === $.REACT)
    return ks(n);
  if (n.type === $.HTML)
    return Ts(n);
}
var Cs = defineComponent({
  __name: "stackblitz",
  props: {
    code: {},
    type: {},
    title: {},
    description: {},
    templates: {},
    scope: {}
  },
  setup(n) {
    const i2 = n;
    function e() {
      Ss({
        code: i2.code,
        type: i2.type,
        title: i2.title || di,
        description: i2.description || mi,
        templates: i2.templates || [],
        scope: i2.scope
      });
    }
    return (t, a2) => (openBlock(), createElementBlock("svg", {
      onClick: e,
      viewBox: "64 64 896 896",
      focusable: "false",
      "data-icon": "thunderbolt",
      width: "20px",
      height: "20px",
      fill: "currentColor",
      "aria-hidden": "true"
    }, a2[0] || (a2[0] = [
      createBaseVNode("path", { d: "M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z" }, null, -1)
    ])));
  }
});
var As = {};
var Ns = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "lucide lucide-github"
};
function Ls(n, i2) {
  return openBlock(), createElementBlock("svg", Ns, i2[0] || (i2[0] = [
    createBaseVNode("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }, null, -1),
    createBaseVNode("path", { d: "M9 18c-4.51 2-5-2-7-2" }, null, -1)
  ]));
}
var js = et(As, [["render", Ls]]);
var Ds = {};
var $s = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "lucide lucide-gitlab"
};
function Is(n, i2) {
  return openBlock(), createElementBlock("svg", $s, i2[0] || (i2[0] = [
    createBaseVNode("path", { d: "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" }, null, -1)
  ]));
}
var Ps = et(Ds, [["render", Is]]);
var Bs = {};
var Ms = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  fill: "none",
  version: "1.1",
  width: "18",
  height: "18",
  viewBox: "0 0 24 24"
};
function Ws(n, i2) {
  return openBlock(), createElementBlock("svg", Ms, i2[0] || (i2[0] = [
    createBaseVNode("defs", null, [
      createBaseVNode("clipPath", { id: "master_svg0_27_0291" }, [
        createBaseVNode("rect", {
          x: "0",
          y: "0",
          width: "24",
          height: "24",
          rx: "0"
        })
      ])
    ], -1),
    createBaseVNode("g", { "clip-path": "url(#master_svg0_27_0291)" }, [
      createBaseVNode("g", null, [
        createBaseVNode("path", {
          d: "M4.707482,11.29327L4.707107,11.29289Q4.566455,11.152239999999999,4.382683,11.07612Q4.198912,11,4,11Q3.801088,11,3.617317,11.07612Q3.433545,11.152239999999999,3.292893,11.29289Q3.152241,11.43355,3.07612,11.61732Q3,11.80109,3,12Q3,12.02403,3.001154,12.04804Q3.010111,12.23427,3.085581,12.40477Q3.161051,12.57527,3.292893,12.70711L3.293268,12.70748L8.29289,17.7071Q8.36254,17.776699999999998,8.44443,17.8315Q8.52632,17.886200000000002,8.61732,17.9239Q8.70831,17.9616,8.80491,17.980800000000002Q8.90151,18,9,18Q9.09849,18,9.19509,17.980800000000002Q9.29169,17.9616,9.38268,17.9239Q9.47368,17.886200000000002,9.55557,17.8315Q9.63746,17.776699999999998,9.70711,17.7071L20.7071,6.707107Q20.8478,6.566454,20.9239,6.382683Q21,6.198912,21,6Q21,5.801088,20.9239,5.617317Q20.8478,5.433546,20.7071,5.292894Q20.5665,5.152241,20.3827,5.076121Q20.1989,5,20,5Q19.9741,5,19.9483,5.001339Q19.762999999999998,5.010937,19.5935,5.086334Q19.4241,5.16173,19.2929,5.292893L19.2925,5.293268L9,15.58579L4.707482,11.29327Z",
          "fill-rule": "evenodd",
          fill: "currentColor",
          "fill-opacity": "0.8500000238418579"
        })
      ])
    ], -1)
  ]));
}
var Us = et(Bs, [["render", Ws]]);
var Fs = {};
var zs = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "lucide lucide-x-icon lucide-x"
};
function Ks(n, i2) {
  return openBlock(), createElementBlock("svg", zs, i2[0] || (i2[0] = [
    createBaseVNode("path", { d: "M18 6 6 18" }, null, -1),
    createBaseVNode("path", { d: "m6 6 12 12" }, null, -1)
  ]));
}
var qs = et(Fs, [["render", Ks]]);
var Vs = { style: { color: "var(--vp-c-text-1)" } };
var Gs = 3e3;
var Hs = defineComponent({
  __name: "message",
  props: {
    content: { default: "复制成功！" },
    close: {},
    success: { type: Boolean, default: true }
  },
  setup(n, { expose: i2 }) {
    const e = Ut(), t = n, a2 = ref(false), _2 = (g) => {
      a2.value = g;
    }, f = ref(-9999), o3 = (g) => {
      f.value = g;
    };
    watch(a2, (g) => {
      g === true && setTimeout(() => {
        a2.value = false;
      }, Gs);
    });
    const u2 = () => {
      t.close();
    };
    return i2({
      setVisible: _2,
      setTopHeight: o3
    }), (g, v) => (openBlock(), createBlock(Transition, {
      name: "slide-fade",
      onAfterLeave: u2
    }, {
      default: withCtx(() => [
        a2.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(e).bem("message-notice", "container")]),
          style: normalizeStyle({ top: f.value + "px" })
        }, [
          g.success ? (openBlock(), createBlock(Us, { key: 0 })) : (openBlock(), createBlock(qs, {
            key: 1,
            style: { color: "var(--vp-c-danger-2)" }
          })),
          createBaseVNode("span", Vs, toDisplayString(g.content), 1)
        ], 6)) : createCommentVNode("", true)
      ]),
      _: 1
    }));
  }
});
var ue = [];
var Xs = {
  open: (n, i2) => {
    const e = document.createElement("div"), t = createApp(Hs, {
      content: n,
      success: i2,
      close: () => {
        document.body.removeChild(e), ue.pop(), t.unmount();
      }
    }), a2 = t.mount(e);
    document.body.appendChild(e);
    const _2 = ue.length, f = _2 === 0 ? 10 : (_2 + 1) * 10 + _2 * 42;
    a2.setTopHeight(f), a2.setVisible(true), ue.push(a2);
  }
};
var Qs = defineComponent({
  __name: "index",
  props: {
    content: {}
  },
  setup(n) {
    const i2 = Ut(), e = n;
    return (t, a2) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(i2).bem("tooltip", "wrapper")])
    }, [
      createBaseVNode("div", {
        class: normalizeClass([unref(i2).bem("tooltip", "content")])
      }, [
        renderSlot(t.$slots, "content", {}, () => [
          createTextVNode(toDisplayString(e.content), 1)
        ], true)
      ], 2),
      renderSlot(t.$slots, "default", {}, void 0, true)
    ], 2));
  }
});
var pt = et(Qs, [["__scopeId", "data-v-588bc5b3"]]);
var Kt = {
  openInStackblitz: "在 Stackblitz 中打开",
  openInCodeSandbox: "在 Codesandbox 中打开",
  openInGithub: "在 GitHub 中打开",
  openInGitlab: "在 GitLub 中打开",
  collapseCode: "收起代码",
  expandCode: "展开代码",
  copyCode: "复制代码",
  copySuccess: "已将代码复制至剪切板！",
  copyFail: "复制失败！"
};
var ji = {
  openInStackblitz: "Open In Stackblitz",
  openInCodeSandbox: "Open In Codesandbox",
  openInGithub: "Open in GitHub",
  openInGitlab: "Open in GitLab",
  collapseCode: "Collapse Code",
  expandCode: "Expand Code",
  copyCode: "Copy Code",
  copySuccess: "The code has been copied to the clipboard!",
  copyFail: "Failed to copy the code!"
};
var ft = ref({
  "zh-CN": Kt,
  "en-US": ji
});
var G = ref(Kt);
var Js = (n) => {
  ft.value = {};
  for (const i2 in n)
    n[i2] === "zh-CN" ? ft.value[i2] = Kt : n[i2] === "en-US" ? ft.value[i2] = ji : ft.value[i2] = n[i2];
  typeof document < "u" && (G.value = ft.value[document.documentElement.getAttribute("lang") || "zh-CN"]);
};
var $t;
function Zs() {
  typeof MutationObserver < "u" && typeof document < "u" && ($t = new MutationObserver((n) => {
    n.forEach((i2) => {
      if (i2.type === "attributes" && i2.attributeName === "lang") {
        const e = document.documentElement.getAttribute("lang");
        e && (G.value = ft.value[e] || Kt);
      }
    });
  })), $t.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang"]
  });
}
function Ys() {
  $t && $t.disconnect();
}
var tr2 = { style: { "flex-shrink": "0" } };
var er = ["innerHTML"];
var ir = ["onClick"];
var nr = ["onClick"];
var sr = { class: "language-html" };
var rr = ["innerHTML"];
var $r = defineComponent({
  __name: "index",
  props: {
    title: { default: "标题" },
    description: { default: "描述内容" },
    reactComponent: {},
    vueCode: {},
    reactCode: {},
    htmlCode: {},
    order: { default: "vue,react,html" },
    visible: { type: Boolean, default: true },
    select: { default: $.VUE },
    github: { default: "" },
    gitlab: { default: "" },
    reactCreateElement: {},
    reactCreateRoot: {},
    stackblitz: {},
    codesandbox: {},
    codeplayer: {},
    scope: {},
    files: {},
    lightTheme: {},
    darkTheme: {},
    theme: {},
    locale: {},
    htmlWriteWay: { default: "write" },
    background: {}
  },
  emits: ["mount"],
  setup(n, { emit: i2 }) {
    const e = n, t = i2;
    onMounted(() => {
      t("mount"), a2(), Zs();
    }), onUnmounted(() => {
      Ys();
    });
    function a2() {
      if (e.locale)
        try {
          Js(JSON.parse(decodeURIComponent(e.locale)));
        } catch (R) {
          console.error(R);
        }
    }
    const _2 = computed(() => JSON.parse(decodeURIComponent(e.stackblitz || "{}"))), f = computed(() => JSON.parse(decodeURIComponent(e.codesandbox || "{}")));
    computed(() => JSON.parse(decodeURIComponent(e.codeplayer || "{}")));
    const o3 = ref(""), u2 = computed(() => {
      var W;
      const M2 = JSON.parse(decodeURIComponent(e.files || "{}"))[c.value];
      return M2 && !M2[o3.value] && (o3.value = ((W = Object.keys(M2)) == null ? void 0 : W[0]) || ""), M2;
    }), g = computed(() => e.order.split(",").map((R) => R.trim())), v = inject("coot-code-type", {}), b3 = inject(
      "set-coot-code-type",
      (R) => {
      }
    ), c = ref($.VUE);
    function k2(R) {
      c.value = R, typeof b3 == "function" && b3(R);
    }
    const C3 = computed(() => c.value === "react" ? "tsx" : c.value), S2 = Ut(), { isCodeFold: h, setCodeFold: r4 } = Kn(), { clickCopy: d } = zn(), T2 = computed(() => u2.value && u2.value[o3.value] ? u2.value[o3.value].code : e[`${c.value}Code`]), x = ref("");
    watchEffect(async () => {
      await E2(), l2();
    });
    async function E2() {
      var R;
      x.value = await codeToHtml2(T2.value || "", {
        lang: ((R = u2.value[o3.value]) == null ? void 0 : R.filename.split(".").pop()) || C3.value,
        themes: {
          dark: e.darkTheme || "github-dark",
          light: e.lightTheme || "github-light"
        }
      });
    }
    function l2() {
      setTimeout(() => {
        z.value && !h.value && (z.value.style.height = it.value.scrollHeight + "px");
      });
    }
    const m3 = computed(() => [$.VUE, $.REACT, $.HTML].filter((R) => e[`${R}Code`]).sort((R, M2) => g.value.indexOf(R) - g.value.indexOf(M2)));
    watch(
      () => v == null ? void 0 : v.value,
      (R) => {
        R && e[`${R}Code`] && (c.value = R);
      },
      { immediate: true }
    );
    const p2 = () => {
      window.open(e.github, "_blank");
    }, O2 = () => {
      window.open(e.gitlab, "_blank");
    };
    watch(
      () => c.value,
      (R) => {
        !R || (R === "html" ? A2() : R === "react" && P2());
      },
      {
        immediate: true
      }
    );
    const s2 = async () => {
      const R = await d(T2.value || "");
      Xs.open(
        R ? G.value.copySuccess : G.value.copyFail,
        R
      );
    }, y2 = ref();
    let w2;
    function A2() {
      nextTick(() => {
        if (!y2.value || !e.htmlCode)
          return;
        const R = y2.value.querySelector("iframe"), M2 = document.head.querySelectorAll("style"), W = document.head.querySelectorAll('link[as="style"]'), vt = document.head.querySelectorAll('link[as="font"]'), H = Array.from(M2).map((Q2) => `<style replace="true">${Q2.innerText}</style>`).join(`
`), bt = Array.from(W).map((Q2) => Q2.outerHTML).join(`
`), ut = Array.from(vt).map((Q2) => Q2.outerHTML).join(`
`);
        let X = R.contentDocument || R.contentWindow.document;
        typeof X.write == "function" && e.htmlWriteWay === "write" ? (X.open(), X.write(
          oi({
            code: e.htmlCode || "",
            styles: H,
            links: bt + `
` + ut
          })
        ), X.close()) : (R.srcdoc = oi({
          code: e.htmlCode || "",
          styles: H,
          links: bt + `
` + ut
        }), R.onload = () => {
          X = R.contentDocument || R.contentWindow.document;
        });
        const xt = w2 = function() {
          requestAnimationFrame(() => {
            const Q2 = X.documentElement.offsetHeight + "px";
            R.style.height = Q2, y2.value && (y2.value.style.height = Q2), X.documentElement && (X.documentElement.className = document.documentElement.className), xt === w2 && w2();
          });
        };
        w2();
      });
    }
    const N = ref();
    let j = null;
    function P2() {
      nextTick(() => {
        e.reactComponent && c.value === "react" && e.reactCode && (j || (j = e.reactCreateRoot(N.value)), j.render(e.reactCreateElement(e.reactComponent, {}, null)));
      });
    }
    onUnmounted(() => {
      j && (j.unmount(), j = null);
    }), watch(
      () => [N.value, e.reactComponent],
      (R) => {
        N.value ? P2() : j && (j.unmount(), j = null);
      },
      { immediate: true, deep: true }
    ), watch(
      () => e.reactCode,
      (R, M2) => {
        R && R !== M2 && j && j.render(e.reactCreateElement(e.reactComponent, {}, null));
      },
      { immediate: true, deep: true }
    ), watch(
      () => e.select,
      (R) => {
        R && e[`${R}Code`] && (c.value = R);
      },
      {
        immediate: true
      }
    ), watch(
      () => m3.value,
      () => {
        e[`${c.value}Code`] || (c.value = m3.value[0]);
      },
      { immediate: true, deep: true }
    );
    function F2(R) {
      o3.value = R, z.value && (z.value.style.height = "auto");
    }
    const z = ref(), it = ref();
    return watch(
      () => h.value,
      (R) => {
        nextTick(async () => {
          z.value && (R ? z.value.style.height = 0 : (await E2(), l2()));
        });
      }
    ), (R, M2) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(S2).e("container")])
    }, [
      createBaseVNode("section", {
        class: normalizeClass([unref(S2).bem("preview"), "vp-raw"]),
        style: normalizeStyle({ background: e.background })
      }, [
        c.value === "vue" ? renderSlot(R.$slots, "vue", { key: 0 }) : c.value === "html" ? (openBlock(), createElementBlock("div", {
          key: 1,
          ref_key: "htmlContainerRef",
          ref: y2
        }, M2[3] || (M2[3] = [
          createBaseVNode("iframe", { style: { width: "100%", height: "auto", border: "none" } }, null, -1)
        ]), 512)) : c.value === "react" ? (openBlock(), createElementBlock("div", {
          key: 2,
          ref_key: "reactContainerRef",
          ref: N
        }, null, 512)) : createCommentVNode("", true)
      ], 6),
      createBaseVNode("section", {
        class: normalizeClass([unref(S2).bem("description")])
      }, [
        R.title ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(S2).bem("description", "title")])
        }, [
          createBaseVNode("div", tr2, toDisplayString(R.title), 1)
        ], 2)) : createCommentVNode("", true),
        R.description ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(S2).bem("description", "content")]),
          innerHTML: R.description
        }, null, 10, er)) : createCommentVNode("", true),
        e.description || !e.title && !e.description ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass([unref(S2).bem("description", "split-line")])
        }, null, 2)) : createCommentVNode("", true),
        m3.value.length > 1 && R.visible ? (openBlock(), createElementBlock("div", {
          key: 3,
          class: normalizeClass([unref(S2).bem("lang-tabs")])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(m3.value, (W) => (openBlock(), createElementBlock("div", {
            key: W,
            class: normalizeClass([unref(S2).bem("tab"), c.value === W && unref(S2).bem("active-tab")]),
            onClick: (vt) => k2 == null ? void 0 : k2(W)
          }, toDisplayString(W), 11, ir))), 128))
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass([unref(S2).bem("description", "handle-btn")])
        }, [
          _2.value.show ? (openBlock(), createBlock(pt, {
            key: 0,
            content: unref(G).openInStackblitz
          }, {
            default: withCtx(() => [
              createVNode(Cs, {
                code: T2.value,
                type: c.value,
                scope: R.scope || "",
                templates: _2.value.templates || []
              }, null, 8, ["code", "type", "scope", "templates"])
            ]),
            _: 1
          }, 8, ["content"])) : createCommentVNode("", true),
          f.value.show ? (openBlock(), createBlock(pt, {
            key: 1,
            content: unref(G).openInCodeSandbox
          }, {
            default: withCtx(() => [
              createVNode(ts, {
                code: T2.value,
                type: c.value,
                scope: R.scope || "",
                templates: f.value.templates || []
              }, null, 8, ["code", "type", "scope", "templates"])
            ]),
            _: 1
          }, 8, ["content"])) : createCommentVNode("", true),
          R.github ? (openBlock(), createBlock(pt, {
            key: 2,
            content: unref(G).openInGithub
          }, {
            default: withCtx(() => [
              createVNode(js, { onClick: p2 })
            ]),
            _: 1
          }, 8, ["content"])) : createCommentVNode("", true),
          R.gitlab ? (openBlock(), createBlock(pt, {
            key: 3,
            content: unref(G).openInGitlab
          }, {
            default: withCtx(() => [
              createVNode(Ps, { onClick: O2 })
            ]),
            _: 1
          }, 8, ["content"])) : createCommentVNode("", true),
          unref(h) ? (openBlock(), createBlock(pt, {
            key: 5,
            content: unref(G).expandCode
          }, {
            default: withCtx(() => [
              createVNode(Ki, {
                onClick: M2[1] || (M2[1] = (W) => unref(r4)(false))
              })
            ]),
            _: 1
          }, 8, ["content"])) : (openBlock(), createBlock(pt, {
            key: 4,
            content: unref(G).collapseCode
          }, {
            default: withCtx(() => [
              createVNode(Hi, {
                onClick: M2[0] || (M2[0] = (W) => unref(r4)(true))
              })
            ]),
            _: 1
          }, 8, ["content"])),
          createVNode(pt, {
            content: unref(G).copyCode
          }, {
            default: withCtx(() => [
              createVNode(Zi, { onClick: s2 })
            ]),
            _: 1
          }, 8, ["content"])
        ], 2)
      ], 2),
      createBaseVNode("section", {
        class: normalizeClass([unref(S2).bem("source")]),
        ref_key: "sourceRef",
        ref: z
      }, [
        createBaseVNode("div", {
          ref_key: "sourceContentRef",
          ref: it
        }, [
          Object.keys(u2.value).length ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(S2).bem("file-tabs")])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(u2.value), (W) => (openBlock(), createElementBlock("div", {
              key: W,
              class: normalizeClass([
                unref(S2).bem("tab"),
                o3.value === W && unref(S2).bem("active-tab")
              ]),
              onClick: (vt) => F2(W)
            }, toDisplayString(W), 11, nr))), 128))
          ], 2)) : createCommentVNode("", true),
          createBaseVNode("pre", sr, [
            createBaseVNode("div", { innerHTML: x.value }, null, 8, rr)
          ])
        ], 512)
      ], 2),
      unref(h) ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(unref(S2).bem("fold")),
        onClick: M2[2] || (M2[2] = (W) => unref(r4)(true))
      }, [
        createVNode(nn),
        createTextVNode(toDisplayString(unref(G).collapseCode), 1)
      ], 2))
    ], 2));
  }
});
var ar = defineComponent({
  __name: "placeholder",
  setup(n) {
    const i2 = Ut("placeholder");
    return (e, t) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(i2).e("container")])
    }, t[0] || (t[0] = [
      createBaseVNode("div", { class: "loader" }, null, -1),
      createBaseVNode("div", { class: "loading-text" }, "loading", -1)
    ]), 2));
  }
});
var Ir = et(ar, [["__scopeId", "data-v-5eb3f8d4"]]);
var pi = [
  /<demo(\s|\n)((.|\n)*)><\/demo>/,
  /<demo(\s|\n)((.|\n)*)\/>/
];
var or = /<\s*script[^>]*\blang=['"]ts['"][^>]*/;
var _r = /<\s*script[^>]*\bsetup\b[^>]*/;
var ur = /<\s*script\s+(setup|lang='ts'|lang="ts")?\s*(setup|lang='ts'|lang="ts")?\s*>/;
var J2 = (n, i2, e, t) => {
  const a2 = n.sfcBlocks.scripts, _2 = a2.findIndex((u2) => !!(_r.test(u2.tagOpen) || or.test(u2.tagOpen))), f = e || "";
  let o3 = "";
  if (t === "dynamicImport" ? o3 = e ? `
      const ${f} = shallowRef();
      onMounted(async () => {
        ${f}.value = (await import('${i2}')).default;
      });
      `.trim() : `
      onMounted(async () => {
        await import('${i2}');
      });
      `.trim() : t === "inject" ? o3 = `
      ${e}
    `.trim() : o3 = e ? `import ${f} from '${i2}'` : `import '${i2}'`, _2 === -1) {
    const u2 = {
      type: "script",
      tagClose: "<\/script>",
      tagOpen: "<script setup lang='ts'>",
      content: `<script setup lang='ts'>
        ${o3}
        <\/script>`,
      contentStripped: o3
    };
    a2.push(u2);
  } else {
    const u2 = a2[0];
    if (u2.content.includes(i2) && (!e || u2.content.includes(f)))
      a2[0].content = u2.content;
    else {
      const g = `<script lang="ts" setup>
`;
      a2[0].content = a2[0].content.replace(
        ur,
        g
      ), a2[0].content = a2[0].content.replace(
        g,
        `<script setup>

      ${o3}
`
      );
    }
  }
};
var lr = (n) => {
  let i2 = true;
  const e = [];
  for (; i2; ) {
    const t = n.lastIndexOf("/");
    if (t === -1)
      i2 = false;
    else {
      const a2 = n.substring(t + 1);
      e.unshift(a2), n = n.substring(0, t);
    }
  }
  return "Temp" + btoa(
    encodeURIComponent(
      e.join("-").split(".").slice(0, -1).join(".")
    )
  ).replace(/=/g, "Equal");
};
var pr = /title="(.*?)"/;
var hr = /vue="(.*?)"/;
var cr = /html="(.*?)"/;
var fr = /react="(.*?)"/;
var dr = /description="(.*?)"/;
var mr = /order="(.*?)"/;
var gr = /select="(.*?)"/;
var vr = /github="(.*?)"/;
var br = /gitlab="(.*?)"/;
var yr = /stackblitz="(.*?)"/;
var wr = /codesandbox="(.*?)"/;
var xr = /codeplayer="(.*?)"/;
var Er = /scope="(.*?)"/;
var Or = /vueFiles=("\{((.|\n)*?)\}"|"\[((.|\n)*?)\]")/;
var Tr = /reactFiles=("\{((.|\n)*?)\}"|"\[((.|\n)*?)\]")/;
var kr = /htmlFiles=("\{((.|\n)*?)\}"|"\[((.|\n)*?)\]")/;
var Rr = /ssg="(.*?)"/;
var Sr = /htmlWriteWay="(.*?)"/;
var Cr = /background="(.*?)"/;
var hi = (n, i2, e, t) => {
  var Ee, Oe, Te, ke, Re;
  const {
    demoDir: a2,
    tab: _2 = {},
    stackblitz: f = { show: false },
    codesandbox: o3 = { show: false },
    codeplayer: u2 = { show: false }
  } = t || {};
  let {
    order: g = "vue,react,html",
    visible: v = true,
    select: b3 = (_2.order || "vue,react,html").split(",")[0] || "vue"
  } = _2;
  const c = {
    vue: "",
    title: "",
    description: "",
    html: "",
    react: ""
  }, k2 = i2.content.match(pr), C3 = i2.content.match(hr), S2 = i2.content.match(cr), h = i2.content.match(fr), r4 = i2.content.match(dr), d = i2.content.match(mr), T2 = i2.content.match(gr), x = i2.content.match(vr), E2 = i2.content.match(br), l2 = i2.content.match(yr), m3 = i2.content.match(wr), p2 = i2.content.match(xr), O2 = ((Ee = i2.content.match(Er)) == null ? void 0 : Ee[1]) || "", s2 = i2.content.match(Or), y2 = i2.content.match(Tr), w2 = i2.content.match(kr), A2 = !!((Oe = i2.content.match(Rr)) != null && Oe[1]), N = ((Te = i2.content.match(Sr)) == null ? void 0 : Te[1]) || "write", j = (ke = i2.content.match(Cr)) == null ? void 0 : ke[1], P2 = (Re = e.realPath) != null ? Re : e.path, F2 = a2 || import_path.default.dirname(P2);
  d != null && d[1] && (g = d[1]), T2 != null && T2[1] && (b3 = T2[1]);
  let z = "", it = "";
  x != null && x[1] && (z = x[1]), E2 != null && E2[1] && (it = E2[1]), l2 != null && l2[1] && (f.show = l2[1] === "true"), m3 != null && m3[1] && (o3.show = m3[1] === "true"), p2 != null && p2[1] && (u2.show = p2[1] === "true"), C3 != null && C3[1] && (c.vue = import_path.default.join(F2, C3[1]).replace(/\\/g, "/")), S2 != null && S2[1] && (c.html = import_path.default.join(F2, S2[1]).replace(/\\/g, "/")), h != null && h[1] && (c.react = import_path.default.join(F2, h[1]).replace(/\\/g, "/")), c.title = k2 ? k2[1] : "", c.description = r4 ? r4[1] : "";
  const R = c.vue ? import_path.default.resolve(
    a2 || import_path.default.dirname(P2),
    (C3 == null ? void 0 : C3[1]) || "."
  ).replace(/\\/g, "/") : "", M2 = c.html ? import_path.default.resolve(
    a2 || import_path.default.dirname(P2),
    (S2 == null ? void 0 : S2[1]) || "."
  ).replace(/\\/g, "/") : "", W = c.react ? import_path.default.resolve(
    a2 || import_path.default.dirname(P2),
    (h == null ? void 0 : h[1]) || "."
  ).replace(/\\/g, "/") : "", vt = import_path.default.resolve(
    F2,
    c.vue || c.react || c.html || "."
  ).replace(/\\/g, "/"), H = lr(vt), bt = `react${H}`;
  J2(
    e,
    "vitepress-demo-plugin",
    "{ VitepressDemoBox, VitepressDemoPlaceholder }"
  ), J2(e, "vitepress-demo-plugin/dist/style.css"), J2(e, "vue", "{ ref, shallowRef, onMounted }"), c.vue && J2(
    e,
    R,
    H,
    A2 ? void 0 : "dynamicImport"
  ), c.react && (J2(
    e,
    "react",
    "{ createElement as reactCreateElement }"
  ), J2(
    e,
    "react-dom/client",
    "{ createRoot as reactCreateRoot }"
  ), J2(
    e,
    W,
    bt,
    "dynamicImport"
  ));
  const ut = "__placeholder_visible_key__";
  J2(
    e,
    ut,
    `const ${ut} = ref(true);`,
    "inject"
  );
  const X = c.html ? `TempCodeHtml${H}` : "''", xt = c.react ? `TempCodeReact${H}` : "''", Q2 = c.vue ? `TempCodeVue${H}` : "''";
  c.html && J2(
    e,
    `${M2}?raw`,
    X
  ), c.react && J2(
    e,
    `${W}?raw`,
    xt
  ), c.vue && J2(
    e,
    `${R}?raw`,
    Q2
  );
  const at = {
    vue: {},
    react: {},
    html: {}
  };
  function qt(Z) {
    return Z.replace(/'/g, '"').replace(/\\n/g, "").trim().replace(/^"/, "").replace(/"$/, "").replace(/,(\s|\n)*\}$/, "}").replace(/,(\s|\n)*\]$/, "]");
  }
  const we = {
    vue: qt((s2 == null ? void 0 : s2[1]) || ""),
    react: qt((y2 == null ? void 0 : y2[1]) || ""),
    html: qt((w2 == null ? void 0 : w2[1]) || "")
  };
  for (const Z in we) {
    let Se = we[Z];
    if (Se)
      try {
        const ht = JSON.parse(Se);
        if (Array.isArray(ht))
          ht.forEach((Y) => {
            const Et = import_path.default.basename(Y);
            at[Z][Et] = {
              filename: Y,
              code: ""
            };
          });
        else if (typeof ht == "object")
          for (const Y in ht)
            at[Z][Y] = {
              filename: ht[Y],
              code: ""
            };
        for (const Y in at[Z]) {
          const Et = at[Z][Y].filename;
          if (Et) {
            const Ce = import_path.default.resolve(a2 || import_path.default.dirname(P2), Et || ".").replace(/\\/g, "/");
            if (import_fs.default.existsSync(Ce)) {
              const Di = import_fs.default.readFileSync(Ce, "utf-8");
              at[Z][Y].code = Di;
            } else
              delete at[Z][Y];
          } else
            delete at[Z][Y];
        }
      } catch {
      }
  }
  let xe = "";
  return (t == null ? void 0 : t.locale) && typeof t.locale == "object" && (xe = encodeURIComponent(JSON.stringify(t.locale))), `
  ${A2 ? "" : `<vitepress-demo-placeholder v-show="${ut}" />`}
  ${A2 ? "" : "<ClientOnly>"}
    <vitepress-demo-box 
      title="${c.title}"
      description="${c.description}"
      locale="${xe}"
      select="${b3}"
      order="${g}"
      github="${z}"
      gitlab="${it}"
      theme="${(t == null ? void 0 : t.theme) || ""}"
      lightTheme="${(t == null ? void 0 : t.lightTheme) || ""}"
      darkTheme="${(t == null ? void 0 : t.darkTheme) || ""}"
      stackblitz="${encodeURIComponent(JSON.stringify(f))}"
      codesandbox="${encodeURIComponent(JSON.stringify(o3))}"
      codeplayer="${encodeURIComponent(JSON.stringify(u2))}"
      files="${encodeURIComponent(JSON.stringify(at))}"
      scope="${O2 || ""}"
      htmlWriteWay="${N}"
      background="${j}"
      :visible="!!${v}"
      @mount="() => { ${ut} = false; }"
      ${c.html ? `
            :htmlCode="${X}"
            ` : ""}
      ${c.vue ? `
            :vueCode="${Q2}"
            ` : ""}
      ${c.react ? `
            :reactCode="${xt}"
            :reactComponent="${bt}"
            :reactCreateRoot="reactCreateRoot"
            :reactCreateElement="reactCreateElement"
            ` : ""}
      >
      ${c.vue ? `
            <template v-if="${H}" #vue>
              <${H}></${H}>
            </template>
            ` : ""}
    </vitepress-demo-box>
  ${A2 ? "" : "</ClientOnly>"}`.trim();
};
var Pr = (n, i2) => {
  const e = n.renderer.rules.html_inline, t = n.renderer.rules.html_block;
  n.renderer.rules.html_inline = (a2, _2, f, o3, u2) => {
    const g = a2[_2];
    return g.content = g.content.replace(/<!--[\s\S]*?-->/g, ""), pi.some((v) => v.test(g.content)) ? hi(n, g, o3, i2) : e(a2, _2, f, o3, u2);
  }, n.renderer.rules.html_block = (a2, _2, f, o3, u2) => {
    const g = a2[_2];
    return g.content = g.content.replace(/<!--[\s\S]*?-->/g, ""), pi.some((v) => v.test(g.content)) ? hi(n, g, o3, i2) : t(a2, _2, f, o3, u2);
  };
};
export {
  $r as VitepressDemoBox,
  Ir as VitepressDemoPlaceholder,
  Pr as vitepressDemoPlugin
};
//# sourceMappingURL=vitepress-demo-plugin.js.map
