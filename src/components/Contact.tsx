import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

const Contact = () => {
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
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <FiMail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-600 mb-1">Email</h4>
                  <a
                    href="mailto:ahmad.nishu08@gmail.com"
                    className="text-gray-800 hover:text-primary transition-colors"
                  >
                    ahmad.nishu08@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <FiPhone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-600 mb-1">Phone</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-800 hover:text-primary transition-colors"
                  >
                    +91 9122812078
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-600 mb-1">Location</h4>
                  <p className="text-gray-800">New Delhi, IN</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium text-gray-600 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/nisuahmad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-primary hover:bg-blue-50 transition-colors"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/nisuahmad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-primary hover:bg-blue-50 transition-colors"
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href="https://twitter.com/nisuahmad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-primary hover:bg-blue-50 transition-colors"
                >
                  <FiTwitter size={20} />
                </a>
              </div>
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
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send Me a Message
            </h3>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-600 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-600 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-600 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  // rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Hello Nisu, I'd like to discuss..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
