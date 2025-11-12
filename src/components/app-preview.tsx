"use client";
import { motion } from "framer-motion";

const AppPreview = () => {
  return (
    <section
      id="preview"
      className="relative w-full py-32 md:py-40 bg-[#fffef7] text-[#1e1e1e] overflow-hidden"
    >
      {/* ===== Background glow layers ===== */}
      <motion.div
        className="absolute top-[-150px] left-[-150px] w-[700px] h-[700px] bg-[#EAAE30]/25 rounded-full blur-[200px] pointer-events-none -z-10"
        animate={{ y: [0, 50, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-150px] right-[-150px] w-[700px] h-[700px] bg-[#7EB5D8]/25 rounded-full blur-[220px] pointer-events-none -z-10"
        animate={{ y: [0, -50, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* floating decorative particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/40 rounded-full blur-[1.5px] pointer-events-none -z-10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.3, 0.9, 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* ===== Section Title ===== */}
      <div className="container mx-auto px-6 md:px-12 text-center mb-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          لمحة من <span className="text-[#EAAE30]">واجهة التطبيق</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-700 text-base sm:text-lg max-w-xl mx-auto"
        >
          تصميم حديث وسهل الاستخدام يضع احتياجاتك في المقدمة — ساهل يجعل كل خدمة
          أقرب إليك.
        </motion.p>
      </div>

      {/* ===== Phone mockups ===== */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 px-6 md:px-12">
        {/* Right phone */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 5 }}
          transition={{ duration: 0.8 }}
          className="relative w-40 sm:w-[200px] md:w-[220px] lg:w-[250px] aspect-9/19 rounded-[2.5rem]  shadow-[0_0_60px_rgba(126,181,216,0.4)] overflow-hidden"
        >
          <img
            src="/screen-dark.png"
            alt="ساهل - تتبع الطلب"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent" />
        </motion.div>

        {/* Center phone (main) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="relative w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] aspect-9/19 rounded-[2.8rem] border-[6px] md:border-[7px] border-gray-900 shadow-[0_0_80px_rgba(234,174,48,0.4)] overflow-hidden"
        >
          <img
            src="/screen-center.png"
            alt="واجهة تطبيق ساهل الرئيسية"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/15 to-transparent" />
        </motion.div>

        {/* Left phone */}
        <motion.div
          initial={{ opacity: 0, x: -60, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, rotate: -4 }}
          transition={{ duration: 0.8 }}
          className="relative w-40 sm:w-[200px] md:w-[220px] lg:w-[250px] aspect-9/19 rounded-[2.5rem] border-[6px] border-gray-800 shadow-[0_0_60px_rgba(126,181,216,0.4)] overflow-hidden"
        >
          <img
            src="/screen-light.png"
            alt="ساهل - اختيار الخدمة"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent" />
        </motion.div>
      </div>

      {/* ===== Subtle bottom glow line ===== */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-[#7EB5D8] via-[#EAAE30] to-[#7EB5D8] opacity-70"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* ===== Floating logo decorations (responsive) ===== */}
      <img
        src="/meta/logo-icon.png"
        alt="ساهل Logo Right"
        className="absolute top-60 md:top-10 right-0 rotate-[-20deg] opacity-25 md:opacity-30 w-[180px] sm:w-[220px] md:w-[300px] h-auto pointer-events-none select-none"
      />
      <img
        src="/meta/logo-icon.png"
        alt="ساهل Logo Left"
        className="absolute top-20 left-0 rotate-20 opacity-25 md:opacity-30 w-[180px] sm:w-[220px] md:w-[300px] h-auto pointer-events-none select-none"
      />
    </section>
  );
};

export default AppPreview;
