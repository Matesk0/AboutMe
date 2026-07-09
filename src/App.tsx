export default function App() {
  return (
    <>
      {/* Abhay: Floating Navigation */}
      <nav className="navbar animate-in">
        <div className="nav-content">
          <div className="nav-logo">Port<span>folio</span></div>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Kuchizu: System Metrics */}
      <div className="system-metrics animate-in delay-1">
        <div className="metric-item">
          <div className="metric-dot"></div>
          <span>SYS_ONLINE</span>
        </div>
        <div className="metric-item">
          <span style={{ color: 'var(--accent-color)' }}>PING:</span> 12ms
        </div>
      </div>

      {/* Main Container (Nader Structure) */}
      <div className="app-container">
        
        {/* Hero Section */}
        <section className="hero">
          <div className="animate-in delay-2">
            <span className="hero-badge">Full Stack Developer</span>
            <h1>JOHN DOE</h1>
            <p>I build exceptional and accessible digital experiences for the web.</p>
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <h2 className="section-title">Want to <span>know me?</span></h2>
          <div className="section-subtitle">A brief introduction.</div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
            <div className="dashboard-card" style={{ padding: 0, overflow: 'hidden', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: '4rem' }}>🧑‍💻</div>
            </div>
            <div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                I am a passionate software engineer with a knack for creating intuitive, performant, and beautiful digital experiences. 
                I specialize in front-end development, but I am comfortable working across the entire stack.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="dashboard-card" style={{ padding: '16px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>4+</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Years Experience</div>
                </div>
                <div className="dashboard-card" style={{ padding: '16px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>20+</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Projects Built</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h2 className="section-title">Selected <span>Works</span></h2>
          <div className="section-subtitle">What I've been building.</div>

          <h3 className="project-subgenre">Websites</h3>
          <div className="project-list">
            {[1, 2].map((i) => (
              <div key={`web-${i}`} className="project-item dashboard-card">
                <div className="project-icon">🌐</div>
                <div className="project-details">
                  <h3>Website Project {i}</h3>
                  <p>A beautiful marketing website built for optimal performance and SEO.</p>
                  <div className="tech-tags">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Vite</span>
                    <span className="tech-tag">Vanilla CSS</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="project-subgenre">Applications</h3>
          <div className="project-list">
            {[1, 2].map((i) => (
              <div key={`app-${i}`} className="project-item dashboard-card">
                <div className="project-icon">📱</div>
                <div className="project-details">
                  <h3>Web Application {i}</h3>
                  <p>A complex dashboard application with rich data visualization.</p>
                  <div className="tech-tags">
                    <span className="tech-tag">TypeScript</span>
                    <span className="tech-tag">React</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <h2 className="section-title">Skills & <span>Expertise</span></h2>
          <div className="section-subtitle">My technical toolkit.</div>

          <div className="skills-group">
            <h3>Languages</h3>
            <div className="skills-grid">
              {['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Python'].map(skill => (
                <div key={skill} className="skill-badge">{skill}</div>
              ))}
            </div>
          </div>

          <div className="skills-group">
            <h3>Frameworks & Libraries</h3>
            <div className="skills-grid">
              {['React', 'Next.js', 'Node.js', 'Express', 'Vite'].map(skill => (
                <div key={skill} className="skill-badge">{skill}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <h2 className="section-title">Work <span>Experience</span></h2>
          <div className="section-subtitle">My professional journey.</div>

          <div className="timeline">
            <div className="timeline-item dashboard-card">
              <div className="timeline-dot"></div>
              <div className="timeline-header">
                <div className="timeline-title">Senior Frontend Engineer</div>
                <div className="timeline-date">2022 - Present</div>
              </div>
              <div style={{ color: 'var(--accent-color)', marginBottom: '12px', fontSize: '0.875rem' }}>TechCorp Inc.</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                Led the frontend team in rebuilding the core platform architecture.
              </p>
            </div>

            <div className="timeline-item dashboard-card">
              <div className="timeline-dot"></div>
              <div className="timeline-header">
                <div className="timeline-title">Software Developer</div>
                <div className="timeline-date">2019 - 2022</div>
              </div>
              <div style={{ color: 'var(--accent-color)', marginBottom: '12px', fontSize: '0.875rem' }}>StartupX</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                Developed interactive user interfaces and integrated RESTful APIs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section" style={{ textAlign: 'center', paddingBottom: '120px' }}>
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 2rem auto' }}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <button className="btn-primary" onClick={() => navigator.clipboard.writeText('hello@example.com')}>
            Copy Email Address
          </button>
        </section>

      </div>
    </>
  );
}
