import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Typography,
} from "@material-tailwind/react";

import { NavLink } from "react-router-dom";
import React from "react";

export function Course({ course }) {
    console.log("courseTitle: " + course.title);
    return (
        <Card className="mt-6 w-[25vw] ">
            <NavLink to={`/courses/${course.id}`}>
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        src={course.image_480x270}
                        alt={course.title}
                        className="object-cover h-48 w-240"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {course.title}
                    </Typography>
                    <Typography>
                        {course["visible_instructors"][0]["display_name"]}
                    </Typography>
                    <Typography>{course["avg_rating"]}</Typography>
                    <Typography>{course["num_reviews"]}</Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button>Best Seller</Button>
                </CardFooter>
            </NavLink>
        </Card>
    );
}
