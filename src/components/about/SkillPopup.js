import React from 'react';

const SkillPopup = ({ skill, onClose }) => {
    return (
        <div className="popup">
            <div className="popup_inner">
                <h1>{skill.name}</h1>
                <p>{skill.description}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default SkillPopup;