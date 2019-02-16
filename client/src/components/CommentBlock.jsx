import React from 'react';
import axios from 'axios';


class CommentBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorName: [],
      authorPic: [],
      reviews: [],
      date: [],
    };
  }

  componentDidMount() {
    axios.get('/api/reviews')
      .then((res) => {
        const reviewsArray = [];
        const dateArray = [];
        for (let i = 0; i < res.data.length; i += 1) {
          reviewsArray.push(res.data[i].comment);
          dateArray.push(res.data[i].created_at);
        }
        this.setState({
          reviews: reviewsArray,
          date: dateArray,
        });
      });
    axios.get('/api/authors')
      .then((res) => {
        const authorNameArray = [];
        const authorPicArray = [];
        for (let i = 0; i < res.data.length; i += 1) {
          authorNameArray.push(res.data[i].name);
          authorPicArray.push(res.data[i].img_url);
        }
        this.setState({
          authorName: authorNameArray,
          authorPic: authorPicArray,
        });
      });
  }

  render() {
    const desiredDate = new Date(this.state.date[0]);
    // const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format;
    
    const month = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const m = desiredDate.getMonth();
    const y = desiredDate.getFullYear();
    console.log(month[m - 1]);
    console.log(y);
    // console.log(monthName(desiredDate));
    return (
      <div>
        <div className="commentTop">
          <div className="leftItems">
            <div className="picContainer">
              <img className="profilePic" src={this.state.authorPic[0]} alt="" />
            </div>
            <div className="commentInfoContainer">
              <div className="authorName">{this.state.authorName[0]}</div>
              <div className="dateCss">{month[m - 1]} {y}</div>
            </div>
          </div>
          <div className="rightItems">
            <img className="flag" src="http://download.seaicons.com/icons/icons8/ios7/512/Very-Basic-Flag-icon.png" alt="" />
          </div>
        </div>
        <div className="comment">
          <div>{this.state.reviews[0]}</div>
        </div>
      </div>
    );
  }
}

export default CommentBlock;
