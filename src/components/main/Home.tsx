import { imageUrls } from "../../assets/imgs/imageUrls";
import InfoBoxes from "../sub/InfoBoxes";
import { pageStrings } from "../../assets/text/pageStrings";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-background my-56 mx-44 p-20 rounded-lg shadow-lg font-body text-2xl">
      <div className="grid grid-cols-8 grid-rows-5 gap-4">
        <img
          src={imageUrls.hero}
          alt=""
          className="rounded-lg shadow-lg col-start-1 col-end-5 row-start-1 row-end-6 row-span-5 z-40 border-8 border-pink"
        />
        <div className="relative bg-purple py-10 px-14 col-start-4 col-end-8 row-start-1 row-end-2 my-4 z-50 shadow-lg rounded-lg text-4xl">
          {pageStrings.hero.title}
        </div>
        <div className="bg-purple col-start-5 col-end-9 m-10 flex justify-center items-center rounded-lg border-4 hover:border-coolPurple">
          <NavLink to="">
            <p className="hover:text-coolPurple text-xl">Follow me on Instagram</p>
          </NavLink>
        </div>
        <div className="bg-purple py-10 px-14 col-start-5 col-end-9 row-start-2 row-end-4 m-4 shadow-lg rounded-lg border-4 flex items-center">
          <p className="leading-10 text-3xl">{pageStrings.hero.subtitle}</p>
        </div>
      </div>
      <InfoBoxes />
    </div>
  );
};

export default Home;
