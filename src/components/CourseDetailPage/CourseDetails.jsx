import React, { useEffect, useState } from "react";
import { Header } from "../HomePage/Header";
import { CourseContent } from "./CourseContent";
import { CourseContentAccordion } from "./CourseContentAccordion";
import { CourseDetailBanner } from "./CourseDetailBanner";
import { CourseIncludesCard } from "./CourseIncludesCard";
import { CourseObjectivesCard } from "./CourseObjectivesCard";
import { StudentsAlsoBoughtSection } from "./StudentsAlsoBoughtSection";

//Course Overview - https://mocki.io/v1/af655e00-3bf6-4365-b98d-be686da370a0
//Course Content - https://mocki.io/v1/e19a04f2-4b9d-43a8-b257-90eebb7ca5d9
//Other courses by author - https://mocki.io/v1/99ef43ac-e128-44be-b020-ca560e3659b4
//Students also bought - https://mocki.io/v1/298e7b59-b660-4d4b-8f0e-8608208fd412

export function CourseDetails() {
    const [course, setCourse] = useState({});
    const [courseContent, setCourseContent] = useState({});
    const [studentAlsoBought, setStudentsAlsoBought] = useState({});

    useEffect(() => {
        const url = "https://mocki.io/v1/af655e00-3bf6-4365-b98d-be686da370a0";
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData["units"][0]["items"][0]);
                setCourse(responseData["units"][0]["items"][0]);
            })
            .catch((reason) => console.log(reason));
    }, []);

    useEffect(() => {
        const url = "https://mocki.io/v1/e19a04f2-4b9d-43a8-b257-90eebb7ca5d9";
        console.log("in useerf");
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData.curriculum_context);
                setCourseContent(responseData.curriculum_context);
            })
            .catch((reason) => console.log(reason));

        // .then(function mapResponse(response) {
        //     return response.json();
        // })
        // .then(function setCurriculumContext(responseData) {
        //     console.log("inside setCurri");
        //     console.log(responseData.curriculum_context);
        //     setCourseContent(responseData.curriculum_context);
        // });
    }, []);

    useEffect(() => {
        const url = "https://mocki.io/v1/298e7b59-b660-4d4b-8f0e-8608208fd412";
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                setStudentsAlsoBought(responseData);
            })
            .catch((reason) => console.log(reason));
    }, []);

    var [openState, setOpenState] = useState({});

    console.log(courseContent);
    if (courseContent.data != undefined) {
        return (
            <div>
                <Header></Header>
                <CourseDetailBanner course={course} />
                <CourseObjectivesCard></CourseObjectivesCard>
                <CourseIncludesCard></CourseIncludesCard>
                {console.log(courseContent)}
                <CourseContent courseContent={courseContent}></CourseContent>
                {courseContent.data.sections.map(function getSections(
                    section,
                    index
                ) {
                    {
                        console.log("in getSections");
                        console.log(section, index);
                    }
                    return (
                        <div>
                            <CourseContentAccordion
                                id={index}
                                openState={openState}
                                openHandler={setOpenState}
                                itemList={section.items}
                                sectionHead={section.title}
                            ></CourseContentAccordion>
                        </div>
                    );
                })}
                <StudentsAlsoBoughtSection
                    data={studentAlsoBought}
                ></StudentsAlsoBoughtSection>
            </div>
        );
    }
}
