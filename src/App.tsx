export default function App() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-6 py-12 flex flex-col gap-16">
      
      {/* 1. Name + Photo */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-48 rounded-full bg-slate-800 overflow-hidden shadow-lg border-4 border-slate-700 flex-shrink-0">
          <img src="/placeholder-avatar.png" alt="Profile" className="w-full h-full object-cover opacity-50" />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-extrabold tracking-tight mb-2">My Name</h1>
          <p className="text-xl text-slate-400">Software Engineer & Designer</p>
        </div>
      </section>

      {/* 2. Informations */}
      <section>
        <h2 className="text-2xl font-bold border-b border-slate-800 pb-2 mb-4">About Information</h2>
        <p className="text-slate-300 leading-relaxed">
          I am a passionate developer with a knack for creating intuitive and beautiful digital experiences.
          This is a placeholder for a brief introductory paragraph about my background, philosophy, and current focus.
        </p>
      </section>

      {/* 3. CV */}
      <section>
        <h2 className="text-2xl font-bold border-b border-slate-800 pb-2 mb-4">Curriculum Vitae</h2>
        <div className="flex gap-4">
          <button className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
            Download CV
          </button>
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
            View Online
          </button>
        </div>
      </section>

      {/* 4. Projects */}
      <section>
        <h2 className="text-2xl font-bold border-b border-slate-800 pb-2 mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-lg p-5 hover:border-slate-600 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Project Name {i}</h3>
              <p className="text-slate-400 text-sm mb-4">A brief description of what this project does and the technologies used to build it.</p>
              <a href="#" className="text-primary hover:underline text-sm font-medium">View Project &rarr;</a>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Website Reviews */}
      <section>
        <h2 className="text-2xl font-bold border-b border-slate-800 pb-2 mb-4">Website Reviews</h2>
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-800 italic text-slate-300">
          "A stunning portfolio showcasing incredible talent. The attention to detail is outstanding." - Client
        </div>
      </section>

      {/* 6. Contacts */}
      <section>
        <h2 className="text-2xl font-bold border-b border-slate-800 pb-2 mb-4">Get in Touch</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Email Me</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
        </div>
      </section>
      
    </div>
  )
}
