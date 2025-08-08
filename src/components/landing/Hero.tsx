import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)] bg-[length:200%_200%] animate-gradient-move opacity-20" aria-hidden="true" />
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Shelter.Health – Healthy Homes Practitioner App
          </h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-prose">
            Multilingual, mobile-first tool for healthy housing checklists and SDOH data. Export to PDF and HL7® FHIR® with privacy-first, stateless sharing.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <a href="#signup" aria-label="Join the Shelter.Health mailing list">Join mailing list</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://github.com/mattulsh/healthy-homes-app-rebuilt" target="_blank" rel="noopener noreferrer" aria-label="View Shelter.Health on GitHub">View on GitHub</a>
            </Button>
          </div>
        </div>
        <figure className="relative rounded-xl border bg-card shadow-[var(--shadow-soft)] p-4">
          <img
            src="/og-image.jpg"
            alt="Healthy housing checklist and SDOH data collection app preview"
            loading="lazy"
            className="rounded-lg"
          />
          <figcaption className="sr-only">Illustration of the Shelter.Health app concept</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Hero;