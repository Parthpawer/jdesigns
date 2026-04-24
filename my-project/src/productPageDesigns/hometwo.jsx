import React, { useEffect, useMemo, useState } from "react";

export default function HomeTwo() {
  const categories = useMemo(
    () => ["Rings", "Necklaces", "Bracelets", "Earrings", "Anklets", "Gift Sets"],
    []
  );

  const heroSlides = useMemo(
    () => [
      {
        tag: "New Season Edit",
        title: "Refined jewellery for modern everyday luxury.",
        desc: "A more elevated homepage with stronger layout hierarchy, editorial blocks, premium product presentation, and a softer luxury palette that works with your logo.",
        image:
          "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1600&q=80",
      },
      {
        tag: "Signature Essentials",
        title: "Minimal shine. Premium finish. Built to last.",
        desc: "Waterproof stainless steel jewellery designed to feel elegant, wearable, and gift-worthy across every collection.",
        image:
          "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1600&q=80",
      },
      {
        tag: "Luxury Daily Wear",
        title: "Pieces that look delicate, but wear beautifully.",
        desc: "A cleaner, more professional luxury storefront with rich image framing, warmer accents, and better content flow.",
        image:
          "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    []
  );

  const topPicks = useMemo(
    () => [
      {
        category: "Necklace",
        name: "Celeste Layered Pendant",
        price: "₹1,899",
        oldPrice: "₹2,599",
        image:
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
      },
      {
        category: "Bracelet",
        name: "Auric Link Bracelet",
        price: "₹1,449",
        oldPrice: "₹1,999",
        image:
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
      },
      {
        category: "Ring",
        name: "Sol Ring Stack",
        price: "₹999",
        oldPrice: "₹1,399",
        image:
          "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=900&q=80",
      },
      {
        category: "Earrings",
        name: "Sculpt Drop Pair",
        price: "₹1,299",
        oldPrice: "₹1,799",
        image:
          "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=900&q=80",
      },
    ],
    []
  );

  const exploreProducts = useMemo(
    () => [
      {
        category: "Earrings",
        name: "Petal Gold Studs",
        price: "₹1,099",
        oldPrice: "₹1,499",
        image:
          "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?auto=format&fit=crop&w=900&q=80",
      },
      {
        category: "Necklace",
        name: "Halo Fine Chain",
        price: "₹1,699",
        oldPrice: "₹2,199",
        image:
          "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80",
      },
      {
        category: "Bracelet",
        name: "Twist Cuff",
        price: "₹1,349",
        oldPrice: "₹1,799",
        image:
          "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80",
      },
      {
        category: "Anklet",
        name: "Glow Chain Anklet",
        price: "₹899",
        oldPrice: "₹1,299",
        image:
          "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=900&q=80",
      },
      {
        category: "Ring",
        name: "Aurora Dome Ring",
        price: "₹1,149",
        oldPrice: "₹1,549",
        image:
          "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&w=900&q=80",
      },
      {
        category: "Gift Set",
        name: "Signature Gift Box",
        price: "₹2,699",
        oldPrice: "₹3,299",
        image:
          "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80",
      },
    ],
    []
  );

  const newArrivals = useMemo(
    () => [
      {
        category: "Necklace",
        name: "Pearl Arc Collar",
        price: "₹1,999",
        oldPrice: "₹2,599",
        image:
          "https://images.unsplash.com/photo-1611107683227-e9060eccd846?auto=format&fit=crop&w=900&q=80",
      },
      {
        category: "Earrings",
        name: "Velora Hoops",
        price: "₹1,249",
        oldPrice: "₹1,699",
        image:
          "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80",
      },
      {
        category: "Bracelet",
        name: "Aster Chain Bracelet",
        price: "₹1,399",
        oldPrice: "₹1,899",
        image:
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
      },
      {
        category: "Ring",
        name: "Nova Statement Ring",
        price: "₹1,099",
        oldPrice: "₹1,499",
        image:
          "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=900&q=80",
      },
    ],
    []
  );

  const reviewImages = useMemo(
    () => [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    ],
    []
  );

  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [heroSlides.length]);

  const FeatureIcon = ({ children }) => <div className="feature-icon">{children}</div>;

  const ProductCard = ({ item }) => (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={item.image} alt={item.name} />
        <span className="product-badge">{item.category}</span>
        <button className="wishlist-btn" aria-label="Wishlist">
          ♡
        </button>
      </div>
      <div className="product-content">
        <h3>{item.name}</h3>
        <div className="price-row">
          <span className="price">{item.price}</span>
          <span className="old-price">{item.oldPrice}</span>
        </div>
        <button className="card-btn">Add to Cart</button>
      </div>
    </article>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap');

        :root{
          --bg:#fbf8f4;
          --bg-2:#f4eee6;
          --paper:#fffdfa;
          --card:#ffffffd9;
          --text:#1b140f;
          --muted:#7b6b5f;
          --line:rgba(78,55,36,.12);
          --gold:#c79a58;
          --gold-deep:#a87938;
          --orange:#d48a55;
          --soft:#f5dfc9;
          --dark:#241a14;
          --shadow:0 20px 50px rgba(58,39,21,.10);
          --radius-xl:32px;
          --radius-lg:24px;
          --radius-md:18px;
          --radius-sm:14px;
          --container:1320px;
        }

        *{box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{
          margin:0;
          font-family:"Inter",sans-serif;
          color:var(--text);
          background:
            radial-gradient(circle at top left, rgba(212,138,85,.12), transparent 24%),
            radial-gradient(circle at top right, rgba(199,154,88,.10), transparent 20%),
            linear-gradient(180deg,#fffdf9 0%, var(--bg) 100%);
        }

        img{display:block;max-width:100%}
        a{text-decoration:none;color:inherit}
        button{font:inherit;border:none;background:none;cursor:pointer}
        .container{width:min(var(--container),calc(100% - 32px));margin:0 auto}

        .announcement{
          background:#2f2219;
          color:rgba(255,255,255,.84);
          font-size:12px;
          letter-spacing:.14em;
          text-transform:uppercase;
        }
        .announcement-inner{
          min-height:42px;
          display:flex;
          align-items:center;
          justify-content:center;
          text-align:center;
          padding:8px 0;
        }

        .header-shell{
          position:sticky;
          top:0;
          z-index:50;
          background:rgba(251,248,244,.8);
          backdrop-filter:blur(18px);
          border-bottom:1px solid rgba(78,55,36,.08);
        }
        .header{
          min-height:88px;
          display:grid;
          grid-template-columns:1fr auto 1fr;
          align-items:center;
          gap:16px;
        }
        .nav-group{
          display:flex;
          align-items:center;
          gap:8px;
          flex-wrap:wrap;
        }
        .nav-group.right{justify-content:flex-end}
        .nav-link{
          padding:10px 14px;
          border-radius:999px;
          color:var(--muted);
          font-size:14px;
          font-weight:500;
          transition:.2s ease;
        }
        .nav-link:hover,.nav-link.active{
          background:#fff;
          color:var(--text);
          box-shadow:0 6px 18px rgba(0,0,0,.04);
        }

        .brand{
          display:flex;
          align-items:center;
          gap:14px;
          justify-content:center;
        }
        .brand-mark{
          width:56px;
          height:56px;
          border-radius:18px;
          background:linear-gradient(135deg,#f5e4c6 0%, var(--gold) 55%, var(--orange) 100%);
          color:#fff;
          display:grid;
          place-items:center;
          font-family:"Playfair Display",serif;
          font-size:26px;
          font-weight:700;
          box-shadow:0 12px 30px rgba(202,138,77,.24);
        }
        .brand-copy{
          line-height:1;
        }
        .brand-copy strong{
          display:block;
          font-family:"Playfair Display",serif;
          font-size:30px;
          letter-spacing:.18em;
          font-weight:600;
        }
        .brand-copy span{
          display:block;
          margin-top:6px;
          color:var(--muted);
          font-size:11px;
          letter-spacing:.32em;
        }

        .icon-btn{
          width:42px;
          height:42px;
          border-radius:50%;
          display:grid;
          place-items:center;
          background:#fff;
          border:1px solid var(--line);
          color:var(--text);
        }
        .sign-btn{
          padding:12px 18px;
          border-radius:999px;
          background:linear-gradient(135deg,var(--gold),var(--orange));
          color:#fff;
          font-weight:600;
          box-shadow:0 10px 24px rgba(212,138,85,.22);
        }

        .hero{
          padding:22px 0 28px;
        }
        .hero-layout{
          display:grid;
          grid-template-columns:1.15fr .85fr;
          gap:22px;
        }
        .hero-main{
          min-height:760px;
          position:relative;
          overflow:hidden;
          border-radius:36px;
          box-shadow:var(--shadow);
        }
        .hero-slide{
          position:absolute;
          inset:0;
          opacity:0;
          transform:scale(1.03);
          transition:opacity .9s ease, transform 1s ease;
        }
        .hero-slide.active{
          opacity:1;
          transform:scale(1);
        }
        .hero-slide img{
          width:100%;
          height:100%;
          object-fit:cover;
        }
        .hero-main::after{
          content:"";
          position:absolute;
          inset:0;
          background:
            linear-gradient(180deg, rgba(18,12,8,.10) 0%, rgba(18,12,8,.46) 60%, rgba(18,12,8,.80) 100%);
          z-index:1;
        }
        .hero-copy{
          position:absolute;
          left:40px;
          right:40px;
          bottom:40px;
          z-index:2;
          color:#fff;
          max-width:690px;
        }
        .hero-tag{
          display:inline-flex;
          align-items:center;
          padding:10px 16px;
          border-radius:999px;
          background:rgba(255,255,255,.12);
          border:1px solid rgba(255,255,255,.24);
          backdrop-filter:blur(10px);
          font-size:12px;
          letter-spacing:.18em;
          text-transform:uppercase;
          margin-bottom:18px;
        }
        .hero-copy h1{
          margin:0;
          font-family:"Playfair Display",serif;
          font-size:clamp(46px,6vw,88px);
          line-height:.95;
          font-weight:600;
        }
        .hero-copy p{
          margin:18px 0 28px;
          max-width:560px;
          font-size:15px;
          line-height:1.8;
          color:rgba(255,255,255,.84);
        }
        .hero-actions{
          display:flex;
          flex-wrap:wrap;
          gap:12px;
        }
        .btn-primary,.btn-secondary{
          padding:14px 22px;
          border-radius:999px;
          font-weight:600;
          transition:.2s ease;
        }
        .btn-primary{
          background:linear-gradient(135deg,var(--gold),var(--orange));
          color:#fff;
          box-shadow:0 14px 26px rgba(212,138,85,.25);
        }
        .btn-secondary{
          border:1px solid rgba(255,255,255,.25);
          background:rgba(255,255,255,.12);
          color:#fff;
          backdrop-filter:blur(12px);
        }

        .hero-side{
          display:grid;
          grid-template-rows:auto auto 1fr;
          gap:22px;
        }

        .panel{
          background:var(--card);
          border:1px solid rgba(78,55,36,.08);
          border-radius:28px;
          box-shadow:var(--shadow);
          backdrop-filter:blur(12px);
        }

        .editorial-block{
          overflow:hidden;
          position:relative;
          min-height:260px;
        }
        .editorial-block img{
          width:100%;
          height:100%;
          object-fit:cover;
        }
        .editorial-overlay{
          position:absolute;
          left:18px;
          right:18px;
          bottom:18px;
          background:rgba(255,255,255,.84);
          backdrop-filter:blur(12px);
          border-radius:22px;
          padding:20px;
        }
        .editorial-overlay h3{
          margin:0 0 8px;
          font-family:"Playfair Display",serif;
          font-size:32px;
          line-height:1;
        }
        .editorial-overlay p{
          margin:0;
          color:var(--muted);
          line-height:1.7;
          font-size:14px;
        }

        .category-panel{
          padding:24px;
        }
        .section-kicker{
          color:var(--gold-deep);
          text-transform:uppercase;
          letter-spacing:.18em;
          font-size:12px;
          font-weight:700;
          margin-bottom:14px;
        }
        .category-pills{
          display:flex;
          flex-wrap:wrap;
          gap:10px;
        }
        .category-pill{
          padding:11px 16px;
          border-radius:999px;
          background:#fff;
          border:1px solid var(--line);
          color:var(--muted);
          font-size:14px;
        }

        .stats-panel{
          padding:26px;
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:14px;
          align-content:start;
        }
        .stat-box{
          padding:18px;
          border-radius:20px;
          background:linear-gradient(180deg,#fffaf5,#fff);
          border:1px solid var(--line);
        }
        .stat-box strong{
          display:block;
          font-family:"Playfair Display",serif;
          font-size:28px;
          margin-bottom:6px;
        }
        .stat-box span{
          color:var(--muted);
          font-size:13px;
          line-height:1.5;
        }

        .section{
          padding:56px 0;
        }
        .section-head{
          display:flex;
          align-items:end;
          justify-content:space-between;
          gap:20px;
          margin-bottom:26px;
        }
        .section-left small{
          display:block;
          margin-bottom:10px;
          color:var(--gold-deep);
          letter-spacing:.18em;
          text-transform:uppercase;
          font-size:12px;
          font-weight:700;
        }
        .section-left h2{
          margin:0;
          font-family:"Playfair Display",serif;
          font-size:clamp(32px,4vw,58px);
          line-height:.96;
          font-weight:600;
          max-width:740px;
        }
        .section-left p{
          margin:12px 0 0;
          max-width:640px;
          color:var(--muted);
          line-height:1.8;
        }
        .outline-btn{
          padding:14px 20px;
          border-radius:999px;
          background:#fff;
          border:1px solid var(--line);
          font-weight:600;
          white-space:nowrap;
        }

        .featured-layout{
          display:grid;
          grid-template-columns:.9fr 1.1fr;
          gap:22px;
        }
        .featured-story{
          padding:28px;
          min-height:100%;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
        }
        .featured-story h3{
          margin:0 0 14px;
          font-family:"Playfair Display",serif;
          font-size:40px;
          line-height:1;
        }
        .featured-story p{
          margin:0;
          color:var(--muted);
          line-height:1.85;
        }
        .story-image{
          margin-top:24px;
          border-radius:24px;
          overflow:hidden;
          height:360px;
        }
        .story-image img{
          width:100%;
          height:100%;
          object-fit:cover;
        }

        .product-grid-4{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:18px;
        }
        .product-grid-3{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:18px;
        }

        .product-card{
          overflow:hidden;
          border-radius:24px;
          background:var(--card);
          border:1px solid rgba(78,55,36,.08);
          box-shadow:var(--shadow);
          transition:.25s ease;
        }
        .product-card:hover{
          transform:translateY(-6px);
        }
        .product-image-wrap{
          position:relative;
          aspect-ratio:.82/1;
          overflow:hidden;
          background:#eee5da;
        }
        .product-image-wrap img{
          width:100%;
          height:100%;
          object-fit:cover;
          transition:transform .6s ease;
        }
        .product-card:hover img{
          transform:scale(1.06);
        }
        .product-badge{
          position:absolute;
          left:14px;
          top:14px;
          padding:8px 12px;
          border-radius:999px;
          background:rgba(255,255,255,.85);
          border:1px solid rgba(78,55,36,.08);
          font-size:12px;
          font-weight:700;
          letter-spacing:.08em;
          text-transform:uppercase;
        }
        .wishlist-btn{
          position:absolute;
          right:14px;
          top:14px;
          width:40px;
          height:40px;
          border-radius:50%;
          display:grid;
          place-items:center;
          background:rgba(255,255,255,.9);
          border:1px solid rgba(78,55,36,.08);
          font-size:18px;
        }
        .product-content{
          padding:18px;
        }
        .product-content h3{
          margin:0 0 14px;
          font-size:16px;
          line-height:1.5;
          min-height:48px;
        }
        .price-row{
          display:flex;
          align-items:center;
          gap:10px;
          margin-bottom:16px;
        }
        .price{
          font-size:18px;
          font-weight:700;
        }
        .old-price{
          font-size:14px;
          color:#9d8b7e;
          text-decoration:line-through;
        }
        .card-btn{
          width:100%;
          padding:12px 14px;
          border-radius:999px;
          background:#fff;
          border:1px solid var(--line);
          font-weight:600;
        }

        .explore-layout{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:22px;
        }

        .big-banner{
          position:relative;
          min-height:520px;
          border-radius:34px;
          overflow:hidden;
          box-shadow:var(--shadow);
        }
        .big-banner img{
          width:100%;
          height:100%;
          object-fit:cover;
        }
        .big-banner::after{
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(90deg, rgba(20,14,10,.86) 0%, rgba(20,14,10,.45) 42%, rgba(20,14,10,.12) 100%);
        }
        .big-banner-copy{
          position:absolute;
          z-index:2;
          inset:0;
          display:flex;
          align-items:center;
          padding:52px;
          max-width:760px;
          color:#fff;
        }
        .big-banner-copy h2{
          margin:0 0 14px;
          font-family:"Playfair Display",serif;
          font-size:clamp(40px,5vw,72px);
          line-height:.95;
          font-weight:600;
        }
        .big-banner-copy p{
          margin:0 0 24px;
          max-width:520px;
          color:rgba(255,255,255,.84);
          line-height:1.8;
        }

        .feature-grid{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:18px;
        }
        .feature-card{
          padding:28px 22px;
          text-align:center;
          border-radius:24px;
          background:var(--card);
          border:1px solid rgba(78,55,36,.08);
          box-shadow:var(--shadow);
        }
        .feature-icon{
          width:70px;
          height:70px;
          margin:0 auto 18px;
          border-radius:22px;
          display:grid;
          place-items:center;
          background:linear-gradient(135deg,#f8ead7,#f2dac0);
          color:var(--gold-deep);
        }
        .feature-card h3{
          margin:0 0 10px;
          font-size:18px;
        }
        .feature-card p{
          margin:0;
          color:var(--muted);
          line-height:1.7;
          font-size:14px;
        }

        .review-layout{
          display:grid;
          grid-template-columns:.92fr 1.08fr;
          gap:22px;
        }
        .review-copy{
          padding:30px;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
        }
        .review-copy h2{
          margin:0 0 14px;
          font-family:"Playfair Display",serif;
          font-size:clamp(34px,4vw,54px);
          line-height:1;
        }
        .review-copy p{
          margin:0;
          color:var(--muted);
          line-height:1.85;
          max-width:520px;
        }
        .mini-proof{
          margin-top:26px;
          padding:18px;
          border-radius:20px;
          background:linear-gradient(135deg,#fffaf6,#fff);
          border:1px solid var(--line);
          display:flex;
          gap:14px;
          align-items:center;
        }
        .mini-proof-badge{
          width:50px;
          height:50px;
          border-radius:50%;
          display:grid;
          place-items:center;
          background:linear-gradient(135deg,var(--gold),var(--orange));
          color:#fff;
          font-weight:700;
        }
        .mini-proof strong{
          display:block;
          margin-bottom:5px;
        }
        .mini-proof span{
          color:var(--muted);
          font-size:14px;
        }

        .review-gallery{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:14px;
          padding:14px;
        }
        .review-card{
          border-radius:22px;
          overflow:hidden;
          min-height:340px;
          position:relative;
        }
        .review-card img{
          width:100%;
          height:100%;
          object-fit:cover;
        }
        .review-card::after{
          content:"Verified Customer";
          position:absolute;
          left:12px;
          bottom:12px;
          padding:8px 12px;
          border-radius:999px;
          background:rgba(26,18,12,.72);
          color:#fff;
          font-size:11px;
          text-transform:uppercase;
          letter-spacing:.10em;
          font-weight:700;
        }

        footer{
          margin-top:24px;
          padding-top:28px;
          border-top:1px solid rgba(78,55,36,.08);
          background:linear-gradient(180deg, rgba(255,255,255,.4), rgba(244,238,230,.88));
        }
        .footer-grid{
          display:grid;
          grid-template-columns:1.3fr .8fr .8fr .8fr .8fr;
          gap:26px;
          padding:24px 0 30px;
        }
        .footer-brand p{
          max-width:420px;
          color:var(--muted);
          line-height:1.8;
          margin:16px 0 22px;
        }
        .footer-title{
          margin-bottom:14px;
          font-size:13px;
          color:var(--gold-deep);
          letter-spacing:.18em;
          text-transform:uppercase;
          font-weight:700;
        }
        .footer-links{
          display:grid;
          gap:10px;
        }
        .footer-links a{
          color:var(--muted);
        }
        .social-row{
          display:flex;
          gap:10px;
          flex-wrap:wrap;
        }
        .social-row a{
          padding:10px 14px;
          border-radius:999px;
          background:#fff;
          border:1px solid var(--line);
          font-weight:600;
          font-size:14px;
        }
        .footer-bottom{
          border-top:1px solid rgba(78,55,36,.08);
          padding:16px 0 28px;
          display:flex;
          justify-content:space-between;
          gap:12px;
          flex-wrap:wrap;
          color:var(--muted);
          font-size:14px;
        }
        .footer-pills{
          display:flex;
          gap:10px;
          flex-wrap:wrap;
        }
        .footer-pill{
          padding:10px 14px;
          border-radius:999px;
          background:#fff;
          border:1px solid var(--line);
        }

        @media (max-width:1180px){
          .header{
            grid-template-columns:1fr;
            padding:14px 0;
          }
          .nav-group,.nav-group.right,.brand{
            justify-content:center;
          }
          .hero-layout,
          .featured-layout,
          .explore-layout,
          .review-layout,
          .footer-grid{
            grid-template-columns:1fr;
          }
          .product-grid-4{
            grid-template-columns:repeat(2,1fr);
          }
          .product-grid-3{
            grid-template-columns:repeat(2,1fr);
          }
          .feature-grid{
            grid-template-columns:repeat(2,1fr);
          }
          .review-gallery{
            grid-template-columns:repeat(2,1fr);
          }
          .hero-main{
            min-height:620px;
          }
        }

        @media (max-width:720px){
          .container{width:min(var(--container),calc(100% - 20px))}
          .section{padding:42px 0}
          .section-head{
            flex-direction:column;
            align-items:flex-start;
          }
          .hero-copy{
            left:22px;
            right:22px;
            bottom:22px;
          }
          .hero-main{
            min-height:520px;
            border-radius:26px;
          }
          .hero-copy h1{
            font-size:42px;
          }
          .big-banner-copy{
            padding:28px;
          }
          .review-gallery,
          .product-grid-4,
          .product-grid-3,
          .feature-grid,
          .stats-panel{
            grid-template-columns:1fr;
          }
          .review-card{
            min-height:280px;
          }
          .brand-copy strong{
            font-size:24px;
          }
        }
      `}</style>

      <div className="announcement">
        <div className="container announcement-inner">
          Waterproof • Tarnish Resistant • Hypoallergenic • Premium Stainless Steel Jewellery
        </div>
      </div>

      <div className="header-shell">
        <div className="container header">
          <div className="nav-group">
            <a className="nav-link active" href="#">Home</a>
            <a className="nav-link" href="#collections">Collection</a>
            {categories.slice(0, 4).map((item) => (
              <a key={item} className="nav-link" href="#">
                {item}
              </a>
            ))}
          </div>

          <a className="brand" href="#">
            <div className="brand-mark">TV</div>
            <div className="brand-copy">
              <strong>TVISAA</strong>
              <span>FOR YOU</span>
            </div>
          </a>

          <div className="nav-group right">
            <button className="icon-btn" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20L17 17" />
              </svg>
            </button>
            <button className="icon-btn" aria-label="Cart">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 6h15l-1.4 8H8z" />
                <path d="M6 6L5 3H2" />
                <circle cx="9" cy="20" r="1.4" />
                <circle cx="18" cy="20" r="1.4" />
              </svg>
            </button>
            <button className="sign-btn">Sign In</button>
          </div>
        </div>
      </div>

      <main>
        <section className="hero">
          <div className="container hero-layout">
            <div className="hero-main">
              {heroSlides.map((slide, i) => (
                <div key={i} className={`hero-slide ${i === active ? "active" : ""}`}>
                  <img src={slide.image} alt={slide.title} />
                </div>
              ))}

              <div className="hero-copy">
                <div className="hero-tag">{heroSlides[active].tag}</div>
                <h1>{heroSlides[active].title}</h1>
                <p>{heroSlides[active].desc}</p>
                <div className="hero-actions">
                  <a href="#collections" className="btn-primary">
                    Shop Collection
                  </a>
                  <a href="#new-arrivals" className="btn-secondary">
                    View New Arrivals
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-side">
              <div className="panel editorial-block">
                <img
                  src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80"
                  alt="Editorial jewellery"
                />
                <div className="editorial-overlay">
                  <h3>Quiet luxury, styled better.</h3>
                  <p>
                    This version uses stronger composition, larger visual anchors, and a
                    more fashion-led layout so the homepage feels premium instead of generic.
                  </p>
                </div>
              </div>

              <div className="panel category-panel">
                <div className="section-kicker">Shop by category</div>
                <div className="category-pills">
                  {categories.map((item) => (
                    <span key={item} className="category-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="panel stats-panel">
                <div className="stat-box">
                  <strong>4.9★</strong>
                  <span>Customer satisfaction across premium daily wear.</span>
                </div>
                <div className="stat-box">
                  <strong>1–2 Days</strong>
                  <span>Fast dispatch for a smoother shopping experience.</span>
                </div>
                <div className="stat-box">
                  <strong>Waterproof</strong>
                  <span>Designed for durable shine and everyday confidence.</span>
                </div>
                <div className="stat-box">
                  <strong>Luxury Gifting</strong>
                  <span>Elegant presentation that feels occasion-ready.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="collections">
          <div className="container">
            <div className="section-head">
              <div className="section-left">
                <small>Top Picks</small>
                <h2>Bestselling pieces presented in a more editorial, premium layout.</h2>
                <p>
                  Instead of a plain product row, this section combines a brand story panel
                  with elevated product cards so the page feels more intentional and polished.
                </p>
              </div>
              <a href="#" className="outline-btn">
                View All Top Picks
              </a>
            </div>

            <div className="featured-layout">
              <div className="panel featured-story">
                <div>
                  <small className="section-kicker">Signature edit</small>
                  <h3>Designed to feel premium at first glance.</h3>
                  <p>
                    Luxury ecommerce needs better rhythm, stronger contrast, sophisticated
                    spacing, and more confidence in its visual storytelling. This redesign
                    focuses on exactly that.
                  </p>
                </div>
                <div className="story-image">
                  <img
                    src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80"
                    alt="Luxury jewellery styling"
                  />
                </div>
              </div>

              <div className="product-grid-4">
                {topPicks.map((item, index) => (
                  <ProductCard key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="section-left">
                <small>Explore</small>
                <h2>Discover collections through a cleaner, more professional storefront.</h2>
                <p>
                  The card styling, image treatment, and spacing here are built to make your
                  products feel more premium and less template-like.
                </p>
              </div>
              <a href="#" className="outline-btn">
                View All Products
              </a>
            </div>

            <div className="explore-layout">
              <div className="product-grid-3">
                {exploreProducts.slice(0, 3).map((item, index) => (
                  <ProductCard key={index} item={item} />
                ))}
              </div>
              <div className="product-grid-3">
                {exploreProducts.slice(3, 6).map((item, index) => (
                  <ProductCard key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="big-banner">
              <img
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1600&q=80"
                alt="Luxury banner"
              />
              <div className="big-banner-copy">
                <div>
                  <div className="section-kicker" style={{ color: "#f2d8bc" }}>
                    Campaign Highlight
                  </div>
                  <h2>Made for repeat wear, styled for lasting impression.</h2>
                  <p>
                    A full-width premium banner adds breathing space between product sections
                    and makes the overall homepage feel more high-end.
                  </p>
                  <a href="#" className="btn-primary">
                    Discover the Edit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="new-arrivals">
          <div className="container">
            <div className="section-head">
              <div className="section-left">
                <small>New Arrivals</small>
                <h2>Fresh pieces with sharper product presentation and better hierarchy.</h2>
              </div>
              <a href="#" className="outline-btn">
                View All New Arrivals
              </a>
            </div>

            <div className="product-grid-4">
              {newArrivals.map((item, index) => (
                <ProductCard key={index} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="section-left">
                <small>Why Choose Tvisaa</small>
                <h2>Luxury feel, comfort-first wear, and practical everyday durability.</h2>
              </div>
            </div>

            <div className="feature-grid">
              <div className="feature-card">
                <FeatureIcon>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 3C12 3 6 10 6 14a6 6 0 1 0 12 0c0-4-6-11-6-11z" />
                  </svg>
                </FeatureIcon>
                <h3>Waterproof</h3>
                <p>Built for everyday wear without compromising your polished look.</p>
              </div>

              <div className="feature-card">
                <FeatureIcon>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2l2.2 4.6L19 9l-3.5 3.4.8 4.8L12 15l-4.3 2.2.8-4.8L5 9l4.8-2.4L12 2z" />
                  </svg>
                </FeatureIcon>
                <h3>Tarnish Resistant</h3>
                <p>Longer-lasting shine for jewellery that continues to feel premium.</p>
              </div>

              <div className="feature-card">
                <FeatureIcon>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 21s-7-4.35-7-11a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 6.65-7 11-7 11z" />
                  </svg>
                </FeatureIcon>
                <h3>Hypoallergenic</h3>
                <p>Designed to feel light, skin-friendly, and comfortable all day.</p>
              </div>

              <div className="feature-card">
                <FeatureIcon>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 7h11v8H3z" />
                    <path d="M14 10h3l4 4v1h-7z" />
                    <circle cx="7.5" cy="18.5" r="1.5" />
                    <circle cx="17.5" cy="18.5" r="1.5" />
                  </svg>
                </FeatureIcon>
                <h3>Free Delivery</h3>
                <p>Fast, convenient delivery that complements a premium shopping experience.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="review-layout">
              <div className="panel review-copy">
                <div>
                  <small className="section-kicker">Happy Customers</small>
                  <h2>Social proof that feels curated, not randomly placed.</h2>
                  <p>
                    This section is redesigned to feel more like a luxury brand showcase with
                    structured trust signals and neatly framed visual testimonials.
                  </p>
                </div>

                <div className="mini-proof">
                  <div className="mini-proof-badge">T</div>
                  <div>
                    <strong>Thousands of happy buyers</strong>
                    <span>Elegant finish • Great gifting appeal • Everyday wear comfort</span>
                  </div>
                </div>
              </div>

              <div className="panel review-gallery">
                {reviewImages.map((src, index) => (
                  <div className="review-card" key={index}>
                    <img src={src} alt="Customer testimonial" />
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
              <a className="brand" href="#" style={{ justifyContent: "flex-start" }}>
                <div className="brand-mark">TV</div>
                <div className="brand-copy">
                  <strong>TVISAA</strong>
                  <span>FOR YOU</span>
                </div>
              </a>

              <p>
                Premium stainless steel jewellery designed for elegant daily styling,
                gifting moments, and long-lasting shine.
              </p>

              <div className="social-row">
                <a href="#">Instagram</a>
                <a href="#">WhatsApp</a>
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
            <div className="footer-pills">
              <div className="footer-pill">Dispatch in 1–2 days</div>
              <div className="footer-pill">Delivery in 3–7 days</div>
              <div className="footer-pill">COD ₹99</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}