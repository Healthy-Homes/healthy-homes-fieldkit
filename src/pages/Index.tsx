import { lazy, Suspense } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import FadeInOnScroll from "@/components/common/FadeInOnScroll";

// Lazy load all below-the-fold sections
const AboutSection = lazy(() => import("@/components/landing/AboutSection"));
const FeaturesSection = lazy(() => import("@/components/landing/FeaturesSection"));
const TechnicalDetailsSection = lazy(() => import("@/components/landing/TechnicalDetailsSection"));
const PlannedEnhancementsSection = lazy(() => import("@/components/landing/PlannedEnhancementsSection"));
const FAQSection = lazy(() => import("@/components/landing/FAQSection"));
const MailingListSection = lazy(() => import("@/components/landing/MailingListSection"));
const ContactSection = lazy(() => import("@/components/landing/ContactSection"));
const Footer = lazy(() => import("@/components/landing/Footer"));

// Simple loading component
const SectionLoader = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* Hero loads immediately without FadeInOnScroll - Critical for LCP */}
        <Hero />
        
        {/* Load first section immediately after hero */}
        <Suspense fallback={<SectionLoader />}>
          <FadeInOnScroll>
            <AboutSection />
          </FadeInOnScroll>
        </Suspense>
        
        {/* Load second group of sections */}
        <Suspense fallback={<SectionLoader />}>
          <FadeInOnScroll>
            <FeaturesSection />
          </FadeInOnScroll>
          
          <FadeInOnScroll>
