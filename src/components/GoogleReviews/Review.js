import React from 'react'
import styled from 'styled-components/macro'
import googleLogo from './images/google-logo.png'
import ReactStars from "react-rating-stars-component";

const Review = ({ review }) => {
  const Div = styled.div`
    /* padding: 15px 15px 15px 15px;
    margin: 30px 100px 15px 100px; */
    padding-top: 15px;
    margin: 10px;
    /* gap: 30px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    /* width: 300px; */
    border-radius: 20px;
    background-color: #f2f2f2;
    /* margin-bottom: 3rem; */
    > p {
      padding-left: 30px;
      padding-right: 30px;
    }
    img {
      border-radius: 50%;
      width: 50px;
      height: 50px;
    }
    .flex-parent {
      padding-top: 10px;
      padding-bottom: 15px;
      display: flex;
      align-items: center;
      gap: 15px;
      div {
        display: flex;
        text-align: left;
        justify-content: center;    
        flex-direction: column;
        align-items: flex-start;
        gap: 6px;
      }
      span {
        font-weight: bold;
        color: #3b3b3b;
      }
      p {
        font-size: 12px;
        margin: 0;
      }
    }
  `;
  console.log(review)

  return (
    <Div>
      <img src={googleLogo} alt="Google Logo" />
      <ReactStars
        count={5}
        size={24}
        isHalf={true}
        value={review.starRating}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
        edit={false}
      />
      <p>{review.comment}</p>
      <div className="flex-parent">
        <img src={review.profilePhotoUrl.url} alt="Profile Image" />
        <div>
          <span>{review.name}</span>
          <p>{review.createTime}</p>
        </div>
      </div>
    </Div>
  )
}

export default Review