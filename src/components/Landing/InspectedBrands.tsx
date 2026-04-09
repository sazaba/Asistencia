"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// =========================================================
// IMPORTACIÓN DE LOGOS DE EQUIPOS
// =========================================================
import petzlLogo from "@/assets/logos-marcas/petzl.jpg";
import singingRockLogo from "@/assets/logos-marcas/singing.jpg";
import masLogo from "@/assets/logos-marcas/msa.jpg";
import steelproLogo from "@/assets/logos-marcas/steelpro.jpg";
import protectaLogo from "@/assets/logos-marcas/protecta.jpg"; 
import tendonLogo from "@/assets/logos-marcas/tendon.jpg";
import dbiSalaLogo from "@/assets/logos-marcas/dbi.jpg";
import armaduraLogo from "@/assets/logos-marcas/armadura.jpg";
import insafeLogo from "@/assets/logos-marcas/insafe.jpg";
import mmmLogo from "@/assets/logos-marcas/3m.jpg"; 
import sosegaLogo from "@/assets/logos-marcas/Sosega.webp";
import lintechLogo from "@/assets/logos-marcas/linktech.png";
import arsegLogo from "@/assets/logos-marcas/arseg.png";
import xpLogo from "@/assets/logos-marcas/xp.png";
import comercialEpLogo from "@/assets/logos-marcas/ep.png";
import eusseLogo from "@/assets/logos-marcas/eusse.png";
import epiLogo from "@/assets/logos-marcas/EPI.png";
import dinamikLogo from "@/assets/logos-marcas/Dinamik.jpg";

// Array de configuración exacto con tus 19 marcas
const EQUIPMENT_BRANDS = [
  { id: 1, name: "Petzl", src: petzlLogo },
  { id: 3, name: "Singing Rock", src: singingRockLogo },
  { id: 4, name: "MAS", src: masLogo },
  { id: 5, name: "Steelpro", src: steelproLogo },
  { id: 6, name: "Protecta", src: protectaLogo },
  { id: 7, name: "Tendon", src: tendonLogo },
  { id: 8, name: "DBI-SALA", src: dbiSalaLogo },
  { id: 9, name: "Armadura", src: armaduraLogo },
  { id: 10, name: "Insafe", src: insafeLogo },
  { id: 11, name: "3M", src: mmmLogo },
  { id: 12, name: "Sosega", src: sosegaLogo },
  { id: 13, name: "Lintech", src: lintechLogo },
  { id: 14, name: "Arseg", src: arsegLogo },
  { id: 15, name: "XP", src: xpLogo },
  { id: 16, name: "Comercial EP", src: comercialEpLogo },
  { id: 17, name: "Eusse", src: eusseLogo },
  { id: 18, name: "EPA", src: epiLogo },
  { id: 19, name: "Dinamik", src: dinamikLogo },
];

export const InspectedBrands = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FBFBFD] relative overflow-hidden">
      
      {/* Fondo de puntos sutiles */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none z-0" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />

      <div className="max-w-[100vw] mx-auto relative z-10">
        
        {/* Cabecera Premium */}
        <div className="px-5 sm:px-6 lg:px-8 mb-12 md:mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Etiqueta superior con líneas */}
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
              <span className="w-6 md:w-12 h-[1.5px] bg-primary"></span>
              <span className="text-primary font-black tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[10px] uppercase">
                Autorizados y Avalados
              </span>
              <span className="w-6 md:w-12 h-[1.5px] bg-primary"></span>
            </div>
            
            {/* Título mixto (Extrabold + Italic Light) */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-neutral-900 leading-[1.1] mb-4 md:mb-6">
               Equipos que <span className="text-neutral-300 font-light italic">Inspeccionamos</span>
            </h2>
            
            <p className="text-neutral-600 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto px-4">
              Contamos con el aval técnico para realizar la inspección y certificación de las marcas líderes en equipos de protección contra caídas y seguridad industrial.
            </p>
          </motion.div>
        </div>

        {/* Carrusel infinito */}
        <div className="relative w-full flex overflow-hidden group py-6 md:py-10">
          
          {/* Sombras en los bordes para difuminar la entrada/salida de los logos */}
          <div className="absolute top-0 left-0 h-full w-16 md:w-48 bg-gradient-to-r from-[#FBFBFD] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-16 md:w-48 bg-gradient-to-l from-[#FBFBFD] to-transparent z-20 pointer-events-none"></div>

          {/* Contenedor del Marquee optimizado para Safari y móviles */}
          <div className="flex overflow-hidden py-4 w-full">
            <motion.div 
              className="flex flex-nowrap items-center w-max group-hover:[animation-play-state:paused] will-change-transform"
              // Animamos exactamente al -50% para que el ciclo sea infinito perfecto sin saltos
              animate={{ x: ["0%", "-50%"] }} 
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40, // Puedes subir o bajar este número para cambiar la velocidad
                  ease: "linear",
                },
              }}
              // Estas etiquetas CSS son el secreto para que no parpadee en Safari de iOS
              style={{ 
                WebkitBackfaceVisibility: "hidden",
                WebkitPerspective: 1000,
                WebkitTransform: "translate3d(0,0,0)"
              }}
            >
              {/* Solo necesitamos duplicar el array UNA VEZ para hacer un loop de -50% */}
              {[...EQUIPMENT_BRANDS, ...EQUIPMENT_BRANDS].map((brand, index) => (
                <div 
                  key={`eq-${brand.id}-${index}`} 
                  // Tamaños más pequeños en móvil (w-[160px]), medianos en tablet, grandes en desktop
                  className="flex-shrink-0 w-[160px] h-[100px] sm:w-[200px] sm:h-[120px] md:w-[280px] md:h-[150px] mx-3 md:mx-5"
                >
                  {/* TARJETA PREMIUM: Sombras en capas (layered shadows) para mayor realismo */}
                  <div className="relative w-full h-full bg-white rounded-2xl md:rounded-[2rem] border border-neutral-100 
                    shadow-[0_2px_10px_rgba(0,0,0,0.02),0_8px_24px_rgba(0,0,0,0.04)] 
                    hover:shadow-[0_12px_32px_rgba(0,0,0,0.06),0_2px_12px_rgba(0,0,0,0.03)] 
                    flex items-center justify-center transition-all duration-500 transform-gpu hover:-translate-y-2 hover:border-primary/40 group/card overflow-hidden p-4 md:p-8"
                  >
                    
                    {/* Contenedor interno optimizado */}
                    <div className="relative w-full h-full">
                      <Image
                        src={brand.src} 
                        alt={`Equipo certificado marca ${brand.name}`}
                        fill
                        className="object-contain transition-transform duration-500 group-hover/card:scale-105"
                        sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, 280px"
                      />
                    </div>

                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};