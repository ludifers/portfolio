function About() {
  return (
    <section className="min-h-screen snap-start bg-black text-white px-8 pt-28 pb-16 flex items-center">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-600 tracking-[0.4em] text-sm">
          OPERATOR_PROFILE
        </p>

        <h2 className="text-4xl font-bold mt-4">About Me</h2>

        <div className="w-20 h-px bg-cyan-400 mt-6 mx-auto"></div>

        <div className="bg-zinc-950 border border-cyan-900/60 rounded-2xl p-8 mt-10">
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            I am a Computer Engineering senior at the University of Central
            Florida, focused on building at the intersection of hardware and
            software. I enjoy working close to the system, whether that means
            writing C/C++, designing digital logic, building web tools, or
            connecting software to real-world hardware.
          </p>

          <p className="text-gray-400 mt-5 leading-relaxed max-w-3xl mx-auto">
            My current interests include embedded systems, FPGA design, computer
            architecture, and AI-assisted development. I am looking for
            job opportunities where I can contribute to technical projects,
            keep learning from experienced engineers, and turn practical ideas
            into working systems.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="border border-zinc-800 rounded-xl p-4">
              <p className="text-gray-600 text-xs tracking-[0.2em]">FOCUS</p>
              <p className="text-cyan-400 font-semibold mt-2">
                Embedded Systems
              </p>
            </div>

            <div className="border border-zinc-800 rounded-xl p-4">
              <p className="text-gray-600 text-xs tracking-[0.2em]">PROGRAM</p>
              <p className="text-cyan-400 font-semibold mt-2">
                Computer Engineering
              </p>
            </div>

            <div className="border border-zinc-800 rounded-xl p-4">
              <p className="text-gray-600 text-xs tracking-[0.2em]">STATUS</p>
              <p className="text-cyan-400 font-semibold mt-2">
                Seeking Job
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
