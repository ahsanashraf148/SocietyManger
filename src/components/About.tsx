import { motion } from 'framer-motion';

const aboutItems = [
  {
    title: "Our Mission",
    description: "To provide a comprehensive platform for managing and organizing society activities efficiently.",
  },
  {
    title: "Our Vision",
    description: "To be the leading solution for society management, fostering collaboration and innovation.",
  },
  {
    title: "Our Values",
    description: "Commitment to excellence, innovation, and community engagement.",
  },
];

function AboutCard({ title, description, index }) {
  return (
    <motion.div 
      className="bg-gray-800 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {aboutItems.map((item, index) => (
            <AboutCard key={index} {...item} index={index} />
          ))}
        </div>
        <motion.p 
          className="max-w-3xl mx-auto text-gray-300 text-center text-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          We are dedicated to providing the best tools and resources for society management.
        </motion.p>
      </div>
    </section>
  );
}