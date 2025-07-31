import React from 'react';

// Using external links for these as they were in the original screenshot context
const logoImg = "https://qr114.com/assets/logo-Cm2NHHDY.png";

const footerStyles = `
  .main-footer {
      background-color: #009933; /* --primary-green */
      color: white;
      padding: 60px 20px;
      text-align: center;
  }
  .footer-logo { 
      width: 100px; 
      height: auto; 
      margin-bottom: 20px; 
      filter: brightness(0) invert(1); 
  }
  .footer-links {
      list-style: none;
      padding: 0;
      margin: 0 0 20px;
      display: flex;
      justify-content: center;
      gap: 30px;
      flex-wrap: wrap;
  }
  .footer-links a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      opacity: 0.9;
      transition: opacity 0.3s;
  }
  .footer-links a:hover {
      opacity: 1;
      text-decoration: underline;
  }
  .footer-copyright { 
      margin: 0; 
      font-size: 0.9rem; 
      opacity: 0.8; 
  }
`;

function Footer() {
  return (
    <>
      <style>{footerStyles}</style>
      <footer className="main-footer">
        <img src={logoImg} alt="Qaf Logo" className="footer-logo" />
        <ul className="footer-links">
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/user-agreement">User Agreement</a></li>
          <li><a href="/#buy">Order Now</a></li>
        </ul>
        <p className="footer-copyright">
          © {new Date().getFullYear()} QR114. All rights reserved by RHKCL.
        </p>
      </footer>
    </>
  );
}

export default Footer;