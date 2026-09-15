import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
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
  dense = false,
  domId,
  showImage = true,
}) {
  const navigate = useNavigate()
  const hasDemoLink = Boolean(project.links?.demo)
  const imagePositionClass = project.imagePosition || "object-center"
  const openProject = () => navigate(`/projects/${project.id}`)

  return (
    <article
      id={domId}
      role="link"
      tabIndex={0}
      onClick={openProject}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          openProject()
        }
      }}
      className="group flex h-full cursor-pointer flex-col overflow-hidden bg-zinc-950 border border-cyan-900/60 rounded-2xl outline-none transition duration-300 hover:border-cyan-500 focus-visible:border-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400/40"
    >
      {showImage && project.image && project.imageFit === "logo" && (
        <div className="w-full aspect-[226/82] border-b border-zinc-800 bg-white overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className={`h-full w-full object-cover ${imagePositionClass}`}
          />
        </div>
      )}

      {showImage && project.image && project.imageFit === "featured-banner" && (
        <div className="w-full aspect-[226/82] border-b border-zinc-800 bg-zinc-900 overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className={`h-full w-full object-cover ${imagePositionClass}`}
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
        project.imageFit !== "featured-banner" &&
        project.imageFit !== "logo" && (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-40 w-full object-cover border-b border-zinc-800"
        />
      )}

      <div className={`flex flex-1 flex-col ${dense ? "p-4" : "p-5 sm:p-6"}`}>
        <div
          className={`flex flex-col border-b border-zinc-800 sm:flex-row sm:items-start sm:justify-between ${
            dense ? "gap-3 pb-3" : "gap-4 pb-4"
          }`}
        >
        <div>
          <p
            className={`text-cyan-400 text-xs font-semibold ${
              dense ? "tracking-[0.12em]" : "tracking-[0.16em] sm:tracking-[0.2em]"
            }`}
          >
            {project.category}
          </p>
          <h3
            className={`font-semibold transition group-hover:text-cyan-300 ${
              dense ? "mt-2 text-lg sm:text-xl" : "mt-3 text-xl sm:text-2xl"
            }`}
          >
            {project.title}
          </h3>
        </div>

        <span
          className={`w-fit text-xs border rounded-lg ${dense ? "px-2.5 py-1.5" : "px-3 py-2"} ${
            statusStyles[project.status] ||
            "border-zinc-800 bg-zinc-900 text-gray-500"
          }`}
        >
          {project.status}
        </span>
        </div>

        <p
          className={`text-gray-400 leading-relaxed ${
            dense ? "mt-4 text-sm" : "mt-5"
          }`}
        >
          {project.summary}
        </p>

        {!compact && (
          <p
            className={`text-gray-500 leading-relaxed ${
              dense ? "mt-3 text-sm" : "mt-4"
            }`}
          >
            {project.details}
          </p>
        )}

        <div className={`flex flex-wrap gap-2 ${dense ? "mt-4" : "mt-6"}`}>
          {project.stack.map((tech) => (
            <span
              key={tech}
              className={`bg-zinc-900 border border-zinc-800 rounded-lg text-gray-300 ${
                dense ? "px-2.5 py-1.5 text-xs" : "px-3 py-2 text-sm"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {!compact && (
          <div className={`flex flex-wrap items-center justify-end gap-3 mt-auto ${dense ? "pt-4" : "pt-6"}`}>
            {hasDemoLink && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
                onKeyDown={(event) => event.stopPropagation()}
                className={`border border-zinc-800 rounded-xl text-gray-300 hover:text-cyan-400 hover:border-cyan-800 transition ${
                  dense ? "px-3 py-1.5 text-sm" : "px-4 py-2"
                }`}
              >
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

function Projects({ preview = false }) {
  const location = useLocation()
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
    if (index % 4 === 0) {
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
                <div
                  key={project.id}
                  className="block"
                >
                  <ProjectCard project={project} compact />
                </div>
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
                />
              ))}
            </div>
        </div>
      </section>

      {groupedProjects.map((projectGroup) => {
        return (
        <section
          key={projectGroup.map((project) => project.id).join("-")}
          id={`project-${projectGroup[0].id}`}
          className="terminal-scrollbar min-h-screen snap-start bg-black px-5 pt-28 pb-28 flex items-center overflow-y-auto sm:px-8 sm:pb-40"
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

            <div className="grid gap-5 mt-8 md:grid-cols-2">
              {projectGroup.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    domId={`project-${project.id}`}
                    showImage={false}
                    dense
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
