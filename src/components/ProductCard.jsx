import React, { useState } from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-fit"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-[#191970]">{product.name}</h3>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-800">{product.price}</span>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-6">
          <div className="mb-6">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-72 object-fit rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-[#191970]">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-500">Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.details.specifications.map((spec) => (
                <div key={spec.label} className="bg-gray-50 p-3 rounded">
                  <span className="font-bold text-gray-600">{spec.label}: </span>
                  <span className="text-gray-400">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-[#191970]">Key Features</h3>
            <ul className="list-disc list-inside space-y-2">
              {product.details.features.map((feature) => (
                <li key={feature} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>

          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl font-bold text-blue-800">{product.price}</span>
              <button className="bg-green-800 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Request Quote
              </button>
            </div>
            <p className="text-base text-[#191970] font-bold text-center">
              * Price includes standard installation. Additional costs may apply based on site requirements.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;