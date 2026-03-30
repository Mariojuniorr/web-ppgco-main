"use client";

import { useState, useRef, useEffect } from "react";
import { Home, BookOpen, FileText, Calendar, MessageSquare, HelpCircle, Shield } from "lucide-react";
import { useRouter } from "next/navigation";

export interface DockItem {
  id: string;
  route: string;
  icon: React.ElementType;
  label: string;
  color: string;
}

export const dockItems: DockItem[] = [
  { id: "home", route: "/dashboard", icon: Home, label: "Início", color: "#3c1d7c" },
  { id: "disciplinas", route: "/disciplinas", icon: BookOpen, label: "Disciplinas", color: "#347cd3" },
  { id: "documentos", route: "/documentos", icon: FileText, label: "Documentos", color: "#b43cb3" },
  { id: "calendario", route: "/calendario", icon: Calendar, label: "Calendário", color: "#a89600" },
  { id: "mural", route: "/mural", icon: MessageSquare, label: "Mural", color: "#3c1d7c" },
  { id: "permissoes", route: "/permissoes", icon: Shield, label: "Permissões", color: "#f5365c" },
  { id: "faq", route: "/faq", icon: HelpCircle, label: "FAQ", color: "#347cd3" },
];

export function MacOSDock() {
  const router = useRouter();
  const [mouseX, setMouseX] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const dockRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (dockRef.current) {
        const rect = dockRef.current.getBoundingClientRect();
        const isOverDock = 
          e.clientY >= rect.top && 
          e.clientY <= rect.bottom &&
          e.clientX >= rect.left &&
          e.clientX <= rect.right;
        
        if (isOverDock) {
          setMouseX(e.clientX - rect.left);
        } else {
          setMouseX(null);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getScale = (index: number) => {
    if (mouseX === null || !itemRefs.current[index]) return 1;
    
    const itemRect = itemRefs.current[index]!.getBoundingClientRect();
    const dockRect = dockRef.current!.getBoundingClientRect();
    const itemCenter = itemRect.left - dockRect.left + itemRect.width / 2;
    
    const distance = Math.abs(mouseX - itemCenter);
    const maxDistance = 120;
    
    if (distance > maxDistance) return 1;
    
    const influence = 1 - distance / maxDistance;
    return 1 + influence * 0.6;
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (index: number, route: string) => {
    setActiveIndex(index);
    router.push(route);
  };

  return (
    <div className="flex justify-center">
      <div 
        ref={dockRef}
        className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-[30px] border border-white/20 dark:border-gray-700/30 rounded-2xl px-2 py-2 shadow-2xl flex items-end gap-1"
        onMouseLeave={() => {
          setMouseX(null);
          handleMouseLeave();
        }}
      >
        {dockItems.map((item, index) => {
          const Icon = item.icon;
          const scale = getScale(index);
          const isActive = activeIndex === index;
          
          return (
            <div
              key={item.id}
              ref={(el) => { itemRefs.current[index] = el; }}
              className="flex flex-col items-center relative"
            >
              <button
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(index, item.route)}
                className="relative transition-all duration-300 ease-out"
                style={{
                  transform: `scale(${scale}) translateY(${scale > 1 ? -(scale - 1) * 16 : 0}px)`,
                  transformOrigin: 'bottom',
                }}
              >
                <div 
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 ${
                    isActive 
                      ? 'bg-white/60 dark:bg-gray-800/60 shadow-lg' 
                      : 'bg-white/40 dark:bg-gray-800/40 hover:bg-white/50 dark:hover:bg-gray-800/50'
                  }`}
                  style={{
                    borderColor: isActive ? item.color : 'transparent',
                    borderWidth: isActive ? '2px' : '0px',
                  }}
                >
                  <Icon 
                    className="w-5 h-5 transition-colors dark:!text-white" 
                    style={{ color: isActive ? item.color : undefined }}
                  />
                </div>
                
                {/* Tooltip for hover */}
                {hoveredIndex === index && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 transition-opacity duration-200 pointer-events-none">
                    <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[10px] px-2 py-1 rounded-md whitespace-nowrap shadow-lg font-medium">
                      {item.label}
                    </div>
                  </div>
                )}
              </button>
              
              {/* Active indicator dot */}
              {isActive && (
                <div 
                  className="w-1 h-1 rounded-full mt-1 transition-all"
                  style={{ backgroundColor: item.color }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
