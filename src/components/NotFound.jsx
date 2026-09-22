import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Terminal } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-white dark:bg-slate-900 text-slate-800 dark:text-white transition-colors duration-300">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-500/10 dark:bg-violet-500/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-md w-full text-center relative z-10">
 

        {/* 404 Heading with Gradient */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-8xl font-black tracking-tight bg-gradient-to-br from-slate-900 via-violet-800 to-violet-600 dark:from-white dark:via-violet-300 dark:to-violet-500 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        {/* Title & Message */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-bold mt-2 mb-3"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-sm md:text-base"
        >
          The page you are looking for doesn't exist, was removed, or is
          currently under development.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors duration-200 text-sm"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-colors duration-200 text-sm shadow-md shadow-violet-500/20"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
