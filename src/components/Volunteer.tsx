import React from 'react';
import { Heart, Users, Clock, Award } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { VolunteerForm } from './VolunteerForm';

export const Volunteer: React.FC = () => {
  const { currentTheme } = useTheme();

  const benefits = [
    {
      icon: Heart,
      title: 'Make a Real Impact',
      description: 'Directly contribute to improving lives in your community through meaningful work.'
    },
    {
      icon: Users,
      title: 'Join a Community',
      description: 'Connect with like-minded individuals who share your passion for social change.'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Choose volunteer opportunities that fit your availability and lifestyle.'
    },
    {
      icon: Award,
      title: 'Skill Development',
      description: 'Gain valuable experience and develop new skills while serving others.'
    },
  ];

  return (
    <section id="volunteer" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className={`inline-flex items-center px-4 py-2 ${currentTheme.colors.secondary} ${currentTheme.colors.textLight} rounded-full text-sm font-medium`}>
                <Heart className="w-4 h-4 mr-2" />
                Join Our Mission
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Become a Volunteer &
                <span className={`block ${currentTheme.colors.text}`}>
                  Change Lives Together
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Join our dedicated team of volunteers and help us create lasting positive change 
                in communities across Bihar. Whether you have a few hours a week or can commit 
                to more, every contribution makes a difference.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Why Volunteer With Us?</h3>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className={`p-2 ${currentTheme.colors.primaryLight} rounded-lg flex-shrink-0`}>
                      <benefit.icon className={`w-5 h-5 ${currentTheme.colors.textLight}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className={`p-6 ${currentTheme.colors.primaryLight} rounded-xl ${currentTheme.colors.border} border`}>
              <div className="flex items-start gap-4">
                <img
                  src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Volunteer testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-700 mb-3 italic">
                    "Volunteering with the Faiyaz Ahmad Foundation has been incredibly rewarding. 
                    The impact we make on children's education is visible and heartwarming."
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">Priya Sharma</div>
                    <div className="text-sm text-gray-600">Education Volunteer since 2021</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Apply to Volunteer</h3>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you with volunteer opportunities 
                  that match your interests and availability.
                </p>
              </div>
              
              <VolunteerForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};