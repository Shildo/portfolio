const jobs = [
  {
    period: ['Sep 2025', 'Present'],
    company: 'Axenova',
    role: 'Full-Stack Developer',
    desc: 'Adapting and customizing Grafana at the code level to meet internal company needs — modifying components, styles, and interactive behaviors to align the platform with corporate aesthetics and functional requirements.',
    tags: ['TypeScript', 'React', 'Grafana', 'Node.js'],
  },
  {
    period: ['Sep 2023', 'Sep 2025'],
    company: 'Voguetta Studio',
    role: 'Front-end Developer',
    desc: "Developed software to enhance the studio's projects and client products. Built scalable features working closely within a team using SCRUM methodology.",
    tags: ['React', 'Next.js', 'Node.js', 'MongoDB', 'TailwindCSS', 'Sass', 'PHP', 'Figma'],
  },
  {
    period: ['Freelance', ''],
    company: 'Valar Lab',
    role: 'Full-Stack Developer',
    desc: 'Designed and developed a full website for a pharmaceutical company as part of a 3-person team — covering planning, UI/UX design, front-end and back-end development.',
    tags: ['Next.js', 'React', 'Sass', 'Figma'],
    link: 'https://labvalar.com',
    screenshot: '/screenshots/valar.png',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section-label">// experience</p>
        <div className="exp-list">
          {jobs.map((job) => (
            <div className="exp-item" key={job.company}>
              <div className="exp-meta">
                <p className="exp-period">{job.period[0]}</p>
                {job.period[1] && <p className="exp-period">{job.period[1]}</p>}
              </div>
              <div className="exp-body">
                <div className="exp-header">
                  <p className="exp-company">{job.company}</p>
                  {job.link && (
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="exp-link"
                    >
                      ↗
                    </a>
                  )}
                </div>
                <p className="exp-role">{job.role}</p>
                {job.screenshot && (
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-screenshot-link"
                  >
                    <div className="exp-screenshot-wrap">
                      <div className="exp-screenshot-bar">
                        <div className="exp-screenshot-dots">
                          <span className="exp-screenshot-dot" />
                          <span className="exp-screenshot-dot" />
                          <span className="exp-screenshot-dot" />
                        </div>
                        <span className="exp-screenshot-url">labvalar.com</span>
                      </div>
                      <img
                        src={job.screenshot}
                        alt={`${job.company} website`}
                        className="exp-screenshot"
                      />
                    </div>
                  </a>
                )}
                <p className="exp-desc">{job.desc}</p>
                <div className="tags">
                  {job.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}