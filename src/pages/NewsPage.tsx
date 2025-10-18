import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';

export function NewsPage() {
  const featuredNews = [
    {
      id: 1,
      title: 'إطلاق مجموعة الستائر الصيفية 2025',
      excerpt: 'نقدم لكم أحدث تشكيلة من الستائر الخفيفة المثالية لفصل الصيف مع ألوان منعشة وتصاميم عصرية',
      image: 'https://images.unsplash.com/photo-1736151621163-028fcc9beb06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMG5ld3N8ZW58MXx8fHwxNzYwNzEyMDc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '15 أكتوبر 2025',
      author: 'فريق التصميم',
      category: 'منتجات جديدة',
    },
    {
      id: 2,
      title: 'افتتاح فرعنا الجديد في مكة المكرمة',
      excerpt: 'يسعدنا الإعلان عن افتتاح فرعنا الخامس في مكة المكرمة لخدمتكم بشكل أفضل',
      image: 'https://images.unsplash.com/photo-1758802580866-c862623b7b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJ0YWlucyUyMHNob3AlMjBzaG93cm9vbXxlbnwxfHx8fDE3NjA3MTIwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '10 أكتوبر 2025',
      author: 'إدارة الشركة',
      category: 'أخبار الشركة',
    },
    {
      id: 3,
      title: 'عروض خاصة بمناسبة اليوم الوطني',
      excerpt: 'احتفالاً باليوم الوطني السعودي، نقدم لكم خصومات تصل إلى 40% على مختارات من الستائر',
      image: 'https://images.unsplash.com/photo-1754611380518-61a923cc47ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbGl2aW5nJTIwcm9vbSUyMGN1cnRhaW5zfGVufDF8fHx8MTc2MDcxMTcwMXww&ixlib=rb-4.1.0&q=80&w=1080',
      date: '5 أكتوبر 2025',
      author: 'قسم المبيعات',
      category: 'عروض',
    },
  ];

  const newsArticles = [
    {
      id: 4,
      title: 'نصائح لاختيار الستائر المناسبة لمنزلك',
      excerpt: 'دليل شامل يساعدك في اختيار الستائر المثالية حسب نوع الغرفة والديكور والإضاءة المطلوبة',
      image: 'https://images.unsplash.com/photo-1621215052063-6ed29c948b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwY3VydGFpbnMlMjBsdXh1cnl8ZW58MXx8fHwxNzYwNzExNzAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '1 أكتوبر 2025',
      author: 'مستشار التصميم',
      category: 'نصائح',
    },
    {
      id: 5,
      title: 'أحدث صيحات الستائر لعام 2025',
      excerpt: 'تعرف على أبرز الاتجاهات العالمية في تصميم الستائر لهذا العام من الألوان والأقمشة والأنماط',
      image: 'https://images.unsplash.com/photo-1758448511348-54b10c30239f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWlnZSUyMGN1cnRhaW5zJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjA3MTE3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '25 سبتمبر 2025',
      author: 'فريق التصميم',
      category: 'موضة',
    },
    {
      id: 6,
      title: 'كيفية العناية بالستائر وتنظيفها',
      excerpt: 'طرق فعالة للحفاظ على ستائرك نظيفة وجميلة لأطول فترة ممكنة مع نصائح الخبراء',
      image: 'https://images.unsplash.com/photo-1610589672541-569e18b299c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGN1cnRhaW5zJTIwaG9tZXxlbnwxfHx8fDE3NjA3MTE3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '20 سبتمبر 2025',
      author: 'خبير الصيانة',
      category: 'نصائح',
    },
    {
      id: 7,
      title: 'فوائد الستائر العازلة للحرارة',
      excerpt: 'كيف تساعد الستائر العازلة في توفير الطاقة وتحسين راحتك في المنزل خلال فصل الصيف',
      image: 'https://images.unsplash.com/photo-1672872889484-e5397dc434de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFja291dCUyMGN1cnRhaW5zfGVufDF8fHx8MTc2MDcxMjA3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      date: '15 سبتمبر 2025',
      author: 'قسم الأبحاث',
      category: 'تقنية',
    },
    {
      id: 8,
      title: 'قصص نجاح عملائنا',
      excerpt: 'تعرف على تجارب عملائنا المميزة وكيف غيرت ستائرنا شكل منازلهم بالكامل',
      image: 'https://images.unsplash.com/photo-1747655759564-00315fb33b86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjdXJ0YWlucyUyMG1vZGVybnxlbnwxfHx8fDE3NjA3MTE3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '10 سبتمبر 2025',
      author: 'فريق العملاء',
      category: 'قصص نجاح',
    },
    {
      id: 9,
      title: 'ورشة عمل مجانية: فن تنسيق الستائر',
      excerpt: 'ندعوكم لحضور ورشة عمل مجانية تقدم نصائح ا��ترافية في تنسيق الستائر مع ديكور المنزل',
      image: 'https://images.unsplash.com/photo-1739272135664-0c6342ffd470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWx2ZXQlMjBjdXJ0YWlucyUyMGx1eHVyeXxlbnwxfHx8fDE3NjA3MTIwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '5 سبتمبر 2025',
      author: 'فريق التدريب',
      category: 'فعاليات',
    },
  ];

  const categories = ['الكل', 'منتجات جديدة', 'أخبار الشركة', 'عروض', 'نصائح', 'موضة', 'تقنية'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center bg-gradient-to-br from-[#d4af37] to-[#b8941f]">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl mb-4">أخبارنا</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            آخر الأخبار والمستجدات في عالم الستائر الفاخرة
          </p>
        </div>
      </section>

      {/* Featured News Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#f4e4c1] rounded-full mb-4">
              <span className="text-[#d4af37]">أهم الأخبار</span>
            </div>
            <h2 className="text-3xl md:text-5xl mb-4 text-gray-800">الأخبار المميزة</h2>
          </div>

          <div className="max-w-5xl mx-auto px-12">
            <Carousel
              opts={{
                loop: true,
                direction: 'rtl',
              }}
              className="w-full"
            >
              <CarouselContent>
                {featuredNews.map((news) => (
                  <CarouselItem key={news.id}>
                    <Card className="overflow-hidden border-none shadow-2xl">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative h-64 md:h-96">
                          <ImageWithFallback
                            src={news.image}
                            alt={news.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 right-4 bg-[#d4af37] text-white px-4 py-2 rounded-full">
                            {news.category}
                          </div>
                        </div>
                        <div className="p-8 flex flex-col justify-between bg-gradient-to-br from-white to-[#faf8f5]">
                          <div>
                            <h3 className="text-2xl md:text-3xl mb-4 text-gray-800">{news.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">{news.excerpt}</p>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{news.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>{news.author}</span>
                              </div>
                            </div>
                          </div>
                          <Button className="bg-[#d4af37] hover:bg-[#b8941f] text-white w-full">
                            اقرأ المزيد
                            <ArrowLeft className="mr-2 w-4 h-4 rotate-180" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="right-0 left-auto" />
              <CarouselNext className="left-0 right-auto" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-[#faf8f5]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? 'default' : 'outline'}
                className={
                  index === 0
                    ? 'bg-[#d4af37] hover:bg-[#b8941f] text-white'
                    : 'border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white'
                }
              >
                <Tag className="w-4 h-4 ml-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#d4af37] text-white px-3 py-1 rounded-full text-sm">
                    {article.category}
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-[#faf8f5]">
                  <h3 className="text-xl mb-3 text-gray-800 group-hover:text-[#d4af37] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full text-[#d4af37] hover:bg-[#faf8f5] hover:text-[#b8941f]"
                  >
                    اقرأ المزيد
                    <ArrowLeft className="mr-2 w-4 h-4 rotate-180" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white px-8 py-6"
            >
              تحميل المزيد من الأخبار
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-br from-[#d4af37] to-[#b8941f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl mb-6">اشترك في نشرتنا الإخبارية</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            احصل على آخر الأخبار والعروض الحصرية مباشرة في بريدك الإلكتروني
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-6 py-4 rounded-lg text-gray-800 text-right"
              dir="ltr"
            />
            <Button className="bg-white text-[#d4af37] hover:bg-gray-100 px-8 py-4">
              اشترك الآن
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
