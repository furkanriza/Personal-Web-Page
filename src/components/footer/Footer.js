import React from 'react';
import instagram_icon from '../../images/instagram.png';
import linkedin_icon from '../../images/linkedin.png';


const Footer = () => (
  <>
    <div className="footer_navbar">
      <img className="social_icon" src={instagram_icon} alt="instagram_icon" />
      <img className="social_icon" src={linkedin_icon} alt="linkedin_icon" />

    </div>
  </>
);

export default Footer;
