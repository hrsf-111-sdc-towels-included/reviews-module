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
    const { review } = this.state;
    return (
      <div>
        <h1>{ review }</h1>
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('app'));
