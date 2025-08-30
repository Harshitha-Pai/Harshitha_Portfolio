import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.jsx";
import me from "../assets/me.jpg";


export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4rem', backgroundColor: '#8e5839ff', color: '#fff' }}>
        {/* Left photo */}
        <div className="hero-photo" style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
          <img src={me} alt="Harshitha Pai" style={{ width: '300px', height: '300px', objectFit: 'cover', borderRadius: '0.5rem' }} />
       </div>

        {/* Right text */}
        <div className="hero-text" style={{ flex: '1', paddingLeft: '3rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Hi, I am Harshitha</h1>
            <p style={{ fontSize: '1rem', marginBottom: '2rem', color: '#ccc' }}>
              I am a Designer-Developer crafting clean, usable interfaces. I blend <strong>UI/UX</strong> thinking with solid engineering to build reliable, human-centered products.
           </p>
           <div className="cta-row" style={{ display: 'flex', gap: '1rem' }}>
             <a href="#projects" className="btn primary" style={{ padding: '0.75rem 1.5rem', backgroundColor: '#fff', color: '#000', borderRadius: '0.5rem', fontWeight: 'bold' }}>Explore Now</a>
           </div>
        </div>
     </section>



      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-head reveal">
          <h2>MY PROJECTS</h2>
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
            <a className="btn primary" href="mailto:harshithapaimaipal@gmail.com">Email Me</a>
            <a className="btn ghost" href="https://github.com/Harshitha-Pai" target="_blank">GitHub</a>
            <a className="btn ghost" href="https://www.linkedin.com/in/harshitha-a-pai-032004may/" target="_blank">LinkedIn</a>
          </div>
        </div>
      </section>
    </>
  );
}
