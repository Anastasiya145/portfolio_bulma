import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const ContactForm: FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (isSubmitted) {
      validateField(name, value);
    }
  };

  const validateField = (name: string, value: string) => {
    let errorMsg = "";

    if (!value) {
      errorMsg = t("contactMeSection.form.errors.required");
    } else if (name === "email" && !validateEmail(value)) {
      errorMsg = t("contactMeSection.form.errors.invalidEmail");
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.subject &&
      formData.message &&
      validateEmail(formData.email)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!isFormValid()) {
      return;
    }

    try {
      const response = await fetch(
        "https://express-form-mailer.vercel.app/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Failed to send email");
      }
    } catch (err) {
      console.error("Internal Server Error", err);
    } finally {
      setFormData(initialFormState);
      setIsSubmitted(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">{t("contactMeSection.form.name")}</label>
        <div className="control">
          <input
            className={`input ${errors.name ? "is-danger" : ""}`}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="help is-danger">{errors.name}</p>}
        </div>
      </div>

      <div className="field">
        <label className="label">{t("contactMeSection.form.email")}</label>
        <div className="control">
          <input
            className={`input ${errors.email ? "is-danger" : ""}`}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="help is-danger">{errors.email}</p>}
        </div>
      </div>

      <div className="field">
        <label className="label">{t("contactMeSection.form.subject")}</label>
        <div className="control">
          <input
            className={`input ${errors.subject ? "is-danger" : ""}`}
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          {errors.subject && <p className="help is-danger">{errors.subject}</p>}
        </div>
      </div>

      <div className="field">
        <label className="label">{t("contactMeSection.form.message")}</label>
        <div className="control">
          <textarea
            className={`textarea ${errors.message ? "is-danger" : ""}`}
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <p className="help is-danger">{errors.message}</p>}
        </div>
      </div>

      <div className="field">
        <div className="control">
          <button
            type="submit"
            className="button is-link"
            disabled={!isFormValid()}
          >
            {t("contactMeSection.sendButton")}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
