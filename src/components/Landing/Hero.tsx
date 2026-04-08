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
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 20 } },
  };

  return (
    // CAMBIOS AQUI: pt-28 md:pt-36 para dar espacio al navbar, y flex-col para controlar mejor el centrado
    <section id="inicio" className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center overflow-hidden bg-black pt-28 md:pt-36 pb-12">
      
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
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[currentIndex]}
              alt={`Fondo de inspección ${currentIndex + 1}`}
              fill
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
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-20 w-full">
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Badge superior */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold mb-8 md:mb-10 shadow-inner backdrop-blur-sm"
          >
            <svg className="w-4 h-4 mr-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Respaldo Directo del Fabricante | +25 años de trayectoria
          </motion.div>

          {/* Título principal */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-[0.95] mb-6 md:mb-8"
          >
            Inspección y Certificación de <br /> <span className="text-primary">Equipos de Altura</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto text-lg md:text-xl text-white mb-10 md:mb-14 leading-relaxed font-bold"
          >
            Especialistas en inspección rigurosa de elementos de protección contra caídas (EPCC) y gestión de tareas de alto riesgo. Garantizamos la máxima seguridad de su personal bajo estrictos estándares.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
          >
            <Link
              href="#servicios"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-primary/20 active:scale-95 touch-manipulation"
            >
              Nuestros Servicios
            </Link>
            <Link
              href="#contacto"
              className="w-full sm:w-auto bg-white/90 hover:bg-white text-primary px-10 py-4 rounded-full text-lg font-bold border border-gray-200 transition-all shadow-md active:scale-95 touch-manipulation flex items-center justify-center group"
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