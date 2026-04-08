"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// =========================================================
// IMPORTACIÓN DE LOGOS (Formatos originales intactos)
// =========================================================
import riducoLogo from "@/assets/logos-empresas/riduco.jpeg";
import automatizacionLogo from "@/assets/logos-empresas/automatizacion.jpeg";
import pomaLogo from "@/assets/logos-empresas/poma.svg"
import axaLogo from "@/assets/logos-empresas/axa.png";
import ingeliLogo from "@/assets/logos-empresas/ingeli.png";
import novaclimaLogo from "@/assets/logos-empresas/novaclima.jpg";
import aseoPlusLogo from "@/assets/logos-empresas/aseoplus.png";
import interaseoLogo from "@/assets/logos-empresas/interaseo.png";
import orLogo from "@/assets/logos-empresas/or.png";
import blackStoneLogo from "@/assets/logos-empresas/blackstone.png";
import powerseLogo from "@/assets/logos-empresas/powersel.png";
import termonorteLogo from "@/assets/logos-empresas/termonorte.png";
import edencoLogo from "@/assets/logos-empresas/edemco.png";
import micromineralesLogo from "@/assets/logos-empresas/microminerales.png";
import coomercaLogo from "@/assets/logos-empresas/coomerca.jpg";
import ingeomegaLogo from "@/assets/logos-empresas/ingeomega.png"; // <-- INGEOMEGA

// Array de configuración
const BRANDS = [
  { id: 1, name: "Riduco", src: riducoLogo },
  { id: 2, name: "Automatización S.A.", src: automatizacionLogo },
  { id: 3, name: "Poma Colombia", src: pomaLogo },
  { id: 4, name: "Axa Colpatria", src: axaLogo },
  { id: 5, name: "Ingeli", src: ingeliLogo },
  { id: 6, name: "NovaClima", src: novaclimaLogo },
  { id: 7, name: "Aseo Plus", src: aseoPlusLogo },
  { id: 8, name: "Interaseo", src: interaseoLogo },
  { id: 9, name: "OR", src: orLogo },
  { id: 11, name: "Black Stone", src: blackStoneLogo },
  { id: 12, name: "Powerse Energy", src: powerseLogo },
  { id: 13, name: "Termonorte", src: termonorteLogo },
  { id: 14, name: "Edenco", src: edencoLogo },
  { id: 15, name: "Microminerales", src: micromineralesLogo },
  { id: 16, name: "Coomerca", src: coomercaLogo },
  { id: 17, name: "Ingeomega Ingeniería", src: ingeomegaLogo },
];

export const AlliedBrands = () => {
  return (
    <section className="py-24 bg-[#FBFBFD] relative selection:bg-primary/20 selection:text-primary overflow-hidden">
      
      {/* Elementos Decorativos de Fondo (Mismos de la sección Servicios) */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none z-0" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />

      <div className="max-w-[100vw] mx-auto relative z-10">
        
        {/* Cabecera adaptada al nuevo diseño Premium/Limpio */}
        <div className="px-5 sm:px-6 lg:px-8 mb-16 md:mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Etiqueta superior estilo "Technical Solutions" */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 md:w-12 h-[1.5px] bg-primary"></span>
              <span className="text-primary font-black tracking-[0.3em] text-[10px] uppercase">
                Red Empresarial
              </span>
              <span className="w-8 md:w-12 h-[1.5px] bg-primary"></span>
            </div>
            
            {/* Título mixto (Extrabold + Italic Light) */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-neutral-900 leading-[1.1] mb-6">
              La Industria <span className="text-neutral-300 font-light italic">Confía en Nosotros</span>
            </h2>
            
            <p className="text-neutral-600 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
              Empresas líderes a nivel nacional e internacional respaldan nuestra trayectoria en la gestión de riesgos y operaciones técnicas de alto nivel.
            </p>
          </motion.div>
        </div>

        {/* Carrusel infinito */}
        <div className="relative w-full flex overflow-hidden group py-10">
          
          {/* Sombras en los bordes para dar profundidad al scroll (Adaptadas al color #FBFBFD) */}
          <div className="absolute top-0 left-0 h-full w-24 md:w-48 bg-gradient-to-r from-[#FBFBFD] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-24 md:w-48 bg-gradient-to-l from-[#FBFBFD] to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll group-hover:[animation-play-state:paused] w-max items-center py-4">
            
            {/* Renderizamos la lista dos veces para el scroll infinito */}
            {[...BRANDS, ...BRANDS].map((brand, index) => (
              <div 
                key={`${brand.id}-${index}`} 
                className="flex-shrink-0 w-[180px] h-[110px] md:w-[240px] md:h-[130px] mx-4 md:mx-6"
              >
                {/* TARJETA: Blanca, esquinas muy redondas, sombra suave (Exactamente como los Servicios). SIN BLANCO Y NEGRO. */}
                <div className="relative w-full h-full bg-white rounded-[1.5rem] md:rounded-[2rem] border border-neutral-200/50 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.06)] flex items-center justify-center transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 group/card overflow-hidden">
                  
                  {/* Contenedor interno para que el logo tenga "padding" y no toque los bordes */}
                  <div className="relative w-[70%] h-[70%]">
                    <Image
                      src={brand.src} 
                      alt={`Logo de ${brand.name}`}
                      fill
                      className="object-contain transition-transform duration-500 group-hover/card:scale-105"
                      sizes="(max-width: 768px) 150px, 200px"
                    />
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};