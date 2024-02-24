import React from 'react';

const AnadoluAgency = ({ onClose }) => {
    return (
        <div className='skill_component'>
            <h2 className='skill_page_title'>Anadolu Agency</h2>

            <div className='skill_page_content'>

                <p>I have gained significant learning experience in web application development. My internship journey began with a comprehensive exploration of the fundamental principles and architecture of the Spring framework. By developing a RESTful API from scratch, I acquired an understanding of authentication and authorization on both the user and server sides. I implemented a JWT refresh token mechanism and acquired a comprehensive understanding of concepts like OAuth2, Docker, JPA, PostgreSQL, Hibernate, ORM, and Spring Security throughout my applications. Additionally, I conducted exercises related to the integration of external APIs to enhance application functionality. Through various training sessions, I familiarized myself with concepts such as dependency inversion, IoC, XML configuration, and bean lifecycle. Furthermore, advancing in full-stack development using React.js for the frontend, I continued to apply best practices in the software world, reinforcing both practical skills and theoretical knowledge in Spring Boot. This internship not only expanded my technical skill set but also provided valuable insights into teamwork and collaboration.</p>
                
                <div className='center_content'><button className="close_button" onClick={onClose}>Close</button></div>

            </div>            
        </div>
    );
};

export default AnadoluAgency;