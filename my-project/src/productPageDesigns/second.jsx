import React, { useState } from 'react';
import { ShoppingBag, Heart, ShieldCheck, Award, Lock } from 'lucide-react';

const SecondDesign = () => {
  const [selectedMetal, setSelectedMetal] = useState('18kt Yellow Gold');
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1599643478524-fb66f70b00b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  ];

  const metals = [
    { name: '18kt Yellow Gold', hex: '#E5A01D' },
    { name: 'Rose Gold', hex: '#B76E79' },
    { name: 'White Gold', hex: '#EAEAEA' }
  ];

  return (
    <div className="min-h-screen bg-[#FCF9F6] text-[#2D2D2D] font-sans selection:bg-[#B76E79] selection:text-white pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          
          {/* 1. Hero & Media Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4 lg:sticky lg:top-12">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible py-2 lg:py-0 w-full lg:w-24 shrink-0 scrollbar-hide">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-square w-20 lg:w-full overflow-hidden transition-all duration-300 ${
                    activeImage === idx 
                      ? 'ring-1 ring-[#B76E79] opacity-100' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="object-cover w-full h-full" />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="w-full aspect-[4/5] bg-white relative overflow-hidden">
              <img 
                src={images[activeImage]} 
                alt="Celestial Gold Pendant" 
                className="object-cover w-full h-full transition-opacity duration-500"
              />
            </div>
          </div>

          {/* 2. Product Identity & Config */}
          <div className="mt-10 lg:mt-0 flex flex-col pt-2 lg:pt-8">
            <span className="tracking-widest text-xs uppercase text-[#B76E79] font-medium mb-3">
              Tvisaa Fine Jewelry · Necklaces
            </span>
            <h1 className="text-4xl lg:text-5xl font-serif text-[#1A1A1A] leading-tight mb-6">
              Celestial Gold Pendant
            </h1>

            {/* Dual Pricing Display */}
            <div className="flex items-baseline gap-4 mb-10">
              <span className="text-3xl font-serif text-[#1A1A1A]">₹42,000</span>
              <span className="text-lg text-gray-400 line-through">₹50,000</span>
            </div>

            {/* 3. Simple Configuration */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm uppercase tracking-wide text-gray-900 font-medium">Metal Finish</span>
                <span className="text-sm text-gray-500">{selectedMetal}</span>
              </div>
              <div className="flex gap-4">
                {metals.map((metal) => (
                  <button
                    key={metal.name}
                    onClick={() => setSelectedMetal(metal.name)}
                    className={`h-12 w-12 rounded-full flex items-center justify-center transition-all ${
                      selectedMetal === metal.name 
                        ? 'ring-1 ring-offset-4 ring-offset-[#FCF9F6] ring-[#B76E79]' 
                        : 'hover:scale-105 border border-gray-200'
                    }`}
                    style={{ backgroundColor: metal.hex }}
                    aria-label={`Select ${metal.name}`}
                  />
                ))}
              </div>
            </div>

            {/* 5. Call to Action */}
            <div className="flex gap-4 mb-12">
              <button className="flex-1 bg-[#FF6B35] hover:bg-[#E05A2A] text-white py-4 px-8 flex items-center justify-center gap-3 transition-colors duration-300">
                <ShoppingBag size={20} strokeWidth={1.5} />
                <span className="uppercase tracking-widest text-sm font-medium">Add to Cart</span>
              </button>
              <button className="w-14 h-14 flex items-center justify-center border border-[#E8DFD8] hover:border-[#B76E79] hover:text-[#B76E79] transition-colors duration-300 bg-white">
                <Heart size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* 4. Product Information (Clean, Non-boxy layout) */}
            <div className="space-y-10 border-t border-[#E8DFD8] pt-10">
              
              <div className="space-y-3">
                <h3 className="text-sm uppercase tracking-widest font-semibold text-[#1A1A1A]">The Story</h3>
                <p className="text-[#5A5A5A] leading-relaxed text-sm">
                  Inspired by the quiet beauty of the night sky, the Celestial Gold Pendant is a testament to timeless elegance. Crafted to catch the light from every angle, it serves as a daily reminder of your own inner brilliance.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm uppercase tracking-widest font-semibold text-[#1A1A1A]">Details</h3>
                <ul className="text-[#5A5A5A] space-y-2 text-sm">
                  <li><span className="font-medium text-gray-800">Material:</span> 18kt Gold</li>
                  <li><span className="font-medium text-gray-800">Purity:</span> BIS Hallmarked</li>
                  <li><span className="font-medium text-gray-800">Certification:</span> HUID Certified</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm uppercase tracking-widest font-semibold text-[#1A1A1A]">How to Wear</h3>
                <p className="text-[#5A5A5A] leading-relaxed text-sm">
                  Designed to sit perfectly at the collarbone. Layer it with delicate chains for a textured, modern look, or wear it alone as a sophisticated statement piece.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm uppercase tracking-widest font-semibold text-[#1A1A1A]">Shipping & Returns</h3>
                <p className="text-[#5A5A5A] text-sm">
                  Free Shipping on all orders. Final Sale: No Returns.
                </p>
              </div>

            </div>

            {/* Trust Bar */}
            <div className="mt-12 py-6 border-y border-[#E8DFD8] flex justify-between items-center px-2">
              <div className="flex flex-col items-center gap-2 group cursor-default">
                <Award size={22} className="text-[#B76E79]" strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-wider text-gray-500">BIS Hallmarked</span>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-default">
                <ShieldCheck size={22} className="text-[#B76E79]" strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-wider text-gray-500">HUID Certified</span>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-default">
                <Lock size={22} className="text-[#B76E79]" strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-wider text-gray-500">Secure Checkout</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondDesign;