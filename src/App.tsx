import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Smartphone, Terminal, Code2, Layout } from "lucide-react"

export default function App() {
  return (
    <div className="min-h-screen bg-[#24292e] text-[#fafbfc] font-sans selection:bg-[#fafbfc]/30 text-center md:text-left">
      {/* Floating Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl animate-in fade-in slide-in-from-top-4 duration-700 flex justify-center">
        <div className="bg-[#2b3137]/90 backdrop-blur-md border border-[#444d56] rounded-full py-3 px-8 flex items-center justify-center shadow-2xl">
          <div className="flex gap-6 text-sm font-medium">
            <a href="#about" className="text-neutral-300 hover:text-[#ffffff] transition-colors">About</a>
            <a href="#projects" className="text-neutral-300 hover:text-[#ffffff] transition-colors">Projects</a>
            <a href="#skills" className="text-neutral-300 hover:text-[#ffffff] transition-colors">Skills</a>
            <a href="#experience" className="text-neutral-300 hover:text-[#ffffff] transition-colors">Experience</a>
            <a href="#contact" className="text-neutral-300 hover:text-[#ffffff] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <div className="max-w-3xl mx-auto px-5 relative pt-24 pb-32 flex flex-col gap-32">
        
        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <Badge variant="outline" className="mb-6 bg-[#2b3137] text-neutral-300 border-[#444d56] py-1.5 px-4">
            Full Stack Developer
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-tight text-[#ffffff]">
            JOHN DOE
          </h1>
          <p className="text-xl text-neutral-400 max-w-lg mx-auto mb-10 leading-relaxed">
            I build exceptional and accessible digital experiences for the web.
          </p>
          <Button onClick={() => window.location.href = '#contact'} size="lg" className="bg-[#2dba4e] hover:bg-[#2dba4e]/90 text-white rounded-full px-8 font-semibold transition-all">
            Get In Touch
          </Button>

          {/* Usage Block */}
          <div className="mt-12 bg-[#2b3137] rounded-xl p-6 text-left max-w-xl mx-auto border border-[#444d56] shadow-2xl relative overflow-hidden w-full">
            <div className="absolute top-0 left-0 w-full h-8 bg-[#24292e] flex items-center px-4 border-b border-[#444d56]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <pre className="mt-6 font-mono text-sm text-neutral-300">
              <code className="text-[#2dba4e]">$ </code>npx create-modern-react my-app<br/>
              <code className="text-[#2dba4e]">$ </code>cd my-app<br/>
              <code className="text-[#2dba4e]">$ </code>yarn dev
            </pre>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-32 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2 text-[#ffffff]">Want to <span className="text-neutral-400">know me?</span></h2>
          <p className="text-neutral-400 text-lg mb-12">A brief introduction.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <Card className="bg-[#2b3137] border-[#444d56] overflow-hidden h-[400px] flex items-center justify-center relative group mx-auto w-full max-w-[300px] md:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-7xl transform group-hover:scale-110 transition-transform duration-500">🧑‍💻</div>
            </Card>
            <div className="flex flex-col gap-8">
              <p className="text-neutral-300 leading-relaxed text-lg">
                I am a passionate software engineer with a knack for creating intuitive, performant, and beautiful digital experiences. 
                I specialize in front-end development, but I am comfortable working across the entire stack.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-[#2b3137] border-[#444d56] text-center p-6 hover:border-neutral-500 transition-colors">
                  <div className="text-4xl font-bold text-[#ffffff] mb-2">4+</div>
                  <div className="text-sm text-neutral-400 font-medium uppercase tracking-wider">Years Exp</div>
                </Card>
                <Card className="bg-[#2b3137] border-[#444d56] text-center p-6 hover:border-neutral-500 transition-colors">
                  <div className="text-4xl font-bold text-[#ffffff] mb-2">20+</div>
                  <div className="text-sm text-neutral-400 font-medium uppercase tracking-wider">Projects</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-32 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2 text-[#ffffff]">Selected <span className="text-neutral-400">Works</span></h2>
          <p className="text-neutral-400 text-lg mb-12">What I've been building.</p>

          <h3 className="text-2xl font-semibold mb-6 pb-2 border-b border-[#444d56] text-[#ffffff] text-center md:text-left">Websites</h3>
          <div className="flex flex-col gap-6 mb-12 text-left">
            {[1, 2].map((i) => (
              <Card key={`web-${i}`} className="bg-[#2b3137] border-[#444d56] hover:border-neutral-500 transition-all group overflow-hidden">
                <CardContent className="p-6 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                  <div className="w-16 h-16 rounded-xl bg-[#24292e] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <Globe className="w-8 h-8 text-neutral-400 group-hover:text-[#ffffff] transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ffffff] transition-colors text-[#ffffff]">Website Project {i}</h3>
                    <p className="text-neutral-400 text-sm mb-4">A beautiful marketing website built for optimal performance and SEO.</p>
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      <Badge variant="secondary" className="bg-[#24292e] hover:bg-[#24292e]/80 text-neutral-300 font-mono text-xs border border-[#444d56]">React</Badge>
                      <Badge variant="secondary" className="bg-[#24292e] hover:bg-[#24292e]/80 text-neutral-300 font-mono text-xs border border-[#444d56]">Vite</Badge>
                      <Badge variant="secondary" className="bg-[#24292e] hover:bg-[#24292e]/80 text-neutral-300 font-mono text-xs border border-[#444d56]">Tailwind CSS</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3 className="text-2xl font-semibold mb-6 pb-2 border-b border-[#444d56] text-[#ffffff] text-center md:text-left">Applications</h3>
          <div className="flex flex-col gap-6 text-left">
            {[1, 2].map((i) => (
              <Card key={`app-${i}`} className="bg-[#2b3137] border-[#444d56] hover:border-neutral-500 transition-all group overflow-hidden">
                <CardContent className="p-6 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                  <div className="w-16 h-16 rounded-xl bg-[#24292e] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <Smartphone className="w-8 h-8 text-neutral-400 group-hover:text-[#ffffff] transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ffffff] transition-colors text-[#ffffff]">Web Application {i}</h3>
                    <p className="text-neutral-400 text-sm mb-4">A complex dashboard application with rich data visualization.</p>
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      <Badge variant="secondary" className="bg-[#24292e] hover:bg-[#24292e]/80 text-neutral-300 font-mono text-xs border border-[#444d56]">TypeScript</Badge>
                      <Badge variant="secondary" className="bg-[#24292e] hover:bg-[#24292e]/80 text-neutral-300 font-mono text-xs border border-[#444d56]">React</Badge>
                      <Badge variant="secondary" className="bg-[#24292e] hover:bg-[#24292e]/80 text-neutral-300 font-mono text-xs border border-[#444d56]">Shadcn UI</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-32 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2 text-[#ffffff]">Skills & <span className="text-neutral-400">Expertise</span></h2>
          <p className="text-neutral-400 text-lg mb-12">My technical toolkit.</p>

          <div className="mb-10 text-left">
            <h3 className="text-xl font-medium mb-6 flex items-center gap-2 justify-center md:justify-start text-[#ffffff]">
              <Code2 className="w-5 h-5 text-neutral-400" /> Languages
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Python'].map(skill => (
                <Card key={skill} className="bg-[#2b3137] border-[#444d56] px-4 py-2 hover:border-neutral-400 transition-colors">
                  <span className="font-mono text-sm text-[#fafbfc]">{skill}</span>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-left">
            <h3 className="text-xl font-medium mb-6 flex items-center gap-2 justify-center md:justify-start text-[#ffffff]">
              <Layout className="w-5 h-5 text-neutral-400" /> Frameworks & Libraries
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {['React', 'Next.js', 'Node.js', 'Express', 'Vite', 'Tailwind CSS'].map(skill => (
                <Card key={skill} className="bg-[#2b3137] border-[#444d56] px-4 py-2 hover:border-neutral-400 transition-colors">
                  <span className="font-mono text-sm text-[#fafbfc]">{skill}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-32 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2 text-[#ffffff]">Work <span className="text-neutral-400">Experience</span></h2>
          <p className="text-neutral-400 text-lg mb-12">My professional journey.</p>

          <div className="relative pl-8 flex flex-col gap-10 before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-[#444d56] text-left mx-auto max-w-[400px] md:mx-0 md:max-w-none">
            
            <div className="relative">
              <div className="absolute -left-[32px] top-1.5 w-4 h-4 rounded-full bg-[#24292e] border-2 border-[#ffffff] z-10"></div>
              <Card className="bg-[#2b3137] border-[#444d56] p-6 hover:border-neutral-400 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-semibold text-[#ffffff]">Senior Frontend Engineer</h3>
                  <span className="font-mono text-sm text-neutral-400 bg-[#24292e] px-3 py-1 rounded-full border border-[#444d56] self-start sm:self-auto">2022 - Present</span>
                </div>
                <div className="text-neutral-300 font-medium text-sm mb-4">TechCorp Inc.</div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Led the frontend team in rebuilding the core platform architecture. Implemented modern design systems and improved overall performance by 40%.
                </p>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute -left-[32px] top-1.5 w-4 h-4 rounded-full bg-[#24292e] border-2 border-neutral-500 z-10"></div>
              <Card className="bg-[#2b3137] border-[#444d56] p-6 hover:border-neutral-400 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-semibold text-[#ffffff]">Software Developer</h3>
                  <span className="font-mono text-sm text-neutral-400 bg-[#24292e] px-3 py-1 rounded-full border border-[#444d56] self-start sm:self-auto">2019 - 2022</span>
                </div>
                <div className="text-neutral-300 font-medium text-sm mb-4">StartupX</div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Developed interactive user interfaces and integrated RESTful APIs. Collaborated closely with designers to ensure pixel-perfect implementations.
                </p>
              </Card>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-32 text-center border-t border-[#444d56] pt-20">
          <h2 className="text-4xl font-bold mb-6 text-[#ffffff]">Get In <span className="text-neutral-400">Touch</span></h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <Button 
            size="lg"
            className="bg-[#2dba4e] hover:bg-[#2dba4e]/90 text-white rounded-full px-8 font-semibold transition-all"
            onClick={() => navigator.clipboard.writeText('hello@example.com')}
          >
            <Terminal className="mr-2 h-4 w-4" /> Copy Email Address
          </Button>
        </section>

      </div>
    </div>
  );
}
