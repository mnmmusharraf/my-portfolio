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
      "Problem solving & logical thinking",
      "Creativity under exam conditions",
      "Foundation for engineering thinking",
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
    <section id="education" style={{ background: "#000", padding: "110px 24px", borderBottom: "0.5px solid rgba(255,255,255,0.08)" }}>
      <style>{`
        .edu-wrap { max-width: 1100px; margin: 0 auto; }
        .edu-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 768px) {
          .edu-wrap { padding: 0 40px; }
          .edu-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      <div className="edu-wrap">
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 72 }}>
          <span style={{ fontSize: 11, letterSpacing: 5, textTransform: "uppercase", color: "#d4af6a", fontFamily: "'Georgia', serif", whiteSpace: "nowrap" }}>
            02 — Education
          </span>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.08)" }} />
        </div>

        <h2 style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: "clamp(32px, 4vw, 52px)",
          fontWeight: 400, color: "#fff", letterSpacing: -1.5, margin: "0 0 52px",
        }}>
          Academic Background
        </h2>

        <div className="edu-grid">
          {education.map((ed) => (
            <div key={ed.degree} style={{
              ...glass, borderRadius: 22, overflow: "hidden",
              transition: "background 0.2s, border-color 0.2s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(212,175,55,0.25)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
            >
              <div style={{ padding: "26px 26px 20px", borderBottom: "0.5px solid rgba(255,255,255,0.07)" }}>
                <div style={{ display: "flex", gap: 15, alignItems: "flex-start", marginBottom: 18 }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: 13, flexShrink: 0,
                    background: "rgba(212,175,55,0.08)", border: "0.5px solid rgba(212,175,55,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
                  }}>{ed.icon}</div>
                  <div>
                    <div style={{ fontSize: 14, color: "#fff", fontFamily: "'Georgia', serif", lineHeight: 1.45, marginBottom: 5 }}>{ed.degree}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", fontFamily: "'Georgia', serif" }}>{ed.institution}</div>
                    {ed.via && <div style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", fontFamily: "'Georgia', serif" }}>{ed.via}</div>}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                  {/* Gold grade badge */}
                  <span style={{
                    fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase",
                    color: "#d4af6a", background: "rgba(212,175,55,0.1)",
                    border: "0.5px solid rgba(212,175,55,0.3)", borderRadius: 50,
                    padding: "5px 13px", fontFamily: "'Georgia', serif",
                  }}>{ed.grade}</span>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "'Georgia', serif", letterSpacing: 0.5 }}>{ed.period}</span>
                </div>
              </div>
              <div style={{ padding: "20px 26px" }}>
                {ed.highlights.map((h) => (
                  <div key={h} style={{ display: "flex", gap: 11, alignItems: "flex-start", marginBottom: 11 }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(212,175,55,0.5)", flexShrink: 0, marginTop: 6 }} />
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", fontFamily: "'Georgia', serif", lineHeight: 1.6 }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extra info strip */}
        <div style={{
          marginTop: 16, ...glass, borderRadius: 20, padding: "26px 28px",
          display: "flex", flexWrap: "wrap", gap: 28, alignItems: "center",
        }}>
          <div>
            <p style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#d4af6a", fontFamily: "'Georgia', serif", marginBottom: 9 }}>Currently Studying</p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", fontFamily: "'Georgia', serif", margin: 0, lineHeight: 1.5 }}>
              Final Year Project — Full-Stack ML Marketplace · Dissertation in progress
            </p>
          </div>
          <div style={{ height: 40, width: "0.5px", background: "rgba(255,255,255,0.08)", flexShrink: 0 }} />
          <div>
            <p style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#d4af6a", fontFamily: "'Georgia', serif", marginBottom: 9 }}>Interests</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Distributed Systems", "MLOps", "Open Source", "System Design"].map(t => (
                <span key={t} style={{
                  padding: "5px 14px", fontSize: 12,
                  background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.1)",
                  borderRadius: 50, color: "rgba(255,255,255,0.55)", fontFamily: "'Georgia', serif",
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}