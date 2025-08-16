import React, { useState } from 'react';

// --- STYLES ---
// Using the color palette you provided for a consistent theme.
const FormStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  
  :root {
    --primary-green: #009933;
    --off-white: #f9f9f9;
    --card-white: #ffffff;
    --text-dark: #2c3e50;
    --text-light: #555;
    --light-gray: #f0f0f0;
    --error-red: #e74c3c;
    --success-green: #2ecc71;
  }

  .support-form-page {
    font-family: 'Poppins', sans-serif;
    background-color: var(--off-white);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 40px 20px;
    box-sizing: border-box;
  }

  .form-container {
    background-color: var(--card-white);
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.08);
    max-width: 500px;
    width: 100%;
    text-align: center;
  }

  .form-header h1 {
    color: var(--text-dark);
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 10px;
  }

  .form-header p {
    color: var(--text-light);
    margin: 0 0 30px;
  }

  .form-group {
    margin-bottom: 20px;
    text-align: left;
  }

  .form-group label {
    display: block;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 8px;
    font-size: 0.9rem;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid var(--light-gray);
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: var(--text-dark);
    transition: border-color 0.3s, box-shadow 0.3s;
    box-sizing: border-box; /* Important for padding and width */
  }

  .form-group input:focus-visible,
  .form-group textarea:focus-visible {
    outline: none;
    border-color: var(--primary-green);
    box-shadow: 0 0 0 3px rgba(0, 153, 51, 0.2);
  }
  
  .form-group textarea {
    min-height: 120px;
    resize: vertical;
  }

  .submit-btn {
    width: 100%;
    padding: 15px;
    background: var(--primary-green);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .submit-btn:hover:not(:disabled) {
    background-color: #007a29;
    transform: translateY(-2px);
  }
  
  .submit-btn:disabled {
    background-color: #a3d3b2;
    cursor: not-allowed;
  }
  
  .status-message {
    margin-top: 20px;
    padding: 12px;
    border-radius: 8px;
    font-weight: 500;
  }

  .status-message.success {
    background-color: #eaf8f0;
    color: var(--success-green);
  }
  
  .status-message.error {
    background-color: #fbecec;
    color: var(--error-red);
  }

  .spinner {
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  @media(max-width: 600px) {
    .support-form-page {
      padding: 20px 15px;
    }
    .form-container {
      padding: 30px 25px;
    }
    .form-header h1 {
      font-size: 1.8rem;
    }
  }
`;

function ForgotPasswordSupportForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
        setStatus('error');
        setError('Please fill in all fields.');
        return;
    }

    setStatus('sending');
    setError(null);

    // --- The API endpoint you created in routes/api.php ---
    // Make sure your Laravel server is running (e.g., at http://127.0.0.1:8000)
    const API_URL = 'https://api.qr114.com/api/send-support-email';

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json' // Important for Laravel
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }),
        });

        const result = await response.json();

        if (!response.ok) {
            // Handle validation errors from Laravel
            if (response.status === 422 && result.errors) {
                const firstError = Object.values(result.errors)[0][0];
                throw new Error(firstError);
            }
            // Handle other server errors
            throw new Error(result.message || 'Failed to send the message. Please try again.');
        }

        // --- SUCCESS ---
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Reset form

    } catch (err) {
        // --- ERROR ---
        setStatus('error');
        setError(err.message || 'An unexpected error occurred. Please try again later.');
    }
};

  return (
    <>
      <style>{FormStyles}</style>
      <div className="support-form-page">
        <div className="form-container">
          <div className="form-header">
            <h1>Forgot Password?</h1>
            <p>No problem! Fill out the form below and our support team will get back to you shortly.</p>
          </div>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Account Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please describe your issue.'"
                required
                disabled={status === 'sending'}
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? (
                <>
                  <div className="spinner"></div>
                  Sending...
                </>
              ) : (
                'Send Support Request'
              )}
            </button>

            {status === 'success' && (
              <div className="status-message success">
                ✅ Your request has been sent! We'll get back to you soon.
              </div>
            )}
            
            {status === 'error' && (
              <div className="status-message error">
                ⚠️ {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgotPasswordSupportForm;