import React from 'react';
import ReactDOM from 'react-dom';

import TotalReviews from './components/TotalReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>
          <TotalReviews />
        </h1>
        
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('app'));