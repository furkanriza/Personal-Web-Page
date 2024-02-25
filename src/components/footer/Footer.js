import React from 'react';
import instagram_icon from '../../images/instagram.png';
import linkedin_icon from '../../images/linkedin.png';

const Footer = () => (
  <>
    <div className="footer_navbar">
      <a href="https://www.instagram.com/furkanrizap/" target="_blank" rel="noopener noreferrer">
        <img className="social_icon" src={instagram_icon} alt="instagram_icon" />
      </a>
      <a href="https://www.linkedin.com/in/furkanrizap/" target="_blank" rel="noopener noreferrer">
        <img className="social_icon" src={linkedin_icon} alt="linkedin_icon" />
      </a>
    </div>
  </>
);

export default Footer;
