import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import FooterIcons from "./FooterIcons";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Copy,
  Check,
} from "lucide-react";
import { containerVariants, itemVariants } from "./motion";
import toast from "react-hot-toast";

const linkIcons = {
  home: <Home size={14} />,
  about: <User size={14} />,
  service: <Briefcase size={14} />,
  project: <FolderOpen size={14} />,
  contact: <Mail size={14} />,
};

const Footer = () => {
  const { t } = useTranslation();
  const [copiedItem, setCopiedItem] = useState(null);

  const lists = [
    { key: "home", label: t("footer.links.home") },
    { key: "about", label: t("footer.links.about") },
    { key: "service", label: t("footer.links.service") },
    { key: "project", label: t("footer.links.project") },
    { key: "contact", label: t("footer.links.contact") },
  ];

  const info = ["+855 86 721 976", "yuth.code@gmail.com"];

  const handleCopy = async (value, key) => {
    await navigator.clipboard.writeText(value);
    setCopiedItem(key);
    toast.success("Copied!");
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <footer
      style={{
        background: "#0a0a0f",
        color: "#c8c8d8",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle top noise line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, #6c47ff44 30%, #a78bfa88 50%, #6c47ff44 70%, transparent 100%)",
        }}
      />

      {/* Ambient glow blobs */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "15%",
          width: "320px",
          height: "320px",
          background: "radial-gradient(circle, #6c47ff18 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "10%",
          width: "240px",
          height: "240px",
          background: "radial-gradient(circle, #a78bfa0f 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "72px 40px 48px",
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr",
          gap: "64px",
        }}
        className="footer-grid"
      >
        {/* ── Brand ── */}
        <motion.div variants={itemVariants}>
          {/* Logo wordmark */}
          <div style={{ marginBottom: "20px" }}>
            <span
              style={{
                fontSize: "26px",
                fontWeight: "800",
                letterSpacing: "-0.03em",
                background: "linear-gradient(135deg, #ffffff 30%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {t("footer.name")}
            </span>
            <span
              style={{
                display: "inline-block",
                marginLeft: "8px",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#7c5cfc",
                verticalAlign: "middle",
                marginBottom: "4px",
              }}
            />
          </div>

          <p
            style={{
              fontSize: "13.5px",
              lineHeight: "1.75",
              color: "#7878a0",
              maxWidth: "260px",
              marginBottom: "32px",
            }}
          >
            {t("footer.tagline")}
          </p>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "10px" }}>
            <FooterIcons />
          </div>
        </motion.div>

        {/* ── Navigation ── */}
        <motion.div variants={itemVariants}>
          <p
            style={{
              fontSize: "10px",
              fontWeight: "700",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#7c5cfc",
              marginBottom: "24px",
            }}
          >
            Navigation
          </p>

          <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {lists.map((item, i) => (
              <motion.a
                key={item.key}
                href={`#${item.key}`}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
                whileHover={{ x: 4 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "9px 12px",
                  borderRadius: "8px",
                  color: "#8888aa",
                  textDecoration: "none",
                  fontSize: "13.5px",
                  fontWeight: "500",
                  transition: "color 0.2s, background 0.2s",
                  width: "fit-content",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#e0e0f0";
                  e.currentTarget.style.background = "#ffffff08";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#8888aa";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <span style={{ color: "#6c47ff", opacity: 0.8 }}>
                  {linkIcons[item.key]}
                </span>
                {item.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>

        {/* ── Contact ── */}
        <motion.div variants={itemVariants}>
          <p
            style={{
              fontSize: "10px",
              fontWeight: "700",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#7c5cfc",
              marginBottom: "24px",
            }}
          >
            Get In Touch
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {/* Email */}
            <motion.button
              whileHover={{ x: 4 }}
              onClick={() => handleCopy(info[1], "email")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 14px",
                borderRadius: "10px",
                border: "1px solid #ffffff0d",
                background: "#ffffff05",
                color: "#9898b8",
                fontSize: "13px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.2s",
                width: "100%",
                textAlign: "left",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#7c5cfc44";
                e.currentTarget.style.background = "#7c5cfc0d";
                e.currentTarget.style.color = "#e0e0f0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#ffffff0d";
                e.currentTarget.style.background = "#ffffff05";
                e.currentTarget.style.color = "#9898b8";
              }}
            >
              <Mail size={14} style={{ color: "#7c5cfc", flexShrink: 0 }} />
              <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {info[1]}
              </span>
              {copiedItem === "email" ? (
                <Check size={13} style={{ color: "#7c5cfc", flexShrink: 0 }} />
              ) : (
                <Copy size={13} style={{ opacity: 0.4, flexShrink: 0 }} />
              )}
            </motion.button>

            {/* Phone */}
            <motion.button
              whileHover={{ x: 4 }}
              onClick={() => handleCopy(info[0], "phone")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 14px",
                borderRadius: "10px",
                border: "1px solid #ffffff0d",
                background: "#ffffff05",
                color: "#9898b8",
                fontSize: "13px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.2s",
                width: "100%",
                textAlign: "left",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#7c5cfc44";
                e.currentTarget.style.background = "#7c5cfc0d";
                e.currentTarget.style.color = "#e0e0f0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#ffffff0d";
                e.currentTarget.style.background = "#ffffff05";
                e.currentTarget.style.color = "#9898b8";
              }}
            >
              <Phone size={14} style={{ color: "#7c5cfc", flexShrink: 0 }} />
              <span style={{ flex: 1 }}>{info[0]}</span>
              {copiedItem === "phone" ? (
                <Check size={13} style={{ color: "#7c5cfc", flexShrink: 0 }} />
              ) : (
                <Copy size={13} style={{ opacity: 0.4, flexShrink: 0 }} />
              )}
            </motion.button>

            {/* Location */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 14px",
                borderRadius: "10px",
                border: "1px solid #ffffff07",
                background: "#ffffff03",
                color: "#6a6a88",
                fontSize: "13px",
                fontWeight: "500",
              }}
            >
              <MapPin size={14} style={{ color: "#7c5cfc", flexShrink: 0 }} />
              <span>Phnom Penh, Cambodia</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Bottom bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{
          borderTop: "1px solid #ffffff09",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            color: "#4a4a68",
            letterSpacing: "0.02em",
          }}
        >
          &copy; {new Date().getFullYear()} Phearak YuTh. {t("footer.copyright")}
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 8px #22c55e88",
              display: "inline-block",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          <span style={{ fontSize: "12px", color: "#4a4a68" }}>
            Available for work
          </span>
        </div>
      </motion.div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&display=swap');

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 48px 24px 32px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;