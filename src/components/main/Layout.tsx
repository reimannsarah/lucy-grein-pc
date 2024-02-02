import { Outlet } from "react-router-dom"
import NavBar from "../sub/NavBar"

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Layout