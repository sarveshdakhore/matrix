// eslint-disable-next-line no-unused-vars
import React from 'react';
import logon from '../assets/logon.png';
import twitter from '../assets/twitterx.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="logo">
          <img src={logon} alt="Matrix VIT Multimedia Club Logo" />
        </div>
        <div className="vertical-hr"></div>
        <div className="left-content">
          <p className='footer-text'>Matrix(The Multimedia Club) is an official club associated with vellore institute of Technology , Vellore.</p>
          <div className="socials">
            <img src={instagram}/>
            <img src={facebook}/>
            <img src={twitter}/>
          </div>
          <p>Created by Matrix | &#169; All Rights Reserved</p>
        </div>
        <div className="vertical-hr"></div>
        <div className="right-content">
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
