import React from "react";
import {Course} from "./Course";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./../../index.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

export function Courses({ courses }) {
    return (
        <div className="flex justify-center items-center ">
            <Swiper
                id="course-swiper"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="grid grid-cols-3  gap-100  px-20 justify-center items-center"
            >
                {courses &&
                    courses.map((course) => {
                        return (
                            <SwiperSlide className="flex  flex-col justify-center items-center text-black  pb-10  ">
                                <Course
                                    className="flex justify-center items-center"
                                    course={course}
                                />
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </div>
    );
}

// export default Courses;
