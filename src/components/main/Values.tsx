import { imageUrls } from "../../assets/imgs/imageUrls";
import { pageStrings } from "../../assets/text/pageStrings";
import Accordion from "../sub/Accordion";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion"

const Values = () => {
  return (
    <motion.div 
    variants={fadeIn(0.5)}
    initial="hidden"
    animate="visible"
    className="bg-background my-56 mx-44 p-20 rounded-lg shadow-lg font-body"
    >
      <div className="flex flex-row items-center justify-evenly">
        <div>
          <h1 className="text-orange text-4xl text-left mb-10">{pageStrings.values.title}</h1>
          <p className="leading-10 w-4/5 text-left text-xl text-gray">{pageStrings.values.p1}</p>
        </div>
        <img src={imageUrls.beach} alt="" className="w-2/5 rounded-full border-[20px] border-pink"/>
      </div>
      <div className="flex flex-row gap-10 mt-10">
        <div>
          <h1 className="text-3xl text-coolPurple">{pageStrings.values.values_title}</h1>
          <div className="bg-purple p-10 m-10 shadow-lg">
            {Object.entries(pageStrings.values.core_values).map(
              ([key, value], index) => {
                return (
                  <div key={index}>
                    <Accordion title={key} description={value} />
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div>
          <h1 className="text-3xl text-coolPurple">{pageStrings.values.philisophies_title}</h1>
          <div className="bg-purple p-10 m-10 shadow-lg">
            {Object.entries(pageStrings.philisophies).map(
              ([key, value], index) => {
                return (
                  <div key={index}>
                    <Accordion title={key} description={value} />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Values;
