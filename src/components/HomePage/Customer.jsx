import React from "react";

function Customer(props) {
    return (
        <div>
            <img src={props.imageUrl} alt={props.name} />
        </div>
    );
}

export default Customer;
