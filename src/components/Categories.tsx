import { motion } from "motion/react";

const categories = [
  {
    title: "ÁO KHOÁC",
    image: "https://picsum.photos/seed/jacket/800/1000",
    link: "#",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "ÁO POLO",
    image: "https://picsum.photos/seed/polo/800/1000",
    link: "#",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "ÁO THUN",
    image: "https://picsum.photos/seed/tshirt/800/1000",
    link: "#",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "QUẦN - VÁY",
    image: "https://picsum.photos/seed/pants/800/1000",
    link: "#",
    span: "md:col-span-2 md:row-span-1",
  },
];

export default function Categories() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-black tracking-tighter uppercase">Danh mục nổi bật</h2>
            <p className="text-muted-foreground mt-2">Khám phá phong cách riêng của bạn qua từng bộ sưu tập.</p>
          </div>
          <a href="#" className="text-sm font-bold border-b-2 border-primary pb-1 hover:opacity-70 transition-opacity">
            XEM TẤT CẢ
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">
          {categories.map((cat, i) => (
            <motion.a
              key={i}
              href={cat.link}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden rounded-xl ${cat.span}`}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-black text-white tracking-tighter uppercase">{cat.title}</h3>
                <span className="text-white/80 text-xs font-bold tracking-widest mt-2 inline-block border-b border-white/40 pb-1 group-hover:border-white transition-colors">
                  KHÁM PHÁ NGAY
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
