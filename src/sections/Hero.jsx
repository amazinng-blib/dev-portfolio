import { Button } from '@/components/button';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import { AnimatedBorderButton } from '../components/AnimatedBorderButton';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiArrowRight, HiDownload } from 'react-icons/hi';

const skills = [
  'React',
  'Next.Js',
  'Typescript',
  'Python',
  'Node.js',
  'GraphQL',
  'Git',
  'Figma',
  'MongoDB',
  'PostgreSQL',
  'Playwright',
  'Tailwind CSS',
  'Ant Design CSS',
  'Cloudinary',
  'Vercel',
  'Html5',
  'Css3',
  'Javascript',
  'Docker',
];

const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = '/ERNEST_NWANKWO.docx';
  link.download = 'ERNEST_NWANKWO.docx';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const handleContactScroll = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* bg image*/}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="hero image"
          className="w-full h-full object-cover opacity-40"
        />{' '}
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* green dots */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: '#20b2a6',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left column */}
          <div className="space-y-8">
            {/* badge */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer + React Specialist
              </span>
            </div>
            {/* headline */}

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with <br />
                <span className="font-serif italic font-normal text-white">
                  Precision
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Nwankwo Ernest Onyebuchi - a passionate software
                engineer specializing in React, Next.Js, Typescript, and Python.
                I create seamless web experiences with a focus on performance
                and user-centric design. With a knack for problem-solving and a
                love for clean code, I bring ideas to life in the digital realm.
                Let's build something amazing together!
              </p>
            </div>
            {/* CTAS */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" onClick={handleContactScroll}>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton onClick={handleDownloadCV}>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>
            {/* social links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>

              {[
                { icon: FaGithub, href: '#' },
                { icon: FaLinkedin, href: '#' },
                { icon: FaTwitter, href: '#' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          {/* right column --profile image */}
          <div className="relative animate-fade-in animation-delay-500">
            {/* rofile image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Nwankwo Ernest Onyebuchi"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />
                {/* floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* stats badge */}

                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold ">5+</div>
                  <div className="text-sm ">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* skills section */}

        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with:
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, skillIdx) => (
                <div key={skillIdx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800 z-10"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider ">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
