import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.jsx";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero reveal">
        <div className="hero-inner">
          <h1>
            Designer-Developer crafting clean, usable interfaces.
          </h1>
          <p className="lead">
            I blend <strong>UI/UX</strong> thinking with solid engineering to build
            reliable, human-centered products.
          </p>
          <div className="cta-row">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn ghost">Contact</a>
          </div>
        </div>
        <div className="hero-accent" aria-hidden="true" />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-head reveal">
          <h2>Selected Work</h2>
          <p className="muted">A few projects I am proud of.</p>
        </div>
        <div className="grid">
          {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
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
            <a className="btn primary" href="harshithapaimaipal@gmail.com">Email Me</a>
            <a className="btn ghost" href="https://github.com/Harshitha-Pai" target="_blank">GitHub</a>
            <a className="btn ghost" href="https://www.linkedin.com/in/harshitha-a-pai-032004may/" target="_blank">LinkedIn</a>
          </div>
        </div>
      </section>
    </>
  );
}
