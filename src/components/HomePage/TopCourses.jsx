import {
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { Courses } from "./Courses";

export function TopCourses({ categoriesInfo, coursesInCategory }) {
    const [courseName, setCourseName] = useState("");
    return (
        <div className="p-16 pt-16">
            <h1 className="text-4xl font-semibold">
                A broad selection of courses
            </h1>
            <p className="py-8 font-thin text-xl">
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
                                className="font-semibold"
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
                                    <div className="pt-8 font-bold text-black text-xl">
                                        {title}
                                    </div>
                                    <div className="py-4 font-thin text-black">
                                        {desc}
                                    </div>
                                </TabPanel>
                            </div>
                        ))}
                </TabsBody>
            </Tabs>
            <Courses courses={coursesInCategory[courseName]} />
        </div>
    );
}
