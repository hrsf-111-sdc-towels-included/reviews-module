import React from 'react';
import ReactDOM from 'react-dom';
// import document from '../dist/index.html';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>hello world</h1>
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('app'));
