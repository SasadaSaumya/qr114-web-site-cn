import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const modalStyles = `
  /* Modal Backdrop */
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    animation: fadeIn 0.3s forwards;
  }

  /* Modal Content */
  .modal-content {
    background-color: white;
    padding: 30px 40px;
    border-radius: 12px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    width: 90%;
    max-width: 500px;
    position: relative;
    transform: translateY(-20px);
    animation: slideIn 0.4s forwards cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  /* Close Button */
  .modal-close-button {
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    font-size: 2rem;
    color: #888;
    cursor: pointer;
    line-height: 1;
    transition: color 0.2s;
  }
  .modal-close-button:hover {
    color: #333;
  }

  /* Modal Header */
  .modal-header h2 {
    margin: 0 0 20px 0;
    color: #333;
    font-size: 1.8rem;
    font-weight: 600;
  }

  /* Form Styling */
  .contact-form .form-group {
    margin-bottom: 20px;
  }

  .contact-form label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #555;
  }

  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .contact-form input:focus,
  .contact-form textarea:focus {
    outline: none;
    border-color: #00872E; /* Your theme color */
    box-shadow: 0 0 0 3px rgba(0, 135, 46, 0.2);
  }

  .contact-form textarea {
    resize: vertical;
    min-height: 120px;
  }

  .contact-form .submit-btn {
    width: 100%;
    padding: 15px;
    background-color: #00872E; /* Your theme color */
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s, opacity 0.2s;
  }

  .contact-form .submit-btn:hover:not(:disabled) {
    background-color: #006a24; /* A darker shade */
    transform: translateY(-2px);
  }

  .contact-form .submit-btn:disabled {
    background-color: #999;
    cursor: not-allowed;
    opacity: 0.7;
  }

  /* Animations */
  @keyframes fadeIn {
    to { opacity: 1; }
  }

  @keyframes slideIn {
    to { opacity: 1; transform: translateY(0); }
  }

  /* Responsive Adjustments */
  @media (max-width: 600px) {
    .modal-content {
      padding: 25px 20px;
      width: 95%;
    }
    .modal-header h2 {
      font-size: 1.5rem;
    }
  }
`;


function ContactModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to handle the loading status of the form submission
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent multiple submissions while one is in progress
    if (isSubmitting) return;

    // Set loading state to true to disable button and show feedback
    setIsSubmitting(true);

    try {
      // Make the API call to your Laravel backend
      const response = await fetch('https://api.qr114.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json', // Crucial for Laravel to send back JSON errors
        },
        body: JSON.stringify(formData),
      });

      // Parse the JSON response from the server
      const result = await response.json();

      // Check if the HTTP response status is not OK (e.g., 422, 500)
      if (!response.ok) {
        if (result.errors) {
          // If there are validation errors from Laravel (status 422)
          // Get the very first error message and display it
          const firstError = Object.values(result.errors)[0][0];
          toast.error(firstError);
        } else {
          // For other errors (like 500), display the generic message from Laravel
          toast.error(result.message || 'An unknown server error occurred.');
        }
      } else {
        // If the response is OK (status 200)
        toast.success(result.message);
        onClose(); // Close the modal on success
      }

    } catch (error) {
      // This catches network errors (e.g., no internet) or if the server is down
      console.error('Contact form submission error:', error);
      toast.error('A network error occurred. Please try again later.');
    } finally {
      // This will always run, whether the submission succeeded or failed
      // Re-enable the submit button
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{modalStyles}</style>
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-button" onClick={onClose}>×</button>
          
          <div className="modal-header">
            <h2>Contact Us</h2>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactModal;