// 'use client';

// import dynamic from 'next/dynamic';
// import React, { forwardRef } from 'react';
// import Image from 'next/image';
// import { MousePointerClick, ShieldCheck, Activity, ClipboardCheck, Globe, CalendarCheck, ArrowRight } from 'lucide-react';

// // ==========================================
// // IMPORTACIÓN DINÁMICA DE LA REVISTA
// // ==========================================
// const HTMLFlipBook = dynamic(() => import('react-pageflip'), {
//   ssr: false,
// });

// // ==========================================
// // IMPORTACIÓN ESTÁTICA DE IMÁGENES
// // ==========================================
// import Logo from '@/assets/logoWhite.webp'; 
// import Magazine1 from '@/assets/Magazine1.png';
// import Magazine2 from '@/assets/Magazine2.png';
// import Magazine3 from '@/assets/Magazine3.png';
// // Asegúrate de subir estas dos nuevas imágenes a la ruta correspondiente
// import Magazine4 from '@/assets/Magazine3.png';
// import Magazine5 from '@/assets/Magazine3.png';

// // ==========================================
// // COMPONENTE WRAPPER
// // ==========================================
// export function MagazineWrapper() {
//   return (
//     <div className="fixed inset-0 z-[60] bg-white overflow-y-auto">
//       <MagazineViewer />
//     </div>
//   );
// }

// // ==========================================
// // COMPONENTES AUXILIARES
// // ==========================================

// interface PageProps {
//   children: React.ReactNode;
//   number?: number;
// }

// const Page = forwardRef<HTMLDivElement, PageProps>(({ children, number }, ref) => {
//   return (
//     <div 
//       className="page bg-white relative rounded-2xl md:rounded-[2rem] shadow-[inset_0_0_40px_rgba(0,0,0,0.03)] border border-neutral-200/60 overflow-hidden" 
//       ref={ref}
//     >
//       <div className="h-full w-full relative">
//         {children}
        
//         {number && (
//           <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-neutral-100">
//             <span className="w-4 h-[1px] bg-neutral-300"></span>
//             <span className="text-[10px] md:text-xs font-extrabold text-neutral-500 tracking-[0.25em]">
//               {String(number).padStart(2, '0')}
//             </span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// });
// Page.displayName = 'Page';

// const TechTextBlock = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
//   <div className="mb-9 md:mb-14 last:mb-0">
//     <div className="flex items-center gap-4 mb-5">
//       <div className="p-4 bg-neutral-50 rounded-2xl text-primary border border-neutral-100 shadow-inner">
//         <Icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.25} />
//       </div>
//       <h3 className="text-xl md:text-2xl font-black tracking-tighter text-neutral-900 leading-tight">
//         {title}
//       </h3>
//     </div>
//     <p className="text-sm md:text-base text-neutral-600 font-medium leading-relaxed max-w-[95%]">
//       {desc}
//     </p>
//   </div>
// );

// // ==========================================
// // COMPONENTE PRINCIPAL
// // ==========================================

// export default function MagazineViewer() {
//   return (
//     <section className="py-20 md:py-32 bg-[#FBFBFD] relative flex flex-col items-center justify-center min-h-[90vh] overflow-hidden">
      
//       <div className="absolute inset-0 opacity-[0.15] pointer-events-none z-0" 
//            style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
//       />

//       <div className="relative z-10 w-full flex flex-col items-center justify-center h-full px-4 md:px-8">
        
//         <div className="text-center mb-12 md:mb-20 px-4 shrink-0">
//           <div className="flex items-center justify-center gap-4 mb-4">
//             <span className="w-8 h-[1px] bg-primary"></span>
//             <span className="text-primary font-black tracking-[0.3em] text-[10px] md:text-xs uppercase">
//               Blindaje de Proyectos
//             </span>
//             <span className="w-8 h-[1px] bg-primary"></span>
//           </div>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-neutral-900 leading-[1.1]">
//             Catálogo <span className="text-neutral-300 font-light italic">de Operaciones</span>
//           </h2>
//           <div className="flex items-center justify-center gap-2 mt-6 text-neutral-500 text-xs md:text-sm font-bold tracking-widest uppercase animate-pulse">
//             <MousePointerClick className="w-4 h-4 shrink-0" />
//             <span>Desliza para maximizar la rentabilidad</span>
//           </div>
//         </div>

//         {/* CONTENEDOR PRINCIPAL DEL FLIPBOOK */}
//         <div className="relative w-full max-w-[1200px] flex justify-center drop-shadow-[0_50px_100px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:scale-[1.01]">
          
//           {/* LETRERO A LA IZQUIERDA */}
//           <div className="hidden lg:flex absolute left-4 xl:-left-12 top-1/2 -translate-y-1/2 flex-col items-end gap-2 z-0 pointer-events-none">
//             <div className="text-right">
//               <span className="block text-6xl xl:text-7xl font-black text-neutral-900 tracking-tighter leading-[0.85]">
//                 ABRE
//               </span>
//               <span className="block text-4xl xl:text-5xl font-extrabold text-neutral-400 tracking-tight leading-[0.9]">
//                 EL REPORTE
//               </span>
//             </div>
//             <div className="flex items-center gap-4 mt-6">
//               <span className="text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
//                 Haz clic en la esquina
//               </span>
//               <div className="p-3 bg-primary text-white rounded-full animate-bounce shadow-xl shadow-primary/20">
//                 <ArrowRight className="w-8 h-8" strokeWidth={2.5} />
//               </div>
//             </div>
//           </div>

//           {/* @ts-ignore */}
//           <HTMLFlipBook
//             width={500}
//             height={680}
//             size="stretch"      
//             minWidth={315}
//             maxWidth={600}
//             minHeight={400}     
//             maxHeight={800}
//             maxShadowOpacity={0.3}
//             showCover={true}
//             mobileScrollSupport={true}
//             usePortrait={true}
//             className="magazine-book mx-auto relative z-10"
//             style={{ margin: '0 auto' }}
//           >
//             {/* ================= PÁGINA 1: PORTADA ================= */}
//             <Page>
//               <div className="absolute inset-0 bg-[#0a0f1c] text-white flex flex-col z-10">
//                 <div className="relative p-8 md:p-14 h-full flex flex-col justify-between">
//                   <header>
//                     <div className="relative w-full h-32 md:h-48 mb-6 mt-4">
//                       <Image 
//                         src={Logo} 
//                         alt="Asistencia Retar Logo" 
//                         fill
//                         className="object-contain"
//                         priority
//                       />
//                     </div>
//                   </header>

//                   <div className="mt-auto mb-16">
//                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1] mb-6 uppercase">
//                       ESTRATEGIAS<br />
//                       <span className="text-primary font-light italic">ALTA</span><br />
//                       GERENCIA
//                     </h1>
//                     <div className="w-16 h-[2.5px] bg-primary mb-6 rounded-full"></div>
//                     <p className="text-[11px] md:text-xs font-black tracking-[0.3em] text-neutral-400 uppercase leading-none">
//                       Edición Estratégica 2026
//                     </p>
//                   </div>

//                   <footer className="border-t border-neutral-800 pt-6 text-[10px] md:text-[11px] font-bold tracking-widest uppercase text-neutral-500">
//                     SST Solutions / 2026
//                   </footer>
//                 </div>
//               </div>
//             </Page>

//             {/* ================= PÁGINA 2: Magazine 1 ================= */}
//             <Page number={2}>
//               <div className="absolute inset-0 bg-neutral-100 z-10">
//                 <Image 
//                   src={Magazine1} 
//                   alt="Analítica e Inteligencia" 
//                   fill 
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                   placeholder="blur"
//                 />
//               </div>
//             </Page>

//             {/* ================= PÁGINA 3: TEXTO 1 ================= */}
//             <Page number={3}>
//               <div className="h-full flex flex-col justify-center bg-white p-8 md:p-16 relative z-10">
//                 <TechTextBlock 
//                   icon={Activity}
//                   title="Analítica de Datos"
//                   desc="La gestión de riesgos moderna exige precisión predictiva. Al implementar herramientas de inteligencia de negocios, como dashboards dinámicos en Power BI, la alta gerencia puede visualizar en tiempo real el ciclo de vida de los equipos de alturas, las tasas de desgaste por proyecto y los cuellos de botella operativos. Cruzar estos datos le permite programar recambios y mantenimientos sin detener la producción." // [cite: 7, 8]
//                 />
//               </div>
//             </Page>

//             {/* ================= PÁGINA 4: Magazine 2 ================= */}
//             <Page number={4}>
//               <div className="absolute inset-0 bg-neutral-100 z-10">
//                 <Image 
//                   src={Magazine2} 
//                   alt="Linaje Técnico de Operaciones" 
//                   fill 
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                   placeholder="blur"
//                 />
//               </div>
//             </Page>

//             {/* ================= PÁGINA 5: TEXTO 2 ================= */}
//             <Page number={5}>
//               <div className="h-full flex flex-col justify-center bg-white p-8 md:p-16 relative z-10">
//                 <TechTextBlock 
//                   icon={ShieldCheck}
//                   title="Linaje Técnico"
//                   desc="En el rescate industrial y las maniobras de acceso por cuerdas, el margen de error es matemáticamente cero. Asegure el éxito de su operación respaldando su inventario exclusivamente con las especificaciones de fábrica. Esto significa exigir que el mantenimiento e inspección sean realizados por centros autorizados que dominen los estándares de un portafolio amplio." // [cite: 11, 12, 13]
//                 />
//               </div>
//             </Page>

//             {/* ================= PÁGINA 6: Magazine 3 ================= */}
//             <Page number={6}>
//               <div className="absolute inset-0 bg-neutral-100 z-10">
//                 <Image 
//                   src={Magazine3} 
//                   alt="Inspección como argumento" 
//                   fill 
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                   placeholder="blur"
//                 />
//               </div>
//             </Page>

//             {/* ================= PÁGINA 7: TEXTO 3 ================= */}
//             <Page number={7}>
//               <div className="h-full flex flex-col justify-center bg-white p-8 md:p-16 relative z-10">
//                 <TechTextBlock 
//                   icon={ClipboardCheck}
//                   title="Inspección Comercial"
//                   desc="En el competitivo mercado actual, presentar un inventario rigurosamente inspeccionado y codificado es su pasaporte directo para ganar mega-licitaciones. Mostrar un programa de inspección impecable demuestra solvencia moral y operativa. Esta práctica blinda su flujo de caja contra multas paralizantes y sellamientos de obra." // [cite: 17, 19, 20]
//                 />
//               </div>
//             </Page>

//             {/* ================= PÁGINA 8: Magazine 4 (NUEVA) ================= */}
//             <Page number={8}>
//               <div className="absolute inset-0 bg-neutral-100 z-10">
//                 <Image 
//                   src={Magazine4} 
//                   alt="Idioma global de la seguridad" 
//                   fill 
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                 />
//               </div>
//             </Page>

//             {/* ================= PÁGINA 9: TEXTO 4 ================= */}
//             <Page number={9}>
//               <div className="h-full flex flex-col justify-center bg-white p-8 md:p-16 relative z-10">
//                 <TechTextBlock 
//                   icon={Globe}
//                   title="Estándares Globales"
//                   desc="Si su visión estratégica incluye interactuar con multinacionales o licitar con capital extranjero, su sistema de prevención debe regirse por estándares internacionales desde la fase cero de diseño. Alinear sus procesos operativos y de selección de equipos con normativas de alcance global elimina cualquier espacio para la improvisación local." // [cite: 22, 23]
//                 />
//               </div>
//             </Page>

//             {/* ================= PÁGINA 10: Magazine 5 (NUEVA) ================= */}
//             <Page number={10}>
//               <div className="absolute inset-0 bg-neutral-100 z-10">
//                 <Image 
//                   src={Magazine5} 
//                   alt="Protección de la ruta crítica" 
//                   fill 
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                 />
//               </div>
//             </Page>

//             {/* ================= PÁGINA 11: TEXTO 5 ================= */}
//             <Page number={11}>
//               <div className="h-full flex flex-col justify-center bg-white p-8 md:p-16 relative z-10">
//                 <TechTextBlock 
//                   icon={CalendarCheck}
//                   title="Ruta Crítica del Cronograma"
//                   desc="La seguridad no es un departamento aislado; es una variable probabilística que impacta directamente en el tiempo y costo de su obra. Las mejores prácticas de dirección de proyectos exigen que la certificación de sus sistemas contra caídas se trate como un entregable fundamental dentro de su estructura de trabajo (EDT/WBS). Gestionar este riesgo de forma proactiva mantiene el presupuesto a salvo y cumple con las altas expectativas de todos los stakeholders." // [cite: 26, 27, 28]
//                 />
//               </div>
//             </Page>

//             {/* ================= PÁGINA 12: CONTRAPORTADA ================= */}
//             <Page>
//               <div className="absolute inset-0 bg-primary flex flex-col items-center justify-center p-8 md:p-16 text-center z-10 rounded-r-2xl md:rounded-r-[2rem]">
//                  <div className="relative w-24 h-24 md:w-32 md:h-32 mb-8">
//                     <Image 
//                       src={Logo} 
//                       alt="Asistencia Retar Logo" 
//                       fill
//                       className="object-contain"
//                     />
//                  </div>
//                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter mb-4 leading-tight">
//                     Seguridad como<br/>Ventaja Competitiva.
//                  </h2>
//                  <p className="text-primary-foreground/70 text-xs md:text-sm font-medium mb-12 max-w-sm">
//                     Transforme sus gastos operativos y gane los contratos más exigentes del mercado.
//                  </p>
//                  <button className="px-8 py-4 md:px-12 md:py-6 bg-white text-primary rounded-full font-black text-[10px] md:text-xs tracking-[0.2em] uppercase hover:scale-105 hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] transition-all duration-300">
//                     Contactar Alta Gerencia
//                  </button>
//               </div>
//             </Page>
            
//           </HTMLFlipBook>
//         </div>
//       </div>
//     </section>
//   );
// }


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
import Magazine5 from '@/assets/Magazine4.jpg'

// ==========================================
// COMPONENTE WRAPPER
// ==========================================
export function MagazineWrapper() {
  return (
    <div className="fixed inset-0 z-[100] bg-neutral-950/95 backdrop-blur-2xl overflow-y-auto">
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
      // Sombra del lomo para dar profundidad 3D
      className="page relative rounded-r-lg md:rounded-r-xl border border-neutral-300/30 overflow-hidden bg-neutral-50 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),0_30px_60px_-30px_rgba(0,0,0,0.6)]" 
      ref={ref}
    >
      {/* Lomo interior (Spine) realista */}
      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/20 via-black/5 to-transparent z-20 pointer-events-none mix-blend-multiply" />
      
      {/* Reflejo de luz interior (Glare) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/[0.03] to-white/[0.03] z-10 pointer-events-none mix-blend-overlay" />

      <div className="h-full w-full relative z-10">
        {children}
        
        {number && (
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-50 flex items-center gap-3 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-sm border border-neutral-200/50 hover:bg-white hover:scale-105 transition-all">
            <span className="w-6 h-[2.5px] bg-neutral-800 rounded-full"></span>
            <span className="text-[11px] md:text-sm font-black text-neutral-900 tracking-[0.3em]">
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
  <div className="mb-10 md:mb-16 last:mb-0 group cursor-default p-6 md:p-8 bg-neutral-100 rounded-[2rem] border border-white/50 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2">
    <div className="flex items-center gap-5 mb-6">
      <div className="p-4 bg-white rounded-2xl text-primary border border-neutral-100 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg">
        <Icon className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-500" strokeWidth={1.5} />
      </div>
      <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-neutral-950 leading-tight transition-colors duration-300 group-hover:text-primary">
        {title}
      </h3>
    </div>
    <p className="text-base md:text-lg text-neutral-600 font-medium leading-relaxed max-w-[95%] transition-all duration-300 group-hover:text-neutral-900">
      {desc}
    </p>
  </div>
);

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function MagazineViewer() {
  return (
    <section className="py-20 md:py-32 bg-[#FBFBFD] relative flex flex-col items-center justify-center min-h-[95vh] overflow-hidden">
      
      {/* Fondo con textura sutil */}
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none z-0" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />

      <div className="relative z-10 w-full flex flex-col items-center justify-center h-full px-4 md:px-8">
        
        <div className="text-center mb-16 md:mb-24 px-4 shrink-0">
          <div className="flex items-center justify-center gap-5 mb-6">
            <span className="w-12 h-[2.5px] bg-primary transition-all duration-500 hover:w-20"></span>
            <span className="text-primary font-black tracking-[0.4em] text-[11px] md:text-sm uppercase">
              Blindaje de Proyectos
            </span>
            <span className="w-12 h-[2.5px] bg-primary transition-all duration-500 hover:w-20"></span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-neutral-950 leading-[1.1]">
            Catálogo <span className="text-neutral-300 font-light italic">de Operaciones</span>
          </h2>
          <div className="inline-flex items-center justify-center gap-3 mt-8 px-6 py-3 bg-white rounded-full border border-neutral-200/50 shadow-sm text-neutral-600 text-xs md:text-sm font-bold tracking-widest uppercase animate-pulse">
            <MousePointerClick className="w-5 h-5 shrink-0 text-primary" />
            <span>Desliza para maximizar la rentabilidad</span>
          </div>
        </div>

        {/* CONTENEDOR PRINCIPAL DEL FLIPBOOK */}
        <div className="relative w-full max-w-[1200px] flex justify-center perspective-[2000px]">
          
          {/* Sombra masiva para el libro completo */}
          <div className="absolute inset-0 w-full max-w-[1000px] mx-auto bg-black/30 blur-[60px] rounded-3xl translate-y-16 -z-10" />

          {/* LETRERO A LA IZQUIERDA */}
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
            minWidth={315}
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
           {/* ================= PÁGINA 1: PORTADA ================= */}
            <Page>
              <div className="absolute inset-0 bg-[#060912] text-white flex flex-col z-10 overflow-hidden">
                
                {/* Textura brutal: Ruido SVG (Hormigón crudo) y degradado oscuro */}
                <div className="absolute inset-0 opacity-[0.35] pointer-events-none z-0 mix-blend-overlay"
                  style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"), linear-gradient(30deg, #0a1122 0%, #060912 100%)`, 
                    backgroundSize: '150px 150px, auto' 
                  }}
                />
                
                {/* Malla Blueprint/Arquitectónica sutil */}
                <div className="absolute inset-0 opacity-[0.08] pointer-events-none z-0 mix-blend-screen"
                  style={{ 
                    backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', 
                    backgroundSize: '40px 40px' 
                  }}
                />

                <div className="relative p-10 md:p-16 h-full flex flex-col justify-between z-10">
                  <header>
                    <div className="relative w-full h-36 md:h-52 mb-8 mt-4 drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
                      <Image 
                        src={Logo} 
                        alt="Asistencia Retar Logo" 
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </header>

                  <div className="mt-auto mb-16">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] mb-8 uppercase drop-shadow-lg">
                      ESTRATEGIAS<br />
                      <span className="text-primary font-light italic">ALTA</span><br />
                      GERENCIA
                    </h1>
                    <div className="w-20 h-[3px] bg-primary mb-8 rounded-full shadow-[0_0_20px_rgba(var(--primary),0.6)]"></div>
                    <p className="text-xs md:text-sm font-black tracking-[0.4em] text-neutral-400 uppercase leading-none">
                      Edición Estratégica 2026
                    </p>
                  </div>

                  <footer className="border-t border-neutral-800/80 pt-8 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-neutral-600">
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
                  className="object-cover transition-transform duration-[1.5s] hover:scale-110 opacity-95 hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                />
              </div>
            </Page>

            {/* ================= PÁGINA 3: TEXTO 1 ================= */}
            <Page number={3}>
              <div className="h-full flex flex-col justify-center bg-transparent p-10 md:p-16 relative z-10">
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
                  className="object-cover transition-transform duration-[1.5s] hover:scale-110 opacity-95 hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                />
              </div>
            </Page>

            {/* ================= PÁGINA 5: TEXTO 2 ================= */}
            <Page number={5}>
              <div className="h-full flex flex-col justify-center bg-transparent p-10 md:p-16 relative z-10">
                <TechTextBlock 
                  icon={ShieldCheck}
                  title="Linaje Técnico"
                  desc="En el rescate industrial y las maniobras de acceso por cuerdas, el margen de error es matemáticamente cero. Asegure el éxito de su operation respaldando su inventario exclusivamente con las especificaciones de fábrica. Esto significa exigir que el mantenimiento e inspección sean realizados por centros autorizados que dominen los estándares de un portafolio amplio."
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
                  className="object-cover transition-transform duration-[1.5s] hover:scale-110 opacity-95 hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                />
              </div>
            </Page>

            {/* ================= PÁGINA 7: TEXTO 3 ================= */}
            <Page number={7}>
              <div className="h-full flex flex-col justify-center bg-transparent p-10 md:p-16 relative z-10">
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
                  className="object-cover transition-transform duration-[1.5s] hover:scale-110 opacity-95 hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Page>

            {/* ================= PÁGINA 9: TEXTO 4 ================= */}
            <Page number={9}>
              <div className="h-full flex flex-col justify-center bg-transparent p-10 md:p-16 relative z-10">
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
                  className="object-cover transition-transform duration-[1.5s] hover:scale-110 opacity-95 hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Page>

            {/* ================= PÁGINA 11: TEXTO 5 ================= */}
            <Page number={11}>
              <div className="h-full flex flex-col justify-center bg-transparent p-10 md:p-16 relative z-10">
                <TechTextBlock 
                  icon={CalendarCheck}
                  title="Ruta Crítica del Cronograma"
                  desc="La seguridad no es un departamento aislado; es una variable probabilística que impacta directamente en el tiempo y costo de su obra. Las mejores prácticas de dirección de proyectos exigen que la certificación de sus sistemas contra caídas se trate como un entregable fundamental dentro de su estructura de trabajo (EDT/WBS). Gestionar este riesgo de forma proactiva mantiene el presupuesto a salvo y cumple con las altas expectativas de todos los stakeholders."
                />
              </div>
            </Page>

            {/* ================= PÁGINA 12: CONTRAPORTADA ================= */}
            <Page>
              <div className="absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center p-10 md:p-16 text-center z-10 md:rounded-r-xl overflow-hidden shadow-[inset_10px_0_30px_rgba(255,255,255,0.02)]">
                 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[90px] -translate-y-1/2 translate-x-1/2"></div>
                 <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[70px] translate-y-1/3 -translate-x-1/3"></div>
                 
                 <div className="relative w-36 h-36 md:w-48 md:h-48 mb-12 drop-shadow-2xl z-10">
                    <Image 
                      src={Logo} 
                      alt="Asistencia Retar Logo" 
                      fill
                      className="object-contain"
                    />
                 </div>
                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6 leading-[1.1] z-10">
                    Seguridad como<br/>Ventaja Competitiva.
                 </h2>
                 <p className="text-neutral-400 text-sm md:text-base font-medium mb-16 max-w-md z-10">
                    Transforme sus gastos operativos y gane los contratos más exigentes del mercado.
                 </p>
                 <button className="relative px-12 py-5 md:px-16 md:py-6 bg-primary text-white rounded-full font-black text-xs md:text-sm tracking-[0.25em] uppercase shadow-[0_20px_40px_rgba(var(--primary),0.3)] hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(var(--primary),0.5)] transition-all duration-500 overflow-hidden group">
                    <span className="relative z-10">Contactar Alta Gerencia</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                 </button>
              </div>
            </Page>
            
          </HTMLFlipBook>
        </div>
      </div>
    </section>
  );
}