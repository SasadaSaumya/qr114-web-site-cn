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

function UserAgreement() {
  return (
    <>
      <style>{LegalPageStyles}</style>
      <div className="legal-container">
        <div className="legal-hero">
          <h1>User Agreement</h1>
          <p>Last Updated: {new Date().toLocaleString()}</p>
        </div>

        <div className="legal-content">
          <p>
            This User Agreement ("Agreement") is a legal agreement between you and RHKCL ("Company," "we," "us," or "our") governing your use of the QR114 device and its companion mobile application (collectively, the "Service"). By accessing or using the Service, you agree to be bound by this Agreement.
          </p>

          <h2>1. Description of Service</h2>
          <p>The QR114 Service provides users with a dedicated device for listening to Quranic recitations, controlled via a mobile application. The Service includes the physical device, its firmware, the mobile app, and any updates or support services provided by the Company.</p>
          
          <h2>2. User Accounts</h2>
          <p>To access certain features of the mobile application, you may be required to create an account. You are responsible for safeguarding your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>

          <h2>3. Intellectual Property Rights</h2>
          <p>The Service and its original content (excluding Quranic recitations, which are public domain or licensed), features, and functionality are and will remain the exclusive property of the Company and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks may not be used in connection with any product or service without the prior written consent of the Company.</p>

          <h2>4. Prohibited Activities</h2>
          <p>You agree not to use the Service for any purpose that is illegal or prohibited by this Agreement. You may not:</p>
          <ul>
            <li>Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of the device firmware or mobile application.</li>
            <li>Use the Service in any manner that could damage, disable, overburden, or impair the Service.</li>
            <li>Attempt to gain unauthorized access to any part of the Service or its related systems or networks.</li>
            <li>Use the Service for any commercial purpose without our express written permission.</li>
          </ul>

          <h2>5. Termination</h2>
          <p>We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Agreement. All provisions of the Agreement which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>
          
          <h2>6. Disclaimer of Warranties & Limitation of Liability</h2>
          <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Company makes no warranties, expressed or implied, and hereby disclaims all other warranties. In no event shall the Company be liable for any special, direct, indirect, or consequential damages whatsoever arising out of the use of or inability to use the Service.</p>

          <h2>7. Governing Law</h2>
          <p>This Agreement shall be governed and construed in accordance with the laws of the jurisdiction in which the Company is established, without regard to its conflict of law provisions.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserAgreement;