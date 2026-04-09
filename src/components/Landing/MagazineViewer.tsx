'use client';

import dynamic from 'next/dynamic';
import React, { forwardRef } from 'react';
import Image from 'next/image';
import { MousePointerClick, ShieldCheck, Activity, ClipboardCheck, Globe, CalendarCheck, ArrowRight } from 'lucide-react';

// ==========================================
// IMPORTACIÓN DINÁMICA DE LA REVISTA
// ==========================================
const HTMLFlipBook = dynamic(() => import('react-pageflip'), {
  ssr: false,
});

// ==========================================
// IMPORTACIÓN ESTÁTICA DE IMÁGENES
// ==========================================
import Logo from '@/assets/logoWhite.webp'; 
import Magazine1 from '@/assets/Magazine1.png';
import Magazine2 from '@/assets/Magazine2.png';
import Magazine3 from '@/assets/Magazine3.png';
import Magazine4 from '@/assets/Magazine5.jpg';
import Magazine5 from '@/assets/Magazine4.jpg';

// ==========================================
// COMPONENTE WRAPPER
// ==========================================
export function MagazineWrapper() {
  return (
    // 100dvh garantiza que no salte en Safari al hacer scroll
    <div className="fixed inset-0 z-[100] h-[100dvh] bg-neutral-950/90 md:bg-neutral-950/95 backdrop-blur-lg md:backdrop-blur-2xl overflow-y-auto custom-scrollbar">
      <MagazineViewer />
    </div>
  );
}

// ==========================================
// COMPONENTES AUXILIARES
// ==========================================

interface PageProps {
  children: React.ReactNode;
  number?: number;
}

const Page = forwardRef<HTMLDivElement, PageProps>(({ children, number }, ref) => {
  return (
    <div 
      // Sombra optimizada: ligera en móvil, masiva en escritorio
      className="page relative rounded-r-lg md:rounded-r-xl border border-neutral-300/30 overflow-hidden bg-neutral-50 shadow-md md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),0_30px_60px_-30px_rgba(0,0,0,0.6)] transform-gpu will-change-transform" 
      style={{ WebkitBackfaceVisibility: 'hidden', WebkitTransform: 'translate3d(0,0,0)' }} 
      ref={ref}
    >
      {/* Lomo interior (Spine) realista - mix-blend deshabilitado en móvil para rendimiento */}
      <div className="absolute inset-y-0 left-0 w-6 md:w-8 bg-gradient-to-r from-black/20 via-black/5 to-transparent z-20 pointer-events-none md:mix-blend-multiply" />
      
      {/* Reflejo de luz interior (Glare) - Solo Desktop */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-tr from-black/[0.03] to-white/[0.03] z-10 pointer-events-none mix-blend-overlay" />

      <div className="h-full w-full relative z-10">
        {children}
        
        {number && (
          <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 z-50 flex items-center gap-2 md:gap-3 bg-white/90 md:bg-white/80 backdrop-blur-md px-3 md:px-5 py-1.5 md:py-2.5 rounded-xl md:rounded-2xl shadow-sm border border-neutral-200/50 hover:bg-white hover:scale-105 transition-all">
            <span className="w-4 md:w-6 h-[2px] md:h-[2.5px] bg-neutral-800 rounded-full"></span>
            <span className="text-[10px] md:text-sm font-black text-neutral-900 tracking-[0.2em] md:tracking-[0.3em]">
              {String(number).padStart(2, '0')}
            </span>
          </div>
        )}
      </div>
    </div>
  );
});
Page.displayName = 'Page';

const TechTextBlock = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  // Paddings hiper-optimizados para móvil (p-5) y escritorio (p-8)
  <div className="mb-6 md:mb-16 last:mb-0 group cursor-default p-5 sm:p-6 md:p-8 bg-neutral-100 rounded-2xl md:rounded-[2rem] border border-white/50 shadow-sm md:shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-md md:hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] md:hover:-translate-y-2 transform-gpu">
    <div className="flex items-center gap-3 sm:gap-4 md:gap-5 mb-4 md:mb-6">
      <div className="p-3 md:p-4 bg-white rounded-xl md:rounded-2xl text-primary border border-neutral-100 shadow-sm transition-all duration-500 md:group-hover:scale-110 md:group-hover:bg-primary md:group-hover:text-white md:group-hover:shadow-lg">
        <Icon className="w-6 h-6 md:w-10 md:h-10 transition-transform duration-500" strokeWidth={1.5} />
      </div>
      <h3 className="text-lg sm:text-xl md:text-3xl font-black tracking-tighter text-neutral-950 leading-tight transition-colors duration-300 md:group-hover:text-primary">
        {title}
      </h3>
    </div>
    {/* El texto tiene un max-height en móvil para evitar que se desborde del libro si la pantalla es muy pequeña */}
    <p className="text-[13px] sm:text-sm md:text-lg text-neutral-600 font-medium leading-relaxed max-w-full md:max-w-[95%] transition-all duration-300 md:group-hover:text-neutral-900 max-h-[180px] sm:max-h-[220px] md:max-h-none overflow-y-auto custom-scrollbar pr-2 md:pr-0">
      {desc}
    </p>
  </div>
);

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function MagazineViewer() {
  return (
    // pb-[env(safe-area-inset-bottom)] protege el contenido de la barra de inicio de iPhone
    <section className="py-10 sm:py-20 md:py-32 bg-[#FBFBFD] md:bg-[#FBFBFD] relative flex flex-col items-center justify-center min-h-full overflow-hidden pb-[calc(2.5rem+env(safe-area-inset-bottom))]">
      
      {/* Fondo con textura sutil */}
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none z-0" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />

      <div className="relative z-10 w-full flex flex-col items-center justify-center h-full px-2 sm:px-4 md:px-8">
        
        {/* Cabecera adaptada: Textos SIEMPRE oscuros/visibles */}
        <div className="text-center mb-8 md:mb-24 px-4 shrink-0 mt-4 md:mt-0">
          <div className="flex items-center justify-center gap-3 md:gap-5 mb-4 md:mb-6">
            <span className="w-8 md:w-12 h-[2px] md:h-[2.5px] bg-primary transition-all duration-500 hover:w-20"></span>
            <span className="text-primary font-black tracking-[0.3em] md:tracking-[0.4em] text-[9px] sm:text-[11px] md:text-sm uppercase">
              Blindaje de Proyectos
            </span>
            <span className="w-8 md:w-12 h-[2px] md:h-[2.5px] bg-primary transition-all duration-500 hover:w-20"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-neutral-950 leading-[1.1]">
            Catálogo <span className="text-neutral-400 font-light italic">de Operaciones</span>
          </h2>
          <div className="inline-flex items-center justify-center gap-2 md:gap-3 mt-6 md:mt-8 px-4 md:px-6 py-2 md:py-3 bg-white rounded-full border border-neutral-200/50 shadow-sm text-neutral-600 text-[10px] md:text-sm font-bold tracking-widest uppercase animate-pulse">
            <MousePointerClick className="w-4 h-4 md:w-5 md:h-5 shrink-0 text-primary" />
            <span>Desliza para explorar</span>
          </div>
        </div>

        {/* CONTENEDOR PRINCIPAL DEL FLIPBOOK */}
        <div className="relative w-full max-w-[1200px] flex justify-center perspective-[2000px]">
          
          {/* Sombra masiva para el libro completo (Solo Desktop) */}
          <div className="hidden md:block absolute inset-0 w-full max-w-[1000px] mx-auto bg-black/30 blur-[60px] rounded-3xl translate-y-16 -z-10" />

          {/* LETRERO A LA IZQUIERDA (Solo Desktop) */}
          <div className="hidden lg:flex absolute left-0 xl:-left-20 top-1/2 -translate-y-1/2 flex-col items-end gap-3 z-0 pointer-events-none">
            <div className="text-right">
              <span className="block text-7xl xl:text-8xl font-black text-neutral-900 tracking-tighter leading-[0.85]">
                ABRE
              </span>
              <span className="block text-5xl xl:text-6xl font-extrabold text-neutral-400 tracking-tight leading-[0.9]">
                EL REPORTE
              </span>
            </div>
            <div className="flex items-center gap-5 mt-8">
              <span className="text-sm font-bold tracking-[0.25em] text-neutral-500 uppercase">
                Haz clic en la esquina
              </span>
              <div className="p-4 bg-primary text-white rounded-full animate-bounce shadow-[0_20px_40px_rgba(var(--primary),0.3)]">
                <ArrowRight className="w-9 h-9" strokeWidth={3} />
              </div>
            </div>
          </div>

          {/* @ts-ignore */}
          <HTMLFlipBook
            width={500}
            height={680}
            size="stretch"      
            minWidth={300} 
            maxWidth={600}
            minHeight={400}     
            maxHeight={800}
            maxShadowOpacity={0.4}
            showCover={true}
            mobileScrollSupport={true}
            usePortrait={true}
            className="magazine-book mx-auto relative z-10"
            style={{ margin: '0 auto' }}
          >
            {/* ================= PÁGINA 1: PORTADA ================= */}
            <Page>
              <div className="absolute inset-0 bg-[#060912] text-white flex flex-col z-10 overflow-hidden">
                
                {/* Textura brutal: Deshabilitada en móvil, activa en desktop */}
                <div className="hidden md:block absolute inset-0 opacity-[0.35] pointer-events-none z-0 mix-blend-overlay"
                  style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"), linear-gradient(30deg, #0a1122 0%, #060912 100%)`, 
                    backgroundSize: '150px 150px, auto' 
                  }}
                />
                
                {/* Fondo seguro para móvil (hyper rápido) */}
                <div className="md:hidden absolute inset-0 bg-gradient-to-br from-[#0a1122] to-[#060912] pointer-events-none z-0" />

                {/* Malla Blueprint/Arquitectónica sutil */}
                <div className="absolute inset-0 opacity-[0.05] md:opacity-[0.08] pointer-events-none z-0 md:mix-blend-screen"
                  style={{ 
                    backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', 
                    backgroundSize: '30px 30px' 
                  }}
                />

                <div className="relative p-6 sm:p-10 md:p-16 h-full flex flex-col justify-between z-10">
                  <header>
                    <div className="relative w-full h-24 sm:h-32 md:h-52 mb-6 md:mb-8 mt-2 md:mt-4 drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
                      <Image 
                        src={Logo} 
                        alt="Asistencia Retar Logo" 
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </header>

                  <div className="mt-auto mb-10 md:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] mb-4 md:mb-8 uppercase drop-shadow-lg">
                      ESTRATEGIAS<br />
                      <span className="text-primary font-light italic">ALTA</span><br />
                      GERENCIA
                    </h1>
                    <div className="w-12 md:w-20 h-[2px] md:h-[3px] bg-primary mb-4 md:mb-8 rounded-full shadow-[0_0_20px_rgba(var(--primary),0.6)]"></div>
                    <p className="text-[9px] sm:text-[10px] md:text-sm font-black tracking-[0.2em] md:tracking-[0.4em] text-neutral-400 uppercase leading-tight">
                      Edición Estratégica 2026
                    </p>
                  </div>

                  <footer className="border-t border-neutral-800/80 pt-4 md:pt-8 text-[9px] md:text-[11px] lg:text-xs font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase text-neutral-600">
                    SST Solutions / 2026
                  </footer>
                </div>
              </div>
            </Page>

            {/* ================= PÁGINA 2: Magazine 1 ================= */}
            <Page number={2}>
              <div className="absolute inset-0 bg-neutral-900 z-10">
                <Image 
                  src={Magazine1} 
                  alt="Analítica e Inteligencia" 
                  fill 
                  className="object-cover transition-transform duration-[1.5s] md:hover:scale-110 opacity-95 md:hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority 
                />
              </div>
            </Page>

            {/* ================= PÁGINA 3: TEXTO 1 ================= */}
            <Page number={3}>
              <div className="h-full flex flex-col justify-center bg-transparent p-5 sm:p-8 md:p-16 relative z-10">
                <TechTextBlock 
                  icon={Activity}
                  title="Analítica de Datos"
                  desc="La gestión de riesgos moderna exige precisión predictiva. Al implementar herramientas de inteligencia de negocios, como dashboards dinámicos en Power BI, la alta gerencia puede visualizar en tiempo real el ciclo de vida de los equipos de alturas, las tasas de desgaste por proyecto y los cuellos de botella operativos. Cruzar estos datos le permite programar recambios y mantenimientos sin detener la producción."
                />
              </div>
            </Page>

            {/* ================= PÁGINA 4: Magazine 2 ================= */}
            <Page number={4}>
              <div className="absolute inset-0 bg-neutral-900 z-10">
                <Image 
                  src={Magazine2} 
                  alt="Linaje Técnico de Operaciones" 
                  fill 
                  className="object-cover transition-transform duration-[1.5s] md:hover:scale-110 opacity-95 md:hover:opacity-100 transform-gpu"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </Page>

            {/* ================= PÁGINA 5: TEXTO 2 ================= */}
            <Page number={5}>
              <div className="h-full flex flex-col justify-center bg-transparent p-5 sm:p-8 md:p-16 relative z-10">
                <TechTextBlock 
                  icon={ShieldCheck}
                  title="Linaje Técnico"
                  desc="En el rescate industrial y las maniobras de acceso por cuerdas, el margen de error es matemáticamente cero. Asegure el éxito de su operación respaldando su inventario exclusivamente con las especificaciones de fábrica. Esto significa exigir que el mantenimiento e inspección sean realizados por centros autorizados que dominen los estándares de un portafolio amplio."
                />
              </div>
            </Page>

            {/* ================= PÁGINA 6: Magazine 3 ================= */}
            <Page number={6}>
              <div className="absolute inset-0 bg-neutral-900 z-10">
                <Image 
                  src={Magazine3} 
                  alt="Inspección como argumento" 
                  fill 
                  className="object-cover transition-transform duration-[1.5s] md:hover:scale-110 opacity-95 md:hover:opacity-100 transform-gpu"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </Page>

            {/* ================= PÁGINA 7: TEXTO 3 ================= */}
            <Page number={7}>
              <div className="h-full flex flex-col justify-center bg-transparent p-5 sm:p-8 md:p-16 relative z-10">
                <TechTextBlock 
                  icon={ClipboardCheck}
                  title="Inspección Comercial"
                  desc="En el competitivo mercado actual, presentar un inventario rigurosamente inspeccionado y codificado es su pasaporte directo para ganar mega-licitaciones. Mostrar un programa de inspección impecable demuestra solvencia moral y operativa. Esta práctica blinda su flujo de caja contra multas paralizantes y sellamientos de obra."
                />
              </div>
            </Page>

            {/* ================= PÁGINA 8: Magazine 4 ================= */}
            <Page number={8}>
              <div className="absolute inset-0 bg-neutral-900 z-10">
                <Image 
                  src={Magazine4} 
                  alt="Idioma global de la seguridad" 
                  fill 
                  className="object-cover transition-transform duration-[1.5s] md:hover:scale-110 opacity-95 md:hover:opacity-100 transform-gpu"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </Page>

            {/* ================= PÁGINA 9: TEXTO 4 ================= */}
            <Page number={9}>
              <div className="h-full flex flex-col justify-center bg-transparent p-5 sm:p-8 md:p-16 relative z-10">
                <TechTextBlock 
                  icon={Globe}
                  title="Estándares Globales"
                  desc="Si su visión estratégica incluye interactuar con multinacionales o licitar con capital extranjero, su sistema de prevención debe regirse por estándares internacionales desde la fase cero de diseño. Alinear sus procesos operativos y de selección de equipos con normativas de alcance global elimina cualquier espacio para la improvisación local."
                />
              </div>
            </Page>

            {/* ================= PÁGINA 10: Magazine 5 ================= */}
            <Page number={10}>
              <div className="absolute inset-0 bg-neutral-900 z-10">
                <Image 
                  src={Magazine5} 
                  alt="Protección de la ruta crítica" 
                  fill 
                  className="object-cover transition-transform duration-[1.5s] md:hover:scale-110 opacity-95 md:hover:opacity-100 transform-gpu"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </Page>

            {/* ================= PÁGINA 11: TEXTO 5 ================= */}
            <Page number={11}>
              <div className="h-full flex flex-col justify-center bg-transparent p-5 sm:p-8 md:p-16 relative z-10">
                <TechTextBlock 
                  icon={CalendarCheck}
                  title="Ruta Crítica"
                  desc="La seguridad no es un departamento aislado; es una variable probabilística que impacta directamente en el tiempo y costo de su obra. Las mejores prácticas de dirección de proyectos exigen que la certificación de sus sistemas contra caídas se trate como un entregable fundamental dentro de su estructura de trabajo (EDT/WBS). Gestionar este riesgo de forma proactiva mantiene el presupuesto a salvo y cumple con las altas expectativas de todos los stakeholders."
                />
              </div>
            </Page>

            {/* ================= PÁGINA 12: CONTRAPORTADA ================= */}
            <Page>
              <div className="absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center p-6 sm:p-10 md:p-16 text-center z-10 md:rounded-r-xl overflow-hidden shadow-[inset_10px_0_30px_rgba(255,255,255,0.02)]">
                 <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/20 rounded-full blur-[60px] md:blur-[90px] -translate-y-1/2 translate-x-1/2 transform-gpu"></div>
                 <div className="absolute bottom-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-white/5 rounded-full blur-[50px] md:blur-[70px] translate-y-1/3 -translate-x-1/3 transform-gpu"></div>
                 
                 <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 mb-8 md:mb-12 drop-shadow-2xl z-10">
                    <Image 
                      src={Logo} 
                      alt="Asistencia Retar Logo" 
                      fill
                      className="object-contain"
                    />
                 </div>
                 <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-4 md:mb-6 leading-[1.1] z-10">
                    Seguridad como<br/>Ventaja Competitiva.
                 </h2>
                 <p className="text-neutral-400 text-xs sm:text-sm md:text-base font-medium mb-10 md:mb-16 max-w-[250px] md:max-w-md mx-auto z-10">
                    Transforme sus gastos operativos y gane los contratos más exigentes del mercado.
                 </p>
                 <button className="relative px-8 py-4 sm:px-10 sm:py-5 md:px-16 md:py-6 bg-primary text-white rounded-full font-black text-[10px] sm:text-xs md:text-sm tracking-[0.15em] md:tracking-[0.25em] uppercase shadow-[0_15px_30px_rgba(var(--primary),0.3)] md:shadow-[0_20px_40px_rgba(var(--primary),0.3)] md:hover:-translate-y-2 md:hover:shadow-[0_25px_60px_rgba(var(--primary),0.5)] transition-all duration-500 overflow-hidden group">
                    <span className="relative z-10">Contactar Alta Gerencia</span>
                    <div className="hidden md:block absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                 </button>
              </div>
            </Page>
            
          </HTMLFlipBook>
        </div>
      </div>
      
      {/* Scrollbar styles para el interior del texto en móvil si es necesario */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar {
          -webkit-overflow-scrolling: touch;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #d1d5db;
          border-radius: 10px;
        }
      `}} />
    </section>
  );
}