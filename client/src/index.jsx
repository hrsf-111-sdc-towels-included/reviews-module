import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsTotal: 1,
    };
  }

  componentDidMount() {
    axios.get(`/api/reviews`)
     .then(res => {
       console.log(res.data.length);
       var total = res.data.length;
       this.setState({reviewsTotal: total})
     })
  }
  render() {
    return (
      <div>
        <h1>
          {this.state.reviewsTotal} Reviews
        </h1>
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('app'));