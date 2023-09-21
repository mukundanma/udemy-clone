import {
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";
import Courses from "./Courses";

function TopCourses({ categoriesInfo, coursesInCategory }) {
    const [courseName, setCourseName] = useState("");
    console.log(categoriesInfo);
    console.log(coursesInCategory);
    console.log(courseName);
    return (
        <div className="px-6 pt-12">
            <h1 className="text-2xl">A broad selection of courses</h1>
            <p className="py-4 font-thin">
                Choose from over 210,000 online video courses with new additions
                published every month
            </p>
            <Tabs value="html">
                <TabsHeader>
                    {categoriesInfo &&
                        categoriesInfo.map(({ label, value }) => (
                            <Tab
                                key={value}
                                value={value}
                                onClick={(e) => setCourseName(value)}
                            >
                                {label}
                            </Tab>
                        ))}
                </TabsHeader>
                <TabsBody>
                    {categoriesInfo &&
                        categoriesInfo.map(({ value, desc, title }) => (
                            <div key={title}>
                                <TabPanel key={value} value={value}>
                                    {desc}
                                </TabPanel>
                            </div>
                        ))}
                </TabsBody>
            </Tabs>
            <Courses courses={coursesInCategory[courseName]} />
        </div>
    );
}

export default TopCourses;
