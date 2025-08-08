const TechnicalDetailsSection = () => {
  return (
    <section id="tech" className="container mx-auto py-16">
      <header className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">Technical Details</h2>
        <p className="text-muted-foreground mt-2 max-w-prose">
          Built for interoperability and field performance.
        </p>
      </header>
      <div className="grid md:grid-cols-2 gap-8">
        <article>
          <h3 className="text-xl font-medium">Data Standards</h3>
          <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1">
            <li>HL7® FHIR® for clinical integration</li>
            <li>LOINC®, SNOMED CT®, Gravity Project for SDOH</li>
            <li>Export: PDF, JSON, QR code sharing</li>
          </ul>
        </article>
        <article>
          <h3 className="text-xl font-medium">Web Stack</h3>
          <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1">
            <li>Tailwind CSS UI, React (mobile-first)</li>
            <li>MapLibre for geospatial features</li>
            <li>IndexedDB / FileSystem API (planned) for offline</li>
            <li>PDF/QR export pipeline</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default TechnicalDetailsSection;