/* eslint-disable no-use-before-define */
import { useState } from 'react';
import { Terminal, Globe, Smartphone, Code2, Layout, Copy, Check, Mail } from 'lucide-react';

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@example.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
              John Doe
            </h1>
            <p className="mt-4 text-xl text-zinc-500">Software Engineer</p>
            <p className="mt-8 max-w-xl text-lg text-zinc-400 leading-relaxed font-light">
              Crafting minimal, high-performance software. Focused on precision, detail, and seamless user experiences.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => scrollTo('contact')}
              className="rounded-full bg-zinc-100 px-6 py-2.5 text-sm font-medium text-black transition-transform hover:scale-105 active:scale-95"
            >
              Get In Touch
            </button>
            <button 
              className="rounded-full border border-zinc-800 px-6 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-900"
            >
              View Resume
            </button>
          </div>

          <div className="mt-16 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/50">
            <div className="flex items-center gap-2 border-b border-zinc-800/50 bg-zinc-900/20 px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed text-zinc-400">
              <span className="text-zinc-500">➜</span> <span className="text-zinc-300">~</span> npx create-modern-react my-app<br />
              <span className="text-zinc-600">Creating a new React app in my-app...</span><br />
              <span className="text-zinc-600">Done! Build something beautiful.</span>
            </div>
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="scroll-mt-40 space-y-12">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">About</h2>
          <div className="grid gap-12 sm:grid-cols-[1fr_2fr]">
            <div className="group relative aspect-square overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
              <div className="flex h-full w-full items-center justify-center text-4xl grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110">
                👋
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-8">
              <p className="text-zinc-400 leading-relaxed font-light text-lg">
                I approach software development with a focus on reduction. Removing the unnecessary so the essential may speak. My work spans from low-level systems to polished, user-facing interfaces.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-4xl font-light text-zinc-100">5+</p>
                  <p className="text-xs uppercase tracking-widest text-zinc-600">Years Exp.</p>
                </div>
                <div className="space-y-1">
                  <p className="text-4xl font-light text-zinc-100">20+</p>
                  <p className="text-xs uppercase tracking-widest text-zinc-600">Projects</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-40 space-y-12">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">Selected Works</h2>
          <div className="space-y-4">
            <ProjectCard 
              icon={<Globe className="h-5 w-5 text-zinc-400" />}
              title="Modern Website"
              description="A minimal marketing website built with Next.js."
              tags={['Next.js', 'React', 'Tailwind']}
            />
            <ProjectCard 
              icon={<Smartphone className="h-5 w-5 text-zinc-400" />}
              title="Finance App"
              description="A cross-platform tracker emphasizing data clarity."
              tags={['React Native', 'TypeScript']}
            />
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-40 space-y-12">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">Expertise</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition-colors hover:bg-zinc-900/50">
              <div className="flex items-center gap-4 mb-8">
                <Code2 className="h-5 w-5 text-zinc-500" />
                <h3 className="font-medium text-zinc-100">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>TypeScript</Badge>
                <Badge>JavaScript</Badge>
                <Badge>HTML/CSS</Badge>
                <Badge>Python</Badge>
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition-colors hover:bg-zinc-900/50">
              <div className="flex items-center gap-4 mb-8">
                <Layout className="h-5 w-5 text-zinc-500" />
                <h3 className="font-medium text-zinc-100">Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>Tailwind</Badge>
                <Badge>Node.js</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-40 space-y-12">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">Experience</h2>
          <div className="space-y-12 border-l border-zinc-800 pl-8 ml-2">
            <ExperienceItem 
              title="Senior Engineer"
              company="Tech Corp"
              date="2022 — Present"
              description="Architected core systems and refined the user interface for enterprise clients."
            />
            <ExperienceItem 
              title="Developer"
              company="Startup Inc."
              date="2020 — 2022"
              description="Built end-to-end features with a strict focus on performance and minimal design."
            />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-40 pt-16 pb-32">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-12 text-center">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800">
              <Mail className="h-5 w-5 text-zinc-400" />
            </div>
            <h2 className="text-2xl font-medium text-zinc-100">Let's connect.</h2>
            <p className="mt-4 mx-auto max-w-sm text-zinc-500 font-light">
              Available for freelance opportunities and minimal design collaborations.
            </p>
            <div className="mt-10 flex justify-center">
              <button
                onClick={copyEmail}
                className="group flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900 px-6 py-3 text-sm font-medium text-zinc-300 transition-all hover:bg-zinc-800"
              >
                <Terminal className="h-4 w-4 text-zinc-500" />
                <span className="font-mono">{copied ? 'Copied' : 'hello@example.com'}</span>
                {copied ? <Check className="h-4 w-4 text-zinc-400" /> : <Copy className="h-4 w-4 text-zinc-600 transition-colors group-hover:text-zinc-400" />}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ProjectCard({ icon, title, description, tags }: { icon: React.ReactNode, title: string, description: string, tags: string[] }) {
  return (
    <div className="group flex flex-col sm:flex-row gap-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-colors hover:bg-zinc-900/80">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 transition-transform duration-500 group-hover:scale-110">
        {icon}
      </div>
      <div className="space-y-3">
        <h3 className="text-lg font-medium text-zinc-100">{title}</h3>
        <p className="text-zinc-500 font-light leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map(tag => (
            <span key={tag} className="text-xs uppercase tracking-wider text-zinc-600 font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperienceItem({ title, company, date, description }: { title: string, company: string, date: string, description: string }) {
  return (
    <div className="relative">
      <div className="absolute -left-[37px] top-1.5 h-2 w-2 rounded-full bg-zinc-700 ring-4 ring-black" />
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-lg font-medium text-zinc-100">{title} <span className="text-zinc-500 font-light">at {company}</span></h3>
          <span className="text-sm font-mono text-zinc-600">{date}</span>
        </div>
        <p className="text-zinc-400 font-light leading-relaxed max-w-2xl">{description}</p>
      </div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs font-mono text-zinc-400">
      {children}
    </span>
  );
}
