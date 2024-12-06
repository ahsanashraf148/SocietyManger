import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const navItems = [
  { name: 'About', path: '/#about' },
  { name: 'Features', path: '/#features' },
  { name: 'Join Us', path: '/#join' },
];

const socialIcons = [
  { Icon: Facebook, href: 'https://facebook.com' },
  { Icon: Instagram, href: 'https://instagram.com' },
  { Icon: Linkedin, href: 'https://linkedin.com' },
];

export default function Navbar() {
  return (
    <nav className="fixed w-full z-10 bg-black bg-opacity-50 backdrop-blur-md">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white">
          Society<span className="text-blue-500">Manager</span>
        </Link>
        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <motion.li key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <HashLink
                  smooth
                  to={item.path}
                  className="text-white hover:text-blue-400 transition duration-300"
                >
                  {item.name}
                </HashLink>
              </motion.li>
            ))}
          </ul>
          <div className="flex space-x-2">
            {socialIcons.map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-blue-400 transition duration-300"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
          <Link to="/login" className="text-white hover:text-blue-400 transition duration-300">
            Login
          </Link>
          <Link to="/create-society" className="text-white hover:text-blue-400 transition duration-300">
            Create Society
          </Link>
        </div>
      </div>
    </nav>
  );
}