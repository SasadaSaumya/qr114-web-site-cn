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
    padding-left: 25px;
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
          <p>Last Updated: August 03, 2025</p>
        </div>

        <div className="legal-content">
          <h2>1. Introduction and Acceptance</h2>
          <p>
            Welcome to QR114. This User Agreement ("Agreement" or "Terms") is a legally binding contract between you ("You", "User") and <strong>香港瑞安斯贸易有限公司佛山代表处</strong> ("Company", "We", "Us", "Our"). This Agreement governs your access to and use of the QR114 software application ("Application") and any related services (collectively, the "Service").
          </p>
          <p>
            <strong>By creating an account, or by accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our <a href="/privacy-policy">Privacy Policy</a>, which is incorporated herein by reference.</strong> If you do not agree to these Terms, you may not access or use the Service.
          </p>

          <h2>2. User Accounts</h2>
          <p>To use certain features of the Service, you may be required to register for an account. When you create an account, you agree to:</p>
          <ul>
            <li>Provide accurate, current, and complete information as prompted by our registration forms.</li>
            <li>Maintain the security of your password and accept all risks of unauthorized access to your account.</li>
            <li>Promptly notify us if you discover or otherwise suspect any security breaches related to the Service or your account.</li>
          </ul>
          <p>You are solely responsible for all activities that occur under your account.</p>

          <h2>3. Intellectual Property Rights</h2>
          <p>The Service, including the Application's design, graphics, user interface, source code, and all content other than Quranic recitations, are the exclusive property of the Company and its licensors. These are protected by copyright, trademark, and other intellectual property laws. The Quranic audio content provided through the Service is either in the public domain or is used under license and is not claimed as the intellectual property of the Company.</p>
          <p>Our trademarks, trade names, and logos, including "QR114," may not be used in connection with any product or service without our prior written consent.</p>

          <h2>4. Permitted Use and Prohibited Activities</h2>
          <p>We grant you a limited, non-exclusive, non-transferable, and revocable license to use the Service for your personal, non-commercial use in accordance with these Terms.</p>
          <p>You agree that you will not:</p>
          <ul>
            <li>Use the Service for any illegal or unauthorized purpose or engage in, encourage, or promote any activity that violates these Terms.</li>
            <li>Modify, adapt, translate, reverse engineer, decompile, or disassemble any portion of the Service.</li>
            <li>Sell, rent, lease, or otherwise transfer your rights to the Service to any third party.</li>
            <li>Use any robot, spider, or other automated means to access the Service for any purpose without our express written permission.</li>
            <li>Interfere with or disrupt the integrity or performance of the Service or its servers and networks.</li>
          </ul>

          <h2>5. Termination</h2>
          <p>We reserve the right to suspend or terminate your access to the Service at our sole discretion, without notice or liability, for any reason, including but not limited to a breach of this Agreement.</p>
          <p>Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may do so by contacting us or through the account settings in the Application. All provisions of the Agreement which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>

          <h2>6. Disclaimer of Warranties & Limitation of Liability</h2>
          <p>
            THE SERVICE IS PROVIDED ON AN <strong>"AS IS"</strong> AND <strong>"AS AVAILABLE"</strong> BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </p>
          <p>
            IN NO EVENT SHALL THE COMPANY, ITS DIRECTORS, EMPLOYEES, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE; (II) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SERVERS AND/OR ANY PERSONAL INFORMATION STORED THEREIN; (III) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE THAT MAY BE TRANSMITTED TO OR THROUGH OUR SERVICE BY ANY THIRD PARTY.
          </p>

          <h2>7. Governing Law and Dispute Resolution</h2>
          <p>This Agreement shall be governed and construed in accordance with the laws of Hong Kong Special Administrative Region of the People's Republic of China, without regard to its conflict of law provisions.</p>
          <p>Any dispute arising from or relating to this Agreement shall be subject to the exclusive jurisdiction of the courts of Hong Kong S.A.R.</p>
          
          <h2>8. Changes to This Agreement</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. We will notify you by email or through a prominent notice within the Application.</p>
          <p>By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.</p>

          <h2>9. Contact Us</h2>
          <p>If you have any questions about this User Agreement, please contact us:</p>
          <ul>
            <li>By email: <a href="mailto:admin@raoss.com">admin@raoss.com</a></li>
            <li>By visiting this page on our website: <a href="http://qr114.com/" target="_blank" rel="noopener noreferrer">http://qr114.com/</a></li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserAgreement;