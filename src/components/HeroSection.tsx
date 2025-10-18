import { Button } from './ui/button';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  heroImage: string;
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={heroImage}
          alt="ستائر فاخرة"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mr-auto text-right text-white">
          <div className="flex items-center gap-2 justify-end mb-4">
            <span className="text-[#f4e4c1]">تصميم حصري</span>
            <Sparkles className="w-5 h-5 text-[#d4af37]" />
          </div>
          <h1 className="text-4xl md:text-6xl mb-6 text-white">
            حوّل منزلك بلمسة من الأناقة
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            اكتشف مجموعتنا الفاخرة من الستائر المصممة خصيصاً لتضيف الدفء والفخامة لكل ركن في منزلك
          </p>
          <div className="flex gap-4 justify-end">
            <Button
              onClick={() => scrollToSection('products')}
              className="bg-[#d4af37] hover:bg-[#b8941f] text-white px-8 py-6"
            >
              اكتشف المنتجات
              <ArrowLeft className="mr-2 w-5 h-5 rotate-180" />
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6"
            >
              تواصل معنا
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#faf8f5] to-transparent z-0"></div>
    </section>
  );
}
