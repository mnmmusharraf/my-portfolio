const glass = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(24px) saturate(160%)",
  WebkitBackdropFilter: "blur(24px) saturate(160%)",
  border: "0.5px solid rgba(255,255,255,0.1)",
  borderRadius: 18,
};

export default function Contact() {
  return (
    <section id="contact" style={{ background: "#000", padding: "110px 24px 90px" }}>
      <style>{`
        .contact-wrap { max-width: 1100px; margin: 0 auto; }
        .contact-cards { display: grid; grid-template-columns: 1fr; gap: 10px; }
        .contact-socials { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 10px; }
        @media (min-width: 768px) {
          .contact-wrap { padding: 0 40px; }
          .contact-cards { grid-template-columns: 1fr 1fr; max-width: 700px; }
          .contact-socials { max-width: 700px; }
        }
      `}</style>

      <div className="contact-wrap">
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 72 }}>
          <span style={{ fontSize: 11, letterSpacing: 5, textTransform: "uppercase", color: "#d4af6a", fontFamily: "'Georgia', serif", whiteSpace: "nowrap" }}>
            05 — Contact
          </span>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.08)" }} />
        </div>

        <h2 style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: "clamp(40px, 6vw, 84px)",
          fontWeight: 400, color: "#fff",
          letterSpacing: -2, lineHeight: 1, margin: "0 0 52px",
        }}>
          Let's work<br />
          <span style={{ color: "rgba(255,255,255,0.28)", fontStyle: "italic" }}>together.</span>
        </h2>

        <div className="contact-cards">
          {/* Email — full width, gold hover */}
          <a href="mailto:mnmmusharraf@gmail.com" style={{
            display: "flex", alignItems: "center", gap: 16,
            padding: "18px 20px", ...glass,
            textDecoration: "none", gridColumn: "1 / -1",
            transition: "background 0.2s, border-color 0.2s",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(212,175,55,0.07)"; e.currentTarget.style.borderColor = "rgba(212,175,55,0.35)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
          >
            <div style={{
              width: 42, height: 42, borderRadius: 11, flexShrink: 0,
              background: "rgba(212,175,55,0.08)", border: "0.5px solid rgba(212,175,55,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17,
            }}>✉</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 15, color: "#fff", fontFamily: "'Georgia', serif", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                mnmmusharraf@gmail.com
              </div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.32)", letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'Georgia', serif", marginTop: 3 }}>Email</div>
            </div>
            <span style={{ color: "#d4af6a", fontSize: 18, flexShrink: 0 }}>↗</span>
          </a>

          {/* Phone */}
          <a href="tel:+94765235249" style={{
            display: "flex", alignItems: "center", gap: 16,
            padding: "18px 20px", ...glass, textDecoration: "none",
            transition: "background 0.2s, border-color 0.2s",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
          >
            <div style={{ width: 42, height: 42, borderRadius: 11, flexShrink: 0, background: "rgba(255,255,255,0.07)", border: "0.5px solid rgba(255,255,255,0.13)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>📞</div>
            <div>
              <div style={{ fontSize: 15, color: "#fff", fontFamily: "'Georgia', serif" }}>+94 76 523 5249</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.32)", letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'Georgia', serif", marginTop: 3 }}>Phone</div>
            </div>
          </a>

          {/* Location */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 20px", ...glass }}>
            <div style={{ width: 42, height: 42, borderRadius: 11, flexShrink: 0, background: "rgba(255,255,255,0.07)", border: "0.5px solid rgba(255,255,255,0.13)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>📍</div>
            <div>
              <div style={{ fontSize: 15, color: "#fff", fontFamily: "'Georgia', serif" }}>Colombo, Sri Lanka</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.32)", letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'Georgia', serif", marginTop: 3 }}>Available Worldwide</div>
            </div>
          </div>
        </div>

        <div className="contact-socials">
          {[
            { label: "GitHub",   href: "https://github.com/mnmmusharraf",   icon: "⌥"  },
            { label: "LinkedIn", href: "https://linkedin.com/in/mnmmusharraf", icon: "in" },
          ].map(({ label, href, icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "14px 22px", ...glass, textDecoration: "none", flex: 1, minWidth: 140,
              transition: "background 0.2s, border-color 0.2s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(212,175,55,0.07)"; e.currentTarget.style.borderColor = "rgba(212,175,55,0.3)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
            >
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>{icon}</span>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", fontFamily: "'Georgia', serif" }}>{label}</span>
              <span style={{ marginLeft: "auto", color: "#d4af6a", fontSize: 14 }}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}