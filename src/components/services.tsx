const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-linear-to-b from-[#faf9f7] via-[#fffefc] to-[#f8f6f2] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24 flex flex-col items-center text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          خدمات متنوعة تلبي جميع احتياجاتك
        </h2>
        <p className="text-gray-600 max-w-2xl">
          نقدم مجموعة واسعة من الخدمات المصممة لتسهيل حياتك اليومية، من التوصيل
          السريع إلى الدعم الفني المتخصص.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              التوصيل السريع
            </h3>
            <p className="text-gray-600">
              احصل على خدمات التوصيل في نفس اليوم مع ضمان الأمان والسرعة.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              الدعم الفني
            </h3>
            <p className="text-gray-600">
              فريق دعم متخصص جاهز لمساعدتك في أي وقت تحتاج فيه إلى مساعدة تقنية.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              خدمات مخصصة
            </h3>
            <p className="text-gray-600">
              نقدم حلولاً مخصصة تلبي احتياجاتك الفريدة وتساعدك في تحقيق أهدافك.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
