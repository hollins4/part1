import React from "react";

const Header = ({ course}) => {
    let name = course.name
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default Header;