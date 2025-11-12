"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { toast } from "sonner";

const Notify = () => {
  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("تم الاشتراك بنجاح! سنوافيك بالتحديثات.");
  };
  return (
    <section
      id="notify"
      className="relative w-full py-28 md:py-36 bg-[#FFF9E3] text-[#1e1e1e] overflow-hidden"
    >
      {/* ===== Background Auras ===== */}
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

      {/* subtle particle sparks */}
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

      {/* ===== Content ===== */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          كن أول من <span className="text-[#EAAE30]">يعرف</span> عند الإطلاق
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-gray-700 mb-10 max-w-lg leading-relaxed"
        >
          اشترك الآن ليصلك إشعار فور إطلاق تطبيق{" "}
          <span className="text-[#7EB5D8] font-semibold">ساهل</span> رسمياً.
        </motion.p>

        {/* form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          onSubmit={handleClick}
          className="flex flex-col sm:flex-row items-stretch sm:items-center w-full max-w-xl bg-white/70 backdrop-blur-md border border-gray-200 shadow-md rounded-2xl sm:rounded-full overflow-hidden"
        >
          {/* Input field */}
          <div className="flex items-center gap-2 px-4 py-3 w-full">
            <Mail className="w-5 h-5 text-[#7EB5D8] shrink-0" />
            <input
              type="email"
              required
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-500 text-base sm:text-lg"
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="mt-2 sm:mt-0 sm:ml-2 px-6 py-3 text-base sm:text-lg rounded-xl sm:rounded-full bg-[#7EB5D8] text-white font-semibold shadow-md hover:bg-[#6ca8c9] transition-all duration-300"
          >
            أعلِمني
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Notify;
