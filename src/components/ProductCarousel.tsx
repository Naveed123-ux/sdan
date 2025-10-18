import { Card } from './ui/card';
import { Button } from './ui/button';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

interface Product {
  id: number;
  title: string;
  category: string;
  price: string;
  image: string;
  rating: number;
}

interface ProductCarouselProps {
  products: Product[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  return (
    <div className="product-carousel relative px-12">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
          direction: 'rtl',
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300">
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
                <div className="p-6 bg-gradient-to-br from-white to-[#faf8f5]">
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="right-0 left-auto" />
        <CarouselNext className="left-0 right-auto" />
      </Carousel>
    </div>
  );
}
