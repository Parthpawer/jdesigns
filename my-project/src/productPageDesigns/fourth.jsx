import React, { useState } from 'react';
import { ShoppingBag, Heart, Shield, Sparkles, Truck, Check, Zap } from 'lucide-react';

const FourthDesign = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedMetal, setSelectedMetal] = useState('18kt Yellow Gold');
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Static data
  const productImages = [
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1000&q=80',
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1000&q=80',
    'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&q=80',
    'https://images.unsplash.com/photo-1611591437281-8b5d5a4e8c2f?w=1000&q=80'
  ];

  const metalOptions = [
    { id: 1, name: '18kt Yellow Gold', color: 'bg-amber-200' },
    { id: 2, name: 'Rose Gold', color: 'bg-rose-300' },
    { id: 3, name: 'White Gold', color: 'bg-stone-100' }
  ];

  const trustFeatures = [
    { icon: Shield, text: 'Secure Checkout', desc: 'SSL Encrypted' },
    { icon: Sparkles, text: 'Premium Craftsmanship', desc: 'Handcrafted' },
    { icon: Truck, text: 'Free Shipping', desc: 'Worldwide' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-orange-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - Media Gallery */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-orange-100 to-rose-100 shadow-2xl">
              <img
                src={productImages[selectedImage]}
                alt="Celestial Gold Pendant"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-rose-gold/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                Best Seller
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex space-x-4">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative flex-1 aspect-square rounded-2xl overflow-hidden transition-all duration-300 ${
                    selectedImage === index 
                      ? 'ring-4 ring-rose-gold/30 scale-105' 
                      : 'opacity-70 hover:opacity-100 hover:scale-105'
                  }`}
                >
                  <img
                    src={img}
                    alt={`View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {selectedImage === index && (
                    <div className="absolute inset-0 border-2 border-rose-gold"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-8">
            {/* Category Tag */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-rose-700/80 tracking-wider uppercase">
                Fine Jewelry · Necklaces
              </span>
              <div className="w-2 h-2 bg-rose-gold rounded-full"></div>
            </div>

            {/* Product Title */}
            <h1 className="text-4xl lg:text-5xl font-serif font-light text-gray-900 leading-tight">
              Celestial Gold Pendant
            </h1>

            {/* Dual Pricing */}
            <div className="flex items-baseline space-x-4 pt-2">
              <div className="text-3xl lg:text-4xl font-serif font-medium text-rose-gold">
                ₹42,000
              </div>
              <div className="text-xl text-gray-400 line-through">
                ₹50,000
              </div>
              <div className="px-3 py-1 bg-orange-500/10 rounded-full">
                <span className="text-sm font-medium text-orange-600">16% OFF</span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200/60 pt-8"></div>

            {/* Metal Selection */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Select Metal
              </h3>
              <div className="flex flex-wrap gap-3">
                {metalOptions.map((metal) => (
                  <button
                    key={metal.id}
                    onClick={() => setSelectedMetal(metal.name)}
                    className={`flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                      selectedMetal === metal.name
                        ? 'bg-gradient-to-r from-orange-100 to-rose-100 border-2 border-rose-gold shadow-lg'
                        : 'bg-white border border-gray-200 hover:shadow-md'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full ${metal.color} ring-2 ring-gray-300/50`}></div>
                    <span className={`font-medium ${
                      selectedMetal === metal.name ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {metal.name}
                    </span>
                    {selectedMetal === metal.name && (
                      <Check className="w-5 h-5 text-rose-gold ml-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Note about standard size */}
            <div className="p-4 bg-gradient-to-r from-amber-50 to-rose-50 rounded-2xl border border-amber-200/50">
              <div className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  This piece features a standard 18" chain length, meticulously crafted for versatile elegance.
                </p>
              </div>
            </div>

            {/* Product Information Sections */}
            <div className="space-y-6 pt-4">
              {/* The Story */}
              <div className="space-y-3">
                <h3 className="text-lg font-serif font-medium text-gray-900">The Story</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Inspired by celestial constellations, this pendant captures the eternal dance of stars in 
                  18kt gold. Each curve and facet is meticulously hand-polished to reflect light like a distant 
                  galaxy, creating a piece that feels both timeless and contemporary.
                </p>
              </div>

              {/* Material Specs */}
              <div className="space-y-3">
                <h3 className="text-lg font-serif font-medium text-gray-900">Material Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/50 rounded-xl">
                    <div className="text-sm text-gray-600">Material</div>
                    <div className="font-medium text-gray-900">18kt Solid Gold</div>
                  </div>
                  <div className="p-4 bg-white/50 rounded-xl">
                    <div className="text-sm text-gray-600">Weight</div>
                    <div className="font-medium text-gray-900">4.2 grams</div>
                  </div>
                </div>
              </div>

              {/* How to Wear */}
              <div className="space-y-3">
                <h3 className="text-lg font-serif font-medium text-gray-900">Styling</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Layer with delicate chains for a modern look, or wear solo against bare skin for maximum 
                  impact. Pairs beautifully with silk blouses and eveningwear alike.
                </p>
              </div>

              {/* Shipping & Returns */}
              <div className="p-5 bg-gradient-to-br from-stone-50 to-orange-50 rounded-2xl border border-stone-200">
                <h3 className="text-lg font-serif font-medium text-gray-900 mb-3">Shipping & Returns</h3>
                <p className="text-gray-700">
                  Free worldwide shipping on all orders. Due to the custom nature of fine jewelry, this piece 
                  is <span className="font-medium">final sale</span>. Each item undergoes quality verification before dispatch.
                </p>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="pt-8 space-y-4">
              <button className="w-full py-5 bg-gradient-to-r from-rose-gold to-orange-500 text-white rounded-2xl font-medium text-lg hover:shadow-2xl hover:shadow-orange-300/30 transition-all duration-300 flex items-center justify-center space-x-3 group">
                <ShoppingBag className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Add to Cart</span>
              </button>
              
              <div className="flex space-x-4">
                <button 
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`flex-1 py-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-center space-x-3 group ${
                    isWishlisted 
                      ? 'bg-rose-50 border-rose-300 text-rose-600' 
                      : 'border-gray-300 text-gray-700 hover:border-rose-300 hover:text-rose-600'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${
                    isWishlisted ? 'fill-rose-600' : ''
                  } group-hover:scale-110 transition-transform`} />
                  <span>{isWishlisted ? 'Saved' : 'Add to Wishlist'}</span>
                </button>
                
                <button className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-amber-100 to-orange-100 text-amber-900 font-medium border-2 border-amber-200 hover:shadow-lg transition-shadow duration-300">
                  Book Consultation
                </button>
              </div>
            </div>

            {/* Trust Bar */}
            <div className="pt-6 border-t border-gray-200/60">
              <div className="grid grid-cols-3 gap-4">
                {trustFeatures.map((feature, index) => (
                  <div key={index} className="text-center p-4 bg-white/30 rounded-xl">
                    <div className="flex justify-center mb-2">
                      <div className="p-3 bg-gradient-to-br from-orange-50 to-rose-50 rounded-full">
                        <feature.icon className="w-6 h-6 text-rose-gold" />
                      </div>
                    </div>
                    <div className="font-medium text-gray-900 text-sm">{feature.text}</div>
                    <div className="text-xs text-gray-600 mt-1">{feature.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Style tag for custom colors */}
      <style jsx>{`
        :root {
          --rose-gold: #b76e79;
          --orange-50: #fff7ed;
          --orange-100: #ffedd5;
          --orange-500: #f97316;
        }
        .bg-rose-gold {
          background-color: var(--rose-gold);
        }
        .text-rose-gold {
          color: var(--rose-gold);
        }
        .border-rose-gold {
          border-color: var(--rose-gold);
        }
        .from-rose-gold {
          --tw-gradient-from: var(--rose-gold);
        }
        .to-orange-500 {
          --tw-gradient-to: var(--orange-500);
        }
      `}</style>
    </div>
  );
};

export default FourthDesign;
