import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Stethoscope } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export const About: React.FC = () => {
  const { currentTheme } = useTheme();

  const achievements = [
    {
      icon: BookOpen,
      title: 'Educational Excellence',
      description: 'Multiple educational institutions from schools to medical colleges providing quality education.'
    },
    {
      icon: Stethoscope,
      title: 'Healthcare Access',
      description: 'Madhubani Medical College offering world-class healthcare at affordable prices.'
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Dedicated to uplifting marginalized sections of society across Bihar and beyond.'
    },
    {
      icon: Award,
      title: 'Leadership',
      description: 'Founded by Dr. Faiyaz Ahmad, Member of Rajya Sabha and experienced educationist.'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                variants={itemVariants}
                className={`inline-flex items-center px-4 py-2 ${currentTheme.colors.secondary} ${currentTheme.colors.textLight} rounded-full text-sm font-medium`}
              >
                About Our Foundation
              </motion.div>
              
              <motion.h2
                variants={itemVariants}
                className="text-3xl lg:text-4xl font-bold text-gray-900"
              >
                Transforming Lives Through 
                <motion.span
                  variants={itemVariants}
                  className={`block ${currentTheme.colors.text}`}
                >
                  Service & Dedication
                </motion.span>
              </motion.h2>
              
              <motion.div variants={itemVariants} className="space-y-4 text-gray-600">
                <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                  The Faiyaz Ahmad Foundation stands as a beacon of hope for marginalized communities, 
                  focusing primarily on education and healthcare. Our mission is to break the barriers 
                  that prevent equal access to quality services.
                </motion.p>
                
                <motion.p variants={itemVariants} className="leading-relaxed">
                  Under the visionary leadership of Dr. Faiyaz Ahmad, a distinguished politician and 
                  educationist who serves as a Member of the Rajya Sabha from Bihar, our foundation 
                  has established numerous educational institutions ranging from primary schools to 
                  prestigious medical colleges.
                </motion.p>
                
                <motion.p variants={itemVariants} className="leading-relaxed">
                  Our flagship institution, Madhubani Medical College and Hospital, exemplifies our 
                  commitment to providing world-class healthcare services at affordable prices, 
                  ensuring that quality medical care reaches every section of society.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* About Founder */}
            <motion.div
              variants={itemVariants}
              className={`p-6 ${currentTheme.colors.primaryLight} rounded-xl ${currentTheme.colors.border} border`}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">About Our Founder</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Dr. Faiyaz Ahmad</strong> - Member of Rajya Sabha (2022-present)</p>
                <p>Former MLA, Bisfi Constituency, Bihar (2010-2020)</p>
                <p>Founder & Chairman, Madhubani Medical College</p>
                <p>Rashtriya Janata Dal (RJD) Leader</p>
                <p>PhD from Lalit Narayan Mithila University</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Achievement Cards */}
          <motion.div variants={itemVariants} className="grid gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
                className="group p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${currentTheme.colors.primaryLight} rounded-lg group-hover:scale-110 transition-transform`}>
                    <achievement.icon className={`w-6 h-6 ${currentTheme.colors.textLight}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};