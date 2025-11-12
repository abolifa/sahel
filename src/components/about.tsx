import { motion } from "framer-motion";
import { Wrench, Zap, ShieldCheck } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-[#fffaf0] text-[#1e1e1e] py-28 md:py-36 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        {/* main gradient base */}
        <div className="absolute inset-0 bg-linear-to-br from-[#fffaf0] via-[#FAE6B0]/40 to-[#F5D87A]/60" />
        {/* animated aura */}
        <motion.div
          className="absolute w-[700px] h-[700px] bg-[#7EB5D8]/30 rounded-full blur-[200px] top-[-150px] left-[-150px]"
          animate={{ x: [0, 40, 0], y: [0, 60, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] bg-[#EAAE30]/30 rounded-full blur-[180px] bottom-[-200px] right-[-150px]"
          animate={{ x: [0, -40, 0], y: [0, -50, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* floating geometric shape */}
        <motion.div
          className="absolute top-20 right-1/3 w-24 h-24 bg-[#7EB5D8]/20 rotate-45 rounded-2xl blur-[20px]"
          animate={{
            rotate: [45, 65, 45],
            y: [0, -20, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* main content */}
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 relative z-10">
        {/* left image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-[320px] md:w-[400px] aspect-3/4 rounded-3xl overflow-hidden"
          >
            <img
              src="/suit.png"
              alt="زي العمل الرسمي لتطبيق ساهل"
              className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
            />
            {/* glowing floor reflection */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[150px] bg-[#7EB5D8]/30 blur-[100px] rounded-full"
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            {/* ambient aura */}
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-[#EAAE30]/15 via-transparent to-transparent"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        {/* right text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-center md:text-right space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            عن <span className="text-[#EAAE30]">تطبيق ساهل</span>
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg text-justify">
            تطبيق <span className="font-semibold text-[#7EB5D8]">ساهل</span> هو
            منصّة ذكية تربط المستخدمين بأفضل الحرفيين والفنيين في مختلف المجالات
            — من السباكة والكهرباء إلى الصيانة العامة — بخطوة واحدة.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg text-justify">
            هدفنا تسهيل حياتك اليومية عبر تقديم خدمات موثوقة وسريعة، بواجهة
            حديثة وسهلة الاستخدام، تلبي احتياجاتك بجودة عالية.
          </p>

          {/* feature icons */}
          <div className="grid grid-cols-3 gap-6 pt-6 text-center md:text-right">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="p-3 bg-[#7EB5D8]/10 rounded-2xl">
                <Wrench className="w-8 h-8 text-[#7EB5D8]" />
              </div>
              <p className="font-semibold text-gray-800">حرفيون محترفون</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="p-3 bg-[#EAAE30]/10 rounded-2xl">
                <Zap className="w-8 h-8 text-[#EAAE30]" />
              </div>
              <p className="font-semibold text-gray-800">سرعة في التنفيذ</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="p-3 bg-[#7EB5D8]/10 rounded-2xl">
                <ShieldCheck className="w-8 h-8 text-[#7EB5D8]" />
              </div>
              <p className="font-semibold text-gray-800">خدمة موثوقة وآمنة</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
