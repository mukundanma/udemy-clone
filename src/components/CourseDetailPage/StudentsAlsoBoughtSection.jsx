import { List } from "@material-tailwind/react";
import React from "react";
import { StudentsAlsoBoughtCard } from "./StudentsAlsoBoughtCard";

export function StudentsAlsoBoughtSection({ data }) {
    if (data?.units?.length > 1) {
        return (
            <div>
                <List className="px-0">
                    {console.log(data)}
                    {data.units[1].items.map(function getStudentsAlsoBougthCard(
                        item
                    ) {
                        console.log(item);
                        return (
                            <StudentsAlsoBoughtCard
                                data={item}
                                key={data.id}
                            ></StudentsAlsoBoughtCard>
                        );
                    })}
                </List>
            </div>
        );
    }
}
