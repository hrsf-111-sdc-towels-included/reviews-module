import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: 'hello world',
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.review}</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
