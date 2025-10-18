import { Award, Users, Sparkles, TrendingUp } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: Award,
      title: 'خبرة 15 عاماً',
      description: 'في تصميم وتصنيع أرقى أنواع الستائر',
    },
    {
      icon: Sparkles,
      title: 'أقمشة فاخرة',
      description: 'نستخدم أجود الأقمشة العالمية المستوردة',
    },
    {
      icon: Users,
      title: 'فريق محترف',
      description: 'فريق من الخبراء لتلبية جميع احتياجاتك',
    },
    {
      icon: TrendingUp,
      title: 'تصاميم حديثة',
      description: 'نواكب أحدث صيحات الموضة العالمية',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-[#f4e4c1] rounded-full mb-4">
              <span className="text-[#d4af37]">عن الشركة</span>
            </div>
            <h2 className="text-3xl md:text-5xl mb-6 text-gray-800">
              رواد الأناقة في عالم الستائر
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              نحن شركة متخصصة في تصميم وتصنيع الستائر الفاخرة منذ أكثر من 15 عاماً. نقدم لعملائنا
              الكرام أرقى أنواع الأقمشة والتصاميم العصرية التي تناسب جميع الأذواق.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              نحرص على تقديم خدمة متميزة تبدأ من الاستشارة وحتى التركيب، مع ضمان أعلى معايير
              الجودة والاحترافية. ثقة عملائنا هي أغلى ما نملك.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl text-[#d4af37] mb-2">5000+</div>
                <div className="text-gray-600 text-sm">عميل سعيد</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl text-[#d4af37] mb-2">15+</div>
                <div className="text-gray-600 text-sm">سنة خبرة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl text-[#d4af37] mb-2">100%</div>
                <div className="text-gray-600 text-sm">رضا العملاء</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
