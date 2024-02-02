import Hero from "../sub/Hero";
import InfoBoxes from "../sub/InfoBoxes";

const Home = () => {
  return (
    <div className="flex flex-row mt-52 gap-5 items-center">
      <div className="w-1/2">
        <Hero />
      </div>
      <div className="w-1/2">
        <InfoBoxes />
      </div>
    </div>
  );
};

export default Home;
