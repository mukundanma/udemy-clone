import { Button, Input } from "@material-tailwind/react";
import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
    return (
        <div className="relative  w-full max-w-[30rem]  flex items-center justify-center ">
            <Input
                variant="outlined"
                label="Search for anything"
                size="lg"
                className="rounded-2xl   p-4 pr-16   text-lg"
            />
            <Button
                size="sm"
                className="!absolute mr-1 right-1 top-[6px] py-[0.60rem] rounded capitalize"
            >
                <FaSearch />
            </Button>
        </div>
    );
}

export default SearchBar;
