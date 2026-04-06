export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <p className="hero-label">Full-stack developer · La Plata, Argentina</p>
        <h1>
          Guido<br />
          <em>Marzocchini</em>
        </h1>
        <p className="hero-desc">
          Front-end focused developer expanding into full-stack. I build scalable
          interfaces, work close to design systems, and care about the craft of clean code.
        </p>
        <div className="hero-actions">
          <a href="mailto:guido.marzocchini@gmail.com" className="btn-primary">
            Get in touch
          </a>
          <a href="#experience" className="btn-secondary">
            See my work
          </a>
        </div>
      </div>
    </section>
  )
}