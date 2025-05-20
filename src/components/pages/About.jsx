import { RevealOnScroll } from "../RevealOnScroll"

export default function AboutPage() {
  const frontendSkills = ["React", "React-Native", "TypeScript", "TailwindCSS"]

  const backendSkills = ["Node.js", "Cloudflare", "mySQL", "MongoDB", "noSQL"]

  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
            Constructive full-stack developer with vast knowledge of JavaScript and its most popular frameworks, including React, React Native, Astro, MongoDB, and Hono among others along with dominance on computer skills such as Mircrosoft Office applications and Windows Terminal && macOS terminal. Seeking position on the Technology Industry.

            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>High School Diploma</strong> - Canyon View High School (2021-2025)
                </li>
                <li>Relevant Coursework: Marketing, Coding.</li>
                <li>
                  <strong>West-Mec Central Campus Coding I && Coding II courses</strong> - West-Mec Central Campus
                  (2021-2025)
                </li>
                <li>
                  Technical School that offers the course of coding I && Coding II which teaches programming bases in
                  depth as well as the relevant technologies of the moment
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Robotics Summer Camp Counselor West-Mec Central Campus (Summer of 2024)
                  </h4>
                  <p>
                    Assisted participants in building and programing LEGO robotic vehicles. Collaborated with counselors
                    on lesson plans along with exploring new educational technologies. Monitored participants activities
                    and performance throughout the camp and created new methods to engage and aid participants.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    CTO Officer / Secretary/Student Government / Fundraiser/ (2024-2025)
                  </h4>
                  <p>
                    Create and managed Budget for campus and off campus activities along with signing petitions for the
                    use of campus funds. Planned fundraisers events to support campus activities and/or plans. Kept
                    records of meetings and future plans along with signing and creating semester summaries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
