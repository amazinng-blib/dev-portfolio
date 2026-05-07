const experiences = [
  {
    period: 'Jan 2025 - Jun 2025',
    company: 'Corniehealth',
    role: 'Backend developer',
    description:
      'Diagnosed, debugged, and resolved application bugs, improving system reliability and performance. ',
    technologies: ['Node.JS', 'express.js', 'typescript', 'PostgreSQL'],
    current: true,
  },
  {
    period: 'Jan 2024 - Jan 2025',
    company: 'BlockQueue Systems Limited	',
    role: 'Mid level full stack developer',
    description:
      'Designed and developed multiple key features for the Management platform ',
    technologies: ['Next.js', 'typescript', 'Turso DB', 'Drizzle ORM'],
    current: false,
  },
  {
    period: 'Oct 2023 - Dec 2024',
    company: 'Firepips',
    role: 'Backend developer',
    description:
      'Spearheaded the development of the entire backend infrastructure for a Forex Learning Management System (LMS) with Node.js, Express.js, and MongoDB revolutionizing content management and ensuring secure user interactions ',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Nodemailer'],
    current: false,
  },
  {
    period: 'Jun 2022 - Oct 2022',
    company: 'KIKO',
    role: 'Frontend developer',
    description:
      'Conducted detailed codebase review and refactoring, leading to a more robust and scalable frontend architecture',
    technologies: ['Next.js', 'typescript', 'Material UI'],
    current: false,
  },
  {
    period: 'Jan 2020 - Sep 2020',
    company: 'Startup Fintech Loyster',
    role: 'Frontend developer',
    description:
      'Played a pivotal role in refining the user interface by implementing CSS best practices, contributing to a visually appealing and cohesive design across the application',
    technologies: ['React', 'css3'],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10 ">
        {/* section header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animated-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{' '}
            <span className="font-serif italic font-normal text-white">
              {' '}
              speaks volumes.{' '}
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my professional career journey, highlighting my
            achievements, skills, and contributions to various projects, from
            curious beginer to seasoned developer.;
          </p>
        </div>

        {/* timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,.8)]" />
          {/* experience items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{
                  animationDelay: `${(idx + 1) * 150}ms`,
                }}
              >
                {/* timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* content */}
                <div
                  className={`pl-8 md:pl-0 ${idx % 2 === 0 ? 'md:pr-16 md:text-right ' : 'md:col-start-2 md:pl-16'}`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
