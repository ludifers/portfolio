function Contact() {
  return (
    <section className="min-h-screen bg-black text-white px-9 py-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-600 tracking-[0.4em] text-sm">
          TERMINAL // CONTACT
        </p>

        <h1 className="text-5xl font-bold mt-6">Get In Touch</h1>

        <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
          Currently seeking Summer 2026 internship opportunities in embedded
          systems, FPGA design, and computer architecture.
        </p>

        <div className="w-20 h-px bg-cyan-400 mt-6"></div>

        <div className="bg-zinc-950 border border-cyan-900/60 rounded-2xl p-8 mt-20">
          <p className="text-gray-600 tracking-[0.4em] text-sm mb-8">
            SYSTEM_STATUS // REPORT
          </p>

          <div className="space-y-2">
            <div className="flex justify-between border-b border-zinc-800 py-4">
              <span className="text-gray-500 text-sm font-semibold">
                OPERATOR
              </span>
              <span className="font-semibold">Shay Akbari</span>
            </div>

            <div className="flex justify-between border-b border-zinc-800 py-4">
              <span className="text-gray-500 text-sm font-semibold">
                PROGRAM
              </span>
              <span className="font-semibold">Computer Engineering</span>
            </div>

            <div className="flex justify-between border-b border-zinc-800 py-4">
              <span className="text-gray-500 text-sm font-semibold">
                INSTITUTION
              </span>
              <span className="font-semibold">
                University of Central Florida
              </span>
            </div>

            <div className="flex justify-between border-b border-zinc-800 py-4">
              <span className="text-gray-500 text-sm font-semibold">
                GRADUATION
              </span>
              <span className="font-semibold">December 2026</span>
            </div>

            <div className="flex justify-between border-b border-zinc-800 py-4">
              <span className="text-gray-500 text-sm font-semibold">
                STATUS
              </span>
              <span className="font-semibold">SEEKING INTERNSHIP</span>
            </div>

            <div className="flex justify-between py-4">
              <span className="text-gray-500 text-sm font-semibold">
                AVAILABILITY
              </span>
              <span className="font-semibold">SUMMER 2026</span>
            </div>
          </div>
        </div>

        <div className="bg-zinc-950 border border-cyan-900/60 rounded-2xl p-8 mt-8">
          <p className="text-gray-600 tracking-[0.4em] text-sm mb-8">
            CONNECT // LINKS
          </p>

          <div className="space-y-6">
            <div className="flex justify-between border-b border-zinc-800 py-4">
              <p className="text-gray-400 hover:text-cyan-500 cursor-pointer">
                shaya.brz@gmail.com
              </p>
            </div>

            <div className="flex justify-between border-b border-zinc-800 py-4">
              <p className="text-gray-400 hover:text-cyan-500 cursor-pointer">
                GitHub
              </p>
            </div>

            <p className="text-gray-400 hover:text-cyan-500 cursor-pointer">
              LinkedIn
            </p>
          </div>
        </div>

        <div className="bg-zinc-950 border border-cyan-700 rounded-2xl p-4 mt-16 hover:border-cyan-500 transition duration-300">
          <button className="w-full text-center text-gray-400 hover:text-cyan-400 transition">
            DOWNLOAD_RESUME.PDF
          </button>
        </div>

        <div className="bg-zinc-950 border border-cyan-900/60 rounded-2xl p-8 mt-16">
          <div className="flex items-center gap-2 mb-8 border-b border-zinc-800 pb-4">
            <div className=" w-3 h-3 rounded-full bg-red-500"></div>
            <div className=" w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className=" w-3 h-3 rounded-full bg-green-500"></div>
            <p className="text-gray-500 text-sm ml-3">
              guest@portfolio:~$ send-message
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-500 text-sm mb-2">NAME *</label>
              <input
                type="text"
                placeholder="guest"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-gray-500 text-sm mb-2">
                EMAIL *
              </label>
              <input
                type="text"
                placeholder="guest@company.com"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-gray-500 text-sm mb-2">
                SUBJECT *
              </label>
              <input
                type="text"
                placeholder='--subject "Internship Opportunity" '
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-gray-500 text-sm mb-2">
                MESSAGE *
              </label>
              <textarea
                type="text"
                placeholder="Tpe your message here..."
                className="w-full h-36 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-cyan-400 text-black rounded-xl font-semibold hover:bg-cyan-300 transition"
            >
              SEND_MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
