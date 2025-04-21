import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Movie Ai Recommendation",
    description:
      "MovieAi is a full-stack React Native app with a component-based architecture, featuring trending movies and a personal favorites list.",
    tech: ["React Native", "AppWrite", "Tailwind"],
    image: "https://i.ibb.co/TBb0YYn7/Screenshot-2025-04-21-at-11-54-35-AM.png",
    demo: "#",
    code: "https://github.com/Fahad123k/MovieFlix",
  },
  {
    title: "Carpooling system for Goods",
    description:
      "RouteShare is a web-based carpooling app where drivers post travel schedules with available space and pricing for transporting goods. Users can search these posts and send parcels once their request is accepted by a driver.",
    tech: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    image: "https://i.ibb.co/gLZyrqXv/Screenshot-2025-04-21-at-11-56-27-AM.png",
    demo: "https://route-share-front.vercel.app/",
    code: "https://github.com/Fahad123k/RouteShareFront",
  },
  {
    title: "Weather Forecasting System",
    description:
      "This full-stack, fully responsive weather app fetches city-based data from an API, displays detailed weather info, uses Redux, and features a custom dropdown with professional UI.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    image: "https://i.ibb.co/DfcsYbxr/Screenshot-2025-04-21-at-11-49-28-AM.png",
    demo: "https://what-aweather.vercel.app/",
    code: "https://github.com/Fahad123k/whatAweather",
  },
  {
    title: "Hostel Management System",
    description:
      "Hostel Management System where students can request hostel accommodation, go through the allocation process, manage billing, request room changes, and handle fee revisions.",
    tech: ["Yii2", "Php", "MongoDB", "Aws"],
    image: "https://i.ibb.co/fYXMsQjh/Screenshot-2025-04-21-at-11-58-42-AM.png",
    demo: "https://demo.samarth.ac.in/index.php/hostel/dashboard/admin",
    code: "https://demo.samarth.ac.in/index.php/hostel/dashboard/admin",
  },
  {
    title: "E-Commerce App",
    description:
      "YellowHills is an e-commerce application that sells organic and hilly products from Uttarakhand, including handmade bamboo items.",
    tech: ["JavaScript", "Wordpress", "PHP", "Mysql"],
    image: "https://i.ibb.co/kVCQpQZV/Screenshot-2025-04-21-at-12-31-03-PM.png",
    demo: "https://yellowhills.in/",
    code: "https://yellowhills.in/",
  },
  {
    title: "Weather Forecasting System",
    description:
      "This full-stack, fully responsive weather app fetches city-based data from an API, displays detailed weather info, uses Redux, and features a custom dropdown with professional UI.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    image: "https://i.ibb.co/DfcsYbxr/Screenshot-2025-04-21-at-11-49-28-AM.png",
    demo: "https://what-aweather.vercel.app/",
    code: "https://github.com/Fahad123k/whatAweather",
  },
];

const Portfolio = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          My Portfolio
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          A selection of my recent projects and work
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-blue-50 text-primary rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary hover:text-secondary transition-colors"
                >
                  <FiExternalLink className="mr-1" /> Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-primary transition-colors"
                >
                  <FiGithub className="mr-1" /> View Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
