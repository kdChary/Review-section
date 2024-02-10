import {Component} from 'react'

import './index.css'

console.log('KSD')

class ReviewsCarousel extends Component {
  reviewsList = this.props

  state = {user: 0}

  onRightArrowClicked = length => {
    const {user} = this.state

    if (user < length - 1) {
      this.setState(prevState => ({
        user: prevState.user + 1,
      }))
    }
  }

  leftArrowClicked = () => {
    const {user} = this.state

    if (user > 0) {
      this.setState(prevState => ({
        user: prevState.user - 1,
      }))
    }
  }

  renderUser = userDetails => (
    <li className="user-review-item">
      <img
        src={userDetails.imgUrl}
        alt={userDetails.username}
        className="user-profile-image"
      />
      <p className="user-name">{userDetails.username}</p>
      <p className="company-name">{userDetails.companyName}</p>
      <p className="user-review ">{userDetails.description}</p>
    </li>
  )

  render() {
    const {reviewsList} = this.props
    const {user} = this.state
    const rightArrowClicked = () => {
      this.onRightArrowClicked(reviewsList.length)
    }
    // console.log(user, reviewsList.length)
    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="reviews-section">
          <button
            className="button"
            data-testid="leftArrow"
            type="button"
            onClick={this.leftArrowClicked}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <ul className="user-details">{this.renderUser(reviewsList[user])}</ul>
          <button
            className="button"
            data-testid="rightArrow"
            type="button"
            onClick={rightArrowClicked}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
