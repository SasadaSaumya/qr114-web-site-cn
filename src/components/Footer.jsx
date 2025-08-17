import React, { useState } from "react";

// Import the new components
import ContactModal from "./ContactModal";
import giftLogo from "../assets/gift_your_loved_ones_logo.png";
import logoImg from "../assets/white_logo.png";

// Using external link for the main logo for consistency

const footerStyles = `
  .main-footer {
      background-color: #00872E; /* A darker green to match the image */
      color: white;
      padding: 40px 20px;
  }
  .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
  }
  .footer-qaf-logo {
      flex-shrink: 0;
  }
  .footer-qaf-logo img {
      width: 180px;
      height: auto;
  }
  .footer-info {
      text-align: center;
      font-size: 0.8rem;
      line-height: 1.6;
      opacity: 0.9;
  }
  .footer-info p {
      margin: 5px 0; /* Added a bit more margin for better spacing */
  }
  .footer-info p:hover {
      text-decoration: underline;
      cursor: pointer;
      opacity: 1;
  }
  .footer-gift-logo {
      flex-shrink: 0;
  }
  .footer-gift-logo img {
      width: 140px;
      height: auto;
  }
  
  /* Responsive footer */
  @media (max-width: 768px) {
    .footer-container {
      flex-direction: column;
      gap: 30px;
      text-align: center;
    }
  }
`;

function Footer() {
  // 1. Add state to manage the modal's visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Helper functions to open and close the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <style>{footerStyles}</style>
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-qaf-logo">
            <img src={logoImg} alt="Qaf Logo" />
          </div>
          <div className="footer-info">
            {/* 2. Update onClick to open the modal */}
            <p onClick={openModal}>Contact Us</p>
            <p
              onClick={() => {
                window.location.href = "https://qr114.com.cn/privacy-policy";
              }}
            >
              Privacy Policy
            </p>
            <p
              onClick={() => {
                window.location.href = "https://qr114.com.cn/user-agreement";
              }}
            >
              User Agreement
            </p>
            <p>Patent 2025216968622 / 2025304713613</p>
            <p
              onClick={() => {
                window.location.href = "https://beian.miit.gov.cn";
              }}
            >
              粤ICP备2025454823号
            </p>
            <p>© {new Date().getFullYear()} 香港瑞安斯贸易有限公司佛山代表处</p>
          </div>
          <div className="footer-gift-logo">
            <img src={giftLogo} alt="Gift Your Loved Ones" />
          </div>
        </div>
      </footer>

      {/* 3. Conditionally render the modal based on state */}
      {/* Pass the closeModal function as a prop so the modal can close itself */}
      {isModalOpen && <ContactModal onClose={closeModal} />}
    </>
  );
}

export default Footer;
