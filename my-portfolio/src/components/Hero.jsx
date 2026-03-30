import heroPhoto from "../assets/hero.png";

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: "100vh", position: "relative", overflow: "hidden", background: "#000" }}>
      <style>{`
        .hero-grid { display: grid; grid-template-columns: 1fr; min-height: 100vh; }
        .hero-left {
          display: flex; flex-direction: column; justify-content: center;
          padding: 120px 28px 80px; position: relative; z-index: 2;
        }
        .hero-photo { display: none; position: relative; overflow: hidden; }
        .hero-loc {
          position: absolute; bottom: 40px; left: 28px;
          padding: 7px 18px;
          background: rgba(255,255,255,0.06); backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 0.5px solid rgba(255,255,255,0.12); border-radius: 50px;
          font-size: 11px; letter-spacing: 2.5px; color: rgba(255,255,255,0.4);
          text-transform: uppercase; font-family: 'Georgia', serif;
        }
        @media (min-width: 768px) {
          .hero-grid { grid-template-columns: 1fr 1fr; }
          .hero-left { padding: 120px 56px 80px; }
          .hero-photo { display: block; }
          .hero-loc { left: 56px; }
        }
      `}</style>

      <div className="hero-grid">
        <div className="hero-left">
          {/* Available pill */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 9,
            padding: "9px 20px",
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
            border: "0.5px solid rgba(255,255,255,0.16)",
            borderRadius: 50, marginBottom: 40, width: "fit-content",
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80", display: "inline-block" }} />
            <span style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.75)", fontFamily: "'Georgia', serif" }}>
              Available for work
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "clamp(52px, 7vw, 92px)",
            fontWeight: 400, color: "#fff",
            lineHeight: 1.02, letterSpacing: -2.5, margin: "0 0 6px",
          }}>Muhammad</h1>
          <h1 style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "clamp(52px, 7vw, 92px)",
            fontWeight: 400, color: "#fff",
            lineHeight: 1.02, letterSpacing: -2.5, margin: "0 0 36px",
          }}>Musharraf</h1>

          <p style={{
            fontSize: 17, color: "rgba(255,255,255,0.65)",
            lineHeight: 1.9, maxWidth: 420, marginBottom: 48,
            fontFamily: "'Georgia', serif", letterSpacing: 0.1,
          }}>
            I build intelligent, production-ready software — from deep learning models to full-stack web applications.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#projects" style={{
              padding: "14px 34px",
              background: "rgba(255,255,255,0.95)", color: "#000",
              borderRadius: 14, textDecoration: "none",
              fontSize: 13, letterSpacing: 0.8,
              fontFamily: "'Georgia', serif", fontWeight: 600,
              border: "0.5px solid rgba(255,255,255,0.3)", display: "inline-block",
              transition: "background 0.2s, transform 0.15s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.8)"; e.currentTarget.style.transform = "scale(0.98)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.95)"; e.currentTarget.style.transform = "scale(1)"; }}
            >View Work</a>
            <a href="#contact" style={{
              padding: "14px 34px",
              background: "rgba(255,255,255,0.07)",
              backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
              color: "rgba(255,255,255,0.85)",
              borderRadius: 14, textDecoration: "none",
              fontSize: 13, letterSpacing: 0.8,
              fontFamily: "'Georgia', serif",
              border: "0.5px solid rgba(255,255,255,0.18)", display: "inline-block",
              transition: "background 0.2s, transform 0.15s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.13)"; e.currentTarget.style.transform = "scale(0.98)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "scale(1)"; }}
            >Contact →</a>
          </div>

          {/* Stats with gold accent on numbers */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 52 }}>
            {[
              { n: "4+",      l: "Projects shipped" },
              { n: "Mar '26", l: "Graduating"        },
              { n: "3+",      l: "Languages spoken"  },
              { n: "Open",    l: "To opportunities"  },
            ].map(({ n, l }) => (
              <div key={l} style={{
                padding: "18px 22px",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(24px) saturate(160%)",
                WebkitBackdropFilter: "blur(24px) saturate(160%)",
                border: "0.5px solid rgba(255,255,255,0.09)",
                borderRadius: 18,
                transition: "background 0.2s, border-color 0.2s",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(212,175,55,0.3)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; }}
              >
                <div style={{ fontFamily: "'Georgia', serif", fontSize: 24, color: "#d4af6a", fontWeight: 400, letterSpacing: -0.5, marginBottom: 5 }}>{n}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'Georgia', serif" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="hero-photo">
          <img src={heroPhoto} alt="Musharraf" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #000 0%, rgba(0,0,0,0.08) 22%, transparent 48%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "25%", background: "linear-gradient(to top, #000 0%, transparent 100%)", pointerEvents: "none" }} />
        </div>
      </div>

      <div className="hero-loc">Sri Lanka · Available Worldwide</div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "0.5px", background: "rgba(255,255,255,0.08)" }} />
    </section>
  );
}