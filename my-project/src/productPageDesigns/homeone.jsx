import React, { useEffect, useMemo, useState } from "react";

export default function HomeOne() {
  const categories = useMemo(
    () => ["Rings", "Necklaces", "Bracelets", "Earrings", "Anklets", "Gift Sets"],
    []
  );

  const heroData = useMemo(
    () => [
      {
        title: "Jewellery that feels soft, modern, and unmistakably premium.",
        subtitle:
          "A redesigned luxury-first homepage with warmer neutrals, editorial image framing, elegant typography, and polished product presentation.",
        image:
          "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Crafted for everyday elegance and long-lasting shine.",
        subtitle:
          "Waterproof stainless steel jewellery that looks elevated, photographs beautifully, and fits your premium brand positioning.",
        image:
          "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Luxury styling with clean structure and stronger visual hierarchy.",
        subtitle:
          "Better spacing, richer surfaces, warm metallic accents, and a softer palette inspired by your logo.",
        image:
          "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    []
  );

  const topPicks = useMemo(
    () => [
      {
        category: "Necklace",
        name: "Luna Layered Pendant Necklace",
        price: "₹1,899",
        oldPrice: "₹2,599",
        discount: "27% OFF",
        image:
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
      },
      {
        category: "Bracelet",
        name: "Aurelia Gold Link Bracelet",
        price: "₹1,499",
        oldPrice: "₹2,099",
        discount: "29% OFF",
        image:
          "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80",
      },
      {
        category: "Earrings",
        name: "Sculpted Drop Earrings",
        price: "₹1,299",
        oldPrice: "₹1,799",
        discount: "28% OFF",
        image:
          "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=900&q=80",
      },
      {
        category: "Ring",
        name: "Solstice Minimal Ring Set",
        price: "₹999",
        oldPrice: "₹1,499",
        discount: "33% OFF",
        image:
          "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=900&q=80",
      },
    ],
    []
  );

  const explore = useMemo(
    () => [
      {
        category: "Necklace",
        name: "Pearl Arc Collar",
        price: "₹1,799",
        oldPrice: "₹2,299",
        discount: "22% OFF",
        image:
          "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80",
      },
      {
        category: "Bracelet",
        name: "Twist Cuff Bracelet",
        price: "₹1,299",
        oldPrice: "₹1,749",
        discount: "26% OFF",
        image:
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
      },
      {
        category: "Earrings",
        name: "Velora Hoop Pair",
        price: "₹1,199",
        oldPrice: "₹1,599",
        discount: "25% OFF",
        image:
          "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?auto=format&fit=crop&w=900&q=80",
      },
      {
        category: "Anklet",
        name: "Glow Chain Anklet",
        price: "₹899",
        oldPrice: "₹1,299",
        discount: "31% OFF",
        image:
          "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=900&q=80",
      },
    ],
    []
  );

  const newArrivals = useMemo(
    () => [
      {
        category: "Gift Set",
        name: "Signature Gift Box Set",
        price: "₹2,699",
        oldPrice: "₹3,299",
        discount: "18% OFF",
        image:
          "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80",
      },
      {
        category: "Ring",
        name: "Auric Dome Ring",
        price: "₹1,099",
        oldPrice: "₹1,499",
        discount: "27% OFF",
        image:
          "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&w=900&q=80",
      },
      {
        category: "Necklace",
        name: "Halo Fine Chain Necklace",
        price: "₹1,599",
        oldPrice: "₹2,099",
        discount: "24% OFF",
        image:
          "https://images.unsplash.com/photo-1611107683227-e9060eccd846?auto=format&fit=crop&w=900&q=80",
      },
      {
        category: "Earrings",
        name: "Golden Petal Studs",
        price: "₹999",
        oldPrice: "₹1,399",
        discount: "28% OFF",
        image:
          "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80",
      },
    ],
    []
  );

  const whyChoose = useMemo(
    () => [
      {
        title: "Waterproof",
        desc: "Made for daily wear with durable stainless steel that keeps up beautifully.",
        icon: (
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 3C12 3 6 10 6 14a6 6 0 1 0 12 0c0-4-6-11-6-11z" />
          </svg>
        ),
      },
      {
        title: "Tarnish Resistant",
        desc: "A long-lasting polished finish that stays elegant with regular wear.",
        icon: (
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 2l2.2 4.6L19 9l-3.5 3.4.8 4.8L12 15l-4.3 2.2.8-4.8L5 9l4.8-2.4L12 2z" />
          </svg>
        ),
      },
      {
        title: "Hypoallergenic",
        desc: "Comfort-first materials designed to feel light and skin-friendly all day.",
        icon: (
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 21s-7-4.35-7-11a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 6.65-7 11-7 11z" />
          </svg>
        ),
      },
      {
        title: "Free Delivery",
        desc: "Smooth doorstep delivery to make premium shopping feel even better.",
        icon: (
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3 7h11v8H3z" />
            <path d="M14 10h3l4 4v1h-7z" />
            <circle cx="7.5" cy="18.5" r="1.5" />
            <circle cx="17.5" cy="18.5" r="1.5" />
          </svg>
        ),
      },
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
    ],
    []
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroData.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [heroData.length]);

  const ProductCard = ({ item }) => (
    <article className="product-card">
      <div className="product-image-wrap">
        <span className="product-tag">{item.category}</span>
        <span className="discount-pill">{item.discount}</span>

        <img src={item.image} alt={item.name} />

        <button className="quick-btn" aria-label="Add to wishlist">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 21s-7-4.35-7-11a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 6.65-7 11-7 11z" />
          </svg>
        </button>
      </div>

      <div className="product-info">
        <div className="product-meta">
          <span className="product-category">{item.category}</span>
          <span className="product-rating">★ 4.9</span>
        </div>

        <h3 className="product-name">{item.name}</h3>

        <div className="product-price">
          <span className="current-price">{item.price}</span>
          <span className="actual-price">{item.oldPrice}</span>
        </div>

        <div className="product-footer">
          <span className="mini-btn">Quick View</span>
          <span className="mini-btn">Add to Cart</span>
        </div>
      </div>
    </article>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --bg: #fbf7f1;
          --bg-soft: #f4ede2;
          --card: rgba(255,255,255,0.78);
          --card-strong: #fffdf9;
          --text: #1e1712;
          --muted: #746559;
          --line: rgba(92, 63, 35, 0.12);
          --gold: #cda45e;
          --gold-deep: #b8853d;
          --copper: #d48457;
          --copper-soft: #f2c3a9;
          --shadow: 0 18px 60px rgba(82, 58, 31, 0.12);
          --radius-xl: 30px;
          --radius-lg: 22px;
          --radius-md: 16px;
          --radius-sm: 12px;
          --container: 1280px;
        }

        * { box-sizing: border-box; }

        body {
          margin: 0;
          font-family: "Inter", sans-serif;
          color: var(--text);
          background:
            radial-gradient(circle at top left, rgba(212,132,87,0.10), transparent 28%),
            radial-gradient(circle at top right, rgba(205,164,94,0.12), transparent 22%),
            linear-gradient(180deg, #fffdf9 0%, var(--bg) 100%);
        }

        img { max-width: 100%; display: block; }
        a { color: inherit; text-decoration: none; }
        button { border: none; background: none; font: inherit; cursor: pointer; }

        .container {
          width: min(var(--container), calc(100% - 32px));
          margin-inline: auto;
        }

        .section { padding: 44px 0; }

        .section-header {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 24px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--gold-deep);
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .eyebrow::before {
          content: "";
          width: 28px;
          height: 1px;
          background: linear-gradient(90deg, var(--gold-deep), transparent);
        }

        .section-title {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(34px, 4vw, 58px);
          line-height: 0.95;
          margin: 0;
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .section-desc {
          color: var(--muted);
          margin: 10px 0 0;
          max-width: 620px;
          line-height: 1.65;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 22px;
          border-radius: 999px;
          transition: 0.25s ease;
          font-weight: 600;
          white-space: nowrap;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--gold) 0%, var(--copper) 100%);
          color: white;
          box-shadow: 0 12px 30px rgba(201, 142, 86, 0.28);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 34px rgba(201, 142, 86, 0.34);
        }

        .btn-secondary {
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.75);
          color: var(--text);
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: white;
          transform: translateY(-2px);
        }

        .chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border: 1px solid var(--line);
          border-radius: 999px;
          background: rgba(255,255,255,0.78);
          color: var(--muted);
          font-size: 14px;
          backdrop-filter: blur(10px);
        }

        .topbar {
          background: linear-gradient(90deg, #2f241b 0%, #4b3522 100%);
          color: rgba(255,255,255,0.82);
          font-size: 13px;
          letter-spacing: 0.04em;
        }

        .topbar-inner {
          min-height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          gap: 18px;
          padding: 8px 0;
        }

        .navbar-wrap {
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(18px);
          background: rgba(251, 247, 241, 0.72);
          border-bottom: 1px solid rgba(92, 63, 35, 0.08);
        }

        .navbar {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 16px;
          min-height: 88px;
        }

        .nav-left, .nav-right {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .nav-right { justify-content: flex-end; }

        .nav-link {
          padding: 10px 14px;
          border-radius: 999px;
          color: var(--muted);
          transition: 0.2s ease;
          font-size: 14px;
          font-weight: 500;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--text);
          background: rgba(255,255,255,0.8);
        }

        .brand {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-width: 220px;
        }

        .brand-mark {
          width: 52px;
          height: 52px;
          border-radius: 18px;
          background: linear-gradient(135deg, #f7ead2 0%, #d6a45f 55%, #c67d4e 100%);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 12px 30px rgba(196, 132, 71, 0.18);
          display: grid;
          place-items: center;
          position: relative;
          overflow: hidden;
        }

        .brand-mark::after {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: 17px;
          border: 1px solid rgba(255,255,255,0.28);
        }

        .brand-mark span {
          font-family: "Cormorant Garamond", serif;
          color: white;
          font-size: 28px;
          font-weight: 700;
          letter-spacing: 0.02em;
          transform: translateY(-1px);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1;
        }

        .brand-name {
          font-size: 28px;
          letter-spacing: 0.22em;
          font-weight: 600;
          font-family: "Cormorant Garamond", serif;
        }

        .brand-sub {
          margin-top: 6px;
          color: var(--muted);
          font-size: 11px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
        }

        .nav-icon-btn {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: rgba(255,255,255,0.8);
          border: 1px solid var(--line);
          color: var(--text);
          transition: 0.2s ease;
        }

        .nav-icon-btn:hover {
          transform: translateY(-2px);
          background: white;
        }

        .hero { padding: 22px 0 32px; }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.12fr 0.88fr;
          gap: 22px;
          align-items: stretch;
        }

        .hero-main {
          min-height: 690px;
          border-radius: 34px;
          overflow: hidden;
          position: relative;
          background: #ddd;
          box-shadow: var(--shadow);
        }

        .hero-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transform: scale(1.03);
          transition: opacity 0.9s ease, transform 1.2s ease;
        }

        .hero-slide.active {
          opacity: 1;
          transform: scale(1);
        }

        .hero-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(26,19,14,0.08) 0%, rgba(26,19,14,0.55) 65%, rgba(26,19,14,0.78) 100%),
            linear-gradient(90deg, rgba(255,245,232,0.16) 0%, transparent 40%);
          z-index: 2;
        }

        .hero-content {
          position: absolute;
          z-index: 3;
          left: 40px;
          right: 40px;
          bottom: 38px;
          color: white;
          max-width: 650px;
        }

        .hero-badge {
          display: inline-flex;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.22);
          backdrop-filter: blur(10px);
          color: rgba(255,255,255,0.92);
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .hero-title {
          margin: 0;
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(48px, 6vw, 88px);
          line-height: 0.9;
          letter-spacing: -0.03em;
          font-weight: 600;
        }

        .hero-subtitle {
          margin: 18px 0 28px;
          max-width: 560px;
          line-height: 1.7;
          font-size: 15px;
          color: rgba(255,255,255,0.85);
        }

        .hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .hero-side {
          display: grid;
          grid-template-rows: 1fr auto auto;
          gap: 22px;
        }

        .editorial-card,
        .hero-categories,
        .hero-stats {
          background: rgba(255,255,255,0.74);
          border: 1px solid rgba(130, 94, 52, 0.1);
          backdrop-filter: blur(14px);
          border-radius: 28px;
          box-shadow: var(--shadow);
        }

        .editorial-card {
          overflow: hidden;
          position: relative;
          min-height: 360px;
        }

        .editorial-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .editorial-copy {
          position: absolute;
          inset: auto 24px 24px 24px;
          padding: 22px;
          border-radius: 22px;
          background: rgba(255,255,255,0.82);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(92, 63, 35, 0.08);
        }

        .editorial-copy h3 {
          margin: 0 0 8px;
          font-family: "Cormorant Garamond", serif;
          font-size: 34px;
          line-height: 0.95;
        }

        .editorial-copy p {
          margin: 0;
          color: var(--muted);
          line-height: 1.65;
          font-size: 14px;
        }

        .hero-categories, .hero-stats { padding: 24px; }

        .category-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 16px;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .stat {
          padding: 14px;
          border-radius: 18px;
          background: rgba(255,255,255,0.72);
          border: 1px solid var(--line);
          text-align: center;
        }

        .stat strong {
          display: block;
          font-size: 26px;
          font-family: "Cormorant Garamond", serif;
          color: var(--text);
          margin-bottom: 4px;
        }

        .stat span {
          color: var(--muted);
          font-size: 13px;
        }

        .showcase-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .product-card {
          border-radius: 26px;
          overflow: hidden;
          background: var(--card);
          border: 1px solid rgba(130, 94, 52, 0.08);
          box-shadow: var(--shadow);
          transition: 0.25s ease;
          backdrop-filter: blur(14px);
        }

        .product-card:hover { transform: translateY(-6px); }

        .product-image-wrap {
          position: relative;
          aspect-ratio: 0.84 / 1;
          overflow: hidden;
          background: #f3ecdf;
        }

        .product-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .product-card:hover .product-image-wrap img {
          transform: scale(1.06);
        }

        .product-tag, .discount-pill {
          position: absolute;
          top: 14px;
          z-index: 2;
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.04em;
          backdrop-filter: blur(10px);
        }

        .product-tag {
          left: 14px;
          background: rgba(255,255,255,0.82);
          color: var(--text);
          border: 1px solid rgba(92, 63, 35, 0.08);
        }

        .discount-pill {
          right: 14px;
          color: white;
          background: linear-gradient(135deg, var(--gold) 0%, var(--copper) 100%);
          box-shadow: 0 8px 20px rgba(205, 133, 71, 0.22);
        }

        .quick-btn {
          position: absolute;
          right: 14px;
          bottom: 14px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(92,63,35,0.08);
          color: var(--text);
          box-shadow: 0 12px 24px rgba(0,0,0,0.08);
        }

        .product-info { padding: 18px; }

        .product-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 10px;
        }

        .product-category {
          color: var(--gold-deep);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .product-rating {
          color: #8b6d48;
          font-size: 13px;
        }

        .product-name {
          margin: 0 0 14px;
          font-size: 16px;
          line-height: 1.5;
          min-height: 48px;
        }

        .product-price {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .current-price {
          font-weight: 700;
          font-size: 17px;
          color: var(--text);
        }

        .actual-price {
          color: #9c8b7e;
          text-decoration: line-through;
          font-size: 14px;
        }

        .product-footer {
          margin-top: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
        }

        .mini-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 10px 16px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.82);
          font-size: 13px;
          font-weight: 600;
        }

        .banner {
          margin: 18px 0 0;
        }

        .banner-card {
          position: relative;
          min-height: 460px;
          border-radius: 34px;
          overflow: hidden;
          box-shadow: var(--shadow);
        }

        .banner-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .banner-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(30,23,18,0.82) 0%, rgba(30,23,18,0.38) 40%, rgba(30,23,18,0.10) 100%);
        }

        .banner-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          align-items: center;
          padding: 50px;
          max-width: 700px;
          color: white;
        }

        .banner-content h2 {
          margin: 0 0 16px;
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(38px, 5vw, 72px);
          line-height: 0.95;
          font-weight: 600;
        }

        .banner-content p {
          margin: 0 0 26px;
          color: rgba(255,255,255,0.82);
          line-height: 1.7;
          max-width: 520px;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .why-card {
          padding: 28px 24px;
          border-radius: 24px;
          background: rgba(255,255,255,0.78);
          border: 1px solid rgba(130,94,52,0.08);
          box-shadow: var(--shadow);
          text-align: center;
        }

        .why-icon {
          width: 68px;
          height: 68px;
          border-radius: 22px;
          margin: 0 auto 18px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #f8ead7 0%, #efd7b6 100%);
          color: var(--gold-deep);
        }

        .why-card h3 {
          margin: 0 0 10px;
          font-size: 18px;
        }

        .why-card p {
          margin: 0;
          color: var(--muted);
          line-height: 1.65;
          font-size: 14px;
        }

        .testimonials-wrap {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 18px;
          align-items: stretch;
        }

        .testimonials-copy, .testimonials-grid {
          border-radius: 28px;
          background: rgba(255,255,255,0.76);
          border: 1px solid rgba(130,94,52,0.08);
          box-shadow: var(--shadow);
          backdrop-filter: blur(14px);
        }

        .testimonials-copy {
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 18px;
          min-height: 420px;
        }

        .quote {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1;
          margin: 0;
        }

        .testimonials-copy p {
          color: var(--muted);
          line-height: 1.8;
          margin: 0;
          max-width: 540px;
        }

        .mini-review {
          display: flex;
          gap: 14px;
          align-items: center;
          padding: 16px;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(252,246,236,0.94), rgba(255,255,255,0.88));
          border: 1px solid var(--line);
        }

        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, var(--gold), var(--copper));
          color: white;
          font-weight: 700;
        }

        .mini-review strong {
          display: block;
          margin-bottom: 4px;
        }

        .mini-review span {
          color: var(--muted);
          font-size: 14px;
        }

        .testimonials-grid {
          padding: 16px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .ss-card {
          border-radius: 20px;
          overflow: hidden;
          min-height: 190px;
          background: #eee;
          position: relative;
        }

        .ss-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .ss-card::after {
          content: "Verified Customer";
          position: absolute;
          left: 12px;
          bottom: 12px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 8px 12px;
          border-radius: 999px;
          color: white;
          background: rgba(30, 23, 18, 0.75);
          backdrop-filter: blur(8px);
        }

        footer {
          margin-top: 26px;
          padding-top: 30px;
          border-top: 1px solid rgba(92,63,35,0.08);
          background:
            radial-gradient(circle at bottom left, rgba(212,132,87,0.12), transparent 20%),
            linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(244,237,226,0.8) 100%);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.8fr 0.8fr 0.8fr 0.8fr;
          gap: 26px;
          padding: 22px 0 28px;
        }

        .footer-brand p {
          color: var(--muted);
          line-height: 1.75;
          margin: 16px 0 22px;
          max-width: 420px;
        }

        .footer-title {
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold-deep);
          font-weight: 700;
          margin-bottom: 14px;
        }

        .footer-links {
          display: grid;
          gap: 10px;
        }

        .footer-links a {
          color: var(--muted);
          transition: 0.2s ease;
        }

        .footer-links a:hover {
          color: var(--text);
          transform: translateX(2px);
        }

        .socials {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 999px;
          padding: 10px 14px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.78);
          color: var(--text);
          font-size: 14px;
          font-weight: 600;
        }

        .footer-bottom {
          border-top: 1px solid rgba(92,63,35,0.08);
          padding: 16px 0 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          color: var(--muted);
          font-size: 14px;
        }

        .bottom-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .bottom-pill {
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.7);
        }

        @media (max-width: 1160px) {
          .hero-grid,
          .testimonials-wrap,
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .showcase-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .why-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .navbar {
            grid-template-columns: 1fr;
            padding: 14px 0;
          }

          .nav-left,
          .nav-right,
          .brand {
            justify-content: center;
          }

          .hero-main {
            min-height: 580px;
          }
        }

        @media (max-width: 720px) {
          .container {
            width: min(var(--container), calc(100% - 20px));
          }

          .showcase-grid,
          .why-grid,
          .testimonials-grid,
          .hero-stats {
            grid-template-columns: 1fr;
          }

          .hero-content {
            left: 22px;
            right: 22px;
            bottom: 22px;
          }

          .hero-main {
            min-height: 520px;
          }

          .banner-content {
            padding: 26px;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }

          .section {
            padding: 34px 0;
          }

          .section-header {
            align-items: flex-start;
            flex-direction: column;
          }

          .topbar-inner {
            gap: 8px;
            flex-wrap: wrap;
          }
        }
      `}</style>

      <div className="topbar">
        <div className="container topbar-inner">
          <span>Premium stainless steel jewellery</span>
          <span>•</span>
          <span>Waterproof • Tarnish Resistant • Hypoallergenic</span>
        </div>
      </div>

      <div className="navbar-wrap">
        <div className="container navbar">
          <div className="nav-left">
            <a className="nav-link active" href="#">Home</a>
            <a className="nav-link" href="#collections">Collection</a>
            {categories.map((cat) => (
              <a key={cat} className="nav-link" href="#">{cat}</a>
            ))}
          </div>

          <a href="#" className="brand" aria-label="Tvisaa For You">
            <div className="brand-mark"><span>TV</span></div>
            <div className="brand-text">
              <div className="brand-name">TVISAA</div>
              <div className="brand-sub">FOR YOU</div>
            </div>
          </a>

          <div className="nav-right">
            <button className="nav-icon-btn" aria-label="Search">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20L17 17" />
              </svg>
            </button>

            <button className="nav-icon-btn" aria-label="Cart">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 6h15l-1.5 8.5H8z" />
                <path d="M6 6L5 3H2" />
                <circle cx="9" cy="20" r="1.5" />
                <circle cx="18" cy="20" r="1.5" />
              </svg>
            </button>

            <a className="btn btn-secondary" href="#">Sign In</a>
          </div>
        </div>
      </div>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-main">
                {heroData.map((slide, index) => (
                  <div
                    key={index}
                    className={`hero-slide ${index === currentSlide ? "active" : ""}`}
                  >
                    <img src={slide.image} alt={slide.title} />
                  </div>
                ))}

                <div className="hero-overlay" />

                <div className="hero-content">
                  <div className="hero-badge">Everyday luxury for every moment</div>
                  <h1 className="hero-title">{heroData[currentSlide].title}</h1>
                  <p className="hero-subtitle">{heroData[currentSlide].subtitle}</p>

                  <div className="hero-actions">
                    <a className="btn btn-primary" href="#collections">Shop Collections</a>
                    <a className="btn btn-secondary" href="#new-arrivals">New Arrivals</a>
                  </div>
                </div>
              </div>

              <div className="hero-side">
                <div className="editorial-card">
                  <img
                    src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80"
                    alt="Premium jewellery editorial"
                  />
                  <div className="editorial-copy">
                    <h3>Premium essentials,<br />styled softly.</h3>
                    <p>
                      A warmer, cleaner visual language built around champagne, ivory,
                      and soft copper tones to match the luxury feel of your logo.
                    </p>
                  </div>
                </div>

                <div className="hero-categories">
                  <div className="eyebrow">Browse by category</div>
                  <div className="category-row">
                    {categories.map((cat) => (
                      <span key={cat} className="chip">{cat}</span>
                    ))}
                  </div>
                </div>

                <div className="hero-stats">
                  <div className="stat">
                    <strong>304+</strong>
                    <span>Premium styles</span>
                  </div>
                  <div className="stat">
                    <strong>4.9★</strong>
                    <span>Customer love</span>
                  </div>
                  <div className="stat">
                    <strong>1–2 Days</strong>
                    <span>Fast dispatch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="collections">
          <div className="container">
            <div className="section-header">
              <div>
                <div className="eyebrow">Top Picks</div>
                <h2 className="section-title">Curated bestsellers with a premium finish.</h2>
                <p className="section-desc">
                  This section now feels more editorial and luxury-focused instead of a basic row of cards.
                </p>
              </div>
              <a href="#" className="btn btn-secondary">View All Top Picks</a>
            </div>

            <div className="showcase-grid">
              {topPicks.map((item, index) => (
                <ProductCard key={index} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <div>
                <div className="eyebrow">Explore</div>
                <h2 className="section-title">Shop by mood, layering style, or statement.</h2>
                <p className="section-desc">
                  Instead of looking plain, this layout uses larger spacing, better hierarchy, luxury cards, and softer tones.
                </p>
              </div>
              <a href="#" className="btn btn-secondary">View All Products</a>
            </div>

            <div className="showcase-grid">
              {explore.map((item, index) => (
                <ProductCard key={index} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="section banner">
          <div className="container">
            <div className="banner-card">
              <img
                src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1600&q=80"
                alt="Luxury jewellery banner"
              />
              <div className="banner-content">
                <div>
                  <div className="eyebrow" style={{ color: "#f3d7b9" }}>Signature Drop</div>
                  <h2>Timeless shine, made for daily wear.</h2>
                  <p>
                    Lightweight, refined, and durable pieces crafted to move from everyday styling
                    to occasion dressing without losing their polished finish.
                  </p>
                  <a href="#" className="btn btn-primary">Discover the Drop</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="new-arrivals">
          <div className="container">
            <div className="section-header">
              <div>
                <div className="eyebrow">New Arrivals</div>
                <h2 className="section-title">Fresh arrivals with elevated detailing.</h2>
                <p className="section-desc">
                  Better product spacing, pricing hierarchy, and image treatment make the homepage feel professionally designed.
                </p>
              </div>
              <a href="#" className="btn btn-secondary">View All New Arrivals</a>
            </div>

            <div className="showcase-grid">
              {newArrivals.map((item, index) => (
                <ProductCard key={index} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <div>
                <div className="eyebrow">Why choose Tvisaa</div>
                <h2 className="section-title">Luxury feel, built for real life.</h2>
              </div>
            </div>

            <div className="why-grid">
              {whyChoose.map((item, index) => (
                <article className="why-card" key={index}>
                  <div className="why-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="testimonials-wrap">
              <div className="testimonials-copy">
                <div>
                  <div className="eyebrow">Happy Customers</div>
                  <h2 className="quote">Loved for the shine. Reordered for the quality.</h2>
                  <p>
                    Instead of a plain testimony strip, this section creates trust with premium framing,
                    layered cards, and real-feeling social proof screenshots.
                  </p>
                </div>

                <div className="mini-review">
                  <div className="avatar">T</div>
                  <div>
                    <strong>Thousands of happy buyers</strong>
                    <span>Elegant finish • Skin-friendly wear • Gifting-ready presentation</span>
                  </div>
                </div>
              </div>

              <div className="testimonials-grid">
                {testimonials.map((src, index) => (
                  <div className="ss-card" key={index}>
                    <img src={src} alt="Customer review" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="brand" style={{ justifyContent: "flex-start" }}>
                <div className="brand-mark"><span>TV</span></div>
                <div className="brand-text">
                  <div className="brand-name">TVISAA</div>
                  <div className="brand-sub">FOR YOU</div>
                </div>
              </a>

              <p>
                Premium stainless steel jewellery designed for effortless elegance.
                Waterproof, tarnish resistant, and made to complement everyday luxury.
              </p>

              <div className="socials">
                <a className="social-link" href="#">Instagram</a>
                <a className="social-link" href="#">WhatsApp</a>
              </div>
            </div>

            <div>
              <div className="footer-title">Brand</div>
              <div className="footer-links">
                <a href="#">About Us</a>
                <a href="#">Our Vision</a>
                <a href="#">Our Mission</a>
              </div>
            </div>

            <div>
              <div className="footer-title">Care</div>
              <div className="footer-links">
                <a href="#">Jewellery Care</a>
              </div>
            </div>

            <div>
              <div className="footer-title">Shipping</div>
              <div className="footer-links">
                <a href="#">Shipping & Delivery</a>
                <a href="#">Tracking</a>
                <a href="#">Cash on Delivery</a>
              </div>
            </div>

            <div>
              <div className="footer-title">Legal</div>
              <div className="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Shipping Policy</a>
                <a href="#">Terms & Conditions</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>© 2026 Tvisaa_for You</div>
            <div className="bottom-pills">
              <div className="bottom-pill">Dispatch in 1–2 days</div>
              <div className="bottom-pill">Delivery in 3–7 days</div>
              <div className="bottom-pill">COD ₹99</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}