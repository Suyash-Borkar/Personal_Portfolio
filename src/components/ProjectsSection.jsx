import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Weather App",
    description:
      "Displays real-time weather using a public API with a clean, responsive interface.",
    image: "/projects/project1.jpeg",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://weather-app-1opd.onrender.com/",
    githubUrl: "https://github.com/Suyash-Borkar/weather_backend",
    status: "live",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "My personal developer portfolio built with React and TailwindCSS.",
    image: "/projects/project2.jpeg",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://personal-portfolio-alpha-three-16.vercel.app/",
    githubUrl: "https://github.com/Suyash-Borkar/Personal_Portfolio",
    status: "live",
  },
  {
    id: 3,
    title: "Student Management System",
    description:
      "Java-based CRUD system for managing student data using JDBC and MySQL.",
    image: "/projects/comingsoon.png",
    tags: ["Java", "JDBC", "MySQL"],
    demoUrl: "",
    githubUrl: "",
    status: "in-development",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on recently. Some are live,
          while others are still in development as I continue improving and
          expanding my full-stack skillset.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title || "Project Preview"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Status or Links */}
                <div className="flex justify-between items-center">
                  {project.demoUrl || project.githubUrl ? (
                    <div className="flex space-x-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} Live Demo`}
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub Repository`}
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  ) : (
                    <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                      🛠 In Development
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Suyash-Borkar"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
