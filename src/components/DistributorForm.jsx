// src/components/DistributorForm.js

import React, { useState } from "react";
import { toast } from "react-hot-toast";

function DistributorForm() {
  const [formData, setFormData] = useState({
    name: "",
    company_name: "", // Use snake_case to match Laravel validation
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.qr114.com/api/distributor-contact", {
        // Call the new endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.errors) {
          const firstError = Object.values(result.errors)[0][0];
          toast.error(firstError);
        } else {
          toast.error(result.message || "An unknown server error occurred.");
        }
      } else {
        toast.success(result.message);
        // Reset form on success
        setFormData({ name: "", company_name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Distributor form submission error:", error);
      toast.error("A network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
      </div>
      <div className="form-group">
        <label htmlFor="company_name">Company Name</label>
        <input
          type="text"
          id="company_name"
          name="company_name" // snake_case
          placeholder="Enter your Company Name"
          value={formData.company_name}
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
          placeholder="Enter your email"
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
          placeholder="Enter your message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        ></textarea>
      </div>
      <button type="submit" className="submit-btn" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export default DistributorForm;
