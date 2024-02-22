import { imageUrls } from "../../assets/imgs/imageUrls";
import InfoBoxes from "../sub/InfoBoxes";
import { pageStrings } from "../../assets/text/pageStrings";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div 
    className="bg-background my-48 mx-44 p-20 rounded-lg shadow-lg font-body text-2xl"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
    >
      <div className="grid grid-cols-8 grid-rows-3 gap-4">
        <img
          src={imageUrls.hero}
          alt=""
          className="rounded-lg shadow-lg col-start-1 col-end-5 row-start-1 row-end-6 row-span-5 z-40 border-8 border-purple"
        />
        <div className="relative bg-purple py-10 px-14 col-start-4 col-end-8 row-start-1 row-end-2 my-4 z-50 shadow-lg rounded-lg text-4xl flex items-center justify-center">
          {pageStrings.hero.title}
        </div>
        <div className="bg-purple py-10 px-14 col-start-5 col-end-9 row-start-2 row-end-4 m-4 shadow-lg rounded-lg flex items-center">
          <p className="leading-10 text-3xl">{pageStrings.hero.subtitle}</p>
        </div>
      </div>
      <div className="my-14">
        <InfoBoxes />
      </div>
      <div className="my-10 mx-auto w-3/5 shadow-lg ">
        <NavLink to="">
          <div className="bg-pink border-4 border-pink text-white hover:border-darkblue px-10 py-6 rounded-lg hover:text-darkblue">
            <p className="text-2xl">Follow me on Instagram</p>
          </div>
        </NavLink>
      </div>
    </motion.div>
  );
};

export default Home;
