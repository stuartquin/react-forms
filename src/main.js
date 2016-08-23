const isValidEmail = (email) => {
  if (!email) {
    return false;
  }
  return email.indexOf('@') > -1 && email.lastIndexOf('.') > email.indexOf('@');
};

const isValid = (state) => {
  return isValidEmail(state.email) && state.email === state.email2 && state.agree;
}

var Signup = React.createClass({
  getInitialState: function() {
    return this.getDefaultState();
  },

  getDefaultState: function() {
    return {
      email: '',
      email2: '',
      role: '',
      saving: false,
      agree: false
    }
  },

  submit: function() {
    this.setState({'saving': true});
    API.saveUser(this.state.email, this.state.role).then(function(user) {
      this.setState(this.getDefaultState());
    }.bind(this));
  },

  updateField: function(field, value) {
    var state = {};
    state[field] = value;
    this.setState(state);
  },

  render: function() {
    if (this.state.saving) {
      return (
        <div className='saving'>Saving...</div>
      );
    }

    if (isValidEmail(this.state.email)) {
      var emailClass = 'success';
    } else {
      var emailClass = 'error';
    }

    return (
      <div>
        <p>
          <input
            placeholder='Email'
            className={emailClass}
            value={this.state.email}
            onChange={(e) => this.updateField('email', e.target.value)} />
        </p>

        <p>
          <EmailField
            placeholder='Confirm Email'
            email={this.state.email2}
            onUpdate={(value) => this.updateField('email2', value)} />
        </p>

        <p>
          <RoleField
            role={this.state.role}
            onUpdate={(value) => this.updateField('role', value)} />
        </p>

        <p>
          <label>Agree:
            <input
              type='checkbox'
              onClick={(e) => this.updateField('agree', e.target.checked)}
              checked={this.state.agree} />
          </label>
        </p>

        <p>
          <input
            type='button'
            disabled={!isValid(this.state)}
            onClick={this.submit}
            value='Save' />
        </p>

        <Debug data={this.state} />

      </div>
    );
  },
});

ReactDOM.render(
  <Signup name='World' />,
  document.getElementById('container')
);

