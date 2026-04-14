import React, { useMemo, useState } from "react";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";
import { ShoppingBag } from "phosphor-react";

const gallery = [
  "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
];

const metals = [
  {
    id: "yellow",
    name: "18kt Yellow Gold",
    swatch: "linear-gradient(135deg, #f3eee7 0%, #f0dbc6 45%, #efb987 100%)",
  },
  {
    id: "rose",
    name: "18kt Rose Gold",
    swatch: "linear-gradient(135deg, #fffaf5 0%, #f8dcc9 45%, #f2b38c 100%)",
  },
  {
    id: "white",
    name: "18kt White Gold",
    swatch: "linear-gradient(135deg, #ffffff 0%, #f5ece2 48%, #f0c79f 100%)",
  },
];

const details = {
  category: "Fine Jewelry · Necklaces",
  title: "Celestial Gold Pendant",
  originalPrice: "₹50,000",
  discountedPrice: "₹42,000",
  story:
    "A luminous pendant inspired by the quiet brilliance of a twilight sky, designed to sit close to the collarbone and catch light with understated radiance.",
  material: "Material: 18kt Gold",
  styling:
    "Layer it over a silk blouse or wear it solo with an open neckline for a refined, everyday statement.",
  shipping: "Free Shipping on all orders. No Returns.",
};

function BagIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M7 9V7.75C7 5.12665 9.12665 3 11.75 3C14.3734 3 16.5 5.12665 16.5 7.75V9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M5.6 8.5H17.9C19.0359 8.5 19.6028 8.5 19.9549 8.84254C20.307 9.18508 20.3341 9.75132 20.3884 10.8838L20.7852 19.1338C20.8442 20.3608 20.8737 20.9742 20.4969 21.3621C20.1201 21.75 19.5059 21.75 18.2775 21.75H5.22246C3.9941 21.75 3.37992 21.75 3.00313 21.3621C2.62634 20.9742 2.65584 20.3608 2.71485 19.1338L3.11158 10.8838C3.16593 9.75132 3.1931 9.18508 3.54518 8.84254C3.89726 8.5 4.46415 8.5 5.6 8.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export default function SixthProduct() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedMetal, setSelectedMetal] = useState("yellow");

  const activeMetal = useMemo(
    () => metals.find((metal) => metal.id === selectedMetal) ?? metals[0],
    [selectedMetal]
  );

  return (
    <div className="min-h-screen bg-[#fffaf6] text-[#3f2a1f]">
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(255,255,255,0.96) 0%, rgba(250,234,217,0.9) 28%, rgba(247,200,157,0.28) 60%, rgba(255,250,246,1) 82%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12 lg:py-12">
        <div className="mb-8 flex items-center justify-between border-b border-[#ead8ca]/80 pb-5">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.38em] text-[#ad7750]">
              Maison Aurelle
            </p>
            <p className="mt-2 font-sans text-sm text-[#8b6a56]">
              Fine Jewelry Collection
            </p>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <div className="flex items-center gap-2 text-sm text-[#6c5547]">
              <ShieldCheck className="h-4 w-4 text-[#c9783b]" />
              Secure Checkout
            </div>
            <div className="flex items-center gap-2 text-sm text-[#6c5547]">
              <Sparkles className="h-4 w-4 text-[#c9783b]" />
              Premium Craftsmanship
            </div>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <section className="space-y-5">
            <div className="overflow-hidden rounded-[2rem] border border-[#ecd8ca] bg-white/70 shadow-[0_30px_80px_-30px_rgba(119,73,37,0.28)] backdrop-blur-sm">
              <div className="relative aspect-[4/4.6] overflow-hidden bg-[#fffdfb]">
                <img
                  src={gallery[selectedImage]}
                  alt={details.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fffaf6] via-[#fffaf600] to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/65 px-4 py-2 backdrop-blur-md">
                  <span className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#8d6346]">
                    Signature Piece
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              {gallery.map((image, index) => {
                const isSelected = index === selectedImage;
                return (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`group relative overflow-hidden rounded-[1.25rem] border bg-white/80 transition-all duration-300 ${
                      isSelected
                        ? "border-[#c9783b] shadow-[0_12px_35px_-18px_rgba(201,120,59,0.75)]"
                        : "border-[#ead9cc] hover:border-[#ddb497]"
                    }`}
                    aria-label={`View alternate image ${index + 1}`}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={image}
                        alt={`Alternate view ${index + 1}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div
                      className={`absolute inset-x-3 bottom-3 h-[2px] rounded-full transition-all ${
                        isSelected ? "bg-[#c9783b]" : "bg-white/0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </section>

          <section className="flex flex-col justify-center">
            <div className="max-w-xl">
              <p className="font-sans text-[11px] uppercase tracking-[0.34em] text-[#b57a54]">
                {details.category}
              </p>

              <h1 className="mt-4 font-serif text-4xl leading-tight text-[#3b2418] sm:text-5xl lg:text-[3.55rem] lg:leading-[1.05]">
                {details.title}
              </h1>

              <div className="mt-8 flex items-end gap-4">
                <span className="font-sans text-lg text-[#9f7d69] line-through decoration-[#d8ab8b] decoration-1">
                  {details.originalPrice}
                </span>
                <span className="font-serif text-3xl text-[#cb6d2c] sm:text-4xl">
                  {details.discountedPrice}
                </span>
              </div>

              <div className="mt-10 border-t border-[#ead8ca] pt-8">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#8e6a55]">
                    Metal Selection
                  </h2>
                  <p className="font-sans text-xs text-[#ae8268]">Standard fit</p>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {metals.map((metal) => {
                    const isActive = metal.id === selectedMetal;
                    return (
                      <button
                        key={metal.id}
                        type="button"
                        onClick={() => setSelectedMetal(metal.id)}
                        className={`rounded-[1.35rem] border px-4 py-4 text-left transition-all duration-300 ${
                          isActive
                            ? "border-[#cc7e47] bg-white shadow-[0_18px_45px_-26px_rgba(204,126,71,0.7)]"
                            : "border-[#ead8ca] bg-[#fffdfb] hover:border-[#ddb497] hover:bg-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className="h-8 w-8 rounded-full border border-white/80 shadow-inner shadow-white/40"
                            style={{ background: metal.swatch }}
                          />
                          <span className="font-sans text-sm leading-snug text-[#4c3428]">
                            {metal.name}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-4 rounded-[1.25rem] border border-[#efdcd0] bg-[linear-gradient(135deg,rgba(255,255,255,0.85),rgba(250,232,216,0.72))] px-4 py-3">
                  <p className="font-sans text-sm text-[#7e5d4c]">
                    Selected finish: <span className="text-[#c56f32]">{activeMetal.name}</span>
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-5 border-t border-[#ead8ca] pt-8">
                <div className="grid gap-2 md:grid-cols-[140px_1fr] md:gap-6">
                  <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#8e6a55]">
                    The Story
                  </p>
                  <p className="font-sans text-[15px] leading-7 text-[#654b3d]">
                    {details.story}
                  </p>
                </div>

                <div className="grid gap-2 md:grid-cols-[140px_1fr] md:gap-6">
                  <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#8e6a55]">
                    Material Specs
                  </p>
                  <p className="font-sans text-[15px] leading-7 text-[#654b3d]">
                    {details.material}
                  </p>
                </div>

                <div className="grid gap-2 md:grid-cols-[140px_1fr] md:gap-6">
                  <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#8e6a55]">
                    How to Wear
                  </p>
                  <p className="font-sans text-[15px] leading-7 text-[#654b3d]">
                    {details.styling}
                  </p>
                </div>

                <div className="grid gap-2 md:grid-cols-[140px_1fr] md:gap-6">
                  <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#8e6a55]">
                    Shipping & Returns
                  </p>
                  <p className="font-sans text-[15px] leading-7 text-[#654b3d]">
                    {details.shipping}
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 border-t border-[#ead8ca] pt-8 sm:flex-row sm:items-center">
                <button
                  type="button"
                  className="inline-flex min-h-[56px] flex-1 items-center justify-center gap-3 rounded-full bg-[#3f2518] px-7 py-4 font-sans text-sm uppercase tracking-[0.28em] text-[#fff8f3] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#522f1e]"
                >
                  <BagIcon />
                  Add to Cart
                </button>

                <button
                  type="button"
                  className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#e7d4c6] bg-white/85 text-[#5f4333] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d6a889] hover:text-[#c56f32]"
                  aria-label="Add to wishlist"
                >
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-[1.25rem] border border-[#ebd9cc] bg-white/70 px-4 py-4 backdrop-blur-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#fff,#fae7d7)] text-[#c56f32]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-[0.24em] text-[#8f6d5c]">
                      Secure Checkout
                    </p>
                    <p className="mt-1 font-sans text-sm text-[#664b3c]">
                      Protected payment experience
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-[1.25rem] border border-[#ebd9cc] bg-white/70 px-4 py-4 backdrop-blur-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#fff,#fae7d7)] text-[#c56f32]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-[0.24em] text-[#8f6d5c]">
                      Premium Craftsmanship
                    </p>
                    <p className="mt-1 font-sans text-sm text-[#664b3c]">
                      Designed with boutique precision
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
