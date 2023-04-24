import React from "react";

const Footer = (props) => {
    let data = props;

    return (
        <h1>Things left: {data.left}</h1>
    )
}

export default Footer