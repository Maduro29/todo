import React from "react";
import Input from "./Input";

const Header = (props) => {
    let data = props;

    return (
        <header>
            <h1>{data.title.toUpperCase()}</h1>
            <Input />
        </header>
    );
}

export default Header;