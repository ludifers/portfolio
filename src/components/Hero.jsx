import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-screen snap-start flex items-center bg-black text-white px-5 pt-28 pb-12 sm:px-8 sm:pt-24 sm:pb-16">
      <div className="w-full max-w-6xl mx-auto">
      <div className="mb-8">
        <p className="text-gray-600 tracking-[0.28em] text-xs sm:tracking-[0.4em] sm:text-sm">
          PORTFOLIO_INTERFACE
        </p>

        <p className="text-xl font-semibold mt-4 sm:text-2xl">System Overview</p>

        <div className="w-20 h-px bg-cyan-400 mt-5"></div>
      </div>

      <h1 className="text-4xl font-bold sm:text-6xl">Shay Akbari</h1>

      <p className="text-base text-cyan-400 mt-4 leading-relaxed sm:text-xl">
        COMPUTER ENGINEERING // EMBEDDED SYSTEMS // INTERACTIVE DESIGN
      </p>

      <p className="text-base text-gray-400 mt-5 max-w-3xl leading-relaxed sm:text-xl">
        I build software-driven systems that connect code, hardware, and user
        experience, from smart mobility prototypes to interactive games and
        responsive physical environments.
      </p>

      <div className="flex flex-col gap-3 mt-6 sm:flex-row sm:gap-4">
        <Link to="/projects">
          <button className="w-full px-6 py-3 bg-cyan-400 hover:bg-cyan-500 text-black rounded-xl transition duration-300 cursor-pointer sm:w-auto">
            VIEW_WORK
          </button>
        </Link>

        <Link to="/contact#resume-download">
          <button className="w-full px-6 py-3 border border-cyan-800 bg-cyan-950/40 hover:border-cyan-400 text-cyan-300 hover:text-white rounded-xl transition duration-300 cursor-pointer sm:w-auto">
            VIEW_RESUME
          </button>
        </Link>

        <Link to="/contact#contact-form">
          <button className="w-full px-6 py-3 border border-zinc-700 bg-zinc-900 hover:border-cyan-400 hover:bg-zinc-800 text-gray-200 hover:text-cyan-300 rounded-xl transition duration-300 cursor-pointer sm:w-auto">
            CONTACT_ME
          </button>
        </Link>
      </div>
      </div>
    </section>
  );
}

export default Hero;
