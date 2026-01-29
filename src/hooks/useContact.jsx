import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const useContact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  // Email format check
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const email = form.current.user_email.value;

    if (!isValidEmail(email)) {
      toast.error("Invalid email address");
      return;
    }

    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_qg7a01q",
        "template_ww3fmng",
        form.current,
        "avDA3Qugc5K0YNMt9",
      );

      toast.success("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message!");
    } finally {
      setLoading(false);
    }
  };

  return { form, loading, sendEmail };
};

export default useContact;
