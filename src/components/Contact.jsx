export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="section-label">// contact</p>
        <div className="contact-grid">
          <div className="contact-left">
            <h2 className="contact-headline">
              Let's build<br />
              <em>something</em> good.
            </h2>
            <p className="contact-sub">
              Open to freelance projects, full-time roles, and interesting conversations.
            </p>
          </div>
          <div className="contact-links">
            <div className="contact-row">
              <span className="contact-row-label">Email</span>
              <a
                href="mailto:guido.marzocchini@gmail.com"
                className="contact-row-val"
              >
                guido.marzocchini@gmail.com
              </a>
            </div>
            <div className="contact-row">
              <span className="contact-row-label">Phone</span>
              <span className="contact-row-val">+54 221 616-0419</span>
            </div>
            <div className="contact-row">
              <span className="contact-row-label">Location</span>
              <span className="contact-row-val">La Plata, Argentina</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}