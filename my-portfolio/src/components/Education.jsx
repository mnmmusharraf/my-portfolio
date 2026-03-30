const education = [
  {
    icon: "🎓",
    degree: "BSc (Hons) Software Engineering",
    institution: "Cardiff Metropolitan University",
    via: "via ICBT Campus, Colombo",
    period: "Expected Mar 2026",
    grade: "Final Year",
    highlights: [
      "Full-stack development & enterprise systems",
      "Machine learning & data science modules",
      "Software architecture & design patterns",
    ],
  },
  {
    icon: "📜",
    degree: "Higher Diploma in Software Engineering",
    institution: "Cardiff Metropolitan University",
    via: "via ICBT Campus, Colombo",
    period: "2023",
    grade: "Distinction",
    highlights: [
      "Enterprise Java applications",
      "Database systems & SQL",
      "Agile methodologies & TDD",
    ],
  },
  {
    icon: "📋",
    degree: "GCE Advanced Level",
    institution: "D.S. Senanayake College",
    via: "",
    period: "2022",
    grade: "2 A's · 1 B",
    highlights: [
      "Problem Solving",
      "Creativity",
      "Logical thinking",
    ],
  },
];

const glass = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(24px) saturate(160%)",
  WebkitBackdropFilter: "blur(24px) saturate(160%)",
  border: "0.5px solid rgba(255,255,255,0.1)",
};

export default function Education() {
  return (
    <section id="education" style={{
      background: "#000",
      padding: "100px 24px",
      borderBottom: "0.5px solid rgba(255,255,255,0.08)",
    }}>
      <style>{`
        .edu-wrap { max-width: 1100px; margin: 0 auto; }
        .edu-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 768px) {
          .edu-wrap { padding: 0 32px; }
          .edu-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      <div className="edu-wrap">
        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 64 }}>
          <span style={{ fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: "rgba(255,255,255,0.25)", fontFamily: "'Georgia', serif", whiteSpace: "nowrap" }}>
            02 — Education
          </span>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.08)" }} />
        </div>

        <h2 style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: "clamp(30px, 4vw, 48px)",
          fontWeight: 400, color: "#fff", letterSpacing: -1.5, margin: "0 0 48px",
        }}>
          Academic Background
        </h2>

        <div className="edu-grid">
          {education.map((ed) => (
            <div
              key={ed.degree}
              style={{
                ...glass, borderRadius: 22, overflow: "hidden",
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
              {/* Card header */}
              <div style={{ padding: "24px 24px 18px", borderBottom: "0.5px solid rgba(255,255,255,0.07)" }}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 16 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: "rgba(255,255,255,0.07)",
                    border: "0.5px solid rgba(255,255,255,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
                  }}>{ed.icon}</div>
                  <div>
                    <div style={{ fontSize: 14, color: "#fff", fontFamily: "'Georgia', serif", lineHeight: 1.4, marginBottom: 4 }}>{ed.degree}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: "'Georgia', serif" }}>{ed.institution}</div>
                    {ed.via && <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontFamily: "'Georgia', serif" }}>{ed.via}</div>}
                  </div>
                </div>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                  <span style={{
                    fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase",
                    color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.1)",
                    border: "0.5px solid rgba(255,255,255,0.18)", borderRadius: 50,
                    padding: "4px 12px", fontFamily: "'Georgia', serif",
                  }}>{ed.grade}</span>
                  <span style={{
                    fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase",
                    color: "rgba(255,255,255,0.3)", fontFamily: "'Georgia', serif",
                  }}>{ed.period}</span>
                </div>
              </div>

              {/* Highlights */}
              <div style={{ padding: "18px 24px" }}>
                {ed.highlights.map((h) => (
                  <div key={h} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.2)", flexShrink: 0 }} />
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", fontFamily: "'Georgia', serif", lineHeight: 1.5 }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications / extra row */}
        <div style={{
          marginTop: 16, ...glass, borderRadius: 20, padding: "24px",
          display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center",
        }}>
          <div>
            <p style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.25)", fontFamily: "'Georgia', serif", marginBottom: 8 }}>Currently Studying</p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", fontFamily: "'Georgia', serif", margin: 0 }}>
              Final Year Project — Full-Stack ML Marketplace · Dissertation in progress
            </p>
          </div>
          <div style={{ height: 40, width: "0.5px", background: "rgba(255,255,255,0.08)", flexShrink: 0 }} />
          <div>
            <p style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.25)", fontFamily: "'Georgia', serif", marginBottom: 8 }}>Interests</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Distributed Systems", "MLOps", "Open Source", "System Design"].map(t => (
                <span key={t} style={{
                  padding: "4px 12px", fontSize: 11,
                  background: "rgba(255,255,255,0.06)",
                  border: "0.5px solid rgba(255,255,255,0.1)",
                  borderRadius: 50, color: "rgba(255,255,255,0.45)",
                  fontFamily: "'Georgia', serif",
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}