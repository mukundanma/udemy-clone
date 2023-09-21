import React from "react";
import Course from "./Course";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

function Courses({ courses }) {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="grid grid-cols-3  gap-5  pl-20 justify-center items-center"
        >
            {courses &&
                courses.map((course) => {
                    return (
                        <SwiperSlide className=" text-black  pb-10  ">
                            <Course course={course} />
                        </SwiperSlide>
                    );
                })}
        </Swiper>
    );
}

export default Courses;
