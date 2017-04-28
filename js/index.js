"use strict";

var App = React.createClass({
  displayName: "App",
  render: function render() {
    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "wrap-title" },
        React.createElement(
          "h1",
          { className: "text-center" },
          "- Markdown Previewer -"
        )
      ),
      React.createElement(ContentMarkdown, null)
    );
  }
});

var ContentMarkdown = React.createClass({
  displayName: "ContentMarkdown",

  updateValue: function updateValue() {
    this.setState({
      value: rawMarkup
    });
  },
  getInitialState: function getInitialState() {
    return {
      value: "# Heading\n=======\n\n## Sub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Freecodecamp](https://freecodecamp.com)*"
    };
  },
  updateMarkdown: function updateMarkdown(e) {
    this.setState({
      value: e.target.value
    });
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col-xs-12 col-sm-6" },
        React.createElement(
          "h4",
          { className: "text-center" },
          "Input"
        ),
        React.createElement("textarea", { rows: "25", type: "text", value: this.state.value, onChange: this.updateMarkdown.bind(this) })
      ),
      React.createElement(
        "div",
        { className: "col-xs-12 col-sm-6" },
        React.createElement(
          "h4",
          { className: "text-center" },
          "Output"
        ),
        React.createElement(OutputMarkdown, { markdown: this.state.value })
      )
    );
  }
});

var OutputMarkdown = React.createClass({
  displayName: "OutputMarkdown",

  rawMarkup: function rawMarkup() {
    return { __html: marked(this.props.markdown) };
  },
  render: function render() {
    return React.createElement("div", { className: "output", dangerouslySetInnerHTML: this.rawMarkup() });
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
