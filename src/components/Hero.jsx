import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-screen snap-start flex flex-col items-center justify-center bg-black text-white px-8 pt-24 pb-16">
      <h1 className="text-6xl font-bold">Shay Akbari</h1>

      <p className="text-xl text-cyan-400 mt-4">---- COMPUTER ENGINEERING</p>

      <p className="text-xl text-gray-400 mt-4 max-w-xl ">
        Computer Engineering senior with a focus on software design. Currently
        seeking job opportunities.
      </p>

      <div className="flex gap-4 mt-6">
        <Link to="/projects">
          <button className="px-6 py-3 bg-cyan-400 hover:bg-cyan-500 text-black rounded-xl transition duration-300 cursor-pointer ">
            VIEW PROJECTS
          </button>
        </Link>

        <Link to="/contact">
          <button className="px-6 py-3 bg-white hover:bg-pink-300 text-black rounded-xl transition duration-300 cursor-pointer ">
            CONTACT_ME
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
