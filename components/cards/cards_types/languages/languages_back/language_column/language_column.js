"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageColumn = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _language_column_styles = require("./language_column_styles");

var useStyles = (0, _reactJss.createUseStyles)(_language_column_styles.styles);

var LanguageColumnComponent = function LanguageColumnComponent(_ref) {
  var _ref$component = _ref.component,
      Component = _ref$component === void 0 ? 'div' : _ref$component,
      color = _ref.color,
      style = _ref.style,
      _ref$item = _ref.item;
  _ref$item = _ref$item === void 0 ? {} : _ref$item;
  var value = _ref$item.value,
      language = _ref$item.language,
      children = _ref.children,
      itemsSize = _ref.itemsSize;
  var classes = useStyles({
    value: value,
    color: color,
    itemsSize: itemsSize
  });
  return _react.default.createElement(_ui.Tooltip, {
    open: true,
    customClasses: {
      container: classes.popper
    },
    title: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
      className: classes.popperTitle
    }, language), _react.default.createElement("div", {
      className: classes.popperTitle
    }, "".concat(value, "%")))
  }, _react.default.createElement(Component, {
    className: classes.container,
    style: style
  }, _react.default.createElement(_ui.Typography, {
    variant: "h2",
    color: "light",
    customClasses: {
      container: classes.typography
    }
  }, children)));
};

var LanguageColumn = LanguageColumnComponent;
exports.LanguageColumn = LanguageColumn;