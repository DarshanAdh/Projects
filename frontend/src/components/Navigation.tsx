import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#features", label: "Features" },
    { href: "/#example", label: "Example" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Car className="h-8 w-8 text-blue-600" />
              <div className="absolute inset-0 bg-blue-400 blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
            </motion.div>
            <span className="ml-2 text-xl font-bold text-gray-900">Roadside Rescue Network</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/request-help"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              Request Help
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/request-help"
            className="block w-full text-center px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
          >
            Request Help
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}