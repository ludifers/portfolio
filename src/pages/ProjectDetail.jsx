import { useEffect, useRef, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { projects } from "../data/projects"

const statusStyles = {
  COMPLETE: "border-green-800/70 bg-green-500/10 text-green-400",
  IN_PROGRESS: "border-yellow-800/70 bg-yellow-500/10 text-yellow-400",
  PLANNED: "border-purple-800/70 bg-purple-500/10 text-purple-400",
}

function ProjectDetail() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const titleMenuRef = useRef(null)
  const [titleMenuOpen, setTitleMenuOpen] = useState(false)
  const projectIndex = projects.findIndex((item) => item.id === projectId)

  useEffect(() => {
    function handleOutsideClick(event) {
      if (!titleMenuRef.current?.contains(event.target)) {
        setTitleMenuOpen(false)
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setTitleMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)
    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  if (projectIndex === -1) {
    return <Navigate to="/projects" replace />
  }

  const project = projects[projectIndex]
  const imagePositionClass = project.imagePosition || "object-center"
  const imageMode =
    project.imageFit === "contain" || project.imageFit === "logo"
      ? "object-contain p-6"
      : "object-cover"

  return (
    <main className="terminal-scrollbar min-h-screen overflow-y-auto bg-black text-white">
      <div className="mx-auto max-w-6xl px-5 pt-28 pb-16 sm:px-8 sm:pt-32">
        <section className="border-b border-zinc-800 py-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
            <div>
              <div ref={titleMenuRef} className="relative inline-block max-w-full">
                <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
                  <button
                    type="button"
                    onClick={() => setTitleMenuOpen((open) => !open)}
                    className="group inline-flex max-w-full items-center gap-3 rounded-lg border border-transparent bg-black py-1 pr-3 text-left outline-none transition hover:border-cyan-900 focus-visible:border-cyan-400"
                    aria-expanded={titleMenuOpen}
                    aria-haspopup="listbox"
                    aria-label="Choose a project from the title"
                  >
                    <span className="min-w-0 break-words">{project.title}</span>
                    <span className="shrink-0 rounded-md border border-cyan-800/70 bg-cyan-500/10 px-2 py-1 text-sm font-semibold leading-none text-cyan-400 transition group-hover:border-cyan-500 group-hover:text-cyan-300">
                      v
                    </span>
                  </button>
                </h1>

                {titleMenuOpen && (
                  <div
                    className="absolute left-0 z-20 mt-3 w-[min(22rem,calc(100vw-2.5rem))] overflow-hidden rounded-lg border border-cyan-900/70 bg-zinc-950 shadow-2xl shadow-black/50"
                    role="listbox"
                    aria-label="Project pages"
                  >
                    {projects.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setTitleMenuOpen(false)
                          navigate(`/projects/${item.id}`)
                        }}
                        className={`block w-full px-3 py-2.5 text-left text-sm transition ${
                          item.id === project.id
                            ? "bg-cyan-950/50 text-cyan-300"
                            : "text-gray-300 hover:bg-zinc-900 hover:text-cyan-300"
                        }`}
                        role="option"
                        aria-selected={item.id === project.id}
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <p className="text-xs font-semibold tracking-[0.28em] text-cyan-400 sm:tracking-[0.4em]">
                  {project.category}
                </p>
                <span
                  className={`inline-flex w-fit rounded-lg border px-3 py-2 text-xs ${
                    statusStyles[project.status] ||
                    "border-zinc-800 bg-zinc-900 text-gray-500"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
                {project.summary}
              </p>
            </div>

            {project.links.demo && (
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-cyan-800 bg-cyan-950/40 px-4 py-3 text-sm font-semibold text-cyan-300 transition hover:border-cyan-400 hover:text-white"
                >
                  Live Demo
                </a>
              </div>
            )}
          </div>
        </section>

        {project.image && (
          <section className="border-b border-zinc-800 py-8">
            <div
              className={`overflow-hidden rounded-lg border border-zinc-800 ${
                project.imageFit === "logo" ? "bg-white" : "bg-zinc-950"
              }`}
            >
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className={`h-[18rem] w-full sm:h-[26rem] ${imageMode} ${imagePositionClass}`}
              />
            </div>
          </section>
        )}

        <section className="grid gap-8 border-b border-zinc-800 py-10 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-400 sm:tracking-[0.4em]">
              OVERVIEW
            </p>
            <div className="mt-5 h-px w-20 bg-cyan-400"></div>
          </div>
          <div>
            <p className="max-w-3xl text-xl leading-relaxed text-gray-300">
              {project.details}
            </p>
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-fit rounded-lg border border-cyan-800/70 bg-cyan-500/10 px-3 py-2 text-xs text-cyan-400 transition hover:border-cyan-500 hover:text-cyan-300"
                aria-label={`Open GitHub repository for ${project.title}`}
              >
                GITHUB
              </a>
            )}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-800 py-4">
          {[
            ["PROBLEM", project.problem],
            ["SOLUTION", project.solution],
            ["MY_ROLE", project.role],
          ].map(([label, text]) => (
            <article
              key={label}
              className="grid gap-4 border-b border-zinc-900 py-7 last:border-b-0 lg:grid-cols-[18rem_minmax(0,1fr)]"
            >
              <p className="text-xs font-semibold tracking-[0.24em] text-gray-600">
                {label}
              </p>
              <p className="max-w-3xl leading-relaxed text-gray-400">{text}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-8 border-b border-zinc-800 py-10 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-400 sm:tracking-[0.4em]">
              FEATURES
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-gray-300"
              >
                {feature}
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}

export default ProjectDetail
