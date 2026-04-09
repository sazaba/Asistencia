"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  FileText, 
  AlertTriangle, 
  Settings, 
  Trees, 
  Layers, 
  LifeBuoy,
  ArrowUpRight,
  X,
  CheckCircle2,
  Sparkles
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  desc: string;
  longDesc: string;
  features: string[];
  norm: string;
  icon: React.ReactNode;
  size: string;
  color: string;
  detail?: string;
}

const services: Service[] = [
  {
    id: "01",
    title: "Certificación e Inspección de Equipos",
    desc: "El peso legal para ganar licitaciones. Avalamos la operatividad de sus equipos críticos.",
    longDesc: "Blindamos su empresa contra multas y le entregamos certificaciones de alto peso técnico que elevan su estatus y les abren la puerta a los contratos más exigentes. Somos inspectores autorizados de 19 marcas líderes globales (incluyendo PETZL, 3M, MSA, SINGING ROCK y DBI-SALA).",
    features: ["Aval de operatividad de equipos críticos", "Inspectores autorizados de 19 marcas líderes", "Blindaje contra multas operativas", "Certificaciones de alto peso técnico"],
    norm: "Estándares Internacionales",
    detail: "19 Marcas Globales",
    icon: <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />,
    size: "md:col-span-2 md:row-span-2",
    color: "bg-blue-50/40"
  },
  {
    id: "02",
    title: "Diseño de Programas de Prevención",
    desc: "Gestión de clase mundial que protege sus utilidades.",
    longDesc: "Estructuramos programas normativos robustos respaldados por análisis de datos. Integramos dashboards para que usted tenga el control de sus indicadores en tiempo real, demostrando un perfil de riesgo controlado que atrae a los grandes contratantes y lo destaca frente a la competencia.",
    features: ["Programas normativos robustos", "Análisis de datos avanzados", "Dashboards de indicadores en tiempo real", "Perfil de riesgo controlado"],
    norm: "Gestión Corporativa",
    icon: <FileText className="w-8 h-8" strokeWidth={1.5} />,
    size: "md:col-span-1",
    color: "bg-white/60"
  },
  {
    id: "03",
    title: "Diagnóstico Integral de Riesgos",
    desc: "Anticipación estratégica contra paradas de obra.",
    longDesc: "Analizamos sus vulnerabilidades operativas con rigor técnico para evitar costosas sanciones y accidentes. Un diagnóstico preciso no solo blinda legalmente su operación, sino que proyecta una imagen corporativa impecable, sólida y confiable ante sus inversionistas y clientes.",
    features: ["Análisis de vulnerabilidades operativas", "Prevención de sanciones y accidentes", "Blindaje legal de operación", "Proyección de imagen corporativa"],
    norm: "Rigor Técnico",
    icon: <AlertTriangle className="w-8 h-8" strokeWidth={1.5} />,
    size: "md:col-span-1",
    color: "bg-white/60"
  },
  {
    id: "04",
    title: "Asesoría Técnica en EPCC",
    desc: "Inversión inteligente en infraestructura segura.",
    longDesc: "Optimizamos la selección, uso y mantenimiento de sus equipos de protección contra caídas bajo los más altos estándares internacionales. Reduzca a cero la siniestralidad, asegure un cumplimiento normativo del 100% y demuestre que su empresa está al nivel de los grandes proyectos.",
    features: ["Selección óptima de equipos", "Mantenimiento bajo estándares", "Reducción de siniestralidad a cero", "Cumplimiento normativo del 100%"],
    norm: "Asesoría Especializada",
    icon: <Settings className="w-8 h-8" strokeWidth={1.5} />,
    size: "md:col-span-2",
    color: "bg-neutral-50/50"
  },
  {
    id: "05",
    title: "Entrenamiento en Tree Care",
    desc: "Competencias para nichos exclusivos.",
    longDesc: "Entrenamos a su equipo en técnicas de arboricultura con estándares internacionales. Un personal capacitado le permite acceder y ganar licitaciones especializadas que su competencia no puede cubrir, sin arriesgar la vida de sus trabajadores ni el patrimonio de su empresa.",
    features: ["Técnicas de arboricultura moderna", "Cumplimiento de estándares internacionales", "Acceso a licitaciones especializadas", "Protección del patrimonio empresarial"],
    norm: "Estándares Internacionales",
    icon: <Trees className="w-8 h-8" strokeWidth={1.5} />,
    size: "md:col-span-1",
    color: "bg-white/60"
  },
  {
    id: "06",
    title: "Andamios Multidireccionales",
    desc: "Operaciones en altura sin contratiempos legales.",
    longDesc: "Garantizamos la capacitación y el uso normativo de sus estructuras multidireccionales. Evite multas por incumplimiento, elimine los cierres de obra y asegure una ejecución ágil que fortalezca la confianza de sus contratantes.",
    features: ["Capacitación en uso normativo", "Prevención de multas por incumplimiento", "Eliminación de cierres de obra", "Ejecución ágil de proyectos"],
    norm: "Normatividad Vigente",
    icon: <Layers className="w-8 h-8" strokeWidth={1.5} />,
    size: "md:col-span-1",
    color: "bg-white/60"
  },
  {
    id: "07",
    title: "Protocolos de Rescate Industrial",
    desc: "Capacidad de respuesta que blinda su reputación.",
    longDesc: "Diseñamos tácticas de alta complejidad y preparamos a sus brigadas para emergencias críticas. Demostrar una preparación táctica superior ante emergencias es el sello de garantía definitivo que exigen las grandes corporaciones para adjudicar contratos.",
    features: ["Diseño de tácticas de alta complejidad", "Preparación de brigadas para emergencias", "Garantía táctica ante corporaciones", "Blindaje reputacional integral"],
    norm: "Alta Complejidad",
    detail: "Sello de Garantía",
    icon: <LifeBuoy className="w-8 h-8" strokeWidth={1.5} />,
    size: "md:col-span-2",
    color: "bg-blue-50/40"
  }
];

export const Services = () => {
  const [selected, setSelected] = useState<Service | null>(null);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
      // Evita el rebote y scroll del fondo en navegadores móviles modernos
      document.documentElement.style.overscrollBehavior = "none";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overscrollBehavior = "auto";
    }
    
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overscrollBehavior = "auto";
    };
  }, [selected]);

  return (
    <section id="servicios" className="py-16 md:py-24 bg-[#FBFBFD] relative selection:bg-primary/20 selection:text-primary">
      
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none z-0" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* COLUMNA IZQUIERDA: Sticky Content */}
          <div className="lg:w-5/12 flex flex-col items-start relative">
            <div className="lg:sticky lg:top-32 lg:pb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <span className="w-8 md:w-12 h-[1.5px] bg-primary"></span>
                  <span className="text-primary font-black tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[10px] uppercase">
                    Technical Solutions
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-neutral-900 leading-[1.1] mb-4 md:mb-6">
                  Portafolio <span className="text-neutral-300 font-light italic">Digital</span>
                </h2>
                
                <p className="text-neutral-600 text-base md:text-lg font-medium leading-relaxed mb-8 max-w-md">
                  Explora nuestras soluciones técnicas especializadas. Diseñadas a la medida para garantizar el cumplimiento normativo y la máxima seguridad en operaciones de alto riesgo.
                </p>

                {/* Footer del Sticky */}
                <div className="hidden lg:flex flex-col gap-5 border-t border-neutral-200/60 pt-6">
                  <div className="max-w-xs text-[9px] font-bold text-neutral-400 uppercase tracking-widest leading-tight">
                    Asistencia Retar S.A.S - Sabaneta / Colombia 
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Scrolling Cards */}
          <div className="lg:w-7/12 flex flex-col gap-4 md:gap-6 pb-16 md:pb-24">
            {services.map((s, index) => (
              <motion.div
                key={s.id}
                onClick={() => setSelected(s)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-white rounded-2xl md:rounded-[2rem] p-6 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] md:shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-neutral-200/50 hover:border-primary/30 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between transform-gpu will-change-transform"
                style={{ WebkitBackfaceVisibility: "hidden" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex flex-col sm:flex-row gap-5 md:gap-8 items-start relative z-10">
                  <div className="relative shrink-0 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl bg-neutral-50 text-neutral-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-primary/20">
                    {s.icon}
                  </div>

                  <div className="flex-1 w-full">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-neutral-300">PAG. {s.id}</span>
                      </div>
                      {s.detail && (
                        <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-full text-right">
                          {s.detail}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg md:text-2xl font-bold text-neutral-900 group-hover:text-primary transition-colors mb-2 md:mb-3 pr-6">
                      {s.title}
                    </h3>
                    
                    <p className="text-xs md:text-sm text-neutral-500 font-medium leading-relaxed line-clamp-3 md:line-clamp-none">
                      {s.desc}
                    </p>
                  </div>
                </div>

                <ArrowUpRight className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-4 h-4 md:w-5 md:h-5 text-neutral-300 group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* POPUP PREMIUM Y 100% RESPONSIVE ESTABILIZADO */}
      {/* ========================================== */}
      <AnimatePresence>
        {selected && (
          // Modificado: h-[100dvh] y w-screen para estabilizar en iOS/Android
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 h-[100dvh] w-screen">
            
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.3 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-neutral-900/60 backdrop-blur-md cursor-zoom-out transform-gpu"
              style={{ WebkitBackfaceVisibility: "hidden" }}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: { type: "spring", stiffness: 300, damping: 30 }
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.95, 
                y: 10,
                transition: { duration: 0.2 }
              }}
              // Modificado: h-auto para que crezca, pero respetando el max-height
              className="relative w-full max-w-2xl bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden z-[70] flex flex-col h-auto max-h-[calc(100dvh-2rem)] md:max-h-[85vh] transform-gpu will-change-transform"
              style={{ WebkitTransform: "translate3d(0,0,0)", WebkitBackfaceVisibility: "hidden" }}
            >
              
              <button 
                onClick={() => setSelected(null)} 
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:bg-neutral-100 hover:scale-105 transition-all z-[80] border border-neutral-200"
                aria-label="Cerrar modal"
              >
                <X className="w-4 h-4 md:w-5 md:h-5 text-neutral-600" />
              </button>

              {/* Modificado: Agregado overscroll-contain para encapsular el scroll interno */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-8 md:p-10 custom-scrollbar relative z-10 w-full overscroll-contain">
                
                <div className="absolute top-0 left-0 w-full h-32 md:h-64 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none -z-10" />

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6 mb-6 md:mb-8 mt-2 md:mt-0">
                  <div className="relative p-4 md:p-5 bg-primary/10 rounded-[1.2rem] md:rounded-[1.5rem] text-primary shrink-0 self-start">
                    {selected.icon}
                  </div>
                  <div className="pr-10 sm:pr-0">
                    <span className="flex items-center gap-2 text-[9px] md:text-[10px] font-black text-primary tracking-[0.2em] uppercase mb-2">
                      <Sparkles className="w-3 h-3" />
                      {selected.norm}
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 tracking-tighter leading-tight">
                      {selected.title}
                    </h2>
                  </div>
                </div>

                {/* Descripción Principal */}
                <p className="text-base md:text-lg text-neutral-600 font-medium leading-relaxed mb-8 md:mb-10 text-left">
                  {selected.longDesc}
                </p>

                {/* Grid de Características */}
                <div className="mb-8 md:mb-10">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="h-[1px] flex-1 bg-neutral-200"></span>
                    <h4 className="text-[9px] md:text-[10px] font-black text-neutral-400 tracking-[0.2em] uppercase px-2 text-center">
                      Beneficios
                    </h4>
                    <span className="h-[1px] flex-1 bg-neutral-200"></span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {selected.features.map((f, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-3 p-4 md:p-5 rounded-xl md:rounded-2xl bg-neutral-50 border border-neutral-100/80 shadow-sm"
                      >
                        <div className="mt-0.5 shrink-0 bg-primary/10 p-1 rounded-full">
                          <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                        </div>
                        <span className="text-[13px] md:text-sm font-bold text-neutral-700 leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botón Final */}
                <div className="pt-2 pb-2">
                  <button 
                    className="w-full relative overflow-hidden py-4 md:py-5 bg-neutral-900 text-white rounded-xl md:rounded-[1.5rem] font-bold text-base md:text-lg shadow-xl shadow-neutral-900/15 active:scale-[0.98] transition-transform flex items-center justify-center gap-2 md:gap-3"
                  >
                    Solicitar Asesoría
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-neutral-400" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar {
          -webkit-overflow-scrolling: touch;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        @media (min-width: 768px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 20px;
        }
      `}} />
    </section>
  );
};