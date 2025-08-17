import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // 1. Import the hook

// Import components and assets
import ContactModal from "./ContactModal";
import giftLogo from "../assets/gift_your_loved_ones_logo.png";
import logoImg from "../assets/white_logo.png";

const footerStyles = `
  .main-footer {
      background-color: #00872E;
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
      margin: 5px 0;
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
  
  @media (max-width: 768px) {
    .footer-container {
      flex-direction: column;
      gap: 30px;
      text-align: center;
    }
  }
`;

function Footer() {
  const { t } = useTranslation(); // 2. Initialize the translation function
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            {/* 3. Replace hardcoded text with the t() function */}
            <p onClick={openModal}>{t("footer.contact")}</p>
            <p
              onClick={() => {
                window.location.href = "/privacy-policy"; // Use relative path for React Router
              }}
            >
              {t("footer.privacy")}
            </p>
            <p
              onClick={() => {
                window.location.href = "/user-agreement"; // Use relative path for React Router
              }}
            >
              {t("footer.agreement")}
            </p>
            <p>Patent 2025216968622 / 2025304713613</p>
            <p
              onClick={() => {
                window.location.href = "https://beian.miit.gov.cn";
              }}
            >
              粤ICP备2025454823号
            </p>
            {/* Use interpolation for the dynamic year */}
            <p>© {new Date().getFullYear()} 香港瑞安斯贸易有限公司佛山代表处</p>
          </div>
          <div className="footer-gift-logo">
            <img src={giftLogo} alt="Gift Your Loved Ones" />
          </div>
        </div>
      </footer>

      {isModalOpen && <ContactModal onClose={closeModal} />}
    </>
  );
}

export default Footer;
