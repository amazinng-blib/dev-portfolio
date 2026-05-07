import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description:
      'I write clean, maintainable code that follows best practices and design patterns.',
  },
  {
    icon: Rocket,
    title: 'Performance Focused',
    description:
      'I optimize applications for speed and efficiency, ensuring a smooth user experience.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'I thrive in team environments, communicating effectively and contributing to shared goals.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'I stay updated with the latest tech trends and continuously seek innovative solutions.',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              {' '}
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {' '}
                one component at a time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a passionate software developer with a strong focus on clean
                code, performance optimization, and collaboration. With a
                background in computer science and a deep understanding of
                software development principles, I bring a unique perspective to
                the world of software engineering.{' '}
              </p>
              <p>
                I specialize i n React, Next.js, and Node.js, and have a strong
                passion for creating user-friendly and efficient web
                applications. My expertise in these technologies allows me to
                deliver high-quality software solutions that meet the needs of
                my clients.{' '}
              </p>

              <p>
                I'm committed to staying up-to-date with the latest industry
                trends and best practices, and I'm always looking for ways to
                improve my skills and knowledge in the ever-evolving world of
                software development.{' '}
              </p>
            </div>
            <div className="glass rounded-2xl px-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                My mission is to turn ideas into powerful, easy-to-use digital
                experiences that create real value and make everyday tasks
                simpler and smarter.
              </p>
            </div>
          </div>

          {/* right column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights?.map((highlight, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-all">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg  font-semibold mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
