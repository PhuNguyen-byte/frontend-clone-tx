import { ShoppingCart, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  tag?: string;
  key?: number;
}

export function ProductCard({ name, price, originalPrice, image, tag }: ProductProps) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        
        {tag && (
          <Badge className="absolute top-3 left-3 bg-red-600 hover:bg-red-600 font-bold">
            {tag}
          </Badge>
        )}
        
        {discount > 0 && (
          <Badge variant="secondary" className="absolute top-3 right-3 font-bold">
            -{discount}%
          </Badge>
        )}

        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent">
          <div className="flex gap-2">
            <Button size="sm" className="flex-1 font-bold">
              <ShoppingCart className="h-4 w-4 mr-2" /> THÊM VÀO GIỎ
            </Button>
            <Button size="sm" variant="secondary" className="px-2">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-1">
        <h3 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">{price.toLocaleString()}đ</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {originalPrice.toLocaleString()}đ
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const products = [
  {
    id: 1,
    name: "Áo Polo Nam Aristino Cotton Regular Fit APS168S3",
    price: 350000,
    originalPrice: 450000,
    image: "https://picsum.photos/seed/prod1/600/800",
    tag: "HOT",
  },
  {
    id: 2,
    name: "Áo Thun Nữ Cổ Tròn Cotton Compact In Hình",
    price: 199000,
    image: "https://picsum.photos/seed/prod2/600/800",
  },
  {
    id: 3,
    name: "Quần Jean Nam Slim Fit Co Giãn Thoải Mái",
    price: 550000,
    originalPrice: 650000,
    image: "https://picsum.photos/seed/prod3/600/800",
    tag: "NEW",
  },
  {
    id: 4,
    name: "Váy Nữ Dáng Suông Phối Nơ Điệu Đà",
    price: 420000,
    image: "https://picsum.photos/seed/prod4/600/800",
  },
];

export default function ProductSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black tracking-tighter uppercase mb-4">Sản phẩm bán chạy</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              tag={product.tag}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="font-bold px-12 border-2">
            XEM TẤT CẢ SẢN PHẨM
          </Button>
        </div>
      </div>
    </section>
  );
}
