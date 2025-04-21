import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-screen pt-20 pb-12 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Hi, I'm <span className="text-primary">Md Nisu Ahmad</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Full Stack Developer | ML Engineer | Freelancer
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Turning Ideas Into Scalable, Intelligent Solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#portfolio"
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
              >
                View Portfolio
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-blue-50 transition-all"
              >
                Contact Me
              </motion.a>
            </div>

            <div className="flex justify-center md:justify-start gap-4 mt-8">
              <a
                href="https://github.com/Fahad123k"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/md-nisu-ahmad-77ab571a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href="mailto:ahmad.nishu08@gmail.com"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <FiMail size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-primary rounded-full opacity-10 blur-xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="https://i.ibb.co/FLBKz0WT/Whats-App-Image-2025-04-14-at-12-54-32-AM.jpg"
                  alt="MD Nisu Ahmad"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
