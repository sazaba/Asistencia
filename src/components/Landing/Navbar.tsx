"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

// 1. Importamos ambos logos
import logoBlue from "@/assets/logoBlue.webp";
import logoWhite from "@/assets/logoWhite.webp";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true); 
  const [lastScrollY, setLastScrollY] = useState(0);

  const mouseY = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseY.current = e.clientY;
      
      if (window.innerWidth >= 768) {
        if (isMenuOpen) return;
        if (window.scrollY < 50) return;

        if (e.clientY <= 120) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (isMenuOpen) return;

        const currentScrollY = window.scrollY;
        const isDesktop = window.innerWidth >= 768;

        if (currentScrollY < 50) {
          setIsAtTop(true);
          setIsVisible(true); 
        } else {
          setIsAtTop(false);

          if (isDesktop) {
            if (mouseY.current > 120) {
              setIsVisible(false);
            } else {
              setIsVisible(true);
            }
          } else {
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
              setIsVisible(false);
            } else {
              setIsVisible(true);
            }
          }
        }
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar, { passive: true });
      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY, isMenuOpen]);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Plataforma", href: "#plataforma" },
    { name: "Marcas", href: "#marcas-inspeccionadas" },
  ];

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: { staggerChildren: 0.05, staggerDirection: -1, when: "afterChildren" },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30, staggerChildren: 0.07, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, y: -5 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isAtTop 
          ? "bg-transparent border-transparent shadow-none py-2 md:py-4" // Añadido padding en desktop cuando está arriba
          : "bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm py-1" 
      }`}
    >
      {/* ELIMINADO el overflow-hidden de aquí para no cortar el hover del logo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* AUMENTADO el alto del contenedor (h-24 a h-28 en desktop) */}
        <div className="flex justify-between items-center h-20 sm:h-24 md:h-28">
          
          <div className="shrink-0 flex items-center h-full py-2">
            <a href="#inicio" className="flex items-center group h-full">
              {/* AUMENTADO significativamente el width y height del wrapper del logo */}
              <div className="relative h-16 sm:h-20 md:h-24 w-44 sm:w-56 md:w-72 transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src={logoWhite} 
                  alt="A-Retar Logo Blanco" 
                  fill
                  // Actualizados los sizes para reflejar el nuevo tamaño
                  sizes="(max-width: 640px) 176px, (max-width: 768px) 224px, 288px"
                  className={`object-contain object-left transition-opacity duration-300 absolute inset-0 ${
                    isAtTop ? "opacity-100" : "opacity-0"
                  }`}
                  priority 
                />
                <Image 
                  src={logoBlue} 
                  alt="A-Retar Logo Azul" 
                  fill
                  // Actualizados los sizes para reflejar el nuevo tamaño
                  sizes="(max-width: 640px) 176px, (max-width: 768px) 224px, 288px"
                  className={`object-contain object-left transition-opacity duration-300 absolute inset-0 ${
                    isAtTop ? "opacity-0" : "opacity-100"
                  }`}
                  priority 
                />
              </div>
            </a>
          </div>

          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.2, type: "spring", stiffness: 100 }}
              >
                <a
                  href={link.href}
                  className={`font-bold text-sm lg:text-base transition-colors relative group ${
                    isAtTop ? "text-white hover:text-gray-200" : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {link.name}
                  <span className={`absolute left-0 -bottom-1.5 w-0 h-0.5 transition-all group-hover:w-full ${
                    isAtTop ? "bg-white" : "bg-primary"
                  }`}></span>
                </a>
              </motion.div>
            ))}
          </nav>

          <motion.div
            className="hidden md:flex items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
          >
            <a
              href="#contacto"
              className="bg-primary hover:bg-primary/90 text-white px-7 py-3 rounded-full text-sm lg:text-base font-bold transition-all shadow-md hover:shadow-primary/10 active:scale-95 touch-manipulation"
            >
              Solicitar Asesoría
            </a>
          </motion.div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`focus:outline-none p-2 transition-colors ${
                isAtTop ? "text-white" : "text-gray-600 hover:text-primary"
              }`}
              aria-label="Abrir menú"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-[88px] sm:top-[104px] left-0 w-full bg-white/98 backdrop-blur-lg border-b border-gray-100 shadow-lg origin-top overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="px-5 pt-3 pb-8 space-y-1 sm:px-3 flex flex-col">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-4 text-lg font-bold text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
              <motion.div variants={itemVariants} className="pt-5">
                <a
                  href="#contacto"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-center bg-primary text-white px-6 py-4 rounded-full text-lg font-bold shadow-md active:scale-95 touch-manipulation"
                >
                  Solicitar Asesoría
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};