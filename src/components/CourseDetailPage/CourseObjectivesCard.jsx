import { Card, CardBody } from "@material-tailwind/react";
import React from "react";
import { FaCheck, FaList } from "react-icons/fa";

export function CourseObjectivesCard() {
    const objectives = [
        "You will master the Python programming language by building 100 unique projects over 100 days.",
        "You will be able to program in Python professionally",
        "Create a portfolio of 100 Python projects to apply for developer job",
        "Be able to use Python for data science and machine learning",
        "Build GUIs and Desktop applications with Python",
        "You will learn automation, game, app and web development, data science and machine learning all using Python.",
        "You will learn Selenium, Beautiful Soup, Request, Flask, Pandas, NumPy, Scikit Learn, Plotly and Matplotlib.",
        "Be able to build fully fledged websites and web apps with Python",
        "Build games like Blackjack, Pong and Snake using Python",
    ];
    function drawObjectives(objective) {
        return (
            <div key={objective.length} className="flex flex-row p-4 ">
                <div className="pr-4 pt-4 text-right">
                    <FaCheck></FaCheck>
                </div>
                <div>{objective} </div>
            </div>
        );
    }
    return (
        <div className="py-6  pl-16 px-4">
            <Card className="w-[50rem] border border-black ">
                <CardBody>
                    <div className="text-[2rem] px-12">What you will Learn</div>
                    <div className="grid grid-cols-2">
                        {objectives.map(drawObjectives)}
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
