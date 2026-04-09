"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Layers, CheckCircle2, XCircle, 
  AlertTriangle, CalendarDays, BarChart3, PieChart,
  ShieldCheck, FileText, Building2, MousePointerClick
} from "lucide-react";

// --- DATOS MOCK INTACTOS ---
const reportData = {
  emisor: "Asistencia Retar",
  cliente: "Empresa Constructora XYZ S.A.",
  nit: "900.123.456-7",
  periodo: "Q1 - 2026",
  fechaEmision: "30 de Marzo, 2026",
  kpis: {
    sedesVisitadas: 28,
    totalInspeccionadas: 34500,
    aptas: 31250,
    noAptas: 2150,
    porReponer: 1100,
  },
  fechasInspeccion: [
    { fecha: "10 Mar", cantidad: 4500 },
    { fecha: "15 Mar", cantidad: 8200 },
    { fecha: "22 Mar", cantidad: 6100 },
    { fecha: "05 Abr", cantidad: 10500 },
    { fecha: "12 Abr", cantidad: 5200 },
  ],
  clasificacionEquipos: [
    { tipo: "Eslingas", cantidad: 12400 },
    { tipo: "Cuerdas", cantidad: 5800 }, 
    { tipo: "Arnés", cantidad: 9500 },   
    { tipo: "Mosquetón", cantidad: 4200 },
    { tipo: "Frenos", cantidad: 2600 },   
  ]
};

// --- COMPONENTES BASE ---

const ReportSection: React.FC<{ title: string; icon: React.ElementType; children: React.ReactNode }> = ({ title, icon: Icon, children }) => (
  <div className="bg-white border border-slate-200 rounded-lg p-3 md:p-5 flex flex-col h-full shadow-sm">
    <div className="flex items-center gap-2 mb-3 md:mb-4 pb-2 border-b border-slate-100">
      <Icon size={16} className="text-[#1d428a] md:w-[18px] md:h-[18px]" />
      <h3 className="text-xs md:text-sm font-bold text-[#0a1d37] uppercase tracking-wide">{title}</h3>
    </div>
    <div className="flex-1 min-h-0 relative w-full">
      {children}
    </div>
  </div>
);

// 1. Gráfico de Barras
const EquipmentBarChart: React.FC<{ data: typeof reportData.clasificacionEquipos }> = ({ data }) => {
  const maxVal = Math.max(...data.map(d => d.cantidad));
  
  return (
    <div className="flex flex-col justify-between h-full w-full gap-2 md:gap-3">
      {data.map((item, idx) => {
        const widthPct = (item.cantidad / maxVal) * 100;
        return (
          <div key={idx} className="flex flex-col gap-1">
            <div className="flex justify-between items-end text-[10px] md:text-xs">
              <span className="font-semibold text-slate-600">{item.tipo}</span>
              <span className="font-bold text-[#0a1d37]">{item.cantidad.toLocaleString()}</span>
            </div>
            <div className="w-full h-2 md:h-2.5 bg-slate-100 rounded-sm overflow-hidden transform-gpu">
              <motion.div 
                className="h-full bg-[#1d428a] rounded-sm transform-gpu will-change-[width]"
                initial={{ width: 0 }}
                whileInView={{ width: `${widthPct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: idx * 0.1 }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

// 2. Gráfico de Área (Optimizado para Touch en móviles)
const TimelineAreaChart: React.FC<{ data: typeof reportData.fechasInspeccion }> = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const maxVal = Math.max(...data.map(d => d.cantidad)) * 1.15; 

  const getCoordinates = (index: number, value: number) => ({
    x: (index / (data.length - 1)) * 100,
    y: 100 - (value / maxVal) * 100
  });

  const pointsList = data.map((d, i) => getCoordinates(i, d.cantidad));
  const polylinePoints = pointsList.map(p => `${p.x},${p.y}`).join(" ");
  const areaPoints = `${polylinePoints} 100,100 0,100`;

  return (
    <div className="w-full h-full flex flex-col relative pt-2">
      <div className="flex-1 relative w-full mb-2 min-h-[120px]">
        
        {/* Grid Horizontal */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {[0, 1, 2, 3].map(i => (
            <div key={i} className="w-full border-t border-slate-100 relative">
              <span className="absolute -top-3.5 -left-1 text-[8px] md:text-[9px] font-medium text-slate-400 bg-white pr-1">
                {((maxVal * (1 - i/3)) / 1000).toFixed(1)}k
              </span>
            </div>
          ))}
        </div>

        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full overflow-visible ml-6 w-[calc(100%-1.5rem)]">
          <defs>
            <linearGradient id="areaColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1d428a" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#1d428a" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          <motion.polygon points={areaPoints} fill="url(#areaColor)" 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} 
            className="transform-gpu" />
          
          <motion.polyline points={polylinePoints} fill="transparent" stroke="#1d428a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} 
            className="transform-gpu" />
        </svg>

        {/* Puntos de datos - Optimizados para toque (Touch) en iOS */}
        {pointsList.map((p, i) => (
          <div key={`dot-${i}`} 
               className="absolute w-6 h-6 -ml-3 -mt-3 flex items-center justify-center cursor-pointer z-20 group ml-6 touch-manipulation"
               style={{ left: `calc(${p.x}% - 0.5rem)`, top: `${p.y}%` }}
               onMouseEnter={() => setHoveredIndex(i)} 
               onMouseLeave={() => setHoveredIndex(null)}
               onClick={() => setHoveredIndex(hoveredIndex === i ? null : i)} // Permite tocar en móvil
          >
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 + (i*0.1) }}
                 className="relative w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white border-2 border-[#1d428a] group-hover:scale-125 group-hover:bg-[#1d428a] transition-all duration-200 shadow-sm" />
            
            <AnimatePresence>
              {hoveredIndex === i && (
                <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: -5 }} exit={{ opacity: 0, y: 0 }}
                     className="absolute bottom-full left-1/2 -translate-x-1/2 bg-[#0a1d37] text-white text-[9px] md:text-[10px] font-medium py-1 px-2 rounded shadow-md pointer-events-none whitespace-nowrap z-30 transform-gpu">
                  {data[i].cantidad.toLocaleString()} unds.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-end mt-2 pl-6">
        {data.map((d, i) => (
          <span key={i} className="text-[8px] md:text-[10px] font-semibold text-slate-500 whitespace-nowrap">{d.fecha}</span>
        ))}
      </div>
    </div>
  );
};

// 3. Gráfico de Dona
const StatusDonutChart: React.FC<{ kpis: typeof reportData.kpis }> = ({ kpis }) => {
  const data = [
    { label: "Aptas", val: kpis.aptas, color: "#10b981" },     
    { label: "No Aptas", val: kpis.noAptas, color: "#f59e0b" }, 
    { label: "Por Reponer", val: kpis.porReponer, color: "#ef4444" } 
  ];
  const total = kpis.totalInspeccionadas;
  let accumulatedPct = 0;
  
  const radius = 40; 
  const circumference = 2 * Math.PI * radius; 

  return (
    <div className="flex flex-row items-center justify-center gap-3 md:gap-6 h-full w-full">
      <div className="relative h-full aspect-square max-h-[90px] sm:max-h-[100px] md:max-h-[140px] flex-shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible transform -rotate-90">
          <circle cx="50" cy="50" r={radius} fill="transparent" stroke="#f1f5f9" strokeWidth="8" />
          {data.map((d, i) => {
            const pct = (d.val / total) * 100;
            const dash = `${(pct / 100) * circumference} ${circumference}`; 
            const offset = -((accumulatedPct / 100) * circumference);
            accumulatedPct += pct;
            return (
              <motion.circle key={i} cx="50" cy="50" r={radius} fill="transparent" stroke={d.color} strokeWidth="8"
                      strokeDasharray={dash} strokeDashoffset={offset} strokeLinecap="round"
                      initial={{ strokeDasharray: `0 ${circumference}` }} whileInView={{ strokeDasharray: dash }} viewport={{ once: true }} 
                      transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                      className="transition-all duration-300 transform-gpu origin-center" />
            )
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} 
            className="text-sm sm:text-base md:text-xl font-black text-[#0a1d37]">
            {(total / 1000).toFixed(1)}k
          </motion.span>
          <span className="text-[7px] md:text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Total</span>
        </div>
      </div>
      
      <div className="flex flex-col gap-1.5 md:gap-3 w-full justify-center max-w-[130px]">
        {data.map((d, i) => (
          <div key={i} className="flex flex-col">
            <div className="flex items-center gap-1.5 md:gap-2 mb-0.5">
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-sm" style={{ backgroundColor: d.color }} />
              <span className="text-[10px] md:text-xs font-semibold text-slate-600 leading-none">{d.label}</span>
            </div>
            <div className="flex justify-between items-baseline pl-3.5 md:pl-4.5">
              <span className="text-xs md:text-sm font-bold text-[#0a1d37] leading-none">{d.val.toLocaleString()}</span>
              <span className="text-[9px] md:text-[10px] font-bold" style={{ color: d.color }}>{((d.val / total) * 100).toFixed(1)}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- SECCIÓN PRINCIPAL ---

export const Services = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    // CAMBIADO: bg-[#f8fafc] a bg-white para fondo blanco puro
    <section className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-white font-sans flex flex-col items-center p-4 py-12 md:py-16 lg:py-24">
      
      {/* --- CABECERA ESTILO GALERÍA --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl flex flex-col items-center text-center mb-12 md:mb-24 z-10 px-2"
      >
        <div className="flex items-center gap-3 md:gap-4 text-[9px] md:text-xs font-bold text-[#1d428a] tracking-[0.2em] uppercase mb-4 md:mb-6">
          <span className="w-6 md:w-12 h-[1.5px] bg-[#1d428a]"></span>
          Dashboard Tipo PowerBI
          <span className="w-6 md:w-12 h-[1.5px] bg-[#1d428a]"></span>
        </div>

        {/* Tamaños de fuente escalonados cuidadosamente para móviles pequeños */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-[5rem] leading-[1.1] font-black text-[#111827] tracking-tight flex flex-col md:block w-full">
          <span>Nuestra metodología de </span>
          <span className="font-light italic text-slate-300 md:ml-4">
            entregables
          </span>
        </h2>

        <div className="mt-6 md:mt-10 flex items-center justify-center gap-2 text-[10px] md:text-sm font-semibold text-slate-400 tracking-[0.1em] md:tracking-[0.15em] uppercase">
          <MousePointerClick size={14} className="text-[#1d428a] md:w-4 md:h-4" /> 
          Desliza para explorar el interior
        </div>
      </motion.div>

      {/* --- CONTENEDOR RELATIVO PARA EL EFECTO APILADO --- */}
      <div className="relative w-full max-w-[900px] z-0 px-2 md:px-0">
        
        {/* PAPEL 3 (Fondo profundo) - Optimizado GPU Safari */}
        <motion.div 
          initial={{ opacity: 0, rotate: 0, scale: 0.95 }}
          animate={{ opacity: 1, rotate: 4, scale: 0.95, y: 25, x: 15 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="absolute inset-0 bg-white shadow-xl border border-slate-300 rounded-sm overflow-hidden z-0 flex flex-col transform-gpu will-change-transform"
          style={{ WebkitBackfaceVisibility: "hidden", WebkitTransform: "translate3d(0,0,0)" }}
        >
          <div className="bg-slate-800 px-8 py-6 h-20 md:h-24 w-full border-b border-slate-200"></div>
          <div className="flex-1 w-full bg-white opacity-40"></div>
        </motion.div>

        {/* PAPEL 2 (Medio) - Optimizado GPU Safari */}
        <motion.div 
          initial={{ opacity: 0, rotate: 0, scale: 0.98 }}
          animate={{ opacity: 1, rotate: -3, scale: 0.98, y: 12, x: -15 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="absolute inset-0 bg-white shadow-lg border border-slate-300 rounded-sm overflow-hidden z-10 flex flex-col transform-gpu will-change-transform"
          style={{ WebkitBackfaceVisibility: "hidden", WebkitTransform: "translate3d(0,0,0)" }}
        >
          <div className="bg-sky-700 px-8 py-6 h-20 md:h-24 w-full border-b border-slate-200"></div>
          <div className="flex-1 w-full bg-white opacity-60"></div>
        </motion.div>

        {/* PAPEL 1 (Principal) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-20 w-full bg-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] border border-slate-200 rounded-sm overflow-hidden flex flex-col transform-gpu"
          style={{ WebkitBackfaceVisibility: "hidden" }}
        >
          {/* ENCABEZADO DEL REPORTE */}
          <div className="bg-[#1d428a] px-4 py-4 md:px-8 md:py-6 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4">
            <div className="flex items-center gap-3">
              <div className="p-1.5 md:p-2 bg-white/10 rounded-lg shrink-0">
                <ShieldCheck size={24} className="text-white md:w-7 md:h-7" />
              </div>
              <div>
                <h1 className="text-base md:text-xl font-bold tracking-tight leading-tight">Informe de Auditoría EPCC</h1>
                <p className="text-[10px] md:text-sm text-blue-100 font-medium opacity-90">Reporte Gerencial de Inventario</p>
              </div>
            </div>
            <div className="text-left sm:text-right w-full sm:w-auto mt-1 sm:mt-0 pt-3 sm:pt-0 border-t border-blue-400/30 sm:border-0">
              <p className="text-[9px] md:text-xs text-blue-100 uppercase tracking-widest font-semibold mb-0.5 md:mb-1">Entregable para:</p>
              <p className="text-xs md:text-sm font-bold flex items-center justify-start sm:justify-end gap-1.5 md:gap-2">
                <Building2 size={12} className="md:w-[14px] md:h-[14px]" /> {reportData.cliente}
              </p>
            </div>
          </div>

          {/* METADATOS DEL DOCUMENTO */}
          <div className="px-4 py-3 md:px-8 md:py-4 bg-slate-50 border-b border-slate-200 flex flex-col md:flex-row flex-wrap justify-between items-start md:items-center text-[10px] md:text-xs text-slate-600 gap-2 md:gap-4">
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-6 w-full md:w-auto">
              <p><strong>Generado por:</strong> <span className="text-[#1d428a] font-semibold">{reportData.emisor}</span></p>
              <p><strong>NIT Cliente:</strong> {reportData.nit}</p>
            </div>
            <div className="flex justify-between md:justify-end w-full md:w-auto gap-2 md:gap-4 items-center mt-1 md:mt-0">
              <span className="flex items-center gap-1 md:gap-1.5 bg-slate-200/50 px-2 md:px-2.5 py-1 rounded text-[#0a1d37] font-semibold">
                <FileText size={10} className="md:w-3 md:h-3" /> {reportData.periodo}
              </span>
              <p><strong>Fecha:</strong> {reportData.fechaEmision}</p>
            </div>
          </div>

          {/* CUERPO DEL INFORME */}
          <div className="p-4 md:p-8 flex flex-col gap-4 md:gap-6">
            
            {/* Título de Sección */}
            <div className="flex flex-col mb-1 md:mb-2">
              <h2 className="text-sm md:text-lg font-bold text-[#0a1d37] border-l-3 md:border-l-4 border-[#1d428a] pl-2 md:pl-3 leading-tight">Resumen de Métricas Clave</h2>
              <p className="text-[10px] md:text-sm text-slate-500 mt-1 pl-3 md:pl-4">Resultados consolidados del proceso de inspección técnica en las instalaciones del cliente.</p>
            </div>

            {/* Tarjetas KPI - Paddings ajustados para pantallas pequeñas */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
              {[
                { label: "Sedes Visitadas", val: reportData.kpis.sedesVisitadas, Icon: MapPin, color: "text-[#1d428a]" },
                { label: "Total Inspección", val: reportData.kpis.totalInspeccionadas.toLocaleString(), Icon: Layers, color: "text-[#0a1d37]" },
                { label: "Equipos Aptos", val: reportData.kpis.aptas.toLocaleString(), Icon: CheckCircle2, color: "text-emerald-600" },
                { label: "No Aptos", val: reportData.kpis.noAptas.toLocaleString(), Icon: AlertTriangle, color: "text-amber-500" },
                { label: "Por Reponer", val: reportData.kpis.porReponer.toLocaleString(), Icon: XCircle, color: "text-red-500" },
              ].map((kpi, i) => (
                <div key={i} className={`bg-white border border-slate-200 rounded-lg p-2.5 md:p-4 flex flex-col relative overflow-hidden ${i === 4 ? 'col-span-2 md:col-span-1' : ''}`}>
                  <div className="flex justify-between items-start mb-1.5 md:mb-2">
                    <span className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-wider w-3/4 leading-tight">{kpi.label}</span>
                    <kpi.Icon size={12} className={`${kpi.color} opacity-80 md:w-3.5 md:h-3.5 shrink-0`} />
                  </div>
                  <span className={`text-lg sm:text-xl md:text-2xl font-black ${kpi.color} leading-none`}>
                    {kpi.val}
                  </span>
                </div>
              ))}
            </div>

            {/* Gráficos */}
            <div className="flex flex-col lg:flex-row gap-3 md:gap-6 mt-1 md:mt-2">
              
              <div className="flex-[3] min-h-[220px] md:min-h-[280px]">
                 <ReportSection title="Evolución de Inspección" icon={CalendarDays}>
                    <TimelineAreaChart data={reportData.fechasInspeccion} />
                 </ReportSection>
              </div>

              <div className="flex-[2] flex flex-col gap-3 md:gap-6">
                 <div className="flex-1 min-h-[150px] md:min-h-[160px]">
                   <ReportSection title="Inventario por Categoría" icon={BarChart3}>
                     <EquipmentBarChart data={reportData.clasificacionEquipos} />
                   </ReportSection>
                 </div>
                 
                 <div className="flex-1 min-h-[130px] md:min-h-[160px]">
                   <ReportSection title="Estado General" icon={PieChart}>
                     <StatusDonutChart kpis={reportData.kpis} />
                   </ReportSection>
                 </div>
              </div>

            </div>

          </div>

          {/* PIE DE PÁGINA */}
          <div className="bg-slate-50 border-t border-slate-200 px-4 py-3 md:px-8 flex justify-between items-center text-[8px] md:text-[10px] text-slate-400 font-medium">
            <p>© {new Date().getFullYear()} Asistencia Retar. Documento Confidencial.</p>
            <p>Página 1 de 1</p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};