import React from 'react';
import github_icon from '../../images/github.png';
import mail_icon from '../../images/email.png';

const Footer2 = () => (
  <>
    <div className="footer_navbar2">
      <a href="https://github.com/furkanriza" target="_blank" rel="noopener noreferrer">
        <img className="social_icon" src={github_icon} alt="github_icon" />
      </a>
      <a href="mailto:furkanrizap@gmail.com" target="_blank" rel="noopener noreferrer">
        <img className="social_icon" src={mail_icon} alt="mail_icon" />
      </a>
    </div>
  </>
);

export default Footer2;
