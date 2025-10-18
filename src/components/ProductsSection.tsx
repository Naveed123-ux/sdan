import { Card } from './ui/card';
import { Button } from './ui/button';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Product {
  id: number;
  title: string;
  category: string;
  price: string;
  image: string;
  rating: number;
}

interface ProductsSectionProps {
  products: Product[];
}

export function ProductsSection({ products }: ProductsSectionProps) {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#f4e4c1] rounded-full mb-4">
            <span className="text-[#d4af37]">منتجاتنا المميزة</span>
          </div>
          <h2 className="text-3xl md:text-5xl mb-4 text-gray-800">مجموعة الستائر الفاخرة</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نقدم لك مجموعة متنوعة من الستائر الفاخرة المصممة بعناية لتناسب جميع الأذواق والمساحات
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#d4af37] text-white px-3 py-1 rounded-full text-sm">
                  {product.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <Button className="bg-white text-gray-800 hover:bg-gray-100">
                    <ShoppingBag className="w-4 h-4 ml-2" />
                    اطلب الآن
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < product.rating
                          ? 'fill-[#d4af37] text-[#d4af37]'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <h3 className="text-xl mb-2 text-gray-800">{product.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[#d4af37] text-2xl">{product.price}</span>
                  <span className="text-gray-500 text-sm">ريال سعودي</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white px-8 py-6"
          >
            عرض جميع المنتجات
          </Button>
        </div>
      </div>
    </section>
  );
}
