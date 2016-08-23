'use strict';

var isValidEmail = function isValidEmail(email) {
  if (!email) {
    return false;
  }
  return email.indexOf('@') > -1 && email.lastIndexOf('.') > email.indexOf('@');
};

var isValid = function isValid(state) {
  return isValidEmail(state.email) && state.email === state.email2 && state.agree;
};

var Signup = React.createClass({
  displayName: 'Signup',

  getInitialState: function getInitialState() {
    return this.getDefaultState();
  },

  getDefaultState: function getDefaultState() {
    return {
      email: '',
      email2: '',
      role: '',
      saving: false,
      agree: false
    };
  },

  submit: function submit() {
    this.setState({ 'saving': true });
    API.saveUser(this.state.email, this.state.role).then(function (user) {
      this.setState(this.getDefaultState());
    }.bind(this));
  },

  updateField: function updateField(field, value) {
    var state = {};
    state[field] = value;
    this.setState(state);
  },

  render: function render() {
    var _this = this;

    if (this.state.saving) {
      return React.createElement(
        'div',
        { className: 'saving' },
        'Saving...'
      );
    }

    if (isValidEmail(this.state.email)) {
      var emailClass = 'success';
    } else {
      var emailClass = 'error';
    }

    return React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        React.createElement('input', {
          placeholder: 'Email',
          className: emailClass,
          value: this.state.email,
          onChange: function onChange(e) {
            return _this.updateField('email', e.target.value);
          } })
      ),
      React.createElement(
        'p',
        null,
        React.createElement(EmailField, {
          placeholder: 'Confirm Email',
          email: this.state.email2,
          onUpdate: function onUpdate(value) {
            return _this.updateField('email2', value);
          } })
      ),
      React.createElement(
        'p',
        null,
        React.createElement(RoleField, {
          role: this.state.role,
          onUpdate: function onUpdate(value) {
            return _this.updateField('role', value);
          } })
      ),
      React.createElement(
        'p',
        null,
        React.createElement(
          'label',
          null,
          'Agree:',
          React.createElement('input', {
            type: 'checkbox',
            onClick: function onClick(e) {
              return _this.updateField('agree', e.target.checked);
            },
            checked: this.state.agree })
        )
      ),
      React.createElement(
        'p',
        null,
        React.createElement('input', {
          type: 'button',
          disabled: !isValid(this.state),
          onClick: this.submit,
          value: 'Save' })
      ),
      React.createElement(Debug, { data: this.state })
    );
  }
});

ReactDOM.render(React.createElement(Signup, { name: 'World' }), document.getElementById('container'));
//# sourceMappingURL=main.js.map