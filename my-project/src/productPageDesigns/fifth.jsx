import React from 'react';
import { ShoppingBag, Heart, ShieldCheck, Gem } from 'lucide-react';

const Fifthdesign = () => {
  return (
    <div className="min-h-screen bg-[#FCF9F5] py-16 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#F2BCAE] selection:text-[#2C2826]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Hero & Media Gallery */}
        <div className="flex flex-col space-y-6">
          {/* Main Product Image */}
          <div className="w-full aspect-[4/5] overflow-hidden bg-white rounded-sm shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1599643478524-fb66f72400a1?q=80&w=1200&auto=format&fit=crop" 
              alt="Celestial Gold Pendant" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-3 gap-4">
            {/* Selected Thumbnail */}
            <div className="aspect-square cursor-pointer overflow-hidden rounded-sm border-2 border-[#E58A6D] bg-white p-0.5">
              <img 
                src="https://images.unsplash.com/photo-1599643478524-fb66f72400a1?q=80&w=300&auto=format&fit=crop" 
                alt="Angle 1" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Unselected Thumbnails */}
            <div className="aspect-square cursor-pointer overflow-hidden rounded-sm border border-[#EADDD7] bg-white hover:border-[#E58A6D] transition-colors">
              <img 
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=300&auto=format&fit=crop" 
                alt="Angle 2" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="aspect-square cursor-pointer overflow-hidden rounded-sm border border-[#EADDD7] bg-white hover:border-[#E58A6D] transition-colors">
              <img 
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=300&auto=format&fit=crop" 
                alt="Angle 3" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Product Details & Actions */}
        <div className="flex flex-col space-y-10 lg:sticky lg:top-16">
          
          {/* Product Identity & Pricing */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E58A6D]">
              Fine Jewelry · Necklaces
            </p>
            <h1 className="text-4xl md:text-5xl font-serif text-[#2C2826] leading-tight">
              Celestial Gold Pendant
            </h1>
            
            <div className="flex items-baseline space-x-4 pt-2">
              <span className="text-2xl font-serif text-[#2C2826]">₹42,000</span>
              <span className="text-lg font-sans text-[#A49992] line-through decoration-1">₹50,000</span>
            </div>
          </div>

          <hr className="border-[#EADDD7]" />

          {/* Configuration: Metal Selection */}
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8C827A]">
              Metal: <span className="text-[#2C2826]">18kt Yellow Gold</span>
            </span>
            <div className="flex items-center space-x-4">
              {/* Selected Swatch */}
              <button 
                className="w-8 h-8 rounded-full bg-[#D4AF37] border border-white outline outline-1 outline-[#E58A6D] shadow-sm"
                aria-label="Yellow Gold"
              />
              {/* Unselected Swatches */}
              <button 
                className="w-8 h-8 rounded-full bg-[#B76E79] border border-white outline outline-1 outline-transparent hover:outline-[#EADDD7] transition-all shadow-sm"
                aria-label="Rose Gold"
              />
              <button 
                className="w-8 h-8 rounded-full bg-[#E4E4E2] border border-white outline outline-1 outline-transparent hover:outline-[#EADDD7] transition-all shadow-sm"
                aria-label="White Gold"
              />
            </div>
          </div>

          {/* Product Information (The Details) */}
          <div className="space-y-8 pt-4">
            {/* The Story */}
            <div className="space-y-2">
              <h3 className="text-lg font-serif text-[#2C2826]">The Story</h3>
              <p className="text-sm text-[#5C544F] leading-relaxed font-light">
                Inspired by the subtle glow of the morning sun, the Celestial Pendant is a testament to understated elegance. Each facet is hand-polished to capture light from every angle, creating a luminous focal point for any neckline.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Material Specs */}
              <div className="space-y-1">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8C827A]">Details</h4>
                <p className="text-sm text-[#2C2826]">Material: 18kt Gold</p>
              </div>
              
              {/* Shipping & Returns */}
              <div className="space-y-1">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8C827A]">Delivery</h4>
                <p className="text-sm text-[#2C2826]">Free Shipping on all orders.<br/>No Returns.</p>
              </div>
            </div>

            {/* Styling Tip */}
            <div className="bg-white p-5 rounded-sm border border-[#EADDD7]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E58A6D] mb-2">How to Wear</h4>
              <p className="text-sm text-[#5C544F] leading-relaxed font-light">
                Perfect as a standalone statement piece over a silk slip dress, or layered with delicate chains for a textured, contemporary daytime look.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex space-x-4 pt-6">
            <button className="flex-1 bg-[#E58A6D] hover:bg-[#D1765A] text-white py-4 px-8 flex items-center justify-center space-x-2 rounded-sm transition-colors duration-300">
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-sm font-semibold uppercase tracking-wider">Add to Cart</span>
            </button>
            <button className="px-5 border border-[#EADDD7] text-[#2C2826] hover:bg-[#F2BCAE] hover:border-[#F2BCAE] hover:text-white rounded-sm transition-all duration-300 flex items-center justify-center bg-white">
              <Heart className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Trust Bar */}
          <div className="flex items-center justify-center space-x-8 pt-6 border-t border-[#EADDD7]">
            <div className="flex items-center space-x-2 text-[#8C827A]">
              <ShieldCheck className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-[10px] font-semibold uppercase tracking-widest">Secure Checkout</span>
            </div>
            <div className="flex items-center space-x-2 text-[#8C827A]">
              <Gem className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-[10px] font-semibold uppercase tracking-widest">Premium Craftsmanship</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Fifthdesign;