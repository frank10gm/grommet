"use strict";

exports.__esModule = true;
exports["default"] = exports.Rich = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _grommet = require("grommet");

var _grommetIcons = require("grommet-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RichTabs = function RichTabs() {
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    _react["default"].createElement(_grommet.Tabs, null, /*#__PURE__*/_react["default"].createElement(_grommet.Tab, {
      title: /*#__PURE__*/_react["default"].createElement(RichTabTitle, {
        icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.CircleInformation, {
          color: "brand"
        }),
        label: "Personal Data"
      })
    }, /*#__PURE__*/_react["default"].createElement(_grommet.FormField, {
      label: "Name"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.TextInput, {
      placeholder: "Enter your name..."
    }))), /*#__PURE__*/_react["default"].createElement(_grommet.Tab, {
      title: /*#__PURE__*/_react["default"].createElement(RichTabTitle, {
        icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Currency, {
          color: "brand"
        }),
        label: "Payment"
      })
    }, /*#__PURE__*/_react["default"].createElement(_grommet.FormField, {
      label: "Card Number"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.TextInput, {
      placeholder: "Enter your card number..."
    })))) // </Grommet>

  );
};

var RichTabTitle = function RichTabTitle(_ref) {
  var icon = _ref.icon,
      label = _ref.label;
  return /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    direction: "row",
    align: "center",
    gap: "xsmall",
    margin: "xsmall"
  }, icon, /*#__PURE__*/_react["default"].createElement(_grommet.Text, {
    size: "small"
  }, /*#__PURE__*/_react["default"].createElement("strong", null, label)));
};

RichTabTitle.propTypes = {
  icon: _propTypes["default"].node.isRequired,
  label: _propTypes["default"].string.isRequired
};

var Rich = function Rich() {
  return /*#__PURE__*/_react["default"].createElement(RichTabs, null);
};

exports.Rich = Rich;
var _default = {
  title: 'Controls/Tabs/Rich'
};
exports["default"] = _default;