import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت.');
    setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'الهاتف',
      details: ['+966 50 123 4567', '+966 11 234 5678'],
      link: 'tel:+966501234567',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      details: ['info@luxurycurtains.sa', 'support@luxurycurtains.sa'],
      link: 'mailto:info@luxurycurtains.sa',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: MapPin,
      title: 'العنوان',
      details: ['الرياض، حي الملقا', 'شارع الأمير سلطان، مبنى 123'],
      link: '#',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      details: ['السبت - الخميس', '9 صباحاً - 9 مساءً'],
      link: '#',
      color: 'from-green-500 to-green-600',
    },
  ];

  const branches = [
    {
      city: 'الرياض',
      address: 'حي الملقا، شارع الأمير سلطان',
      phone: '+966 50 123 4567',
      hours: '9 ص - 9 م',
    },
    {
      city: 'جدة',
      address: 'حي الزهراء، طريق الملك عبدالعزيز',
      phone: '+966 50 234 5678',
      hours: '9 ص - 9 م',
    },
    {
      city: 'الدمام',
      address: 'حي الفيصلية، شارع الملك فهد',
      phone: '+966 50 345 6789',
      hours: '9 ص - 9 م',
    },
    {
      city: 'مكة المكرمة',
      address: 'حي العزيزية، شارع إبراهيم الخليل',
      phone: '+966 50 456 7890',
      hours: '9 ص - 9 م',
    },
  ];

  const faqs = [
    {
      question: 'ما هي مدة التوصيل والتركيب؟',
      answer: 'عادة ما يتم التوصيل والتركيب خلال 7-10 أيام عمل من تاريخ الطلب.',
    },
    {
      question: 'هل تقدمون استشارة مجانية؟',
      answer: 'نعم، نقدم استشارة مجانية في المنزل أو في معارضنا لمساعدتك في اختيار الستائر المناسبة.',
    },
    {
      question: 'هل يوجد ضمان على المنتجات؟',
      answer: 'نعم، نقدم ضمان سنتين على جميع منتجاتنا ضد عيوب الصناعة.',
    },
    {
      question: 'هل يمكنني طلب عينات من الأقمشة؟',
      answer: 'بالتأكيد، يمكنك طلب عينات مجانية من الأقمشة لرؤيتها في منزلك قبل اتخاذ القرار.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758802580866-c862623b7b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJ0YWlucyUyMHNob3AlMjBzaG93cm9vbXxlbnwxfHx8fDE3NjA3MTIwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="اتصل بنا"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl mb-4 text-white">اتصل بنا</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            نحن هنا للإجابة على جميع استفساراتك
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-gray-800">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <a
                    key={idx}
                    href={info.link}
                    className="block text-gray-600 hover:text-[#d4af37] transition-colors mb-1"
                  >
                    {detail}
                  </a>
                ))}
              </Card>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 border-none shadow-xl">
              <div className="mb-6">
                <h2 className="text-3xl mb-2 text-gray-800">أرسل لنا رسالة</h2>
                <p className="text-gray-600">سنرد عليك في أقرب وقت ممكن</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-700">الاسم الكامل *</label>
                  <Input
                    type="text"
                    placeholder="أدخل اسمك الكامل"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-gray-700">رقم الهاتف *</label>
                    <Input
                      type="tel"
                      placeholder="05xxxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-700">البريد الإلكتروني</label>
                    <Input
                      type="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">الموضوع *</label>
                  <Input
                    type="text"
                    placeholder="موضوع الرسالة"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">رسالتك *</label>
                  <Textarea
                    placeholder="أخبرنا كيف يمكننا مساعدتك..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full min-h-40"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#d4af37] hover:bg-[#b8941f] text-white py-6"
                >
                  <Send className="ml-2 w-5 h-5" />
                  إرسال الرسالة
                </Button>
              </form>
            </Card>

            {/* Quick Contact & Social */}
            <div className="space-y-6">
              {/* WhatsApp */}
              <Card className="p-8 border-none shadow-lg bg-gradient-to-br from-green-50 to-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-gray-800">تواصل عبر واتساب</h3>
                    <p className="text-gray-600">رد فوري على استفساراتك</p>
                  </div>
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-6">
                  <MessageCircle className="ml-2 w-5 h-5" />
                  ابدأ المحادثة
                </Button>
              </Card>

              {/* Social Media */}
              <Card className="p-8 border-none shadow-lg">
                <h3 className="text-2xl mb-6 text-gray-800">تابعنا على</h3>
                <div className="space-y-4">
                  <a
                    href="#"
                    className="flex items-center gap-4 p-4 bg-[#faf8f5] rounded-lg hover:bg-[#f4e4c1] transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Facebook className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-800">فيسبوك</div>
                      <div className="text-sm text-gray-500">@luxurycurtains</div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-4 p-4 bg-[#faf8f5] rounded-lg hover:bg-[#f4e4c1] transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-800">انستقرام</div>
                      <div className="text-sm text-gray-500">@luxurycurtains_sa</div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-4 p-4 bg-[#faf8f5] rounded-lg hover:bg-[#f4e4c1] transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Twitter className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-800">تويتر</div>
                      <div className="text-sm text-gray-500">@luxurycurtains</div>
                    </div>
                  </a>
                </div>
              </Card>

              {/* Map Placeholder */}
              <Card className="h-64 border-none shadow-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-16 h-16 mx-auto mb-3 text-[#d4af37]" />
                    <p className="text-xl">خريطة الموقع</p>
                    <p className="text-sm">الرياض، حي الملقا</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="py-20 bg-gradient-to-b from-[#faf8f5] to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#f4e4c1] rounded-full mb-4">
              <span className="text-[#d4af37]">فروعنا</span>
            </div>
            <h2 className="text-3xl md:text-5xl mb-4 text-gray-800">تجدنا في</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((branch, index) => (
              <Card
                key={index}
                className="p-6 border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl text-gray-800 mb-2">{branch.city}</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#d4af37]" />
                    <span className="text-sm">{branch.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 flex-shrink-0 text-[#d4af37]" />
                    <span className="text-sm" dir="ltr">
                      {branch.phone}
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0 text-[#d4af37]" />
                    <span className="text-sm">{branch.hours}</span>
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#f4e4c1] rounded-full mb-4">
              <span className="text-[#d4af37]">الأسئلة الشائعة</span>
            </div>
            <h2 className="text-3xl md:text-5xl mb-4 text-gray-800">كيف يمكننا مساعدتك؟</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 border-none shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl mb-3 text-gray-800">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
