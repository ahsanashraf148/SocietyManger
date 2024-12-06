import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, UserPlus, CheckSquare, Calendar, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Dashboard: React.FC = () => {
  const sidebarItems = [
    { id: 'teams', icon: Users, label: 'Teams', path: '/dashboard/teams' },
    { id: 'members', icon: UserPlus, label: 'Members', path: '/dashboard/members' },
    { id: 'tasks', icon: CheckSquare, label: 'Tasks', path: '/dashboard/tasks' },
    { id: 'events', icon: Calendar, label: 'Events', path: '/dashboard/events' },
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <motion.div 
        className="w-64 bg-gray-800 p-4 h-full"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-left pt-10">Dashboard</h2>
        <nav>
          {sidebarItems.map((item) => (
            <Link to={item.path} key={item.id}>
              <Button
                variant="ghost"
                className="w-full justify-start mb-2"
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          ))}
          <Link to="/" className="w-full">
            <Button
              variant="ghost"
              className="w-full justify-start mt-1"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Exit
            </Button>
          </Link>
        </nav>
      </motion.div>

      {/* Main content */}
      <motion.div 
        className="flex-1 p-8 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Outlet />
      </motion.div>
    </div>
  );
};

export default Dashboard;