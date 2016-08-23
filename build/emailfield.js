'use strict';

// Stage 2 - functional component
var EmailField = function EmailField(props) {
  var emailClass = 'success';
  if (!isValidEmail(props.email)) {
    emailClass = 'error';
  }

  return React.createElement('input', {
    placeholder: props.placeholder,
    className: emailClass,
    onChange: function onChange(e) {
      console.log(e);
      props.onUpdate(e.target.value);
    } });
};
//# sourceMappingURL=emailfield.js.map