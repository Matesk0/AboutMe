/* eslint-disable no-use-before-define */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Globe, Smartphone, Code2, Layout, Copy, Check, Mail, Send, ExternalLink, Github, FileText, Download } from 'lucide-react';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const copyEmail = () => {
    navigator.clipboard.writeText('matiaskojakub17@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-black text-zinc-300 selection:bg-zinc-800 selection:text-zinc-100 pb-24 font-sans">
      {/* Minimal Header */}
      <nav className="fixed top-8 left-1/2 z-50 -translate-x-1/2">
        <div className="flex items-center gap-8 rounded-full border border-zinc-800 bg-black/50 px-8 py-3 backdrop-blur-md">
          {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-xs tracking-widest uppercase font-medium text-zinc-500 transition-colors hover:text-zinc-100"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-3xl space-y-40 px-6 pt-48">
        {/* Hero Section */}
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-1000 space-y-10">
          <div>
            <h1 className="text-5xl font-medium tracking-tight text-zinc-100 sm:text-6xl">
              Jakub Matiaško
            </h1>
            <p className="mt-4 text-xl text-zinc-500">University Student & Developer</p>
            <p className="mt-8 max-w-xl text-lg text-zinc-400 leading-relaxed font-light">
              Studying Programming and Application Development at Masaryk University. Exploring how software works under the hood, building efficient systems, and solving algorithmic challenges.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => scrollTo('contact')}
              className="rounded-full bg-zinc-100 px-6 py-2.5 text-sm font-medium text-black transition-transform hover:scale-105 active:scale-95"
            >
              Get In Touch
            </button>
            <a 
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-6 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-900"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>

          <div className="mt-16 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/50">
            <div className="flex items-center gap-2 border-b border-zinc-800/50 bg-zinc-900/20 px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed text-zinc-400 space-y-4">
              <div>
                <span className="text-emerald-500">➜</span> <span className="text-blue-400">~</span> <span className="text-zinc-100">./about-me --whoami</span><br />
                <span className="text-zinc-400">Hi, I'm Jakub! A university student and MES Coordinator Intern at Brose.</span>
              </div>
              <div>
                <span className="text-emerald-500">➜</span> <span className="text-blue-400">~</span> <span className="text-zinc-100">./about-me --interests</span><br />
                <span className="text-zinc-400">Programming, working out, reading, and gaming.</span>
              </div>
              <div>
                <span className="text-emerald-500">➜</span> <span className="text-blue-400">~</span> <span className="text-zinc-100">./about-me --goal</span><br />
                <span className="text-zinc-400">Exploring how software works under the hood and building efficient systems.</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-500">➜</span> <span className="text-blue-400">~</span> <span className="w-2 h-4 bg-zinc-400 animate-pulse"></span>
              </div>
            </div>
          </div>
        </section>

        {/* About Me */}
        <AnimatedSection id="about" className="scroll-mt-40 space-y-12">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">About</h2>
          <div className="grid gap-12 sm:grid-cols-[1fr_2fr]">
            <div className="group relative aspect-square overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
              <div className="flex h-full w-full items-center justify-center text-4xl grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110">
                👋
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <p className="text-zinc-400 leading-relaxed font-light text-lg italic">
                  "Simplicity is the ultimate sophistication."
                </p>
                <p className="text-zinc-400 leading-relaxed font-light text-lg">
                  I've been learning programming since high school. Beyond coding, my interests include working out, reading, and gaming. Currently, I'm deepening my knowledge in school.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-4">
                <div className="space-y-1">
                  <p className="text-4xl font-light text-zinc-100">6+</p>
                  <p className="text-xs uppercase tracking-widest text-zinc-600">Years Coding</p>
                </div>
                <div className="space-y-1">
                  <p className="text-4xl font-light text-zinc-100">React</p>
                  <p className="text-xs uppercase tracking-widest text-zinc-600">Core Stack</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Projects */}
        <AnimatedSection id="projects" className="scroll-mt-40 space-y-12">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">Selected Works</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <ProjectCard 
              title="Modern Website"
              description="A minimal marketing website showcasing clean design and smooth animations."
              tags={['React', 'Tailwind', 'Framer Motion']}
              githubLink="https://github.com/matesk0"
              liveLink="#"
            />
            <ProjectCard 
              title="Finance App"
              description="A cross-platform tracker emphasizing data clarity and intuitive user flow."
              tags={['React Native', 'TypeScript']}
              githubLink="https://github.com/matesk0"
              liveLink="#"
            />
          </div>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection id="skills" className="scroll-mt-40 space-y-12">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">Technical Arsenal</h2>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-12">
            <div className="flex flex-wrap justify-center gap-8 gap-y-12">
              <SkillIcon name="React" url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
              <SkillIcon name="TypeScript" url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
              <SkillIcon name="Laravel" url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" />
              <SkillIcon name="PostgreSQL" url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
              <SkillIcon name="Python" url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
              <SkillIcon name="C" url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
              <SkillIcon name="Tailwind" url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
              <SkillIcon name="Linux" url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
            </div>
          </div>
        </AnimatedSection>

        {/* Experience & Education */}
        <AnimatedSection id="experience" className="scroll-mt-40 space-y-12">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">Experience & Education</h2>
          <div className="relative border-l border-zinc-800 pl-8 ml-2 space-y-12">
            <TimelineItem 
              title="MES Coordinator (Intern)"
              subtitle="Brose Group"
              date="Present"
              description="Developing a KPI dashboard using React and TypeScript on the frontend, with a Laravel and PostgreSQL backend."
              isActive
            />
            <TimelineItem 
              title="Bachelor's Degree in Programming and Application Development"
              subtitle="Masaryk University, Faculty of Informatics"
              date="2024 - Present"
              description="Deepening knowledge in algorithms, system architecture, and software development fundamentals."
            />
            <TimelineItem 
              title="High School in Informatics and Network Systems"
              subtitle="Secondary Vocational School Lipová 8, Handlová"
              date="2020 - 2024"
              description="Foundational studies in programming, networking, and general informatics."
            />
          </div>
        </AnimatedSection>

        {/* Contact */}
        <AnimatedSection id="contact" className="scroll-mt-40 pt-16">
          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <h2 className="text-3xl font-medium text-zinc-100">Let's build together.</h2>
              <p className="mt-4 text-zinc-500 font-light leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="mt-8 space-y-4">
                <button
                  onClick={copyEmail}
                  className="group flex items-center gap-3 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>{copied ? 'Email Copied!' : 'matiaskojakub17@gmail.com'}</span>
                </button>
                <a href="https://linkedin.com/in/jakub-matiaško-2057aa351" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors">
                  <Globe className="h-4 w-4" /> LinkedIn
                </a>
                <a href="https://github.com/matesk0" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href="https://instagram.com/matesko_76" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors">
                  <Globe className="h-4 w-4" /> Instagram
                </a>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-colors"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  required
                  className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-colors"
                />
              </div>
              <button 
                disabled={formState !== 'idle'}
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-100 px-4 py-3 text-sm font-medium text-black transition-all hover:bg-white active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100"
              >
                {formState === 'idle' && <><Send className="h-4 w-4" /> Send Message</>}
                {formState === 'submitting' && <span className="animate-pulse">Sending...</span>}
                {formState === 'success' && <><Check className="h-4 w-4" /> Sent Successfully</>}
              </button>
            </form>
          </div>
        </AnimatedSection>
        
        {/* Blog Message */}
        <AnimatedSection className="flex justify-center pb-12 pt-10">
          <div className="flex items-start gap-4 max-w-sm w-full transition-transform hover:-translate-y-1">
            <div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
              <FileText className="h-4 w-4 text-zinc-400" />
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl rounded-tl-sm px-5 py-3 text-sm text-zinc-300 shadow-xl shadow-black/40">
              <p className="font-medium text-zinc-100 mb-1">Latest Note</p>
              <p className="font-light text-zinc-400">"Why I switched to React and TypeScript for my latest dashboard project. Full post coming soon!"</p>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
}

function ProjectCard({ title, description, tags, githubLink, liveLink }: { title: string, description: string, tags: string[], githubLink?: string, liveLink?: string }) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-all hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/50 hover:shadow-2xl hover:shadow-black/50">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-zinc-100 transition-colors">
            <Code2 className="h-5 w-5" />
          </div>
          <div className="flex gap-3 opacity-0 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-100 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            )}
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-100 transition-colors">
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-zinc-100 group-hover:text-blue-400 transition-colors">{title}</h3>
          <p className="mt-2 text-sm text-zinc-500 font-light leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="rounded-md bg-zinc-900/80 px-2 py-1 text-xs font-mono text-zinc-400 border border-zinc-800/50">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillIcon({ name, url }: { name: string, url: string }) {
  return (
    <div className="group relative flex flex-col items-center justify-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-800/50 bg-zinc-900/50 transition-all duration-300 group-hover:scale-110 group-hover:border-zinc-700 group-hover:bg-zinc-800 group-hover:shadow-lg group-hover:shadow-black/50">
        <img src={url} alt={name} className="h-8 w-8 opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0" />
      </div>
      <span className="absolute -bottom-8 opacity-0 translate-y-2 text-xs font-medium text-zinc-400 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        {name}
      </span>
    </div>
  );
}

function TimelineItem({ title, subtitle, date, description, isActive = false }: { title: string, subtitle: string, date: string, description: string, isActive?: boolean }) {
  return (
    <div className="relative group">
      <div className={`absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-black transition-colors ${isActive ? 'bg-zinc-100 ring-4 ring-zinc-900' : 'bg-zinc-700 group-hover:bg-zinc-500'}`} />
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-lg font-medium text-zinc-100">{title} <span className="text-zinc-500 font-light block sm:inline">@ {subtitle}</span></h3>
          <span className="text-sm font-mono text-zinc-500 bg-zinc-900/50 px-2 py-1 rounded-md mt-2 sm:mt-0 w-fit">{date}</span>
        </div>
        <p className="text-zinc-400 font-light leading-relaxed max-w-2xl">{description}</p>
      </div>
    </div>
  );
}

function AnimatedSection({ id, className, children, delay = 0 }: { id?: string, className?: string, children: React.ReactNode, delay?: number }) {
  return (
    <motion.section 
      id={id} 
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
