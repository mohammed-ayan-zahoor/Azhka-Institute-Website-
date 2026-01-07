'use client';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', course: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === 'error') setStatus('idle');
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Make the <span className="text-[#1FB6C9]">Right Choice</span> for Your Career
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're happy to guide you about courses, fees, and batches. No pressure, just honest advice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Right Column - Form (Prioritized for Mobile/Desktop Conversion) */}
          <div className="order-1 lg:order-2 bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-4 border-[#1FB6C9] relative">
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-1/2 bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide border border-yellow-200">
              ⚠️ Limited seats per batch
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Talk to Our Team</h3>
              <p className="text-gray-500 text-sm">Fill this quick form and we'll call you back with details.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2 text-sm">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1FB6C9] focus:bg-white transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2 text-sm">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1FB6C9] focus:bg-white transition-colors"
                  placeholder="+91 8055..."
                />
              </div>

              <div>
                <label htmlFor="course" className="block text-gray-700 font-bold mb-2 text-sm">Interested Course</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1FB6C9] focus:bg-white transition-colors appearance-none"
                >
                  <option value="">Select a course</option>
                  <option value="DCA">Didploma in Computer Applications (Recommended)</option>
                  <option value="ADCA">Advanced Diploma (ADCA)</option>
                  <option value="Web Development">Web Development</option>
                  <option value="CCA">Certificate (CCA)</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2 text-sm">Questions? (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1FB6C9] focus:bg-white transition-colors resize-none"
                  placeholder="Any questions about fees or batches?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full text-white py-4 rounded-xl transition-all transform hover:-translate-y-1 font-bold text-lg shadow-lg flex items-center justify-center gap-2 ${status === 'loading' ? 'bg-gray-400 cursor-not-allowed' :
                    status === 'success' ? 'bg-green-500' : 'bg-[#1FB6C9] hover:bg-[#0A4C59]'
                  }`}
              >
                {status === 'loading' ? 'Sending...' :
                  status === 'success' ? 'Sent Successfully!' :
                    'Request a Call Back'}
                {status !== 'loading' && <ArrowRight className="w-5 h-5" />}
              </button>

              {status === 'success' && (
                <div className="bg-green-50 text-green-700 p-4 rounded-lg text-sm font-medium border border-green-100 text-center">
                  Thank you! We've received your inquiry and will call you back soon.
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-50 text-red-700 p-4 rounded-lg text-sm font-medium border border-red-100 text-center">
                  Something went wrong. Please try calling us directly instead.
                </div>
              )}

              <p className="text-center text-xs text-gray-400 mt-4">
                We respect your privacy. No spam, guaranteed.
              </p>
            </form>
          </div>

          {/* Left Column - Conversion Info (Order 2 Desktop) */}
          <div className="space-y-10 order-2 lg:order-1 pt-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Institute</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Come see our labs, meet the instructors, and sit in a demo class. We are located centrally in Dhule.
              </p>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-teal-50 p-3 rounded-full text-[#1FB6C9]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Address</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Azhka Institute<br />
                      2nd Floor, Poonam Towers,<br />
                      Near Tiranga Chowk, 80 Feet Road<br />
                      Dhule, Maharashtra - 424001
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-teal-50 p-3 rounded-full text-[#1FB6C9]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Phone (Call or WhatsApp)</h4>
                    <div className="flex flex-col gap-1 mt-1 text-sm font-medium">
                      <a href="tel:+918055117133" className="text-gray-600 hover:text-[#1FB6C9] transition-colors">
                        +91 8055117133
                      </a>
                      <a href="tel:+919595216363" className="text-gray-600 hover:text-[#1FB6C9] transition-colors">
                        +91 9595216363
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-teal-50 p-3 rounded-full text-[#1FB6C9]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email</h4>
                    <a href="mailto:office.azhka@gmail.com" className="text-gray-600 hover:text-[#1FB6C9] text-sm mt-1 block">
                      office.azhka@gmail.com
                    </a>
                    <span className="text-xs text-green-600 font-medium">We reply within 24 hours</span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-teal-50 p-3 rounded-full text-[#1FB6C9]">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Working Hours</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Mon–Sat: 10:00 AM – 10:00 PM <br />
                      Sun: 9:30 AM – 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Map Placeholder */}
            <div className="bg-gray-100 rounded-2xl h-48 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('/map-pattern.png')] opacity-20 bg-repeat"></div>
              {/* Note: In a real deploy, embed the actual google map iframe here. For now, using a clean placeholder. */}
              <div className="text-center z-10 p-6">
                <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 font-bold mb-3">View on Google Maps</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Azhka+Institute+Poonam+Towers+Tiranga+Chowk+Dhule"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-sm hover:shadow-md transition-all"
                >
                  Open Location
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
