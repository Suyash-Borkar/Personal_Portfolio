import {
  BrainCircuit,
  Bug,
  Code,
  Shield,
} from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="relative py-24 px-4 bg-background text-foreground">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Explorer
            </h3>
            <p className="text-muted-foreground">
              I'm a web developer passionate about building responsive and accessible user-friendly applications using modern web technologies like React, Tailwind, and more.
            </p>
            <p className="text-muted-foreground">
              I enjoy exploring Generative AI to enhance developer productivity and add smart features to digital projects.
            </p>
            <p className="text-muted-foreground">
              With added skills in Software Testing and Cybersecurity, I focus on crafting secure, reliable, and well-tested applications for end-users.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="./pdf/Suyash_Borkar_Resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Skill Cards */}
          <div className="grid sm:grid-cols-1 gap-6">
            <Card
              Icon={Code}
              title="Web Development"
              description="Building interactive, responsive, and user-driven experiences from frontend to backend."
            />
            <Card
              Icon={Shield}
              title="Cyber Security"
              description="Learning to secure the digital world—one vulnerability, one layer at a time."
            />
            <Card
              Icon={BrainCircuit}
              title="Generative AI"
              description="Blending code and creativity to explore AI tools that generate real-world impact."
            />
            <Card
              Icon={Bug}
              title="Software Testing & QA"
              description="Ensuring performance and reliability by testing what matters—before users do."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Card Component
// eslint-disable-next-line no-unused-vars
const Card = ({ Icon, title, description }) => (
  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  </div>
);
