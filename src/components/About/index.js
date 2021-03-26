import React from 'react'

function About() {
    return (

        <section className="about" id="about">

            <div>
                <h3 className="section-title primary-border">
                    About Me
                </h3>
            </div>
            <div className="about-me-details">
                <img src={require("../../assets/images/profile-pic.jpg")} />
                <div className="my-paragraphs">
                    <p>
                        HI there! My name is Seth Uschuk, thank you for taking the time to visit my site. Please also feel free to explore the links at the bottom of the page to my LinkedIn and GitHub!
                    </p>
                    <br />
                    <p>
                        After 9 successful years of leadership and management throughout various retail subsects, I am ready to put my skills as a full stack web developer to use, so I can venture into a field that I am passionate about, and work within a community of cutting edge developers.
                    </p>
                    <br />
                    <br />
                    <a href="mailto:suschuk24@gmail.com">
                        email: suschuk24@gmail.com
                    </a>
                </div>
            </div>
            <div className="quote-container">
                <div className="quote">
                    <div className="quote-text">
                        <h2>"Websites promote you 24/7: No employee will do that."</h2>
                        <p>-Paul Cockson</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;