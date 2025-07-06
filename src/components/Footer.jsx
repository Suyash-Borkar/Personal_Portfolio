import { ArrowUp, Github, Instagram, Linkedin } from "lucide-react";
import { Tooltip } from "@/components/ui/Tooltip";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Footer Section */}
      <footer className="bg-card border-t border-border py-6 px-4 mt-12">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Suyash Borkar. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Made with ❤️ using React, Tailwind CSS, and Lucide Icons
            </p>
          </div>

          {/* Social Icons with Tooltips */}
          <div className="flex space-x-4">
            <Tooltip label="GitHub">
              <a
                href="https://github.com/Suyash-Borkar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
            </Tooltip>

            <Tooltip label="LinkedIn">
              <a
                href="https://www.linkedin.com/in/suyash-borkar-6a3066227"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </Tooltip>

            <Tooltip label="Instagram">
              <a
                href="https://www.instagram.com/yashhhh.exee"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
            </Tooltip>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary transition-all animate-bounce"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
};
