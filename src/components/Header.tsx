import { Menu, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">ستائر</span>
            </div>
            <div>
              <h2 className="text-[#d4af37]">ستائر الفخامة</h2>
              <p className="text-xs text-gray-600">الأناقة في كل تفصيلة</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#d4af37] transition-colors">
              الرئيسية
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-[#d4af37] transition-colors">
              المنتجات
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#d4af37] transition-colors">
              عن الشركة
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-[#d4af37] transition-colors">
              آراء العملاء
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#d4af37] transition-colors">
              تواصل معنا
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span dir="ltr">+966 50 123 4567</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t pt-4">
            <button onClick={() => scrollToSection('home')} className="text-right text-gray-700 hover:text-[#d4af37] py-2">
              الرئيسية
            </button>
            <button onClick={() => scrollToSection('products')} className="text-right text-gray-700 hover:text-[#d4af37] py-2">
              المنتجات
            </button>
            <button onClick={() => scrollToSection('about')} className="text-right text-gray-700 hover:text-[#d4af37] py-2">
              عن الشركة
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-right text-gray-700 hover:text-[#d4af37] py-2">
              آراء العملاء
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-right text-gray-700 hover:text-[#d4af37] py-2">
              تواصل معنا
            </button>
            <div className="flex items-center gap-2 text-sm text-gray-600 justify-end pt-2">
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span dir="ltr">+966 50 123 4567</span>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
