import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Navbar = ({ activeSection }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-around sm:justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-primary">
            MD Nisu Ahmad
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`relative px-2 py-1 transition-colors ${
                      activeSection === link.id
                        ? "text-primary font-medium"
                        : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 bottom-0 w-full h-0.5 bg-primary"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex space-x-4 ml-8">
              <a
                href="https://github.com/Fahad123k"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/md-nisu-ahmad-77ab571a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:ahmad.nishu08@gmail.com"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-white pt-20 pb-8 px-4 z-40 overflow-x-hidden"
            style={{ width: "100vw", left: 0, right: 0 }}
          >
            <div className="max-w-full overflow-x-hidden">
              <ul className="flex flex-col space-y-6 w-full">
                {navLinks.map((link) => (
                  <li key={link.id} className="w-full">
                    <a
                      href={`#${link.id}`}
                      onClick={() => setIsOpen(false)}
                      className={`block text-xl px-4 py-3 rounded-lg transition-colors w-full ${
                        activeSection === link.id
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-gray-600 hover:text-primary hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex space-x-6 mt-8 px-4 w-full">
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
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
