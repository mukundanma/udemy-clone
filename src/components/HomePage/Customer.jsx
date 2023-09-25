import React from "react";

export function Customer(props) {
    return (
        <div>
            <img src={props.imageUrl} alt={props.name} />
        </div>
    );
}

