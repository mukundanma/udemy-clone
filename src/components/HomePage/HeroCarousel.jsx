import React from "react";
import { Button, Carousel, Typography } from "@material-tailwind/react";

function HeroCarousel() {
    return (
        <div className="  pt-16 pb-10 bg-white border-2">
            <Carousel className=" pt-4 rounded-xl">
                <div className="relative h-full w-full">
                    <img
                        src="https://img-c.udemycdn.com/notices/home_carousel_slide/image/e3cc50c4-de7e-4992-b702-00df4585fac4.jpg"
                        alt="image 1"
                        className="w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-48 w-[400px] ml-16 mt-16 bg-white/75 shadow-lg">
                        <div className="px-6 py-4">
                            <Typography
                                variant="paragraph"
                                color="black"
                                className="mb-2 text-3xl font-bold opacity-80"
                            >
                                The skills for now - now on sale
                            </Typography>
                            <Typography
                                variant="paragraph"
                                color="black"
                                className="mb-12 font-normal opacity-80"
                            >
                                Chart your path to success. Log in for
                                limited-time savings on the latest topics.
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="https://img-c.udemycdn.com/notices/home_carousel_slide/image/e3cc50c4-de7e-4992-b702-00df4585fac4.jpg"
                        alt="image 1"
                        className="w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-48 w-[400px] ml-16 mt-16 bg-white/75 shadow-lg">
                        <div className="px-6 py-4">
                            <Typography
                                variant="paragraph"
                                color="black"
                                className="mb-2 text-3xl font-bold opacity-80"
                            >
                                The skills for now - now on sale
                            </Typography>
                            <Typography
                                variant="paragraph"
                                color="black"
                                className="mb-12 font-normal opacity-80"
                            >
                                Chart your path to success. Log in for
                                limited-time savings on the latest topics.
                            </Typography>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default HeroCarousel;
