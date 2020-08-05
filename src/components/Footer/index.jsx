import React from 'react';
import './style.css';

export default function Footer() {
  return (
    <div className="footer-container">

      <div className='footer-logo'>
        <span className="logo-text">Logo</span>
          <span className="to-top-text" onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth' })}>to top 
            <img src="img/arrow-up.png"  width='10' alt="" className='footer-arrow-top'/>
          </span>
      </div>
      <hr className='footer-line'></hr>

      <div className='footer-navigation'>

        <div className='navigation'>
          <div className='footer-navigation-header'>Navigation</div>

          <span><a href="#">Works</a></span>
          <span><a href="#">About us</a></span>
          <span><a href="#">Services</a></span>
          <span><a href="#">Contacts</a></span>
        </div>

        <div className='social-media'>
          <div className='footer-navigation-header'>Social Media</div>

          <span><a href="#">Instagram</a></span>
          <span><a href="#">LinkedIn</a></span>
          <span><a href="#">Facebook</a></span>
          <span><a href="#">Behance</a></span>
        </div>

        <div className='contact-us'>
          <div className='footer-navigation-header'>Contact us</div>

          <span>55 New Montgomery, Suite 607</span>
          <span>San Francisco, CA 94105</span>
          <span>(800) 566-2340</span>
        </div>

      </div>


      <hr className='footer-line'></hr>

      <div className='footer-copyrights'>
        <div className='first-col'>
          <span className='privacy-polity'>Privacy Policy</span>
          <span>Terms of Use</span>
        </div>

        <div className='second-col'>
          <span>Copyright © 2019</span>
        </div>

        <div className='third-col'>
          <span> created by  &nbsp;</span>
          <a href="https://www.linkedin.com/in/volodymyr-pashkonskyi-497736183/" className='created-by-text'> azooldan</a>
        </div>

      </div>

    </div>
  );
}

