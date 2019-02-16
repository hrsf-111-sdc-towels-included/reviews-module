import React from 'react';
import axios from 'axios';

class CommentBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorName: [],
      authorPic: [],
      comment: [],
    };
  }

  componentDidMount() {
    axios.get('/api/reviews')
      .then((res) => {
        console.log(res.data);
        const commentArray = [];
        for (let i = 0; i < res.data.length; i += 1) {
          commentArray.push(res.data[i].comment);
        }
        this.setState({
          comment: commentArray,
        });
      });
    axios.get('/api/authors')
      .then((res) => {
        console.log(res.data);
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
    console.log(this.state.authorPic[0]);
    // const listOfReviews = this.state.comments.map((comment) =>
    //   <div>
    //     <p>{comment}</p>
    //   </div>
    // <img src={this.state.authorPic[0]}/>
    // );
    return (
      <div>
        <div className="commentTop">
          <img className="profilePic" src={this.state.authorPic[0]} alt="" />
          <img className="flag" src="http://download.seaicons.com/icons/icons8/ios7/512/Very-Basic-Flag-icon.png" alt="" />
        </div>
        <div className="comment">
          <div>{this.state.comment[0]}</div>
        </div>
      </div>
    );
  }
}

export default CommentBlock;
