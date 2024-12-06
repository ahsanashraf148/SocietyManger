import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const socialIcons = [
  { Icon: Facebook, href: 'https://facebook.com' },
  { Icon: Instagram, href: 'https://instagram.com' },
  { Icon: Linkedin, href: 'https://linkedin.com' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-3">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            Society<span className="text-blue-500">Manager</span>
          </Link>
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialIcons.map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-sm">© 2024 SocietyManager. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}