import { useState, useEffect } from "react";
import "./Gnb.scss";

const navItems = [
  { label: "PROFILE", href: "#profile" },
  { label: "WORKS", href: "#works" },
  { label: "PROCESS", href: "#process" },
  { label: "CONTACT", href: "#contact" },
];

export default function Gnb() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const worksEl = document.getElementById("works");
      if (worksEl) {
        setIsDark(y < worksEl.offsetTop);
      }
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <header
      className={`gnb ${scrolled ? "gnb--scrolled" : ""} ${isDark ? "gnb--dark" : "gnb--light"}`}
    >
      <div className="gnb__inner">
        <a href="#" className="gnb__logo">
          PORTFOLIO
        </a>
        <nav className="gnb__nav">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="gnb__link">
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className={`gnb__burger ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`gnb__mobile-nav ${menuOpen ? "is-open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="gnb__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
