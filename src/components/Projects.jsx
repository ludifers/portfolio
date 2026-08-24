import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { featuredProjects, projects } from "../data/projects"

const statusStyles = {
  COMPLETE: "border-green-800/70 bg-green-500/10 text-green-400",
  IN_PROGRESS: "border-yellow-800/70 bg-yellow-500/10 text-yellow-400",
  PLANNED: "border-purple-800/70 bg-purple-500/10 text-purple-400",
}

const projectFilters = [
  { label: "ALL", value: "ALL" },
  { label: "COMPLETE", value: "COMPLETE" },
  { label: "IN_PROGRESS", value: "IN_PROGRESS" },
  { label: "PLANNED", value: "PLANNED" },
]

function ProjectCard({
  project,
  compact = false,
  expanded = false,
  onToggle,
  domId,
}) {
  const hasDemoLink = Boolean(project.links?.demo)

  return (
    <article
      id={domId}
      className="overflow-hidden bg-zinc-950 border border-cyan-900/60 rounded-2xl hover:border-cyan-500 transition duration-300"
    >
      {project.image && (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-40 w-full object-cover border-b border-zinc-800"
        />
      )}

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-4">
        <div>
          <p className="text-cyan-400 tracking-[0.2em] text-xs font-semibold">
            {project.category}
          </p>
          <h3 className="text-2xl font-semibold mt-3">
            {project.links?.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="group inline-flex flex-wrap items-center gap-2 hover:text-cyan-400 transition"
              >
                <span>{project.title}</span>
                <span className="rounded-full border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.18em] text-gray-400 transition group-hover:border-cyan-800 group-hover:text-cyan-400">
                  GITHUB -&gt;
                </span>
              </a>
            ) : (
              project.title
            )}
          </h3>
        </div>

        <span
          className={`text-xs border rounded-lg px-3 py-2 ${
            statusStyles[project.status] ||
            "border-zinc-800 bg-zinc-900 text-gray-500"
          }`}
        >
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
          <div className="flex flex-wrap items-center justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onToggle}
              className={`group inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                expanded
                  ? "border-zinc-500 bg-zinc-800 text-gray-100 hover:border-zinc-300 hover:bg-zinc-700"
                  : "border-zinc-500 bg-zinc-800 text-gray-100 hover:border-zinc-300 hover:bg-zinc-700"
              }`}
            >
              <span
                className={`grid h-6 w-6 place-items-center rounded-full text-base leading-none ${
                  expanded
                    ? "border border-zinc-500 bg-black text-white"
                    : "bg-zinc-950 text-gray-200"
                }`}
              >
                {expanded ? "-" : "+"}
              </span>
              {expanded ? "HIDE_DETAILS" : "EXPAND_DETAILS"}
            </button>

            {expanded && hasDemoLink && (
              <>
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
      </div>
    </article>
  )
}

function Projects({ preview = false }) {
  const location = useLocation()
  const [expandedProject, setExpandedProject] = useState("")
  const [activeFilter, setActiveFilter] = useState("ALL")
  const shownProjects = preview ? featuredProjects : projects
  const filteredProjects =
    activeFilter === "ALL"
      ? shownProjects
      : shownProjects.filter((project) => project.status === activeFilter)
  const sectionSpacing = preview
    ? "min-h-screen snap-start pt-20 pb-8 flex items-center"
    : "pt-32 pb-24"
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
        <p className="text-gray-600 tracking-[0.4em] text-sm">
          {preview ? "SELECTED_WORK" : "PROJECT_LEDGER"}
        </p>

        <h2 className="text-4xl font-bold mt-4">
          {preview ? "Selected Work" : "Project Ledger"}
        </h2>

        <div className="w-20 h-px bg-cyan-400 mt-6"></div>

        <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
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

              <div className="w-20 h-px bg-cyan-400 mt-6"></div>

              <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
                A complete archive of active, completed, and planned builds
                across software, embedded systems, game development, and
                interactive design.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {projectFilters.map((filter) => {
                  const isActive = activeFilter === filter.value
                  const statusClass =
                    filter.value === "ALL"
                      ? "border-cyan-800/70 bg-cyan-500/10 text-cyan-400"
                      : statusStyles[filter.value]

                  return (
                    <button
                      key={filter.value}
                      type="button"
                      onClick={() => {
                        setActiveFilter(filter.value)
                        setExpandedProject("")
                      }}
                      className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                        isActive
                          ? statusClass
                          : "border-zinc-800 bg-zinc-950 text-gray-500 hover:border-cyan-800 hover:text-cyan-400"
                      }`}
                    >
                      {filter.label}
                    </button>
                  )
                })}
              </div>

              <div className="grid md:grid-cols-2 gap-5 mt-8">
                {filteredProjects.map((project) => (
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
