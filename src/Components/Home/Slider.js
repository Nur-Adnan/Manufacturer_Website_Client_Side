import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export default function App() {
    return (
        <div className="">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="image-slide-bgTwo flex flex-col items-center justify-center">
                        <h1 className="text-2xl px-2 md:px-0 md:text-4xl font-bold text-white text-center mb-8">Gears Factor</h1>
                        <h1 className="text-3xl px-2 md:px-0 md:text-6xl font-bold text-white text-center">While, Philosophy is common sense with big words.</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-slide-bgOne flex flex-col items-center justify-center">
                        <h1 className="text-2xl px-2 md:px-0 md:text-4xl font-bold text-white text-center mb-8">Gears Factor</h1>
                        <h1 className="text-3xl px-2 md:px-0 md:text-6xl font-bold text-white text-center">While, Philosophy is common sense with big words.</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-slide-bgThree flex flex-col items-center justify-center">
                        <h1 className="text-2xl px-2 md:px-0 md:text-4xl font-bold text-white text-center mb-8">Gears Factor</h1>
                        <h1 className="text-3xl px-2 md:px-0 md:text-6xl font-bold text-white text-center">While, Philosophy is common sense with big words.</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
