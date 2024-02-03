import { pageStrings } from "../../assets/text/pageStrings";

const InfoBoxes = () => {
  return (
    <div className="">
      <div className="grid" style={{ gridTemplateColumns: '15px repeat(2, 125px) repeat(3, 15px) repeat(2, 125px) 15px', gridTemplateRows: '15px repeat(2, 125px) repeat(2, 15px) repeat(2, 125px) 15px repeat(2, 125px) 15px', gridColumnGap: 0, gridRowGap: 0 }}>
      <div id="1" className="flex justify-center items-center rounded-lg col-span-3 row-span-3 bg-darkBlue font-header" style={{ gridArea: '2 / 2 / 5 / 5' }}>{pageStrings.boxes.box1.bottom}</div>

      <div id="2" className="flex justify-center items-center rounded-lg col-span-3 row-span-3 bg-lightBlue font-body hover:-z-50" style={{ gridArea: '1 / 1 / 4 / 4' }}>{pageStrings.boxes.box1.top}</div>

      <div id="3" className="flex justify-center items-center rounded-lg col-span-3 row-span-3 bg-darkBlue font-header" style={{ gridArea: '6 / 7 / 9 / 10' }}>{pageStrings.boxes.box2.bottom}</div>

      <div id="4" className="flex justify-center items-center rounded-lg col-span-3 row-span-3 bg-lightBlue font-body hover:-z-50" style={{ gridArea: '5 / 6 / 8 / 9' }}>{pageStrings.boxes.box2.top}</div>

      <div id="5" className="flex justify-center items-center rounded-lg col-span-3 row-span-3 bg-darkBlue font-header" style={{ gridArea: '9 / 2 / 12 / 5' }}>{pageStrings.boxes.box3.bottom}</div>

      <div id="6" className="flex justify-center items-center rounded-lg col-span-3 row-span-3 bg-lightBlue font-body hover:-z-50" style={{ gridArea: '8 / 1 / 11 / 4' }}>{pageStrings.boxes.box3.top}</div>

      <div id="7" className="col-span-5 row-span-3" style={{ gridArea: '5 / 1 / 8 / 6' }}></div>
      <div id="8" className="col-span-5 row-span-4" style={{ gridArea: '1 / 5 / 5 / 10' }}></div>
      <div id="9" className="col-span-5 row-span-3" style={{ gridArea: '9 / 5 / 12 / 10' }}></div>
    </div>
    </div>
  );
};

export default InfoBoxes;