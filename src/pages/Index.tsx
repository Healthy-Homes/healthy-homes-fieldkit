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
import FadeInOnScroll from "@/components/common/FadeInOnScroll";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <FadeInOnScroll>
          <Hero />
        </FadeInOnScroll>
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
          <MailingListSection />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <ContactSection />
        </FadeInOnScroll>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
