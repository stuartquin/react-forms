"use strict";

var Debug = React.createClass({
  displayName: "Debug",

  getInitialState: function getInitialState() {
    return {
      history: []
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setState({
      history: this.state.history.concat([nextProps.data])
    });
  },

  render: function render() {
    console.clear();
    console.table(this.state.history.reverse().slice(0, 20));
    return React.createElement("div", null);
  }
});
//# sourceMappingURL=debug.js.map