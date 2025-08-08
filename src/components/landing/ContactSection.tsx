const ContactSection = () => {
  return (
    <section id="contact" className="container mx-auto py-16">
      <header className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
        <p className="text-muted-foreground mt-2 max-w-prose">
          Have questions or want to collaborate?
        </p>
      </header>
      <div className="space-y-2 text-muted-foreground">
        <p>
          Email: <a className="underline" href="mailto:hello@shelterhealth.app">hello@shelterhealth.app</a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;