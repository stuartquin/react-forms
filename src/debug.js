var Debug = React.createClass({
  getInitialState: function() {
    return {
      history: []
    }
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      history: this.state.history.concat([nextProps.data])
    });
  },

  render: function() {
    console.clear();
    console.table(this.state.history.reverse().slice(0,20));
    return (<div />);
  }
});
