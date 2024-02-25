import React, { useState } from 'react';
import SkillPopup from './SkillPopup';
import ExperiencePopup from './ExperiencePopUp';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import WebDevelopment from './WebDevelopment';
import MobileDevelopment from './MobileDevelopment';
import DataScience from './DataScience';
import OtherSkills from './OtherSkills';
import Havelsan from './Havelsan';
import AnadoluAgency from './AnadoluAgency';
import Education from './Education';
import eduImg from '../../images/university.jpg';
import skillsImg from '../../images/skills.png';
import havelsanImg from '../../images/havelsan.jpg';
import anadoluAgency from '../../images/AA.jpg';


const About = () => {
    const [activeSkill, setActiveSkill] = useState(null);
    const [activeExperience, setActiveExperience] = useState(null);

    const [educationPopUp, setEducationPopUp] = useState({
        component: Education
    });

    const [havelsanExperience, setHavelsanExperience] = useState({
        component: Havelsan
    });

    const [anadoluAgencyExperience, setAnadoluAgencyExperience] = useState({
        component: AnadoluAgency
    });


    const skills = [
        { name: "Web Development", description: "Details about Web Development...", component: WebDevelopment },
        { name: "Mobile Development", description: "Details about Mobile Development...", component: MobileDevelopment },
        { name: "Data Science", description: "Details about Data Science...", component: DataScience },
        { name: "Other Skills", description: "Details about AI...", component: OtherSkills },
    ];

    const closeSkillPopup = () => {
        setActiveSkill(null);
    };

    const closeExperiencePopup = () => {
        setActiveExperience(null);
    };

    const renderSkillPopup = () => {
        if (!activeSkill) return null;
        const ActivePopupComponent = activeSkill.component;
        return <ActivePopupComponent onClose={closeSkillPopup} />;
    };

    const renderExperiencePopup = () => {
        if (!activeExperience) return null;
        const ActiveExperienceComponent = activeExperience.component;
        return <ActiveExperienceComponent onClose={() => setActiveExperience(null)} />;
    };

    return (
        <>
            <section id="about">
                <div className="row">
                    <br /><br />
                    <h3 className="about_title">More About Me</h3>
                    <div className="about_content">

                        {/* Education */}
                        <div className="about_component">
                            <h2 className="about_component_title">Education</h2>
                            <img className="education_img" src={eduImg} alt='ybu' />
                            <table className="education_table">
                                <tbody>
                                    <tr className="education_table_row">
                                        <td className="education_table_data_title"><strong>Ankara Yıldırım Beyazıt University <br />(Bachelor of Computer Science)</strong></td>
                                    </tr>
                                    <tr className="education_table_row">
                                        <td className="education_table_data">2019 - 2024<br />(senior undergraduate student)</td>
                                    </tr>

                                    <tr className="education_table_row">
                                        <td className="education_table_data">CGPA: 3.20</td>
                                    </tr>

                                </tbody>
                            </table>
                            <div className='experience_more_button'>
                                <Popup
                                    trigger={<button className="skills_container" onClick={() => setEducationPopUp(educationPopUp)}>More</button>}
                                    modal
                                    nested
                                    closeOnDocumentClick={false}
                                    closeOnEscape={true}
                                >
                                    {close => (
                                        <div>
                                            <Education onClose={close} />
                                        </div>
                                    )}
                                </Popup>
                            </div>
                        </div>



                        {/* Skills */}
                        <div className="about_component">
                            <h2 className="about_component_title">Skills</h2>
                            <img className="skills_img" src={skillsImg} alt='skill' />
                            <br /><br /><br /><br /><br />
                            <div className="about_component_skills">
                                {skills.map(skill => (
                                    <Popup
                                        key={skill.name}
                                        trigger={<button className="skills_container">{skill.name}</button>}
                                        modal
                                        nested
                                        closeOnDocumentClick={false}
                                        closeOnEscape={true}
                                    >
                                        {close => (
                                            <div>
                                                <div><skill.component onClose={close} /></div>
                                            </div>
                                        )}
                                    </Popup>


                                ))}
                            </div>
                        </div>



                        {/* Experiences */}
                        <div className="about_component">
                            <h2 className="about_component_title">Experiences</h2>

                            <div className="about_component_experiences">
                                {/* HAVELSAN */}
                                <div className='about_component_experiences_havelsan'>
                                    <img className="skills_img" src={havelsanImg} alt='havelsan' />
                                    <h2>HAVELSAN A.Ş</h2>
                                    <table>
                                        <tr>
                                            <th>Short Term Intern</th>
                                            <th className='education_table_data'>07.08.2023 - 08.09.2023</th>
                                        </tr>
                                        <tr>
                                            <td>Web developer</td>
                                            <td className='education_table_data'>Ankara, Turkey</td>
                                        </tr>
                                    </table>

                                    <br />
                                    <p>
                                        <li className='line_space'>Developed a web application using Spring Boot and Angular.</li>
                                        <li className='line_space'>Delivered a REST API and a user interface.</li>
                                        <li className='line_space'>Provided employees to organize clubs, view event calendar and get club recommendations, and
                                            handles club - event costs for company-wide usage.</li>
                                    </p>
                                    <div className='experience_more_button'>
                                        <Popup
                                            trigger={<button className="skills_container" onClick={() => setActiveExperience(havelsanExperience)}>More</button>}
                                            modal
                                            nested
                                            closeOnDocumentClick={false}
                                            closeOnEscape={true}
                                        >
                                            {close => (
                                                <div>
                                                    <Havelsan onClose={close} />
                                                </div>
                                            )}
                                        </Popup>
                                    </div>
                                </div>


                                {/* ANADOLU AGENCY */}
                                <div className='about_component_experiences_aa'>
                                    <img className="anadolu_ajansi_img" src={anadoluAgency} alt='anadolu agency' />

                                    <h2 className='havelsan_title'>Anadolu Ajansı A.Ş</h2>
                                    <table>
                                        <tr>
                                            <th>Short Term Intern</th>
                                            <th className='education_table_data'>03.07.2023 - 28.07.2023</th>
                                        </tr>
                                        <tr>
                                            <td>Web developer</td>
                                            <td className='education_table_data'>Ankara, Turkey</td>
                                        </tr>
                                    </table>

                                    <br />
                                    <p>
                                        <li className='line_space'>Implemented full CRUD functionality, designed user interface</li>
                                        <li className='line_space'>Integrated user authentication and authorization with JWT web tokens</li>
                                        <li className='line_space'>Utilized PostgreSQL for database and Hibernate for ORM, integrated
                                            with YouTube Data API, implemented refresh token mechanism.</li>
                                    </p>
                                    <div className='experience_more_button'>
                                        <Popup
                                            trigger={<button className="skills_container" onClick={() => setActiveExperience(anadoluAgencyExperience)}>More</button>}
                                            modal
                                            nested
                                            closeOnDocumentClick={false}
                                            closeOnEscape={true}
                                        >
                                            {close => (
                                                <div>
                                                    <AnadoluAgency onClose={close} />
                                                </div>
                                            )}
                                        </Popup>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            {activeSkill && <SkillPopup skill={activeSkill} onClose={closeSkillPopup} />}
            {activeExperience && <ExperiencePopup experience={activeExperience} onClose={closeExperiencePopup} />}
            {renderSkillPopup()}
            {renderExperiencePopup()}
        </>
    )
};

export default About;
