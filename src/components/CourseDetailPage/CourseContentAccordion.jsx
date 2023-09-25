import {
    Accordion,
    AccordionBody,
    AccordionHeader,
} from "@material-tailwind/react";

import React from "react";
import {
    FaArrowAltCircleDown,
    FaArrowAltCircleUp,
    FaPagelines,
    FaQuestion,
    FaVideo,
} from "react-icons/fa";

function Icon({ openState, id }) {
    return id == openState ? <FaArrowAltCircleUp /> : <FaArrowAltCircleDown />;
}

export function CourseContentAccordion({
    id,
    openHandler,
    openState,
    itemList,
    sectionHead,
}) {
    return (
        <div className="px-[4rem] max-w-3xl py-2">
            <Accordion
                open={openState == id}
                icon={<Icon openState={openState} id={id}></Icon>}
                className="p-0 mb-0 rounded-lg border border-blue-gray-100 px-4 shadow-md"
            >
                <AccordionHeader
                    onClick={function clickHandler() {
                        return openHandler(id == openState ? 0 : id);
                    }}
                >
                    {sectionHead}
                </AccordionHeader>
                <AccordionBody>
                    <ul className="p-0">
                        {itemList.map(function getItemList(item) {
                            if (item.item_type == "lecture") {
                                var icon = <FaVideo></FaVideo>;
                            } else if (item.item_type == "quiz") {
                                var icon = <FaQuestion></FaQuestion>;
                            } else {
                                var icon = <FaPagelines></FaPagelines>;
                            }
                            return (
                                <li>
                                    <Accordion
                                        open={openState == id}
                                        icon={null}
                                        className="p-0 "
                                    >
                                        <AccordionHeader
                                            onClick={function clickHandler(
                                                value
                                            ) {
                                                value = value == 0 ? 1 : 0;
                                                return value;
                                            }}
                                            className="p-2"
                                        >
                                            <div className="flex flex-row gap-2 justify-between px-4 w-screen ">
                                                <div className="flex flex-row gap-4 justify-start">
                                                    <div className="pt-2">
                                                        {icon}
                                                    </div>
                                                    <div className="pt-2 text-[1rem] font-normal">
                                                        <a
                                                            className="hover:text-blue-600 active:text-blue-900 h"
                                                            href={
                                                                item.learn_url
                                                            }
                                                        >
                                                            {item.title}
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row gap-4 justify-end">
                                                    <div className="pt-2 text-[1rem] font-normal">
                                                        {item.content_summary}
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody>
                                            <div>
                                                {item.description
                                                    .replace(
                                                        /(<([^>]+)>)/gi,
                                                        ""
                                                    )
                                                    .replace(/&nbsp;/g, "")
                                                    .replace(/&#039;/g, "'")}
                                            </div>
                                        </AccordionBody>
                                    </Accordion>
                                </li>
                            );
                        })}
                    </ul>
                </AccordionBody>
            </Accordion>
        </div>
    );
}
