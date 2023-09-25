import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
    {
        id: "1",
        description:
            "I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
        author: "Will A",
        courseUrl:
            "https://www.udemy.com/course/aws-certified-cloud-practitioner-new",
        courseTitle: "Ultimate AWS Certified Cloud Practitioner CLF-C02",
    },
    {
        id: "2",
        description:
            "This course helped me freshen up on my product manager skills and land a job at Facebook! Thanks guys :)",
        author: "Ron F",
        courseUrl:
            "https://www.udemy.com/course/become-a-product-manager-learn-the-skills-get-a-job",
        courseTitle:
            "Become a Product Manager | Learn the Skills & Get the Job",
    },
    {
        id: "3",
        description:
            "One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. Would help anyone become a better manager.",
        author: "Phillip W",
        courseUrl: "https://www.udemy.com/course/practical-leadership",
        courseTitle: "Leadership: Practical Leadership Skills",
    },
    {
        id: "4",
        description:
            "I highly recommend this course for all budding data scientists. Even people with no prior knowledge of any visualization tools can become a master after completing this course.",
        author: "Surya M",
        courseUrl: "https://www.udemy.com/course/tableau10",
        courseTitle:
            "Tableau 2022 A-Z: Hands-On Tableau Training for Data Science",
    },
];

export function Testimonials() {
    return (
        <div className=" px-16 bg-[#F7F9FA] w-full text-xl font-bold">
            <h1 className="pb-8">
                How learners like you are achieving their goals
            </h1>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="grid grid-cols-3 gap-4 px-5 justify-center items-center"
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <TestimonialCard testimonial={testimonial} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
