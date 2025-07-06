import { ArrowDown } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center px-4 overflow-hidden"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
          {/* Profile Image */}
          <img
            src="/assets/profilepic.jpg"
            alt="Suyash Borkar"
            className="w-36 h-36 rounded-full object-cover border-4 border-primary shadow-md"
          />

          {/* Text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>
              <span className="ml-2 opacity-0 animate-fade-in-delay-1 relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 blur-lg opacity-30 rounded-md" />
                <span className="relative z-10 text-gradient">Suyash Borkar</span>
              </span>
            </h1>


            {/* Typewriter */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
              <span className="text-primary font-medium">
                <Typewriter
                  words={[
                    "Web Developer",
                    "QA Tester",
                    "GenAI Explorer",
                    "Cybersecurity Learner",
                    // "Passionate about building responsive, user-friendly web applications using modern full-stack technologies."
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button" aria-label="View Projects">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
        aria-hidden="true"
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
