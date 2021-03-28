import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../Modal'

function Work() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentApp, setCurrentApp] = useState();

    const [apps] = useState([
        {
            name: 'Living Real',
            url: 'https://living-real.herokuapp.com/',
            gitHub: 'https://github.com/P3T2-Realty-Rogues/living-real',
            class: 'living-real',
            image: 'living-real.jpg',
            description: 'A Realty Management Tool. This app is intended for private property owners who want to advertise their properties, manage their tenants and manage their real estate all in one place. This application also functions as a hub for tenants to access their property and pay their rent.'
        },
        {
            name: 'Food Festival',
            url: 'https://suschuk24.github.io/food-festival/index.html',
            gitHub: 'https://github.com/suschuk24/food-festival',
            class: 'food-festival',
            image: 'food-festival.jpg',
            description: 'A modularized progressive web application that allows users to view daily schedules, testimonials, view ticket pricing information, and purchase tickets all without having the dependency of consistent internet connectivity.'
        },
        {
            name: 'Budget Tracker',
            url: 'https://budget-tracker-106.herokuapp.com/',
            gitHub: 'https://github.com/suschuk24/budget-tracker',
            class: 'budget-tracker',
            image: 'budget-tracker.jpg',
            description: 'Giving users a fast and easy way to track their money is important, but allowing them to access that information at any time is even more important. Having offline functionality is paramount to the success of an application that handles users’ financial information. With that in mind, enter Budget Tracker. A Progressive Web Application that uses a noSQL database and offline persistance to deliver the ultimate end user experience for budgeting on the go.'
        },
        {
            name: 'Ultimate Movie Search',
            url: 'https://teamjeangrey.github.io/ultimate-movie-search/',
            gitHub: 'https://github.com/TeamJeanGrey/ultimate-movie-search',
            class: 'movie-search',
            image: 'movie-search.jpg',
            description: "Have you ever struggled to find or explain a movie to someone? What about figuring out who is in a particular movie? The Ultimate Movie Search was designed with you in mind. This site will allow you to find movie's based off of name or key words in the title. With a few click's you can find a movie, the cast of the movie and a trailer of the movie. This is the site for the inquisitive movie buffs, those in search of something to watch, and anyone in-between."
        },
        {
            name: 'Cloud Rolodex',
            url: 'https://powerful-ravine-82745.herokuapp.com/',
            gitHub: 'https://github.com/Team-Turkey/cloud-rolodex',
            class: 'cloud-rolodex',
            image: 'cloud-rolodex.jpg',
            description: 'Finally, you can throw away that 10 year old scrap of paper that’s taped to the break-room fridge. You know the one, it has your co-worker’s phone number and email, but it’s been crossed off and re-written. What’s worse, half the people on the sheet don’t even work there anymore! Introducing the 21st century solution, Cloud Rolodex! This easy to use application allows companies to build a database of employees, which allow logged-in users to update their own information, or to search for another employee in any department, or to view all employees in any department. '
        },
        {
            name: 'Zookeepr',
            url: 'https://arcane-hollows-40719.herokuapp.com/',
            gitHub: 'https://github.com/suschuk24/zookeepr',
            class: 'zookeepr',
            image: 'zookeepr.jpg',
            description: 'This is a full stack application that uses the Model, View, Controller development paradigm to create a SQL database, and an implemented front end to interact with the database.'
        },
        {
            name: 'Pizza Hunt',
            url: 'https://pizza-hunt-112420.herokuapp.com/',
            gitHub: 'https://github.com/suschuk24/pizza-hunt',
            class: 'pizza-hunt',
            image: 'pizza-hunt.jpg',
            description: 'This is a full stack web application that uses the power of MongoDB to create a noSQL database that stores user inputted information from the front end pages. More specifically, this application is designed for building custom pizza recipies, and collaborating with a community of other pizza enthusiasts to create the ultimate pizza.'
        },
        {
            name: 'Tech Blog',
            url: 'https://tech-blog-106.herokuapp.com/',
            gitHub: 'https://github.com/suschuk24/tech-blog',
            class: 'tech-blog',
            image: 'tech-blog.jpg',
            description: 'A responsive full stack web application that uses the power of a SQL database to store and retrieve users post and comments. After creating a profile, a logged in user can create, edit, and comment on their blog posts, and other users blog posts. If a user is not logged in, they will be directed to log in. At the log in page, there is an option to create a profile. Optionally, any user can visit the public dahsboards of posts. However, only logged-in users may comment on other posts.'
        },
        {
            name: 'Weather Forecast',
            url: 'https://suschuk24.github.io/weather-forecast/',
            gitHub: 'https://github.com/suschuk24/weather-forecast',
            class: 'weather-forecast',
            image: 'weather-forecast.jpg',
            description: 'This is a simple weather forecast aplication using the OpenWeather API. Search for a city on the left side. Data will populate with detailed forecasting information for that day, and the extended forecase will be displayed in the cards underneath. Search inquiries are saved in a list under the search bar, and may be cleared at users request.'
        },
    ]);

    const toggleModal = (image, i) => {
        setCurrentApp({ ...image, index: i });
        setIsModalOpen(!isModalOpen);
    };


    return (
        <section className="my-work" id="my-work">
            <div>
                <h3 className="section-title secondary-border">
                    My Favorite Applications
            </h3>
                <h4 className="section-title">Click a Title or Icon to view the live page or GitHub repo</h4>
            </div>
            <div>
                {isModalOpen && <Modal onClose={toggleModal} currentApp={currentApp} />}
                {apps.map((image, i) => (
                    <div className="apps">
                        <img
                            src={require(`../../assets/images/apps/${image.image}`)}
                            alt={image.name}
                            className={image.class + " img-fluid img-thumbnail"}
                            onClick={() => toggleModal(image, i)}
                            key={image.name}
                        />
                    </div>
                ))}
                {/* 
                 <!-- Ultimate Movie Search-->
                <div className="movie-search">
                    <div className="link">
                        <a href="https://teamjeangrey.github.io/ultimate-movie-search/" target="_blank">Ultimate Movie
                            Search</a>
                        <p>JavaScript</p>
                        <a href="">
                             <FontAwesomeIcon  icon={["fab", "github-square"]}  size="2x" />
                        </a>
                    </div>
                </div>
                <div className="budget-tracker">
                    <div className="link">
                        <a href="https://budget-tracker-106.herokuapp.com/" target="_blank">Budget Tracker</a>
                        <p>Node.js</p>
                        <a href="https://github.com/suschuk24/budget-tracker">
                             <FontAwesomeIcon  icon={["fab", "github-square"]}  size="2x" />
                        </a>
                    </div>
                </div>
                <div className="living-real">
                    <div className="link">
                        <a href="https://living-real.herokuapp.com/" target="_blank">Living Real</a>
                        <p>React Redux</p>
                        <a href="https://github.com/P3T2-Realty-Rogues/living-real">
                             <FontAwesomeIcon  icon={["fab", "github-square"]}  size="2x" />
                        </a>
                    </div>
                </div>
                <div className="weather-forecast">
                    <div className="link">
                        <a href="https://suschuk24.github.io/weather-forecast/" target="_blank">Weather Forecast</a>
                        <p>JavaScript</p>
                        <a href="https://github.com/suschuk24/weather-forecast">
                             <FontAwesomeIcon  icon={["fab", "github-square"]}  size="2x" />
                        </a>
                    </div>
                </div>
                <div className="cloud-rolodex">
                    <div className="link">
                        <a href="https://powerful-ravine-82745.herokuapp.com/" target="_blank">Cloud Rolodex</a>
                        <p>Node/Express.js</p>
                        <a href="https://github.com/Team-Turkey/cloud-rolodex">
                             <FontAwesomeIcon  icon={["fab", "github-square"]}  size="2x" />
                        </a>
                    </div>
                </div>
                <div className="zookeepr">
                    <div className="link">
                        <a href="https://arcane-hollows-40719.herokuapp.com/" target="_blank">Zookeepr</a>
                        <p>Express.js</p>
                        <a href="https://github.com/suschuk24/zookeepr">
                             <FontAwesomeIcon  icon={["fab", "github-square"]}  size="2x" />
                        </a>
                    </div>
                </div>
                <div className="food-festival">
                    <div className="link">
                        <a href="https://suschuk24.github.io/food-festival/index.html" target="_blank">Food Festival</a>
                        <p>React.js</p>
                        <a href="https://github.com/suschuk24/food-festival">
                             <FontAwesomeIcon  icon={["fab", "github-square"]}  size="2x" />
                        </a>
                    </div> 
                </div> */}
            </div>

        </section>
    )
}

export default Work