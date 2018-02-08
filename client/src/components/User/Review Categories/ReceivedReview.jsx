import React from 'react';
import axios from 'axios';

class ReceivedReview extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    }
  }
  
  async componentDidMount() {
    try {
      const response = await axios.get('http://localhost:3396/api/users/getReceivedReviews', {
        params: {userId: this.props.match.params.userId}
      });
      console.log(response.data)
      await this.setState({reviews: response.data})
    } catch(err) {
      throw new Error(err);
    }
  }
  
  render () {
    return (
      <div>
        <h2>This is a review you've received</h2>
        {
          this.state.reviews.map(review => {
            return (
              <div key={review.id}>
                <div>
                  {`Review By: ${review.commentee}`}
                </div>
                <div>
                  {`Rating: ${review.rating}`}
                </div>
                <div>
                  {`Review: ${review.review}`}
                </div>
              </div>              
            )
          })
        }
      </div>
    )
  }
};

export default ReceivedReview;