import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import React from "react";

function TestimonialCard(props) {
    const { author, description, courseTitle, courseUrl } = props.testimonial;
    return (
        <Card className="max-w-[20rem]">
            <CardBody className="px-6">
                <Typography className="mb-2 font-normal py-1 text-black h-auto">
                    {description}
                </Typography>
                <Typography className="py-1 font-bold">{author}</Typography>
                <hr className="py-2" />
                <Typography className="py-2">
                    <a href={courseUrl} className="text-[#401B9C] font-bold">
                        {courseTitle}
                    </a>
                </Typography>
            </CardBody>
        </Card>
    );
}

export default TestimonialCard;
