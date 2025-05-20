import { RevealOnScroll } from "../RevealOnScroll"

export default function ProjectsPage() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Talentlink connecting students with companies</h3>
              <p className="text-gray-400 mb-4">
                Full-Stack website using MongoDB to allow companies to open job entries for students to apply to.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "Astro", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a href="https://github.com/FBLA-2025/FBLA-Web-Coding-Regional" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all"
            >
              <h3 className="text-xl font-bold mb-2">EdgyMon Mobile App</h3>
              <p className="text-gray-400 mb-4">
               Mobile application that gamefies the subjects of Math, Science and English for students to learn in an interactive 
               enviroment 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Cloudflare", "React-Native", "SQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/FBLA-2025-app/App-FBLA-state" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all"
            >
              <h3 className="text-xl font-bold mb-2">Task App</h3>
              <p className="text-gray-400 mb-4">
               Application that allows users to create tasks and set specific dates and times.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[ "Laravel", "PHP"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/Santiagohen/laravel-task-app-." className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all"
            >
              <h3 className="text-xl font-bold mb-2">AI Job Search Website</h3>
              <p className="text-gray-400 mb-4">
                Website that allows users to open positions for job in any level and uses LAMA-3 model to reject or accept applicants
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["NodeJs", "Express", "HugginFace", "LAMA-3"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a href="https://github.com/Santiagohen/laravel-task-app-." className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
