import React from 'react';
import ReactDOM from 'react-dom';

import TotalReviews from './components/TotalReviews.jsx';
import IndependentReviews from './components/IndependentReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <TotalReviews />
        </div>
        <div>
          <IndependentReviews />
        </div>
      </div>
    );
  }
}


// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('app'));