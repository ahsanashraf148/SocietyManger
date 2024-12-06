import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight } from 'lucide-react';

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-black to-purple-900 text-white">
      <motion.div 
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Join <span className="text-blue-400">Society Manager</span>
        </motion.h2>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input 
              type="text" 
              id="name" 
              placeholder="Enter your name" 
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>
          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
            Sign Up
          </Button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-400">Already have an account?</p>
          <motion.div 
            whileHover={{ scale: 1.05 }}
          >
            <Link 
              to="/login" 
              className="text-blue-400 hover:text-blue-300 inline-flex items-center"
            >
              Login now <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}