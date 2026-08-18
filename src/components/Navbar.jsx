import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-zinc-800 px-8 py-5 text-white flex justify-between items-center">

      <NavLink to="/" className="text-gray-400 font-bold">
        ● SYSTEM_OVERVIEW
      </NavLink>

      <div className="flex gap-10 relative">

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `relative pb-2 ${
              isActive ? "text-cyan-400" : "text-gray-400"
            }`
          }
        >
          {({ isActive }) => (
            <>
              SYSTEM_OVERVIEW

              {isActive && (
                <div
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-cyan-400"
                />
              )}
            </>
          )}
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `relative pb-2 ${
              isActive ? "text-cyan-400" : "text-gray-400"
            }`
          }
        >
          {({ isActive }) => (
            <>
              PROJECT_LEDGER

              {isActive && (
                <div
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-cyan-400"
                />
              )}
            </>
          )}
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative pb-2 ${
              isActive ? "text-cyan-400" : "text-gray-400"
            }`
          }
        >
          {({ isActive }) => (
            <>
              TERMINAL

              {isActive && (
                <div
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-cyan-400"
                />
              )}
            </>
          )}
        </NavLink>

      </div>

      <div className="text-gray-500">
        ● ONLINE
      </div>

    </nav>
  )
}

export default Navbar
