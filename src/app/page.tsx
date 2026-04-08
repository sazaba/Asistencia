import { Hero } from "@/components/Landing/Hero";
import { Services } from "@/components/Landing/Services";
import { Services as DisruptiveDashboard } from "@/components/Landing/DisruptiveHeightInspectionDashboard";

// Importamos el wrapper en lugar de hacer el dynamic aquí
import MagazineWrapper from "@/components/Landing/MagazineWrapper";
import { AlliedBrands } from "@/components/Landing/AlliedBrands";
import { InspectedBrands } from "@/components/Landing/InspectedBrands";

export default function Home() {
  return (
    <>
      <div id="inicio">
        <Hero />
      </div>
      
      <div id="marcas-inspeccionadas">
        <InspectedBrands />
      </div>
      
      <div id="servicios">
        <Services />
      </div>
      
      <div id="plataforma">
        <DisruptiveDashboard />
      </div>
      
      {/* Renderizamos el wrapper que contiene la revista */}
      <div id="revista">
        <MagazineWrapper />
      </div>
      
      <div id="marcas-aliadas">
        <AlliedBrands />
      </div>
    </>
  );
}