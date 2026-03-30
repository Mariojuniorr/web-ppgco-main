"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { LogOut, Bell, Wifi, WifiOff, User, Sun, Moon, Menu, X } from "lucide-react";
import { MacOSDock, dockItems } from "@/components/layout/MacOSDock";
import { useTheme, ThemeProvider } from "@/context/ThemeContext";

function DashboardLayoutContent({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isDark, toggleTheme } = useTheme();
  const [isOnline, setIsOnline] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsOnline(navigator.onLine);
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100 && !mobileMenuOpen) {
        setShowHeader(false);
        setShowFooter(false);
      } else {
        setShowHeader(true);
        setShowFooter(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const handleLogout = () => {
    router.push("/");
  };

  const navigateTo = (route: string) => {
    setMobileMenuOpen(false);
    router.push(route);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header - Ultra Compact */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white/30 dark:bg-gray-900/30 backdrop-blur-[30px] border-b border-white/20 dark:border-gray-700/30 shadow-lg transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Left: Hamburger (Mobile) + Client Logo */}
            <div className="flex items-center space-x-3">
              <button 
                className="md:hidden p-1.5 hover:bg-white/50 dark:hover:bg-gray-800/50 rounded-full transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-gray-700 dark:text-gray-300" /> : <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />}
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded bg-gradient-to-r from-[#3c1d7c] to-[#347cd3] flex items-center justify-center text-white font-bold text-[10px]">UFU</div>
                <div className="hidden sm:block">
                  <h1 className="text-gray-900 dark:text-white font-bold text-xs">PPGCO</h1>
                  <p className="text-gray-500 dark:text-gray-400 text-[10px]">UFU</p>
                </div>
              </div>
            </div>

            {/* Center: Nexus Logo */}
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <img
                src={isDark ? "/logos/Nexus_White.png" : "/logos/Nexus_Black.png"}
                alt="Nexus"
                className="h-7 object-contain"
              />
            </div>

            {/* Right: User Actions */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button
                onClick={toggleTheme}
                className="p-1.5 hover:bg-white/50 dark:hover:bg-gray-800/50 rounded-full transition-colors"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-yellow-500" />
                ) : (
                  <Moon className="w-4 h-4 text-gray-600" />
                )}
              </button>

              <div
                className={`p-1.5 rounded-full ${
                  isOnline
                    ? "bg-green-100 dark:bg-green-900/30"
                    : "bg-yellow-100 dark:bg-yellow-900/30"
                }`}
              >
                {isOnline ? (
                  <Wifi className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                ) : (
                  <WifiOff className="w-3.5 h-3.5 text-yellow-600 dark:text-yellow-400" />
                )}
              </div>

              <button className="relative p-1.5 hover:bg-white/50 dark:hover:bg-gray-800/50 rounded-full transition-colors">
                <Bell className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-[#b43cb3] rounded-full"></span>
              </button>

              <div className="flex items-center space-x-1.5 px-2 py-1 bg-white/50 dark:bg-gray-800/50 hover:bg-white/70 dark:hover:bg-gray-800/70 rounded-full transition-colors cursor-pointer">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#3c1d7c] to-[#347cd3] flex items-center justify-center">
                  <User className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium text-xs hidden sm:inline">
                  Gestor
                </span>
              </div>

              <button
                onClick={handleLogout}
                className="p-1.5 hover:bg-red-50 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full transition-colors"
                title="Sair do sistema"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/30 shadow-2xl py-4 pb-6 px-4 flex flex-col space-y-2 origin-top animate-in slide-in-from-top-4 duration-300">
            {dockItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.route;
              return (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.route)}
                  className={`flex items-center space-x-3 w-full p-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  }`}
                >
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}15`, color: isActive ? item.color : undefined }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="pt-20 pb-24 md:pt-16 md:pb-28">
        {children}
      </div>

      {/* Footer with Dock (Hidden on Mobile) */}
      <footer
        className={`fixed bottom-0 left-0 right-0 z-50 py-4 transition-transform duration-300 pointer-events-none hidden md:block ${
          showFooter ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="pointer-events-auto">
          <MacOSDock />
        </div>
      </footer>
    </div>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </ThemeProvider>
  );
}
