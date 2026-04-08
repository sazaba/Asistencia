"use client";

import Link from "next/link";
import Image from "next/image";
// Iconos de interfaz (Lucide)
import { Mail, Phone, MapPin } from "lucide-react"; 
// Iconos de marcas (React Icons - FontAwesome)
import { FaInstagram, FaLinkedin } from "react-icons/fa";

// Importación de tu logo
import logoWhite from "@/assets/logoWhite.webp";

const FOOTER_LINKS = [
  { name: "Inicio", href: "#inicio" },
  { name: "Equipos que Inspeccionamos", href: "#marcas-inspeccionadas" },
  { name: "Nuestros Servicios", href: "#servicios" },
  { name: "Plataforma de Gestión", href: "#plataforma" },
  { name: "Revista Especializada", href: "#revista" },
  { name: "Marcas Aliadas", href: "#marcas-aliadas" },
];

const SOCIAL_LINKS = [
  { icon: <FaInstagram className="w-5 h-5" />, href: "https://www.instagram.com/asistenciaretar/", label: "Instagram" },
  { icon: <FaLinkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/asistencia-retar", label: "LinkedIn" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-neutral-300 py-16 md:py-24 border-t border-neutral-900 relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-4">
            {/* Logo de la empresa aumentado de tamaño */}
            <a href="#inicio" className="inline-block mb-8 relative w-56 md:w-64 h-20 md:h-24">
              <Image 
                src={logoWhite}
                alt="Logo Asistencia Retar"
                fill
                className="object-contain object-left"
                sizes="(max-width: 768px) 224px, 256px"
              />
            </a>
            <p className="text-neutral-400 leading-relaxed mb-8 pr-4">
              Expertos en inspección, certificación y gestión integral de equipos de protección contra caídas. Garantizamos la seguridad de tu equipo con los más altos estándares.
            </p>
            
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 lg:pl-8">
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Explorar</h3>
            <ul className="space-y-4">
              {FOOTER_LINKS.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-neutral-400 hover:text-primary transition-colors duration-300 flex items-center group w-fit"
                  >
                    <span className="w-0 h-[1px] bg-primary mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Contacto</h3>
            <ul className="space-y-5 text-neutral-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Sabaneta, Antioquia</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+573148734478" className="hover:text-white transition-colors duration-300">
                    314 873 4478
                  </a>
                  <a href="tel:+573234377817" className="hover:text-white transition-colors duration-300">
                    323 437 7817
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:asistencia.retar@gmail.com" className="hover:text-white transition-colors duration-300 break-all">
                  asistencia.retar@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>© {currentYear} Asistencia Retar. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors duration-300">Términos de Servicio</Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">Política de Privacidad</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};