import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiCpu, FiAward } from "react-icons/fi";

const About = () => {
  const stats = [
    { value: "3+", label: "Years Experience", icon: <FiAward size={24} /> },
    { value: "10+", label: "Projects Completed", icon: <FiCode size={24} /> },
    { value: "10+", label: "Happy Clients", icon: <FiDatabase size={24} /> },
    { value: "4+", label: "ML Models", icon: <FiCpu size={24} /> },
  ];

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
          About Me
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Get to know more about my skills, experience, and what I can offer
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Working on laptop"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl font-bold">MD Nisu Ahmad</h3>
              <p className="text-blue-200">
                Full Stack Developer & ML Engineer
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Who I Am</h3>
          <p className="text-gray-600 mb-6">
            I'm a passionate Full Stack Developer and Machine Learning Engineer
            with over 3 years of experience in building modern web applications
            and intelligent solutions. I specialize in creating scalable,
            performant applications using React, Node.js, and MongoDB, while
            also developing machine learning models to solve real-world
            problems.
          </p>

          <p className="text-gray-600 mb-8">
            My approach combines technical expertise with creative
            problem-solving to deliver high-quality solutions that meet business
            objectives. I take pride in writing clean, maintainable code and
            staying up-to-date with the latest technologies and best practices.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={index}
                className="bg-white p-4 rounded-lg shadow-md text-center border border-gray-100"
              >
                <div className="text-primary mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800">
                  {stat.value}
                </h4>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium">
              Python
            </span>
            <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium">
              React
            </span>
            <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium">
              React Native
            </span>
            <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium">
              Node.js
            </span>
            <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium">
              MongoDB
            </span>
            <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium">
              TensorFlow
            </span>
            <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium">
              Express
            </span>
            <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium">
              Django
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
