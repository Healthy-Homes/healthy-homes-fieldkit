import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

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
          <Button asChild variant="default" size="sm" className="hover-scale">
            <a href="#signup">Join mailing list</a>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu" className="hover-scale">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>Shelter.Health</SheetTitle>
              </SheetHeader>
              <nav className="mt-6">
                <ul className="grid gap-4 text-base">
                  <li><a href="#about">About</a></li>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#tech">Technical</a></li>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </nav>
              <div className="mt-6">
                <Button asChild variant="hero" size="lg" className="w-full hover-scale">
                  <a href="#signup">Join mailing list</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;