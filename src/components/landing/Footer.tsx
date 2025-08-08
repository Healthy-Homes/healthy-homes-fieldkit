const Footer = () => {
  return (
    <footer className="border-t mt-8">
      <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Shelter.Health</p>
        <nav aria-label="Footer">
          <ul className="flex gap-4">
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#roadmap" className="hover:underline">Planned</a></li>
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;