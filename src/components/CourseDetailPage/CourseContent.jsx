import React from "react";

//overview - https://mocki.io/v1/4ad4eab8-0e03-4ba9-8fc9-036776d2a9e0
//course include - https://mocki.io/v1/77b56ff5-b2d5-4a65-8db7-0b56ddf82e91
//course content - https://mocki.io/v1/90776874-a344-4611-bada-1e9987544a93
//also bought - https://mocki.io/v1/912f965e-2943-4d49-aa66-67f91ed76077
//more courses - https://mocki.io/v1/0aa7c693-2417-4322-9679-907de17a8911
//more courses - https://mocki.io/v1/6e842fc5-30a1-4d59-aa35-3cfc820a0ab9

export function CourseContent({ courseContent: { data } }) {
    console.log(data);
    if (data) {
        var timeArray = data.estimated_content_length_text.split(":");
        console.log(timeArray);
        return (
            <div>
                <div className="px-[4rem] text-[2rem]">Course Content</div>
                <div className="px-[4rem] text-[1rem] flex flex-row text-gray-700 gap-2 py-4">
                    <div className=" ">
                        {console.log(data.sections.length)}
                        {data.sections.length} sections
                    </div>
                    <div>|</div>
                    <div className="flex flex-row gap-2">
                        <span>{timeArray[0]}h</span>
                        <span>{timeArray[1]}m</span>
                        <span>total length</span>
                    </div>
                    <div>|</div>
                    <div className="">
                        {data.num_of_published_lectures} lectures{" "}
                    </div>
                </div>
            </div>
        );
    }
}
