import heroPhoto from "../assets/hero.png";

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden",
      background: "#000",
    }}>
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          min-height: 100vh;
        }
        .hero-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 120px 28px 80px;
          position: relative;
          z-index: 2;
        }
        .hero-photo {
          display: none;
          position: relative;
          overflow: hidden;
        }
        .hero-location-badge {
          position: absolute;
          bottom: 40px;
          left: 28px;
          padding: 7px 16px;
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 0.5px solid rgba(255,255,255,0.12);
          border-radius: 50px;
          font-size: 11px;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
          font-family: 'Georgia', serif;
        }
        @media (min-width: 768px) {
          .hero-grid { grid-template-columns: 1fr 1fr; }
          .hero-left { padding: 120px 56px 80px; }
          .hero-photo { display: block; }
          .hero-location-badge { left: 56px; }
        }
      `}</style>

      <div className="hero-grid">
        {/* LEFT */}
        <div className="hero-left">
          {/* Available pill */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "8px 18px",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
            border: "0.5px solid rgba(255,255,255,0.18)",
            borderRadius: 50, marginBottom: 36, width: "fit-content",
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "#4ade80", boxShadow: "0 0 6px #4ade80", display: "inline-block",
            }} />
            <span style={{
              fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase",
              color: "rgba(255,255,255,0.75)", fontFamily: "'Georgia', serif",
            }}>
              Available for work
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "clamp(48px, 6vw, 84px)",
            fontWeight: 400, color: "#fff",
            lineHeight: 1.05, letterSpacing: -2, margin: "0 0 6px",
          }}>
            Muhammad
          </h1>
          <h1 style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "clamp(48px, 6vw, 84px)",
            fontWeight: 400, color: "#fff",
            lineHeight: 1.05, letterSpacing: -2, margin: "0 0 36px",
          }}>
            Musharraf
          </h1>

          <p style={{
            fontSize: 16, color: "rgba(255,255,255,0.65)",
            lineHeight: 1.85, maxWidth: 400, marginBottom: 48,
            fontFamily: "'Georgia', serif",
          }}>
            I build intelligent, production-ready software — from deep learning models to full-stack web applications.
          </p>

          {/* CTA */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#projects" style={{
              padding: "13px 32px",
              background: "rgba(255,255,255,0.95)", color: "#000",
              borderRadius: 14, textDecoration: "none",
              fontSize: 13, letterSpacing: 0.5,
              fontFamily: "'Georgia', serif", fontWeight: 600,
              border: "0.5px solid rgba(255,255,255,0.3)", display: "inline-block",
              transition: "background 0.2s, transform 0.15s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.8)"; e.currentTarget.style.transform = "scale(0.98)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.95)"; e.currentTarget.style.transform = "scale(1)"; }}
            >
              View Work
            </a>
            <a href="#contact" style={{
              padding: "13px 32px",
              background: "rgba(255,255,255,0.07)",
              backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
              color: "rgba(255,255,255,0.85)",
              borderRadius: 14, textDecoration: "none",
              fontSize: 13, letterSpacing: 0.5,
              fontFamily: "'Georgia', serif",
              border: "0.5px solid rgba(255,255,255,0.18)", display: "inline-block",
              transition: "background 0.2s, transform 0.15s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.13)"; e.currentTarget.style.transform = "scale(0.98)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "scale(1)"; }}
            >
              Contact →
            </a>
          </div>

          {/* Stats — relevant to a final-year job-seeking student */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 48 }}>
            {[
              { n: "4+",      l: "Projects shipped" },
              { n: "Mar '26", l: "Graduating"        },
              { n: "3+",     l: "Languages known"   },
              { n: "Open",   l: "To opportunities"  },
            ].map(({ n, l }) => (
              <div key={l} style={{
                padding: "18px 20px",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(24px) saturate(160%)",
                WebkitBackdropFilter: "blur(24px) saturate(160%)",
                border: "0.5px solid rgba(255,255,255,0.1)",
                borderRadius: 18,
                transition: "background 0.2s, border-color 0.2s",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.09)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
              >
                <div style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: 22, color: "#fff",
                  fontWeight: 400, letterSpacing: -0.5, marginBottom: 5,
                }}>{n}</div>
                <div style={{
                  fontSize: 10, color: "rgba(255,255,255,0.3)",
                  letterSpacing: 1.5, textTransform: "uppercase",
                  fontFamily: "'Georgia', serif",
                }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — photo (desktop only) */}
        <div className="hero-photo">
          <img
            src={heroPhoto}
            alt="Musharraf"
            style={{
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center top", display: "block",
            }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, #000 0%, rgba(0,0,0,0.08) 22%, transparent 48%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "25%",
            background: "linear-gradient(to top, #000 0%, transparent 100%)",
            pointerEvents: "none",
          }} />
        </div>
      </div>

      {/* Location badge */}
      <div className="hero-location-badge">
        Sri Lanka · Available Worldwide
      </div>

      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: "0.5px", background: "rgba(255,255,255,0.08)",
      }} />
    </section>
  );
}