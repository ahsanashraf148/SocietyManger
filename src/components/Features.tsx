import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, UsersIcon, BrainCircuitIcon } from 'lucide-react';

const features = [
  {
    icon: <CalendarIcon className="w-16 h-16 text-blue-400" />,
    title: "Event Management",
    description: "Efficiently organize and track society events and deadlines with our intuitive tools."
  },
  {
    icon: <UsersIcon className="w-16 h-16 text-green-400" />,
    title: "Member Management",
    description: "Easily add and manage society members, assign roles, and facilitate team collaboration."
  },
  {
    icon: <BrainCircuitIcon className="w-16 h-16 text-purple-400" />,
    title: "Tasks Notifications",
    description: "Stay updated with real-time notifications for all your tasks and deadlines."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What We Offer
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description, index }) {
  return (
    <motion.div 
      className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg text-center shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="absolute inset-0 bg-blue-500 opacity-0 transition-opacity duration-300"
        whileHover={{ opacity: 0.1 }}
      />
      <motion.div 
        className="relative z-10 flex flex-col items-center"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        viewport={{ once: true }}
      >
        {React.cloneElement(icon, { className: "w-16 h-16 mb-6" })}
        <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </motion.div>
      <motion.div
        className="absolute inset-0 border-2 border-blue-400 opacity-0 rounded-lg"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}