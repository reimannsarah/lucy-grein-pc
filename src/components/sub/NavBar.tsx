import { NavLink } from "react-router-dom"
import { imageUrls } from "../../assets/imgs/imageUrls"

const NavBar = () => {
  return (
    <div>
      <NavLink to="/home">
        <img src={imageUrls.logo} alt="" />
      </NavLink>
    </div>
  )
}

export default NavBar