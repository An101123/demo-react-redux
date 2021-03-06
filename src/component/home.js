import React from "react"
import { Link, Outlet } from "react-router-dom"

const LayoutMenu = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  )
}

export default LayoutMenu