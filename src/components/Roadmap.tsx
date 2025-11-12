"use client";
import { motion } from "framer-motion";
import { Lightbulb, Wrench, Smartphone, Rocket } from "lucide-react";

const milestones = [
  {
    icon: <Lightbulb className="w-8 h-8 text-[#EAAE30]" />,
    title: "بداية الفكرة",
    desc: "ولدت فكرة ساهل من حاجة حقيقية لتبسيط الوصول إلى الفنيين والحرفيين في ليبيا بطريقة موثوقة وسهلة.",
  },
  {
    icon: <Wrench className="w-8 h-8 text-[#7EB5D8]" />,
    title: "التحضير والبناء",
    desc: "بدأنا في تصميم المنصة وتجربة الواجهة لتقديم تطبيق عصري يدمج بين السرعة والجمال في الأداء.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-[#EAAE30]" />,
    title: "التطوير والتجربة",
    desc: "نقوم حالياً بتطوير تطبيق ساهل باحترافية عالية واختباره لضمان تجربة استخدام سلسة وآمنة.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-[#7EB5D8]" />,
    title: "الإطلاق القادم",
    desc: "قريباً سيتم إطلاق ساهل رسمياً — لتكون الخدمات في متناول يدك أينما كنت.",
  },
];

const Roadmap = () => {
  return (
    <section
      id="roadmap"
      className="relative w-full py-24 md:py-40 bg-[#FDF8E9] overflow-hidden"
    >
      {/* === Background Auras (lighter on mobile) === */}
      <motion.div
        className="absolute top-[-150px] left-[-150px] w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-[#7EB5D8]/25 rounded-full blur-[120px] sm:blur-[180px] md:blur-[200px] z-0"
        animate={{ y: [0, 60, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-200px] right-[-150px] w-[350px] sm:w-[600px] md:w-[700px] h-[350px] sm:h-[600px] md:h-[700px] bg-[#EAAE30]/25 rounded-full blur-[120px] sm:blur-[200px] z-0"
        animate={{ y: [0, -60, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* === Floating Shapes (fewer on mobile) === */}
      {[
        "top-[15%] left-[10%] bg-[#EAAE30]/30 rounded-3xl w-10 h-10 sm:w-14 sm:h-14 rotate-45 blur-sm",
        "top-[25%] right-[8%] bg-[#7EB5D8]/30 rounded-full w-12 h-12 sm:w-16 sm:h-16 blur-md",
        "bottom-[20%] left-[6%] bg-[#EAAE30]/25 rounded-full w-10 h-10 sm:w-14 sm:h-14 blur-sm",
        "bottom-[30%] right-[10%] bg-[#7EB5D8]/25 rounded-3xl w-10 h-10 sm:w-14 sm:h-14 rotate-12 blur-sm",
      ].map((cls, i) => (
        <motion.div
          key={i}
          className={`absolute ${cls} z-0`}
          animate={{
            y: [0, 25, 0],
            x: [0, i % 2 === 0 ? 15 : -15, 0],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 8 + i * 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* === Title === */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
        >
          رحلة <span className="text-[#EAAE30]">تطبيق ساهل</span>
        </motion.h2>

        {/* === Timeline === */}
        <div className="relative max-w-3xl mx-auto">
          {/* Glowing line (hidden on small screens) */}
          <motion.div
            className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-[#7EB5D8] via-[#EAAE30] to-[#7EB5D8] rounded-full shadow-[0_0_15px_rgba(126,181,216,0.5)] z-1"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <div className="flex flex-col gap-14 sm:gap-20">
            {milestones.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col sm:flex-row ${
                  i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                } items-center gap-6`}
              >
                {/* Connector dot (hidden on mobile) */}
                <motion.div
                  className="hidden sm:block absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-[3px] border-white bg-[#7EB5D8] shadow-[0_0_20px_rgba(126,181,216,0.7)] z-2"
                  whileInView={{ scale: [0.9, 1.2, 1] }}
                  transition={{ duration: 1 }}
                />

                {/* Card */}
                <div
                  className={`bg-white/80 backdrop-blur-md border border-gray-200 shadow-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 w-full sm:w-[45%] hover:shadow-[0_0_25px_rgba(234,174,48,0.4)] transition-all z-3 ${
                    i % 2 === 0 ? "sm:ml-12" : "sm:mr-12"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2 sm:mb-3">
                    {item.icon}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
