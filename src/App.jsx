import { useState, useEffect } from 'react';
// Make sure your logo is in the specified path
import logo from './assets/logo.png';

// This is a helper component for the countdown timer.
// It's defined here to keep everything in one file.
const TimeBlock = ({ value, label, primaryColor }) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 15px',
      minWidth: '80px',
    },
    value: {
      color: '#ffffff',
      fontSize: '3rem',
      fontWeight: '600',
      fontFamily: "'Poppins', sans-serif",
      lineHeight: '1.1',
    },
    label: {
      color: primaryColor,
      fontSize: '0.9rem',
      textTransform: 'uppercase',
      marginTop: '5px',
      fontFamily: "'Poppins', sans-serif",
      letterSpacing: '1px',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.value}>{value}</div>
      <div style={styles.label}>{label}</div>
    </div>
  );
};


function App() {
  // --- CONFIGURATION ---
  const primaryColor = '#009933';
  const darkBgColor = '#333333';
  const textColor = '#f0f0f0';
  // Set your target launch date here!
  const launchDate = new Date('2024-11-26T00:00:00');

  // --- STATE MANAGEMENT ---
  const [timeLeft, setTimeLeft] = useState({});
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  
  // --- LOGIC for Countdown Timer ---
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +launchDate - +new Date();
      let timeLeftData = {};

      if (difference > 0) {
        timeLeftData = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        timeLeftData = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      return timeLeftData;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [launchDate]);

  // --- EVENT HANDLERS ---
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      console.log('Subscribed with email:', email); // Replace with your API call
      setIsSubscribed(true);
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };
  
  // --- STYLES (Inline CSS Objects) ---
  const styles = {
    // We need a <style> tag for global styles like fonts, animations, and media queries
    // as this is the only way to achieve it while keeping everything in one file.
    globalStyles: `
      @import url('https://fonts.googleapis.com/css2?family=Lora:wght@500;700&family=Poppins:wght@300;400;600&display=swap');
      
      body {
        margin: 0;
        overflow-x: hidden;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      /* Responsive Styles */
      @media (max-width: 768px) {
        .main-title {
          font-size: 2.5rem !important;
        }
        .subtitle {
          font-size: 1rem !important;
          padding: 0 20px;
        }
        .countdown-container {
          transform: scale(0.8);
        }
        .form-container {
          flex-direction: column !important;
          width: 90% !important;
          max-width: 400px !important;
        }
        .email-input {
          border-radius: 8px !important;
          margin-bottom: 15px !important;
          text-align: center;
        }
        .submit-button {
           border-radius: 8px !important;
        }
      }
    `,
    mainContainer: {
      backgroundColor: darkBgColor,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: "'Poppins', sans-serif",
      padding: '20px',
      boxSizing: 'border-box',
      animation: 'fadeIn 1s ease-in-out',
      backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
      backgroundSize: '30px 30px',
      backgroundPosition: '0 0, 15px 15px',
    },
    logo: {
      width: '120px',
      height: '120px',
      objectFit: 'cover',
      marginBottom: '2rem',
      boxShadow: `0 0 25px ${primaryColor}33`,
    },
    mainTitle: {
      fontFamily: "'Lora', serif",
      color: primaryColor,
      fontSize: '3.5rem',
      fontWeight: '700',
      margin: '0',
    },
    subtitle: {
      color: textColor,
      fontSize: '1.2rem',
      fontWeight: '300',
      marginTop: '1rem',
      maxWidth: '600px',
      lineHeight: '1.6',
    },
    countdownContainer: {
      display: 'flex',
      justifyContent: 'center',
      margin: '3rem 0',
    },
    formContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '2rem',
      width: '100%',
      maxWidth: '500px',
    },
    emailInput: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '1rem',
      padding: '15px 20px',
      border: `1px solid ${darkBgColor}`,
      borderRight: 'none',
      borderTopLeftRadius: '8px',
      borderBottomLeftRadius: '8px',
      backgroundColor: '#444444',
      color: '#ffffff',
      flexGrow: 1,
      outline: 'none',
      transition: 'all 0.3s ease',
    },
    submitButton: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '1rem',
      fontWeight: '600',
      padding: '15px 30px',
      border: 'none',
      borderTopRightRadius: '8px',
      borderBottomRightRadius: '8px',
      backgroundColor: primaryColor,
      color: '#ffffff',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      transform: isButtonHovered ? 'scale(1.05)' : 'scale(1)',
    },
    subscriptionMessage: {
      marginTop: '2rem',
      color: primaryColor,
      fontSize: '1.1rem',
      fontWeight: '400',
    }
  };
  
  // Special style for the input when it needs to be focused
  const focusedInputStyle = {
    ...styles.emailInput,
    borderColor: primaryColor,
    boxShadow: `0 0 10px ${primaryColor}55`,
  };

  return (
    <>
      <style>{styles.globalStyles}</style>
      <div style={styles.mainContainer}>
        <img src={logo} style={styles.logo} alt="QR114 Logo" />
        
        <h1 style={styles.mainTitle} className="main-title">QR114</h1>
 

        <div style={styles.countdownContainer} className="countdown-container">
          <TimeBlock value={String(timeLeft.days || 0).padStart(2, '0')} label="Days" primaryColor={primaryColor} />
          <TimeBlock value={String(timeLeft.hours || 0).padStart(2, '0')} label="Hours" primaryColor={primaryColor} />
          <TimeBlock value={String(timeLeft.minutes || 0).padStart(2, '0')} label="Minutes" primaryColor={primaryColor} />
          <TimeBlock value={String(timeLeft.seconds || 0).padStart(2, '0')} label="Seconds" primaryColor={primaryColor} />
        </div>
        
       
      </div>
    </>
  );
}

export default App;