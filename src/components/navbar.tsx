"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navs = [
    { label: "الرئيسية", href: "#hero" },
    { label: "عن التطبيق", href: "#about" },
    { label: "مراحل التطبيق", href: "#roadmap" },
    { label: "المميزات", href: "#features" },
    { label: "لمحة سريعة", href: "#preview" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-[0_2px_20px_rgba(0,0,0,0.05)] py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div
        className={`flex items-center justify-between mx-auto max-w-7xl px-6 transition-all duration-300 ${
          scrolled ? "scale-[0.98]" : "scale-100"
        }`}
      >
        {/* === Logo === */}
        <a href="#hero" className="flex items-center gap-2">
          <motion.img
            src="/meta/logo-colored.png"
            alt="ساهل"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={`select-none transition-all duration-300 ${
              scrolled ? "w-28 md:w-32" : "w-36 md:w-40"
            }`}
          />
        </a>

        {/* === Desktop Nav Links === */}
        <div className="hidden md:flex items-center gap-8 text-md font-medium text-[#1e1e1e]">
          {navs.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="hover:text-[#7EB5D8] transition"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#notify"
            className="px-5 py-2 rounded-full bg-[#7EB5D8] text-white font-normal shadow-md text-sm hover:bg-[#6ca8c9] transition"
          >
            اشترك في الإطلاق
          </a>
        </div>

        {/* === Mobile Menu Button === */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg focus:outline-none"
        >
          {open ? (
            <X className="w-6 h-6 text-[#1e1e1e]" />
          ) : (
            <Menu className="w-6 h-6 text-[#1e1e1e]" />
          )}
        </button>
      </div>

      {/* === Mobile Dropdown === */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center gap-4 py-6 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-lg"
          >
            {navs.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="text-md font-medium text-[#1e1e1e] hover:text-[#7EB5D8] transition"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#notify"
              className="px-6 py-2 text-sm font-normal rounded-full bg-[#7EB5D8] text-white hover:bg-[#6ca8c9] transition"
              onClick={() => setOpen(false)}
            >
              اشترك في الإطلاق
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
