const experience = [
  {
    role: "Full-Stack Developer",
    company: "Freelance · Independent",
    period: "2023 – Present",
    type: "Freelance",
    bullets: [
      "Built and deployed a Shopify-based e-commerce platform for Royal Gems Exporters, enabling international gemstone sales and secure online transactions.",
      "Customised Shopify themes and implemented product management workflows tailored to the jewellery industry.",
      "Optimised performance and SEO, improving page load speed and search visibility.",
      "Handled end-to-end delivery: requirements gathering, UI/UX design in Figma, development, and deployment.",
    ],
    tags: ["Shopify", "Figma", "E-commerce", "SEO", "UI/UX"],
  },
  {
    role: "Open Source Contributor",
    company: "Various Projects · GitHub",
    period: "2024 – Present",
    type: "Open Source",
    bullets: [
      "Contributed documentation improvements and code reviews across multiple open-source repositories.",
      "Participated in Hacktoberfest, collaborating asynchronously with distributed global engineering teams.",
      "Practised trunk-based development, PR review workflows, and semantic versioning standards.",
      "Improved test coverage and resolved issues in Python and JavaScript codebases.",
    ],
    tags: ["Git", "GitHub Actions", "Python", "JavaScript", "Documentation"],
  },
];

const glass = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(24px) saturate(160%)",
  WebkitBackdropFilter: "blur(24px) saturate(160%)",
  border: "0.5px solid rgba(255,255,255,0.1)",
};

export default function Experience() {
  return (
    <section id="experience" style={{ background: "#000", padding: "110px 24px", borderBottom: "0.5px solid rgba(255,255,255,0.08)" }}>
      <style>{`
        .exp-wrap { max-width: 1100px; margin: 0 auto; }
        @media (min-width: 768px) { .exp-wrap { padding: 0 40px; } }
      `}</style>

      <div className="exp-wrap">
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 72 }}>
          <span style={{ fontSize: 11, letterSpacing: 5, textTransform: "uppercase", color: "#d4af6a", fontFamily: "'Georgia', serif", whiteSpace: "nowrap" }}>
            03 — Experience
          </span>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.08)" }} />
        </div>

        <h2 style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: "clamp(32px, 4vw, 52px)",
          fontWeight: 400, color: "#fff", letterSpacing: -1.5, margin: "0 0 52px",
        }}>
          Work &amp; Contributions
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {experience.map((exp, i) => (
            <div key={i} style={{
              ...glass, borderRadius: 22, padding: "34px 30px",
              transition: "background 0.2s, border-color 0.2s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.borderColor = "rgba(212,175,55,0.2)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 26 }}>
                <div>
                  <h3 style={{ fontFamily: "'Georgia', serif", fontSize: 21, fontWeight: 400, color: "#fff", margin: "0 0 6px", letterSpacing: -0.3 }}>{exp.role}</h3>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontFamily: "'Georgia', serif" }}>{exp.company} · {exp.period}</div>
                </div>
                {/* Gold type badge */}
                <span style={{
                  fontSize: 10, letterSpacing: 2, textTransform: "uppercase",
                  color: "#d4af6a", background: "rgba(212,175,55,0.09)",
                  border: "0.5px solid rgba(212,175,55,0.25)", borderRadius: 50,
                  padding: "6px 16px", fontFamily: "'Georgia', serif", alignSelf: "flex-start",
                }}>{exp.type}</span>
              </div>

              <div style={{ marginBottom: 24 }}>
                {exp.bullets.map((b) => (
                  <div key={b} style={{ display: "flex", gap: 14, marginBottom: 13, alignItems: "flex-start" }}>
                    <span style={{ color: "rgba(212,175,55,0.5)", fontSize: 14, lineHeight: "1.75", flexShrink: 0, fontFamily: "'Georgia', serif" }}>—</span>
                    <span style={{ fontSize: 15, color: "rgba(255,255,255,0.62)", fontFamily: "'Georgia', serif", lineHeight: 1.75 }}>{b}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {exp.tags.map(t => (
                  <span key={t} style={{
                    padding: "5px 14px", fontSize: 11,
                    background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.45)", letterSpacing: 1, textTransform: "uppercase",
                    fontFamily: "'Georgia', serif", borderRadius: 50,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div style={{
          marginTop: 16, ...glass, borderRadius: 20, padding: "24px 30px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 16,
          border: "0.5px solid rgba(212,175,55,0.15)",
        }}>
          <div>
            <div style={{ fontSize: 16, color: "#fff", fontFamily: "'Georgia', serif", marginBottom: 5 }}>
              Seeking internship or junior developer opportunities
            </div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", fontFamily: "'Georgia', serif" }}>
              Full-time · Internship · Remote · Relocatable
            </div>
          </div>
          <a href="#contact" style={{
            padding: "12px 26px",
            background: "rgba(212,175,55,0.15)", color: "#d4af6a",
            border: "0.5px solid rgba(212,175,55,0.35)",
            borderRadius: 12, textDecoration: "none",
            fontSize: 13, letterSpacing: 0.5, fontFamily: "'Georgia', serif", fontWeight: 600,
            flexShrink: 0, transition: "background 0.2s",
          }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(212,175,55,0.25)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(212,175,55,0.15)"}
          >Get in Touch →</a>
        </div>
      </div>
    </section>
  );
}