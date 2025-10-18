import { Menu, Phone, ChevronDown, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCurtainTypesOpen, setIsCurtainTypesOpen] = useState(false);

  const curtainTypes = [
    { name: 'ستائر غرف المعيشة', slug: 'curtain-types', type: 'living' },
    { name: 'ستائر غرف النوم', slug: 'curtain-types', type: 'bedroom' },
    { name: 'ستائر المكاتب', slug: 'curtain-types', type: 'office' },
    { name: 'ستائر التعتيم', slug: 'curtain-types', type: 'blackout' },
    { name: 'الستائر الشفافة', slug: 'curtain-types', type: 'sheer' },
    { name: 'ستائر المخمل', slug: 'curtain-types', type: 'velvet' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    setIsCurtainTypesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">ستائر</span>
            </div>
            <div>
              <h2 className="text-[#d4af37]">ستائر الفخامة</h2>
              <p className="text-xs text-gray-600">الأناقة في كل تفصيلة</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8 items-center">
            <button
              onClick={() => handleNavigate('home')}
              className={`transition-colors ${
                currentPage === 'home'
                  ? 'text-[#d4af37]'
                  : 'text-gray-700 hover:text-[#d4af37]'
              }`}
            >
              الرئيسية
            </button>

            {/* Dropdown for Curtain Types */}
            <div
              className="relative"
              onMouseEnter={() => setIsCurtainTypesOpen(true)}
              onMouseLeave={() => setIsCurtainTypesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 transition-colors ${
                  currentPage === 'curtain-types'
                    ? 'text-[#d4af37]'
                    : 'text-gray-700 hover:text-[#d4af37]'
                }`}
              >
                أنواع الستائر
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              {isCurtainTypesOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2">
                  {curtainTypes.map((type, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavigate(type.slug)}
                      className="w-full text-right px-4 py-2.5 text-gray-700 hover:bg-[#faf8f5] hover:text-[#d4af37] transition-colors"
                    >
                      {type.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigate('about')}
              className={`transition-colors ${
                currentPage === 'about'
                  ? 'text-[#d4af37]'
                  : 'text-gray-700 hover:text-[#d4af37]'
              }`}
            >
              من نحن
            </button>

            <button
              onClick={() => handleNavigate('news')}
              className={`transition-colors ${
                currentPage === 'news'
                  ? 'text-[#d4af37]'
                  : 'text-gray-700 hover:text-[#d4af37]'
              }`}
            >
              أخبارنا
            </button>

            <button
              onClick={() => handleNavigate('contact')}
              className={`transition-colors ${
                currentPage === 'contact'
                  ? 'text-[#d4af37]'
                  : 'text-gray-700 hover:text-[#d4af37]'
              }`}
            >
              اتصل بنا
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span dir="ltr">+966 50 123 4567</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-2 border-t pt-4">
            <button
              onClick={() => handleNavigate('home')}
              className={`text-right py-2.5 px-2 rounded-lg transition-colors ${
                currentPage === 'home'
                  ? 'bg-[#faf8f5] text-[#d4af37]'
                  : 'text-gray-700 hover:bg-[#faf8f5]'
              }`}
            >
              الرئيسية
            </button>

            {/* Mobile Curtain Types */}
            <div>
              <button
                onClick={() => setIsCurtainTypesOpen(!isCurtainTypesOpen)}
                className="w-full flex items-center justify-between text-right py-2.5 px-2 rounded-lg text-gray-700 hover:bg-[#faf8f5]"
              >
                أنواع الستائر
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isCurtainTypesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isCurtainTypesOpen && (
                <div className="mr-4 mt-1 flex flex-col gap-1">
                  {curtainTypes.map((type, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavigate(type.slug)}
                      className="text-right py-2 px-3 rounded-lg text-sm text-gray-600 hover:bg-[#faf8f5] hover:text-[#d4af37] transition-colors"
                    >
                      {type.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigate('about')}
              className={`text-right py-2.5 px-2 rounded-lg transition-colors ${
                currentPage === 'about'
                  ? 'bg-[#faf8f5] text-[#d4af37]'
                  : 'text-gray-700 hover:bg-[#faf8f5]'
              }`}
            >
              من نحن
            </button>

            <button
              onClick={() => handleNavigate('news')}
              className={`text-right py-2.5 px-2 rounded-lg transition-colors ${
                currentPage === 'news'
                  ? 'bg-[#faf8f5] text-[#d4af37]'
                  : 'text-gray-700 hover:bg-[#faf8f5]'
              }`}
            >
              أخبارنا
            </button>

            <button
              onClick={() => handleNavigate('contact')}
              className={`text-right py-2.5 px-2 rounded-lg transition-colors ${
                currentPage === 'contact'
                  ? 'bg-[#faf8f5] text-[#d4af37]'
                  : 'text-gray-700 hover:bg-[#faf8f5]'
              }`}
            >
              اتصل بنا
            </button>

            <div className="flex items-center gap-2 text-sm text-gray-600 justify-end pt-2 mt-2 border-t">
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span dir="ltr">+966 50 123 4567</span>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
