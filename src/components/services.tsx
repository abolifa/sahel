"use client";
import { motion } from "framer-motion";
import {
  AirVent,
  Axe,
  BrushCleaning,
  Fence,
  PlugZap,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: <PlugZap className="w-10 h-10 text-[#7EB5D8]" />,
    title: "الكهرباء",
    desc: "أعمال الصيانة والتركيب.",
    color: "#7EB5D8",
  },
  {
    icon: <Axe className="w-10 h-10 text-[#EAAE30]" />,
    title: "السباكة",
    desc: "حل مشاكل التسريب والانسداد.",
    color: "#EAAE30",
  },
  {
    icon: <AirVent className="w-10 h-10 text-[#7EB5D8]" />,
    title: "التكييف والتبريد",
    desc: "صيانة وتركيب وتعبئة غاز.",
    color: "#7EB5D8",
  },
  {
    icon: <BrushCleaning className="w-10 h-10 text-[#EAAE30]" />,
    title: "التنظيف",
    desc: "تنظيف المنازل والمكاتب.",
    color: "#EAAE30",
  },
  {
    icon: <Fence className="w-10 h-10 text-[#7EB5D8]" />,
    title: "النجارة والألمنيوم",
    desc: "أبواب – شبابيك – أثاث.",
    color: "#7EB5D8",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-[#EAAE30]" />,
    title: "صيانة الأجهزة المنزلية",
    desc: "غسالات – ثلاجات – أفران.",
    color: "#EAAE30",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-gradient-to-b from-[#ececec] to-[#f5f5f5] py-28 md:py-36 overflow-hidden"
    >
      {/* background auras */}
      <motion.div
        className="absolute top-[-150px] left-[-100px] w-[600px] h-[600px] bg-[#7EB5D8]/20 rounded-full blur-[180px] -z-10"
        animate={{ y: [0, 40, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-200px] right-[-150px] w-[550px] h-[550px] bg-[#EAAE30]/20 rounded-full blur-[160px] -z-10"
        animate={{ y: [0, -40, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
      >
        <span className="text-[#EAAE30]">خدمات</span> تطبيق ساهل
      </motion.h2>

      {/* grid circular cards */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-20">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
            className="relative mx-auto w-64 h-64 bg-white/70 backdrop-blur-md rounded-full shadow-lg
             hover:shadow-[0_0_40px_rgba(234,174,48,0.35)]
             transition-all border border-gray-200 overflow-hidden flex flex-col items-center justify-center text-center cursor-pointer"
          >
            {/* icon wrapper */}
            <motion.div
              className="flex items-center justify-center w-20 h-20 rounded-full mb-4"
              style={{ backgroundColor: `${service.color}15` }}
              whileHover={{ rotate: 10 }}
            >
              {service.icon}
            </motion.div>

            {/* title */}
            <h3
              className="text-2xl font-bold mb-2 text-gray-900"
              style={{
                color: service.color,
              }}
            >
              {service.title}
            </h3>

            {/* desc */}
            <p className="text-gray-700 text-sm px-6 leading-relaxed">
              {service.desc}
            </p>

            {/* glowing hover ring */}
            <div className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition duration-500">
              <div
                className="absolute inset-0 rounded-full blur-[80px]"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${service.color}33 0%, transparent 70%)`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
