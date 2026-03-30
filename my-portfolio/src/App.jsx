import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <footer style={{
        background: "#000",
        borderTop: "0.5px solid rgba(255,255,255,0.06)",
        padding: "20px 28px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 8,
      }}>
        <span style={{
          fontFamily: "'Georgia', serif",
          fontSize: 11,
          color: "rgba(255,255,255,0.18)",
          letterSpacing: 2,
          textTransform: "uppercase",
        }}>
          © 2026 Muhammad Musharraf
        </span>
        <span style={{
          fontFamily: "'Georgia', serif",
          fontSize: 11,
          color: "rgba(255,255,255,0.18)",
          letterSpacing: 2,
          textTransform: "uppercase",
        }}>
          Sri Lanka
        </span>
      </footer>
    </div>
  );
}