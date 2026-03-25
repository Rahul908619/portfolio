import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";

const HOME_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const PAGE_LINKS = [
  { name: "Education", href: "/education" },
  { name: "Certificates", href: "/certificates" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [location] = useLocation();

  const isHome = location === "/" || location === "";
  const navLinks = HOME_LINKS;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (!isHome) return;

      const sections = HOME_LINKS.map(link => link.href.substring(1));
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-display font-bold relative group">
          <span className="text-foreground transition-colors duration-300 group-hover:text-primary">R</span>
          <span className="text-primary transition-colors duration-300 group-hover:text-secondary">K</span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {isHome && navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase transition-colors relative interactive ${
                activeSection === link.href.substring(1)
                  ? "text-primary text-glow-cyan"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-primary shadow-[0_0_8px_#00ffff]"
                />
              )}
            </a>
          ))}
          {!isHome && (
            <a href="/" className="text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors">
              ← Back Home
            </a>
          )}
          {/* Page links always visible */}
          {isHome && (
            <>
              <span className="text-white/20">|</span>
              {PAGE_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors relative interactive ${
                    location === link.href
                      ? "text-primary text-glow-cyan"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </>
          )}
          {!isHome && PAGE_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase transition-colors relative interactive ${
                location === link.href
                  ? "text-primary text-glow-cyan"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col py-4 px-6 gap-4">
              {isHome && navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium tracking-wide uppercase py-2 ${
                    activeSection === link.href.substring(1)
                      ? "text-primary border-l-2 border-primary pl-3"
                      : "text-muted-foreground hover:text-foreground hover:pl-3 transition-all"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              {!isHome && (
                <a href="/" onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium tracking-wide uppercase py-2 text-muted-foreground hover:text-foreground transition-all">
                  ← Back Home
                </a>
              )}
              <div className="border-t border-white/10 pt-3 mt-1 space-y-3">
                {PAGE_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-sm font-medium tracking-wide uppercase py-2 ${
                      location === link.href
                        ? "text-primary border-l-2 border-primary pl-3"
                        : "text-muted-foreground hover:text-primary hover:pl-3 transition-all"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
