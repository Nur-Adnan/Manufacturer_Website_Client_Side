import React, { useEffect, useState } from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleReviews from "./SingleReviews";
export default function App() {
    const [reviewes, setReviewes] = useState([]);
    const reviewesCopy = [...reviewes];
    const reversedReviewes = reviewesCopy?.reverse();
    useEffect(() => {
        fetch("https://intense-everglades-32006.herokuapp.com/reviews/")
            .then(res => res.json())
            .then(res => {
                setReviewes(res);
            });
    }, [])
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <div className="border-2 border-slate-600">
                    {
                        reversedReviewes?.map(singleReview => <SwiperSlide key={singleReview._id}>
                            <SingleReviews
                                singleReview={singleReview}
                            />
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </>
    );
}
