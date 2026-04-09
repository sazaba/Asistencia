'use client';

import dynamic from 'next/dynamic';
import React, { forwardRef } from 'react';
import Image from 'next/image';
import { 
  MousePointerClick, 
  ShieldCheck, 
  Activity, 
  ClipboardCheck, 
  Globe, 
  CalendarCheck, 
  ArrowRight,
  ArrowLeftRight 
} from 'lucide-react';

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
    <div className="fixed inset-0 z-[100] h-[100dvh] bg-neutral-950/90 md:bg-neutral-950/95 backdrop-blur-xl md:backdrop-blur-2xl overflow-y-auto custom-scrollbar">
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
      className="page relative rounded-r-lg md:rounded-r-xl border border-white/40 overflow-hidden bg-neutral-50 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)] transform-gpu will-change-transform" 
      style={{ WebkitBackfaceVisibility: 'hidden', WebkitTransform: 'translate3d(0,0,0)' }} 
      ref={ref}
    >
      {/* Lomo interior (Spine) realista */}
      <div className="absolute inset-y-0 left-0 w-8 md:w-12 bg-gradient-to-r from-black/25 via-black/5 to-transparent z-20 pointer-events-none md:mix-blend-multiply" />
      
      {/* Reflejo de luz interior (Glare) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent z-10 pointer-events-none mix-blend-overlay" />

      <div className="h-full w-full relative z-10 flex flex-col">
        {children}
        
        {number && (
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-50 flex items-center gap-2 md:gap-3 bg-white/70 backdrop-blur-xl px-4 md:px-5 py-2 md:py-2.5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white hover:bg-white hover:scale-105 transition-all">
            <span className="w-4 md:w-6 h-[2px] bg-neutral-800 rounded-full"></span>
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
  <div className="flex flex-col h-full max-h-full p-5 sm:p-8 md:p-12 bg-white/60 backdrop-blur-xl rounded-[2rem] border border-white shadow-[0_15px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] hover:-translate-y-1">
    <div className="flex items-center gap-4 mb-4 md:mb-8 shrink-0">
      <div className="p-3 md:p-5 bg-white rounded-2xl md:rounded-[1.25rem] text-primary shadow-sm border border-neutral-100">
        <Icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl sm:text-2xl md:text-4xl font-black tracking-tighter text-neutral-900 leading-none">
        {title}
      </h3>
    </div>
    
    {/* Contenedor flexible con scroll interno para evitar que el texto se corte */}
    <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 md:pr-4">
      <p className="text-[14px] sm:text-[15px] md:text-[19px] text-neutral-600 font-medium leading-relaxed md:leading-[1.7] text-pretty">
        {desc}
      </p>
    </div>
  </div>
);

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function MagazineViewer() {
  return (
    <section className="py-12 sm:py-20 md:py-32 bg-gradient-to-b from-[#F4F4F8] to-[#EAEAF0] relative flex flex-col items-center justify-center min-h-full overflow-hidden pb-[calc(5rem+env(safe-area-inset-bottom))]">
      
      {/* Fondo con textura de lujo */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none z-0" 
           style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="relative z-10 w-full flex flex-col items-center justify-center h-full px-2 sm:px-4 md:px-8">
        
        {/* Cabecera Premium */}
        <div className="text-center mb-10 md:mb-20 px-4 shrink-0 mt-4 md:mt-0 relative z-20">
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="w-10 md:w-16 h-[2px] bg-primary"></span>
            <span className="text-primary font-black tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-xs uppercase">
              Blindaje de Proyectos
            </span>
            <span className="w-10 md:w-16 h-[2px] bg-primary"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-neutral-900 leading-[1]">
            Catálogo <span className="text-neutral-400 font-light italic">de Operaciones</span>
          </h2>
        </div>

        {/* CONTENEDOR PRINCIPAL DEL FLIPBOOK */}
        <div className="relative w-full max-w-[1200px] flex justify-center perspective-[2500px]">
          
          {/* EFECTO FLOTANTE (Sombra masiva dinámica para Desktop y Móvil) */}
          <div className="absolute inset-0 w-[85%] md:w-full max-w-[900px] mx-auto bg-black/40 blur-[40px] md:blur-[80px] rounded-[3rem] translate-y-12 md:translate-y-20 -z-10 animate-floating-shadow" />

          {/* LETRERO A LA IZQUIERDA (Solo Desktop) */}
          <div className="hidden lg:flex absolute left-0 xl:-left-24 top-1/2 -translate-y-1/2 flex-col items-end gap-3 z-0 pointer-events-none">
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
                Haz clic y arrastra
              </span>
              <div className="p-4 bg-primary text-white rounded-full animate-bounce shadow-[0_20px_40px_rgba(var(--primary),0.3)]">
                <ArrowRight className="w-8 h-8" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* INDICADOR DE SWIPE PARA MÓVILES */}
          <div className="md:hidden absolute -bottom-16 left-0 right-0 flex justify-center z-50 pointer-events-none">
             <div className="flex items-center gap-3 bg-neutral-900/90 backdrop-blur-md px-6 py-3 rounded-full text-white shadow-2xl border border-white/10 animate-bounce">
               <ArrowLeftRight className="w-5 h-5 text-primary" />
               <span className="text-[11px] font-black tracking-widest uppercase">
                 Desliza las páginas
               </span>
             </div>
          </div>

          {/* @ts-ignore */}
          <HTMLFlipBook
            width={550}
            height={750}
            size="stretch"      
            minWidth={300} 
            maxWidth={650}
            minHeight={450}     
            maxHeight={850}
            maxShadowOpacity={0.3}
            showCover={true}
            mobileScrollSupport={true}
            usePortrait={true}
            className="magazine-book mx-auto relative z-10 drop-shadow-2xl"
            style={{ margin: '0 auto' }}
          >
            {/* ================= PÁGINA 1: PORTADA ================= */}
            <Page>
              <div className="absolute inset-0 bg-neutral-950 text-white flex flex-col z-10 overflow-hidden">
                <div className="absolute inset-0 opacity-40 pointer-events-none z-0 mix-blend-overlay"
                  style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, 
                  }}
                />
                
                <div className="relative p-8 md:p-16 h-full flex flex-col justify-between z-10">
                  <header>
                    <div className="relative w-full h-28 sm:h-36 md:h-48 mb-8 drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
                      <Image 
                        src={Logo} 
                        alt="Asistencia Retar Logo" 
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </header>

                  <div className="mt-auto mb-10 md:mb-20">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6 uppercase drop-shadow-lg">
                      ESTRATEGIAS<br />
                      <span className="text-primary font-light italic">ALTA</span><br />
                      GERENCIA
                    </h1>
                    <div className="w-16 md:w-24 h-[3px] bg-primary mb-6 md:mb-8 rounded-full shadow-[0_0_20px_rgba(var(--primary),0.6)]"></div>
                    <p className="text-[10px] sm:text-xs md:text-sm font-black tracking-[0.3em] md:tracking-[0.4em] text-neutral-400 uppercase">
                      Edición Estratégica 2026
                    </p>
                  </div>
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
                  className="object-cover transition-transform duration-[2s] md:hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority 
                />
              </div>
            </Page>

            {/* ================= PÁGINA 3: TEXTO 1 ================= */}
            <Page number={3}>
              <div className="h-full flex flex-col justify-center bg-transparent p-4 sm:p-8 md:p-12 relative z-10">
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
                  className="object-cover transition-transform duration-[2s] md:hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </Page>

            {/* ================= PÁGINA 5: TEXTO 2 ================= */}
            <Page number={5}>
              <div className="h-full flex flex-col justify-center bg-transparent p-4 sm:p-8 md:p-12 relative z-10">
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
                  className="object-cover transition-transform duration-[2s] md:hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </Page>

            {/* ================= PÁGINA 7: TEXTO 3 ================= */}
            <Page number={7}>
              <div className="h-full flex flex-col justify-center bg-transparent p-4 sm:p-8 md:p-12 relative z-10">
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
                  className="object-cover transition-transform duration-[2s] md:hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </Page>

            {/* ================= PÁGINA 9: TEXTO 4 ================= */}
            <Page number={9}>
              <div className="h-full flex flex-col justify-center bg-transparent p-4 sm:p-8 md:p-12 relative z-10">
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
                  className="object-cover transition-transform duration-[2s] md:hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </Page>

            {/* ================= PÁGINA 11: TEXTO 5 ================= */}
            <Page number={11}>
              <div className="h-full flex flex-col justify-center bg-transparent p-4 sm:p-8 md:p-12 relative z-10">
                <TechTextBlock 
                  icon={CalendarCheck}
                  title="Ruta Crítica"
                  desc="La seguridad no es un departamento aislado; es una variable probabilística que impacta directamente en el tiempo y costo de su obra. Las mejores prácticas de dirección de proyectos exigen que la certificación de sus sistemas contra caídas se trate como un entregable fundamental dentro de su estructura de trabajo (EDT/WBS). Gestionar este riesgo de forma proactiva mantiene el presupuesto a salvo y cumple con las altas expectativas de todos los stakeholders."
                />
              </div>
            </Page>

            {/* ================= PÁGINA 12: CONTRAPORTADA ================= */}
            <Page>
              <div className="absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center p-8 sm:p-12 md:p-16 text-center z-10 md:rounded-r-xl overflow-hidden shadow-[inset_10px_0_30px_rgba(255,255,255,0.03)]">
                 <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/20 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
                 
                 <div className="relative w-32 h-32 md:w-56 md:h-56 mb-10 drop-shadow-2xl z-10">
                    <Image 
                      src={Logo} 
                      alt="Asistencia Retar Logo" 
                      fill
                      className="object-contain"
                    />
                 </div>
                 <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-[1.05] z-10">
                    Seguridad como<br/>Ventaja Competitiva.
                 </h2>
                 <p className="text-neutral-400 text-sm md:text-lg font-medium mb-12 max-w-sm md:max-w-md mx-auto z-10">
                    Transforme sus gastos operativos y gane los contratos más exigentes del mercado.
                 </p>
                 <button className="relative px-10 py-5 md:px-16 md:py-6 bg-primary text-white rounded-full font-black text-xs md:text-sm tracking-[0.2em] md:tracking-[0.25em] uppercase shadow-[0_20px_40px_rgba(var(--primary),0.4)] md:hover:-translate-y-2 md:hover:shadow-[0_25px_60px_rgba(var(--primary),0.6)] transition-all duration-500 overflow-hidden group">
                    <span className="relative z-10">Contactar Alta Gerencia</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                 </button>
              </div>
            </Page>
            
          </HTMLFlipBook>
        </div>
      </div>
      
      {/* Estilos inyectados para el scrollbar premium y la animación de flotación */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatingShadow {
          0%, 100% { opacity: 0.5; transform: translateY(3rem) scale(1); }
          50% { opacity: 0.8; transform: translateY(4rem) scale(1.05); }
        }
        .animate-floating-shadow {
          animation: floatingShadow 6s ease-in-out infinite;
        }
        .custom-scrollbar {
          -webkit-overflow-scrolling: touch;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(163, 163, 163, 0.4);
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(163, 163, 163, 0.8);
        }
      `}} />
    </section>
  );
}