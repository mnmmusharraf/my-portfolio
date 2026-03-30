const projects = [
  {
    index: "01",
    title: "GEM STORE",
    subtitle: "Social Gemstone Marketplace",
    description:
      "Full-stack social commerce marketplace for Sri Lankan gemstone trading. JWT + Google OAuth2 auth, real-time in-platform messaging and notifications via WebSocket (STOMP/SockJS), follow system, listings, likes, favourites, and admin moderation panel. Integrated XGBoost ML pricing engine (103 engineered features) achieving 85.83% R² accuracy — outperforming commercial tools at 70–75%. Load tested to 500 concurrent users at 380ms avg response.",
    metrics: [
      { label: "R² Accuracy",      value: "85.83%" },
      { label: "Median Error",     value: "9.38%"  },
      { label: "Tests Passing",    value: "340+"   },
      { label: "Concurrent Users", value: "500"    },
    ],
    tags: ["React.js", "Spring Boot", "FastAPI", "XGBoost", "PostgreSQL", "WebSocket", "JWT", "OAuth2", "Docker", "Kafka"],
    year: "2025",
    links: [
      { label: "API",   href: "https://github.com/mnmmusharraf/gemstore-api"      },
      { label: "Web",   href: "https://github.com/mnmmusharraf/gemstore-web"      },
      { label: "Admin", href: "https://github.com/mnmmusharraf/gemstore-admin"    },
      { label: "ML",    href: "https://github.com/mnmmusharraf/gemstore-ml-service" },
    ],
    featured: true,
  },
  {
    index: "02",
    title: "Heart Disease Prediction",
    subtitle: "Kaggle Playground Series S6E2",
    description:
      "End-to-end ML pipeline classifying heart disease across 630,000 patient records using 14 clinical features. Engineered Age groups, Cholesterol categories, and interaction terms (Age×BP, Age×Chol, BP×Chol). XGBoost achieved 0.9551 ROC-AUC; weighted ensemble with HistGradientBoosting (45/55 split) reached 0.9552.",
    metrics: [
      { label: "ROC-AUC",      value: "0.9551"     },
      { label: "Dataset",      value: "630K"        },
      { label: "Features",     value: "14 clinical" },
      { label: "Ensemble AUC", value: "0.9552"      },
    ],
    tags: ["Python", "XGBoost", "Scikit-learn", "Pandas", "NumPy", "Feature Engineering"],
    year: "2026",
    links: [{ label: "GitHub", href: "https://github.com/mnmmusharraf/heart-disease-prediction" }],
    featured: false,
  },
  {
    index: "03",
    title: "Admin-Staff-Billing System",
    subtitle: "Enterprise Web Application",
    description:
      "Distributed enterprise platform split across four repositories — backend API, billing system backend, admin UI, and billing UI. Secure role-based access control, comprehensive RESTful APIs with error handling, CI/CD via GitHub Actions, TDD with JUnit, MVC + DAO + Singleton patterns, UML documentation, deployed on GlassFish.",
    metrics: [],
    tags: ["Java EE", "Servlets", "JSP", "MySQL", "JUnit", "GitHub Actions", "MVC", "DAO", "CI/CD"],
    year: "2024",
    links: [
      { label: "Admin System", href: "https://github.com/mnmmusharraf/AdminStaffSystem"   },
      { label: "Admin UI",     href: "https://github.com/mnmmusharraf/AdminSystemUi"      },
      { label: "Billing API",  href: "https://github.com/mnmmusharraf/BillingSystemBackend" },
      { label: "Billing UI",   href: "https://github.com/mnmmusharraf/BillingSystemUi"    },
    ],
    featured: false,
  },
  {
    index: "04",
    title: "Automated Procurement System",
    subtitle: "C# Service-Oriented Architecture",
    description:
      "Web-based procurement workflow system built in C# with Service-Oriented Architecture (SOA) for modular, scalable design. Database-driven approval workflows and reporting, streamlining end-to-end procurement processes.",
    metrics: [],
    tags: ["C#", ".NET", "SOA", "MySQL", "Workflow Automation"],
    year: "2023",
    links: [{ label: "GitHub", href: "https://github.com/mnmmusharraf/Csharp-SOC-Project" }],
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ background: "#000", padding: "110px 24px", borderBottom: "0.5px solid rgba(255,255,255,0.08)" }}>
      <style>{`
        .proj-wrap { max-width: 1100px; margin: 0 auto; }
        @media (min-width: 768px) { .proj-wrap { padding: 0 40px; } }
      `}</style>

      <div className="proj-wrap">
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 72 }}>
          <span style={{ fontSize: 11, letterSpacing: 5, textTransform: "uppercase", color: "#d4af6a", fontFamily: "'Georgia', serif", whiteSpace: "nowrap" }}>
            04 — Work
          </span>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.08)" }} />
        </div>

        <h2 style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: "clamp(32px, 4vw, 58px)",
          fontWeight: 400, color: "#fff", letterSpacing: -1.5, margin: "0 0 52px",
        }}>
          Selected Projects
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {projects.map((project, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(24px) saturate(160%)",
              WebkitBackdropFilter: "blur(24px) saturate(160%)",
              border: project.featured ? "0.5px solid rgba(212,175,55,0.25)" : "0.5px solid rgba(255,255,255,0.09)",
              borderRadius: 24, padding: "30px 28px",
              transition: "background 0.25s, border-color 0.25s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.borderColor = "rgba(212,175,55,0.3)"; }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = project.featured ? "rgba(212,175,55,0.25)" : "rgba(255,255,255,0.09)";
              }}
            >
              {/* Header */}
              <div style={{ marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 11, flexWrap: "wrap", marginBottom: 6 }}>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.22)", fontFamily: "'Georgia', serif", letterSpacing: 2 }}>{project.index}</span>
                  <h3 style={{ fontFamily: "'Georgia', serif", fontSize: 21, fontWeight: 400, color: "#fff", margin: 0, letterSpacing: -0.5 }}>{project.title}</h3>
                  {project.featured && (
                    <span style={{
                      fontSize: 10, letterSpacing: 2, textTransform: "uppercase",
                      color: "#d4af6a", background: "rgba(212,175,55,0.1)",
                      border: "0.5px solid rgba(212,175,55,0.3)",
                      padding: "4px 12px", borderRadius: 50, fontFamily: "'Georgia', serif",
                    }}>Featured</span>
                  )}
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontFamily: "'Georgia', serif" }}>{project.subtitle} · {project.year}</div>
              </div>

              {/* Repo links */}
              <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 18 }}>
                {project.links.map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" style={{
                    fontSize: 12, letterSpacing: 0.5,
                    color: "rgba(255,255,255,0.55)", textDecoration: "none",
                    fontFamily: "'Georgia', serif", padding: "5px 14px",
                    background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.12)",
                    borderRadius: 50, display: "inline-block", transition: "background 0.2s, color 0.2s",
                  }}
                    onMouseEnter={(e) => { e.target.style.color = "#d4af6a"; e.target.style.borderColor = "rgba(212,175,55,0.4)"; e.target.style.background = "rgba(212,175,55,0.08)"; }}
                    onMouseLeave={(e) => { e.target.style.color = "rgba(255,255,255,0.55)"; e.target.style.borderColor = "rgba(255,255,255,0.12)"; e.target.style.background = "rgba(255,255,255,0.06)"; }}
                  >{label} ↗</a>
                ))}
              </div>

              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.58)", lineHeight: 1.9, fontFamily: "'Georgia', serif", margin: "0 0 22px" }}>
                {project.description}
              </p>

              {/* Metrics — gold numbers */}
              {project.metrics.length > 0 && (
                <div style={{ display: "flex", gap: 9, marginBottom: 20, flexWrap: "wrap" }}>
                  {project.metrics.map(({ label, value }) => (
                    <div key={label} style={{
                      padding: "12px 18px",
                      background: "rgba(212,175,55,0.06)",
                      border: "0.5px solid rgba(212,175,55,0.2)",
                      borderRadius: 13,
                    }}>
                      <div style={{ fontFamily: "'Georgia', serif", fontSize: 20, color: "#d4af6a", letterSpacing: -0.5 }}>{value}</div>
                      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'Georgia', serif", marginTop: 3 }}>{label}</div>
                    </div>
                  ))}
                </div>
              )}

              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {project.tags.map((t) => (
                  <span key={t} style={{
                    fontSize: 11, padding: "5px 13px",
                    background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.09)",
                    color: "rgba(255,255,255,0.42)", letterSpacing: 1, textTransform: "uppercase",
                    fontFamily: "'Georgia', serif", borderRadius: 50,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}