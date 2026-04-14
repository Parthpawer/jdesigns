import React, { useState } from 'react';
import { ShoppingCart, Heart, ShieldCheck, Award } from 'lucide-react';

const ThirdDesign = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedMetal, setSelectedMetal] = useState('18kt Yellow Gold');

  const productImages = [
    'https://images.unsplash.com/photo-1605100804763-247f67b35579?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1605100804763-247f67b35579?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1605100804763-247f67b35579?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ];

  const metalOptions = [
    { name: '18kt Yellow Gold', color: '#E8C25D' },
    { name: 'Rose Gold', color: '#E0A8A0' },
    { name: 'White Gold', color: '#E8E8E8' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Media Gallery Section */}
          <div className="space-y-6">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={productImages[selectedImage]} 
                alt="Celestial Gold Pendant" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex space-x-4">
              {productImages.map((img, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index 
                      ? 'border-rose-300 ring-2 ring-rose-200' 
                      : 'border-transparent'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="space-y-8">
            <div>
              <span className="text-rose-700 text-sm font-medium tracking-wider">
                FINE JEWELRY · NECKLACES
              </span>
              <h1 className="text-4xl font-serif font-light text-gray-900 mt-2">
                Celestial Gold Pendant
              </h1>
            </div>

            {/* Dual Pricing */}
            <div className="flex items-baseline space-x-3">
              <span className="text-2xl text-gray-500 line-through">₹50,000</span>
              <span className="text-3xl font-light text-gray-900">₹42,000</span>
            </div>

            {/* Metal Selection */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Metal</h3>
              <div className="flex space-x-3">
                {metalOptions.map((metal) => (
                  <button
                    key={metal.name}
                    onClick={() => setSelectedMetal(metal.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedMetal === metal.name
                        ? 'bg-rose-100 text-rose-800 border border-rose-300'
                        : 'bg-white text-gray-600 border border-gray-200 hover:border-rose-200'
                    }`}
                  >
                    {metal.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-6 pt-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">The Story</h3>
                <p className="text-gray-600 leading-relaxed">
                  Inspired by celestial bodies and cosmic elegance, this pendant captures the 
                  ethereal beauty of the night sky. Crafted with precision and adorned with 
                  ethically sourced diamonds, it's a timeless piece that transcends trends.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Material Specs</h3>
                <p className="text-gray-600">Material: 18kt Gold</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Styling</h3>
                <p className="text-gray-600">
                  Pairs elegantly with evening gowns or adds sophistication to everyday attire. 
                  Layer with delicate chains for a modern look.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Shipping & Returns</h3>
                <p className="text-gray-600">Free Shipping on all orders. No Returns.</p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-4 pt-4">
              <div className="flex space-x-4">
                <button className="flex-1 bg-gradient-to-r from-amber-600 to-orange-500 text-white py-4 px-6 rounded-full flex items-center justify-center space-x-2 hover:from-amber-700 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="font-medium">Add to Cart</span>
                </button>
                <button className="w-14 h-14 flex items-center justify-center border border-gray-300 rounded-full hover:bg-rose-50 transition-colors duration-300">
                  <Heart className="h-6 w-6 text-gray-600 hover:text-rose-600" />
                </button>
              </div>

              <div className="flex items-center justify-center pt-4 space-x-8">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="h-5 w-5 text-amber-600" />
                  <span className="text-sm text-gray-600">Secure Checkout</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-amber-600" />
                  <span className="text-sm text-gray-600">Premium Craftsmanship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdDesign;
