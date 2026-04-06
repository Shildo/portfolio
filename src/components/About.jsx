export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">// about</p>
        <div className="about-grid">
          <p className="about-text">
            I'm a passionate front-end developer with a growing full-stack skill set.
            I enjoy learning in teams, iterating fast, and building products that feel
            considered.
            <br /><br />
            Currently working at Axenova, adapting Grafana at the code level for
            internal needs. Available for freelance projects and open to new
            full-time opportunities.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-num">2+</span>
              <p className="stat-desc">Years of professional experience</p>
            </div>
            <div className="stat-item">
              <span className="stat-num">3</span>
              <p className="stat-desc">Companies worked with</p>
            </div>
            <div className="stat-item">
              <span className="stat-num">C2</span>
              <p className="stat-desc">English level — fluent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}