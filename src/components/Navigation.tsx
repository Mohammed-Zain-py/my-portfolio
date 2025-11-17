import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, Menu } from "lucide-react"; // Import Menu icon
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"; // Import Sheet components
import { cn } from "@/lib/utils";
import { useState } from "react"; // Import useState

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Add state for mobile menu

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-mono text-xl font-bold text-primary hover:text-primary/80 transition-colors">
          Mohammed Zain
        </Link>
        
        <div className="flex items-center gap-4">
          
          {/* --- Desktop Navigation --- */}
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100",
                    isActive(item.path) ? "text-primary after:scale-x-100" : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <Button asChild variant="default" size="sm" className="bg-gradient-primary hover:shadow-glow transition-all">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>

          {/* --- Mobile Navigation (THIS IS THE NEW CODE) --- */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-primary/50">
                  <Menu className="h-5 w-5 text-primary" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[340px]">
                <nav className="flex flex-col gap-6 pt-8">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "text-xl font-medium transition-colors hover:text-primary",
                          isActive(item.path) ? "text-primary" : "text-foreground"
                        )}
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navigation;