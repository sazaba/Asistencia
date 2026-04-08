import type { Metadata } from "next";
// Importamos la tipografía Jakarta
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Importamos Navbar y Footer (Componentes globales)
import { Navbar } from "@/components/Landing/Navbar";
import { Footer } from "@/components/Landing/Footer";

// Configuramos la nueva tipografía
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ['400', '500', '600', '700', '800'], // Pesos necesarios
});

export const metadata: Metadata = {
  title: "Asistencia Retar S.A.S | Expertos en Trabajo en Alturas",
  description: "Certificación de equipos, programas de prevención, diseño de anclajes, consultoría y entrenamiento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Agregamos scroll-smooth para la navegación de la SPA
    <html lang="es" className="scroll-smooth">
      <body className={`${jakarta.variable} font-sans antialiased min-h-screen flex flex-col`}>
        {/* Navbar fijo en la parte superior */}
        <Navbar />
        
        {/* Aquí se renderiza el page.tsx correspondiente */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer en la parte inferior */}
        <Footer />
      </body>
    </html>
  );
}