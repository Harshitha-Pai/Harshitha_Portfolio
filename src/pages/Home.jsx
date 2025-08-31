import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.jsx";
import me from "../assets/me1.jpg";

// Import certification PDFs
import GoogleAI from "../assets/google.pdf";
import DSA from "../assets/gfg.pdf";
import MongoDB from "../assets/mongodb.pdf";
import WebDev from "../assets/udemy.jpg";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="hero reveal"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "4rem",
          backgroundColor: "#8e5839ff",
          color: "#fff",
        }}
      >
        {/* Left photo */}
        <div
          className="hero-photo"
          style={{ flex: "1", display: "flex", justifyContent: "center" }}
        >
          <img
            src={me}
            alt="Harshitha Pai"
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "0.5rem",
            }}
          />
        </div>

        {/* Right text */}
        <div className="hero-text" style={{ flex: "1", paddingLeft: "3rem" }}>
          <h1
            style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}
          >
            Hi, I am Harshitha
          </h1>
          <p style={{ fontSize: "1rem", marginBottom: "2rem", color: "#ccc" }}>
            I am a Designer-Developer crafting clean, usable interfaces. I blend{" "}
            <strong>UI/UX</strong> thinking with solid engineering to build
            reliable, human-centered products.
          </p>
          <div className="cta-row" style={{ display: "flex", gap: "1rem" }}>
            <a
              href="#projects"
              className="btn primary"
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "0.5rem",
                fontWeight: "bold",
              }}
            >
              Explore Now
            </a>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
<section id="education" className="section reveal">
  <div className="section-head">
    <h2>EDUCATION</h2>
  </div>
  <div
    style={{
      display: "grid",
      gap: "1.5rem",
      marginTop: "1.5rem",
    }}
  >
    {[
      {
        title: "Bachelor of Engineering",
        subtitle: "Computer Science and Design",
        details:
          "Canara Engineering College | 2022 - Pursuing | Mangalore",
        extra: "CGPA: 8.7",
      },
      {
        title: "Pre-University",
        subtitle: "PCMB",
        details: "MGM P.U College | 2020 - 2022 | Udupi",
        extra: "Percentage: 78%",
      },
    ].map((edu, idx) => (
      <div
        key={idx}
        style={{
          border: "1px solid #eee",
          borderLeft: "6px solid #8e5839ff",
          padding: "1.5rem",
          borderRadius: "0.75rem",
          boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.transform = "scale(1.02)")
        }
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <h3 style={{ marginBottom: "0.25rem" }}>
          {edu.title},{" "}
          <span style={{ fontStyle: "italic", color: "#555" }}>
            {edu.subtitle}
          </span>
        </h3>
        <p style={{ color: "#666", marginBottom: "0.25rem" }}>
          {edu.details}
        </p>
        <p style={{ fontWeight: "bold", color: "#333" }}>{edu.extra}</p>
      </div>
    ))}
  </div>
</section>

{/* CERTIFICATIONS */}
<section id="certifications" className="section reveal">
  <div className="section-head">
    <h2>CERTIFICATIONS</h2>
  </div>
  <div
    style={{
      display: "grid",
      gap: "1.5rem",
      marginTop: "1.5rem",
    }}
  >
    {[
      {
        title: "Google AI Essentials",
        link: GoogleAI,
        desc: "Certified with skills in using generative AI for content creation, decision-making, and task automation.",
      },
      {
        title: "Data Structures",
        link: DSA,
        desc: "Completed a 22-week intensive course focused on DSA practice, algorithmic problem solving, and workshops conducted by industry professionals.",
      },
      {
        title: "MongoDB",
        link: MongoDB,
        desc: "Completed an 18-hour online course covering MongoDB fundamentals, CRUD operations, aggregation, indexing, and performance optimization.",
      },
      {
        title: "HTML, CSS, JavaScript, React",
        link: WebDev,
        desc: "Completed a web development course covering responsive layouts, dynamic web apps, and interactive UI components.",
      },
    ].map((cert, idx) => (
      <div
        key={idx}
        style={{
          border: "1px solid #eee",
          borderLeft: "6px solid #8e5839ff",
          padding: "1.5rem",
          borderRadius: "0.75rem",
          boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.transform = "scale(1.02)")
        }
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "#8e5839ff",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          {cert.title}
        </a>
        <p style={{ color: "#666", marginTop: "0.5rem" }}>{cert.desc}</p>
      </div>
    ))}
  </div>
</section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-head reveal">
          <h2>MY PROJECTS</h2>
          <p className="muted">A few projects I am proud of.</p>
        </div>
        <div className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section reveal">
        <div className="contact-card">
          <h2>Let’s Build Something</h2>
          <p className="muted">
            Open to internships, freelance and collaborations.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="mailto:harshithapaimaipal@gmail.com">
              Email Me
            </a>
            <a
              className="btn ghost"
              href="https://github.com/Harshitha-Pai"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="btn ghost"
              href="https://www.linkedin.com/in/harshitha-a-pai-032004may/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a href="/resume.pdf" download="resume.pdf" className="btn ghost">
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
