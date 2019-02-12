import React from 'react';
import axios from 'axios';


class TotalReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsTotal: 1,
      rating: 0,
    };
  }

  componentDidMount() {
    axios.get('/api/reviews')
      .then((res) => {
        const totalReviews = res.data.length;
        this.setState({
          reviewsTotal: totalReviews,
        });
        return res;
      })
      .then((res) => {
        let reviewAccuracy = 0;
        let reviewCommunication = 0;
        let reviewCleanliness = 0;
        let reviewLocation = 0;
        let reviewCheckIn = 0;
        let reviewValue = 0;
        let reviewAverage = 0;

        for (let i = 0; i < res.data.length; i += 1) {
          reviewAccuracy += res.data[i].accuracy;
          reviewCommunication += res.data[i].communication;
          reviewCleanliness += res.data[i].cleanliness;
          reviewLocation += res.data[i].location;
          reviewCheckIn += res.data[i].check_in;
          reviewValue += res.data[i].value;
        }
        reviewAccuracy /= res.data.length;
        reviewCommunication /= res.data.length;
        reviewCleanliness /= res.data.length;
        reviewLocation /= res.data.length;
        reviewCheckIn /= res.data.length;
        reviewValue /= res.data.length;
        reviewAverage = (reviewAccuracy + reviewCommunication + reviewCleanliness + reviewLocation + reviewCheckIn + reviewValue) / 6;
        this.setState({
          rating: reviewAverage,
        });
        return res;
      })
      .catch(console.log('there was an error'));
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.reviewsTotal} Reviews {this.state.rating}
        </h1>
        <div className="stars">
          <div className="outer-stars">
            <div className="inner-stars"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default TotalReviews;
