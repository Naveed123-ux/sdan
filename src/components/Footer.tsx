import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'الرئيسية', page: 'home' },
    { name: 'أنواع الستائر', page: 'curtain-types' },
    { name: 'من نحن', page: 'about' },
    { name: 'أخبارنا', page: 'news' },
    { name: 'اتصل بنا', page: 'contact' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'ستائر غرف المعيشة',
    'ستائر غرف النوم',
    'ستائر المكاتب',
    'ستائر جاهزة',
    'ستائر مصممة حسب الطلب',
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">ستائر</span>
              </div>
              <div>
                <h3 className="text-xl text-[#d4af37]">ستائر الفخامة</h3>
                <p className="text-xs text-gray-400">الأناقة في كل تفصيلة</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              شركة رائدة في تصميم وتصنيع الستائر الفاخرة منذ أكثر من 15 عاماً، نقدم أرقى
              التصاميم والأقمشة العالمية.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4af37] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4af37] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4af37] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-6 text-[#d4af37]">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigate(link.page)}
                    className="text-gray-400 hover:text-[#d4af37] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl mb-6 text-[#d4af37]">خدماتنا</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-6 text-[#d4af37]">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400" dir="ltr">
                    +966 50 123 4567
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400" dir="ltr">
                    info@luxurycurtains.sa
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">
                    الرياض، حي الملقا
                    <br />
                    شارع الأمير سلطان
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} ستائر الفخامة. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
