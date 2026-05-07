import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';

const projects = [
  {
    title: 'Relect web app',
    description:
      'Reflect web app is a powerful web app were you capture your thoughts, track your moods, and reflect on your journey in a beautiful, secure space',
    image: '/projects/reflect.PNG',
    tags: ['React', 'Tailwindcss', 'clerk', 'typescript'],
    link: 'https://reflect-app-auxq.vercel.app/',
    github: 'https://github.com/amazinng-blib/reflect-app',
  },
  {
    title: 'firepips',
    description: 'Outstanding forex trading web app',
    image: '/projects/firepips.PNG',
    tags: ['Nodejs', 'express', 'mongodb', 'typescript'],
    link: 'https://firepipsfx.com/',
    github: 'https://github.com/amazinng-blib/Firepips',
  },
  {
    title: 'Real state web app',
    description:
      'House booking web app that allows users to book an apartment in any countries of the world',
    image: '/projects/real_state.PNG',
    tags: ['React', 'Css', 'Cloudinary', 'Nodejs', 'express', 'mongodb'],
    link: 'https://real-state-frontend-iota.vercel.app/',
    github: 'https://github.com/amazinng-blib/real_state_frontend',
  },
  {
    title: 'Joint Security web app',
    description: 'Security booking web application',
    image: '/projects/joint_security.PNG',
    tags: ['Nextjs', 'typescript', 'tailwindcss', 'nodemailer'],
    link: 'https://joint-security-service.vercel.app/',
    github: 'https://github.com/amazinng-blib/joint-security-service',
  },
  {
    title: 'Ip address tracker',
    description:
      'Web app that allows users to track the location of any ip address',
    image: '/projects/ip_address.PNG',
    tags: ['React', 'tailwindcss'],
    link: 'https://ip-address-tracker-bay-eight.vercel.app/',
    github: 'https://github.com/amazinng-blib/ip-address-tracker',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 realtive z-10">
        {/* section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animation-fade-in">
            Featured work
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            projects that {}
            <span className="font-serif italic font-normal text-white">
              make an impact
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Selection of projects that showcase my skills and expertise in web
            development. Each project is a testament to my ability to create
            user-friendly and visually stunning web applications.
          </p>
        </div>
        {/* projects */}

        <div className="grid md:grid-cols-2 gap-8">
          {projects?.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolue inset-0  bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    target="_blanck"
                    rel="noreferrer"
                  >
                    <ArrowUp className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    target="_blanck"
                    rel="noreferrer"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {}
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project?.tags?.map((tag, tagIdx) => (
                    <span className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground group-hover:border-primary/50 group-hover:text-primary transition-all duration-300">
                      {' '}
                      {tag}{' '}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* view all call to action */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
