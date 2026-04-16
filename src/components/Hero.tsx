import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/fashion-hero/1920/1080"
          alt="Couple TX Hero"
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container relative mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-4">New Collection 2024</h2>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
            ĐA DỤNG & <br /> THỜI THƯỢNG
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 font-medium">
            Khám phá những thiết kế mới nhất mang đậm phong cách trẻ trung và năng động.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 font-bold px-8">
              MUA NGAY NAM
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-bold px-8">
              MUA NGAY NỮ
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
