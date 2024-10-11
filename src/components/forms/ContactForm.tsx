import classNames from "classnames";
import { useSnackbar } from "notistack";
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
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    validateField(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateField = (name: string, value: string) => {
    let errorMsg = "";

    if (!value) {
      errorMsg = t("contactMeSection.form.errors.required");
    } else if (name === "email" && !validateEmail(value)) {
      errorMsg = t("contactMeSection.form.errors.invalidEmail");
    }

    console.log(errorMsg, name, value);

    setFormErrors((prev) => ({ ...prev, [name]: errorMsg }));
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

    if (!isFormValid()) {
      return;
    }

    try {
      setIsLoading(true);

      await fetch("https://express-form-mailer.vercel.app/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      enqueueSnackbar({
        variant: "error",
        message: err as string,
      });
    } finally {
      setIsLoading(false);
      setFormData(initialFormState);

      enqueueSnackbar({
        variant: "success",
        message: t("contactMeSection.form.emailSent"),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">{t("contactMeSection.form.name")}</label>
        <div className="control">
          <input
            className={`input ${formErrors.name ? "is-danger" : ""}`}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {formErrors.name && (
            <p className="help is-danger">{formErrors.name}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label className="label">{t("contactMeSection.form.email")}</label>
        <div className="control">
          <input
            className={`input ${formErrors.email ? "is-danger" : ""}`}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {formErrors.email && (
            <p className="help is-danger">{formErrors.email}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label className="label">{t("contactMeSection.form.subject")}</label>
        <div className="control">
          <input
            className={`input ${formErrors.subject ? "is-danger" : ""}`}
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          {formErrors.subject && (
            <p className="help is-danger">{formErrors.subject}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label className="label">{t("contactMeSection.form.message")}</label>
        <div className="control">
          <textarea
            className={`textarea ${formErrors.message ? "is-danger" : ""}`}
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {formErrors.message && (
            <p className="help is-danger">{formErrors.message}</p>
          )}
        </div>
      </div>

      <div className="field">
        <div className="control">
          <button
            type="submit"
            className={classNames("button is-link", {
              "is-loading": isLoading,
            })}
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
