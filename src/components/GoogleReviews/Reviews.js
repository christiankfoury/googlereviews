import React from 'react'
import Review from "./Review.js"
import data from './reviews.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components/macro'
import { useEffect, useState } from 'react';
import { request } from 'graphql-request';


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

    useEffect(() => () => {
        const fetchReviews = async () => {
            const data = await request(
                'https://api-ca-central-1.hygraph.com/v2/cl7i3j2l41k6x01td5gyr36ho/master',
                `
                query MyQuery {
                    googleReviews {
                        id
                        name
                        starRating
                        comment
                        createTime
                        profilePhotoUrl {
                            url
                        }
                    }
                }
                `
            );

            setReviews(data);
            // console.log(data);
        };
        fetchReviews();
    },
        []
    )

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