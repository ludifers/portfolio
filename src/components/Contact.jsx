import { useState } from "react";

function Contact() {
  const [formStatus, setFormStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setFormStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mqpzgzlr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Message failed to send");
      }

      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  }

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
              <a
                href="mailto:shaya.brz@gmail.com"
                className="text-gray-400 hover:text-cyan-500 cursor-pointer"
              >
                shaya.brz@gmail.com
              </a>
            </div>

            <div className="flex justify-between border-b border-zinc-800 py-4">
              <a
                href="https://github.com/ludifers"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-cyan-500 cursor-pointer"
              >
                GitHub
              </a>
            </div>

            <a
              href="https://www.linkedin.com/in/shaya-akbari-251630301/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-cyan-500 cursor-pointer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <a
          href="/shay-akbari-resume.pdf"
          download
          className="block bg-zinc-950 border border-cyan-700 rounded-2xl p-4 mt-16 hover:border-cyan-500 transition duration-300"
        >
          <span className="block w-full text-center text-gray-400 hover:text-cyan-400 transition">
            DOWNLOAD_RESUME.PDF
          </span>
        </a>

        <div className="bg-zinc-950 border border-cyan-900/60 rounded-2xl p-8 mt-16">
          <div className="flex items-center gap-2 mb-8 border-b border-zinc-800 pb-4">
            <div className=" w-3 h-3 rounded-full bg-red-500"></div>
            <div className=" w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className=" w-3 h-3 rounded-full bg-green-500"></div>
            <p className="text-gray-500 text-sm ml-3">
              guest@portfolio:~$ send-message
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="block text-gray-500 text-sm mb-2">NAME *</label>
              <input
                type="text"
                name="name"
                placeholder="guest"
                required
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-gray-500 text-sm mb-2">
                EMAIL *
              </label>
              <input
                type="email"
                name="email"
                placeholder="guest@company.com"
                required
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-gray-500 text-sm mb-2">
                SUBJECT *
              </label>
              <input
                type="text"
                name="subject"
                placeholder='--subject "Internship Opportunity" '
                required
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-gray-500 text-sm mb-2">
                MESSAGE *
              </label>
              <textarea
                name="message"
                placeholder="Type your message here..."
                required
                className="w-full h-36 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === "sending"}
              className="px-6 py-3 bg-cyan-400 text-black rounded-xl font-semibold hover:bg-cyan-300 transition"
            >
              {formStatus === "sending" ? "SENDING..." : "SEND_MESSAGE"}
            </button>

            {formStatus === "success" && (
              <p className="text-cyan-400 font-semibold">
                MESSAGE_SENT // Thank you, your message was submitted
                successfully.
              </p>
            )}

            {formStatus === "error" && (
              <p className="text-red-400 font-semibold">
                MESSAGE_FAILED // Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
