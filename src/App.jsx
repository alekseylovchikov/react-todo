var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
    render: function() {
        return (
            <h1>App</h1>
        );
    }
});

ReactDOM.render(<App />, document.querySelector('#app'));