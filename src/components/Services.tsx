import React from 'react';
import { GraduationCap, Stethoscope, Users, Building, BookOpen, Heart } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export const Services: React.FC = () => {
  const { currentTheme } = useTheme();

  const services = [
    {
      icon: GraduationCap,
      title: 'Higher Education',
      description: 'Medical colleges, teacher training institutes, and professional courses preparing students for successful careers.',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Medical Education', 'Teacher Training', 'Professional Courses', 'Skill Development']
    },
    {
      icon: BookOpen,
      title: 'Primary & Secondary Education',
      description: 'Quality education from foundation to graduation, ensuring every child gets the opportunity to learn and grow.',
      image: 'https://images.pexels.com/photos/8613082/pexels-photo-8613082.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Primary Schools', 'Secondary Education', 'Science & Arts', 'Digital Learning']
    },
    {
      icon: Stethoscope,
      title: 'Healthcare Services',
      description: 'World-class medical care through Madhubani Medical College and Hospital at affordable prices.',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['24/7 Emergency', 'Specialist Consultations', 'Diagnostic Services', 'Affordable Treatment']
    },
    {
      icon: Users,
      title: 'Community Development',
      description: 'Comprehensive programs focused on uplifting marginalized communities through various social initiatives.',
      image: 'https://images.pexels.com/photos/6646915/pexels-photo-6646915.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Social Welfare', 'Skill Training', 'Women Empowerment', 'Rural Development']
    },
    {
      icon: Building,
      title: 'Infrastructure Development',
      description: 'Building modern educational and healthcare infrastructure to serve communities effectively.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Modern Facilities', 'Technology Integration', 'Accessibility', 'Sustainable Design']
    },
    {
      icon: Heart,
      title: 'Social Welfare',
      description: 'Dedicated programs for the welfare of underprivileged communities, ensuring no one is left behind.',
      image: 'https://images.pexels.com/photos/6647120/pexels-photo-6647120.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Food Security', 'Housing Support', 'Healthcare Access', 'Education Scholarships']
    },
  ];

  return (
    <section id="services" className={`py-20 ${currentTheme.colors.surface}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 ${currentTheme.colors.secondary} ${currentTheme.colors.textLight} rounded-full text-sm font-medium mb-6`}>
            Our Services
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Services for 
            <span className={`block ${currentTheme.colors.text}`}>
              Community Development
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From quality education to accessible healthcare, we provide comprehensive services 
            designed to uplift and empower marginalized communities across Bihar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className={`absolute top-4 left-4 p-3 ${currentTheme.colors.primary} rounded-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 ${currentTheme.colors.accent} rounded-full`} />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`mt-16 p-8 ${currentTheme.colors.primary} rounded-2xl text-center`}>
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join us in our mission to create positive change in communities. Whether through 
            volunteering, donations, or partnerships, every contribution matters.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#volunteer');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get Involved Today
            <Users className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};