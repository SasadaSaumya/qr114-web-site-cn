import React from 'react';
import { Link } from 'react-router-dom'; // For the "Go to Homepage" button
import { FaHome } from 'react-icons/fa';
import Footer from '../components/Footer'; // Assuming Footer is in components

const notFoundStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
  
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
  }

  .not-found-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 258px); /* Full viewport height minus footer height */
    padding: 40px 20px;
    background-color: #ffffff;
    text-align: center;
  }

  .not-found-grid {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    max-width: 1000px;
  }

  .not-found-visual {
    font-size: 12rem;
    font-weight: 800;
    color: #009933; /* --primary-green */
    line-height: 1;
    text-shadow: 4px 4px 0px #f0f0f0; /* --light-gray */
  }

  .not-found-details {
    text-align: left;
    max-width: 450px;
  }

  .not-found-details h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #2c3e50; /* --text-dark */
    margin: 0 0 15px;
  }

  .not-found-details p {
    font-size: 1.1rem;
    color: #555; /* --text-light */
    line-height: 1.7;
    margin: 0 0 30px;
  }

  .back-home-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: #009933; /* --primary-green */
    color: white;
    text-decoration: none;
    padding: 16px 40px;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .back-home-btn:hover {
    background: #007A29; /* --dark-green */
    box-shadow: 0 10px 20px rgba(0, 153, 51, 0.2);
    transform: translateY(-3px);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .not-found-grid {
      flex-direction: column;
      gap: 20px;
    }
    .not-found-details {
      text-align: center;
    }
    .not-found-visual {
      font-size: 8rem;
    }
    .not-found-details h1 {
      font-size: 2.2rem;
    }
  }
`;

function NotFoundPage() {
  return (
    <>
      <style>{notFoundStyles}</style>
      <div className="not-found-wrapper">
        <div className="not-found-container">
          <div className="not-found-grid">
            <div className="not-found-visual">404</div>
            <div className="not-found-details">
              <h1>Oops! Page Not Found</h1>
              <p>
                The page you are looking for might have been moved, renamed,
                or is temporarily unavailable. Let's get you back on track.
              </p>
              <Link to="/" className="back-home-btn">
                <FaHome /> Go to Homepage
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default NotFoundPage;