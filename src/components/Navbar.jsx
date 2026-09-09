import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { NavLink, useLocation } from "react-router-dom"

const navItems = [
  { label: "SYSTEM_OVERVIEW", path: "/" },
  { label: "PROJECT_LEDGER", path: "/projects" },
  { label: "TERMINAL", path: "/contact" },
]

function isWorkHours() {
  const now = new Date()
  const day = now.getDay()
  const hour = now.getHours()

  return day >= 1 && day <= 5 && hour >= 9 && hour < 17
}

function Navbar() {
  const { pathname } = useLocation()
  const linkRefs = useRef({})
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })
  const [available, setAvailable] = useState(isWorkHours)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const activePath = pathname === "/" ? "/" : `/${pathname.split("/")[1]}`
    const activeLink = linkRefs.current[activePath]

    if (activeLink) {
      setIndicator({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      })
    }
  }, [pathname])

  useEffect(() => {
    const statusTimer = window.setInterval(() => {
      setAvailable(isWorkHours())
    }, 60000)

    return () => window.clearInterval(statusTimer)
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-zinc-800 px-5 py-4 text-white md:px-8 md:py-5">
      <div className="flex items-center justify-between">
      <NavLink
        to="/"
        className="group flex items-center gap-2 font-bold text-gray-400 transition-colors duration-300 hover:text-cyan-400"
      >
        <img
          src="/brand/novablooma-flower-sprite.png"
          alt="Novablooma flower logo"
          className="h-8 w-8 object-contain transition duration-300 group-hover:scale-110"
        />
        <span className="tracking-[0.28em] text-sm">NOVABLOOMA</span>
      </NavLink>

      <div className="relative hidden gap-10 md:flex">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            ref={(element) => {
              linkRefs.current[item.path] = element
            }}
            className={({ isActive }) =>
              `relative pb-2 transition-colors duration-300 ${
                isActive ? "text-cyan-400" : "text-gray-400"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}

        <motion.div
          className="absolute -bottom-1 h-[2px] bg-cyan-400"
          animate={indicator}
          transition={{ type: "spring", stiffness: 420, damping: 34 }}
        />
      </div>

      <div className="hidden text-gray-500 md:block">
        <span
          className={`inline-block h-2 w-2 rounded-full align-middle ${
            available ? "bg-green-500" : "bg-red-500"
          }`}
        ></span>{" "}
        ONLINE
      </div>

      <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
        className="grid h-10 w-10 place-items-center rounded-lg border border-zinc-800 bg-zinc-950 text-cyan-400 transition hover:border-cyan-700 md:hidden"
      >
        <span className="text-xl leading-none">{menuOpen ? "x" : "+"}</span>
      </button>
      </div>

      {menuOpen && (
        <div className="mt-4 border-t border-zinc-800 pt-4 md:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg border px-4 py-3 text-sm font-semibold tracking-[0.18em] transition ${
                    isActive
                      ? "border-cyan-800 bg-cyan-950/40 text-cyan-300"
                      : "border-zinc-800 bg-zinc-950 text-gray-400"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="mt-4 text-sm text-gray-500">
            <span
              className={`inline-block h-2 w-2 rounded-full align-middle ${
                available ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>{" "}
            ONLINE
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
