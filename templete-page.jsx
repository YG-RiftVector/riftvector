import React from 'react';
import { ChevronRight, Building2, Ruler, Users, Mail, Phone, MapPin } from 'lucide-react';

const EngineeringWebsite = () => {
  const services = [
    {
      title: "Structural Engineering",
      description: "Comprehensive structural analysis and design for commercial and residential projects"
    },
    {
      title: "Civil Engineering",
      description: "Infrastructure planning, development, and sustainable solutions for modern cities"
    },
    {
      title: "Mechanical Engineering",
      description: "Advanced mechanical systems design and optimization services"
    }
  ];

  const projects = [
    {
      title: "City Center Complex",
      description: "Mixed-use development featuring innovative structural solutions",
      completion: "2023"
    },
    {
      title: "Bridge Renovation",
      description: "Historic bridge rehabilitation with modern engineering techniques",
      completion: "2022"
    },
    {
      title: "Smart Factory Design",
      description: "State-of-the-art manufacturing facility with automated systems",
      completion: "2023"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto px-6 py-16">
          <nav className="flex justify-between items-center mb-16">
            <div className="text-2xl font-bold">EngineerCo</div>
            <div className="space-x-8">
              <a href="#services" className="hover:text-blue-300">Services</a>
              <a href="#projects" className="hover:text-blue-300">Projects</a>
              <a href="#about" className="hover:text-blue-300">About</a>
              <a href="#contact" className="hover:text-blue-300">Contact</a>
            </div>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Engineering Excellence for Tomorrow's Challenges</h1>
            <p className="text-xl mb-8">Innovative solutions in structural, civil, and mechanical engineering</p>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg flex items-center">
              Get Started
              <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500">Completed: {project.completion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">About Us</h2>
            <p className="text-gray-600 mb-8">
              With over 20 years of experience, our team of expert engineers delivers innovative solutions 
              for complex engineering challenges. We pride ourselves on our commitment to excellence, 
              sustainability, and client satisfaction.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Building2 className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h4 className="font-semibold">500+ Projects</h4>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h4 className="font-semibold">50+ Engineers</h4>
              </div>
              <div className="text-center">
                <Ruler className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h4 className="font-semibold">20+ Years</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 mr-4 text-blue-600" />
                <span>contact@engineerco.com</span>
              </div>
              <div className="flex items-center mb-6">
                <Phone className="w-6 h-6 mr-4 text-blue-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4 text-blue-600" />
                <span>123 Engineering Ave, Tech City, TC 12345</span>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 border rounded-lg"
              ></textarea>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EngineerCo</h3>
              <p className="text-blue-200">Engineering excellence since 2000</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-blue-200">
                <li>Structural Engineering</li>
                <li>Civil Engineering</li>
                <li>Mechanical Engineering</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-blue-200">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-blue-200">
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 EngineerCo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EngineeringWebsite;
