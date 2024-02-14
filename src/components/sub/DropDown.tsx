import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"

type DropDownProps = { 
  isVisible: boolean,
  route1: string | undefined,
  name1: string | undefined,
  route2?: string | undefined,
  name2?: string | undefined,
  route3?: string | undefined,
  name3?: string | undefined
}

const DropDown = (props: DropDownProps) => {
  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: props.isVisible ? "0%" : "-50%", opacity: props.isVisible ? 1 : 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="min-w-full px-4 flex flex-col gap-3 bg-lightgreen rounded-b-lg py-5 h-[300px] justify-end"
    >
      {props.route1 && props.name1 && <NavLink to={props.route1}><p className="hover:text-white">{props.name1}</p></NavLink>}
      {props.route2 && props.name2 && <NavLink to={props.route2}><p className="hover:text-white">{props.name2}</p></NavLink>}
      {props.route3 && props.name3 && <NavLink to={props.route3}><p className="hover:text-white">{props.name3}</p></NavLink>}
    </motion.div>
  )
}

export default DropDown;