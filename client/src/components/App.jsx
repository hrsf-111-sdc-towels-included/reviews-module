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
  componentDidMount () {
    let paramId;
    if (window.location.href.split('?')[1]) {
      paramId = window.location.href.split('?')[1];
     } else {
      window.location = window.location.href + "?100";
     }
    axios.get(`http://ec2-3-81-120-250.compute-1.amazonaws.com/Api/reviews/${this.state.homeId}`)
      .then((res) => {
        this.setState({
          homeId: paramId,
        });
        return res;
      })
  }
  render() {
    return (
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
    );
  }
}

export default App;
