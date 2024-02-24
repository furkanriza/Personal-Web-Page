import React from 'react';

const Havelsan = ({ onClose }) => {
    return (
        <div className='skill_component'>
            <h2 className='skill_page_title'>Havelsan</h2>

            <div className='skill_page_content'>

                <p>The focal point of my internship in Havelsan was the successful implementation of the Club Management System which is a sophisticated web application designed to streamline sports and art club management within the company. Collaboratively, we crafted a REST API tailored to the company's dynamics using the Spring Boot framework and employed Angular for the interface. Additionally, we implemented an artificial intelligence-driven club recommendation algorithm using Python, running it as a web application with Flask and establishing communication with Java. This internship advanced my progress in various areas, including OAuth2, Docker, JPA, PostgreSQL, Hibernate, ORM, and Swagger testing. Notably, the development process also provided a valuable experience in creating an API architecture that delineates between essential layers such as Business Logic, Service, Repository, and Data Access. This internship was not just development of a functional web application but a testament to the depth of skills and knowledge acquired during the this journey.</p>
                
                <div className='center_content'><button className="close_button" onClick={onClose}>Close</button></div>

            </div>            
        </div>
    );
};

export default Havelsan;