import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_qg7a01q",
        "template_ww3fmng",
        form.current,
        "avDA3Qugc5K0YNMt9"
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        form.current.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert(t("contact.error_message"));
        setLoading(false);
      });
  };

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => setSent(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [sent]);

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2
          data-aos="zoom-in-up"
          className="text-3xl md:text-4xl font-bold text-purple-500 mb-6"
        >
          {t("contact.title")}
        </h2>
        <p data-aos="zoom-in-up" className="mb-10 text-lg">
          {t("contact.subtitle")}
        </p>

        {sent && (
          <p className="text-green-500 mb-4 font-semibold transition-opacity duration-500">
            ✅ {t("contact.success_message")}
          </p>
        )}

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            data-aos="zoom-in-up"
            type="text"
            name="user_name"
            required
            placeholder={t("contact.placeholder_name")}
            className="w-full p-3 rounded-md border dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <input
            data-aos="zoom-in-up"
            type="email"
            name="user_email"
            required
            placeholder={t("contact.placeholder_email")}
            className="w-full p-3 rounded-md border dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <textarea
            data-aos="zoom-in-up"
            name="message"
            rows="5"
            required
            placeholder={t("contact.placeholder_message")}
            className="w-full p-3 rounded-md border dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          ></textarea>

          <div  data-aos="zoom-in-up" className="flex justify-center items-center">
            <button
            
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold rounded-md transition-all duration-300 hover:gap-3"
            >
              {loading ? t("contact.loading") : t("contact.send_btn")}
              <svg
                className="w-5 h-5"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
