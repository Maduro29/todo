import React from "react";

const Header = (props) => {
    let data = props;

    return (
        <h1>{data.title.toUpperCase()}</h1>
    );
}

export default Header;