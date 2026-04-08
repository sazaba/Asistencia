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
  ArrowDown,
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

  // Evitar scroll cuando el modal está abierto
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selected]);

  return (
    <section id="servicios" className="py-24 bg-[#FBFBFD] relative selection:bg-primary/20 selection:text-primary">
      
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none z-0" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* COLUMNA IZQUIERDA: Sticky Content */}
          <div className="lg:w-5/12 flex flex-col items-start relative">
            <div className="lg:sticky lg:top-32 lg:pb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-[1.5px] bg-primary"></span>
                  <span className="text-primary font-black tracking-[0.3em] text-[10px] uppercase">
                    Technical Solutions
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-neutral-900 leading-[1.1] mb-6">
                  Portafolio <span className="text-neutral-300 font-light italic">Digital</span>
                </h2>
                
                <p className="text-neutral-600 text-lg font-medium leading-relaxed mb-10 max-w-md">
                  Explora nuestras soluciones técnicas especializadas. Diseñadas a la medida para garantizar el cumplimiento normativo y la máxima seguridad en operaciones de alto riesgo. Haz clic en cada servicio para ver los detalles.
                </p>

              

                {/* Footer del Sticky */}
                <div className="hidden lg:flex flex-col gap-5 border-t border-neutral-200/60 pt-6">
                  <div className="max-w-xs text-[9px] font-bold text-neutral-400 uppercase tracking-widest leading-tight">
                    Asistencia Retar S.A.S - Sabaneta / Colombia 
                  </div>
                  <div className="flex gap-8 items-center">
                
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Scrolling Cards */}
          <div className="lg:w-7/12 flex flex-col gap-5 md:gap-6 pb-24">
            {services.map((s, index) => (
              <motion.div
                key={s.id}
                onClick={() => setSelected(s)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-neutral-200/50 hover:border-primary/30 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col justify-between"
              >
                {/* Fondo sutil hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start relative z-10">
                  
                  {/* Icono con hover animado */}
                  <div className="relative shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl bg-neutral-50 text-neutral-400 group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-sm group-hover:shadow-primary/20">
                    {s.icon}
                  </div>

                  <div className="flex-1 w-full">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-neutral-300">PAG. {s.id}</span>
                      </div>
                      {s.detail && (
                        <span className="text-[9px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-full text-right">
                          {s.detail}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-neutral-900 group-hover:text-primary transition-colors mb-3 pr-8">
                      {s.title}
                    </h3>
                    
                    <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>

                <ArrowUpRight className="absolute bottom-8 right-8 w-5 h-5 text-neutral-300 group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* POPUP REINVENTADO (ANIMACIÓN PREMIUM) */}
      {/* ========================================== */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6">
            {/* Backdrop con Blur Fuerte */}
            <motion.div 
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }} 
              animate={{ opacity: 1, backdropFilter: "blur(12px)" }} 
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }} 
              transition={{ duration: 0.4 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-neutral-900/40 cursor-zoom-out"
            />
            
            {/* Modal Premium con gradientes y cristal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: { 
                  type: "spring", 
                  stiffness: 250, 
                  damping: 25,
                  mass: 0.5
                }
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.95, 
                y: 15,
                transition: { duration: 0.25, ease: "easeInOut" }
              }}
              className="relative w-full max-w-2xl bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] overflow-hidden border border-white z-[70] max-h-[90vh] flex flex-col"
            >
              
              {/* Resplandor decorativo de fondo */}
              <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

              {/* Botón Cerrar Flotante */}
              <button 
                onClick={() => setSelected(null)} 
                className="absolute top-6 right-6 p-3 rounded-full bg-white/80 backdrop-blur shadow-sm hover:bg-neutral-100 hover:shadow-md transition-all duration-300 z-[80] group border border-neutral-200/50"
              >
                <X className="w-5 h-5 text-neutral-500 group-hover:text-neutral-900 group-hover:rotate-90 transition-all duration-300" />
              </button>

              <div className="p-8 md:p-14 overflow-y-auto relative z-10 custom-scrollbar">
                {/* Header Animado */}
                <motion.div 
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                  className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8"
                >
                  <div className="relative p-5 bg-gradient-to-br from-primary/20 to-primary/5 rounded-[1.5rem] text-primary shrink-0 border border-primary/10 shadow-inner">
                    <div className="absolute inset-0 bg-white/40 rounded-[1.5rem] blur-sm -z-10"></div>
                    {selected.icon}
                  </div>
                  <div>
                    <span className="flex items-center gap-2 text-[10px] font-black text-primary tracking-[0.3em] uppercase mb-2">
                      <Sparkles className="w-3 h-3" />
                      {selected.norm}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tighter leading-[1.1]">{selected.title}</h2>
                  </div>
                </motion.div>

                {/* Descripción Principal */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                >
                  <p className="text-lg md:text-xl text-neutral-600 font-medium leading-relaxed mb-10 text-justify">
                    {selected.longDesc}
                  </p>
                </motion.div>

                {/* Grid de Características Glassmorphism */}
                <div className="mb-12">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 }}
                    className="flex items-center gap-4 mb-6"
                  >
                    <span className="h-[1px] flex-1 bg-neutral-200"></span>
                    <h4 className="text-[10px] font-black text-neutral-400 tracking-[0.2em] uppercase px-2">
                      Beneficios y Alcance
                    </h4>
                    <span className="h-[1px] flex-1 bg-neutral-200"></span>
                  </motion.div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selected.features.map((f, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.4 + (idx * 0.08), type: "spring", stiffness: 200 }}
                        className="flex items-start gap-4 p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-neutral-200/60 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <div className="mt-0.5 shrink-0 bg-primary/10 p-1 rounded-full">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm font-bold text-neutral-700 leading-tight">{f}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Botón Final Premium */}
                <motion.button 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="w-full relative overflow-hidden py-5 bg-neutral-900 text-white rounded-[2rem] font-black text-lg shadow-2xl shadow-neutral-900/20 hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  Solicitar Asesoría
                  <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 20px;
        }
      `}} />
    </section>
  );
};