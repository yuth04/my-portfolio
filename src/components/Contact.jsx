import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_qg7a01q", // ✅ Replace with your Service ID
        "template_ww3fmng", // ✅ Replace with your Template ID
        form.current,
        "avDA3Qugc5K0YNMt9" // ✅ Replace with your Public Key (User ID)
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        form.current.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Try again.");
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
      className="min-h-screen px-6 py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 data-aos="zoom-in-up" className="text-4xl font-bold text-orange-500 mb-6">Contact Me</h2>
        <p data-aos="zoom-in-up" className="mb-10 text-lg">
          Send me a message and I’ll reply via email!
        </p>

        {sent && (
          <p className="text-green-500 mb-4 font-semibold transition-opacity duration-500">✅ Message sent!</p>
        )}

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input data-aos="zoom-in-up"
            type="text"
            name="user_name"
            required
            placeholder="Your name"
            className="w-full dark:outline-white  focus:outline-orange-400 p-3 rounded-md border dark:bg-gray-800 dark:border-gray-700"
          />
          <input data-aos="zoom-in-up"
            type="email"
            name="user_email"
            required
            placeholder="you@example.com"
            className="w-full p-3 dark:outline-white focus:outline-orange-400 rounded-md border dark:bg-gray-800 dark:border-gray-700"
          />
          <textarea data-aos="zoom-in-up"
            name="message"
            rows="5"
            required
            placeholder="Your message"
            className="w-full dark:outline-white focus:outline-orange-400 p-3 rounded-md border dark:bg-gray-800 dark:border-gray-700"
          ></textarea>
          <button data-aos="zoom-in-up"
            type="submit"
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
