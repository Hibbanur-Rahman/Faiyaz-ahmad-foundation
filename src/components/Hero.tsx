import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, GraduationCap, Heart } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export const Hero: React.FC = () => {
  const { currentTheme } = useTheme();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Users, value: '10,000+', label: 'Lives Impacted' },
    { icon: GraduationCap, value: '50+', label: 'Educational Institutions' },
    { icon: Heart, value: '24/7', label: 'Healthcare Services' },
  ];

  return (
    <section id="home" className={`min-h-screen ${currentTheme.colors.surface} pt-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] py-12"
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className={`inline-flex items-center px-4 py-2 ${currentTheme.colors.secondary} ${currentTheme.colors.textLight} rounded-full text-sm font-medium`}
              >
                <Heart className="w-4 h-4 mr-2" />
                Serving Humanity Since 2010
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Empowering Lives Through
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className={`block ${currentTheme.colors.text}`}
                >
                  Education & Healthcare
                </motion.span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="text-lg text-gray-600 leading-relaxed max-w-xl"
              >
                The Faiyaz Ahmad Foundation is dedicated to uplifting marginalized communities 
                through quality education and accessible healthcare services across Bihar and beyond.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#volunteer')}
                className={`inline-flex items-center px-8 py-4 ${currentTheme.colors.primary} text-white font-semibold rounded-lg ${currentTheme.colors.primaryHover} transition-colors shadow-lg`}
              >
                Join Our Mission
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#about')}
                className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 + index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center sm:text-left"
                >
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                    <div className={`p-2 ${currentTheme.colors.primaryLight} rounded-lg`}>
                      <stat.icon className={`w-5 h-5 ${currentTheme.colors.textLight}`} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="aspect-square lg:aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Foundation work - helping communities"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 ${currentTheme.colors.primaryLight} rounded-lg`}>
                  <GraduationCap className={`w-5 h-5 ${currentTheme.colors.textLight}`} />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Madhubani Medical College</div>
                  <div className="text-sm text-gray-600">World-class healthcare education</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};