import React from 'react';
import { Zap, Settings, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-300 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/api/placeholder/300/400" 
                alt="Solar Installation" 
                className="rounded-lg shadow-lg transform translate-y-8"
              />
              <img 
                src="/api/placeholder/300/300" 
                alt="Automation System" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="/api/placeholder/300/300" 
                alt="Solar Inverter" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="/api/placeholder/300/400" 
                alt="Control Panel" 
                className="rounded-lg shadow-lg transform -translate-y-8"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-blue-800">About Us</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Symbiotik Solutions is an innovative enterprise dedicated to providing cutting-edge solutions in renewable energy and automation. We specialize in the production of portable solar inverters, automatic changeover switches, advanced automation devices.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Zap className="w-6 h-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-400">Renewable Energy</h3>
                  <p className="text-gray-600">State-of-the-art solar solutions for sustainable power generation</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Settings className="w-6 h-6 text-green-800" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-400">Automation</h3>
                  <p className="text-gray-600">Smart automation systems for enhanced control and efficiency</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-400">Innovation</h3>
                  <p className="text-gray-600">Cutting-edge solutions that drive technological advancement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;