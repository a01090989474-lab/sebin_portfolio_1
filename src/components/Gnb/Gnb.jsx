import { useState, useEffect } from "react";
import "./Gnb.scss";

const navItems = [
  { label: "PROFILE", href: "#profile" },
  { label: "WORKS", href: "#works" },
  { label: "PEOCESS", href: "#process" },
  { label: "CONTACT", href: "#contact" },
];

export default function Gnb() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);

      // Profile 섹션 이후 라이트 배경
      const profileEl = document.getElementById("profile");
      if (profileEl) {
        const threshold = profileEl.offsetTop + profileEl.offsetHeight * 0.5;
        setIsDark(y < threshold);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      </div>
    </header>
  );
}
