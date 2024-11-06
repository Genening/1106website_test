import React, { useRef } from 'react';
import { GlobeIcon, Users, Rocket, MessageSquare, ExternalLink } from 'lucide-react';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GlobeIcon className="w-8 h-8" />
              <span className="text-xl font-bold">TechCorp</span>
            </div>
            <div className="flex space-x-6">
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="nav-button"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection(teamRef)}
                className="nav-button"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="nav-button"
              >
                Contact
              </button>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-button flex items-center space-x-1"
              >
                <span>Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
        <div className="text-center space-y-6 px-4">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Welcome to the Future
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transforming ideas into reality through innovative technology solutions
          </p>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="min-h-screen flex items-center py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">About Us</h2>
              <p className="text-gray-300">
                We are pioneers in digital transformation, helping businesses evolve
                in the modern technological landscape. Our innovative solutions
                drive growth and efficiency.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
                alt="Technology"
                className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="min-h-screen flex items-center py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Michael Chen",
                role: "CTO",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Emma Williams",
                role: "Design Director",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="team-card">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="min-h-screen flex items-center py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Get in Touch</h2>
              <p className="text-gray-300">
                Ready to start your digital transformation journey? Contact us today.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-6 h-6 text-blue-500" />
                  <span>info@techcorp.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Rocket className="w-6 h-6 text-purple-500" />
                  <span>123 Tech Street, Digital City</span>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-input"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-input"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="form-input"
                ></textarea>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-lg hover:opacity-90 transition-opacity">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} TechCorp. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;