const Suggestions = (props) => {
  if (props.suggestions.length === 0) {
    return (<div />);
  }

  var regex = new RegExp(props.value, 'gi');

  return (
    <ul className='suggestions'>
      {props.suggestions.map((suggestion) =>
        <li onClick={() => props.selectSuggestion(suggestion)}
          dangerouslySetInnerHTML={{
            __html: suggestion.replace(regex, '<strong>'+props.value+'</strong>')
          }}>
        </li>
      )}
    </ul>
  );
};

class RoleField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      suggestion: props.role
    };
  }

  autocomplete(val) {
    const value = val.toLowerCase();
    API.getRoles().then((roles) => {
      if (val) {
        this.setState({
          suggestions: roles.filter(r => r.toLowerCase().indexOf(value) > -1)
        });
      } else {
        this.setState({
          suggestions: []
        });
      }
    });
  }

  setSuggestion(suggestion) {
    this.setState({
      suggestion: suggestion,
      suggestions: []
    });
    this.props.onUpdate(suggestion);
  }

  render() {
    return (
      <div className='autocomplete'>
        <input
          placeholder='Role'
          value={this.state.suggestion}
          onChange={(e) => {
            this.setState({suggestion: e.target.value});
            this.autocomplete(e.target.value);
            this.props.onUpdate(e.target.value);
          }} />

        <Suggestions
          selectSuggestion={(suggestion) => this.setSuggestion(suggestion)}
          value={this.state.suggestion}
          suggestions={this.state.suggestions}
        />
      </div>
    );
  }
};
