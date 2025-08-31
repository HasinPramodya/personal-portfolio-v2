import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Crystal Beauty Clear",
        description: "an e-commerce cosmetic item retail application.The platform targets retail customers looking for an easy and personalized shopping experience, as well as administrators who manage the shop’s digital catalog, user base, and order processing system.",
        image: "/projects/project1.png",
        tags: ["React", "Node.js", "Express"],
        demoLink: "https://example.com/demo1",
        githubLink: "https://github.com/HasinPramodya/CBC-Frontend.git",
    },
    {
        id: 2,
        title: "E Ballot",
        description: "An online voting system application designed to streamline the election process by digitizing voter participation and administrative control. The application enables voters to cast their votes online and administrators to manage voters, candidates, and election data efficiently.",
        image: "projects/project2.png",
        tags: ["Angular", "Spring Boot", "MySQL"],
        demoLink: "https://example.com/demo1",
        githubLink: "https://github.com/HasinPramodya/individual-project.git",
    },
    {
        id: 3,
        title: "WeatherWise",
        description: "a location-based weather application that provides users with an intuitive and real-time interface to track current weather conditions, view a 7-day weather forecast, and even retrieve historical weather data based on any date and location.",
        image: "projects/project3.png",
        tags: ["Html", "Css", "JavaScript", "Weather API"],
        demoLink: "https://example.com/demo1",
        githubLink: "https://github.com/HasinPramodya/Weather-Application.git",
    },
];

export default function ProjectSection() {
    return (
        <section id={"projects"} className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of the projects I have worked on. Click on the project
                    title to view more details.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => {
                        return (
                            <div
                                key={index}
                                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
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

                                    <h3 className="text-xl font-semibold mb-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-3">
                                            <a
                                                href={project.demoLink}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <Github size={20} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        href="https://github.com/HasinPramodya"
                        target="_blank"
                    >
                        Check My GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
