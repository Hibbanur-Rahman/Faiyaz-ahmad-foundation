import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Heart, Phone, Mail } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { ThemeToggle } from './ThemeToggle';
import Logo from "../assets/images/logo.svg";

export const Header: React.FC = () => {
  const { currentTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Dr. Faiyaz Ahmad', href: '#faiyaz-ahmad' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Volunteer', href: '#volunteer' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-40 ${currentTheme.colors.surface} shadow-lg border-b ${currentTheme.colors.border}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="flex items-center justify-center w-14 h-14">
              <img src={Logo} alt="" />
            </div>
            <div className={`${currentTheme.colors.text}`}>
              <div className="font-bold text-lg leading-tight">Faiyaz Ahmad</div>
              <div className={`text-xs ${currentTheme.colors.textLight}`}>Foundation</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden lg:flex items-center space-x-8"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`${currentTheme.colors.textLight} ${currentTheme.colors.text} transition-colors font-medium`}
              >
                {item.label}
              </button>
            ))}
          </motion.nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden flex items-center justify-center w-10 h-10 ${currentTheme.colors.secondary} rounded-lg ${currentTheme.colors.text} hover:${currentTheme.colors.primaryLight} transition-colors`}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0, 
            opacity: isMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className={`lg:hidden py-4 border-t ${currentTheme.colors.border}`}>
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`${currentTheme.colors.textLight} hover:${currentTheme.colors.text} transition-colors font-medium text-left py-2`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};