const certifications = [
  {
    name: 'Introducción a la gestión de proyectos tecnológicos',
    issuer: 'Fundación Sadosky',
    pdf: '/certificates/gestion-proyectos.pdf',
  },
  {
    name: 'Hay equipo: Introducción a la ciberseguridad',
    issuer: 'Fundación Sadosky',
    pdf: '/certificates/ciberseguridad.pdf',
  },
  {
    name: 'Una mirada hacia la inteligencia artificial',
    issuer: 'Fundación Sadosky',
    pdf: '/certificates/inteligencia-artificial.pdf',
  },
]

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="section-label">// education</p>
        <div className="edu-item">
          <div className="edu-meta">
            <p className="edu-year">2020 — 2023</p>
          </div>
          <div className="edu-body">
            <p className="edu-name">Universidad Nacional de La Plata</p>
            <p className="edu-degree">
              Systems Engineering · 3 years completed
            </p>
          </div>
        </div>

        <p className="section-label cert-label">// certifications</p>
        <div className="cert-list">
          {certifications.map((cert) => (
            <div className="cert-item" key={cert.name}>
              <p className="cert-issuer">{cert.issuer}</p>
              <div className="cert-body">
                <p className="cert-name">{cert.name}</p>
                {cert.pdf && (
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    view certificate ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}