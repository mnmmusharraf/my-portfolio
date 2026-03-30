const skillGroups = [
  { label: "Languages", skills: ["Java", "JavaScript", "Python", "C#", "C++", "PHP", "SQL"] },
  { label: "Frontend", skills: ["React.js", "Bootstrap", "CSS3", "Responsive Design", "Figma"] },
  { label: "Backend", skills: ["Spring Boot", "Java EE", "RESTful APIs", ".NET", "FastAPI", "Node.js"] },
  { label: "Data & ML", skills: ["XGBoost", "Scikit-learn", "Pandas", "NumPy", "Feature Engineering"] },
  { label: "Database", skills: ["PostgreSQL", "MySQL", "JDBC", "MongoDB"] },
  { label: "DevOps & Tools", skills: ["Git", "GitHub Actions", "Docker", "JUnit", "Jasmine", "TDD", "Agile"] },
];

const languages = [
  { lang: "English", level: "Fluent" },
  { lang: "Tamil", level: "Native" },
  { lang: "Sinhala", level: "Conversational" },
  { lang: "Arabic", level: "Conversational" },
];

const glass = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(24px) saturate(160%)",
  WebkitBackdropFilter: "blur(24px) saturate(160%)",
  border: "0.5px solid rgba(255,255,255,0.1)",
};

export default function About() {
  return (
    <section id="about" style={{ background: "#000", padding: "110px 24px", borderBottom: "0.5px solid rgba(255,255,255,0.08)" }}>
      <style>{`
        .about-wrap { max-width: 1100px; margin: 0 auto; }
        .about-grid { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: start; }
        @media (min-width: 768px) {
          .about-wrap { padding: 0 40px; }
          .about-grid { grid-template-columns: 1fr 1fr; gap: 56px; }
        }
      `}</style>

      <div className="about-wrap">
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 72 }}>
          <span style={{ fontSize: 11, letterSpacing: 5, textTransform: "uppercase", color: "#d4af6a", fontFamily: "'Georgia', serif", whiteSpace: "nowrap" }}>
            01 — About
          </span>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.08)" }} />
        </div>

        <div className="about-grid">
          {/* LEFT */}
          <div>
            <h2 style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "clamp(34px, 4vw, 54px)",
              fontWeight: 400, color: "#fff",
              letterSpacing: -1.5, lineHeight: 1.1, margin: "0 0 32px",
            }}>
              Building things<br />
              <span style={{ color: "rgba(255,255,255,0.32)", fontStyle: "italic" }}>that matter.</span>
            </h2>

            <div style={{ ...glass, padding: "26px 28px", marginBottom: 24, borderRadius: 20 }}>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.95, fontFamily: "'Georgia', serif", marginBottom: 14 }}>
                Enthusiastic software engineering undergraduate with hands-on experience in full-stack web development, enterprise applications, and open-source contributions.
              </p>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.95, fontFamily: "'Georgia', serif", margin: 0 }}>
                Proficient in Java, Spring Boot, React, and Python with strong foundations in CI/CD, TDD, and microservices architecture. Seeking a Software Engineering Intern or Junior Developer role.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {skillGroups.map(({ label, skills }) => (
                <div key={label} style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.09)", borderRadius: 16, padding: "16px 20px" }}>
                  <p style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontFamily: "'Georgia', serif", marginBottom: 11 }}>{label}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    {skills.map((s) => (
                      <span key={s} style={{
                        padding: "6px 14px", background: "rgba(255,255,255,0.06)",
                        border: "0.5px solid rgba(255,255,255,0.11)",
                        borderRadius: 50, fontSize: 13, color: "rgba(255,255,255,0.65)",
                        fontFamily: "'Georgia', serif",
                      }}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ ...glass, borderRadius: 20, overflow: "hidden" }}>
              <div style={{ padding: "16px 22px", borderBottom: "0.5px solid rgba(255,255,255,0.07)" }}>
                <p style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontFamily: "'Georgia', serif", margin: 0 }}>Languages</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                {languages.map(({ lang, level }, i) => (
                  <div key={lang} style={{
                    padding: "18px 22px",
                    borderRight: i % 2 === 0 ? "0.5px solid rgba(255,255,255,0.06)" : "none",
                    borderBottom: i < 2 ? "0.5px solid rgba(255,255,255,0.06)" : "none",
                  }}>
                    <div style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", fontFamily: "'Georgia', serif", marginBottom: 4 }}>{lang}</div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'Georgia', serif" }}>{level}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ ...glass, borderRadius: 20, padding: "26px 24px" }}>
              <p style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontFamily: "'Georgia', serif", marginBottom: 18 }}>Profile</p>
              {[
                { icon: "⚡", text: "Strong communicator across multilingual teams" },
                { icon: "🔭", text: "Passionate about ML, distributed systems & clean code" },
                { icon: "🌏", text: "Open to remote and international relocation" },
                { icon: "🤝", text: "Collaborative contributor to open-source communities" },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: "flex", gap: 13, alignItems: "flex-start", marginBottom: 16 }}>
                  <span style={{ fontSize: 15, flexShrink: 0, marginTop: 1 }}>{icon}</span>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", fontFamily: "'Georgia', serif", lineHeight: 1.65 }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Availability card — gold accent */}
            <div style={{
              ...glass, borderRadius: 20, padding: "22px 24px",
              display: "flex", alignItems: "center", gap: 18,
              border: "0.5px solid rgba(212,175,55,0.2)",
              background: "rgba(212,175,55,0.04)",
            }}>
              <div style={{
                width: 46, height: 46, borderRadius: 13, flexShrink: 0,
                background: "rgba(74,222,128,0.07)",
                border: "0.5px solid rgba(74,222,128,0.22)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 10px #4ade80", display: "block" }} />
              </div>
              <div>
                <div style={{ fontSize: 15, color: "#fff", fontFamily: "'Georgia', serif", marginBottom: 4 }}>Open to opportunities</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'Georgia', serif" }}>Internship · Junior Developer · Remote</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}