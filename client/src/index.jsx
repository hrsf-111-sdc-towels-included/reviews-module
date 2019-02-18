import React from 'react';
import ReactDOM from 'react-dom';

import TotalReviews from './components/TotalReviews.jsx';
import IndependentReviews from './components/IndependentReviews.jsx';
import Search from './components/Search.jsx';
import Order from './components/Order.jsx';
import CommentsBlock from './components/CommentsBlock.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'relevant',
      reviewPage: 1,
    };
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
        <div className="search-container">
          <Search />
          <Order sort={this.props.sort} handleSort={this.handleSort} />
        </div>
        <div>
          <CommentsBlock />
        </div>
      </div>
    );
  }
}


// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('app'));
