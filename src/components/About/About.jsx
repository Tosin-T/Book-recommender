import React, { useState } from "react";
import './style.css';
import Cards from "./Cards";

function About() {

    const randomArr = [
        {
            icon: "bi bi-book-fill",
            feature: "1",
            title: "Book Finder",
            description: 'cool things happening over here'
        },
        {
            icon: "bi bi-bookmarks-fill",
            feature: "2",
            title: "Bookmark",
            description: 'cool things happening over here'
        },
        {
            icon: "bi bi-hourglass-split",
            feature: "3",
            title: "Tracker",
            description: 'cool things happening over here'
        },
        {
            icon: "bi bi-question-square-fill",
            feature: "4",
            title: "Randomiser",
            description: 'cool things happening over here'
        }
    ]

    const [list, Setlist] = useState(randomArr)


    return (

        <>
            <div className="row1"> {
                [list[0], list[1]].map(
                    feature => (
                        <Cards {...feature} />
                    )
                )}
            </div>
            <div className="row2"> {
                [list[2], list[3]].map(
                    feature => (
                        <Cards {...feature} />
                    )
                )}
            </div>
        </>

    );
}

export default About;

