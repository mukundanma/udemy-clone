import React from "react";
import { Customer } from "./Customer";

export function Customers(props) {
    return (
        <div className="flex flex-col w-full h-56 justify-center items-center bg-blue-gray-50">
            <p className="pb-8 font-thin text-gray-800">
                Trusted by over 14,400 companies and millions of learners around
                the world
            </p>
            <div className="flex flex-row w-full gap-20 justify-center items-center">
                {props.customers.map((customer) => (
                    <Customer
                        key={customer.name}
                        name={customer.name}
                        imageUrl={customer.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
}
