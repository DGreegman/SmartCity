import { Phone, Mail, Instagram, MessageCircle } from 'lucide-react'; // Import icons

const Footer = () => {
  return (
    <section id="contact" className="bg-blue-800 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Switch to Solar?</h2>
        <p className="text-xl mb-8">Contact us for a free consultation and quote</p>
        <div className="flex justify-center space-x-4 mb-8">
          <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center">
            <Phone className="w-5 h-5 mr-2" />
            Contact Us
          </button>
          <button className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center">
            {/* <ShoppingCart className="w-5 h-5 mr-2" /> */}
            Shop Now
          </button>
        </div>

        {/* Social and Contact Links */}
        <div className="flex justify-center space-x-6">
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/symbiotik_tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 transition-colors flex items-center"
          >
            <Instagram className="w-6 h-6 mr-2" />
            Instagram
          </a>

          {/* Email Link */}
          <a
            href="mailto:symbiotiktech@gmail.com"
            className="text-white hover:text-yellow-400 transition-colors flex items-center"
          >
            <Mail className="w-6 h-6 mr-2" />
            Email
          </a>

          {/* WhatsApp Link */}
          <a
            href="https://wa.me/your-whatsapp-number"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 transition-colors flex items-center"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;