import React from 'react';


import TotalReviews from './TotalReviews.jsx';
import IndependentReviews from './IndependentReviews.jsx';
import Search from './Search.jsx';
import Order from './Order.jsx';
import CommentsBlock from './CommentsBlock.jsx';

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

export default App;
