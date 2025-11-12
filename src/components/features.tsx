"use client";
import { motion } from "framer-motion";
import {
  MapPin,
  Wrench,
  MessageCircle,
  Clock4,
  ShieldCheck,
  Star,
} from "lucide-react";

const features = [
  {
    icon: <MapPin className="w-8 h-8 text-[#7EB5D8]" />,
    title: "تحديد الموقع بدقة",
    desc: "يعرفك تطبيق ساهل على أقرب فني أو حرفي في منطقتك بكل سهولة وسرعة.",
    color: "#7EB5D8",
  },
  {
    icon: <Wrench className="w-8 h-8 text-[#EAAE30]" />,
    title: "خدمات متنوعة",
    desc: "من السباكة إلى الكهرباء والنجارة، ساهل يجمع كل الخدمات في تطبيق واحد.",
    color: "#EAAE30",
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-[#7EB5D8]" />,
    title: "تواصل مباشر",
    desc: "تواصل مع الفني مباشرة عبر المحادثة أو الاتصال داخل التطبيق دون وسطاء.",
    color: "#7EB5D8",
  },
  {
    icon: <Clock4 className="w-8 h-8 text-[#EAAE30]" />,
    title: "سرعة في التنفيذ",
    desc: "احصل على الخدمة بسرعة فائقة مع إمكانية تتبع حالة طلبك في الوقت الحقيقي.",
    color: "#EAAE30",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#7EB5D8]" />,
    title: "ثقة وأمان",
    desc: "نراجع كل الحرفيين بعناية لضمان جودة الخدمة وأمان المستخدمين.",
    color: "#7EB5D8",
  },
  {
    icon: <Star className="w-8 h-8 text-[#EAAE30]" />,
    title: "تقييمات ومراجعات",
    desc: "اقرأ تقييمات المستخدمين السابقين واختر الحرفي الذي يناسب احتياجاتك.",
    color: "#EAAE30",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative w-full bg-[#FFF9E3] text-[#1e1e1e] py-28 md:py-36 overflow-hidden"
    >
      {/* glowing background */}
      <motion.div
        className="absolute top-[-200px] left-[-100px] w-[700px] h-[700px] bg-[#7EB5D8]/25 rounded-full blur-[200px] -z-10"
        animate={{ y: [0, 40, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-200px] right-[-150px] w-[600px] h-[600px] bg-[#EAAE30]/25 rounded-full blur-[200px] -z-10"
        animate={{ y: [0, -40, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
        >
          <span className="text-[#EAAE30]">مميزات</span> تطبيق ساهل
        </motion.h2>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white/70 backdrop-blur-md border border-gray-200 shadow-lg rounded-3xl p-8 text-center transition-all hover:shadow-[0_0_35px_rgba(234,174,48,0.3)]"
            >
              <motion.div
                className="flex items-center justify-center w-16 h-16 mx-auto mb-5 rounded-2xl"
                style={{ backgroundColor: `${feature.color}20` }}
                whileHover={{ rotate: 10 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{feature.desc}</p>

              {/* glowing ring hover effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition duration-500">
                <div
                  className="absolute inset-0 rounded-3xl blur-[60px]"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${feature.color}33 0%, transparent 70%)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
