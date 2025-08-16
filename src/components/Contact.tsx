import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export const Contact: React.FC = () => {
  const { currentTheme } = useTheme();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Madhubani Medical College', 'Madhubani, Bihar 847211', 'India'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 XXXXX XXXXX', '+91 XXXXX XXXXX', 'Mon-Sat: 9:00 AM - 6:00 PM'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@faiyazahmadfoundation.org', 'contact@madhubanimc.edu.in', 'support@faiyazahmadfoundation.org'],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM', 'Sunday: Closed'],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <section id="contact" className={`py-20 ${currentTheme.colors.surface}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 ${currentTheme.colors.secondary} ${currentTheme.colors.textLight} rounded-full text-sm font-medium mb-6`}>
            Get In Touch
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Contact Us for 
            <span className={`block ${currentTheme.colors.text}`}>
              Partnership & Support
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you want to volunteer, donate, partner with us, or learn more about our services, 
            we're here to help. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                >
                  <div className={`p-3 ${currentTheme.colors.primaryLight} rounded-lg flex-shrink-0`}>
                    <info.icon className={`w-6 h-6 ${currentTheme.colors.textLight}`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h4>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`p-3 ${currentTheme.colors.primaryLight} rounded-lg ${currentTheme.colors.textLight} hover:bg-opacity-80 transition-colors`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7173045/pexels-photo-7173045.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Madhubani Medical College location"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CTA Card */}
            <div className={`p-8 ${currentTheme.colors.primary} rounded-xl text-center text-white`}>
              <h3 className="text-xl font-bold mb-4">Ready to Make a Difference?</h3>
              <p className="text-white/90 mb-6">
                Join us in our mission to transform lives through education and healthcare. 
                Every contribution, big or small, creates lasting impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Donate Now
                </button>
                <button
                  onClick={() => {
                    const element = document.querySelector('#volunteer');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                >
                  Volunteer Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};