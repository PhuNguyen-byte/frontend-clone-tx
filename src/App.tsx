/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Trust Badges */}
        <section className="py-8 border-b bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center gap-4 text-center md:text-left">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="font-bold text-xl">30</span>
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase">Hệ thống cửa hàng</h3>
                  <p className="text-xs text-muted-foreground">30 cửa hàng trên toàn quốc</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 text-center md:text-left border-y md:border-y-0 md:border-x py-6 md:py-0">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="font-bold text-xl">⚡</span>
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase">Giao hàng nhanh</h3>
                  <p className="text-xs text-muted-foreground">Click & Pick - Fast Delivery</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 text-center md:text-left">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="font-bold text-xl">🎁</span>
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase">Ưu đãi độc quyền</h3>
                  <p className="text-xs text-muted-foreground">Nhận ngay 100k khi tải app</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Categories />
        
        <ProductSection />

        {/* Newsletter / Promo Section */}
        <section className="py-20 bg-primary text-primary-foreground overflow-hidden relative">
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 0.1, x: 0 }}
            className="absolute right-0 top-0 text-[200px] font-black tracking-tighter leading-none select-none pointer-events-none"
          >
            COUPLE TX
          </motion.div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-tight">
                Trải nghiệm <br /> mua sắm tuyệt vời
              </h2>
              <p className="text-lg md:text-xl mb-10 opacity-90 max-w-xl">
                Tải ứng dụng Couple TX ngay hôm nay để nhận những ưu đãi đặc quyền và cập nhật xu hướng thời trang mới nhất.
              </p>
              <div className="flex flex-wrap gap-4">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Google Play" 
                  className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="App Store" 
                  className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

