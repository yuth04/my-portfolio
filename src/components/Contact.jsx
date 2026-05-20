import { useTranslation } from "react-i18next";
import useContact from "../hooks/useContact";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Contact = () => {
  const { t } = useTranslation();
  const { form, sent, loading, sendEmail } = useContact();

  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 py-24 overflow-hidden
                 bg-white dark:bg-gray-900
                 text-gray-900 dark:text-white
                 transition-colors duration-300"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-100 dark:bg-purple-900/20 blur-[120px] opacity-60" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-pink-100 dark:bg-pink-900/20 blur-[90px] opacity-50" />
      </div>

      <div className="relative max-w-2xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5
                       bg-purple-50 dark:bg-purple-900/30
                       border border-purple-200 dark:border-purple-700/50
                       rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-purple-600 dark:text-purple-400">
              {t("contact.title")}
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
          >
            {t("contact.title")}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-base text-gray-500 dark:text-gray-400 leading-relaxed"
          >
            {t("contact.subtitle")}
          </motion.p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gray-50 dark:bg-gray-800/60
                     border border-gray-200 dark:border-gray-700/50
                     rounded-3xl p-8 md:p-10 backdrop-blur-sm"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-5">

            {/* Name */}
            <motion.div variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
                {t("contact.placeholder_name")}
              </label>
              <input
                type="text"
                name="user_name"
                required
                placeholder={t("contact.placeholder_name")}
                className="w-full px-4 py-3 rounded-xl text-sm
                           bg-white dark:bg-gray-900/60
                           border border-gray-200 dark:border-gray-700
                           text-gray-900 dark:text-white
                           placeholder-gray-400 dark:placeholder-gray-600
                           focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500
                           transition duration-200"
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeUp} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
                {t("contact.placeholder_email")}
              </label>
              <input
                type="email"
                name="user_email"
                required
                placeholder={t("contact.placeholder_email")}
                className="w-full px-4 py-3 rounded-xl text-sm
                           bg-white dark:bg-gray-900/60
                           border border-gray-200 dark:border-gray-700
                           text-gray-900 dark:text-white
                           placeholder-gray-400 dark:placeholder-gray-600
                           focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500
                           transition duration-200"
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={fadeUp} custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
                {t("contact.placeholder_message")}
              </label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder={t("contact.placeholder_message")}
                className="w-full px-4 py-3 rounded-xl text-sm resize-none
                           bg-white dark:bg-gray-900/60
                           border border-gray-200 dark:border-gray-700
                           text-gray-900 dark:text-white
                           placeholder-gray-400 dark:placeholder-gray-600
                           focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500
                           transition duration-200"
              />
            </motion.div>

            {/* Divider */}
            <div className=" border-t border-gray-200 dark:border-gray-700/60 pt-2" />

            {/* Submit */}
            <motion.div
              variants={fadeUp}
              custom={6}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex  justify-center"
            >
              <motion.button
                type="submit"
                disabled={loading || sent}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative flex items-center gap-2.5 px-8 py-3
                           bg-purple-600 hover:bg-purple-700
                           disabled:opacity-60 disabled:cursor-not-allowed
                           text-white text-sm font-semibold
                           rounded-xl transition-colors duration-200
                           overflow-hidden group"
              >
                {/* shimmer on hover */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                                 bg-gradient-to-r from-transparent via-white/10 to-transparent
                                 transition-transform duration-700 ease-in-out" />

                <span className="relative">
                  {sent ? "✓ Sent!" : loading ? t("contact.loading") : t("contact.send_btn")}
                </span>

                {!sent && (
                  <svg
                    className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </motion.button>
            </motion.div>

          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;