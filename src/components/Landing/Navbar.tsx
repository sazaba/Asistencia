"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

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

  // Animaciones más suaves y refinadas para el estilo "Premium"
  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: -20,
      scale: 0.98,
      transition: { staggerChildren: 0.05, staggerDirection: -1, when: "afterChildren" },
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 30, staggerChildren: 0.07, delayChildren: 0.05 },
    },
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, y: 10 },
    open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isAtTop 
          ? "bg-transparent border-transparent shadow-none py-2 md:py-4" 
          : "bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm py-1" 
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center relative transition-all duration-300 ease-in-out ${
          isAtTop ? "h-24 sm:h-28 md:h-32" : "h-16 sm:h-20 md:h-20"
        }`}>
          
          <div className="shrink-0 flex items-center h-full py-2">
            <a href="#inicio" className="flex items-center group h-full">
              <div className={`relative transition-all duration-300 ease-in-out group-hover:scale-105 ${
                isAtTop 
                  ? "h-20 sm:h-24 md:h-28 w-60 sm:w-80 md:w-[26rem]" 
                  // LOGO AZUL MÁS PEQUEÑO EN MÓVILES (h-9 y w-28) para un aspecto más limpio
                  : "h-9 sm:h-12 md:h-16 w-28 sm:w-40 md:w-56"       
              }`}>
                <Image 
                  src={logoWhite} 
                  alt="A-Retar Logo Blanco" 
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, 416px"
                  className={`object-contain object-left transition-opacity duration-300 absolute inset-0 ${
                    isAtTop ? "opacity-100" : "opacity-0"
                  }`}
                  priority 
                />
                <Image 
                  src={logoBlue} 
                  alt="A-Retar Logo Azul" 
                  fill
                  // Ajuste de sizes para el nuevo tamaño más pequeño en móviles
                  sizes="(max-width: 640px) 112px, (max-width: 768px) 160px, 224px"
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
                  className={`font-bold text-base transition-colors relative group ${
                    isAtTop ? "text-white hover:text-gray-200" : "text-gray-800 hover:text-primary"
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
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full text-base font-bold transition-all shadow-md hover:shadow-primary/20 active:scale-95 touch-manipulation"
            >
              Solicitar Asesoría
            </a>
          </motion.div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`focus:outline-none p-2.5 rounded-2xl transition-all ${
                isAtTop 
                  ? "text-white hover:bg-white/10" 
                  : "text-gray-800 hover:bg-gray-100/80 hover:text-primary"
              }`}
              aria-label="Abrir menú"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            // DISEÑO PREMIUM: Tarjeta flotante en lugar de panel de pantalla completa
            className="md:hidden absolute top-[calc(100%+0.5rem)] left-4 right-4 bg-white/95 backdrop-blur-2xl border border-white/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] rounded-3xl overflow-hidden origin-top"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="p-5 flex flex-col space-y-1">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    // Enlaces más elegantes con flechas indicadoras
                    className="flex items-center justify-between px-4 py-3.5 text-lg font-semibold text-gray-700 hover:text-primary hover:bg-gray-50/80 rounded-2xl transition-all active:scale-[0.98]"
                  >
                    {link.name}
                    <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </motion.div>
              ))}
              <motion.div variants={itemVariants} className="pt-4 pb-2 px-2">
                <a
                  href="#contacto"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center w-full bg-primary text-white px-6 py-4 rounded-2xl text-lg font-bold shadow-md hover:shadow-lg active:scale-95 touch-manipulation transition-all"
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