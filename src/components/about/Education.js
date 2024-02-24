import React from 'react';

const Education = ({ onClose }) => {
    return (
        <div className='skill_component'>
            <h2 className='skill_page_title'>Ankara YIldırım Beyazıt University - Computer Engineering Department</h2>

            <div className='skill_page_content'>

                <p>
                    My undergraduate program in Computer Engineering at Ankara Yıldırım Beyazıt University was a comprehensive journey through the realms of computing,
                    programming, and digital innovation. With a curriculum delivered entirely in English, I delved into topics ranging from the fundamentals of computer
                    programming and data structures to advanced subjects like machine learning, and neural networks.

                    <br /><br />

                    The most crucial courses I took were Software Design, Patterns, Cloud Computing, Principles of Information Security, 
                    Mobile Application Development, Artificial Intelligence, Machine Learning, and Neural Networks.
                    Software Design and Patterns equipped me with the essential skills to design robust, scalable software systems, emphasizing best practices and design principles. 
                    Cloud Computing gave me hands on practice with AWS. In Principles of Information Security course we delved into varius security fields such as Network Security, 
                    Software Security, Web Security, Authentication Protocols. Mobile Application Development provided hands-on experience in creating android applications. 
                    Artificial Intelligence, Machine Learning, and Neural Networks gained experience with heuristic algorithms, sckit learn libraries and deep learning strategies.
                    
                    <br /><br />

                    On the other hand, some of the must courses like Object Oriented Programming, Data Structures, Algorithms, Database Management Systems, 
                    Programming Languages, Automata Theory and Software Engineering laid the groundwork for my understanding of fundamental concepts in computer science. 
                    These courses formed the backbone of my technical knowledge, fostering proficiency in essential programming paradigms, data organization, 
                    algorithmic problem-solving, database design, language theory, and software development methodologies.

                </p>

                <div className='center_content'><button className="close_button" onClick={onClose}>Close</button></div>

            </div>
        </div>
    );
};

export default Education;