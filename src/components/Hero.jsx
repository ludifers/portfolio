import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-screen snap-start flex items-center bg-black text-white px-8 pt-24 pb-16">
      <div className="w-full max-w-6xl mx-auto">
      <div className="mb-8">
        <p className="text-gray-600 tracking-[0.4em] text-sm">
          PORTFOLIO_INTERFACE
        </p>

        <p className="text-2xl font-semibold mt-4">System Overview</p>

        <div className="w-20 h-px bg-cyan-400 mt-5"></div>
      </div>

      <h1 className="text-6xl font-bold">Shay Akbari</h1>

      <p className="text-xl text-cyan-400 mt-4">
        COMPUTER ENGINEERING // EMBEDDED SYSTEMS // INTERACTIVE DESIGN
      </p>

      <p className="text-xl text-gray-400 mt-5 max-w-3xl leading-relaxed">
        I build software-driven systems that connect code, hardware, and user
        experience, from smart mobility prototypes to interactive games and
        responsive physical environments.
      </p>

      <div className="flex gap-4 mt-6">
        <Link to="/projects">
          <button className="px-6 py-3 bg-cyan-400 hover:bg-cyan-500 text-black rounded-xl transition duration-300 cursor-pointer ">
            VIEW_WORK
          </button>
        </Link>

        <Link to="/contact">
          <button className="px-6 py-3 bg-white hover:bg-pink-300 text-black rounded-xl transition duration-300 cursor-pointer ">
            CONTACT
          </button>
        </Link>
      </div>
      </div>
    </section>
  );
}

export default Hero;
