import { NavLink } from "react-router-dom";
import { pageStrings } from "../../assets/text/pageStrings";
import blue from "../../assets/imgs/blue-flower.svg";
import orange from "../../assets/imgs/orange-flower.svg";
import pink from "../../assets/imgs/pink-flower.svg";

const InfoBoxes = () => {
  return (
    <div className="flex justify-center mt-10">
      <div
        className="grid"
        style={{
          gridTemplateColumns:
            "15px repeat(2, 150px) repeat(3, 15px) repeat(2, 150px) repeat(3, 15px) repeat(2, 150px) 15px",
          gridTemplateRows:
            "15px repeat(2, 150px) repeat(2, 15px) repeat(2, 150px) 15px",
          gridColumnGap: 0,
          gridRowGap: 0,
        }}
      >
        <div
          id="1"
          className="flex justify-center items-center rounded-lg col-span-3 row-span-3 bg-darkblue font-header text-white hover:z-50"
          style={{ gridArea: "2 / 2 / 5 / 5" }}
        >
          <NavLink to="/about">
            <p className="hover:text-lightblue text-4xl">
              {pageStrings.boxes.box1.bottom}
            </p>
          </NavLink>
        </div>

        <div
          id="2"
          className="flex justify-center items-center rounded-lg col-span-3 row-span-3 bg-lightblue font-body hover:-z-50"
          style={{ gridArea: "1 / 1 / 4 / 4" }}
        >
          <p className="p-8">{pageStrings.boxes.box1.top}</p>
        </div>

        <div
          id="3"
          className="flex justify-center items-center rounded-lg col-span-3 row-span-3 bg-darkblue font-header text-white hover:z-50"
          style={{ gridArea: "6 / 7 / 9 / 10" }}
        >
          <NavLink to="/services">
            <p className="hover:text-lightblue text-4xl">{pageStrings.boxes.box2.bottom}</p>
          </NavLink>
        </div>

        <div
          id="4"
          className="flex justify-center items-center rounded-lg col-span-3 row-span-3 bg-lightblue font-body hover:-z-50"
          style={{ gridArea: "5 / 6 / 8 / 9" }}
        >
          <p className="p-8">{pageStrings.boxes.box2.top}</p>
        </div>

        <div
          id="5"
          className="flex justify-center items-center rounded-lg col-span-3 row-span-3 bg-darkblue font-header text-white hover:z-50"
          style={{ gridArea: "2 / 12 / 5 / 15" }}
        >
          <NavLink to="/it">
            <p className="hover:text-lightblue text-4xl">{pageStrings.boxes.box3.bottom}</p>
          </NavLink>
        </div>

        <div
          id="6"
          className="flex justify-center items-center rounded-lg col-span-3 row-span-3 bg-lightblue font-body hover:-z-50"
          style={{ gridArea: "1 / 11 / 4 / 14" }}
        >
          <p className="p-8">{pageStrings.boxes.box3.top}</p>
        </div>

        <div
          id="7"
          className="col-span-5 row-span-3 h-[250px] w-250px"
          style={{ gridArea: "6 / 2 / 8 / 4" }}
        >
          <img src={blue} alt="" />
        </div>
        <div
          id="8"
          className="col-span-5 row-span-4 h-[250px] w-250px b"
          style={{ gridArea: "2 / 7 / 5 / 9" }}
        >
          <img src={pink} alt="" />
        </div>
        <div
          id="9"
          className="col-span-5 row-span-3 h-[250px] w-250px b"
          style={{ gridArea: "6 / 12 / 12 / 14" }}
        >
          <img src={orange} alt="" />
        </div>
      </div>
    </div>
  );
};

export default InfoBoxes;
