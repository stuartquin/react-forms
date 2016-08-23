// Stage 2 - functional component
const EmailField = (props) => {
  let emailClass = 'success';
  if (!isValidEmail(props.email)) {
    emailClass = 'error';
  }

  return (
    <input
      placeholder={props.placeholder}
      className={emailClass}
      onChange={(e) => {
        console.log(e)
        props.onUpdate(e.target.value)
      }} />
  );
};
