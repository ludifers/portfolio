import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { featuredProjects, projects } from "../data/projects"

function ProjectCard({
  project,
  compact = false,
  expanded = false,
  onToggle,
  domId,
}) {
  const hasLinks = project.links?.github || project.links?.demo

  return (
    <article
      id={domId}
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

      {!compact && !expanded && (
        <p className="text-gray-500 mt-4 leading-relaxed">{project.details}</p>
      )}

      {expanded && (
        <div className="mt-6 space-y-5 border-t border-zinc-800 pt-6">
          <div>
            <p className="text-gray-600 tracking-[0.2em] text-xs font-semibold">
              PROBLEM
            </p>
            <p className="text-gray-400 mt-2 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div>
            <p className="text-gray-600 tracking-[0.2em] text-xs font-semibold">
              SOLUTION
            </p>
            <p className="text-gray-400 mt-2 leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div>
            <p className="text-gray-600 tracking-[0.2em] text-xs font-semibold">
              MY_ROLE
            </p>
            <p className="text-gray-400 mt-2 leading-relaxed">
              {project.role}
            </p>
          </div>

          <div>
            <p className="text-gray-600 tracking-[0.2em] text-xs font-semibold">
              FEATURES
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 mt-3">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="border border-zinc-800 bg-zinc-900 rounded-lg px-3 py-2 text-gray-300 text-sm"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
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

      {!compact && (
        <div className="flex flex-wrap items-center gap-3 mt-6">
          <button
            type="button"
            onClick={onToggle}
            className="border border-cyan-800 rounded-xl px-4 py-2 text-cyan-400 hover:border-cyan-400 transition"
          >
            {expanded ? "HIDE_DETAILS" : "EXPAND_DETAILS"}
          </button>

          {expanded && hasLinks && (
            <>
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-zinc-800 rounded-xl px-4 py-2 text-gray-300 hover:text-cyan-400 hover:border-cyan-800 transition"
                >
                  GitHub
                </a>
              )}

              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-zinc-800 rounded-xl px-4 py-2 text-gray-300 hover:text-cyan-400 hover:border-cyan-800 transition"
                >
                  Live Demo
                </a>
              )}
            </>
          )}
        </div>
      )}
    </article>
  )
}

function Projects({ preview = false }) {
  const location = useLocation()
  const [expandedProject, setExpandedProject] = useState("")
  const shownProjects = preview ? featuredProjects : projects
  const sectionSpacing = preview
    ? "min-h-screen snap-start pt-20 pb-8 flex items-center"
    : "py-24"
  const projectGridSpacing = preview ? "mt-8" : "mt-12"

  useEffect(() => {
    if (preview || !location.hash) {
      return
    }

    const projectId = location.hash.replace("#", "")
    const featuredProjectIds = featuredProjects.map((project) => project.id)
    const targetId = featuredProjectIds.includes(projectId)
      ? `featured-${projectId}`
      : projectId

    setExpandedProject(targetId)

    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    })
  }, [location.hash, preview])

  return (
    <section className={`bg-black text-white ${sectionSpacing} px-8`}>
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
            <div className={`grid md:grid-cols-3 gap-5 ${projectGridSpacing}`}>
              {shownProjects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects#featured-${project.id}`}
                  className="block"
                  aria-label={`Open project ledger for ${project.title}`}
                >
                  <ProjectCard project={project} compact />
                </Link>
              ))}
            </div>

          </>
        ) : (
          <>
            <div id="featured" className="grid md:grid-cols-3 gap-5 mt-12">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  domId={`featured-${project.id}`}
                  expanded={expandedProject === `featured-${project.id}`}
                  onToggle={() =>
                    setExpandedProject((currentProject) =>
                      currentProject === `featured-${project.id}`
                        ? ""
                        : `featured-${project.id}`
                    )
                  }
                />
              ))}
            </div>

            <div className="border-t border-zinc-800 mt-16 pt-12">
              <p className="text-gray-600 tracking-[0.4em] text-sm">
                ALL_PROJECTS
              </p>

              <div className="grid md:grid-cols-2 gap-5 mt-8">
                {shownProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    domId={`project-${project.id}`}
                    expanded={expandedProject === `project-${project.id}`}
                    onToggle={() =>
                      setExpandedProject((currentProject) =>
                        currentProject === `project-${project.id}`
                          ? ""
                          : `project-${project.id}`
                      )
                    }
                  />
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
