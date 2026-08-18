import { useEffect, useRef, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { motion } from "framer-motion"

const navItems = [
  { label: "SYSTEM_OVERVIEW", path: "/" },
  { label: "PROJECT_LEDGER", path: "/projects" },
  { label: "TERMINAL", path: "/contact" },
]

function Navbar() {
  const { pathname } = useLocation()
  const linkRefs = useRef({})
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })

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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-zinc-800 px-8 py-5 text-white flex justify-between items-center">
      <NavLink to="/" className="text-gray-400 font-bold">
        ● SYSTEM_OVERVIEW
      </NavLink>

      <div className="flex gap-10 relative">
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

      <div className="text-gray-500">● ONLINE</div>
    </nav>
  )
}

export default Navbar
