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
    if (id == openState) {
        <FaArrowAltCircleUp></FaArrowAltCircleUp>;
    } else {
        <FaArrowAltCircleDown></FaArrowAltCircleDown>;
    }
}

export function CourseContentAccordion({
    id,
    openHandler,
    openState,
    itemList,
    sectionHead,
}) {
    return (
        <div>
            <Accordion
                open={openState == id}
                icon={<Icon openState={openState} id={id}></Icon>}
            >
                <AccordionHeader
                    onClick={function clickHandler() {
                        return openHandler(id == openState ? 0 : id);
                    }}
                >
                    {sectionHead}
                </AccordionHeader>
                <AccordionBody>
                    <ul>
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
                                    <AccordionHeader
                                        onClick={function clickHandler(value) {
                                            value = value == 0 ? 1 : 0;
                                            return;
                                        }}
                                    >
                                        <div className="flex flex-row gap-2 justify-between px-4 w-screen ">
                                            <div className="flex flex-row gap-4 justify-start">
                                                <div>{icon}</div>
                                                <div>
                                                    <a
                                                        className="hover:text-blue-600 active:text-blue-900 h"
                                                        href={item.learn_url}
                                                    >
                                                        {item.title}
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="flex flex-row gap-4 justify-end">
                                                <div>
                                                    {item.content_summary}
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionHeader>
                                    <AccordionBody>
                                        <div>{item.description}</div>
                                    </AccordionBody>
                                </li>
                            );
                        })}
                    </ul>
                </AccordionBody>
            </Accordion>
        </div>
    );
}
