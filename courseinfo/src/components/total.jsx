import React from "react";

const Total = ({ course }) => {
    const [part1, part2, part3 ] = course.parts
    let exercises1 = part1.exercises
    let exercises2 = part2.exercises
    let exercises3 = part3.exercises

    return (
        <div>
            <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
        </div>
    );
}

export default Total