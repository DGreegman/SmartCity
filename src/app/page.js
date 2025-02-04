"use client"
import React, { useState } from 'react';
import { ShoppingCart, Sun, Battery, Zap, Phone, Menu, X } from 'lucide-react';
import ProductGrid from '@/components/ProductCard';
import AboutSection from '@/components/AboutUs';
import { products } from '@/data/products';
import Footer from '@/components/Footer';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

/*   const products = [
    {
      id: 1,
      name: "Premium Solar Panel Kit",
      description: "Complete 5kW system with inverter and mounting",
      price: "₦4,999",
      image: "/solar.jpeg"
    },
    {
      id: 2,
      name: "Home Battery System",
      description: "10kWh energy storage solution",
      price: "₦3,499",
      image: "/smart-IOT.jpg"
    },
    {
      id: 3,
      name: "Solar Inverter Pro",
      description: "High-efficiency grid-tie inverter",
      price: "₦1,299",
      image: "/solar.jpeg"
    }
  ]; */

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
    { label: "AboutUs", href: "#about" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              {/* <Sun className="w-8 h-8 text-yellow-500 mr-2" /> */}
              <img src='/logo.png' className="w-10 h-10 mr-2" />
              <span className="text-xl font-bold text-blue-800">Symbiotik</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-800 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-gray-600 hover:text-blue-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="bg-gradient-to-r from-blue-800 to-green-800 text-white pt-16">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Innovative Power and Automation Solutions.
              </h1>
              <p className="text-xl mb-8 text-balance">
                Harnessing Sustainable Energy with Portable Solar Inverters, Automatic Changeover Switches, and Advanced Automation Devices
              </p>
              <a href="#products" className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                View Products
              </a>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/solar.jpeg" 
                alt="Solar Installation" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>
        {/* About us Section */}
        <AboutSection />
      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#191970]">Why Choose Our Solar Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Zap className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-400">Premium Quality</h3>
              <p className="text-gray-600">Top-tier solar equipment from trusted manufacturers</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Battery className="w-8 h-8 text-green-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-400">Energy Independence</h3>
              <p className="text-gray-600">Complete power solutions with battery storage options</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-yellow-100 p-4 rounded-full mb-4">
                <Sun className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-400">Expert Installation</h3>
              <p className="text-gray-600">Professional installation and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#191970]">Featured Solar Systems</h2>
          <ProductGrid products={products} />
        </div>
      </section>

      {/* CTA Section */}
{/*       <section id="contact" className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Switch to Solar?</h2>
          <p className="text-xl mb-8">Contact us for a free consultation and quote</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </button>
            <button className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center">
              
              Shop Now
            </button>
          </div>
        </div>
      </section> */}

      {/* Footer */}

      <Footer />

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        /* Custom Scrollbar Styles */
        /* For Webkit browsers like Chrome, Safari */
        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb {
          background: #94a3b8;
          border-radius: 5px;
          border: 2px solid #f1f5f9;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }

        /* For Firefox */
        * {
          scrollbar-width: thin;
          scrollbar-color: #94a3b8 #f1f5f9;
        }

        /* Ensure smooth scrolling */
        html {
          scroll-behavior: smooth;
          overflow-y: overlay;
        }

        /* Optional: Hide scrollbar on mobile devices */
        @media (max-width: 768px) {
          ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;