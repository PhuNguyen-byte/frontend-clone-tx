import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black tracking-tighter">COUPLE TX</h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Couple TX với sự chuyển mình từ thương hiệu thời trang dành cho cặp đôi trở thành thương hiệu thời trang trẻ dành cho Nam, nữ.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Về Couple TX</h3>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Giới thiệu</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tuyển dụng</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hệ thống cửa hàng</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Hỗ trợ khách hàng</h3>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Chính sách đổi trả</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hướng dẫn chọn size</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Đăng ký nhận tin</h3>
            <p className="text-white/60 text-sm mb-6">
              Nhận thông tin mới nhất về các bộ sưu tập và ưu đãi độc quyền.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Email của bạn" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-white/30"
              />
              <Button className="font-bold">GỬI</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-xs">
          <p>© 2024 COUPLE TX. All rights reserved.</p>
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3" /> 1800 6516
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3" /> contact@coupletx.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
