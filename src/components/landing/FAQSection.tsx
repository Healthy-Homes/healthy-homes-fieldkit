import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section id="faq" className="container mx-auto py-16">
      <header className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>
        <p className="text-muted-foreground mt-2 max-w-prose">
          Clear answers for public health, housing, and clinical teams.
        </p>
      </header>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="q1">
          <AccordionTrigger>Is this app free to use?</AccordionTrigger>
          <AccordionContent>
            Yes. The core app is free and open-source. A premium service model may be developed for white-label or enterprise deployments.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q2">
          <AccordionTrigger>Can I customize the checklists or questions?</AccordionTrigger>
          <AccordionContent>
            Yes. The app is modular and loads inspection and SDOH elements from editable CSV files.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q3">
          <AccordionTrigger>Does it store resident data?</AccordionTrigger>
          <AccordionContent>
            No. The app is stateless by default. All data is exported locally unless an optional backend is implemented.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q4">
          <AccordionTrigger>What’s required to use the app?</AccordionTrigger>
          <AccordionContent>
            A smartphone or tablet with a modern browser. No installation, login, or internet connection is required after loading.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q5">
          <AccordionTrigger>How can clinicians use the reports?</AccordionTrigger>
          <AccordionContent>
            Exported reports can be viewed as PDFs or scanned via QR to ingest HL7® FHIR® JSON into EHR systems that support it.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQSection;