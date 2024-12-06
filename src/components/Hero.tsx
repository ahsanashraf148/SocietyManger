import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-black to-purple-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-8 relative"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {"Welcome to ".split('').map((char, index) => (
            <motion.span
              key={`welcome-${index}`}
              variants={letterVariants}
              transition={{ type: "spring", damping: 12, stiffness: 200 }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            className="text-blue-400 relative inline-block"
            initial={{ rotateX: 90 }}
            animate={{ rotateX: 0 }}
            transition={{ type: "spring", damping: 10, stiffness: 100, delay: 1.5 }}
          >
            {"SocietyManager".split('').map((char, index) => (
              <motion.span
                key={`societymanager-${index}`}
                variants={letterVariants}
                transition={{ type: "spring", damping: 12, stiffness: 200, delay: 1.5 + index * 0.08 }}
                className="inline-block"
                whileHover={{ scale: 1.2, color: "#60A5FA", transition: { duration: 0.2 } }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Manage. Organize. Collaborate.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link to="/signup">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg transition duration-300 transform hover:scale-105">
              Get Started
            </Button>
          </Link>
        </motion.div>
      </div>
    </header>
  );
}