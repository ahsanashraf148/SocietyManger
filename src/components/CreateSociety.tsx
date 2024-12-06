import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const CreateSociety: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && description.trim()) {
      // Here you would typically send this data to your backend
      console.log('Society created:', { name, description });
      toast({
        title: "Society Created",
        description: `You are now the head of ${name}`,
      });
      // Redirect to a dashboard or home page
      navigate('/dashboard');
    } else {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
    }
  };

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
          Create Your Society
        </motion.h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Society Name</Label>
            <Input 
              type="text" 
              id="name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter society name" 
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your society" 
              className="bg-gray-700 border-gray-600 text-white"
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
            Create Society
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default CreateSociety;