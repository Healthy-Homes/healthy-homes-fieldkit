import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section id="faq" className="container mx-auto py-16 md:py-20 bg-[image:var(--pattern-soft)] bg-repeat">
      <header className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>
        <p className="text-muted-foreground mt-2 max-w-prose">
          Clear answers for public health, housing, and clinical teams.
        </p>
      </header>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="q1" className="border-0 rounded-lg bg-card shadow-[var(--shadow-soft)] mb-4">
          <AccordionTrigger className="text-base md:text-lg">Is this app free to use?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Yes. The core app is free and open-source. A premium service model may be developed for white-label or enterprise deployments.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q2" className="border-0 rounded-lg bg-card shadow-[var(--shadow-soft)] mb-4">
          <AccordionTrigger className="text-base md:text-lg">Can I customize the checklists or questions?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Yes. The app is modular and loads inspection and SDOH elements from editable CSV files.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q3" className="border-0 rounded-lg bg-card shadow-[var(--shadow-soft)] mb-4">
          <AccordionTrigger className="text-base md:text-lg">Does it store resident data?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            No. The app is stateless by default. All data is exported locally unless an optional backend is implemented.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q4" className="border-0 rounded-lg bg-card shadow-[var(--shadow-soft)] mb-4">
          <AccordionTrigger className="text-base md:text-lg">What’s required to use the app?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            A smartphone or tablet with a modern browser. No installation, login, or internet connection is required after loading.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q5" className="border-0 rounded-lg bg-card shadow-[var(--shadow-soft)] mb-4">
          <AccordionTrigger className="text-base md:text-lg">How can clinicians use the reports?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Exported reports can be viewed as PDFs or scanned via QR to ingest HL7® FHIR® JSON into EHR systems that support it.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQSection;