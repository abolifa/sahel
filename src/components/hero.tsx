import { motion } from "framer-motion";

const Hero = () => {
  const handleSoonEffect = () => {};
  return (
    <section
      id="hero"
      // #F5D87A
      className="relative flex flex-col md:flex-row items-center justify-around min-h-dvh overflow-hidden bg-linear-to-b from-[#f3f3f3] to-[#e9e9e9] text-[#1e1e1e] px-6 md:px-16 lg:px-24"
    >
      {/* background pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,#7EB5D8_1px,transparent_0)] bg-size-[28px_28px] pointer-events-none" />

      {/* floating auras */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-[#7EB5D8]/20 rounded-full blur-[140px] top-[-100px] left-[-100px] pointer-events-none"
        animate={{ y: [0, 30, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-[#EAAE30]/25 rounded-full blur-[120px] bottom-[-100px] -right-20 pointer-events-none"
        animate={{ y: [0, -30, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* left column — text + logo */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center items-center text-center max-w-lg space-y-6 mt-20 md:mt-0 relative z-10"
      >
        <motion.img
          src="/meta/logo-icon.png"
          alt="ساهل"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-32 md:w-48 mb-3 select-none"
        />

        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-800">
          خدماتك أصبحت <span className="text-[#7EB5D8]">أسهل</span> مع{" "}
          <span className="text-[#EAAE30]">ساهل</span>
        </h1>

        <div className="flex flex-wrap gap-4 pt-4">
          <button
            onClick={handleSoonEffect}
            className="px-8 py-3 rounded-full bg-[#7EB5D8] text-gray-900 font-semibold shadow-lg shadow-[#7EB5D8]/20 hover:shadow-[#7EB5D8]/50 transition-all cursor-pointer"
          >
            حمّل التطبيق
          </button>
          <button className="px-8 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-semibold hover:bg-[#EAAE30]/10 transition-all cursor-pointer">
            اكتشف المزيد
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 80, rotate: 10, y: 40 }}
        animate={{ opacity: 1, x: 0, rotate: 5, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="hidden md:block relative w-70 aspect-9/19
             -rotate-12
               overflow-hidden  
             pointer-events-none mt-10"
      >
        <div className="absolute -inset-6" />
        <img
          src="/hero.png"
          alt="تطبيق ساهل"
          className="relative w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
