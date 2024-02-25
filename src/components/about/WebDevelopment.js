import React from 'react';

const WebDevelopment = ({ onClose }) => {
    return (
        <div className='skill_component'>

            <h2 className='skill_page_title'>Web Development</h2>



            <p>
                My skillset extends to full-stack development with a profound foundation in computer science, enriched by experiences with the Spring framework
                during my internships at HAVELSAN and Anadolu Agency. These roles enhanced my backend expertise while making my proficiency in frontend development.
                Throught my academic journey, I have gained strong background in software design patterns, database management, cloud computing, responsive web design,
                software engineering and network. My academic and practical experiences underscore his capability in both backend and frontend realms, preparing my for
                comprehensive full-stack web development projects.
            </p>

            <br />

            <p>Backend: Spring framework, Spring Boot, Spring MVC, Hibernate, SQL, Java, Flask</p>
            <p>Frontend: React.js, Angular, Javascript, Javascript, Typescript, HTML, CSS, </p>
            <p>Databases: PostgreSQL, MySQL, Microsoft SQL, SQLite, MongoDB </p>
            <p>Tools: Docker, AWS, Git, Jira, Trello</p>

            <br />

            <h3>Projects:</h3>
            <p><strong>Club Management System: </strong>Designed and developed a web application for company internal use using Sprig Boot and Angular.</p>
            <p>
                <strong>Todo List Application: </strong>Created a RESTful API and added features such as authentication, YouTube recommendations.{" "}
                <a href='https://github.com/furkanriza/TodoList' style={{ color: 'blue' }} target='_blank'>Source Code<span role="img" aria-label="New Tab">&#x1F855;</span></a>
            </p>

            <p>
                <strong>Personal Website: </strong>This website designed with React.js and deployed to .........

                <a href='https://github.com/furkanriza/Personal-Web-Page' style={{ color: 'blue' }} target='_blank'>Source Code<span role="img" aria-label="New Tab">&#x1F855;</span></a>
            </p>

            <p> <a href='https://github.com/furkanriza/TodoList' style={{ color: 'aqua' }} target='_blank'> Certificates <span role="img" aria-label="New Tab">&#x1F855;</span></a></p>

            <br />
            <div className='center_content'><button className="close_button" onClick={onClose}>Close</button></div>


        </div>
    );
};

export default WebDevelopment;