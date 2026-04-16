import { Search, ShoppingBag, User, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { motion, AnimatePresence } from "motion/react";

const categories = [
  {
    name: "ÁO KHOÁC",
    sub: ["Áo khoác nam", "Áo khoác nữ", "Áo khoác cặp đôi", "Áo khoác trẻ em"],
  },
  {
    name: "ÁO POLO",
    sub: ["Áo polo nam", "Áo polo nữ"],
  },
  {
    name: "ÁO THUN",
    sub: ["Áo thun nam", "Áo thun nữ", "Áo thun cặp đôi"],
  },
  {
    name: "QUẦN - CHÂN VÁY",
    sub: ["Quần nam", "Quần nữ", "Chân váy"],
  },
  {
    name: "PHỤ KIỆN",
    sub: ["Giày - Dép", "Nón", "Túi xách"],
  },
];

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Promo Bar */}
      <div className="bg-black text-white py-2 text-center text-xs font-medium tracking-wider">
        MIỄN PHÍ VẬN CHUYỂN CHO ĐƠN HÀNG TỪ 500K
      </div>

      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              }
            />
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left font-bold text-2xl tracking-tighter">COUPLE TX</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-4">
                {categories.map((cat) => (
                  <div key={cat.name} className="border-b pb-4">
                    <h3 className="font-semibold mb-2">{cat.name}</h3>
                    <ul className="pl-4 flex flex-col gap-2">
                      {cat.sub.map((sub) => (
                        <li key={sub} className="text-sm text-muted-foreground hover:text-primary cursor-pointer">
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="/" className="text-2xl font-black tracking-tighter">
            COUPLE TX
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {categories.map((cat) => (
                <NavigationMenuItem key={cat.name}>
                  <NavigationMenuTrigger className="text-xs font-bold tracking-widest uppercase">
                    {cat.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {cat.sub.map((sub) => (
                        <li key={sub}>
                          <NavigationMenuLink
                            render={
                              <a
                                href="#"
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{sub}</div>
                              </a>
                            }
                          />
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <AnimatePresence>
            {isSearchOpen ? (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 200, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="relative hidden md:block"
              >
                <Input
                  placeholder="Tìm kiếm..."
                  className="h-9 pr-8"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-9 w-9"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </motion.div>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-5 w-5" />
              </Button>
            )}
          </AnimatePresence>

          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
