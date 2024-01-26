import React, { useState } from "react";
import './style.css';
import Cards from "./Cards";

function About() {

    // Defining an array of objects representing features of the app
    const cardArr = [
        {
            icon: "bi bi-book-fill",
            feature: "1",
            title: "Who we are",
            description: 'At E-Library, we are passionate about making the world of literature more accessible to everyone. Our team comprises dedicated individuals from diverse backgrounds, united by our love for books and technology.'
        },
        {
            icon: "bi bi-bookmarks-fill",
            feature: "2",
            title: "Save your books",
            description: 'This  feature allows users to curate their personalized reading lists and effortlessly bookmark their favorite books for future reference. The saving feature ensures that you never lose track of your literary discoveries.'
        },
        {
            icon: "bi bi-hourglass-split",
            feature: "3",
            title: "Daily tracker",
            description: 'This feature empowers users to monitor and manage their reading sessions effectively. Whether you are aiming to track your reading progress, improve your reading habits, or simply allocate dedicated time for immersive reading.'
        },
        {
            icon: "bi bi-search-heart-fill",
            feature: "4",
            title: "Find your next read ",
            description: 'This  feature empowers users to explore a vast library of books and effortlessly discover their next captivating read. The search feature provides a seamless and intuitive way to find the perfect book for every reader.'
        }
    ]

    const [list, Setlist] = useState(cardArr)


    return (

        <>
        {/* Rendering two rows of Cards components, each containing two feature cards */}
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

