import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const MailingListSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    // Honeypot check
    const website = (e.currentTarget.elements.namedItem("website") as HTMLInputElement)?.value;
    if (website) {
      setLoading(false);
      return; // bot detected
    }

    const normalized = email.trim().toLowerCase();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
    if (!isValid) {
      toast({
        variant: "destructive",
        title: "Invalid email address",
        description: "Please enter a valid email.",
      });
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.from("mailing_list_subscribers").insert([
        {
          email: normalized,
          referrer: document.referrer || null,
          user_agent: navigator.userAgent || null,
        },
      ]);
      if (error) throw error;

      toast({
        title: "You're on the list!",
        description: "We'll send only occasional, useful updates.",
      });
      setEmail("");
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Couldn't join the list",
        description: err?.message || "Please try again shortly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="signup" className="container mx-auto py-16">
      <header className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">Mailing List Signup</h2>
        <p className="text-muted-foreground mt-2 max-w-prose">
          Stay up to date on features, partnerships, and testing opportunities. We only send occasional, useful updates.
        </p>
      </header>
      <form className="max-w-lg flex gap-3" onSubmit={handleSubmit} noValidate>
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.org"
          className="flex-1 h-11"
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
        {/* Honeypot field for spam bots */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <Button type="submit" variant="hero" size="lg" className="hover-scale" disabled={loading} aria-busy={loading}>
          {loading ? "Joining…" : "Join"}
        </Button>
      </form>
    </section>
  );
};

export default MailingListSection;
