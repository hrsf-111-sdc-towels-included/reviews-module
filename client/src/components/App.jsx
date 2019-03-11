import React from 'react';
import axios from 'axios'

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
      homeId: 0,
    };
  }
  componentDidMount() {
    let paramId;
    if (window.location.href.split('?')[1]) {
      paramId = Number(window.location.href.split('?')[1]);
    } else {
      paramId = 1;
    }
    this.setState({
      homeId: paramId,
    });
  }

  render() {
    return (
      <div>
      {
        this.state.homeId &&
          <div>
            <div>
              <TotalReviews homeId={this.state.homeId} />
            </div>
            <div>
              <IndependentReviews homeId={this.state.homeId} />
            </div>
            <div className="search-container">
              <Search />
              <Order sort={this.props.sort} handleSort={this.handleSort} />
            </div>
            <div>
              <CommentsBlock homeId={this.state.homeId} />
            </div>
          </div>
      }
      </div>
    );
  }
}

export default App;
