import { Link } from "react-router-dom"

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>Bookmark App</div>
        <div>Test</div>
      </Link>
    </nav>
  )
}

export default Header