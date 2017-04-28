const App = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="wrap-title">
          <h1 className="text-center">- Markdown Previewer -</h1>
        </div>
        <ContentMarkdown />
      </div>
    );
  }
});

const ContentMarkdown = React.createClass({
  updateValue: function() {
    this.setState({
      value: rawMarkup
    });
  },
  getInitialState: function() {
    return {
      value: "# Heading\n=======\n\n## Sub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Freecodecamp](https://freecodecamp.com)*"
    };
  },
  updateMarkdown: function(e) {
    this.setState({
      value: e.target.value
    });
  },
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <h4 className="text-center">Input</h4>
          <textarea rows="25" type="text" value={this.state.value} onChange={this.updateMarkdown.bind(this)} />
        </div>
        <div className="col-xs-12 col-sm-6">
          <h4 className="text-center">Output</h4>
          <OutputMarkdown markdown={this.state.value} />
        </div>
      </div>
    );
  }
});

const OutputMarkdown = React.createClass({
  rawMarkup: function() {
    return { __html: marked(this.props.markdown) }
  },
  render() {
    return (
      <div className="output" dangerouslySetInnerHTML={this.rawMarkup()}></div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById("root"));
