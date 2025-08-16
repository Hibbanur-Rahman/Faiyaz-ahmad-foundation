import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, GraduationCap, Building, Calendar, MapPin } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import FaiyazImg from '../assets/images/faiyaz.webp';

export const FaiyazAhmad: React.FC = () => {
  const { currentTheme } = useTheme();

  const achievements = [
    {
      icon: Award,
      title: 'Member of Rajya Sabha',
      period: '2022 - Present',
      description: 'Representing Bihar in the upper house of Indian Parliament'
    },
    {
      icon: Users,
      title: 'MLA Bisfi Constituency',
      period: '2010 - 2020',
      description: 'Two consecutive terms serving the people of Bisfi'
    },
    {
      icon: GraduationCap,
      title: 'Educational Leader',
      period: 'Ongoing',
      description: 'Founder of multiple educational institutions including medical colleges'
    },
    {
      icon: Building,
      title: 'Healthcare Pioneer',
      period: 'Ongoing',
      description: 'Established Madhubani Medical College & Hospital'
    },
  ];

  const timeline = [
    {
      year: '2022',
      event: 'Elected to Rajya Sabha from Bihar',
      description: 'Nominated by Rashtriya Janata Dal for upper house representation'
    },
    {
      year: '2015',
      event: 'Re-elected as MLA from Bisfi',
      description: 'Second consecutive term representing Bisfi constituency'
    },
    {
      year: '2010',
      event: 'First elected as MLA',
      description: 'Began political career representing Bisfi in Bihar Legislative Assembly'
    },
    {
      year: 'Earlier',
      event: 'Founded Madhubani Medical College',
      description: 'Established premier healthcare institution in Bihar'
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
    <section id="faiyaz-ahmad" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className={`inline-flex items-center px-4 py-2 ${currentTheme.colors.secondary} ${currentTheme.colors.textLight} rounded-full text-sm font-medium mb-6`}
          >
            <Award className="w-4 h-4 mr-2" />
            Our Founder & Leader
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
          >
            Dr. Faiyaz Ahmad
            <span className={`block ${currentTheme.colors.text}`}>
              Visionary Leader & Educationist
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            A distinguished politician, educationist, and social reformer dedicated to transforming 
            lives through quality education and accessible healthcare across Bihar and beyond.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Profile */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={FaiyazImg}
                  alt="Dr. Faiyaz Ahmad"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating Info Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 ${currentTheme.colors.primaryLight} rounded-lg`}>
                    <Award className={`w-5 h-5 ${currentTheme.colors.textLight}`} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Rajya Sabha Member</div>
                    <div className="text-sm text-gray-600">Representing Bihar since 2022</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Personal Details */}
            <motion.div
              variants={itemVariants}
              className={`p-6 ${currentTheme.colors.primaryLight} rounded-xl ${currentTheme.colors.border} border`}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Details</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span><strong>Born:</strong> Madhubani, Bihar</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span><strong>Political Party:</strong> Rashtriya Janata Dal (RJD)</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-gray-500" />
                  <span><strong>Education:</strong> PhD from Lalit Narayan Mithila University</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span><strong>Father:</strong> Qamruzzama</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Achievements & Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Achievements */}
            <div>
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                Key Achievements
              </motion.h3>
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="group p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2 ${currentTheme.colors.primaryLight} rounded-lg group-hover:scale-110 transition-transform`}>
                        <achievement.icon className={`w-5 h-5 ${currentTheme.colors.textLight}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {achievement.period}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                Career Timeline
              </motion.h3>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 ${currentTheme.colors.accent} rounded-full`} />
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 h-16 bg-gray-200 mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-sm font-bold ${currentTheme.colors.text} bg-gray-100 px-2 py-1 rounded`}>
                          {item.year}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.event}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};