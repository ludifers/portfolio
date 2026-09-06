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
  showImage = true,
}) {
  const hasDemoLink = Boolean(project.links?.demo)
  const titleLink = project.links?.github || project.links?.demo
  const titleLinkLabel = project.links?.github ? "GITHUB" : "ROBLOX"

  return (
    <article
      id={domId}
      className="flex h-full flex-col overflow-hidden bg-zinc-950 border border-cyan-900/60 rounded-2xl hover:border-cyan-500 transition duration-300"
    >
      {showImage && project.image && project.imageFit === "logo" && (
        <div className="h-40 w-full border-b border-zinc-800 bg-zinc-900 flex items-center justify-center overflow-hidden p-5">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-24 w-auto max-w-[62%] object-contain"
          />
        </div>
      )}

      {showImage && project.image && project.imageFit === "contain" && (
        <div className="h-56 w-full border-b border-zinc-800 bg-zinc-900 flex justify-center overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-auto max-w-[78%] object-contain"
          />
        </div>
      )}

      {showImage && project.image && project.imageFit === "soft-cover" && (
        <div className="h-40 w-full border-b border-zinc-800 bg-zinc-900 p-2 overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover object-center"
          />
        </div>
      )}

      {showImage &&
        project.image &&
        project.imageFit !== "contain" &&
        project.imageFit !== "soft-cover" &&
        project.imageFit !== "logo" && (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-40 w-full object-cover border-b border-zinc-800"
        />
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-col gap-4 border-b border-zinc-800 pb-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-cyan-400 tracking-[0.16em] text-xs font-semibold sm:tracking-[0.2em]">
            {project.category}
          </p>
          <h3 className="text-xl font-semibold mt-3 sm:text-2xl">
            {titleLink ? (
              <a
                href={titleLink}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="group inline-flex flex-wrap items-center gap-2 hover:text-cyan-400 transition"
              >
                <span>{project.title}</span>
                <span className="rounded-full border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.18em] text-gray-400 transition group-hover:border-cyan-800 group-hover:text-cyan-400">
                  {titleLinkLabel} -&gt;
                </span>
              </a>
            ) : (
              project.title
            )}
          </h3>
        </div>

        <span
          className={`w-fit text-xs border rounded-lg px-3 py-2 ${
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
          <div className="flex flex-wrap items-center justify-end gap-3 mt-auto pt-6">
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
  const filterCounts = shownProjects.reduce(
    (counts, project) => ({
      ...counts,
      [project.status]: (counts[project.status] || 0) + 1,
    }),
    { ALL: shownProjects.length },
  )
  const filteredProjects =
    activeFilter === "ALL"
      ? shownProjects
      : shownProjects.filter((project) => project.status === activeFilter)
  const groupedProjects = filteredProjects.reduce((groups, project, index) => {
    if (index % 2 === 0) {
      groups.push([project])
    } else {
      groups[groups.length - 1].push(project)
    }

    return groups
  }, [])
  const sectionSpacing = "min-h-screen snap-start pt-20 pb-8 flex items-center"
  const projectGridSpacing = preview ? "mt-8" : "mt-12"

  useEffect(() => {
    if (preview || !location.hash) {
      return
    }

    const projectId = location.hash.replace("#", "")
    const featuredProjectIds = featuredProjects.map((project) => project.id)
    const targetId = featuredProjectIds.includes(projectId)
      ? `featured-${projectId}`
      : `project-${projectId}`

    window.requestAnimationFrame(() => {
      setExpandedProject(targetId)
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    })
  }, [location.hash, preview])

  if (preview) {
    return (
    <section className={`bg-black text-white ${sectionSpacing} px-5 sm:px-8`}>
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-600 tracking-[0.28em] text-xs sm:tracking-[0.4em] sm:text-sm">
          SELECTED_WORK
        </p>

        <h2 className="text-3xl font-bold mt-4 sm:text-4xl">Selected Work</h2>

        <div className="w-20 h-px bg-cyan-400 mt-6"></div>

        <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
          Engineering projects spanning embedded systems, digital design,
          software, and AI-assisted development workflows.
        </p>

            <div className={`grid gap-5 ${projectGridSpacing} md:grid-cols-3`}>
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

            <div className="mt-6 border border-cyan-900/60 bg-zinc-950 rounded-2xl p-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-cyan-400 tracking-[0.2em] text-xs font-semibold">
                  NEXT_SIGNAL
                </p>
                <p className="text-gray-300 mt-2">
                  Interested in building something together?
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex justify-center border border-cyan-800 bg-cyan-950/40 text-cyan-300 rounded-lg px-4 py-2 text-sm hover:border-cyan-400 hover:text-white transition"
              >
                View Terminal
              </Link>
            </div>

      </div>
    </section>
    )
  }

  return (
    <div className="terminal-scrollbar h-screen overflow-y-auto snap-y snap-proximity scroll-smooth bg-black text-white md:snap-mandatory">
      <section className="min-h-screen snap-start bg-black px-5 pt-28 pb-12 flex items-center sm:px-8 sm:pt-32 sm:pb-16">
        <div className="max-w-6xl mx-auto w-full">
          <p className="text-gray-600 tracking-[0.28em] text-xs sm:tracking-[0.4em] sm:text-sm">
            PROJECT_LEDGER
          </p>

          <h2 className="text-3xl font-bold mt-4 sm:text-4xl">Project Ledger</h2>

          <div className="w-20 h-px bg-cyan-400 mt-6"></div>

          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            Engineering projects spanning embedded systems, digital design,
            software, and AI-assisted development workflows.
          </p>

          <div id="featured" className="grid gap-5 mt-8 md:grid-cols-3 md:mt-12">
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
        </div>
      </section>

      {groupedProjects.map((projectGroup) => {
        const hasExpandedProject = projectGroup.some(
          (project) => expandedProject === `project-${project.id}`,
        )

        return (
        <section
          key={projectGroup.map((project) => project.id).join("-")}
          id={`project-${projectGroup[0].id}`}
          className={`terminal-scrollbar snap-start bg-black px-5 pt-28 flex items-center overflow-y-auto sm:px-8 ${
            hasExpandedProject ? "min-h-screen pb-64 sm:pb-80" : "min-h-screen pb-28 sm:pb-40"
          }`}
        >
          <div className="max-w-6xl mx-auto w-full">
            <p className="text-gray-600 tracking-[0.28em] text-xs sm:tracking-[0.4em] sm:text-sm">
              ALL_PROJECTS
            </p>

            <div className="w-20 h-px bg-cyan-400 mt-6"></div>

            <div className="flex flex-col gap-5 mt-4 lg:flex-row lg:items-end lg:gap-8">
              <p className="text-gray-400 max-w-2xl leading-relaxed">
                A complete archive of active, completed, and planned builds
                across software, embedded systems, game development, and
                interactive design.
              </p>

              <div className="flex flex-wrap justify-start gap-3 lg:flex-shrink-0">
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
                      className={`inline-flex items-baseline gap-1.5 rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                        isActive
                          ? statusClass
                          : "border-zinc-800 bg-zinc-950 text-gray-500 hover:border-cyan-800 hover:text-cyan-400"
                      }`}
                    >
                      <span>{filter.label}</span>
                      <span className="text-xs opacity-90">
                        ({filterCounts[filter.value] || 0})
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-5 mt-8">
              {projectGroup.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    domId={`project-${project.id}`}
                    showImage={false}
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
        </section>
        )
      })}
    </div>
  )
}

export default Projects
