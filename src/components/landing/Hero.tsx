import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)] bg-[length:200%_200%] animate-gradient-move opacity-30" aria-hidden="true" />
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Shelter.Health – Healthy Homes Practitioner App
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-prose leading-relaxed">
            Multilingual, mobile-first tool for healthy housing checklists and Social Determinants of Health (SDOH) data. Export to PDF and HL7® FHIR® with privacy-first, stateless sharing.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg" className="hover-scale">
              <a href="https://assess.shelterhealth.app" aria-label="Launch the Shelter.Health assessment app">Launch App</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover-scale">
              <a href="#signup" aria-label="Join the Shelter.Health mailing list">Join mailing list</a>
            </Button>
          </div>
        </div>
        <figure className="relative rounded-xl border bg-card shadow-[var(--shadow-soft)] p-4">
          <img
            src="/og-image.jpg"
            alt="Shelter.Health app preview showing a guided healthy housing checklist, photo capture, and Social Determinants of Health data entry"
            loading="lazy"
            width={1200}
            height={630}
            sizes="(max-width: 768px) 100vw, 560px"
            className="rounded-lg w-full h-auto object-cover"
          />
          <figcaption className="sr-only">Illustration of the Shelter.Health app concept</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
