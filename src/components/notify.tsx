"use client";
import { motion } from "framer-motion";

const Download = () => {
  return (
    <section
      id="notify"
      className="relative w-full py-28 md:py-36 bg-linear-to-b from-[#eaf7ff] to-[#f5fbff] text-[#1e1e1e] overflow-hidden"
    >
      {/* Auras */}
      <motion.div
        className="absolute top-[-150px] left-[-150px] w-[700px] h-[700px] bg-[#7EB5D8]/25 rounded-full blur-[200px] pointer-events-none -z-10"
        animate={{ y: [0, 40, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-150px] right-[-150px] w-[700px] h-[700px] bg-[#EAAE30]/30 rounded-full blur-[200px] pointer-events-none -z-10"
        animate={{ y: [0, -40, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      {/* Soft floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full blur-[2px] pointer-events-none -z-10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center max-w-2xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          حمّل التطبيق <span className="text-[#EAAE30]">الآن</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-gray-700 mb-6 leading-relaxed"
        >
          حمّل تطبيق <span className="text-[#7EB5D8] font-semibold">ساهل</span>{" "}
          وابدأ في طلب خدماتك بسهولة. تواصل مباشرة مع أقرب فني بدون وسيط، واتفق
          على السعر والوقت الذي يناسبك.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-800 font-semibold text-lg mb-10"
        >
          متاح الآن على متجر Google Play
          <br />
          وسيتم إطلاق نسخة App Store قريبًا.
        </motion.p>

        {/* Store Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
          {/* Google Play Button */}
          <motion.a
            href="https://play.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-pointer"
          >
            <img
              src="/notify/google.png"
              alt="Google Play"
              className="w-44 md:w-52 drop-shadow-md hover:drop-shadow-xl transition"
            />
          </motion.a>

          {/* App Store Button (disabled) */}
          <motion.div
            className="opacity-60 cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="/notify/ios.png"
              alt="App Store Soon"
              className="w-44 md:w-52 drop-shadow-sm"
              title="ليس متوفر بعد"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Download;
