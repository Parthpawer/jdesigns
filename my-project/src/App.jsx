import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import FirstDesign from './productPageDesigns/first'
import SecondDesign from './productPageDesigns/second'
import ThirdDesign from './productPageDesigns/third'
import FourthDesign from './productPageDesigns/fourth'
import Fifthdesign from './productPageDesigns/fifth'
import SixthProduct from './productPageDesigns/six'
import HomeOne from './productPageDesigns/homeone'
import HomeTwo from './productPageDesigns/hometwo'

const PAGES = [
  { id: "first", label: "First" },
  { id: "second", label: "Second"},
  { id: "third", label: "Third"},
  { id: "fourth", label: "Fourth"},
  { id: "fifth", label: "Fifth"},
  { id: "sixth", label: "Sixth"},
  { id: "homeone", label: "Home page one" },
  { id: "hometwo", label: "Home page Two" },
];

const PAGE_COMPONENTS = {
  first: FirstDesign,
  second: SecondDesign,
  third: ThirdDesign,
  fourth: FourthDesign,
  fifth: Fifthdesign,
  sixth: SixthProduct,
  homeone: HomeOne,
  hometwo: HomeTwo,
};

const App = () => {
  const [activePage, setActivePage] = useState("first");

  const ActivePage = PAGE_COMPONENTS[activePage];

  return (
    <div style={{ fontFamily: "sans-serif", minHeight: "100vh" }}>
      <nav style={{
        display: "flex",
        gap: "8px",
        padding: "16px 24px",
        borderBottom: "1px solid #e0e0e0",
        background: "#fff",
      }}>
        {PAGES.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActivePage(id)}
            style={{
              padding: "8px 20px",
              borderRadius: "6px",
              border: activePage === id ? "none" : "1px solid #d0d0d0",
              background: activePage === id ? "#1a1a1a" : "transparent",
              color: activePage === id ? "#fff" : "#333",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: activePage === id ? 500 : 400,
              transition: "all 0.15s ease",
            }}
          >
            {label}
          </button>
        ))}
      </nav>

      <main style={{ padding: "32px 24px" }}>
        <ActivePage />
      </main>
    </div>
  );
}

export default App;