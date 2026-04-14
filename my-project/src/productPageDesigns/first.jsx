import { useState } from "react";

const GOLD = "#B8912A";
const GOLD_LIGHT = "#D4AF5A";
const CREAM = "#FAF7F2";
const CHARCOAL = "#1C1814";
const MUTED = "#7A6E65";

const PRODUCT = {
  name: "Aura Diamond Solitaire Ring",
  subtitle: "Signature Collection",
  breadcrumb: ["Fine Jewelry", "Rings"],
  price: 85000,
  originalPrice: 95000,
  rating: 4.9,
  reviews: 128,
  images: [
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=90&fit=crop",
    "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=90&fit=crop",
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=90&fit=crop",
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=90&fit=crop",
  ],
  metals: [
    { label: "18kt Yellow Gold", color: "#D4AF5A", border: "#B8912A" },
    { label: "Rose Gold", color: "#E8B09A", border: "#C4866E" },
    { label: "White Gold", color: "#DCDCDC", border: "#A8A8A8" },
    { label: "Platinum", color: "#C8C8D4", border: "#8888A0" },
  ],
  sizes: [10, 11, 12, 13, 14, 15, 16, 17],
  description:
    "A timeless expression of love, the Aura Diamond Solitaire Ring features a brilliant-cut diamond set in a delicate four-prong setting. Each stone is individually hand-selected for exceptional clarity and brilliance, making every ring as unique as the love it symbolises.",
  specs: [
    { label: "Material", value: "18kt Gold" },
    { label: "Purity", value: "BIS Hallmarked" },
    { label: "Certification", value: "HUID Certified" },
    { label: "Diamond", value: "0.25 ct, VS1, F Colour" },
    { label: "Setting", value: "Four-Prong Solitaire" },
  ],
  styling:
    "Layer this solitaire ring with a slender gold band for a modern stacked look, or let it shine solo as a statement of quiet elegance. Pairs beautifully with our Aura Tennis Bracelet and Teardrop Earrings.",
  shipping:
    "Complimentary shipping on all orders. Hassle-free 30-day returns with our white-glove pickup service.",
};

const fontSerif = "'Cormorant Garamond', 'Playfair Display', Georgia, serif";
const fontSans = "'DM Sans', 'Nunito', sans-serif";

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: `1px solid #E8E0D6` }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: fontSans,
          fontSize: "13px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: CHARCOAL,
          fontWeight: 500,
        }}
      >
        {title}
        <span
          style={{
            fontSize: "18px",
            color: GOLD,
            lineHeight: 1,
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            display: "inline-block",
          }}
        >
          +
        </span>
      </button>
      {open && (
        <div style={{ paddingBottom: "18px" }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default function FirstDesign() {
  const [mainImg, setMainImg] = useState(0);
  const [selectedMetal, setSelectedMetal] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2200);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .thumb-img { transition: all 0.25s ease; }
        .thumb-img:hover { transform: scale(1.04); }
        .metal-btn { transition: all 0.2s ease; }
        .metal-btn:hover { transform: scale(1.08); }
        .size-btn { transition: all 0.2s ease; }
        .size-btn:hover { border-color: ${GOLD} !important; color: ${GOLD} !important; }
        .cart-btn { transition: all 0.3s ease; position: relative; overflow: hidden; }
        .cart-btn:hover { background: #1C1814 !important; }
        .cart-btn::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          transition: left 0.6s ease;
        }
        .cart-btn:hover::after { left: 150%; }
        .wish-btn { transition: all 0.2s ease; }
        .wish-btn:hover { transform: scale(1.1); }
        .main-image { transition: opacity 0.35s ease; }
        .spec-row:nth-child(even) { background: rgba(212,175,90,0.06); }
      `}</style>

      <div
        style={{
          background: CREAM,
          minHeight: "100vh",
          fontFamily: fontSans,
          color: CHARCOAL,
        }}
      >
        {/* Breadcrumb */}
        <div
          style={{
            padding: "20px 40px",
            borderBottom: "1px solid #EDE6DA",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "12px",
            letterSpacing: "0.08em",
            color: MUTED,
            fontFamily: fontSans,
          }}
        >
          {PRODUCT.breadcrumb.map((crumb, i) => (
            <span key={crumb} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  cursor: "pointer",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {crumb}
              </span>
              {i < PRODUCT.breadcrumb.length - 1 && (
                <span style={{ color: GOLD_LIGHT, fontSize: "10px" }}>›</span>
              )}
            </span>
          ))}
          <span style={{ color: GOLD_LIGHT, fontSize: "10px" }}>›</span>
          <span
            style={{
              color: CHARCOAL,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 500,
            }}
          >
            {PRODUCT.name}
          </span>
        </div>

        {/* Main Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 40px 80px",
          }}
        >
          {/* ── LEFT: GALLERY ── */}
          <div
            style={{
              padding: "48px 40px 48px 0",
              position: "sticky",
              top: "0",
              alignSelf: "start",
            }}
          >
            <div style={{ display: "flex", gap: "16px" }}>
              {/* Thumbnail Strip */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  flexShrink: 0,
                }}
              >
                {PRODUCT.images.map((src, i) => (
                  <button
                    key={i}
                    className="thumb-img"
                    onClick={() => setMainImg(i)}
                    style={{
                      width: "68px",
                      height: "68px",
                      borderRadius: "4px",
                      overflow: "hidden",
                      border:
                        mainImg === i
                          ? `2px solid ${GOLD}`
                          : `1.5px solid #DDD6CA`,
                      cursor: "pointer",
                      padding: 0,
                      background: "none",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={src}
                      alt={`View ${i + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        filter: mainImg === i ? "none" : "brightness(0.88)",
                      }}
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div
                style={{
                  flex: 1,
                  borderRadius: "6px",
                  overflow: "hidden",
                  background: "#F0EAE0",
                  aspectRatio: "1 / 1.08",
                  position: "relative",
                }}
              >
                <img
                  key={mainImg}
                  className="main-image"
                  src={PRODUCT.images[mainImg]}
                  alt={PRODUCT.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                {/* Wishlist overlay */}
                <button
                  className="wish-btn"
                  onClick={() => setWishlisted(!wishlisted)}
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(250,247,242,0.88)",
                    border: `1px solid ${wishlisted ? GOLD : "#DDD6CA"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill={wishlisted ? GOLD : "none"} stroke={wishlisted ? GOLD : MUTED} strokeWidth="1.8">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>

                {/* Gold accent corner */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    background: "rgba(250,247,242,0.85)",
                    backdropFilter: "blur(8px)",
                    border: `1px solid ${GOLD_LIGHT}`,
                    borderRadius: "4px",
                    padding: "6px 12px",
                    fontFamily: fontSans,
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    color: GOLD,
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  BIS Hallmarked · HUID Certified
                </div>
              </div>
            </div>

            {/* Trust bar */}
            <div
              style={{
                marginTop: "24px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "12px",
              }}
            >
              {[
                { icon: "✦", label: "Free Shipping" },
                { icon: "◈", label: "30-Day Returns" },
                { icon: "❋", label: "Lifetime Polish" },
              ].map((t) => (
                <div
                  key={t.label}
                  style={{
                    background: "rgba(212,175,90,0.07)",
                    border: `1px solid rgba(184,145,42,0.2)`,
                    borderRadius: "6px",
                    padding: "12px 8px",
                    textAlign: "center",
                    fontFamily: fontSans,
                  }}
                >
                  <div style={{ fontSize: "14px", color: GOLD, marginBottom: "4px" }}>
                    {t.icon}
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: MUTED,
                    }}
                  >
                    {t.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: PRODUCT DETAILS ── */}
          <div style={{ padding: "48px 0 48px 48px", borderLeft: "1px solid #EDE6DA" }}>
            {/* Rating */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              <div style={{ display: "flex", gap: "2px" }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i < 5 ? GOLD : "#DDD6CA"}>
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
              <span style={{ fontSize: "12px", color: MUTED, fontFamily: fontSans }}>
                {PRODUCT.rating} · {PRODUCT.reviews} reviews
              </span>
            </div>

            {/* Collection label */}
            <p
              style={{
                fontFamily: fontSans,
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: GOLD,
                fontWeight: 500,
                marginBottom: "10px",
              }}
            >
              {PRODUCT.subtitle}
            </p>

            {/* Product Name */}
            <h1
              style={{
                fontFamily: fontSerif,
                fontSize: "42px",
                fontWeight: 400,
                lineHeight: 1.15,
                color: CHARCOAL,
                marginBottom: "24px",
                letterSpacing: "0.01em",
              }}
            >
              {PRODUCT.name}
            </h1>

            {/* Price */}
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "14px",
                marginBottom: "36px",
                paddingBottom: "36px",
                borderBottom: "1px solid #EDE6DA",
              }}
            >
              <span
                style={{
                  fontFamily: fontSerif,
                  fontSize: "34px",
                  fontWeight: 500,
                  color: CHARCOAL,
                  letterSpacing: "0.02em",
                }}
              >
                ₹{PRODUCT.price.toLocaleString("en-IN")}
              </span>
              <span
                style={{
                  fontFamily: fontSans,
                  fontSize: "15px",
                  color: "#AAA098",
                  textDecoration: "line-through",
                }}
              >
                ₹{PRODUCT.originalPrice.toLocaleString("en-IN")}
              </span>
              <span
                style={{
                  fontFamily: fontSans,
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  background: "rgba(184,145,42,0.12)",
                  color: GOLD,
                  padding: "3px 10px",
                  borderRadius: "2px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                Save 11%
              </span>
            </div>

            {/* Metal Selector */}
            <div style={{ marginBottom: "32px" }}>
              <p
                style={{
                  fontFamily: fontSans,
                  fontSize: "11px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: MUTED,
                  marginBottom: "14px",
                  fontWeight: 500,
                }}
              >
                Metal ·{" "}
                <span style={{ color: CHARCOAL, fontWeight: 500 }}>
                  {PRODUCT.metals[selectedMetal].label}
                </span>
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {PRODUCT.metals.map((metal, i) => (
                  <button
                    key={metal.label}
                    className="metal-btn"
                    onClick={() => setSelectedMetal(i)}
                    title={metal.label}
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: metal.color,
                      border:
                        selectedMetal === i
                          ? `3px solid ${CHARCOAL}`
                          : `2px solid transparent`,
                      outline:
                        selectedMetal === i
                          ? `1px solid ${metal.border}`
                          : "none",
                      outlineOffset: "3px",
                      cursor: "pointer",
                      boxShadow:
                        selectedMetal === i
                          ? `0 2px 12px rgba(0,0,0,0.15)`
                          : "none",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            {/* <div style={{ marginBottom: "36px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "14px",
                }}
              >
                <p
                  style={{
                    fontFamily: fontSans,
                    fontSize: "11px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: MUTED,
                    fontWeight: 500,
                  }}
                >
                  Ring Size
                  {selectedSize !== null && (
                    <span style={{ color: CHARCOAL }}> · {selectedSize}</span>
                  )}
                </p>
                <span
                  style={{
                    fontFamily: fontSans,
                    fontSize: "11px",
                    color: GOLD,
                    cursor: "pointer",
                    letterSpacing: "0.06em",
                    borderBottom: `1px solid ${GOLD}`,
                    paddingBottom: "1px",
                  }}
                >
                  Size Guide
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
                {PRODUCT.sizes.map((size) => (
                  <button
                    key={size}
                    className="size-btn"
                    onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                    style={{
                      height: "44px",
                      border:
                        selectedSize === size
                          ? `1.5px solid ${GOLD}`
                          : `1px solid #DDD6CA`,
                      borderRadius: "4px",
                      background:
                        selectedSize === size
                          ? `rgba(212,175,90,0.08)`
                          : CREAM,
                      color:
                        selectedSize === size ? GOLD : MUTED,
                      fontFamily: fontSans,
                      fontSize: "13px",
                      fontWeight: selectedSize === size ? 500 : 400,
                      cursor: "pointer",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div> */}

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
              <button
                className="cart-btn"
                onClick={handleAddToCart}
                style={{
                  flex: 1,
                  height: "54px",
                  background: addedToCart ? "#2E6E4E" : CHARCOAL,
                  color: "#FAF7F2",
                  border: "none",
                  borderRadius: "4px",
                  fontFamily: fontSans,
                  fontSize: "12px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                {addedToCart ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                    Added to Cart
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                    </svg>
                    Add to Cart
                  </>
                )}
              </button>
              <button
                className="wish-btn"
                onClick={() => setWishlisted(!wishlisted)}
                style={{
                  width: "54px",
                  height: "54px",
                  background: wishlisted ? "rgba(184,145,42,0.08)" : CREAM,
                  border: `1.5px solid ${wishlisted ? GOLD : "#DDD6CA"}`,
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill={wishlisted ? GOLD : "none"} stroke={wishlisted ? GOLD : MUTED} strokeWidth="1.7">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </button>
            </div>

            {/* Free shipping badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 16px",
                background: "rgba(212,175,90,0.06)",
                border: `1px solid rgba(184,145,42,0.18)`,
                borderRadius: "4px",
                marginBottom: "40px",
                fontFamily: fontSans,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8">
                <rect x="1" y="3" width="15" height="13" rx="1"/>
                <path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
              <span style={{ fontSize: "12px", color: MUTED, letterSpacing: "0.06em" }}>
                Free shipping · Delivered in 5–7 business days
              </span>
              <span style={{ marginLeft: "auto", fontSize: "12px", color: GOLD, fontWeight: 500 }}>
                Express available
              </span>
            </div>

            {/* Accordion Sections */}
            <div>
              <AccordionItem title="Description" defaultOpen={true}>
                <p
                  style={{
                    fontFamily: fontSerif,
                    fontSize: "16px",
                    lineHeight: 1.85,
                    color: "#5A5048",
                    fontWeight: 400,
                    fontStyle: "italic",
                  }}
                >
                  {PRODUCT.description}
                </p>
              </AccordionItem>

              <AccordionItem title="Metal & Certification">
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    {PRODUCT.specs.map((spec, i) => (
                      <tr key={spec.label} className="spec-row">
                        <td
                          style={{
                            padding: "9px 12px 9px 0",
                            fontFamily: fontSans,
                            fontSize: "12px",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: MUTED,
                            width: "44%",
                          }}
                        >
                          {spec.label}
                        </td>
                        <td
                          style={{
                            padding: "9px 0",
                            fontFamily: fontSans,
                            fontSize: "13px",
                            color: CHARCOAL,
                            fontWeight: 500,
                          }}
                        >
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </AccordionItem>

              <AccordionItem title="How to Style">
                <p
                  style={{
                    fontFamily: fontSerif,
                    fontSize: "16px",
                    lineHeight: 1.85,
                    color: "#5A5048",
                    fontStyle: "italic",
                  }}
                >
                  {PRODUCT.styling}
                </p>
              </AccordionItem>

              <AccordionItem title="Shipping & Returns">
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { icon: "→", text: PRODUCT.shipping },
                    { icon: "→", text: "All jewellery ships in our signature gift box with care instructions." },
                    { icon: "→", text: "Resize service available within 60 days of purchase." },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "flex-start",
                        fontFamily: fontSans,
                        fontSize: "13px",
                        lineHeight: 1.7,
                        color: "#5A5048",
                      }}
                    >
                      <span style={{ color: GOLD, flexShrink: 0, marginTop: "1px" }}>
                        {item.icon}
                      </span>
                      {item.text}
                    </div>
                  ))}
                </div>
              </AccordionItem>
            </div>

            {/* Bottom brand mark */}
            <div
              style={{
                marginTop: "40px",
                paddingTop: "28px",
                borderTop: "1px solid #EDE6DA",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "1px",
                  background: `linear-gradient(90deg, ${GOLD}, transparent)`,
                }}
              />
              <span
                style={{
                  fontFamily: fontSerif,
                  fontSize: "12px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: GOLD,
                  fontStyle: "italic",
                }}
              >
                Handcrafted in India
              </span>
              <div
                style={{
                  flex: 1,
                  height: "1px",
                  background: `linear-gradient(90deg, ${GOLD}, transparent)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}