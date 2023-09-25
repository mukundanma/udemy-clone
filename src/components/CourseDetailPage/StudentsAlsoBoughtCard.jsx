import { Card, CardBody } from "@material-tailwind/react";
import React, { useState } from "react";
import {
    FaPeopleCarry,
    FaRegThumbsUp,
    FaStar,
    FaThumbsUp,
} from "react-icons/fa";

// units[1].items.map()
export function StudentsAlsoBoughtCard({
    data: {
        title,
        learn_url,
        image_304x171,
        content_info,
        last_update_date,
        num_subscribers,
        bestseller_badge_content,
        rating,
    },
}) {
    console.log(title);
    var currency_symbol = "$";
    var price = "39";
    function getLike(like) {
        if (like == 1) {
            return <FaThumbsUp></FaThumbsUp>;
        } else if (like == 0) {
            return <FaRegThumbsUp></FaRegThumbsUp>;
        }
    }
    function onLikeClick() {
        if (like == 1) {
            setlike(0);
        } else {
            setlike(1);
        }
    }
    function getBestSeller(bestseller_badge_content) {
        if (bestseller_badge_content != null) {
            return (
                <div className="m-0 p-0 ">
                    {bestseller_badge_content.badge_text}
                </div>
            );
        }
    }
    const [like, setlike] = useState(0);
    console.log(title);
    return (
        <div className="px-[4rem] py-2 max-w-[800px]">
            <Card>
                <CardBody className=" flex flex-row gap-4 ">
                    <div className="w-[190px] ">
                        <img
                            className="h-[150px] rounded"
                            src={image_304x171}
                            alt={learn_url}
                        ></img>
                    </div>
                    <div className=" pl-8 flex flex-col gap-2 justify-between">
                        <div className="flex flex-row gap-8">
                            <div>
                                <div className="max-w-[300px]">
                                    <a href={learn_url}>{title}</a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-5">
                            <div className="flex flex-row gap-1">
                                <div>{Math.round(rating)}</div>
                                <FaStar></FaStar>
                            </div>
                            <div className="flex flex-row gap-2">
                                <FaPeopleCarry></FaPeopleCarry>
                                <div>{num_subscribers}</div>
                            </div>
                            <div className="flex flex-row gap-2">
                                <div>{currency_symbol}</div>
                                <div>{price}</div>
                            </div>
                            <div onClick={onLikeClick}>{getLike(like)}</div>
                        </div>
                        <div className="flex flex-row gap-2 justify-between">
                            {getBestSeller(bestseller_badge_content)}
                            <div className="w-fit">{content_info}</div>
                            <div> Last updated on {last_update_date}</div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
