import { motion } from "framer-motion";
import { FiCode, FiCpu, FiDatabase, FiUsers } from "react-icons/fi";

const services = [
  {
    icon: <FiCode size={32} />,
    title: "Web Development",
    description:
      "Building responsive, performant web applications using modern technologies like React, Next.js, and Tailwind CSS.",
    items: [
      "Frontend Development",
      "Backend Development",
      "Full Stack Solutions",
      "Performance Optimization",
    ],
  },
  {
    icon: <FiDatabase size={32} />,
    title: "API Development & Integration",
    description:
      "Designing robust RESTful with proper documentation and seamless third-party integrations.",
    items: ["REST API Design", "WebSockets", "Third-party API Integration"],
  },
  {
    icon: <FiCpu size={32} />,
    title: "Machine Learning Solutions",
    description:
      "Developing intelligent systems with predictive models, computer vision, and natural language processing capabilities.",
    items: [
      "Predictive Analytics",
      "Computer Vision",
      "NLP",
      "Recommendation Systems",
    ],
  },
  {
    icon: <FiUsers size={32} />,
    title: "Freelance Tech Consulting",
    description:
      "Providing expert advice on technology stack selection, architecture design, and development best practices.",
    items: [
      "Tech Stack Selection",
      "System Architecture",
      "Code Reviews",
      "Technical Guidance",
    ],
  },
];

const Services = () => {
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
          My Services
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          I offer a range of services to help bring your digital ideas to life
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
          >
            <div className="text-primary mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.items.map((item, i) => (
                <li key={i} className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
