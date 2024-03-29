import { Link, useMatch, useResolvedPath, Outlet } from "react-router-dom"
import "../styling/Navbar.css"

export default function Navbar() {
  return (
    <div>
      <div className="navigation-bar">
        <nav className="nav">
            <div className="nav-option"> <Link to="/home" className="site-title"> Home </Link> </div>
            <div className="nav-option"> <CustomLink to="/account">Account</CustomLink> </div>
            <div className="nav-option"> <CustomLink to="/leaderboard">Leaderboard</CustomLink> </div>
            <div className="nav-option"> <CustomLink to="/picklineup">Pick Lineup</CustomLink> </div>
            <div className="nav-option"> <CustomLink to="/manageleague">Manage League</CustomLink> </div>
        </nav>
      </div>
       <Outlet>
       </Outlet>
    </div>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}