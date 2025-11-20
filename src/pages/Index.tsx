import { lazy, Suspense } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import FadeInOnScroll from "@/components/common/FadeInOnScroll";

// Lazy load sections
const AboutSection = lazy(() => import("@/components/landing/AboutSection"));
const FeaturesSection = lazy(() => import("@/components/landing/FeaturesSection"));
const TechnicalDetailsSection = lazy(() => import("@/components/landing/TechnicalDetailsSection"));
const PlannedEnhancementsSection = lazy(() => import("@/components/landing/PlannedEnhancementsSection"));
const FAQSection = lazy(() => import("@/components/landing/FAQSection"));
const ContactSection = lazy(() => import("@/components/landing/ContactSection"));
const Footer = lazy(() => import("@/components/landing/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <FadeInOnScroll>
            <AboutSection />
          </FadeInOnScroll>
          
          <FadeInOnScroll>
            <FeaturesSection />
          </FadeInOnScroll>
          
          <FadeInOnScroll>
            <TechnicalDetailsSection />
          </FadeInOnScroll>
          
          <FadeInOnScroll>
            <PlannedEnhancementsSection />
          </FadeInOnScroll>
          
          <FadeInOnScroll>
            <FAQSection />
          </FadeInOnScroll>
          
          
          
          <FadeInOnScroll>
            <ContactSection />
          </FadeInOnScroll>
          
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
