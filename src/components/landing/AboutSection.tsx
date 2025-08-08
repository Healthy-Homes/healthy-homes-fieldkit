const AboutSection = () => {
  return (
    <section id="about" className="container mx-auto py-16">
      <header className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">About</h2>
        <p className="text-muted-foreground mt-2 max-w-prose">
          Shelter.Health is an open-source field tool for housing and health professionals. It helps frontline workers identify housing-related health risks, collect SDOH data, and securely share findings with clinicians using healthcare standards.
        </p>
      </header>
      <div className="grid md:grid-cols-2 gap-8">
        <article>
          <h3 className="text-xl font-medium">Our Mission</h3>
          <p className="text-muted-foreground mt-2">
            Millions live in housing that threatens health—from mold and pests to unsafe structures. We help practitioners assess conditions efficiently and connect data to care, aligned with HUD’s Principles of a Healthy Home: clean, safe, ventilated, dry, and well-maintained.
          </p>
        </article>
        <article>
          <h3 className="text-xl font-medium">Who It’s For</h3>
          <ul className="mt-2 grid sm:grid-cols-2 gap-2 list-disc list-inside text-muted-foreground">
            <li>Home health nurses</li>
            <li>Community health workers</li>
            <li>Housing inspectors</li>
            <li>Social service providers</li>
            <li>Clinicians & care coordinators</li>
            <li>Environmental health researchers</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default AboutSection;