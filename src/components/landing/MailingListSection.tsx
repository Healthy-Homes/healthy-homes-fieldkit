import { Button } from "@/components/ui/button";
const MailingListSection = () => {
  return (
    <section id="signup" className="container mx-auto py-16">
      <header className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">Mailing List Signup</h2>
        <p className="text-muted-foreground mt-2 max-w-prose">
          Stay up to date on features, partnerships, and testing opportunities. We only send occasional, useful updates.
        </p>
      </header>
      <form
        className="max-w-lg flex gap-3"
        action="https://buttondown.email/api/emails/embed-subscribe/shelterhealth"
        method="post"
        target="_blank"
      >
        <label htmlFor="email" className="sr-only">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.org"
          className="flex-1 h-11 rounded-md border bg-background px-4"
          aria-label="Email address"
        />
        <Button type="submit" variant="hero" size="default">
          Join
        </Button>
      </form>
    </section>
  );
};

export default MailingListSection;