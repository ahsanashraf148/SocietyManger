import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function JoinUs() {
  return (
    <section id="join" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Join Our Society Management System
        </motion.h2>
        <motion.p 
          className="max-w-2xl mx-auto mb-12 text-gray-100 text-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ready to streamline your society's operations? Join our platform and start managing your society efficiently!
        </motion.p>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link to="/signup">
          <Button className="bg-white text-blue-600 hover:bg-blue-100 px-8 py-3 rounded-full text-lg transition duration-300 transform hover:scale-105 flex items-center">
            Become a Member
            <ArrowRight className="ml-2" />
          </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}