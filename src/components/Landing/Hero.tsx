"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

import img1 from "@/assets/Hero2.png";
import img2 from "@/assets/Hero3.png";
import img3 from "@/assets/Hero4.png";

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [img1, img2, img3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 20 } },
  };

  return (
    <section id="inicio" className="relative min-h-[100svh] w-full flex flex-col justify-center items-center overflow-hidden bg-black pt-24 pb-10 md:pt-36 md:pb-12">
      
      {/* ========================================== */}
      {/* FONDO ANIMADO DE IMÁGENES */}
      {/* ========================================== */}
      <div className="absolute inset-0 z-0 bg-primary">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }} 
            animate={{ opacity: 1, scale: 1 }}   
            exit={{ opacity: 0 }}                
            transition={{ 
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 7, ease: "linear" } 
            }}
            className="absolute inset-0 w-full h-full transform-gpu will-change-transform"
          >
            <Image
              src={images[currentIndex]}
              alt={`Fondo de inspección ${currentIndex + 1}`}
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-black/70 z-10"></div>
      </div>

      {/* ========================================== */}
      {/* CONTENIDO PRINCIPAL EN PRIMER PLANO */}
      {/* ========================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Badge: Reducido a una sola línea en móviles */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-bold mb-6 md:mb-10 shadow-inner backdrop-blur-md"
          >
            <svg className="w-4 h-4 mr-1.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Respaldo de Fabricante</span>
            {/* Esta parte solo se muestra en pantallas medianas o más grandes */}
            <span className="hidden sm:inline ml-1"> | +25 años de trayectoria</span>
          </motion.div>

          {/* Título: Aumentado en móviles (text-[3rem]/text-5xl) y con saltos de línea estratégicos */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-[0.95] mb-5 md:mb-8"
          >
            Inspección y <br className="block sm:hidden" /> Certificación de <br className="hidden sm:block" /> 
            <span className="text-primary block mt-1.5 sm:inline sm:mt-0">Equipos de Altura</span>
          </motion.h1>

          {/* Subtítulo: Se oculta la mitad del texto en móviles para no saturar la pantalla */}
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-200 md:text-white mb-8 md:mb-14 leading-relaxed font-semibold md:font-bold px-2 sm:px-4"
          >
            Especialistas en inspección rigurosa de elementos de protección contra caídas (EPCC).
            {/* Esta frase extra solo aparece en PC y Tablets */}
            <span className="hidden sm:inline"> Garantizamos la máxima seguridad de su personal bajo estrictos estándares.</span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 px-4 sm:px-0"
          >
            <Link
              href="#servicios"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-6 py-3.5 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all shadow-lg hover:shadow-primary/20 active:scale-95 touch-manipulation"
            >
              Nuestros Servicios
            </Link>
            <Link
              href="#contacto"
              className="w-full sm:w-auto bg-white/95 hover:bg-white text-primary px-6 py-3.5 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-bold border border-gray-200 transition-all shadow-md active:scale-95 touch-manipulation flex items-center justify-center group"
            >
              Contactar Experto
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};