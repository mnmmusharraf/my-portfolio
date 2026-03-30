import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navItems = ["About", "Education", "Experience", "Projects", "Contact"];

  const handleNav = (item) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  return (
    <>
      <style>{`
        .nav-links-list { display: none !important; }
        .nav-burger { display: flex !important; }
        @media (min-width: 740px) {
          .nav-links-list { display: flex !important; }
          .nav-burger { display: none !important; }
        }
      `}</style>

      <nav style={{
        position: "fixed", top: 16, left: "50%", transform: "translateX(-50%)",
        zIndex: 1000,
        width: "calc(100% - 32px)", maxWidth: 1020,
        padding: "14px 24px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: scrolled ? "rgba(6,6,6,0.94)" : "rgba(255,255,255,0.05)",
        backdropFilter: "blur(28px) saturate(180%)",
        WebkitBackdropFilter: "blur(28px) saturate(180%)",
        border: "0.5px solid rgba(255,255,255,0.13)",
        borderRadius: 20,
        transition: "background 0.3s",
      }}>
        <span style={{
          fontFamily: "'Georgia', serif", fontSize: 17,
          fontWeight: 400, color: "#fff", letterSpacing: 0.5, flexShrink: 0,
        }}>
          M. Musharraf
        </span>

        <ul className="nav-links-list" style={{ gap: 2, listStyle: "none", margin: 0, padding: 0, alignItems: "center" }}>
          {navItems.map((item) => (
            <li key={item}>
              <button onClick={() => handleNav(item)} style={{
                color: "rgba(255,255,255,0.55)",
                background: "none", border: "none", cursor: "pointer",
                fontSize: 13.5, letterSpacing: 0.3, fontFamily: "'Georgia', serif",
                padding: "8px 15px", borderRadius: 12,
                transition: "background 0.2s, color 0.2s",
              }}
                onMouseEnter={(e) => { e.target.style.background = "rgba(255,255,255,0.09)"; e.target.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.target.style.background = "none"; e.target.style.color = "rgba(255,255,255,0.55)"; }}
              >{item}</button>
            </li>
          ))}
        </ul>

        <button className="nav-burger" onClick={() => setOpen(v => !v)} style={{
          background: "rgba(255,255,255,0.07)", border: "0.5px solid rgba(255,255,255,0.14)",
          borderRadius: 10, width: 40, height: 40, cursor: "pointer",
          alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 5, padding: 0,
          WebkitTapHighlightColor: "transparent",
        }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block", width: 17, height: "1px",
              background: open && i === 1 ? "transparent" : "rgba(255,255,255,0.8)",
              transform: open ? i === 0 ? "translateY(6px) rotate(45deg)" : i === 2 ? "translateY(-6px) rotate(-45deg)" : "none" : "none",
              transition: "transform 0.25s",
            }} />
          ))}
        </button>
      </nav>

      {open && (
        <div style={{
          position: "fixed", top: 82, left: 16, right: 16, zIndex: 999,
          background: "rgba(6,6,6,0.97)", backdropFilter: "blur(32px)", WebkitBackdropFilter: "blur(32px)",
          border: "0.5px solid rgba(255,255,255,0.11)", borderRadius: 18, padding: "8px 0",
          display: "flex", flexDirection: "column",
        }}>
          {navItems.map((item, i) => (
            <button key={item} onClick={() => handleNav(item)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: 16, fontFamily: "'Georgia', serif",
              color: "rgba(255,255,255,0.72)",
              padding: "15px 26px", textAlign: "left",
              borderBottom: i < navItems.length - 1 ? "0.5px solid rgba(255,255,255,0.05)" : "none",
              WebkitTapHighlightColor: "transparent", transition: "color 0.2s",
            }}
              onMouseEnter={(e) => e.target.style.color = "#fff"}
              onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.72)"}
            >{item}</button>
          ))}
        </div>
      )}
    </>
  );
}