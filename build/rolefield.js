'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Suggestions = function Suggestions(props) {
  if (props.suggestions.length === 0) {
    return React.createElement('div', null);
  }

  var regex = new RegExp(props.value, 'gi');

  return React.createElement(
    'ul',
    { className: 'suggestions' },
    props.suggestions.map(function (suggestion) {
      return React.createElement('li', { onClick: function onClick() {
          return props.selectSuggestion(suggestion);
        },
        dangerouslySetInnerHTML: {
          __html: suggestion.replace(regex, '<strong>' + props.value + '</strong>')
        } });
    })
  );
};

var RoleField = function (_React$Component) {
  _inherits(RoleField, _React$Component);

  function RoleField(props) {
    _classCallCheck(this, RoleField);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RoleField).call(this, props));

    _this.state = {
      suggestions: [],
      suggestion: props.role
    };
    return _this;
  }

  _createClass(RoleField, [{
    key: 'autocomplete',
    value: function autocomplete(val) {
      var _this2 = this;

      var value = val.toLowerCase();
      API.getRoles().then(function (roles) {
        if (val) {
          _this2.setState({
            suggestions: roles.filter(function (r) {
              return r.toLowerCase().indexOf(value) > -1;
            })
          });
        } else {
          _this2.setState({
            suggestions: []
          });
        }
      });
    }
  }, {
    key: 'setSuggestion',
    value: function setSuggestion(suggestion) {
      this.setState({
        suggestion: suggestion,
        suggestions: []
      });
      this.props.onUpdate(suggestion);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'div',
        { className: 'autocomplete' },
        React.createElement('input', {
          placeholder: 'Role',
          value: this.state.suggestion,
          onChange: function onChange(e) {
            _this3.setState({ suggestion: e.target.value });
            _this3.autocomplete(e.target.value);
            _this3.props.onUpdate(e.target.value);
          } }),
        React.createElement(Suggestions, {
          selectSuggestion: function selectSuggestion(suggestion) {
            return _this3.setSuggestion(suggestion);
          },
          value: this.state.suggestion,
          suggestions: this.state.suggestions
        })
      );
    }
  }]);

  return RoleField;
}(React.Component);

;
//# sourceMappingURL=rolefield.js.map