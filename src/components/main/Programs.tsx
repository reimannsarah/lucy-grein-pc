import { pageStrings } from "../../assets/text/pageStrings";
import { imageUrls } from "../../assets/imgs/imageUrls";
import ProgramCard from "../sub/ProgramCard";

const Programs = () => {
  return (
    <div className="bg-background my-56 mx-44 p-20 rounded-lg shadow-lg font-body">
      <div className="flex flex-row items-center justify-between">
        <img src={imageUrls.la} alt="" className="w-2/5 h-2/5 rounded-full border-[20px] border-lightgreen" />
        <div>
          <h1 className="4xl text-orange">{pageStrings.services.header}</h1>
          <p>{pageStrings.services.p1}</p>
        </div>
      </div>
      <div>
        <ProgramCard />
      </div>
    </div>
  );
};

export default Programs;
