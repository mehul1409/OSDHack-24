import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
      <div className="footer-links">
          <h3>Quick Links</h3>
          <ul className='quicklinks'>
            <li><a href="#homesection">Home</a></li>
            <li><a href="#joust">About</a></li>
            <li><a href="#contactus">Contact us</a></li>
            <li><a href="#competition">Register</a></li>
          </ul>
        </div>
        <div className="footer-info">
          <h3>Contact Info</h3>
          <div>
            <p>Student Coordinator:<br />Shivang Sharma</p>
            <p>osdcjiit@*********</p>
          </div>
        </div>
        <div className="footer-social">
          <h3>Find Us here</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/Parola.LiteraryHub/"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.linkedin.com/company/parola-the-literary-hub/"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://www.instagram.com/parola.literaryhub"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; OPEN SOURCE DEVELOPERS COMMUNITY</p>
      </div>
    </footer>
  );
}

export default Footer;
