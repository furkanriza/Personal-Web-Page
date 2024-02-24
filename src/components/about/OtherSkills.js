import React from 'react';

const OtherSkills = ({ onClose }) => {
    return (
        <div className='skill_component'>
            <h2 className='skill_page_title'>Other Skills</h2>

            <div className='skill_page_content_other'>
                <div>
                    <p>Unity</p>
                    <p>Database Tunning</p>
                    <p>Software Engineering</p>
                    <p>Parallel Programming</p>
                    <p>Cybersecurity Principles</p>
                    <p>Strong OOP, data structures,<br /> algorithm background</p>
                </div>

                <div>
                    <table className='programming_language_table'>
                        <th>
                            <td>Programming Languages</td>
                        </th>
                        <tr>
                            <td><li>Java</li></td>
                        </tr>
                        <tr>
                            <td><li>Python</li></td>
                        </tr>
                        <tr>
                            <td><li>JavaScript</li></td>
                        </tr>
                        <tr>
                            <td><li>C#</li></td>
                        </tr>
                        <tr>
                            <td><li>C++</li></td>
                        </tr>
                        <tr>
                            <td><li>Shell Script</li></td>
                        </tr>
                        <tr>
                            <td><li></li></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className='center_content'><button className="close_button" onClick={onClose}>Close</button></div>
        </div>
    );
};

export default OtherSkills;