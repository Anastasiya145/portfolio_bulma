import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm: FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Failed to send email");
      }
    } catch (err) {
      console.error("Internal Server Error", err);
    } finally {
      setFormData(initialFormState);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">{t("contactMeSection.form.name")}</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">{t("contactMeSection.form.email")}</label>
        <div className="control">
          <input
            className="input"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">{t("contactMeSection.form.subject")}</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">{t("contactMeSection.form.message")}</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <button type="submit" className="button is-link">
            {t("contactMeSection.sendButton")}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
