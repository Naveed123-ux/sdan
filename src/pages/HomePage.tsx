import { HeroSection } from '../components/HeroSection';
import { ProductsSection } from '../components/ProductsSection';
import { ProductCarousel } from '../components/ProductCarousel';
import { AboutSection } from '../components/AboutSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Sparkles, Award, TrendingUp } from 'lucide-react';

export function HomePage() {
  const heroImage =
    'https://images.unsplash.com/photo-1754611380518-61a923cc47ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjdXJ0YWlucyUyMGludGVyaW9yfGVufDF8fHx8MTc2MDYxODQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080';

  const products = [
    {
      id: 1,
      title: 'ستائر غرفة المعيشة الفاخرة',
      category: 'غرف المعيشة',
      price: '2,500',
      image:
        'https://images.unsplash.com/photo-1754611380518-61a923cc47ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbGl2aW5nJTIwcm9vbSUyMGN1cnRhaW5zfGVufDF8fHx8MTc2MDcxMTcwMXww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
    },
    {
      id: 2,
      title: 'ستائر غرفة النوم الأنيقة',
      category: 'غرف النوم',
      price: '1,800',
      image:
        'https://images.unsplash.com/photo-1621215052063-6ed29c948b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwY3VydGFpbnMlMjBsdXh1cnl8ZW58MXx8fHwxNzYwNzExNzAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
    },
    {
      id: 3,
      title: 'ستائر المكاتب العصرية',
      category: 'المكاتب',
      price: '2,200',
      image:
        'https://images.unsplash.com/photo-1747655759564-00315fb33b86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjdXJ0YWlucyUyMG1vZGVybnxlbnwxfHx8fDE3NjA3MTE3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
    },
    {
      id: 4,
      title: 'ستائر بيج كلاسيكية',
      category: 'تصميم خاص',
      price: '3,000',
      image:
        'https://images.unsplash.com/photo-1758448511348-54b10c30239f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWlnZSUyMGN1cnRhaW5zJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjA3MTE3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
    },
    {
      id: 5,
      title: 'ستائر بيضاء راقية',
      category: 'جاهزة',
      price: '1,500',
      image:
        'https://images.unsplash.com/photo-1610589672541-569e18b299c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGN1cnRhaW5zJTIwaG9tZXxlbnwxfHx8fDE3NjA3MTE3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4,
    },
    {
      id: 6,
      title: 'ستائر فخمة للصالات',
      category: 'غرف المعيشة',
      price: '3,500',
      image:
        'https://images.unsplash.com/photo-1754611380518-61a923cc47ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjdXJ0YWlucyUyMGludGVyaW9yfGVufDF8fHx8MTc2MDYxODQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
    },
  ];

  const featuredProducts = products.slice(0, 6);

  return (
    <>
      <HeroSection heroImage={heroImage} />

      {/* Featured Products Carousel */}
      <section className="py-20 bg-gradient-to-b from-white to-[#faf8f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#f4e4c1] rounded-full mb-4">
              <span className="text-[#d4af37]">منتجاتنا المميزة</span>
            </div>
            <h2 className="text-3xl md:text-5xl mb-4 text-gray-800">أحدث التصاميم</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اكتشف مجموعتنا الحصرية من الستائر الفاخرة
            </p>
          </div>
          <ProductCarousel products={featuredProducts} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#f4e4c1] rounded-full mb-4">
              <span className="text-[#d4af37]">لماذا نحن</span>
            </div>
            <h2 className="text-3xl md:text-5xl mb-4 text-gray-800">ما يميزنا</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl mb-3 text-gray-800">أقمشة فاخرة</h3>
              <p className="text-gray-600 leading-relaxed">
                نستخدم أجود أنواع الأقمشة المستوردة من أفضل المصانع العالمية
              </p>
            </Card>

            <Card className="p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl mb-3 text-gray-800">جودة مضمونة</h3>
              <p className="text-gray-600 leading-relaxed">
                ضمان شامل على جميع منتجاتنا مع خدمة ما بعد البيع المتميزة
              </p>
            </Card>

            <Card className="p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl mb-3 text-gray-800">تصاميم عصرية</h3>
              <p className="text-gray-600 leading-relaxed">
                نواكب أحدث صيحات الموضة العالمية في تصميم الستائر
              </p>
            </Card>
          </div>
        </div>
      </section>

      <ProductsSection products={products} />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
