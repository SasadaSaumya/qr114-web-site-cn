// src/components/DistributorForm.js

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next"; // 1. Import the hook

function DistributorForm() {
  const { t } = useTranslation(); // 2. Initialize the translation function

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
      const response = await fetch(
        "https://api.qr114.com/api/distributor-contact",
        {
          // Call the new endpoint
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

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
      // 3. Use the translated string for frontend-specific errors
      toast.error(t("distributorForm.networkError"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // 4. Replace all hardcoded text with the t() function
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">{t("distributorForm.nameLabel")}</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder={t("distributorForm.namePlaceholder")}
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
      </div>
      <div className="form-group">
        <label htmlFor="company_name">
          {t("distributorForm.companyLabel")}
        </label>
        <input
          type="text"
          id="company_name"
          name="company_name"
          placeholder={t("distributorForm.companyPlaceholder")}
          value={formData.company_name}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">{t("distributorForm.emailLabel")}</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder={t("distributorForm.emailPlaceholder")}
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">{t("distributorForm.messageLabel")}</label>
        <textarea
          id="message"
          name="message"
          placeholder={t("distributorForm.messagePlaceholder")}
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        ></textarea>
      </div>
      <button type="submit" className="submit-btn" disabled={isSubmitting}>
        {isSubmitting
          ? t("distributorForm.submittingButton")
          : t("distributorForm.submitButton")}
      </button>
    </form>
  );
}

export default DistributorForm;
