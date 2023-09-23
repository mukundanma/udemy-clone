import { Card, CardBody } from "@material-tailwind/react";
import React from "react";
import {
    FaAddressCard,
    FaCheck,
    FaDownload,
    FaHandPaper,
    FaList,
    FaMobile,
    FaNotesMedical,
    FaTrophy,
    FaVideo,
} from "react-icons/fa";

export function CourseIncludesCard() {
    const objectives = [
        { id: 1, desc: "55 hours on-demand video", img: <FaVideo></FaVideo> },
        { id: 2, desc: "Assignments", img: <FaHandPaper></FaHandPaper> },
        { id: 3, desc: "224 articles", img: <FaAddressCard></FaAddressCard> },
        {
            id: 4,
            desc: "153 downloadable resources",
            img: <FaDownload></FaDownload>,
        },
        { id: 5, desc: "Access on mobile and TV", img: <FaMobile></FaMobile> },
        {
            id: 6,
            desc: "Certificate of Completion",
            img: <FaTrophy></FaTrophy>,
        },
    ];
    function drawIncludes({ desc, img, id }) {
        return (
            <div key={id} className="flex flex-row p-4 ">
                <div className="pr-4 pt-4 text-right">{img}</div>
                <div className="pt-3">{desc} </div>
            </div>
        );
    }
    return (
        <div className="py-6  pl-16 px-4">
            <Card className="w-[50rem] border border-black ">
                <CardBody>
                    <div className="text-[2rem] px-12">
                        This Course Includes:
                    </div>
                    <div className="grid grid-cols-2">
                        {objectives.map(drawIncludes)}
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
