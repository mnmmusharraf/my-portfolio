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
    <section id="experience" style={{
      background: "#000",
      padding: "100px 24px",
      borderBottom: "0.5px solid rgba(255,255,255,0.08)",
    }}>
      <style>{`
        .exp-wrap { max-width: 1100px; margin: 0 auto; }
        @media (min-width: 768px) { .exp-wrap { padding: 0 32px; } }
      `}</style>

      <div className="exp-wrap">
        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 64 }}>
          <span style={{ fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: "rgba(255,255,255,0.25)", fontFamily: "'Georgia', serif", whiteSpace: "nowrap" }}>
            03 — Experience
          </span>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.08)" }} />
        </div>

        <h2 style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: "clamp(30px, 4vw, 48px)",
          fontWeight: 400, color: "#fff", letterSpacing: -1.5, margin: "0 0 48px",
        }}>
          Work &amp; Contributions
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {experience.map((exp, i) => (
            <div
              key={i}
              style={{
                ...glass, borderRadius: 22, padding: "32px 28px",
                transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              }}
            >
              {/* Header row */}
              <div style={{
                display: "flex", justifyContent: "space-between",
                flexWrap: "wrap", gap: 12, marginBottom: 24,
              }}>
                <div>
                  <h3 style={{
                    fontFamily: "'Georgia', serif", fontSize: 20,
                    fontWeight: 400, color: "#fff", margin: "0 0 5px", letterSpacing: -0.3,
                  }}>{exp.role}</h3>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontFamily: "'Georgia', serif" }}>
                    {exp.company} · {exp.period}
                  </div>
                </div>
                <span style={{
                  fontSize: 10, letterSpacing: 2, textTransform: "uppercase",
                  color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.07)",
                  border: "0.5px solid rgba(255,255,255,0.14)", borderRadius: 50,
                  padding: "5px 14px", fontFamily: "'Georgia', serif", alignSelf: "flex-start",
                }}>{exp.type}</span>
              </div>

              {/* Bullet points */}
              <div style={{ marginBottom: 22 }}>
                {exp.bullets.map((b) => (
                  <div key={b} style={{ display: "flex", gap: 14, marginBottom: 12, alignItems: "flex-start" }}>
                    <span style={{
                      color: "rgba(255,255,255,0.18)", fontSize: 16,
                      lineHeight: "1.7", flexShrink: 0, fontFamily: "'Georgia', serif",
                    }}>—</span>
                    <span style={{
                      fontSize: 14, color: "rgba(255,255,255,0.55)",
                      fontFamily: "'Georgia', serif", lineHeight: 1.7,
                    }}>{b}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {exp.tags.map(t => (
                  <span key={t} style={{
                    padding: "5px 13px", fontSize: 11,
                    background: "rgba(255,255,255,0.05)",
                    border: "0.5px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: 1, textTransform: "uppercase",
                    fontFamily: "'Georgia', serif", borderRadius: 50,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* "Looking for internship" CTA strip */}
        <div style={{
          marginTop: 16,
          ...glass, borderRadius: 20, padding: "22px 28px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 16,
        }}>
          <div>
            <div style={{ fontSize: 14, color: "#fff", fontFamily: "'Georgia', serif", marginBottom: 4 }}>
              Seeking internship or junior developer opportunities
            </div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontFamily: "'Georgia', serif" }}>
              Full-time · Internship · Remote · Relocatable
            </div>
          </div>
          <a href="#contact" style={{
            padding: "11px 24px",
            background: "rgba(255,255,255,0.9)", color: "#000",
            borderRadius: 12, textDecoration: "none",
            fontSize: 12, letterSpacing: 0.5, fontFamily: "'Georgia', serif", fontWeight: 600,
            flexShrink: 0,
          }}>Get in Touch</a>
        </div>
      </div>
    </section>
  );
}