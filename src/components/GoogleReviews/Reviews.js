import React from 'react'
import Review from "./Review.js"
import data from './reviews.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components/macro'
import { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import GoogleReviews from "C:\\REACT\\googlereviews\\src\\hygraph\\queries\\GoogleReviews.js";


const Reviews = () => {
    var sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        (async () => {
            await new GoogleReviews().fetchReviews().then((data) => {
                setReviews(data);
            });
        })();
    },[]); 

    return (
        reviews ?
            <Slider {...sliderSettings}>
                {reviews.googleReviews.map((review) =>
                    <Review key={review.reviewId} review={review} />)}
            </Slider>
            :
            <div>Loading...</div>
    )
}

export default Reviews