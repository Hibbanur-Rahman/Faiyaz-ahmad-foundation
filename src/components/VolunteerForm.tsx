import React, { useState } from 'react';
import { Send, User, Mail, Phone, MapPin, Heart, CheckCircle } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  interests: string[];
  availability: string;
  experience: string;
  motivation: string;
}

export const VolunteerForm: React.FC = () => {
  const { currentTheme } = useTheme();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    interests: [],
    availability: '',
    experience: '',
    motivation: ''
  });

  const interestOptions = [
    'Education & Teaching',
    'Healthcare & Medical',
    'Community Outreach',
    'Administrative Support',
    'Event Organization',
    'Fundraising',
    'Social Media & Marketing',
    'Technical Support'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        interests: [],
        availability: '',
        experience: '',
        motivation: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className={`w-16 h-16 ${currentTheme.colors.primary} rounded-full flex items-center justify-center mx-auto mb-6`}>
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Your volunteer application has been submitted successfully. We'll get back to you soon with more information.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            <User className="w-4 h-4 inline mr-2" />
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            <Mail className="w-4 h-4 inline mr-2" />
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            <Phone className="w-4 h-4 inline mr-2" />
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>

        <div>
          <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
            Availability
          </label>
          <select
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          >
            <option value="">Select availability</option>
            <option value="weekends">Weekends Only</option>
            <option value="weekdays">Weekdays</option>
            <option value="flexible">Flexible Schedule</option>
            <option value="full-time">Full Time</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
          <MapPin className="w-4 h-4 inline mr-2" />
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          placeholder="City, State"
        />
      </div>

      {/* Areas of Interest */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          <Heart className="w-4 h-4 inline mr-2" />
          Areas of Interest *
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          {interestOptions.map((interest) => (
            <label key={interest} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              <input
                type="checkbox"
                checked={formData.interests.includes(interest)}
                onChange={() => handleInterestChange(interest)}
                className={`w-4 h-4 ${currentTheme.colors.accent} border-gray-300 rounded focus:ring-2 focus:ring-blue-500`}
              />
              <span className="text-gray-700">{interest}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
          Previous Volunteer Experience
        </label>
        <textarea
          id="experience"
          name="experience"
          rows={3}
          value={formData.experience}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
          placeholder="Tell us about any previous volunteer work or relevant experience..."
        />
      </div>

      {/* Motivation */}
      <div>
        <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
          Why do you want to volunteer with us? *
        </label>
        <textarea
          id="motivation"
          name="motivation"
          rows={4}
          required
          value={formData.motivation}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
          placeholder="Share your motivation and how you'd like to contribute to our mission..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={`w-full inline-flex items-center justify-center px-8 py-4 ${currentTheme.colors.primary} text-white font-semibold rounded-lg ${currentTheme.colors.primaryHover} transition-colors shadow-lg`}
      >
        <Send className="w-5 h-5 mr-2" />
        Submit Application
      </button>
    </form>
  );
};