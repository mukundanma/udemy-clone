import { Rating } from "@material-tailwind/react";
import React from "react";

export function CourseDetailBanner({
    course: {
        title,
        headline,
        num_subscribers,
        rating,
        num_reviews,
        last_update_date,
        caption_languages,
    },
}) {
    console.log(rating);
    var roundedRating = rating ? Math.round(rating) : 0;
    console.log(roundedRating);
    const primary_language =
        caption_languages && caption_languages.length > 0
            ? caption_languages[0]
            : "English";
    const secondary_language =
        caption_languages && caption_languages.length > 0
            ? caption_languages[1]
            : "English";

    return (
        <div className="pt-[6.5rem] bg-[#2D2F31]">
            <div className="w-2/3 text-white px-20">
                <h1 className="pt-10  text-[2.5rem] font-bold">{title}</h1>
                <p className="pt-8 text-[1.3rem]">{headline}</p>
                <div className="pt-4 flex flex-row gap-4">
                    {roundedRating > 0 && (
                        <Rating readonly value={roundedRating}></Rating>
                    )}
                    <div className="underline text-[#C0C4FC]">
                        <a href="">{num_reviews} ratings</a>
                    </div>
                    <p className=" ">{num_subscribers} students</p>
                </div>
                <p className="pt-4  ">
                    Created by{" "}
                    <span className="underline text-[#C0C4FC]">
                        <a href="">{"author"}</a>
                    </span>
                </p>
                <div className="pt-4  flex flex-row gap-4">
                    <div className="">Last updated {last_update_date}</div>
                    <div className="">
                        {primary_language},&nbsp; {secondary_language}
                    </div>
                </div>
                <div className="pt-10"></div>
            </div>
        </div>
    );
}
