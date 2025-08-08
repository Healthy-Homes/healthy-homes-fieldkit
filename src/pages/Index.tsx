import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import AboutSection from "@/components/landing/AboutSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import TechnicalDetailsSection from "@/components/landing/TechnicalDetailsSection";
import PlannedEnhancementsSection from "@/components/landing/PlannedEnhancementsSection";
import FAQSection from "@/components/landing/FAQSection";
import MailingListSection from "@/components/landing/MailingListSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <FeaturesSection />
        <TechnicalDetailsSection />
        <PlannedEnhancementsSection />
        <FAQSection />
        <MailingListSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
