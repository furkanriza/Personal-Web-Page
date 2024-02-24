import React from 'react';

const ExperiencePopup = ({ experience, onClose }) => {
    return (
        <div className="popup">
            <div className="popup_inner">
                <h1>{experience.name}</h1>
                <p>{experience.description}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ExperiencePopup;