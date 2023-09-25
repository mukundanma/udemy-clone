import { Card, CardBody } from "@material-tailwind/react";
import React from "react";
import { FaPeopleCarry, FaStar } from "react-icons/fa";

export function StudentsAlsoBoughtCard() {
    return (
        <div>
            <Card>
                <CardBody>
                    <div className="flex flex-row gap-5">
                        <img src={image} alt={title}></img>
                        <div>
                            <div>{title}</div>
                            <div>
                                <div>{bestseller}</div>
                                <div>{content_length} total hours</div>
                                <div>{last_updated}</div>
                            </div>
                        </div>
                        <div>
                            <div>{rating}</div>
                            <FaStar></FaStar>
                        </div>
                        <div>
                            <FaPeopleCarry></FaPeopleCarry>
                            <div>{memebers}</div>
                        </div>
                        <div>
                            <div>{currency_symbol}</div>
                            <div>{price}</div>
                        </div>
                        <div>{getLike()}</div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
