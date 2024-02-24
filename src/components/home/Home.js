import React from 'react';
import profilePhoto from '../../images/pp.jpg';

function Home() {

  const handleDownloadCV = () => {
    window.open("https://drive.google.com/file/d/1RZGkMv2IF25XEnFAm5V2YkYUEcDwZa92/view?usp=sharing", "_blank");
  };
  

  return (
    <>
      <section id="home" className="home">

        <h1 className="welcome_note_title">Welcome to My Portfolio Page</h1>
        <p className="owner_nam">Furkan Rıza Parlak</p>
        <h5 className="owner_designation">Software Developer</h5>


        <div id="container">
          <div id="header">
            <div className="welcome_note_container">
              <div className="welcome_image">
                <img className="owner_img" src={profilePhoto} alt="Profile" width="400" height="400" />
              </div>
              <div className="welcome_text">
                <p className="welcome_content">
                  Hello and welcome! I'm Furkan Rıza Parlak, a senior graduate Computer Engineering student with a passion for web development, poised to graduate in June 2024.
                  I specialize in backend development and have worked on diverse aspects of web development along my journey.
                  I have honed my skills in Spring Framework, Spring Boot, Hibernate, RESTful APIs, Docker, React.js,
                  Angular and more, showcasing my ability to deliver practical and impactful tech solutions.
                  My internship experiences in Havelsan and Anadolu Agency provide me the opportunity to improve my skills in web development and
                  I am constantly improving my programming skills and with special effort in back end development.
                  <br />
                  When I'm not playing table tennis, you can find me sending HTTP post requests to an API:)

                  <br />
                  <br />
                </p>
                <p className="welcome_content">
                  Beyond coursework and professional projects, I've dived into personal projects demonstrating my versatility and innovative spirit in tackling diverse challenges.
                  With a CGPA of 3.20, I've immersed myself in crucial courses equipping myself with a robust foundation in computer science throught my academic journey.
                  <br />
                  <br />
                </p>
                <p className="welcome_content">
                  Take a look around to see my work, explore my projects, or scroll page right. Let's connect and create something remarkable together!
                </p>
                <button className="contact_bt">Learn More</button>
                <button className="contact_bt">Contact</button>
                <button className="contact_bt2" onClick={handleDownloadCV}>My Resume <span className='new_tab' role="img" aria-label="New Tab">&#x1F855;</span></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
