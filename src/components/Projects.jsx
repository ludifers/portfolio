import { Link } from "react-router-dom"
import { featuredProjects, projects } from "../data/projects"

function ProjectCard({ project, compact = false }) {
  return (
    <article
      id={project.id}
      className="bg-zinc-950 border border-cyan-900/60 rounded-2xl p-6 hover:border-cyan-500 transition duration-300"
    >
      <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-4">
        <div>
          <p className="text-cyan-400 tracking-[0.2em] text-xs font-semibold">
            {project.category}
          </p>
          <h3 className="text-2xl font-semibold mt-3">{project.title}</h3>
        </div>

        <span className="text-gray-500 text-xs border border-zinc-800 rounded-lg px-3 py-2">
          {project.status}
        </span>
      </div>

      <p className="text-gray-400 mt-5 leading-relaxed">{project.summary}</p>

      {!compact && (
        <p className="text-gray-500 mt-4 leading-relaxed">{project.details}</p>
      )}

      <div className="flex flex-wrap gap-2 mt-6">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  )
}

function Projects({ preview = false }) {
  const shownProjects = preview ? featuredProjects : projects

  return (
    <section className="bg-black text-white py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-600 tracking-[0.4em] text-sm text-center">
          {preview ? "SELECTED_WORK" : "PROJECT_LEDGER"}
        </p>

        <h2 className="text-4xl font-bold text-center mt-4">
          {preview ? "Selected Work" : "Project Ledger"}
        </h2>

        <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto leading-relaxed">
          Engineering projects spanning embedded systems, digital design,
          software, and AI-assisted development workflows.
        </p>

        {preview ? (
          <>
            <div className="grid md:grid-cols-3 gap-5 mt-12">
              {shownProjects.map((project) => (
                <Link
                  key={project.id}
                  to="/projects"
                  className="block"
                  aria-label={`Open project ledger for ${project.title}`}
                >
                  <ProjectCard project={project} compact />
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                to="/projects"
                className="inline-block bg-cyan-400 text-black rounded-xl px-6 py-3 font-semibold hover:bg-cyan-300 transition"
              >
                OPEN_PROJECT_LEDGER
              </Link>
            </div>
          </>
        ) : (
          <>
            <div id="featured" className="grid md:grid-cols-3 gap-5 mt-12">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} compact />
              ))}
            </div>

            <div className="border-t border-zinc-800 mt-16 pt-12">
              <p className="text-gray-600 tracking-[0.4em] text-sm">
                ALL_PROJECTS
              </p>

              <div className="grid md:grid-cols-2 gap-5 mt-8">
                {shownProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Projects
