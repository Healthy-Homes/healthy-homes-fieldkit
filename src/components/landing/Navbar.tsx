import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-[var(--shadow-soft)]">
      <nav className="container mx-auto flex items-center justify-between py-3" aria-label="Primary">
        <a href="#home" className="font-semibold tracking-tight text-lg">
          Shelter.Health
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#features" className="hover:underline">Features</a></li>
          <li><a href="#tech" className="hover:underline">Technical</a></li>
          <li><a href="#faq" className="hover:underline">FAQ</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
        <div className="hidden md:block">
          <Button asChild variant="default" size="sm">
            <a href="#signup">Join mailing list</a>
          </Button>
        </div>
        <div className="md:hidden">
          <Button asChild variant="outline" size="sm">
            <a href="#signup">Updates</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;