import React from 'react';
import Footer from '../components/Footer'; // Adjust path if needed

const LegalPageStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  
  body {
    font-family: 'Poppins', sans-serif;
    background-color: #f9f9f9; /* --off-white */
    margin: 0;
  }

  .legal-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  .legal-hero {
    background-color: #009933; /* --primary-green */
    color: white;
    padding: 60px 40px;
    border-radius: 16px;
    margin-bottom: 40px;
    text-align: center;
  }
  .legal-hero h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 0 0 10px;
  }
  .legal-hero p {
    font-size: 1rem;
    opacity: 0.9;
    margin: 0;
  }

  .legal-content {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.07);
    color: #555; /* --text-light */
    line-height: 1.8;
  }

  .legal-content h2 {
    font-size: 1.8rem;
    color: #2c3e50; /* --text-dark */
    margin-top: 40px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #f0f0f0; /* --light-gray */
  }

  .legal-content h2:first-of-type {
    margin-top: 0;
  }

  .legal-content p, .legal-content li {
    font-size: 1rem;
    margin-bottom: 15px;
  }

  .legal-content ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  
  .legal-content a {
    color: #009933; /* --primary-green */
    font-weight: 600;
    text-decoration: none;
  }

  .legal-content a:hover {
    text-decoration: underline;
  }

  @media(max-width: 768px) {
    .legal-hero h1 {
        font-size: 2.2rem;
    }
    .legal-content {
        padding: 25px;
    }
  }
`;

function PrivacyPolicy() {
  return (
    <>
      <style>{LegalPageStyles}</style>
      <div className="legal-container">
        <div className="legal-hero">
          <h1>Privacy Policy</h1>
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="legal-content">
          <p>
            Welcome to QR114. Your privacy is critically important to us. This Privacy Policy document outlines the types of information that is collected and recorded by the QR114 device and its companion mobile application (collectively, "the Service") and how we use it.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Identification Information:</strong> We may ask you to provide us with certain personally identifiable information that can be used to contact or identify you, such as your email address when you create an account or contact support.</li>
            <li><strong>Device and Usage Data:</strong> We automatically collect information about your device and how you interact with our Service. This may include your device's IP address, device type, operating system version, the app's features that you visit, the time and date of your visit, the time spent on those features, and other diagnostic data.</li>
            <li><strong>Bluetooth Data:</strong> The app uses Bluetooth to communicate with the QR114 device. We collect data related to the connection status and commands sent to the device to ensure proper functionality.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the collected data for various purposes:</p>
          <ul>
            <li>To provide, maintain, and improve our Service.</li>
            <li>To manage your account and provide you with customer support.</li>
            <li>To monitor the usage of our Service and detect, prevent, and address technical issues.</li>
            <li>To communicate with you about updates, security alerts, and support messages.</li>
          </ul>
          
          <h2>3. Data Sharing and Disclosure</h2>
          <p>We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners for analytics and service improvement purposes. We may disclose your information if required by law or in response to valid requests by public authorities.</p>

          <h2>4. Data Security</h2>
          <p>The security of your data is important to us. We strive to use commercially acceptable means to protect your Personal Information, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we aim to protect your data, we cannot guarantee its absolute security.</p>
          
          <h2>5. Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

          <h2>6. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us by visiting the support section on our website.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;