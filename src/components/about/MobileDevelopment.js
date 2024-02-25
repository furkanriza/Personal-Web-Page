import React from 'react';

const MobileDevelopment = ({ onClose }) => {
    return (
        <div className='skill_component'>

            <h2 className='skill_page_title'>Mobile Application Development</h2>
            <p>
                Throughout my academic journey, I focused on Java, which served as the backbone of my understanding in this field.
                I undertook a Mobile Application Development class where I delved into various aspects of Android development which brought me 
                proficiency in:
                <p>-Utilizing Java for building robust and user-friendly mobile applications</p>
                <p>-Database management, including SQLite, content providers, Firebase Realtime Database, Firebase Authentication</p>
                <p>-Usage of activities and fragments, shared preferences, Gestures, JSON and XML, networking</p>
                <p>-Technical background like Android application lifecycle, android architecture</p>
            </p>

            <br />

            <h3>Course Project:</h3>
            <p>
                <strong>PawRescue: </strong>Developed a mobile application that helps stray animals to be adopted and lost pet owners to find their animals. 
                Everything I wrote above was used and a user-friendly application was delivered.

                <a href='https://github.com/furkanriza/PawRescue' style={{ color: 'blue' }} target='_blank'> Source Code<span role="img" aria-label="New Tab">&#x1F855;</span></a>
            </p>

            <div className='center_content'><button className="close_button" onClick={onClose}>Close</button></div>


        </div>
    );
};

export default MobileDevelopment;