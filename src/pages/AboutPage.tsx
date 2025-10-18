import { Award, Users, Sparkles, TrendingUp, Target, Heart, Shield, Clock } from 'lucide-react';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'رؤيتنا',
      description: 'أن نكون الخيار الأول للعملاء في المملكة عند البحث عن الستائر الفاخرة والتصاميم العصرية',
    },
    {
      icon: Heart,
      title: 'مهمتنا',
      description: 'تقديم منتجات عالية الجودة وخدمة متميزة تفوق توقعات عملائنا في كل مرة',
    },
    {
      icon: Shield,
      title: 'الجودة',
      description: 'نلتزم بأعلى معايير الجودة في اختيار الأقمشة والتصنيع والتركيب',
    },
    {
      icon: Users,
      title: 'العملاء',
      description: 'رضا عملائنا هو هدفنا الأول ونسعى دائماً لتجاوز توقعاتهم',
    },
  ];

  const features = [
    {
      icon: Award,
      title: 'خبرة 15 عاماً',
      description: 'في تصميم وتصنيع أرقى أنواع الستائر في المملكة',
      stat: '15+',
      statLabel: 'سنة خبرة',
    },
    {
      icon: Sparkles,
      title: 'أقمشة فاخرة',
      description: 'نستخدم أجود الأقمشة العالمية المستوردة من أوروبا وآسيا',
      stat: '100+',
      statLabel: 'نوع قماش',
    },
    {
      icon: Users,
      title: 'فريق محترف',
      description: 'فريق من الخبراء والمصممين لتلبية جميع احتياجاتك',
      stat: '50+',
      statLabel: 'موظف محترف',
    },
    {
      icon: TrendingUp,
      title: 'تصاميم حديثة',
      description: 'نواكب أحدث صيحات الموضة العالمية في عالم الستائر',
      stat: '500+',
      statLabel: 'تصميم فريد',
    },
  ];

  const timeline = [
    { year: '2009', event: 'تأسيس الشركة', description: 'بدأت رحلتنا بمحل صغير في الرياض' },
    { year: '2012', event: 'التوسع الأول', description: 'افتتاح فرعين جديدين في جدة والدمام' },
    { year: '2015', event: 'الشراكات الدولية', description: 'توقيع عقود مع موردين عالميين' },
    { year: '2018', event: 'الجوائز والتكريم', description: 'الفوز بجائزة أفضل شركة ستائر' },
    { year: '2020', event: 'التحول الرقمي', description: 'إطلاق المتجر الإلكتروني' },
    { year: '2025', event: 'الريادة', description: 'أكثر من 5000 عميل سعيد في المملكة' },
  ];

  const team = [
    {
      name: 'أحمد السعيد',
      position: 'المدير التنفيذي',
      image: 'https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjA2MjA5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'فاطمة المطيري',
      position: 'مديرة التصميم',
      image: 'https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjA2MjA5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'محمد العتيبي',
      position: 'مدير العمليات',
      image: 'https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjA2MjA5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'نورة الشمري',
      position: 'مديرة خدمة العملاء',
      image: 'https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjA2MjA5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758802580866-c862623b7b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJ0YWlucyUyMHNob3AlMjBzaG93cm9vbXxlbnwxfHx8fDE3NjA3MTIwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="من نحن"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl mb-4 text-white">من نحن</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            رحلة 15 عاماً من الإبداع والتميز في عالم الستائر الفاخرة
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#f4e4c1] rounded-full mb-4">
              <span className="text-[#d4af37]">قيمنا</span>
            </div>
            <h2 className="text-3xl md:text-5xl mb-4 text-gray-800">ما نؤمن به</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#faf8f5]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl text-[#d4af37] mb-2">{feature.stat}</div>
                <div className="text-sm text-gray-500 mb-4">{feature.statLabel}</div>
                <h3 className="text-xl mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#f4e4c1] rounded-full mb-4">
              <span className="text-[#d4af37]">رحلتنا</span>
            </div>
            <h2 className="text-3xl md:text-5xl mb-4 text-gray-800">مسيرة النجاح</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 mb-8 last:mb-0 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-[#f4e4c1] mt-2"></div>
                  )}
                </div>
                <Card className="flex-1 p-6 mb-4 border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-2xl text-[#d4af37] mb-2">{item.year}</div>
                  <h3 className="text-xl mb-2 text-gray-800">{item.event}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Carousel */}
      <section className="py-20 bg-gradient-to-b from-[#faf8f5] to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#f4e4c1] rounded-full mb-4">
              <span className="text-[#d4af37]">فريقنا</span>
            </div>
            <h2 className="text-3xl md:text-5xl mb-4 text-gray-800">تعرف على فريق العمل</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              فريق من الخبراء المتفانين في خدمتكم
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-12">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
                direction: 'rtl',
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {team.map((member, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                      <div className="h-64 overflow-hidden">
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 text-center bg-gradient-to-b from-white to-[#faf8f5]">
                        <h3 className="text-xl mb-2 text-gray-800">{member.name}</h3>
                        <p className="text-[#d4af37]">{member.position}</p>
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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#d4af37] to-[#b8941f] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl mb-2">5000+</div>
              <div className="text-lg opacity-90">عميل سعيد</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl mb-2">15+</div>
              <div className="text-lg opacity-90">سنة خبرة</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl mb-2">100%</div>
              <div className="text-lg opacity-90">رضا العملاء</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl mb-2">50+</div>
              <div className="text-lg opacity-90">موظف محترف</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
