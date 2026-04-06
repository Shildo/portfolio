const skillGroups = [
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Sass / CSS'],
  },
  {
    name: 'Backend & Tools',
    skills: ['Node.js', 'PHP', 'MongoDB', 'Grafana', 'Git', 'Jira / SCRUM'],
  },
  {
    name: 'Design & Other',
    skills: ['Figma', 'UI/UX Design', 'English — C2', 'Spanish — Native'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label">// skills</p>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.name}>
              <p className="skill-group-name">{group.name}</p>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span className="skill-item" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}