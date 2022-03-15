"use strict";

exports.__esModule = true;
exports["default"] = exports.Uncontrolled = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _grommet = require("grommet");

var _grommetIcons = require("grommet-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UncontrolledTabs = function UncontrolledTabs(_ref) {
  var _ref$plain = _ref.plain,
      plain = _ref$plain === void 0 ? false : _ref$plain;
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    _react["default"].createElement(_grommet.Box, {
      fill: true
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Tabs, {
      flex: true
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Tab, {
      plain: plain,
      title: "Tab 1"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      fill: true,
      pad: "large",
      align: "center",
      background: "brand"
    }, /*#__PURE__*/_react["default"].createElement(_grommetIcons.Attraction, {
      size: "xlarge"
    }))), /*#__PURE__*/_react["default"].createElement(_grommet.Tab, {
      plain: plain,
      title: "Tab 2"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      fill: true,
      pad: "large",
      align: "center",
      background: "light-4"
    }, /*#__PURE__*/_react["default"].createElement(_grommetIcons.TreeOption, {
      size: "xlarge"
    }))), /*#__PURE__*/_react["default"].createElement(_grommet.Tab, {
      plain: plain,
      title: "Tab 3"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      fill: true,
      pad: "large",
      align: "center",
      background: "dark-3"
    }, /*#__PURE__*/_react["default"].createElement(_grommetIcons.Car, {
      size: "xlarge"
    }))))) // </Grommet>

  );
};

UncontrolledTabs.propTypes = {
  plain: _propTypes["default"].bool // eslint-disable-line react/require-default-props

};
UncontrolledTabs.args = {
  full: true
};

var Uncontrolled = function Uncontrolled() {
  return /*#__PURE__*/_react["default"].createElement(UncontrolledTabs, null);
};

exports.Uncontrolled = Uncontrolled;
var _default = {
  title: 'Controls/Tabs/Uncontrolled'
};
exports["default"] = _default;