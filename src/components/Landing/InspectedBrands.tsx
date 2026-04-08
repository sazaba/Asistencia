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
    <section className="py-24 bg-[#FBFBFD] relative overflow-hidden">
      
      {/* Fondo de puntos sutiles */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none z-0" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />

      <div className="max-w-[100vw] mx-auto relative z-10">
        
        {/* Cabecera Premium */}
        <div className="px-5 sm:px-6 lg:px-8 mb-16 md:mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Etiqueta superior con líneas */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 md:w-12 h-[1.5px] bg-primary"></span>
              <span className="text-primary font-black tracking-[0.3em] text-[10px] uppercase">
                Autorizados y Avalados
              </span>
              <span className="w-8 md:w-12 h-[1.5px] bg-primary"></span>
            </div>
            
            {/* Título mixto (Extrabold + Italic Light) */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-neutral-900 leading-[1.1] mb-6">
               Equipos que <span className="text-neutral-300 font-light italic">Inspeccionamos</span>
            </h2>
            
            <p className="text-neutral-600 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
              Contamos con el aval técnico para realizar la inspección y certificación de las marcas líderes en equipos de protección contra caídas y seguridad industrial.
            </p>
          </motion.div>
        </div>

        {/* Carrusel infinito */}
        <div className="relative w-full flex overflow-hidden group py-10">
          
          {/* Sombras en los bordes para difuminar la entrada/salida de los logos */}
          <div className="absolute top-0 left-0 h-full w-24 md:w-48 bg-gradient-to-r from-[#FBFBFD] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-24 md:w-48 bg-gradient-to-l from-[#FBFBFD] to-transparent z-20 pointer-events-none"></div>

          {/* Marquee Framer Motion - Animación fluida ajustada */}
          <div className="flex overflow-hidden py-4">
            <motion.div 
              className="flex flex-nowrap items-center group-hover:[animation-play-state:paused]"
              animate={{ x: [0, -2800] }} 
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
              style={{ width: "fit-content" }}
            >
              {/* Array triplicado para pantallas anchas y tarjetas más grandes */}
              {[...EQUIPMENT_BRANDS, ...EQUIPMENT_BRANDS, ...EQUIPMENT_BRANDS].map((brand, index) => (
                <div 
                  key={`eq-${brand.id}-${index}`} 
                  className="flex-shrink-0 w-[200px] h-[120px] md:w-[280px] md:h-[150px] mx-3 md:mx-5"
                >
                  {/* TARJETA PREMIUM: Blanca, bordes redondeados, sombra suave */}
                  <div className="relative w-full h-full bg-white rounded-[1.5rem] md:rounded-[2rem] border border-neutral-200/60 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.06)] flex items-center justify-center transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 group/card overflow-hidden p-6 md:p-8">
                    
                    {/* Contenedor interno optimizado al 100% de la tarjeta con padding */}
                    <div className="relative w-full h-full">
                      <Image
                        src={brand.src} 
                        alt={`Equipo certificado marca ${brand.name}`}
                        fill
                        className="object-contain transition-all duration-500 group-hover/card:scale-110"
                        sizes="(max-width: 768px) 200px, 300px"
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