import { Button, Navbar, Typography } from "@material-tailwind/react";
import {SearchBar} from "./SearchBar";
import { FaGlobe, FaShoppingCart } from "react-icons/fa";

export function Header() {
    return (
        <Navbar
            color="white"
            className="max-w-none text-black rounded-none px-4 py-3 shadow-lg fixed z-50"
        >
            <div className="flex flex-row gap-4 justify-center items-center">
                <img
                    src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                    alt="Udemy Logo"
                    className="w-24 h-12"
                />
                <Typography className="text-sm  font-medium">
                    <Button
                        color="white"
                        className="capitalize text-sm py-2 px-2"
                    >
                        Categories
                    </Button>
                </Typography>
                <SearchBar />
                <Typography className="text-sm  font-medium">
                    <Button
                        color="white"
                        className="capitalize text-sm py-2 px-2"
                    >
                        Udemy Business
                    </Button>
                </Typography>
                <Typography className="text-sm  font-medium">
                    <Button
                        color="white"
                        className="capitalize text-sm py-2 px-2"
                    >
                        Teach on Udemy
                    </Button>
                </Typography>
                <Typography className="text-sm  font-medium">
                    <Button
                        color="white"
                        className="capitalize text-sm py-2 px-2 m-0"
                    >
                        <FaShoppingCart className="w-6 h-6 outline-black stroke-black fill-white stroke-[32px] " />
                    </Button>
                </Typography>
                <Typography className="text-sm  font-medium">
                    <Button
                        color="white"
                        className="border-2 py-2 px-4 border-black capitalize text-md"
                    >
                        Log in
                    </Button>
                </Typography>
                <Typography className="text-sm  font-medium">
                    <Button className="border-2 border-black capitalize py-2 px-4 text-md">
                        Sign up
                    </Button>
                </Typography>
                <Typography className="text-sm  font-medium">
                    <Button
                        color="white"
                        className="capitalize text-sm py-2 px-2 m-0"
                    >
                        <FaGlobe className="w-6 h-6" />
                    </Button>
                </Typography>
            </div>
        </Navbar>
    );
}
