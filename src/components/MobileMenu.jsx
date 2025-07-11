// components/MobileMenu.jsx

import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export const MobileMenu = ({ isOpen, navItems, activeSection, closeMenu }) => {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-md z-40",
        "flex flex-col items-center justify-center transition-opacity duration-300 md:hidden",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex flex-col space-y-8 text-xl items-center">
        {navItems.map((item, key) => (
          <a
            key={key}
            href={item.href}
            className={cn(
              "transition-colors duration-300",
              activeSection === item.href.slice(1)
                ? "text-primary font-semibold"
                : "text-foreground/80"
            )}
            onClick={closeMenu}
          >
            {item.name}
          </a>
        ))}

        {/* ✅ Theme toggle for mobile */}
        <div className="mt-10 md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};
