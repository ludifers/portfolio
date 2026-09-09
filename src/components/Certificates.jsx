import { Link } from "react-router-dom"

const certificates = [
  {
    title: "AI for Game Programming Course - Best in Show",
    issuer: "University of Central Florida",
    date: "Issued August 20, 2026",
    image: "/certificates/ucf-ai-game-programming-best-in-show.png",
    summary:
      "Awarded for Dead Man's Tale, a game project built for UCF's AI for Game Programming course.",
  },
]

function Certificates() {
  return (
    <section className="min-h-screen snap-start bg-black text-white px-5 pt-28 pb-12 flex items-center sm:px-8 sm:pb-16">
      <div className="w-full max-w-6xl mx-auto">
        <p className="text-gray-600 tracking-[0.28em] text-xs sm:tracking-[0.4em] sm:text-sm">
          ACADEMIC_CREDENTIALS
        </p>

        <h2 className="text-3xl font-bold mt-4 sm:text-4xl">Certificates</h2>

        <div className="w-20 h-px bg-cyan-400 mt-6"></div>

        <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
          School achievements and coursework credentials that support my
          technical growth.
        </p>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-5 mt-10">
          {certificates.map((certificate) => (
            <article
              key={certificate.title}
              className="bg-zinc-950 border border-cyan-900/60 rounded-2xl overflow-hidden hover:border-cyan-500 transition duration-300"
            >
              <a
                href={certificate.image}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${certificate.title} certificate`}
              >
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  className="h-48 w-full object-cover object-top border-b border-zinc-800 sm:h-64"
                />
              </a>

              <div className="p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-cyan-400 font-semibold tracking-[0.2em] text-sm">
                    CERTIFICATE
                  </p>
                  <h3 className="text-2xl font-bold mt-3">
                    {certificate.title}
                  </h3>
                </div>

                <span className="border border-zinc-800 bg-zinc-900 text-gray-300 rounded-lg px-3 py-2 text-sm">
                  {certificate.date}
                </span>
              </div>

              <p className="text-gray-400 mt-5">{certificate.issuer}</p>
              <p className="text-gray-500 mt-4 leading-relaxed">
                {certificate.summary}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex border border-cyan-800 bg-cyan-950/40 text-cyan-300 rounded-lg px-4 py-2 text-sm hover:border-cyan-400 hover:text-white transition"
                >
                  View Certificate
                </a>

                <Link
                  to="/projects#featured-deadmans-tale"
                  className="inline-flex border border-zinc-800 bg-zinc-900 text-gray-300 rounded-lg px-4 py-2 text-sm hover:border-cyan-800 hover:text-cyan-400 transition"
                >
                  View Dead Man's Tale
                </Link>
              </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
