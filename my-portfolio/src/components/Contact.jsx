const glass = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(24px) saturate(160%)",
  WebkitBackdropFilter: "blur(24px) saturate(160%)",
  border: "0.5px solid rgba(255,255,255,0.1)",
  borderRadius: 18,
};

export default function Contact() {
  return (
    <section id="contact" style={{
      background: "#000",
      padding: "100px 24px 80px",
    }}>
      <style>{`
        .contact-wrap { max-width: 1100px; margin: 0 auto; }
        .contact-cards { display: grid; grid-template-columns: 1fr; gap: 10px; }
        .contact-socials { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 10px; }
        @media (min-width: 768px) {
          .contact-wrap { padding: 0 32px; }
          .contact-cards { grid-template-columns: 1fr 1fr; max-width: 680px; }
          .contact-socials { max-width: 680px; }
        }
      `}</style>

      <div className="contact-wrap">
        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 64 }}>
          <span style={{ fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: "rgba(255,255,255,0.25)", fontFamily: "'Georgia', serif", whiteSpace: "nowrap" }}>
            05 — Contact
          </span>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.08)" }} />
        </div>

        <h2 style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: "clamp(36px, 6vw, 80px)",
          fontWeight: 400, color: "#fff",
          letterSpacing: -2, lineHeight: 1, margin: "0 0 48px",
        }}>
          Let's work<br />
          <span style={{ color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>together.</span>
        </h2>

        <div className="contact-cards">
          {/* Email — full width */}
          <a href="mailto:mnmmusharraf@gmail.com" style={{
            display: "flex", alignItems: "center", gap: 14,
            padding: "16px 18px", ...glass,
            textDecoration: "none", gridColumn: "1 / -1",
            transition: "background 0.2s, border-color 0.2s",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.09)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
          >
            <div style={{
              width: 38, height: 38, borderRadius: 10, flexShrink: 0,
              background: "rgba(255,255,255,0.08)", border: "0.5px solid rgba(255,255,255,0.14)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15,
            }}>✉</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, color: "#fff", fontFamily: "'Georgia', serif", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                mnmmusharraf@gmail.com
              </div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'Georgia', serif", marginTop: 2 }}>Email</div>
            </div>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 16, flexShrink: 0 }}>↗</span>
          </a>

          {/* Phone */}
          <a href="tel:+94765235249" style={{
            display: "flex", alignItems: "center", gap: 14,
            padding: "16px 18px", ...glass, textDecoration: "none",
            transition: "background 0.2s, border-color 0.2s",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.09)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
          >
            <div style={{
              width: 38, height: 38, borderRadius: 10, flexShrink: 0,
              background: "rgba(255,255,255,0.08)", border: "0.5px solid rgba(255,255,255,0.14)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15,
            }}>📞</div>
            <div>
              <div style={{ fontSize: 14, color: "#fff", fontFamily: "'Georgia', serif" }}>+94 76 523 5249</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'Georgia', serif", marginTop: 2 }}>Phone</div>
            </div>
          </a>

          {/* Location */}
          <div style={{
            display: "flex", alignItems: "center", gap: 14,
            padding: "16px 18px", ...glass,
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10, flexShrink: 0,
              background: "rgba(255,255,255,0.08)", border: "0.5px solid rgba(255,255,255,0.14)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15,
            }}>📍</div>
            <div>
              <div style={{ fontSize: 14, color: "#fff", fontFamily: "'Georgia', serif" }}>Colombo, Sri Lanka</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'Georgia', serif", marginTop: 2 }}>Available Worldwide</div>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="contact-socials">
          {[
            { label: "GitHub", href: "https://github.com/mnmmusharraf", icon: "⌥" },
            { label: "LinkedIn", href: "https://linkedin.com/in/mnmmusharraf", icon: "in" },
          ].map(({ label, href, icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "12px 20px", ...glass, textDecoration: "none", flex: 1, minWidth: 140,
              transition: "background 0.2s, border-color 0.2s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
            >
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>{icon}</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", fontFamily: "'Georgia', serif" }}>{label}</span>
              <span style={{ marginLeft: "auto", color: "rgba(255,255,255,0.2)", fontSize: 13 }}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}