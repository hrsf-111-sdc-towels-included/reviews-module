import React from 'react';
import axios from 'axios';
import CommentBlock from './CommentBlock.jsx';

class CommentsBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    axios.get('/api/reviews')
      .then((res) => {
        const commentsArray = [];
        for (let i = 0; i < res.data.length; i += 1) {
          commentsArray.push(res.data[i].comment);
        }
        this.setState({
          comments: commentsArray,
        });
      });
  }

  render() {
    return (
      <div>
        <CommentBlock />
        <hr Style="margin-top: 24px; margin-bottom: 24px" />
        <CommentBlock />
        <hr Style="margin-top: 24px; margin-bottom: 24px" />
        <CommentBlock />
        <hr Style="margin-top: 24px; margin-bottom: 24px" />
        <CommentBlock />
        <hr Style="margin-top: 24px; margin-bottom: 24px" />
        <CommentBlock />
        <hr Style="margin-top: 24px; margin-bottom: 24px" />
        <CommentBlock />
        <hr Style="margin-top: 24px; margin-bottom: 24px" />
        <CommentBlock />
        <hr Style="margin-top: 24px; margin-bottom: 24px" />
      </div>
    );
  }
}

export default CommentsBlock;


// const listOfReviews = this.state.comments.map((comment) =>
    //   <div>
    //     <p>{comment}</p>
    //   </div>
    // );