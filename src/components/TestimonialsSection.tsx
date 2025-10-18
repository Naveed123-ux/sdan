import { Card } from './ui/card';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'أحمد السعيد',
    location: 'الرياض',
    rating: 5,
    text: 'خدمة ممتازة وجودة عالية جداً. الستائر أضافت لمسة فخامة رائعة لمنزلي. أنصح بهم بشدة!',
    date: 'منذ شهرين',
  },
  {
    id: 2,
    name: 'فاطمة المطيري',
    location: 'جدة',
    rating: 5,
    text: 'تعاملت معهم في تجهيز ستائر المنزل بالكامل، التصميم راقي والتنفيذ احترافي. شكراً لكم!',
    date: 'منذ 3 أشهر',
  },
  {
    id: 3,
    name: 'محمد العتيبي',
    location: 'الدمام',
    rating: 5,
    text: 'الأقمشة فاخرة والأسعار مناسبة. فريق العمل محترف جداً وملتزم بالمواعيد.',
    date: 'منذ شهر',
  },
  {
    id: 4,
    name: 'نورة الشمري',
    location: 'الرياض',
    rating: 5,
    text: 'سعيدة جداً بالنتيجة! الستائر غيّرت شكل الصالة تماماً. تجربة رائعة من البداية للنهاية.',
    date: 'منذ أسبوعين',
  },
  {
    id: 5,
    name: 'خالد الدوسري',
    location: 'مكة المكرمة',
    rating: 5,
    text: 'أفضل محل ستائر تعاملت معه. الاستشارة مجانية والتركيب احترافي. ماشاء الله عليهم!',
    date: 'منذ شهر',
  },
  {
    id: 6,
    name: 'سارة القحطاني',
    location: 'أبها',
    rating: 5,
    text: 'التصاميم عصرية والجودة ممتازة. فريق محترف وذوق راقي في اختيار الألوان والأقمشة.',
    date: 'منذ 3 أسابيع',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#f4e4c1] rounded-full mb-4">
            <span className="text-[#d4af37]">آراء العملاء</span>
          </div>
          <h2 className="text-3xl md:text-5xl mb-4 text-gray-800">ماذا يقول عملاؤنا</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نفخر بثقة عملائنا وسعادتهم بخدماتنا. اقرأ تجارب عملائنا الكرام
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-6 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-[#faf8f5]"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-[#f4e4c1] rounded-full flex items-center justify-center mb-4">
                <Quote className="w-6 h-6 text-[#d4af37]" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-[#d4af37] text-[#d4af37]'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>

              {/* Customer Info */}
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <div>
                  <h4 className="text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
                <span className="text-xs text-gray-400">{testimonial.date}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-[#f4e4c1] px-8 py-4 rounded-full">
            <Star className="w-6 h-6 fill-[#d4af37] text-[#d4af37]" />
            <div className="text-right">
              <div className="text-2xl text-[#d4af37]">4.9 من 5</div>
              <div className="text-sm text-gray-600">بناءً على 500+ تقييم</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
