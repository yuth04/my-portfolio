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
        "service_qg7a01q", // your service ID
        "template_ww3fmng", // your template ID
        form.current,
        "avDA3Qugc5K0YNMt9" // your user/public key
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
          className="text-4xl font-bold text-orange-500 mb-6"
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
            className="w-full dark:outline-white focus:outline-orange-400 p-3 rounded-md border dark:bg-gray-800 dark:border-gray-700"
          />
          <input
            data-aos="zoom-in-up"
            type="email"
            name="user_email"
            required
            placeholder={t("contact.placeholder_email")}
            className="w-full p-3 dark:outline-white focus:outline-orange-400 rounded-md border dark:bg-gray-800 dark:border-gray-700"
          />
          <textarea
            data-aos="zoom-in-up"
            name="message"
            rows="5"
            required
            placeholder={t("contact.placeholder_message")}
            className="w-full dark:outline-white focus:outline-orange-400 p-3 rounded-md border dark:bg-gray-800 dark:border-gray-700"
          ></textarea>

          <div className="flex justify-center aligns-center">
            <button
              data-aos="zoom-in-up"
              type="submit"
              disabled={loading}
              class="flex items-center  bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white gap-1 px-4 py-2 cursor-pointer  font-semibold tracking-widest rounded-md  duration-300 hover:gap-2 hover:translate-x-3"
            >
              {loading ? t("contact.loading") : t("contact.send_btn")}
              <svg
                class="w-5 h-5"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </button>
          </div>

          {/* <button
            data-aos="zoom-in-up"
            type="submit"
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md"
          >
            {loading ? t("contact.loading") : t("contact.send_btn")}
          </button> */}
        </form>
      </div>
    </section>
  );
};

export default Contact;
