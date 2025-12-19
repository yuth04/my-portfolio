import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";

const useContact = () => {
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
  return { form, sent, loading, sendEmail };
};

export default useContact;
