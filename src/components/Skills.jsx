const skillGroups = [
  {
    title: "PROGRAMMING",
    summary: "Languages used for systems, scripts, and application logic.",
    skills: ["C", "C++", "Python", "JavaScript"],
  },
  {
    title: "HARDWARE",
    summary: "Digital design and board-level engineering foundations.",
    skills: ["Verilog", "FPGA Design", "PCB Design", "Digital Logic"],
  },
  {
    title: "WEB_SYSTEMS",
    summary: "Frontend and data tools for building interactive software.",
    skills: ["React", "Tailwind CSS", "MySQL", "REST APIs"],
  },
  {
    title: "AI_TOOLS",
    summary: "Practical use of AI tools for coding, prototyping, and research.",
    skills: ["AI-Assisted Development", "Prompting", "LLMs", "Automation"],
  },
  {
    title: "TOOLS",
    summary: "Workflow tools for building, debugging, and version control.",
    skills: ["Git", "GitHub", "Vite", "Linux"],
  },
]

function Skills() {
  return (
    <section className="bg-black text-white py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-600 tracking-[0.4em] text-sm text-center">
          SYSTEM_CAPABILITIES
        </p>

        <h2 className="text-4xl font-bold text-center mt-4">Skills</h2>

        <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto leading-relaxed">
          Systems-level proficiency across software, hardware, and engineering
          workflows.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-zinc-950 border border-cyan-900/60 rounded-2xl p-6 hover:border-cyan-500 transition duration-300"
            >
              <div className="flex items-center justify-between gap-4 border-b border-zinc-800 pb-4">
                <h3 className="text-cyan-400 font-semibold tracking-[0.2em] text-sm">
                  {group.title}
                </h3>
                <span className="text-gray-600 text-sm">
                  {String(group.skills.length).padStart(2, "0")}
                </span>
              </div>

              <p className="text-gray-500 mt-4 leading-relaxed">
                {group.summary}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-zinc-800 bg-zinc-900 text-gray-300 rounded-lg px-3 py-2 text-sm hover:text-cyan-400 hover:border-cyan-800 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
