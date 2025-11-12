"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const navs = [
    { label: "الرئيسية", href: "#hero" },
    { label: "عن التطبيق", href: "#about" },
    { label: "مراحل التطبيق", href: "#roadmap" },
    { label: "المميزات", href: "#features" },
    { label: "لمحة سريعة", href: "#preview" },
  ];

  return (
    <footer className="relative w-full bg-[#0f172a] text-white pt-20 pb-10 overflow-hidden">
      {/* ===== Gradient top border ===== */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#7EB5D8] via-[#EAAE30] to-[#7EB5D8]"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* ===== background floating glows ===== */}
      <motion.div
        className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-[#7EB5D8]/20 rounded-full blur-[180px] pointer-events-none -z-10"
        animate={{ y: [0, 50, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-150px] left-[-100px] w-[700px] h-[700px] bg-[#EAAE30]/20 rounded-full blur-[200px] pointer-events-none -z-10"
        animate={{ y: [0, -40, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      {/* ===== Content ===== */}
      <div className="container mx-auto px-6 md:px-12 text-center md:text-right relative z-10">
        {/* Logo and intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-16"
        >
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/meta/logo-white.png"
              alt="تطبيق ساهل"
              className="w-36 mb-4 select-none"
            />
            <p className="text-gray-300 max-w-md leading-relaxed text-sm md:text-base">
              تطبيق <span className="text-[#EAAE30] font-semibold">ساهل</span> —
              منصّة ليبية ذكية تربطك بأفضل الحرفيين والفنيين في مختلف المجالات،
              بخطوات بسيطة وتجربة حديثة.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#EAAE30] mb-2">
              روابط سريعة
            </h4>
            <ul className="space-y-2 text-gray-300">
              {navs.map((item, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-amber-500 rounded-full" />
                  <a
                    href={item.href}
                    className="hover:text-[#7EB5D8] transition duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#EAAE30] mb-2">
              تواصل معنا
            </h4>
            <div className="flex items-center gap-2 text-gray-300">
              <Mail className="w-4 h-4 text-[#7EB5D8]" />
              <span>info@sahel.ly</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone className="w-4 h-4 text-[#7EB5D8]" />
              <span dir="ltr">+218 91 234 5678</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-4 h-4 text-[#7EB5D8]" />
              <span>طرابلس، ليبيا</span>
            </div>
          </div>
        </motion.div>

        {/* Social icons */}
        <div className="flex justify-center md:justify-end gap-4 mb-8">
          {[
            { icon: <Facebook className="w-5 h-5" />, href: "#" },
            { icon: <Instagram className="w-5 h-5" />, href: "#" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 text-white hover:bg-white/10 transition"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 border-t border-white/10 pt-6">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#EAAE30] font-semibold">ساهل</span> — جميع
          الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
