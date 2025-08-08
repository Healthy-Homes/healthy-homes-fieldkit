const PlannedEnhancementsSection = () => {
  return (
    <section id="roadmap" className="container mx-auto py-16">
      <header className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">Planned Enhancements – A glimpse into what’s next for ShelterHealth</h2>
        <p className="text-muted-foreground mt-2 max-w-prose">
          We’re actively developing the next wave of features to deepen impact and interoperability.
        </p>
      </header>
      <div className="grid md:grid-cols-2 gap-8">
        <article>
          <h3 className="text-xl font-medium">Risk Scoring & Modeling</h3>
          <p className="text-muted-foreground mt-2">Dynamic scoring engine to assess cumulative housing and SDOH risk, and flag high-priority issues.</p>
        </article>
        <article>
          <h3 className="text-xl font-medium">Intervention Prioritization</h3>
          <p className="text-muted-foreground mt-2">Smart logic to help prioritize remediation steps, matched to funding or services.</p>
        </article>
        <article>
          <h3 className="text-xl font-medium">Environmental Justice Overlays</h3>
          <p className="text-muted-foreground mt-2">Optional map layers for neighborhood-level risk (air quality, lead, historic disinvestment) using public datasets like EPA EJScreen.</p>
        </article>
        <article>
          <h3 className="text-xl font-medium">Expanded Localization</h3>
          <p className="text-muted-foreground mt-2">Support for additional languages and region-specific inspection templates.</p>
        </article>
        <article>
          <h3 className="text-xl font-medium">Backend & Offline Syncing (Optional)</h3>
          <p className="text-muted-foreground mt-2">Future options for secure local storage and sync via Supabase or FileSystem API.</p>
        </article>
      </div>
      <p className="text-muted-foreground mt-6">These features are under active design and testing. We welcome feedback and collaborators. <a className="underline" href="#signup">Join our mailing list</a> or <a className="underline" href="#contact">contact us</a>.</p>
    </section>
  );
};

export default PlannedEnhancementsSection;